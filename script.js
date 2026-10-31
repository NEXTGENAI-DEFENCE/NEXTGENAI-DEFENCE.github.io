/**
 * NEXTGENAI DEFENCE TECHNOLOGIES — SCRIPT.JS
 * World-Class Futuristic Defence AI Experience
 * Engineering Intelligent Defence. Securing Tomorrow.
 */

// --- 1. TECHNOLOGY DIVISIONS DATA DICTIONARY ---
const DIVISIONS_DATA = {
  div1: {
    id: "div1",
    tag: "DIVISION 01 // INTELLIGENCE",
    title: "Agentic AI Defence Intelligence",
    subtitle: "Turning Intelligence into Strategic Advantage",
    image: "1. Agentic AI Defence Intelligence.png",
    overview: "NextGenAI Agentic AI Defence Intelligence represents a next-generation situational awareness architecture. By orchestrating specialized autonomous AI agents, the platform ingests, verifies, and analyzes high-resolution satellite imagery, public reporting, tactical sensors, and incident feeds in real time, delivering high-confidence intelligence to authorized defence analysts.",
    capabilities: [
      "Satellite Imagery Analysis: Automated change detection and optical pattern tracking over borders, infrastructure, and ports.",
      "Real-Time Security Monitoring: Multi-source aggregation correlating open-source telemetry, weather patterns, and field reports.",
      "Multi-Agent AI Intelligence: Autonomous agent teams dedicated to ingestion, cross-validation, anomaly scoring, and briefing generation.",
      "Predictive Crisis Forecasting: Advanced statistical models identifying nascent geopolitical and tactical indicators before escalation.",
      "Evidence-Based Reporting: Cryptographically signed intelligence summaries with traceable source lineage and confidence scoring.",
      "Multilingual Intelligence Translation: Real-time neural translation and contextual summary across 40+ strategic languages.",
      "Secure Encrypted Communications: Zero-trust distribution protocols ensuring mission-critical data remains safeguarded."
    ],
    applications: [
      "National border monitoring and critical facility oversight",
      "Humanitarian assistance and disaster relief situational forecasting",
      "Maritime exclusive economic zone (EEZ) surveillance",
      "Strategic logistics and infrastructure vulnerability assessment"
    ],
    targetClients: [
      "Defence Research Establishments",
      "National Security & Intelligence Agencies",
      "Port & Critical Infrastructure Authorities",
      "International Security Alliances"
    ]
  },

  div2: {
    id: "div2",
    tag: "DIVISION 02 // AUTONOMY",
    title: "Autonomous Systems & Defensive Robotics",
    subtitle: "Smarter Intelligence. Safer Operations.",
    image: "2. Autonomous Systems Counter-Drone Security.png",
    overview: "Rather than building unguided lethal hardware, NextGenAI focuses on sovereign intelligence software and software-defined perception layers that make uncrewed platforms safer, reliable, and coordinated under strict human command. Our platform integrates multi-sensor counter-drone tracking, robotic inspection autonomy, and resilient navigation in contested environments.",
    capabilities: [
      "Counter-Drone Detection & Monitoring: Multi-layered RF, optical, and radar telemetry fusion to detect, track, and categorize unauthorized aerial systems.",
      "Autonomous Facility Inspection: Software routines for ground and airborne robotic platforms inspecting pipelines, perimeters, and hangars.",
      "GPS-Denied Navigation Simulation: Visual-inertial odometry research allowing robotic vehicles to navigate when satellite navigation is jammed.",
      "Multi-Robot Cooperative Swarming: Decentralized consensus algorithms for multi-agent perimeter protection and patrol coordination.",
      "Search-and-Rescue Autonomy: Rapid scanning algorithms detecting human signatures and distress signals in hazardous environments.",
      "Defensive Alerting & Classification: Real-time kinematic tracking calculating velocity, flight path projection, and threat probability.",
      "Hardware-Agnostic Sensor Abstraction: Modular APIs enabling rapid integration with commercial and enterprise robotic hardware."
    ],
    applications: [
      "Counter-unmanned aircraft systems (C-UAS) for airport perimeter security",
      "Autonomous physical security patrols for sensitive utility installations",
      "Hazardous search-and-rescue operations following natural disasters",
      "Robotic reconnaissance and asset verification in GPS-denied environments"
    ],
    targetClients: [
      "Airport & Civil Aviation Authorities",
      "Industrial Critical Infrastructure Operators",
      "Defensive Robotics Manufacturers",
      "Border Protection & Coast Guard Units"
    ]
  },

  div3: {
    id: "div3",
    tag: "DIVISION 03 // SENSING & RESILIENCE",
    title: "Advanced Sensing & Electronic Protection",
    subtitle: "Detect. Defend. Stay Resilient.",
    image: "3. Advanced Sensing and Electronic Protection.png",
    overview: "Modern conflict environments are defined by electromagnetic congestion and multi-spectral surveillance. NextGenAI develops cutting-edge sensor fusion architectures, AI-driven radar analytics, and communication resilience software that preserve situational awareness when conventional sensors and datalinks are degraded.",
    capabilities: [
      "AI-Powered Sensor Fusion: Synchronized synthesis of RF, infrared, optical, and radar streams into a unified common operational picture.",
      "Radar & Optical Analytics: Deep learning models trained on micro-doppler signatures and optical recognition to eliminate false alarms.",
      "Electronic Protection Monitoring: Automated detection of RF jamming, spoofing, and spectrum interference with adaptive frequency suggestions.",
      "Resilient Communication Systems: Dynamic routing algorithms maintaining encrypted low-bandwidth telemetry across fragmented networks.",
      "Predictive Equipment Diagnostics: Telemetric anomaly detection predicting mechanical and electronic wear in mission-critical hardware.",
      "Simulation & Modeling Testbeds: Digital twin environments evaluating stealth signatures and sensor propagation dynamics.",
      "Electromagnetic Spectrum Awareness: Real-time visualization of spectrum density to optimize sensor placement."
    ],
    applications: [
      "Naval and coastal radar surveillance against low-signature craft",
      "Communication resilience for tactical field command posts",
      "Predictive maintenance for aerospace and heavy transport fleets",
      "Directed energy defensive targeting calculations and alignment"
    ],
    targetClients: [
      "Aerospace & Defence Prime Contractors",
      "Naval Operations & Coast Guard Commands",
      "Telecommunications & Spectrum Regulators",
      "Military Maintenance & Logistics Depots"
    ]
  },

  div4: {
    id: "div4",
    tag: "DIVISION 04 // CYBER DEFENCE",
    title: "AI-Powered Security Operations Centre (NextGenAI Sentinel)",
    subtitle: "Detect · Investigate · Respond · Stay Secure",
    image: "4. AI-Powered Security Operations Centre.png",
    overview: "NextGenAI Sentinel is our flagship autonomous cyber security operations concept. Utilizing specialized multi-agent AI teams—SOC Triage, Network Analysis, Malware Analysis, Threat Intelligence, and Compliance agents—Sentinel accelerates incident response from hours to seconds while enforcing mandatory human authorization for high-impact countermeasures.",
    capabilities: [
      "Agentic Security Investigations: Autonomous correlation of telemetry across endpoints, firewalls, and identities to reconstruct attack chains.",
      "Multi-Agent Collaborative Triage: Dedicated micro-agents assessing alert credibility, gathering threat evidence, and drafting response runbooks.",
      "Endpoint & SIEM Integration: Native ingestion connectors for enterprise security data lakes, cloud environments, and air-gapped networks.",
      "Human-in-the-Loop Safety Gates: Strictly governed command interfaces ensuring high-impact network isolations require human officer approval.",
      "On-Premises & Air-Gapped Deployment: Self-contained AI inference architectures capable of operating entirely offline without external SaaS leaks.",
      "Automated Incident Documentation: Regulatory-compliant incident timelines, indicators of compromise (IoC) exports, and post-mortem drafts.",
      "Threat Intelligence Correlation: Continuous comparison against MITRE ATT&CK frameworks and lawful cyber intelligence feeds."
    ],
    applications: [
      "Enterprise security operations centres (SOCs) drowning in alert fatigue",
      "Critical national infrastructure cyber resilience (power grids, water, telecoms)",
      "Financial institution threat hunting and data protection",
      "Defence contractor intellectual property perimeter enforcement"
    ],
    targetClients: [
      "Enterprise Chief Information Security Officers (CISOs)",
      "National Cyber Security Authorities",
      "Financial Services & Banking Consortia",
      "Critical Infrastructure Cyber Defence Teams"
    ]
  },

  div5: {
    id: "div5",
    tag: "DIVISION 05 // RESPONSIBLE AI",
    title: "AI Child Protection & Criminal Activity Detection",
    subtitle: "Safer Communities. A More Secure World.",
    image: "5. AI for Child Protection and Criminal Activity Detection.png",
    overview: "Built under strict ethical standards, privacy preservation protocols, and human-in-the-loop governance, this technology division develops specialized AI tools for authorized child protection agencies and lawful investigators. The system assists trained human specialists in identifying abusive material, prioritizing high-risk cases, and managing secure evidentiary chains.",
    capabilities: [
      "Authorized Content Moderation: High-precision perceptual hashing and deep visual classifiers trained to detect prohibited material in authorized queues.",
      "Investigation Prioritization: Risk-weighted triage algorithms ranking cases so child exploitation investigators can rescue victims faster.",
      "Tamper-Proof Evidence Management: Cryptographically hashed audit trails verifying evidentiary chain-of-custody for judicial proceedings.",
      "Privacy-by-Design Safeguards: Automated redaction and tokenization ensuring sensitive bystander data and personal identity are protected.",
      "Suspicious Account Behavioral Analytics: Graph analysis detecting coordinated grooming patterns and illicit distribution networks.",
      "Human Investigator Oversight: Zero automated verdicts—all AI outputs serve exclusively as decision-support insights for sworn officials.",
      "Strict Operational Governance: Absolute prohibition against unauthorized storage, dissemination, or secondary exploitation of forensic data."
    ],
    applications: [
      "Law enforcement child exploitation task forces and victim identification units",
      "Authorized NGO trust & safety investigation teams",
      "Online platform compliance and mandatory reporting pipelines",
      "Judicial digital evidence processing and verification"
    ],
    targetClients: [
      "National Law Enforcement Task Forces",
      "Child Protection & Victim Identification Organizations",
      "Authorized International NGO Safety Units",
      "Judicial Digital Forensics Laboratories"
    ]
  },

  div6: {
    id: "div6",
    tag: "DIVISION 06 // FORENSIC INTELLIGENCE",
    title: "AI Drug-Trafficking Investigation Support",
    subtitle: "Smarter Insights. Safer Communities.",
    image: "6. AI Drug-Trafficking Investigation Support.png",
    overview: "Transnational narcotics networks operate through complex supply chains, legitimate freight concealment, and shell corporations. NextGenAI provides authorized drug enforcement and customs agencies with advanced AI analytics to synthesize shipping manifests, financial anomalies, and geographic movements into clear investigative relationship graphs.",
    capabilities: [
      "Logistics & Freight Anomaly Detection: Pattern recognition flagging high-risk container routing, weight discrepancies, and suspicious port dwell times.",
      "Financial Record Synthesis: Lawful transaction link analysis identifying structuring, money-mule networks, and illicit capital flows.",
      "Supply-Chain Relationship Graphs: Interactive multi-entity network visualization mapping connections between brokers, shell companies, and vessels.",
      "Evidence-Linked Investigative Reports: Structured case briefs linking every finding directly to verified shipping and commercial documentation.",
      "Cross-Border Data Normalization: Unified ingestion pipelines that reconcile heterogeneous trade databases and border crossing manifests.",
      "Predictive Route Modeling: Machine learning identifying shifting smuggling corridors and emerging maritime transshipment hubs.",
      "Strict Compliance Auditing: Granular role-based access controls ensuring all queries strictly comply with lawful investigative warrants."
    ],
    applications: [
      "Container port and customs border interdiction targeting",
      "Transnational narcotics intelligence sharing across allied agencies",
      "Financial intelligence unit (FIU) anti-money laundering investigations",
      "Maritime patrol route optimization based on risk scoring"
    ],
    targetClients: [
      "National Customs & Border Protection Services",
      "Drug Enforcement Administrations",
      "Financial Intelligence Units (FIUs)",
      "Maritime Customs & Port Security Authorities"
    ]
  },

  div7: {
    id: "div7",
    tag: "DIVISION 07 // THREAT HUNTING",
    title: "AI Cybercrime Investigation Platform",
    subtitle: "Detect · Investigate · Stop Cybercrime",
    image: "7. AI Cybercrime Investigation Platform.png",
    overview: "Cyber syndicates deploy advanced evasion techniques, cryptocurrency obfuscation, and rapidly morphing phishing infrastructure. The NextGenAI Cybercrime Investigation Platform arms enterprise fraud teams and cybercrime investigators with automated telemetry reconstruction, lawful blockchain tracing, and coordinated campaign detection.",
    capabilities: [
      "Phishing Campaign Detection: Automated optical and DOM-level similarity analysis identifying credential harvesting clusters worldwide.",
      "Fraud & Identity Theft Analytics: Behavioral clustering revealing synthetic identity rings and credential-stuffing botnets.",
      "Malicious Infrastructure Mapping: Passive DNS correlation, SSL certificate fingerprinting, and bulletproof hosting tracking.",
      "Digital Evidence Management: Tamper-evident forensic timelines and exportable court-ready packages compliant with ISO/IEC 27037.",
      "Lawful Cryptocurrency Analysis: Graph-based ledger analysis tracking ransom payments and stolen assets through lawful public transaction data.",
      "Coordinated Attack Correlation: Temporal clustering identifying state-sponsored or syndicate-wide distributed attack waves.",
      "Automated Takedown Request Assembly: Generating verified abuse reports and technical evidence packages for registrar notification."
    ],
    applications: [
      "Corporate cyber intelligence and brand protection units",
      "Cybercrime investigation divisions and forensic squads",
      "Anti-fraud and financial crime intelligence teams",
      "Commercial threat intelligence vendors and incident response teams"
    ],
    targetClients: [
      "National Cybercrime Investigation Bureaus",
      "Financial Fraud & Risk Departments",
      "Telecommunication Security Teams",
      "Global Cloud & Hosting Providers"
    ]
  },

  div8: {
    id: "div8",
    tag: "DIVISION 08 // INNOVATION",
    title: "Defence & Security Innovation",
    subtitle: "AI-Powered Solutions for a Safer, More Secure World",
    image: "8. Defense and Security.png",
    overview: "Our Defence & Security Innovation division hosts ten core technological initiatives designed to solve high-stakes challenges across national security, tactical readiness, and infrastructure protection. From military logistics to satellite change detection, these initiatives bridge basic AI research and mission-ready implementations.",
    capabilities: [
      "01. AI Defence Intelligence Assistant: Automated natural language summarizer for high-volume technical and tactical reports.",
      "02. Satellite Change Detection AI: High-cadence comparison of commercial imagery to detect earthworks, runway changes, and naval movements.",
      "03. Counter-Drone Monitoring Platform: Autonomous multi-sensor detection, classification, and alert dispatch for low-altitude airspace.",
      "04. Military Logistics Intelligence: Predictive demand forecasting and supply-chain risk optimization for military equipment depots.",
      "05. Predictive Maintenance AI: Acoustic and vibrational sensor analysis preventing mechanical failures in armored vehicles and generators.",
      "06. Secure Tactical Communications Monitoring: AI-driven signal health analysis and automated anomaly detection across radio frequencies.",
      "07. Critical Infrastructure Protection: Integrated sensor monitoring for energy grids, nuclear utilities, water facilities, and data backbones.",
      "08. Defence Cyber Range: High-fidelity simulation environments for automated adversary emulation and operator defence drills.",
      "09. AI Emergency Coordination System: Dynamic multi-agency resource allocation and live incident mapping during national crises.",
      "10. Defence Supply-Chain Risk Intelligence: Automated provenance verification and counterfeit electronic component risk detection."
    ],
    applications: [
      "Modernizing tactical decision cycles (OODA loop acceleration)",
      "Securing military supply chains and aerospace manufacturing pipelines",
      "Civil protection and emergency disaster response orchestration",
      "Tactical electromagnetic and communications management"
    ],
    targetClients: [
      "Ministries of Defence & National Armed Forces",
      "Critical Infrastructure & Utility Operators",
      "Emergency Disaster Management Authorities",
      "Aerospace & Defence Tier-1 Suppliers"
    ]
  },

  div9: {
    id: "div9",
    tag: "DIVISION 09 // ARCHITECTURE",
    title: "NextGenAI Defence Intelligence Stack",
    subtitle: "One Unified Platform · Multiple Missions · Greater Security",
    image: "9. Defence Intelligence Stack.png",
    overview: "The NextGenAI Defence Intelligence Stack provides the architectural foundation powering all our technologies. Structured across six robust tiers—from multi-source ingestion up to mission applications and air-gapped deployment—the Stack guarantees cryptographic security, auditability, high throughput, and zero external dependency when operating in disconnected environments.",
    capabilities: [
      "Layer 1 — Data Ingestion: High-throughput drivers for satellite feeds, security logs, radar, infrared, and threat data lakes.",
      "Layer 2 — Data Processing: Image enhancement, multi-sensor fusion, event normalization, and anomaly filtering at line rate.",
      "Layer 3 — AI Intelligence: Specialized agent swarms, retrieval-augmented generation (RAG), predictive models, and evidence linkage.",
      "Layer 4 — Security & Control: Multi-level identity access control (RBAC), end-to-end encryption, and mandatory human sign-off gates.",
      "Layer 5 — Customer Applications: Operational dashboards, geospatial visualizers, automated emergency consoles, and API gateways.",
      "Layer 6 — Deployment Infrastructure: Native deployment support across sovereign clouds, on-premises data centers, and ruggedized edge nodes."
    ],
    applications: [
      "Universal foundation for sovereign defence cloud initiatives",
      "Command and control (C2) operational software modernization",
      "Air-gapped enterprise intelligence architectures",
      "Secure federated intelligence sharing across allied commands"
    ],
    targetClients: [
      "Sovereign Cloud & Defence Infrastructure Providers",
      "Command, Control, Communications & Intelligence (C4I) Teams",
      "Enterprise Intelligence Architecture Divisions",
      "National Data Sovereignty Agencies"
    ]
  }
};

