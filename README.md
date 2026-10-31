# NextGenAI Defence Technologies
### Engineering Intelligent Defence. Securing Tomorrow.

Official enterprise web portal for **NextGenAI Defence Technologies** — an emerging defence technology and AI engineering initiative developing intelligent defence software, autonomous systems research, cybersecurity, advanced sensing, and security intelligence.

---

## 🏛️ Company Identity & Vision

- **Brand Statement:** *Engineering Intelligent Defence. Securing Tomorrow.*
- **Aesthetic Direction:** Palantir-inspired intelligence dashboards + Anduril-inspired futuristic defence aesthetics + aerospace engineering typography.
- **Color Palette:**
  - Primary Background: Deep Black (`#05070A`)
  - Secondary Background: Dark Graphite (`#0B1017`)
  - Accent: Electric Cyan (`#00D5FF`)
  - Secondary Accent: Tactical Green (`#39FF88`)
  - Telemetry & Text: Cool Grey (`#9AA7B6`) and Pure White (`#FFFFFF`)

---

## 🛰️ Nine Technology Divisions

1. **Division 01 — Agentic AI Defence Intelligence:** Multi-source situational awareness platform synthesizing satellite imagery, sensor telemetry, and security reporting with multi-agent consensus.
2. **Division 02 — Autonomous Systems & Defensive Robotics:** Perception and coordination software for uncrewed platforms, perimeter defense, and multi-sensor Counter-Drone Security (C-UAS).
3. **Division 03 — Advanced Sensing & Electronic Protection:** Multi-spectral sensor fusion, radar analytics, and electronic protection monitoring in contested electromagnetic environments.
4. **Division 04 — AI-Powered Security Operations Centre (NextGenAI Sentinel):** Autonomous agentic SOC platform deploying specialized AI teams for alert triage, threat hunting, and defensive response under strict human approval.
5. **Division 05 — AI Child Protection & Criminal Activity Detection:** Ethical, privacy-first AI assistance developed for authorized organizations to prioritize investigation queues and preserve cryptographic evidence chains.
6. **Division 06 — AI Drug-Trafficking Investigation Support:** Logistics anomaly detection, freight manifest verification, and supply-chain entity graphs for lawful interdiction agencies.
7. **Division 07 — AI Cybercrime Investigation Platform:** Malicious infrastructure analysis, phishing campaign clustering, and lawful cryptocurrency ledger tracing.
8. **Division 08 — Defence & Security Innovation:** Ten strategic research initiatives covering tactical communications, critical infrastructure protection, cyber ranges, and logistics forecasting.
9. **Division 09 — NextGenAI Defence Intelligence Stack:** Unified 6-layer architecture (Ingestion, Processing, AI Intelligence, Security & Control, Applications, Deployment).

---

## 💻 Tech Stack & Features

