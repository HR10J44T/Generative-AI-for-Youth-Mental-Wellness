/**
 * Google Apps Script Backend for AI Youth Wellness Companion
 * This script handles all backend operations including:
 * - Mood data processing and storage
 * - AI suggestion generation via Vertex AI
 * - Email notifications and calendar integration
 * - Data synchronization with Google Sheets
 * - Contact form submissions
 */

// Configuration Constants
const CONFIG = {
  // Google Sheets IDs (replace with your actual sheet IDs)
  MOOD_SHEET_ID: 'YOUR_MOOD_TRACKING_SHEET_ID',
  CONTACT_SHEET_ID: 'YOUR_CONTACT_SUBMISSIONS_SHEET_ID',
  
  // Vertex AI Configuration
  VERTEX_AI_PROJECT_ID: 'YOUR_GOOGLE_CLOUD_PROJECT_ID',
  VERTEX_AI_LOCATION: 'us-central1',
  VERTEX_AI_MODEL: 'text-bison@001',
  
  // Email Templates
  EMAIL_TEMPLATES: {
    welcome: 'Welcome to AI Youth Wellness Companion!',
    reminder: 'Daily Wellness Check-in Reminder',
    notification: 'Wellness Insight Available'
  }
};

/**
 * Main handler for HTTP requests from the frontend
 */
function doPost(e) {
  try {
    const request = JSON.parse(e.postData.contents);
    const action = request.action;
    
    switch (action) {
      case 'submitMoodEntry':
        return handleMoodSubmission(request.data);
      
      case 'getAISuggestions':
        return handleAISuggestions(request);
      
      case 'submitContact':
        return handleContactSubmission(request.data);
      
      case 'setupNotifications':
        return handleNotificationSetup(request.data);
      
      case 'exportData':
        return handleDataExport(request.data);
      
      default:
        return createResponse(false, 'Unknown action');
    }
  } catch (error) {
    console.error('Error in doPost:', error);
    return createResponse(false, 'Server error: ' + error.message);
  }
}

/**
 * Handle mood entry submissions
 */
function handleMoodSubmission(data) {
  try {
    // Open the mood tracking spreadsheet
    const sheet = SpreadsheetApp.openById(CONFIG.MOOD_SHEET_ID).getActiveSheet();
    
    // Prepare data for insertion
    const timestamp = new Date();
    const rowData = [
      timestamp,
      data.mood,
      data.energy || '',
      data.sleep || '',
      data.stress || '',
      data.notes || '',
      data.userId || 'anonymous',
      data.sessionId || ''
    ];
    
    // Add data to sheet
    sheet.appendRow(rowData);
    
    // Check if we should send notifications
    checkAndSendNotifications(data);
    
    // Generate insights if enough data exists
    if (shouldGenerateInsights(data.userId)) {
      generateWellnessInsights(data.userId);
    }
    
    return createResponse(true, 'Mood entry saved successfully');
    
  } catch (error) {
    console.error('Error in handleMoodSubmission:', error);
    return createResponse(false, 'Failed to save mood entry');
  }
}

/**
 * Handle AI suggestion requests
 */
function handleAISuggestions(request) {
  try {
    const { mood, concern, recentMoods } = request;
    
    // Build context from recent mood data
    const context = buildAIContext(mood, concern, recentMoods);
    
    // Call Vertex AI for suggestions
    const suggestions = callVertexAI(context);
    
    // Log the interaction for analytics
    logAIInteraction(mood, concern, suggestions.length);
    
    return createResponse(true, 'Suggestions generated', { suggestions });
    
  } catch (error) {
    console.error('Error in handleAISuggestions:', error);
    // Return fallback suggestions if AI fails
    const fallbackSuggestions = getFallbackSuggestions(request.mood, request.concern);
    return createResponse(true, 'Fallback suggestions provided', { suggestions: fallbackSuggestions });
  }
}

/**
 * Call Google Vertex AI for personalized suggestions
 */
function callVertexAI(context) {
  try {
    // Construct the prompt for Vertex AI
    const prompt = `You are a compassionate AI wellness companion for youth mental health. 
    Based on the following context, provide 3-5 specific, actionable wellness suggestions:
    
    Context: ${context}
    
    Requirements:
    - Suggestions should be age-appropriate for teens/young adults
    - Focus on evidence-based mental health practices
    - Include immediate actions they can take
    - Be encouraging and non-judgmental
    - Each suggestion should be 1-2 sentences
    
    Format your response as a JSON array of objects with 'title', 'description', and 'tags' fields.`;
    
    // Note: This is a simplified example. In production, you would use the 
    // Google Cloud AI Platform API to call Vertex AI
    
    // For now, we'll return structured suggestions based on the context
    return generateStructuredSuggestions(context);
    
  } catch (error) {
    console.error('Error calling Vertex AI:', error);
    throw error;
  }
}