// --- 2. ARCHITECTURE STACK LAYERS DATA ---
const STACK_LAYERS = [
  {
    layer: "01",
    name: "Data Ingestion",
    sub: "Collect Trusted Data from Multiple Sources",
    status: "HIGH THROUGHPUT",
    overview: "Ingests structured and unstructured data from satellite imagery providers, military logs, RF radars, optical cameras, infrastructure sensors, and authorized threat intelligence streams.",
    nodes: [
      { name: "Authorized Satellite Imagery", desc: "Commercial & sovereign high-resolution optical and SAR imagery streams." },
      { name: "Security & Sensor Logs", desc: "Syslogs, firewall flows, SIEM alerts, and endpoint event streams." },
      { name: "Radar & Camera Feeds", desc: "Multi-band radar streams and optical/IR sensor telemetry." },
      { name: "Infrastructure Telemetry", desc: "SCADA/ICS operational metrics, utility health, and power grid status." }
    ]
  },
  {
    layer: "02",
    name: "Data Processing",
    sub: "Turn Raw Telemetry into Actionable Intelligence",
    status: "LOW LATENCY",
    overview: "Cleanses, normalizes, and fuses multi-modal sensory inputs in real time. De-duplicates alerts, executes spatial indexing, and prepares data for neural network analysis.",
    nodes: [
      { name: "Image Analysis Engine", desc: "Automated orthorectification, contrast optimization, and edge enhancement." },
      { name: "Sensor Fusion Core", desc: "Synchronizes asynchronous multi-sensor streams into a single spatial coordinate." },
      { name: "Event Normalization", desc: "Converts heterogeneous data into open, unified schema definitions." },
      { name: "Anomaly Detection Filter", desc: "Statistical outlier screening filtering noise before deep neural models." }
    ]
  },
  {
    layer: "03",
    name: "AI Intelligence",
    sub: "Gain Deeper Insight with Advanced Autonomous AI",
    status: "AGENTIC CORE",
    overview: "Orchestrates multi-agent AI teams, domain-specific large language models, retrieval-augmented generation (RAG), and predictive analytics to generate high-confidence intelligence.",
    nodes: [
      { name: "Specialized AI Agents", desc: "Autonomous task-specific agents for triage, verification, and cross-referencing." },
      { name: "RAG & Vector Memory", desc: "Cryptographically secured vector databases holding mission-specific knowledge." },
      { name: "Predictive Analytics", desc: "Statistical trend modeling projecting threat escalation and movement vectors." },
      { name: "Evidence-Based Reporting", desc: "Citations and confidence scoring linked directly to raw sensor evidence." }
    ]
  },
  {
    layer: "04",
    name: "Security & Control",
    sub: "Ensure Trust, Compliance, and Complete Governance",
    status: "ZERO TRUST",
    overview: "Implements strict cryptographic access controls, immutable audit logging, privacy redaction filters, and mandatory human-in-the-loop approval workflows for critical decisions.",
    nodes: [
      { name: "Identity & Access (RBAC/ABAC)", desc: "Granular attribute-based access control with multi-factor biometric authentication." },
      { name: "End-to-End Encryption", desc: "AES-256 and post-quantum encryption for data at rest, in transit, and in processing." },
      { name: "Immutable Audit Logging", desc: "Cryptographic hash-chained logs recording every analyst action and model inference." },
      { name: "Human Approval Workflows", desc: "Zero automated kinetic or network disruption without certified human officer sign-off." }
    ]
  },
  {
    layer: "05",
    name: "Customer Applications",
    sub: "Deliver Mission-Critical Operational Capabilities",
    status: "TACTICAL HUD",
    overview: "Presents intuitive, ultra-high performance user interfaces including geospatial common operational pictures (COP), cyber defence dashboards, logistics monitors, and automated reporting hubs.",
    nodes: [
      { name: "SOC Dashboards (Sentinel)", desc: "Real-time cyber telemetry, attack tree visualizer, and response orchestrator." },
      { name: "Satellite Monitoring Suite", desc: "Geospatial change detection interface with high-cadence temporal comparisons." },
      { name: "Infrastructure Protection", desc: "Live physical and digital security maps for utility, port, and airport authorities." },
      { name: "Logistics Intelligence Hub", desc: "Fleet readiness, parts longevity forecasting, and supply chain tracking." }
    ]
  },
  {
    layer: "06",
    name: "Deployment Infrastructure",
    sub: "Deploy Securely Anywhere — Cloud, On-Premises, or Edge",
    status: "AIR-GAPPED READY",
    overview: "Engineered to run seamlessly across sovereign private clouds, on-premises military servers, restricted classified networks, and ruggedized edge hardware in GPS-denied tactical zones.",
    nodes: [
      { name: "Private Defence Cloud", desc: "Multi-tenant sovereign installations adhering to national data residency requirements." },
      { name: "On-Premises Servers", desc: "Self-contained physical server racks with no external telemetry phoning home." },
      { name: "Restricted Military Networks", desc: "Compatible with air-gapped, SIPR-grade classified communications architectures." },
      { name: "Offline & Edge Deployments", desc: "Quantized, low-power inference models executing directly on field laptops and drones." }
    ]
  }
];