- **Architecture:** Zero-dependency static frontend compatible with **GitHub Pages**.
- **Interactive Radar & Digital Terrain:** 60 FPS HTML5 Canvas animation with neural node networking and animated sweep beam.
- **Live Telemetry Bar:** Simulated UTC military clock, spatial coordinate drift, network status, and latency indicators.
- **Interactive Stack Explorer:** Real-time 6-layer architecture switcher with subsystem node breakdowns.
- **Deep-Dive Technology Modals:** Full capabilities, operational applications, and target partner profiles for every division.
- **Interactive WhatsApp Enquiry Generator:** Structures custom inquiries directly into a WhatsApp dispatch to `+92 306 0824762`.
- **Live Visitor Statistics & Analytics:** Real-time 4-card telemetry dashboard (Total Visitors, Today's Visitors in PKT, Online Now, and Total Page Views) with dual-engine support (CountAPI and Firebase Realtime Database).
- **Responsive & Accessible:** Fully optimized for mobile phones (320px+), tablets, laptops, and ultra-wide 4K monitors.

---

## 📊 Live Visitor Statistics & Analytics System

Located immediately above the website footer, the **Live Analytics Dashboard** displays four real-time visitor metrics with animated numeric counters, tactical status pills, and Pakistan Standard Time (PKT, UTC+5) daily reset synchronization.

### 1. Supported Modes & Architecture

The system is configured in [`visitor-counter-config.js`](file:///c:/Users/murtu/OneDrive/Desktop/NextGenAI%20Defence%20Technologies/visitor-counter-config.js):

#### Mode A: Zero-Setup CountAPI (Default)
- **Active by default.** No API keys, no backend, and no signups required.
- Uses CountAPI v1 endpoints (`https://countapi.mileshilliard.com/api/v1`) with a unique namespace (`nextgenai-defence-technologies`).
- Generates an anonymous, RFC4122-compliant UUID per browser and stores it in `localStorage`.
- Increments `total_visitors` only once per unique browser UUID.
- Increments `today_visitors` only once per browser per PKT calendar day.
- Increments `total_pageviews` on each page view.
- Tracks `online_visitors` via local session presence across tabs with clear contextual disclosure.
- Includes automatic offline fallback and local caching to prevent zero counters or site crashes if external networks fluctuate.

#### Mode B: Firebase Realtime Database (Synchronized Multi-User Presence)
- Provides synchronized global multi-user presence using WebSockets and Firebase `onDisconnect()`.
- Increments counters using atomic database transactions to eliminate race conditions.
- Uses anonymous Firebase authentication (`signInAnonymously`).

---

### 2. How to Switch Between Modes

Open [`visitor-counter-config.js`](file:///c:/Users/murtu/OneDrive/Desktop/NextGenAI%20Defence%20Technologies/visitor-counter-config.js) and update the `mode` parameter:

```javascript
// To use zero-setup public cloud counters (default):
mode: 'countapi',

// OR to switch to synchronized Firebase presence:
mode: 'firebase',
```

---

### 3. Step-by-Step Firebase Realtime Database Setup

If you wish to use Firebase Realtime Database:

#### Step 1: Create a Firebase Project
1. Go to the [Firebase Console](https://console.firebase.google.com/) and click **Add project**.
2. Name your project (e.g., `nextgenai-defence-analytics`) and complete creation.

#### Step 2: Create a Realtime Database
1. In the Firebase console sidebar, navigate to **Build** &rarr; **Realtime Database**.
2. Click **Create Database**.
3. Choose a location (e.g., `United States` or closest to your users) and select **Start in locked mode**.

#### Step 3: Enable Anonymous Authentication
1. In the sidebar, navigate to **Build** &rarr; **Authentication**.
2. Click **Get Started** &rarr; select the **Sign-in method** tab.
3. Click **Anonymous**, toggle **Enable**, and click **Save**.

#### Step 4: Configure Database Security Rules
In the **Realtime Database** &rarr; **Rules** tab, paste the following security rules:

```json
{
  "rules": {
    "analytics": {
      ".read": true,
      ".write": "auth != null"
    },
    "presence": {
      ".read": true,
      "$uid": {
        ".write": "auth != null && auth.uid == $uid"
      }
    }
  }
}
```
*These rules allow anonymous authenticated visitors to read aggregate statistics, increment counters via transactions, and only write/delete their own presence record under `/presence/$uid`.*

#### Step 5: Add Credentials to Configuration
In the Firebase console:
1. Click **Project Settings** (gear icon) &rarr; **General** &rarr; **Your apps** &rarr; **Web app (`</>`)**.
2. Copy the `firebaseConfig` object and paste it into [`visitor-counter-config.js`](file:///c:/Users/murtu/OneDrive/Desktop/NextGenAI%20Defence%20Technologies/visitor-counter-config.js):

```javascript
firebaseConfig: {
  apiKey: "AIzaSy...",
  authDomain: "your-project.firebaseapp.com",
  databaseURL: "https://your-project-default-rtdb.firebaseio.com",
  projectId: "your-project",
  storageBucket: "your-project.appspot.com",
  messagingSenderId: "123456789",
  appId: "1:123456789:web:..."
}
```

---

### 4. Pakistan Standard Time (PKT) Date Reset Logic

Daily visitor metrics are governed strictly by the **`Asia/Karachi`** timezone (UTC+5):
- The system evaluates calendar dates using `Intl.DateTimeFormat('en-CA', { timeZone: 'Asia/Karachi' })` returning `YYYY-MM-DD`.
- Visitors are stamped with their last PKT visit date. When midnight arrives in Pakistan (00:00:00 PKT), the date changes automatically, resetting the daily counter for all new and returning visitors.
- The visitor's local computer clock or device timezone does not distort the Pakistan calendar reporting day.

---

### 5. How Online Presence Detection Works

- **Online Window:** Active visitors are tracked within a rolling **5-minute window** (`onlineWindowMinutes: 5`).
- **Heartbeat:** An activity heartbeat fires every 30 seconds (`activityUpdateInterval: 30000`) and monitors tab visibility (`visibilitychange`).
- In **CountAPI mode**, active session presence is tracked via browser tab session storage and labeled as **Active Session Presence** to ensure complete transparency.
- In **Firebase mode**, presence nodes are synchronized via WebSockets; when a user closes their tab or browser, Firebase's `onDisconnect().remove()` instantly purges the session.

---

### 6. Testing & Verification Checklist

To test the system locally or on GitHub Pages:
1. **Initial Visit:** Open the site; counters animate up from zero. The status pill displays `LIVE TRACKING`.
2. **Page Refresh:** Refresh the page. **Total Page Views** increments by 1; **Total Visitors** and **Today's Visitors** remain unchanged because your browser UUID is preserved in `localStorage`.
3. **Simulate a New Visitor:** Open an **Incognito / Private Window**. A new anonymous UUID is generated: **Total Visitors**, **Today's Visitors**, and **Total Page Views** increment.
4. **Simulate Pakistan Midnight Reset:** Open browser DevTools &rarr; Console, and run:
   ```javascript
   localStorage.setItem('nextgenai_last_pkt_visit_date', '2020-01-01');
   location.reload();
   ```
   The system will identify you as a new daily visitor for today PKT and increment **Today's Visitors** without altering **Total Visitors**.

---

## 🚀 Deployment Instructions (GitHub Pages)

1. Push all files to your GitHub repository:
   ```bash
   git add .
   git commit -m "Deploy NextGenAI Defence Technologies portal"
   git push origin main
   ```
2. Navigate to your repository on GitHub:
   - Go to **Settings** &rarr; **Pages**.
   - Under **Build and deployment**, select **Deploy from a branch**.
   - Set branch to `main` (or `master`) and folder to `/ (root)`.
   - Click **Save**.
3. Your website will be live in 1-2 minutes!

---

## 🛡️ Credits & Licensing

- **Initiative:** NextGenAI Defence Technologies
- **Lead Developer:** [Murtuza Developer](https://murtuzadeveloper.github.io/)
- **Official WhatsApp:** [+92 306 0824762](https://wa.me/923060824762)
- **Copyright:** &copy; NextGenAI Defence Technologies. All rights reserved.

