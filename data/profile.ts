// Place your portrait at: public/images/portrait.webp (or portrait.jpg)
export type Testimonial = {
  quote: string;
  name: string;
  title: string;
  avatar: string;
};

export const profile = {
  name: "Abhinav Kumar",
  title: "Software Engineer (AI)",
  location: "Patna, Bihar, India",
  headline: "Software Engineer (AI) at ESDS Software Solutions Limited",
  portrait: "/images/portrait.webp", // Fallback to initials if not present
  portraitBadges: ["AI", "LLMs", "Data"],
  summary:
    "Software Engineer (AI) at ESDS Software Solutions Limited, focused on AI systems, LLM optimization, agentic workflows, anomaly detection, recommendation systems, and production ML engineering. Dual degree student at IIT Kharagpur in Aerospace Engineering with a minor in Computer Science and micro-specialization in AI and Applications.",
  bio: `Software Engineer (AI) at ESDS Software Solutions Limited working across AI systems, LLM optimization, and production-grade ML workflows. Experience spans agentic extraction APIs, BERT-based log analysis, diffusion reinforcement learning, recommender systems, fraud detection, RAG, and large-scale data pipelines.`,
  social: {
    github: "https://github.com/abhinav16aero",
    githubAmd: "https://github.com/abhinav16aero",
    linkedin: "https://www.linkedin.com/in/abhinav16aero/",
    email: "mailto:anu55abhi@gmail.com",
  },
  resumeUrl: "/CV_Abhinav.pdf",
  hero: {
    name: "Abhinav Kumar",
    subtitle: "Software Engineer | AI, LLMs, and Data Science",
    bio: "Building AI software systems at ESDS, with internship work across agentic extraction APIs, log analysis, diffusion RL, recommendation systems, and cloud data pipelines.",
    commands: [
      "AI systems @ ESDS",
      "LLM optimization & agentic workflows",
      "BERT, RAG, diffusion RL, and recommender systems",
      "Python, FastAPI, Flask, Docker, AWS, GCP",
    ],
    now: "Building production AI systems and optimized LLM workflows at ESDS Software Solutions Limited.",
  },
  quickFacts: [
    { label: "Current Role", value: "Software Engineer (AI) @ ESDS" },
    { label: "Location", value: "Nashik, Maharashtra, India" },
    { label: "Education", value: "Dual Degree, IIT Kharagpur · CGPA 7.94" },
    { label: "Focus", value: "AI Systems, LLMs, ML Optimization" },
  ],
  nowCard: {
    title: "Now",
    body: "Currently building AI software systems at ESDS Software Solutions Limited in Nashik.",
  },
  skills: {
    Languages: [
      { name: "C/C++" },
      { name: "Java" },
      { name: "Python" },
      { name: "R" },
      { name: "SQL" },
      { name: "MATLAB" },
    ],
    Frameworks: [
      { name: "React" },
      { name: "Node.js" },
      { name: "Django" },
      { name: "Express" },
      { name: "Tailwind CSS" },
      { name: "Flask" },
      { name: "FastAPI" },
    ],
    "Tools and Platforms": [
      { name: "Git" },
      { name: "Jupyter Notebook" },
      { name: "Google Colab" },
      { name: "Docker" },
      { name: "AWS" },
      { name: "Azure" },
      { name: "GCP" },
      { name: "Hadoop" },
      { name: "Linux" },
      { name: "Terraform" },
    ],
    Libraries: [
      { name: "NumPy" },
      { name: "Pandas" },
      { name: "Matplotlib" },
      { name: "Keras" },
      { name: "OpenCV" },
      { name: "Scikit-Learn" },
      { name: "PySpark" },
      { name: "PyTorch" },
      { name: "TensorFlow" },
    ],
    "AI and Data": [
      { name: "LLMs" },
      { name: "LangGraph" },
      { name: "BERT" },
      { name: "RAG" },
      { name: "FAISS" },
      { name: "XGBoost" },
      { name: "CatBoost" },
      { name: "LightGBM" },
      { name: "Stable Diffusion" },
    ],
  },
  experience: [
    {
      company: "ESDS Software Solutions Limited",
      companyUrl: "https://www.esds.co.in",
      logo: "/images/logos/ESDS_logo.png",
      role: "Software Engineer (AI)",
      type: "Permanent Full-time",
      dates: "Jun 2026 — Present",
      location: "Nashik, Maharashtra, India",
      summary:
        "Building AI software systems with a focus on optimization, evaluation, automation, and production reliability.",
      bullets: [
        "Working on production AI systems and LLM optimization workflows at ESDS Software Solutions Limited.",
        "Improving intelligent software features through evaluation, automation, and latency-aware engineering.",
        "Integrating model-backed services with reliable APIs, logging, and deployment practices.",
        "Applying Python, cloud tooling, and ML engineering patterns to ship practical AI capabilities.",
      ],
      tech: ["Python", "LLMs", "GenAI", "AI Optimization", "Cloud", "MLOps"],
    },
    {
      company: "Aditya Birla Group",
      companyUrl: "https://www.adityabirla.com",
      logo: "/images/logos/Logo_of_Aditya_Birla_Group_March_201836-80.png",
      role: "Intern",
      type: "Internship",
      dates: "Jan 2026 — Apr 2026",
      location: "Mumbai, Maharashtra, India · Remote",
      summary:
        "Worked on qualitative coating risk analysis, anomaly detection, and architecture planning for persistent-memory optimization in an internal Agentic AI tool.",
      bullets: [
        "Worked on qualitative coating risk analysis and anomaly detection using machine learning and deep learning methods.",
        "Developed architecture planning for integrating Supermemory into an internal Agentic AI tool.",
        "Focused on optimizing persistent memory workflows for long-running agentic systems.",
        "Applied ML and deep learning methods to support risk analysis and anomaly detection use cases.",
      ],
      tech: [
        "Machine Learning",
        "Deep Learning",
        "Anomaly Detection",
        "Agentic AI",
        "Persistent Memory",
      ],
    },
    {
      company: "Accenture",
      companyUrl: "https://www.accenture.com",
      logo: "/images/logos/accenture.png",
      role: "Summer Intern",
      dates: "May 2025 — Jul 2025",
      location: "Noida, India",
      summary:
        "Developed a multithreaded entity extraction API and multi-agent document processing service for invoices and receipts.",
      bullets: [
        "Developed an entity extraction API microservice with multithreading for structured invoice and receipt processing.",
        "Built a multi-agent extraction service using LangGraph with validator agents, retry policies, and Pydantic parsing.",
        "Deployed on GCP Cloud Functions with JSON logging and correlation IDs.",
        "Benchmarked against DocAI and LLM workflows on Vertex AI, achieving average throughput of 2.3 seconds per document.",
        "Load tested 100+ documents in Postman, evaluated OpenAI vs Gemini cost tradeoffs, and provisioned infrastructure using Terraform.",
      ],
      tech: [
        "Python",
        "LangGraph",
        "Pydantic",
        "GCP",
        "Vertex AI",
        "Terraform",
      ],
    },
    {
      company: "Business Integration Systems (India) Pvt. Ltd.",
      companyUrl: "https://bisil.com/",
      logo: "/images/logos/bisil_logo.jpeg",
      role: "GenAI Intern",
      dates: "Feb 2025 — May 2025",
      location: "Pune, India",
      summary:
        "Designed a rule-based and BERT-powered log analyzer pipeline with secure parsing, validation, and batch inference.",
      bullets: [
        "Designed a rule-based plus BERT log analyzer pipeline with regex rules, error validation, PII redaction, and fuzzy confidence scoring.",
        "Achieved an F1 score of 0.94 for the log analysis workflow.",
        "Containerized the service using Docker and served it through a Flask API.",
        "Implemented parallelized batch inference reaching 12 seconds per 100 logs.",
        "Added MIME type validation, regex filters, and a dynamic chunking-based log parser.",
      ],
      tech: ["BERT", "NLP", "Flask", "Docker", "Regex", "PII Redaction"],
    },
    {
      company: "Centre for Applied Research in Data Science (CARDS), IIT Ropar",
      companyUrl: "https://www.iitrpr.ac.in",
      logo: "/images/logos/iit ropar.png",
      role: "Research Intern",
      dates: "May 2024 — Jul 2024",
      location: "IIT Ropar, India",
      summary:
        "Investigated diffusion-based reinforcement learning methods for trajectory generation, planning, and optimization.",
      bullets: [
        "Investigated diffusion-based DDPM reinforcement learning methods for trajectory generation and optimization.",
        "Analyzed classifier-guided sampling for planning tasks.",
        "Proposed a reverse diffusion trajectory reuse technique.",
        "Trained and evaluated trajectory planning models on NVIDIA A100 GPUs.",
      ],
      tech: [
        "DDPM",
        "Reinforcement Learning",
        "Trajectory Optimization",
        "PyTorch",
        "NVIDIA A100",
      ],
    },
    {
      company: "Crafteak",
      companyUrl: "https://crafteak.com/",
      logo: "/images/logos/favicon.png",
      role: "Data Science Intern",
      dates: "Aug 2023 — Nov 2023",
      location: "Shivpuri, India",
      summary:
        "Built personalized recommendation and NLP pipelines for food topping suggestions and data-efficient modeling.",
      bullets: [
        "Developed an advanced recommendation system for personalized food topping suggestions.",
        "Built a BERT-NER and Word2Vec pipeline with FAISS-based retrieval and rule ranking, improving NDCG@5 by 4%.",
        "Built a GAN-BERT model that reduced labeled data requirements by 30%.",
        "Optimized 1.2 GB data queries using PySpark SQL with partition pruning.",
      ],
      tech: [
        "BERT-NER",
        "Word2Vec",
        "FAISS",
        "GAN-BERT",
        "PySpark",
        "Recommender Systems",
      ],
    },
  ],
  projects: [
    {
      title: "Transactional Fraud Detection",
      role: "Self Project · Mar 2025",
      description:
        "End-to-end XGBoost fraud detection pipeline using temporal and behavioral features for leakage-safe transaction classification.",
      tech: ["XGBoost", "Python", "Feature Engineering", "PR AUC", "F1"],
      outcomes:
        "Improved PR AUC from 0.2129 to 0.9395 and achieved F1 0.9612 on unseen test data.",
      repo: "",
      demo: "",
      featured: true,
      images: [],
      details: {
        problem:
          "Transactional fraud data is highly imbalanced, noisy, and prone to leakage when dominant or temporally invalid features are used directly.",
        approach:
          "Engineered temporal and behavioral features, handled class imbalance, tuned thresholds, and removed dominant features to prevent overfitting.",
        results:
          "Built a leakage-safe fraud model that improved PR AUC to 0.9395 and reached F1 0.9612 on unseen test data.",
      },
    },
    {
      title: "Reddit Data Pipeline and T20WC 2024 Analysis",
      role: "Self Project · Jun 2024 — Jul 2024",
      description:
        "Cloud data engineering and analytics pipeline for Reddit ingestion, sentiment analysis, and T20 World Cup 2024 cricket analysis.",
      tech: [
        "Apache Airflow",
        "AWS Glue",
        "Athena",
        "S3",
        "RoBERTa",
        "Redshift",
        "Databricks",
      ],
      outcomes:
        "Ingested 1k+ Reddit posts, partitioned S3 data, ran RoBERTa sentiment analysis, and analyzed Team India performance on Spark.",
      repo: "",
      demo: "",
      featured: true,
      images: [],
      details: {
        problem:
          "Social and sports data needed reliable ingestion, transformation, storage, and analytics across multiple cloud and Spark systems.",
        approach:
          "Orchestrated idempotent Reddit ingestion with Airflow, transformed data using Glue ETL, queried with Athena, and built a RoBERTa sentiment pipeline.",
        results:
          "Loaded partitioned data into S3 and Redshift, then used a Databricks Spark cluster for T20WC 2024 batting and bowling analysis.",
      },
    },
    {
      title: "Image Captioning Pipeline",
      role: "Deep Learning with PyTorch · Mar 2023",
      description:
        "CNN-LSTM image captioning pipeline with ResNet50 encoder, Bahdanau attention, and greedy plus beam-search decoding.",
      tech: [
        "PyTorch",
        "ResNet50",
        "LSTM",
        "Bahdanau Attention",
        "BLEU",
        "METEOR",
      ],
      outcomes:
        "Achieved BLEU 0.3716 and METEOR 0.3795, benchmarked against BLIP VLM and ViT+GPT.",
      repo: "",
      demo: "",
      featured: true,
      images: [],
      details: {
        problem:
          "Image captioning required converting Flickr8k image-caption pairs into structured sequence data and generating readable captions.",
        approach:
          "Preprocessed Flickr8k, built vocabulary and padded sequences, then trained a ResNet50 encoder with LSTM decoder and Bahdanau attention.",
        results:
          "Evaluated generated captions using BLEU and METEOR and benchmarked against BLIP VLM and ViT+GPT.",
      },
    },
    {
      title: "RAG Engine for Assessment Recommendation",
      role: "Self Project · Nov 2025 — Dec 2025",
      description:
        "Assessment recommender using hybrid BM25 and dense FAISS retrieval with FastAPI and Gemini-generated grounded responses.",
      tech: ["RAG", "BM25", "FAISS", "FastAPI", "TF-IDF", "Gemini API"],
      outcomes:
        "Built hybrid retrieval indices, learned-to-rank reranking, and context-grounded generation using Gemini 2.5 Flash.",
      repo: "",
      demo: "",
      featured: true,
      images: [],
      details: {
        problem:
          "Assessment discovery needed a recommender that could combine lexical matching, semantic search, and generated responses grounded in retrieved context.",
        approach:
          "Implemented BM25 lexical ranking, dense FAISS vector indexing, TF-IDF indexing, and a learn-to-rank reranking model behind a FastAPI service.",
        results:
          "Integrated Gemini 2.5 Flash as the generator to produce context-grounded assessment recommendations.",
      },
    },
  ],
  education: {
    degrees: [
      {
        school: "Indian Institute of Technology Kharagpur",
        schoolUrl: "https://www.iitkgp.ac.in",
        logo: "/images/logos/IIT_Kharagpur_Logo.svg.webp",
        degree: "B.Tech. (Hons.) & M.Tech. in Aerospace Engineering",
        year: "Oct 2021 – May 2026",
        gpa: "8.08/10",
        details:
          "Minor in Computer Science & Engineering and micro-specialization in Artificial Intelligence and Applications.",
      },
    ],
    certifications: [],
    awards: [
      {
        title: "PowerPool Alpha Competition",
        issuer: "WorldQuant",
        issuerUrl: "https://www.worldquant.com",
        details:
          "2nd position globally among 10k+ participants in the 2025 competition.",
        year: "2025",
      },
      {
        title: "Open-source Python Package",
        issuer: "PyPI",
        issuerUrl: "https://pypi.org",
        details:
          "Published modifiedstemmer as an open-source Python package with 5.5k+ downloads.",
        year: "2025",
      },
      {
        title: "Mentor & Tester",
        issuer: "DeepLearning.AI",
        issuerUrl: "https://www.deeplearning.ai",
        details:
          "Awarded official recognition by DeepLearning.AI for the AI For Good Specialization.",
        year: "2023",
      },
      {
        title: "Competitive Programming Ratings",
        issuer: "Codeforces & CodeChef",
        issuerUrl: "https://codeforces.com",
        details:
          "Reached 1538 on Codeforces (abhinav.kgpian) and 1877 on CodeChef (abhinav16aero).",
        year: "2025",
      },
    ],
  },
  testimonials: [] as Testimonial[],
  community: [
    {
      role: "Student Member",
      organization: "Kharagpur Data Analytics Group, IIT Kharagpur",
      organizationUrl: "",
      details:
        "Implemented text-to-image and style transfer methods for algorithmic art creation using Stable Diffusion v1.5 for AI art workshops, conducted ML workshops for 100+ participants, and organized KDSH, India's largest data science event, achieving a 34% YoY increase in registrations.",
      year: "Aug 2022 – Apr 2023",
    },
  ],
  contact: {
    email: "anu55abhi@gmail.com",
    phone: "",
  },
};

export type Profile = typeof profile;