// --- 3. DOM READY INITIALIZATION ---
document.addEventListener("DOMContentLoaded", () => {
  initLiveTelemetry();
  initHeroCanvas();
  initNavigation();
  initModals();
  initStackExplorer();
  initEnquiryBuilder();
  initScrollAnimations();
  initImageFallbacks();
  initScrollSpy();
});

// --- 4. LIVE TELEMETRY SIMULATOR ---
function initLiveTelemetry() {
  const clockEl = document.getElementById("telemetryClock");
  const coordsEl = document.getElementById("telemetryCoords");
  const pingEl = document.getElementById("telemetryPing");

  function updateClock() {
    const now = new Date();
    if (clockEl) {
      clockEl.textContent = now.toISOString().replace("T", " ").substring(0, 19) + " UTC";
    }
  }
  updateClock();
  setInterval(updateClock, 1000);

  // Subtle coordinate jitter
  let lat = 33.6844;
  let lon = 73.0479;
  let alt = 42050;

  setInterval(() => {
    lat += (Math.random() - 0.5) * 0.0004;
    lon += (Math.random() - 0.5) * 0.0004;
    alt += Math.floor((Math.random() - 0.5) * 20);
    if (coordsEl) {
      coordsEl.textContent = `LAT ${lat.toFixed(4)}° N // LON ${lon.toFixed(4)}° E // ALT ${alt.toLocaleString()} FT`;
    }
  }, 3500);

  // Ping jitter
  setInterval(() => {
    const p = Math.floor(18 + Math.random() * 8);
    if (pingEl) {
      pingEl.textContent = `${p}ms`;
    }
  }, 4000);
}