/**
 * Generate structured suggestions based on context
 */
function generateStructuredSuggestions(context) {
  // This is a simplified implementation. In production, this would be 
  // replaced with actual Vertex AI API calls
  
  const suggestions = [];
  
  if (context.includes('anxious') || context.includes('stressed')) {
    suggestions.push({
      title: 'Deep Breathing Exercise',
      description: 'Try the 4-7-8 breathing technique: inhale for 4 counts, hold for 7, exhale for 8. Repeat 3-4 times.',
      tags: ['Breathing', 'Immediate Relief', 'Anxiety']
    });
    
    suggestions.push({
      title: 'Progressive Muscle Relaxation',
      description: 'Tense and release each muscle group starting from your toes, working up to your head.',
      tags: ['Relaxation', 'Body Awareness', 'Stress Relief']
    });
  }
  
  if (context.includes('sad') || context.includes('down')) {
    suggestions.push({
      title: 'Gratitude Practice',
      description: 'Write down three things you\'re grateful for today, no matter how small they might seem.',
      tags: ['Gratitude', 'Positivity', 'Mood Boost']
    });
    
    suggestions.push({
      title: 'Connect with Nature',
      description: 'Spend 10-15 minutes outside, even if it\'s just sitting by a window with natural light.',
      tags: ['Nature', 'Mood Boost', 'Vitamin D']
    });
  }
  
  if (context.includes('low energy') || context.includes('tired')) {
    suggestions.push({
      title: 'Gentle Movement',
      description: 'Do 5 minutes of light stretching or take a short walk to boost your energy naturally.',
      tags: ['Movement', 'Energy', 'Physical Health']
    });
  }
  
  // Always include a social connection suggestion
  suggestions.push({
    title: 'Reach Out to Someone',
    description: 'Send a quick message to a friend or family member - connection can significantly improve mood.',
    tags: ['Social Connection', 'Support', 'Relationships']
  });
  
  return suggestions.slice(0, 4); // Return up to 4 suggestions
}

/**
 * Build context for AI suggestions
 */
function buildAIContext(currentMood, concern, recentMoods) {
  let context = `Current mood: ${currentMood}. Main concern: ${concern}.`;
  
  if (recentMoods && recentMoods.length > 0) {
    const moodTrend = analyzeMoodTrend(recentMoods);
    context += ` Recent mood pattern: ${moodTrend}.`;
  }
  
  return context;
}

/**
 * Analyze mood trend from recent entries
 */
function analyzeMoodTrend(recentMoods) {
  if (recentMoods.length < 2) return 'insufficient data';
  
  const moodValues = {
    'very-sad': 1, 'sad': 2, 'neutral': 3, 'happy': 4, 'very-happy': 5
  };
  
  const recent = recentMoods.slice(-3).map(entry => moodValues[entry.mood] || 3);
  const avg = recent.reduce((sum, val) => sum + val, 0) / recent.length;
  
  if (avg >= 4) return 'consistently positive';
  if (avg <= 2) return 'consistently low';
  return 'mixed with some ups and downs';
}

/**
 * Handle contact form submissions
 */
function handleContactSubmission(data) {
  try {
    // Save to contact submissions sheet
    const sheet = SpreadsheetApp.openById(CONFIG.CONTACT_SHEET_ID).getActiveSheet();
    const timestamp = new Date();
    
    sheet.appendRow([
      timestamp,
      data.name,
      data.email,
      data.subject,
      data.message
    ]);
    
    // Send confirmation email
    sendContactConfirmation(data.email, data.name);
    
    // Send notification to admin
    sendAdminNotification(data);
    
    return createResponse(true, 'Message sent successfully');
    
  } catch (error) {
    console.error('Error in handleContactSubmission:', error);
    return createResponse(false, 'Failed to send message');
  }
}

/**
 * Setup notification triggers
 */
function handleNotificationSetup(data) {
  try {
    const { userId, email, preferences } = data;
    
    // Create calendar events for wellness reminders
    if (preferences.dailyReminders) {
      setupDailyReminders(email, preferences.reminderTime);
    }
    
    if (preferences.weeklyInsights) {
      setupWeeklyInsights(email);
    }
    
    return createResponse(true, 'Notifications configured successfully');
    
  } catch (error) {
    console.error('Error in handleNotificationSetup:', error);
    return createResponse(false, 'Failed to setup notifications');
  }
}

