/**
 * ==============================================================================
 * NEXTGENAI DEFENCE TECHNOLOGIES — VISITOR ANALYTICS SYSTEM
 * File: visitor-counter.js
 * ==============================================================================
 * Real-time organic visitor analytics starting from zero for GitHub Pages.
 * 
 * 4 Dedicated Metrics:
 * 1. Total Visitors: All-time unique visitors (browser UUID deduplicated)
 * 2. Today's Visitors: Unique visitors for current day in Pakistan Standard Time (PKT, UTC+5)
 * 3. Online Visitors: Real-time concurrent visitors active within the last 5 minutes
 * 4. Total Page Views: Total catalog page views incrementing on every load / refresh
 * ==============================================================================
 */

(function () {
  'use strict';

  // Guard against duplicate execution
  if (window.__nextgenai_analytics_initialized) {
    return;
  }
  window.__nextgenai_analytics_initialized = true;

  // Retrieve configuration
  const config = window.VISITOR_COUNTER_CONFIG || {
    mode: 'countapi',
    countApiNamespace: 'nextgenai_defence',
    countApiBaseUrl: 'https://countapi.mileshilliard.com/api/v1',
    timezone: 'Asia/Karachi',
    onlineWindowMinutes: 5,
    activityUpdateInterval: 30000,
    enableAnimations: true,
    animationDurationMs: 1200,
    showVisitorDashboard: true
  };

  // LocalStorage keys
  const STORAGE_KEYS = {
    UUID: 'nextgenai_visitor_uuid',
    LAST_PKT_DATE: 'nextgenai_last_pkt_visit_date',
    TOTAL_VISITORS: 'nextgenai_stat_total_visitors',
    TODAY_VISITORS: 'nextgenai_stat_today_visitors',
    PAGE_VIEWS: 'nextgenai_stat_page_views',
    PRESENCE_PREFIX: 'nextgenai_presence_tab_'
  };

  // Application state
  const state = {
    uuid: null,
    todayPktString: '',
    isNewVisitor: false,
    isNewTodayVisitor: false,
    totalVisitors: 1,
    todayVisitors: 1,
    onlineVisitors: 1,
    pageViews: 1,
    status: 'live'
  };

  // --- 1. BOOTSTRAP ON LOAD ---
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initAnalytics);
  } else {
    initAnalytics();
  }

  function initAnalytics() {
    if (!config.showVisitorDashboard) return;

    // A. Pakistan Standard Time Date (Asia/Karachi)
    state.todayPktString = getPakistanDateString();

    // B. Calculate local counters immediately so page renders with zero lag
    calculateLocalState();

    // C. Render immediately to DOM
    renderUI();

    // D. Synchronize with Cloud (CountAPI or Firebase)
    if (config.mode === 'firebase' && config.firebaseConfig && config.firebaseConfig.apiKey !== 'YOUR_FIREBASE_API_KEY') {
      initFirebaseSync();
    } else {
      initCountApiSync();
    }

    // E. Setup Heartbeat and Midnight Lifecycle
    setupPresenceHeartbeat();
    setupLifecycleEvents();
  }

  // --- 2. PAKISTAN TIMEZONE (Asia/Karachi, UTC+5) ---
  function getPakistanDateString() {
    try {
      const now = new Date();
      return new Intl.DateTimeFormat('en-CA', {
        timeZone: config.timezone || 'Asia/Karachi',
        year: 'numeric',
        month: '2-digit',
        day: '2-digit'
      }).format(now);
    } catch (e) {
      // Fallback calculation for UTC+5
      const now = new Date();
      const utc = now.getTime() + (now.getTimezoneOffset() * 60000);
      const pkt = new Date(utc + (5 * 3600000));
      return pkt.toISOString().split('T')[0];
    }
  }

  function generateUUID() {
    if (typeof crypto !== 'undefined' && crypto.randomUUID) {
      return crypto.randomUUID();
    }
    return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === 'x' ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });
  }

  // --- 3. LOCAL STATE CALCULATIONS ---
  function calculateLocalState() {
    // 1. UUID Check
    let storedUuid = localStorage.getItem(STORAGE_KEYS.UUID);
    if (!storedUuid) {
      storedUuid = generateUUID();
      try {
        localStorage.setItem(STORAGE_KEYS.UUID, storedUuid);
      } catch (e) {}
      state.isNewVisitor = true;
    } else {
      state.isNewVisitor = false;
    }
    state.uuid = storedUuid;

    // 2. PKT Daily Check
    const lastPktDate = localStorage.getItem(STORAGE_KEYS.LAST_PKT_DATE);
    if (lastPktDate !== state.todayPktString) {
      state.isNewTodayVisitor = true;
      try {
        localStorage.setItem(STORAGE_KEYS.LAST_PKT_DATE, state.todayPktString);
      } catch (e) {}
    } else {
      state.isNewTodayVisitor = false;
    }

    // 3. Page Views: Increment by +1 on every single page load / refresh
    let pv = parseInt(localStorage.getItem(STORAGE_KEYS.PAGE_VIEWS) || '0', 10);
    pv += 1;
    state.pageViews = pv;
    try {
      localStorage.setItem(STORAGE_KEYS.PAGE_VIEWS, pv.toString());
    } catch (e) {}

    // 4. Total Visitors: Increment only on brand-new browser UUID
    let tv = parseInt(localStorage.getItem(STORAGE_KEYS.TOTAL_VISITORS) || '0', 10);
    if (state.isNewVisitor) {
      tv += 1;
      try {
        localStorage.setItem(STORAGE_KEYS.TOTAL_VISITORS, tv.toString());
      } catch (e) {}
    }
    state.totalVisitors = Math.max(1, tv || 1);

    // 5. Today's Visitors: Reset on new PKT day, increment on today's new visitor
    let td = parseInt(localStorage.getItem(STORAGE_KEYS.TODAY_VISITORS) || '0', 10);
    if (lastPktDate !== state.todayPktString) {
      td = 0; // Midnight reset in Pakistan
    }
    if (state.isNewTodayVisitor) {
      td += 1;
    }
    state.todayVisitors = Math.max(1, td || 1);
    try {
      localStorage.setItem(STORAGE_KEYS.TODAY_VISITORS, state.todayVisitors.toString());
    } catch (e) {}

    // 6. Online Presence (active tabs/sessions)
    state.onlineVisitors = getActiveTabPresence();
  }

  function getActiveTabPresence() {
    const now = Date.now();
    const threshold = (config.onlineWindowMinutes || 5) * 60 * 1000;
    let count = 0;
    try {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        if (key && key.startsWith(STORAGE_KEYS.PRESENCE_PREFIX)) {
          const timestamp = parseInt(localStorage.getItem(key) || '0', 10);
          if (now - timestamp < threshold) {
            count++;
          } else {
            localStorage.removeItem(key);
          }
        }
      }
    } catch (e) {}
    return Math.max(1, count);
  }

  // --- 4. COUNTAPI CLOUD SYNCHRONIZATION ---
  async function initCountApiSync() {
    const baseUrl = (config.countApiBaseUrl || 'https://countapi.mileshilliard.com/api/v1').replace(/\/$/, '');
    const ns = (config.countApiNamespace || 'nextgenai_defence').replace(/[^a-zA-Z0-9_]/g, '_');
    const todayKeyPart = state.todayPktString.replace(/-/g, '_');

    // Key names (valid single token strings for CountAPI v1)
    const pvKey = `${ns}_pageviews`;
    const tvKey = `${ns}_total_visitors`;
    const tdKey = `${ns}_today_${todayKeyPart}`;

    // 5-minute rolling presence slot
    const currentSlot = Math.floor(Date.now() / (5 * 60 * 1000));
    const presenceKey = `${ns}_presence_${currentSlot}`;
    const presenceSlotMark = `nextgenai_presence_ping_${currentSlot}`;

    try {
      // 1. Page views: increment on cloud
      apiGet(`${baseUrl}/hit/${pvKey}`).then(res => {
        if (res && typeof res.value === 'number') {
          state.pageViews = Math.max(state.pageViews, res.value);
          localStorage.setItem(STORAGE_KEYS.PAGE_VIEWS, state.pageViews.toString());
          updateElement('statPageViews', state.pageViews);
        }
      }).catch(() => {});

      // 2. Total Visitors: hit if new browser, else get
      const tvUrl = state.isNewVisitor ? `${baseUrl}/hit/${tvKey}` : `${baseUrl}/get/${tvKey}`;
      apiGet(tvUrl).then(res => {
        if (res && typeof res.value === 'number') {
          state.totalVisitors = Math.max(state.totalVisitors, res.value);
          localStorage.setItem(STORAGE_KEYS.TOTAL_VISITORS, state.totalVisitors.toString());
          updateElement('statTotalVisitors', state.totalVisitors);
        }
      }).catch(() => {});

      // 3. Today's Visitors: hit if new visit today in PKT, else get
      const tdUrl = state.isNewTodayVisitor ? `${baseUrl}/hit/${tdKey}` : `${baseUrl}/get/${tdKey}`;
      apiGet(tdUrl).then(res => {
        if (res && typeof res.value === 'number') {
          state.todayVisitors = Math.max(state.todayVisitors, res.value);
          localStorage.setItem(STORAGE_KEYS.TODAY_VISITORS, state.todayVisitors.toString());
          updateElement('statTodayVisitors', state.todayVisitors);
        }
      }).catch(() => {});

      // 4. Online Presence (5-min slot)
      const hasPingedSlot = sessionStorage.getItem(presenceSlotMark);
      const presenceUrl = !hasPingedSlot ? `${baseUrl}/hit/${presenceKey}` : `${baseUrl}/get/${presenceKey}`;
      apiGet(presenceUrl).then(res => {
        if (!hasPingedSlot) {
          try { sessionStorage.setItem(presenceSlotMark, '1'); } catch (e) {}
        }
        if (res && typeof res.value === 'number') {
          state.onlineVisitors = Math.max(1, Math.max(getActiveTabPresence(), res.value));
          updateElement('statOnlineVisitors', state.onlineVisitors);
        }
      }).catch(() => {});

    } catch (err) {
      console.warn('CountAPI notice: Operating with local storage tracker.', err);
    }
  }

  function apiGet(url, timeoutMs = 4000) {
    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), timeoutMs);

    return fetch(url, {
      method: 'GET',
      headers: { 'Accept': 'application/json' },
      signal: controller.signal
    }).then(res => {
      clearTimeout(timer);
      if (!res.ok) throw new Error(`HTTP ${res.status}`);
      return res.json();
    }).catch(err => {
      clearTimeout(timer);
      throw err;
    });
  }

  // --- 5. UI RENDERING & COUNTER ANIMATION ---
  function renderUI() {
    // 1. Update Labels
    const dateDesc = document.getElementById('statPktDateDesc');
    if (dateDesc) {
      dateDesc.textContent = `Date: ${state.todayPktString} (PKT)`;
    }

    const pill = document.getElementById('analyticsStatusPill');
    const statusText = document.getElementById('analyticsStatusText');
    if (pill) pill.className = 'analytics-status-pill status-live';
    if (statusText) statusText.textContent = 'LIVE TRACKING';

    const onlineDesc = document.getElementById('onlineMetricLabel');
    if (onlineDesc) {
      onlineDesc.textContent = config.mode === 'firebase'
        ? 'Active Multi-User Presence'
        : 'Active Session Presence';
    }

    const engineEl = document.getElementById('metaTrackingEngine');
    if (engineEl) {
      engineEl.textContent = `${config.mode.toUpperCase()} v1.2`;
    }

    // 2. Render Numerical Values
    updateElement('statTotalVisitors', state.totalVisitors);
    updateElement('statTodayVisitors', state.todayVisitors);
    updateElement('statOnlineVisitors', state.onlineVisitors);
    updateElement('statPageViews', state.pageViews);
  }

  function updateElement(elementId, value) {
    const el = document.getElementById(elementId);
    if (!el) return;

    if (!config.enableAnimations || value <= 2) {
      el.textContent = value.toLocaleString();
      return;
    }

    // Animate smoothly from 0 to value
    const startValue = parseInt(el.textContent.replace(/,/g, '') || '0', 10);
    if (startValue === value) {
      el.textContent = value.toLocaleString();
      return;
    }

    const duration = config.animationDurationMs || 1000;
    const startTime = performance.now();

    function step(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(startValue + (value - startValue) * ease);

      el.textContent = current.toLocaleString();

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        el.textContent = value.toLocaleString();
      }
    }

    requestAnimationFrame(step);
  }

  // --- 6. PRESENCE HEARTBEAT & TAB LIFECYCLE ---
  function setupPresenceHeartbeat() {
    const tabKey = STORAGE_KEYS.PRESENCE_PREFIX + (state.uuid ? state.uuid.substring(0, 8) : 'tab') + '_' + Math.floor(Math.random() * 10000);

    function ping() {
      try {
        localStorage.setItem(tabKey, Date.now().toString());
        state.onlineVisitors = getActiveTabPresence();
        const onlineEl = document.getElementById('statOnlineVisitors');
        if (onlineEl) {
          onlineEl.textContent = state.onlineVisitors.toLocaleString();
        }
      } catch (e) {}
    }

    ping();
    setInterval(ping, config.activityUpdateInterval || 30000);

    window.addEventListener('beforeunload', () => {
      try {
        localStorage.removeItem(tabKey);
      } catch (e) {}
    });
  }

  // --- 7. MIDNIGHT & VISIBILITY LIFECYCLE ---
  function setupLifecycleEvents() {
    // Pakistan Midnight Transition Check (every 60s)
    setInterval(() => {
      const currentPkt = getPakistanDateString();
      if (currentPkt !== state.todayPktString) {
        state.todayPktString = currentPkt;
        state.isNewTodayVisitor = true;
        state.todayVisitors = 1;

        try {
          localStorage.setItem(STORAGE_KEYS.LAST_PKT_DATE, currentPkt);
          localStorage.setItem(STORAGE_KEYS.TODAY_VISITORS, '1');
        } catch (e) {}

        const dateDesc = document.getElementById('statPktDateDesc');
        if (dateDesc) {
          dateDesc.textContent = `Date: ${currentPkt} (PKT)`;
        }
        const todayEl = document.getElementById('statTodayVisitors');
        if (todayEl) {
          todayEl.textContent = '1';
        }

        // Re-sync cloud for the new day
        if (config.mode === 'countapi') {
          initCountApiSync();
        }
      }
    }, 60000);

    // Visibility change
    document.addEventListener('visibilitychange', () => {
      if (!document.hidden) {
        state.onlineVisitors = getActiveTabPresence();
        const onlineEl = document.getElementById('statOnlineVisitors');
        if (onlineEl) {
          onlineEl.textContent = state.onlineVisitors.toLocaleString();
        }
      }
    });
  }

  // --- 8. FIREBASE SYNC (When enabled) ---
  function initFirebaseSync() {
    if (typeof window.firebase === 'undefined') {
      const s = document.createElement('script');
      s.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-app-compat.js';
      s.onload = () => {
        const sDb = document.createElement('script');
        sDb.src = 'https://www.gstatic.com/firebasejs/9.23.0/firebase-database-compat.js';
        sDb.onload = () => {
          try {
            if (!window.firebase.apps.length) {
              window.firebase.initializeApp(config.firebaseConfig);
            }
            const db = window.firebase.database();
            const todayNode = state.todayPktString;

            db.ref('analytics/page_views').transaction(c => (c || 0) + 1);
            if (state.isNewVisitor) {
              db.ref('analytics/total_visitors').transaction(c => (c || 0) + 1);
            }
            if (state.isNewTodayVisitor) {
              db.ref('analytics/daily_visitors/' + todayNode).transaction(c => (c || 0) + 1);
            }

            db.ref('analytics/page_views').on('value', snap => {
              if (snap.exists()) updateElement('statPageViews', snap.val());
            });
            db.ref('analytics/total_visitors').on('value', snap => {
              if (snap.exists()) updateElement('statTotalVisitors', snap.val());
            });
            db.ref('analytics/daily_visitors/' + todayNode).on('value', snap => {
              if (snap.exists()) updateElement('statTodayVisitors', snap.val());
            });
          } catch (e) {}
        };
        document.head.appendChild(sDb);
      };
      document.head.appendChild(s);
    }
  }

})();