// --- 5. CINEMATIC HERO CANVAS ANIMATION ---
function initHeroCanvas() {
  const canvas = document.getElementById("heroCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  let width, height;
  let animationFrameId;

  const particles = [];
  const particleCount = 65;

  function resize() {
    width = canvas.width = window.innerWidth;
    height = canvas.height = canvas.parentElement.offsetHeight;
  }
  window.addEventListener("resize", resize);
  resize();

  // Create particles
  for (let i = 0; i < particleCount; i++) {
    particles.push({
      x: Math.random() * width,
      y: Math.random() * height,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      size: Math.random() * 2 + 0.8,
      color: Math.random() > 0.65 ? "#00D5FF" : (Math.random() > 0.5 ? "#39FF88" : "#8B949E"),
      alpha: Math.random() * 0.6 + 0.2
    });
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);

    // Subtle Digital Terrain Grid
    ctx.strokeStyle = "rgba(0, 213, 255, 0.03)";
    ctx.lineWidth = 1;
    const gridSize = 70;
    for (let x = 0; x < width; x += gridSize) {
      ctx.beginPath();
      ctx.moveTo(x, 0);
      ctx.lineTo(x, height);
      ctx.stroke();
    }
    for (let y = 0; y < height; y += gridSize) {
      ctx.beginPath();
      ctx.moveTo(0, y);
      ctx.lineTo(width, y);
      ctx.stroke();
    }

    // Draw Particles & Neural Connectors
    for (let i = 0; i < particles.length; i++) {
      const p = particles[i];
      p.x += p.vx;
      p.y += p.vy;

      if (p.x < 0) p.x = width;
      if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height;
      if (p.y > height) p.y = 0;

      ctx.save();
      ctx.globalAlpha = p.alpha;
      ctx.fillStyle = p.color;
      ctx.beginPath();
      ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
      ctx.fill();
      ctx.restore();

      // Connect nearby particles
      for (let j = i + 1; j < particles.length; j++) {
        const p2 = particles[j];
        const dx = p.x - p2.x;
        const dy = p.y - p2.y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 110) {
          ctx.save();
          ctx.globalAlpha = (1 - dist / 110) * 0.15;
          ctx.strokeStyle = "#00D5FF";
          ctx.lineWidth = 0.8;
          ctx.beginPath();
          ctx.moveTo(p.x, p.y);
          ctx.lineTo(p2.x, p2.y);
          ctx.stroke();
          ctx.restore();
        }
      }
    }

    animationFrameId = requestAnimationFrame(draw);
  }

  draw();
}

