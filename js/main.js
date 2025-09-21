// Main JavaScript file for AI Youth Wellness Companion

class WellnessApp {
    constructor() {
        this.currentUser = null;
        this.moodData = [];
        this.init();
    }

    init() {
        this.setupNavigation();
        this.setupScrollEffects();
        this.loadUserData();
        this.setupFormHandlers();
    }

    // Navigation functionality
    setupNavigation() {
        const navToggle = document.querySelector('.nav-toggle');
        const navMenu = document.querySelector('.nav-menu');

        if (navToggle && navMenu) {
            navToggle.addEventListener('click', () => {
                navMenu.classList.toggle('active');
            });
        }

        // Close mobile menu when clicking outside
        document.addEventListener('click', (e) => {
            if (!e.target.closest('.navbar') && navMenu) {
                navMenu.classList.remove('active');
            }
        });

        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
    }

    // Scroll effects
    setupScrollEffects() {
        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const navbar = document.querySelector('.navbar');
            if (navbar) {
                if (window.scrollY > 100) {
                    navbar.style.background = 'rgba(255, 255, 255, 0.98)';
                    navbar.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
                } else {
                    navbar.style.background = 'rgba(255, 255, 255, 0.95)';
                    navbar.style.boxShadow = 'none';
                }
            }
        });

        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe elements for animation
        document.querySelectorAll('.feature-card, .action-card, .card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }

    // Load user data from localStorage
    loadUserData() {
        const userData = localStorage.getItem('wellnessUserData');
        if (userData) {
            this.currentUser = JSON.parse(userData);
        }

        const moodData = localStorage.getItem('wellnessMoodData');
        if (moodData) {
            this.moodData = JSON.parse(moodData);
        }
    }

    // Save user data to localStorage
    saveUserData() {
        if (this.currentUser) {
            localStorage.setItem('wellnessUserData', JSON.stringify(this.currentUser));
        }
        localStorage.setItem('wellnessMoodData', JSON.stringify(this.moodData));
    }

    // Form handlers
    setupFormHandlers() {
        // Mood tracking form
        const moodForm = document.getElementById('moodForm');
        if (moodForm) {
            this.setupMoodTracking();
        }

        // Contact form
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            this.setupContactForm();
        }

        // AI suggestions form
        const aiForm = document.getElementById('aiSuggestionsForm');
        if (aiForm) {
            this.setupAISuggestions();
        }
    }

    // Mood tracking functionality
    setupMoodTracking() {
        const moodButtons = document.querySelectorAll('.mood-btn');
        const moodForm = document.getElementById('moodForm');
        let selectedMood = null;

        moodButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                moodButtons.forEach(b => b.classList.remove('selected'));
                btn.classList.add('selected');
                selectedMood = btn.dataset.mood;
            });
        });

        if (moodForm) {
            moodForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.submitMoodEntry(selectedMood, moodForm);
            });
        }
    }

    // Submit mood entry
    async submitMoodEntry(mood, form) {
        if (!mood) {
            this.showAlert('Please select a mood first.', 'warning');
            return;
        }

        const formData = new FormData(form);
        const entry = {
            id: Date.now(),
            mood: mood,
            energy: formData.get('energy'),
            sleep: formData.get('sleep'),
            stress: formData.get('stress'),
            notes: formData.get('notes'),
            timestamp: new Date().toISOString(),
            date: new Date().toLocaleDateString()
        };

        // Add to local storage
        this.moodData.push(entry);
        this.saveUserData();

        // Submit to Google Forms (you'll need to replace with your actual form URL)
        try {
            await this.submitToGoogleForms(entry);
            this.showAlert('Mood entry saved successfully!', 'success');
            form.reset();
            document.querySelectorAll('.mood-btn').forEach(btn => btn.classList.remove('selected'));
        } catch (error) {
            console.error('Error submitting mood:', error);
            this.showAlert('Mood saved locally. Will sync when online.', 'warning');
        }
    }

    // Submit to Google Forms
    async submitToGoogleForms(entry) {
        // Replace with your actual Google Forms URL and field IDs
        const formUrl = 'https://docs.google.com/forms/d/e/YOUR_FORM_ID/formResponse';
        const formData = new FormData();
        
        // Map form fields to Google Forms entry IDs (you'll need to update these)
        formData.append('entry.123456789', entry.mood); // Mood field
        formData.append('entry.987654321', entry.energy); // Energy field
        formData.append('entry.456789123', entry.sleep); // Sleep field
        formData.append('entry.789123456', entry.stress); // Stress field
        formData.append('entry.321654987', entry.notes); // Notes field
        formData.append('entry.654987321', entry.timestamp); // Timestamp field

        const response = await fetch(formUrl, {
            method: 'POST',
            body: formData,
            mode: 'no-cors' // Required for Google Forms
        });

        return response;
    }

    // Contact form setup
    setupContactForm() {
        const contactForm = document.getElementById('contactForm');
        if (contactForm) {
            contactForm.addEventListener('submit', async (e) => {
                e.preventDefault();
                
                const formData = new FormData(contactForm);
                const contactData = {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    subject: formData.get('subject'),
                    message: formData.get('message'),
                    timestamp: new Date().toISOString()
                };

                try {
                    await this.submitContactForm(contactData);
                    this.showAlert('Message sent successfully! We\'ll get back to you soon.', 'success');
                    contactForm.reset();
                } catch (error) {
                    console.error('Error sending message:', error);
                    this.showAlert('Error sending message. Please try again.', 'error');
                }
            });
        }
    }

    // Submit contact form via Google Apps Script
    async submitContactForm(data) {
        // Replace with your Google Apps Script web app URL
        const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
        
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'submitContact',
                data: data
            })
        });

        if (!response.ok) {
            throw new Error('Failed to submit contact form');
        }

        return response.json();
    }

    // AI Suggestions setup
    setupAISuggestions() {
        const aiForm = document.getElementById('aiSuggestionsForm');
        const getSuggestionsBtn = document.getElementById('getSuggestions');
        
        if (getSuggestionsBtn) {
            getSuggestionsBtn.addEventListener('click', async () => {
                const mood = document.getElementById('currentMood')?.value;
                const concern = document.getElementById('concern')?.value;
                
                if (!mood || !concern) {
                    this.showAlert('Please fill in all fields.', 'warning');
                    return;
                }

                getSuggestionsBtn.disabled = true;
                getSuggestionsBtn.innerHTML = '<span class="loading"></span> Getting suggestions...';

                try {
                    const suggestions = await this.getAISuggestions(mood, concern);
                    this.displaySuggestions(suggestions);
                } catch (error) {
                    console.error('Error getting AI suggestions:', error);
                    this.showAlert('Error getting suggestions. Please try again.', 'error');
                } finally {
                    getSuggestionsBtn.disabled = false;
                    getSuggestionsBtn.innerHTML = 'Get AI Suggestions';
                }
            });
        }
    }

    // Get AI suggestions from Vertex AI via Google Apps Script
    async getAISuggestions(mood, concern) {
        // Replace with your Google Apps Script web app URL
        const scriptUrl = 'https://script.google.com/macros/s/YOUR_SCRIPT_ID/exec';
        
        const response = await fetch(scriptUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                action: 'getAISuggestions',
                mood: mood,
                concern: concern,
                recentMoods: this.moodData.slice(-7) // Send last 7 mood entries for context
            })
        });

        if (!response.ok) {
            throw new Error('Failed to get AI suggestions');
        }

        const result = await response.json();
        return result.suggestions;
    }

    // Display AI suggestions
    displaySuggestions(suggestions) {
        const container = document.getElementById('suggestionsContainer');
        if (!container) return;

        container.innerHTML = '';

        if (suggestions && suggestions.length > 0) {
            suggestions.forEach((suggestion, index) => {
                const card = document.createElement('div');
                card.className = 'card suggestion-card';
                card.innerHTML = `
                    <div class="card-body">
                        <h4 class="card-title">${suggestion.title}</h4>
                        <p>${suggestion.description}</p>
                        <div class="suggestion-tags">
                            ${suggestion.tags ? suggestion.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : ''}
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        } else {
            container.innerHTML = '<p>No suggestions available at the moment. Please try again later.</p>';
        }
    }

    // Show alert message
    showAlert(message, type = 'info') {
        const alertContainer = document.getElementById('alertContainer') || document.body;
        const alert = document.createElement('div');
        alert.className = `alert alert-${type}`;
        alert.innerHTML = message;
        
        // Insert at the top of the container
        alertContainer.insertBefore(alert, alertContainer.firstChild);
        
        // Auto-remove after 5 seconds
        setTimeout(() => {
            if (alert.parentNode) {
                alert.parentNode.removeChild(alert);
            }
        }, 5000);
    }

    // Get mood statistics for dashboard
    getMoodStats() {
        if (this.moodData.length === 0) {
            return {
                totalEntries: 0,
                averageMood: 0,
                streakDays: 0,
                moodTrend: 'No data'
            };
        }

        const moodValues = {
            'very-happy': 5,
            'happy': 4,
            'neutral': 3,
            'sad': 2,
            'very-sad': 1
        };

        const totalEntries = this.moodData.length;
        const averageMood = this.moodData.reduce((sum, entry) => 
            sum + (moodValues[entry.mood] || 3), 0) / totalEntries;

        // Calculate streak (consecutive days with entries)
        const today = new Date().toLocaleDateString();
        let streakDays = 0;
        const sortedEntries = this.moodData.sort((a, b) => new Date(b.timestamp) - new Date(a.timestamp));
        
        for (let i = 0; i < sortedEntries.length; i++) {
            const entryDate = new Date(sortedEntries[i].timestamp).toLocaleDateString();
            const expectedDate = new Date();
            expectedDate.setDate(expectedDate.getDate() - i);
            
            if (entryDate === expectedDate.toLocaleDateString()) {
                streakDays++;
            } else {
                break;
            }
        }

        // Calculate trend
        const recent = this.moodData.slice(-7);
        const older = this.moodData.slice(-14, -7);
        
        let moodTrend = 'Stable';
        if (recent.length >= 3 && older.length >= 3) {
            const recentAvg = recent.reduce((sum, entry) => sum + (moodValues[entry.mood] || 3), 0) / recent.length;
            const olderAvg = older.reduce((sum, entry) => sum + (moodValues[entry.mood] || 3), 0) / older.length;
            
            if (recentAvg > olderAvg + 0.5) {
                moodTrend = 'Improving';
            } else if (recentAvg < olderAvg - 0.5) {
                moodTrend = 'Declining';
            }
        }

        return {
            totalEntries,
            averageMood: averageMood.toFixed(1),
            streakDays,
            moodTrend
        };
    }

    // Update dashboard
    updateDashboard() {
        const stats = this.getMoodStats();
        
        const elements = {
            totalEntries: document.getElementById('totalEntries'),
            averageMood: document.getElementById('averageMood'),
            streakDays: document.getElementById('streakDays'),
            moodTrend: document.getElementById('moodTrend')
        };

        Object.keys(elements).forEach(key => {
            if (elements[key]) {
                elements[key].textContent = stats[key];
            }
        });
    }

    // Export mood data
    exportMoodData() {
        if (this.moodData.length === 0) {
            this.showAlert('No mood data to export.', 'warning');
            return;
        }

        const csv = this.convertToCSV(this.moodData);
        const blob = new Blob([csv], { type: 'text/csv' });
        const url = window.URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = `mood-data-${new Date().toISOString().split('T')[0]}.csv`;
        document.body.appendChild(a);
        a.click();
        window.URL.revokeObjectURL(url);
        document.body.removeChild(a);
    }

    // Convert data to CSV
    convertToCSV(data) {
        const headers = ['Date', 'Mood', 'Energy', 'Sleep', 'Stress', 'Notes'];
        const csvContent = [
            headers.join(','),
            ...data.map(entry => [
                entry.date,
                entry.mood,
                entry.energy,
                entry.sleep,
                entry.stress,
                `"${entry.notes || ''}"` // Wrap notes in quotes to handle commas
            ].join(','))
        ].join('\n');

        return csvContent;
    }
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.wellnessApp = new WellnessApp();
});

// Utility functions
function formatDate(dateString) {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    });
}

function getTimeAgo(dateString) {
    const now = new Date();
    const date = new Date(dateString);
    const diffTime = Math.abs(now - date);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return 'Yesterday';
    if (diffDays < 7) return `${diffDays} days ago`;
    if (diffDays < 30) return `${Math.floor(diffDays / 7)} weeks ago`;
    return `${Math.floor(diffDays / 30)} months ago`;
}

// Service Worker registration for offline functionality
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(registration => {
                console.log('SW registered: ', registration);
            })
            .catch(registrationError => {
                console.log('SW registration failed: ', registrationError);
            });
    });
}