/**
 * Setup daily wellness reminders
 */
function setupDailyReminders(email, reminderTime) {
  const calendar = CalendarApp.getDefaultCalendar();
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(parseInt(reminderTime.split(':')[0]), parseInt(reminderTime.split(':')[1]), 0, 0);
  
  // Create recurring daily event
  calendar.createEventSeries(
    'Wellness Check-in Reminder',
    tomorrow,
    new Date(tomorrow.getTime() + 15 * 60000), // 15 minutes
    CalendarApp.newRecurrence().addDailyRule(),
    {
      description: 'Time for your daily mood tracking and wellness check-in!',
      guests: email,
      sendInvites: true
    }
  );
}

/**
 * Setup weekly wellness insights
 */
function setupWeeklyInsights(email) {
  // Create a weekly trigger to send insights
  ScriptApp.newTrigger('sendWeeklyInsights')
    .timeBased()
    .everyWeeks(1)
    .onWeekDay(ScriptApp.WeekDay.SUNDAY)
    .atHour(9)
    .create();
}

/**
 * Send weekly wellness insights (triggered function)
 */
function sendWeeklyInsights() {
  try {
    // Get all users who opted for weekly insights
    // This would typically come from a user preferences sheet
    const users = getUsersWithWeeklyInsights();
    
    users.forEach(user => {
      const insights = generateWeeklyInsights(user.id);
      sendInsightsEmail(user.email, insights);
    });
    
  } catch (error) {
    console.error('Error sending weekly insights:', error);
  }
}

/**
 * Check if notifications should be sent based on mood data
 */
function checkAndSendNotifications(moodData) {
  try {
    // Check for concerning patterns
    if (shouldSendSupportNotification(moodData)) {
      sendSupportNotification(moodData.email);
    }
    
    // Check for positive milestones
    if (shouldSendCelebrationNotification(moodData)) {
      sendCelebrationNotification(moodData.email);
    }
    
  } catch (error) {
    console.error('Error checking notifications:', error);
  }
}

/**
 * Determine if support notification should be sent
 */
function shouldSendSupportNotification(moodData) {
  // Logic to determine if user needs additional support
  // This would analyze recent mood patterns
  return false; // Simplified for demo
}

/**
 * Send support notification email
 */
function sendSupportNotification(email) {
  const subject = 'Wellness Support Available';
  const body = `
    Hi there,
    
    We noticed you might be going through a challenging time. Remember that you're not alone, 
    and there are resources available to help.
    
    Consider:
    - Browsing our wellness resources
    - Getting AI-powered suggestions
    - Reaching out to a trusted friend or counselor
    
    If you're in crisis, please contact:
    - Suicide & Crisis Lifeline: 988
    - Crisis Text Line: Text HOME to 741741
    
    Take care,
    Wellness Companion Team
  `;
  
  MailApp.sendEmail(email, subject, body);
}

/**
 * Send contact confirmation email
 */
function sendContactConfirmation(email, name) {
  const subject = 'Message Received - Wellness Companion';
  const body = `
    Hi ${name},
    
    Thank you for reaching out to us. We've received your message and will get back to you within 24-48 hours.
    
    If you need immediate support, please remember:
    - Suicide & Crisis Lifeline: 988
    - Crisis Text Line: Text HOME to 741741
    
    Best regards,
    Wellness Companion Team
  `;
  
  MailApp.sendEmail(email, subject, body);
}

/**
 * Send admin notification for new contact
 */
function sendAdminNotification(contactData) {
  const adminEmail = 'admin@youthwellness.app'; // Replace with actual admin email
  const subject = `New Contact: ${contactData.subject}`;
  const body = `
    New contact submission received:
    
    From: ${contactData.name} (${contactData.email})
    Subject: ${contactData.subject}
    
    Message:
    ${contactData.message}
    
    Please respond within 24-48 hours.
  `;
  
  MailApp.sendEmail(adminEmail, subject, body);
}

/**
 * Generate wellness insights for a user
 */
function generateWellnessInsights(userId) {
  try {
    // Analyze user's mood data
    const userData = getUserMoodData(userId);
    
    if (userData.length < 7) {
      return; // Need at least a week of data
    }
    
    const insights = {
      moodTrend: calculateMoodTrend(userData),
      streakDays: calculateStreak(userData),
      topTriggers: identifyTriggers(userData),
      recommendations: generatePersonalizedRecommendations(userData)
    };
    
    // Store insights for dashboard
    saveInsights(userId, insights);
    
    return insights;
    
  } catch (error) {
    console.error('Error generating insights:', error);
  }
}

/**
 * Get user mood data from sheets
 */