// --- 6. NAVIGATION & MOBILE DRAWER ---
function initNavigation() {
  const navbar = document.getElementById("mainNavbar");
  const toggleBtn = document.getElementById("navToggle");
  const mobileNav = document.getElementById("mobileNav");
  const navLinks = document.querySelectorAll(".nav-link, .mobile-nav-link");

  // Sticky navbar shadow on scroll
  window.addEventListener("scroll", () => {
    if (window.scrollY > 40) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

  // Mobile toggle
  if (toggleBtn && mobileNav) {
    toggleBtn.addEventListener("click", () => {
      toggleBtn.classList.toggle("active");
      mobileNav.classList.toggle("open");
      document.body.style.overflow = mobileNav.classList.contains("open") ? "hidden" : "";
    });

    // Close on clicking links
    navLinks.forEach(link => {
      link.addEventListener("click", () => {
        toggleBtn.classList.remove("active");
        mobileNav.classList.remove("open");
        document.body.style.overflow = "";
      });
    });
  }
}

// --- 7. TECHNOLOGY DETAIL MODAL SYSTEM ---
function initModals() {
  const overlay = document.getElementById("techModalOverlay");
  const closeBtn = document.getElementById("modalCloseBtn");
  const exploreButtons = document.querySelectorAll("[data-explore-div]");

  // Modal elements
  const modalTag = document.getElementById("modalTag");
  const modalTitle = document.getElementById("modalTitle");
  const modalSubtitle = document.getElementById("modalSubtitle");
  const modalImg = document.getElementById("modalImg");
  const modalOverview = document.getElementById("modalOverview");
  const modalCapsList = document.getElementById("modalCapabilities");
  const modalAppsList = document.getElementById("modalApplications");
  const modalClientsList = document.getElementById("modalClients");
  const modalWaBtn = document.getElementById("modalWhatsAppBtn");

  function openDivision(divKey) {
    const data = DIVISIONS_DATA[divKey];
    if (!data) return;

    if (modalTag) modalTag.textContent = data.tag;
    if (modalTitle) modalTitle.textContent = data.title;
    if (modalSubtitle) modalSubtitle.textContent = data.subtitle;
    if (modalImg) {
      modalImg.src = encodeURI(data.image);
      modalImg.alt = data.title;
    }
    if (modalOverview) modalOverview.textContent = data.overview;

    // Populate Capabilities
    if (modalCapsList) {
      modalCapsList.innerHTML = data.capabilities.map(cap => {
        return `<div class="modal-cap-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="20 6 9 17 4 12"></polyline></svg>
          <span>${cap}</span>
        </div>`;
      }).join("");
    }

    // Populate Applications
    if (modalAppsList) {
      modalAppsList.innerHTML = data.applications.map(app => {
        return `<div class="modal-cap-item">
          <svg viewBox="0 0 24 24" fill="none" stroke="#00D5FF" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
          <span>${app}</span>
        </div>`;
      }).join("");
    }

    // Populate Target Clients
    if (modalClientsList) {
      modalClientsList.innerHTML = data.targetClients.map(c => {
        return `<span class="modal-client-pill">${c}</span>`;
      }).join("");
    }

    // WhatsApp Contact CTA
    if (modalWaBtn) {
      const waMsg = encodeURIComponent(`Hello NextGenAI Defence Technologies team,\n\nI am interested in exploring ${data.title} (${data.tag}). Please provide information regarding development specifications, enterprise architecture, and deployment options.\n\nThank you.`);
      modalWaBtn.href = `https://wa.me/923060824762?text=${waMsg}`;
    }

    overlay.classList.add("active");
    document.body.style.overflow = "hidden";
  }

  exploreButtons.forEach(btn => {
    btn.addEventListener("click", (e) => {
      e.preventDefault();
      const divKey = btn.getAttribute("data-explore-div");
      openDivision(divKey);
    });
  });

  function closeModal() {
    overlay.classList.remove("active");
    document.body.style.overflow = "";
  }

  if (closeBtn) closeBtn.addEventListener("click", closeModal);

  if (overlay) {
    overlay.addEventListener("click", (e) => {
      if (e.target === overlay) closeModal();
    });
  }

  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && overlay && overlay.classList.contains("active")) {
      closeModal();
    }
  });
}

