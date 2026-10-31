/**
 * ==============================================================================
 * NEXTGENAI DEFENCE TECHNOLOGIES — VISITOR ANALYTICS CONFIGURATION
 * File: visitor-counter-config.js
 * ==============================================================================
 */

const VISITOR_COUNTER_CONFIG = {
  // Tracking Mode: 'countapi' | 'firebase'
  mode: 'countapi',

  // Unique namespace for CountAPI
  countApiNamespace: 'nextgenai_defence',

  // CountAPI base endpoint (v1)
  countApiBaseUrl: 'https://countapi.mileshilliard.com/api/v1',

  // Reporting timezone (Pakistan Standard Time, UTC+5)
  timezone: 'Asia/Karachi',

  // Time in minutes to consider a visitor online
  onlineWindowMinutes: 5,

  // Interval in milliseconds to update active presence heartbeat (30 seconds)
  activityUpdateInterval: 30000,

  // Counter roll-up animation options
  enableAnimations: true,
  animationDurationMs: 1200,

  // UI display toggle
  showVisitorDashboard: true,

  // Firebase Realtime Database Configuration (Required only when mode: 'firebase')
  firebaseConfig: {
    apiKey: "YOUR_FIREBASE_API_KEY",
    authDomain: "YOUR_PROJECT_ID.firebaseapp.com",
    databaseURL: "https://YOUR_PROJECT_ID-default-rtdb.firebaseio.com",
    projectId: "YOUR_PROJECT_ID",
    storageBucket: "YOUR_PROJECT_ID.appspot.com",
    messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
    appId: "YOUR_APP_ID"
  }
};

// Expose configuration globally
if (typeof window !== 'undefined') {
  window.VISITOR_COUNTER_CONFIG = VISITOR_COUNTER_CONFIG;
}