function getUserMoodData(userId) {
  const sheet = SpreadsheetApp.openById(CONFIG.MOOD_SHEET_ID).getActiveSheet();
  const data = sheet.getDataRange().getValues();
  
  // Filter data for specific user and last 30 days
  const thirtyDaysAgo = new Date();
  thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30);
  
  return data.filter(row => 
    row[6] === userId && // userId column
    new Date(row[0]) >= thirtyDaysAgo // timestamp column
  );
}

/**
 * Get fallback suggestions when AI is unavailable
 */
function getFallbackSuggestions(mood, concern) {
  const fallbackSuggestions = [
    {
      title: 'Take Deep Breaths',
      description: 'Practice slow, deep breathing for 2-3 minutes to help calm your mind.',
      tags: ['Breathing', 'Quick Relief']
    },
    {
      title: 'Go for a Walk',
      description: 'A short 10-minute walk can help improve your mood and energy.',
      tags: ['Exercise', 'Mood Boost']
    },
    {
      title: 'Practice Gratitude',
      description: 'Think of three things you\'re grateful for today.',
      tags: ['Gratitude', 'Positivity']
    },
    {
      title: 'Connect with Others',
      description: 'Reach out to a friend or family member for support.',
      tags: ['Social', 'Support']
    }
  ];
  
  return fallbackSuggestions;
}

/**
 * Log AI interaction for analytics
 */
function logAIInteraction(mood, concern, suggestionCount) {
  try {
    // Log to a separate analytics sheet
    console.log(`AI Interaction: mood=${mood}, concern=${concern}, suggestions=${suggestionCount}`);
  } catch (error) {
    console.error('Error logging AI interaction:', error);
  }
}

/**
 * Determine if insights should be generated
 */
function shouldGenerateInsights(userId) {
  // Generate insights weekly or when significant patterns emerge
  const lastInsight = getLastInsightDate(userId);
  const weekAgo = new Date();
  weekAgo.setDate(weekAgo.getDate() - 7);
  
  return !lastInsight || lastInsight < weekAgo;
}

/**
 * Get last insight generation date for user
 */
function getLastInsightDate(userId) {
  // This would query an insights tracking sheet
  return null; // Simplified for demo
}

/**
 * Save insights to storage
 */
function saveInsights(userId, insights) {
  // Save to insights sheet or user properties
  console.log(`Saving insights for user ${userId}:`, insights);
}

/**
 * Create standardized response object
 */
function createResponse(success, message, data = null) {
  const response = {
    success: success,
    message: message,
    timestamp: new Date().toISOString()
  };
  
  if (data) {
    response.data = data;
  }
  
  return ContentService
    .createTextOutput(JSON.stringify(response))
    .setMimeType(ContentService.MimeType.JSON);
}

/**
 * Calculate mood trend
 */
function calculateMoodTrend(userData) {
  if (userData.length < 7) return 'insufficient data';
  
  const moodValues = {
    'very-sad': 1, 'sad': 2, 'neutral': 3, 'happy': 4, 'very-happy': 5
  };
  
  const recent = userData.slice(-7).map(row => moodValues[row[1]] || 3);
  const older = userData.slice(-14, -7).map(row => moodValues[row[1]] || 3);
  
  if (older.length === 0) return 'stable';
  
  const recentAvg = recent.reduce((sum, val) => sum + val, 0) / recent.length;
  const olderAvg = older.reduce((sum, val) => sum + val, 0) / older.length;
  
  if (recentAvg > olderAvg + 0.5) return 'improving';
  if (recentAvg < olderAvg - 0.5) return 'declining';
  return 'stable';
}

/**
 * Calculate consecutive days streak
 */
function calculateStreak(userData) {
  if (userData.length === 0) return 0;
  
  const dates = userData.map(row => new Date(row[0]).toDateString());
  const uniqueDates = [...new Set(dates)].sort();
  
  let streak = 0;
  const today = new Date().toDateString();
  
  for (let i = 0; i < uniqueDates.length; i++) {
    const expectedDate = new Date();
    expectedDate.setDate(expectedDate.getDate() - i);
    
    if (uniqueDates[uniqueDates.length - 1 - i] === expectedDate.toDateString()) {
      streak++;
    } else {
      break;
    }
  }
  
  return streak;
}

/**
 * Get users with weekly insights enabled
 */
function getUsersWithWeeklyInsights() {
  // This would query a user preferences sheet
  return []; // Simplified for demo
}

/**
 * Setup error handling and logging
 */
function setupErrorHandling() {
  // Configure error reporting and logging
  console.log('Error handling configured');
}

// Initialize the service
setupErrorHandling();