// --- 8. INTERACTIVE ARCHITECTURE STACK EXPLORER ---
function initStackExplorer() {
  const layerCards = document.querySelectorAll(".stack-layer-card");
  const detailTag = document.getElementById("stackLayerTag");
  const detailTitle = document.getElementById("stackLayerTitle");
  const detailDesc = document.getElementById("stackLayerDesc");
  const detailNodes = document.getElementById("stackLayerNodes");

  function renderLayer(index) {
    const layer = STACK_LAYERS[index];
    if (!layer) return;

    layerCards.forEach((c, i) => {
      if (i === index) c.classList.add("active");
      else c.classList.remove("active");
    });

    if (detailTag) detailTag.textContent = `LAYER ${layer.layer} // ${layer.status}`;
    if (detailTitle) detailTitle.textContent = `${layer.name}: ${layer.sub}`;
    if (detailDesc) detailDesc.textContent = layer.overview;

    if (detailNodes) {
      detailNodes.innerHTML = layer.nodes.map(n => {
        return `<div class="stack-node-item">
          <div class="stack-node-name">${n.name}</div>
          <div class="stack-node-desc">${n.desc}</div>
        </div>`;
      }).join("");
    }
  }

  layerCards.forEach((card, idx) => {
    card.addEventListener("click", () => renderLayer(idx));
  });

  // Initial render layer 0
  renderLayer(0);
}

