// Service Worker for AI Youth Wellness Companion
// Provides offline functionality and caching

const CACHE_NAME = 'wellness-companion-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/mood-tracker.html',
  '/ai-suggestions.html',
  '/resources.html',
  '/dashboard.html',
  '/about.html',
  '/contact.html',
  '/css/styles.css',
  '/js/main.js',
  'https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css',
  'https://cdn.jsdelivr.net/npm/chart.js'
];

// Install Service Worker
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event - serve from cache when offline
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        return fetch(event.request).then(response => {
          // Check if we received a valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          caches.open(CACHE_NAME)
            .then(cache => {
              cache.put(event.request, responseToCache);
            });

          return response;
        }).catch(() => {
          // Return offline page for navigation requests
          if (event.request.mode === 'navigate') {
            return caches.match('/index.html');
          }
        });
      }
    )
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});

// Background sync for mood data
self.addEventListener('sync', event => {
  if (event.tag === 'mood-sync') {
    event.waitUntil(syncMoodData());
  }
});

// Sync mood data when back online
async function syncMoodData() {
  try {
    // Get offline mood data from IndexedDB
    const offlineData = await getOfflineMoodData();
    
    if (offlineData.length > 0) {
      // Send each entry to the server
      for (const entry of offlineData) {
        await submitMoodEntry(entry);
      }
      
      // Clear offline data after successful sync
      await clearOfflineMoodData();
      
      // Show notification that data was synced
      self.registration.showNotification('Data Synced', {
        body: 'Your offline mood entries have been synchronized.',
        icon: '/images/icon-192x192.png',
        badge: '/images/badge-72x72.png'
      });
    }
  } catch (error) {
    console.error('Error syncing mood data:', error);
  }
}

// Push notifications for wellness reminders
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'Time for your wellness check-in!',
    icon: '/images/icon-192x192.png',
    badge: '/images/badge-72x72.png',
    actions: [
      {
        action: 'track-mood',
        title: 'Track Mood'
      },
      {
        action: 'dismiss',
        title: 'Later'
      }
    ],
    data: {
      url: '/mood-tracker.html'
    }
  };

  event.waitUntil(
    self.registration.showNotification('Wellness Reminder', options)
  );
});

// Handle notification clicks
self.addEventListener('notificationclick', event => {
  event.notification.close();

  if (event.action === 'track-mood') {
    event.waitUntil(
      clients.openWindow('/mood-tracker.html')
    );
  } else if (event.action !== 'dismiss') {
    event.waitUntil(
      clients.openWindow(event.notification.data.url || '/')
    );
  }
});

// Helper functions for IndexedDB operations
async function getOfflineMoodData() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('WellnessDB', 1);
    
    request.onerror = () => reject(request.error);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['moodEntries'], 'readonly');
      const store = transaction.objectStore('moodEntries');
      const getAllRequest = store.getAll();
      
      getAllRequest.onsuccess = () => resolve(getAllRequest.result);
      getAllRequest.onerror = () => reject(getAllRequest.error);
    };
    
    request.onupgradeneeded = () => {
      const db = request.result;
      if (!db.objectStoreNames.contains('moodEntries')) {
        db.createObjectStore('moodEntries', { keyPath: 'id', autoIncrement: true });
      }
    };
  });
}

async function clearOfflineMoodData() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('WellnessDB', 1);
    
    request.onsuccess = () => {
      const db = request.result;
      const transaction = db.transaction(['moodEntries'], 'readwrite');
      const store = transaction.objectStore('moodEntries');
      const clearRequest = store.clear();
      
      clearRequest.onsuccess = () => resolve();
      clearRequest.onerror = () => reject(clearRequest.error);
    };
  });
}

async function submitMoodEntry(entry) {
  const response = await fetch('/api/mood', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(entry)
  });
  
  if (!response.ok) {
    throw new Error('Failed to submit mood entry');
  }
  
  return response.json();
}