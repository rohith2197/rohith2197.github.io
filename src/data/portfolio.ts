export type Project = {
  title: string;
  eyebrow: string;
  summary: string;
  detail: string;
  filters: string[];
  tools: string[];
  result?: string;
};

export const projects: Project[] = [
  {
    title: "Schema-safe vehicle telemetry",
    eyebrow: "Cruise · Systems / Data",
    summary: "Made a distributed pub/sub reader preserve the exact IDL types engineers declared.",
    detail: "Built a Python/C API around Cruise's PubSubMultiReader and enforced field types across service boundaries, stopping silent widening such as booleans becoming 64-bit integers.",
    filters: ["Systems", "Embedded", "ML & Data"],
    tools: ["C", "Python", "IDL / TLV", "Pub/Sub"],
    result: "Up to 68.3% smaller serialized payloads",
  },
  {
    title: "RuncOS",
    eyebrow: "Realtime unmanned navigation & control",
    summary: "A compact, safety-minded RTOS for autonomous-vehicle control on ARM Cortex-M3 / STM32.",
    detail: "Built a six-task mixed-criticality pipeline at 1 kHz, with a dual-layer 200 Hz fault monitor, zero heap allocation, and deterministic halt behavior after fault detection.",
    filters: ["Systems", "Embedded", "Robotics"],
    tools: ["C++", "STM32", "RTOS", "Renode"],
    result: "Fault response within 5 ms",
  },
  {
    title: "Microclimate simulation",
    eyebrow: "Georgia Tech · REMAP",
    summary: "Used LiDAR-derived features to model the thermal environment around autonomous vehicles.",
    detail: "Implemented and validated a SOLWEIG microclimate workflow for perceived temperature, then engineered an alternative pipeline that reduced runtime without spatial compression.",
    filters: ["ML & Data", "Robotics"],
    tools: ["Python", "LiDAR", "SOLWEIG", "Simulation"],
    result: "RMSE < 1.5°C · 93% faster · 99.3% accuracy",
  },
  {
    title: "Open-source fixes, upstream",
    eyebrow: "JupyterLab · Zephyr RTOS",
    summary: "Debugged failures at the seam between drivers, data backends, and user-facing tools.",
    detail: "Traced a JupyterLab kernel-state mismatch to inconsistent drive-prefix handling, and corrected STM32 Zephyr OSPI locking and flash-buffer alignment issues.",
    filters: ["Systems", "Embedded", "Open source"],
    tools: ["C", "C++", "TypeScript", "Testing"],
    result: "Regression-focused fixes across two projects",
  },
  {
    title: "LDL binary protocol library",
    eyebrow: "Low-latency systems",
    summary: "Designed a deterministic UART framing protocol with a zero-copy deserialization path.",
    detail: "Built a modular handshake and framing layer, then calibrated buffered timestamps across emulated clock drift and jitter between independent sensor streams.",
    filters: ["Systems", "Embedded"],
    tools: ["C", "POSIX", "UART", "Binary protocols"],
    result: "About 1 ms average sync error",
  },
  {
    title: "Relay",
    eyebrow: "RAG · Disaster recovery assistant",
    summary: "A source-grounded web app to help flood survivors navigate disaster-recovery paperwork.",
    detail: "Designed query routing for eligibility, documentation, checklists, and appeals, with a browser-based knowledge dashboard for re-ingestion and vector-store maintenance.",
    filters: ["ML & Data", "Backend"],
    tools: ["Python", "Django", "RAG", "SQLite / sqlite-vec"],
    result: "Grounded guidance from verified government and legal sources",
  },
  {
    title: "BQuantLite",
    eyebrow: "Time-series analytics",
    summary: "A Python research library for multi-ticker market data and adaptive signal analysis.",
    detail: "Combined rolling statistics with an adaptive Kalman filter and a notebook dashboard; the risk module reports Sharpe, Sortino, Calmar, and drawdown metrics.",
    filters: ["ML & Data", "Quant"],
    tools: ["Python", "Jupyter", "Kalman filter", "Widgets"],
  },
  {
    title: "LADEE lunar dust routing",
    eyebrow: "Robotics · Path optimization",
    summary: "Modeled terrain risk and route choices for a simulated lunar rover.",
    detail: "Built predictive dust-hazard maps from NASA LADEE data and used weighted Dijkstra pathfinding in PyBullet to trade off distance against hazard.",
    filters: ["ML & Data", "Robotics"],
    tools: ["Python", "Dijkstra", "PyBullet", "NASA LADEE"],
  },
];

export const experience = [
  {
    organization: "Cruise (General Motors Autonomous Vehicles)",
    role: "Software Engineer Intern · AV Platform OS & MCU Team",
    period: "Summer 2026",
    location: "Warren, MI",
    note: "Worked on schema-accurate data paths, camera-stream integrity, and bounded-memory processing in autonomous-vehicle infrastructure.",
    mark: "C",
  },
  {
    organization: "Georgia Tech · REMAP",
    role: "Machine Learning Researcher · Mapping & Mobility",
    period: "Jan 2025 — May 2026",
    location: "Atlanta, GA",
    note: "Built compression and state-estimation pipelines for large mapping datasets and sensor signals.",
    mark: "R",
  },
  {
    organization: "Georgia Tech · REMAP",
    role: "Perception & Simulation Engineer · Microclimate",
    period: "Aug 2025 — May 2026",
    location: "Atlanta, GA",
    note: "Processed large sequential sensor streams and modeled environmental conditions for downstream simulation.",
    mark: "R",
  },
  {
    organization: "Kavi Audio",
    role: "Software Engineer Intern · Systems & ML",
    period: "Aug 2024 — Jan 2026",
    location: "Atlanta, GA",
    note: "Worked on transcript-based recommendations, cloud authentication, and an embedded audio-streaming project.",
    mark: "K",
  },
  {
    organization: "System Technology Works",
    role: "Lead ML Intern",
    period: "May 2024 — Aug 2024",
    location: "Alpharetta, GA",
    note: "Deployed quantized language models for on-device inference on a humanoid robot.",
    mark: "S",
  },
];

export const skillGroups = [
  {
    title: "Systems & embedded",
    copy: "C++20, C, Python/C extensions, Rust, Bash, SQL, Linux kernel and drivers, POSIX, concurrency, distributed pub/sub, IDL / TLV schema enforcement, serialization, zero-copy protocols, ARM Cortex-M3, STM32, Zephyr, FreeRTOS, UART, Raspberry Pi, Arduino, Yocto / BitBake, zero-heap allocation.",
  },
  {
    title: "Data & applied ML",
    copy: "Pandas, NumPy, Jupyter, exploratory data analysis, data visualization, feature engineering, time-series analysis, NLP, vector embeddings, computer vision with MediaPipe, LLM inference with Ollama, model quantization, graph-based probabilistic models, Kalman filtering, state estimation, predictive modeling.",
  },
  {
    title: "Performance & tooling",
    copy: "Compression pipelines, cache-aware data structures, GCC / Clang, Valgrind, perf, Bazel, Docker, Git, Renode hardware simulation, PyBullet, Fusion 360, AWS Cognito.",
  },
  {
    title: "Cloud & open source",
    copy: "AWS Cognito, JupyterLab, Zephyr RTOS, upstream debugging, regression testing, Python, Django, SQLite / sqlite-vec, RAG, retrieval systems, vector search.",
  },
  {
    title: "Quant & fundamentals",
    copy: "Probability and statistics, rolling statistics, Sharpe / Sortino / Calmar ratios, maximum drawdown, data structures and algorithms, Dijkstra graph algorithms, operating systems, networking protocols.",
  },
];