// --- 9. WHATSAPP INTERACTIVE ENQUIRY BUILDER ---
function initEnquiryBuilder() {
  const optionButtons = document.querySelectorAll(".enquiry-option-btn");
  const nameInput = document.getElementById("enquiryName");
  const orgInput = document.getElementById("enquiryOrg");
  const techSelect = document.getElementById("enquiryTech");
  const msgInput = document.getElementById("enquiryMessage");
  const submitBtn = document.getElementById("enquirySubmitBtn");

  let selectedIntent = "Contact Our Team";

  optionButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      optionButtons.forEach(b => b.classList.remove("active"));
      btn.classList.add("active");
      selectedIntent = btn.getAttribute("data-intent");
    });
  });

  if (submitBtn) {
    submitBtn.addEventListener("click", (e) => {
      e.preventDefault();
      const name = nameInput && nameInput.value.trim() ? nameInput.value.trim() : "Prospective Client / Partner";
      const org = orgInput && orgInput.value.trim() ? orgInput.value.trim() : "Undisclosed Organization";
      const tech = techSelect ? techSelect.value : "General Inquiry";
      const userMsg = msgInput && msgInput.value.trim() ? msgInput.value.trim() : "We would like to request an introductory technical discussion regarding NextGenAI capabilities.";

      const composedText = 
`*NEXTGENAI DEFENCE TECHNOLOGIES — ENQUIRY*
---------------------------------------
*Enquiry Purpose:* ${selectedIntent}
*Sender:* ${name}
*Organization:* ${org}
*Focus Domain:* ${tech}

*Message:*
${userMsg}
---------------------------------------
_Sent via NextGenAI Defence Official Portal_`;

      const encodedUrl = `https://wa.me/923060824762?text=${encodeURIComponent(composedText)}`;
      window.open(encodedUrl, "_blank", "noopener,noreferrer");
    });
  }
}

