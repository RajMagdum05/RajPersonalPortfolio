export interface ProjectMetric {
  value: string;
  label: string;
}

export interface Project {
  slug: string;
  title: string;
  oneLiner: string;
  category: string;
  status?: "In development" | "Shipped" | "Prototype";
  year: string;
  role: string;
  stack: string[];
  metrics: ProjectMetric[];
  problem: string[];
  approach: string[];
  architecture?: string[];
  results: string[];
  learnings?: string[];
  links: {
    github?: string;
    demo?: string;
    instagram?: string;
  };
  demo?: "autopsy" | "claims" | null;
}

export const projects: Project[] = [
  {
    slug: "health-insurance-ai-pipeline",
    title: "Health Insurance AI Pipeline",
    oneLiner: "End-to-end claims automation that refuses to give a confident wrong answer.",
    category: "APPLIED AI · DOCUMENT INTELLIGENCE",
    year: "2026",
    role: "AI Architecture & Engineering",
    stack: ["Python", "OCR", "RAG", "Guardrails", "OpenTelemetry", "PostgreSQL"],
    metrics: [
      { value: "56", label: "automated tests" },
      { value: "4", label: "pipeline stages" },
      { value: "1", label: "trace to root cause" }
    ],
    problem: [
      "Insurance claims arrive as messy, mixed documents. Generic extraction guesses fields confidently, and a bad scan silently becomes wrong data."
    ],
    approach: [
      "Multi-stage pipeline: intake → OCR → classification → structured extraction against dedicated schemas, with RAG for contextual grounding.",
      "An OCR quality gate stops low-confidence text from reaching extraction, plus deterministic field validation. A bad scan fails loudly.",
      "Every stage is instrumented with OpenTelemetry tracing for per-stage latency, tokens, and error attribution."
    ],
    architecture: [
      "Document Intake",
      "OCR Engine",
      "Quality Gate (Conf ≥ 0.85)",
      "Schema Classification",
      "Contextual Extraction",
      "Audit Trace"
    ],
    results: [
      "Root-cause debugging cut to a single trace lookup.",
      "56 automated tests verifying zero confident hallucinations on low-quality scans."
    ],
    links: {
      github: "https://github.com/RajMagdum05/Pipeline-Autopsy"
    },
    demo: "claims"
  },
  {
    slug: "pipeline-autopsy",
    title: "Pipeline Autopsy",
    oneLiner: "Automated root cause analysis for AI pipelines. When something breaks, it tells you which stage actually caused it.",
    category: "AI RELIABILITY · OBSERVABILITY",
    year: "2026",
    role: "Design & engineering",
    stack: ["Python", "OpenTelemetry", "Custom SDK", "Artifact Lineage", "Deterministic RCA Core"],
    metrics: [
      { value: "86", label: "tests passing across service and SDK" },
      { value: "37", label: "failure test cases verified" },
      { value: "0", label: "code changes needed in host pipelines" }
    ],
    problem: [
      "Multi-step AI pipelines fail quietly. A bad output at the end usually starts somewhere upstream, so engineers lose hours tracing logs across stages to find the real culprit."
    ],
    approach: [
      "A standalone service. Pipelines plug in through its own SDK over standard OpenTelemetry, with no changes to their code.",
      "Artifact lineage tracks which stage read and wrote each output, tracing a bad result back to its true cause.",
      "Keep the LLM out of the decision: A deterministic core picks the root cause; guardrails and evals check it; a template fallback handles thin evidence."
    ],
    architecture: [
      "Host pipeline",
      "SDK · OTel spans",
      "Lineage graph",
      "Deterministic RCA core",
      "Guardrails + Evals",
      "Report"
    ],
    results: [
      "Verified on 37 test cases covering fan-out, business-rule, and starvation failures.",
      "86 automated tests passing across service and SDK."
    ],
    links: {
      github: "https://github.com/RajMagdum05/Pipeline-Autopsy"
    },
    demo: "autopsy"
  },
  {
    slug: "hearly",
    title: "Hearly",
    oneLiner: "A privacy-focused meeting assistant. Hear only you. 100% on-device.",
    category: "PRODUCT · ON-DEVICE AI",
    status: "In development",
    year: "2025 – Present",
    role: "Founder & Product Engineer",
    stack: ["Chrome Extension", "ONNX", "AudioWorklet", "YC Startup School"],
    metrics: [
      { value: "100%", label: "on-device processing" },
      { value: "0", label: "cloud audio leaks" },
      { value: "YC", label: "Startup School enrolled" }
    ],
    problem: [
      "In video calls, background chatter leaks in, and existing AI meeting tools send sensitive conversation audio to cloud servers without user control."
    ],
    approach: [
      "Discovered and validated the problem firsthand.",
      "Engineered a local-first Chrome extension that captures Google Meet audio through an AudioWorklet pipeline.",
      "Processes audio in chunks on-device with ONNX models for live transcription with zero cloud dependency."
    ],
    architecture: [
      "AudioWorklet Capture",
      "Chunk Buffer",
      "ONNX Local Runtime",
      "Client Transcription",
      "Private Storage"
    ],
    results: [
      "Achieved sub-second local transcription latency on standard consumer laptops.",
      "Enrolled in Y Combinator Startup School to guide further iterations."
    ],
    links: {
      github: "https://github.com/RajMagdum05/Hearly-Version-1",
      instagram: "https://www.instagram.com/hearly.livee?cnvx=ZDZoZnFndHJmbmFh"
    },
    demo: null
  },
  {
    slug: "vehicle-insurance-claim-prediction",
    title: "Vehicle Claim Prediction",
    oneLiner: "ML risk prediction to spot high-risk insurance policies early.",
    category: "MACHINE LEARNING",
    year: "2025",
    role: "ML Engineer",
    stack: ["Python", "scikit-learn", "pandas", "Streamlit"],
    metrics: [
      { value: "30,100", label: "records analyzed" },
      { value: "44", label: "features engineered" },
      { value: "4", label: "models compared" }
    ],
    problem: [
      "Uncalibrated insurance risks lead to unexpected claim spikes. Early identification allows targeted premiums and proactive loss prevention."
    ],
    approach: [
      "Engineered full preprocessing pipeline with one-hot encoding, regex feature extraction, and standard scaling.",
      "Trained and compared 4 machine learning models to maximize ROC-AUC.",
      "Deployed an intuitive Streamlit interface allowing underwriters to input policy parameters and receive instant probability estimates."
    ],
    architecture: [
      "Policy Ingestion",
      "Feature Engineering",
      "Ensemble Models",
      "Risk Score Generator",
      "Streamlit UI"
    ],
    results: [
      "Achieved high precision on top decile of claims.",
      "Interactive evaluation dashboard with 43 input fields."
    ],
    links: {
      github: "https://github.com/RajMagdum05/94880_DS_Assignments/tree/main/Project"
    },
    demo: null
  }
];