// --- 10. SCROLL REVEAL ANIMATIONS (INTERSECTION OBSERVER) ---
function initScrollAnimations() {
  const revealElements = document.querySelectorAll(".reveal-fade");

  const observer = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("revealed");
        obs.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.12,
    rootMargin: "0px 0px -40px 0px"
  });

  revealElements.forEach(el => observer.observe(el));
}

// --- 11. TACTICAL IMAGE FALLBACK HANDLER ---
function initImageFallbacks() {
  const images = document.querySelectorAll("img");
  images.forEach(img => {
    img.addEventListener("error", () => {
      const altText = img.alt || "NextGenAI Defence Technology";
      // Generate sleek tactical SVG fallback
      const svgFallback = `
        <svg xmlns="http://www.w3.org/2000/svg" width="800" height="450" viewBox="0 0 800 450" style="background:#080D14; width:100%; height:100%;">
          <defs>
            <linearGradient id="g" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stop-color="#00D5FF" stop-opacity="0.8"/>
              <stop offset="100%" stop-color="#39FF88" stop-opacity="0.6"/>
            </linearGradient>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(0,213,255,0.07)" stroke-width="1"/>
            </pattern>
          </defs>
          <rect width="800" height="450" fill="url(#grid)" />
          <circle cx="400" cy="200" r="110" fill="none" stroke="rgba(0,213,255,0.2)" stroke-dasharray="6 6" />
          <circle cx="400" cy="200" r="70" fill="none" stroke="rgba(57,255,136,0.3)" />
          <circle cx="400" cy="200" r="28" fill="rgba(0,213,255,0.15)" stroke="#00D5FF" stroke-width="2" />
          <line x1="260" y1="200" x2="540" y2="200" stroke="rgba(0,213,255,0.25)" stroke-width="1" />
          <line x1="400" y1="60" x2="400" y2="340" stroke="rgba(0,213,255,0.25)" stroke-width="1" />
          <text x="400" y="380" fill="#00D5FF" font-family="monospace" font-size="16" font-weight="bold" letter-spacing="4" text-anchor="middle">NEXTGENAI // SENSOR FEED SIMULATION</text>
          <text x="400" y="410" fill="#9AA7B6" font-family="sans-serif" font-size="14" text-anchor="middle">${altText}</text>
        </svg>
      `;
      img.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(svgFallback)}`;
      img.style.objectFit = "cover";
    }, { once: true });
  });
}

// --- 12. SCROLLSPY ACTIVE NAV HIGHLIGHTING ---
function initScrollSpy() {
  const sections = document.querySelectorAll("section[id]");
  const navLinks = document.querySelectorAll(".nav-link");

  window.addEventListener("scroll", () => {
    let currentId = "";
    const scrollPos = window.scrollY + 120;

    sections.forEach(sec => {
      const top = sec.offsetTop;
      const height = sec.offsetHeight;
      if (scrollPos >= top && scrollPos < top + height) {
        currentId = sec.getAttribute("id");
      }
    });

    navLinks.forEach(link => {
      link.classList.remove("active");
      if (link.getAttribute("href") === `#${currentId}`) {
        link.classList.add("active");
      }
    });
  });
}
