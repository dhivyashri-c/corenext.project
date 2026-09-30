// Hardcoded blog posts. To add a post: append an object to `posts` — the blog index,
// post page, sitemap and structured data pick it up automatically.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h2'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }
  | { type: 'ol'; items: string[] }
  | { type: 'tip'; text: string }

export interface BlogPost {
  slug: string
  title: string
  description: string
  category: 'Publishing' | 'Final Year Projects' | 'Hardware' | 'Project Ideas'
  date: string
  updated?: string
  keywords: string[]
  content: Block[]
}

const posts: BlogPost[] = [
  {
    slug: 'how-to-publish-research-paper-in-scopus-journal',
    title: 'How to Publish a Research Paper in a Scopus Journal: Step-by-Step Guide',
    description:
      'A practical step-by-step guide for students and scholars on publishing a research paper in a Scopus indexed journal — from choosing a journal to handling reviewer comments.',
    category: 'Publishing',
    date: '2026-09-18',
    keywords: [
      'how to publish paper in scopus journal',
      'scopus journal publication',
      'scopus paper publication chennai',
      'research paper publication process',
    ],
    content: [
      { type: 'p', text: 'Publishing in a Scopus indexed journal is one of the most common requirements for PhD scholars, PG students and faculty — and increasingly for final year students who want a strong profile for higher studies. The process is not difficult, but it has many small steps where people lose weeks. This guide walks through the complete process.' },
      { type: 'h2', text: '1. Start with a clear research contribution' },
      { type: 'p', text: 'Reviewers reject most papers because the contribution is unclear, not because the writing is weak. Before writing, answer three questions in one line each: what problem are you solving, what did you do differently from existing work, and how did you prove it works (results, comparison, metrics).' },
      { type: 'p', text: 'If your final year project already has an implementation and results, you are halfway there — a well-documented project can usually be converted into a journal or conference paper.' },
      { type: 'h2', text: '2. Choose the right journal' },
      { type: 'p', text: 'Picking the journal before you write saves a lot of reformatting later. Check these points for every journal you shortlist:' },
      { type: 'ul', items: [
        'Scope — read the "Aims and Scope" page and a few recently published papers. Your topic must clearly fit.',
        'Indexing — verify the journal is currently listed in the Scopus Sources list (search it on scopus.com/sources). Do not rely only on the journal website.',
        'Quartile — Q1/Q2 journals are more prestigious but slower and more selective. Q3/Q4 journals are often a realistic first target.',
        'Timeline — look at "received" and "accepted" dates on recent papers to estimate the review time.',
        'Charges — many good journals have no publication fee; open access journals usually charge an APC. Know the cost upfront.',
      ] },
      { type: 'tip', text: 'Beware of emails promising "guaranteed Scopus publication in 7 days". Genuine Scopus journals run peer review and cannot guarantee acceptance.' },
      { type: 'h2', text: '3. Write the paper in the standard structure' },
      { type: 'ol', items: [
        'Title — specific and keyword-rich (e.g. "Lightweight CNN for Early Detection of Paddy Leaf Disease" instead of "Disease Detection Using AI").',
        'Abstract — 150–250 words covering problem, method, key result and conclusion.',
        'Introduction — background, problem statement, contributions (as a bullet list) and paper organisation.',
        'Literature review — 20–40 recent references, ideally from the last 5 years, ending with the research gap.',
        'Proposed method — architecture diagram, algorithm and dataset details.',
        'Results and discussion — tables, graphs and comparison with at least 2–3 existing methods.',
        'Conclusion and future work.',
        'References — in the exact style the journal asks for (IEEE, APA, Elsevier, Springer).',
      ] },
      { type: 'h2', text: '4. Check plagiarism and formatting' },
      { type: 'p', text: 'Most journals run a similarity check using iThenticate (the publisher version of Turnitin). A similarity index below 10–15% is a safe target, with no single source contributing a large chunk. Paraphrase properly and cite every source — rewriting with synonym tools produces unreadable text that reviewers notice immediately.' },
      { type: 'p', text: 'Download the journal template (Word or LaTeX) and follow it exactly: figure resolution, table style, heading numbering and reference format. Desk rejections for formatting are common and avoidable.' },
      { type: 'h2', text: '5. Submit with a good cover letter' },
      { type: 'p', text: 'Submission happens through the journal portal (Editorial Manager, ScholarOne, etc.). Along with the manuscript you usually upload a cover letter, figures in separate files, author details and sometimes suggested reviewers. Keep the cover letter short: what the paper does, why it fits the journal and a declaration that it is not under review elsewhere.' },
      { type: 'h2', text: '6. Handle reviewer comments' },
      { type: 'p', text: 'Most accepted papers go through at least one round of "major" or "minor revision". Reply to every comment in a response table: the reviewer comment, your response and exactly where in the manuscript you changed it. Be polite even when you disagree — support your view with data or references.' },
      { type: 'h2', text: 'How long does it take?' },
      { type: 'p', text: 'Realistically, expect anywhere between 2 and 8 months from submission to acceptance for a genuine Scopus journal, depending on the journal and the number of revision rounds. Conferences with Scopus indexed proceedings can be faster because they follow a fixed schedule.' },
      { type: 'p', text: 'If you want help at any stage — topic selection, writing, formatting, plagiarism reduction or choosing the right journal — our publishing team in Chennai supports students and scholars across India.' },
    ],
  },
  {
    slug: 'scopus-vs-web-of-science-vs-ieee-xplore',
    title: 'Scopus vs Web of Science vs IEEE Xplore: Which Indexing Matters for You?',
    description:
      'Understand the difference between Scopus, Web of Science (SCI/SCIE/ESCI) and IEEE Xplore indexing, and which one your university or recruiter actually values.',
    category: 'Publishing',
    date: '2026-08-27',
    keywords: [
      'scopus vs web of science',
      'sci vs scopus journal',
      'ieee xplore conference publication',
      'journal indexing explained',
    ],
    content: [
      { type: 'p', text: '"Is this journal Scopus or SCI?" is one of the most common questions we get. Indexing decides how much weight your paper carries for PhD admissions, faculty promotions and research incentives, so it is worth understanding before you submit anywhere.' },
      { type: 'h2', text: 'What does "indexed" actually mean?' },
      { type: 'p', text: 'An indexing database is a curated list of journals and conferences that meet certain quality standards. When a journal is indexed, its papers become searchable in that database and their citations are counted. Indexing is not a certificate the journal owns forever — databases regularly add and remove titles.' },
      { type: 'h2', text: 'Scopus' },
      { type: 'ul', items: [
        'Owned by Elsevier; covers journals, conference proceedings and book series across all subjects.',
        'Journals are ranked into quartiles (Q1–Q4) using CiteScore / SJR.',
        'Widely accepted by Indian universities for PhD requirements and by institutions for faculty appraisal.',
        'Verify a title at scopus.com/sources — check it is listed as active, not "discontinued".',
      ] },
      { type: 'h2', text: 'Web of Science (SCI, SCIE, ESCI)' },
      { type: 'ul', items: [
        'Owned by Clarivate. SCIE (Science Citation Index Expanded) journals receive an Impact Factor.',
        'Generally considered more selective than Scopus; SCIE journals are the top target for many research groups.',
        'ESCI (Emerging Sources) journals are indexed but, until recently, did not have an Impact Factor.',
        'Verify a title on the Clarivate Master Journal List (mjl.clarivate.com).',
      ] },
      { type: 'h2', text: 'IEEE Xplore' },
      { type: 'ul', items: [
        'IEEE\'s own digital library — it hosts IEEE journals, magazines and conference proceedings.',
        'Many IEEE conferences held in India publish proceedings in IEEE Xplore, and most of those proceedings are also indexed in Scopus.',
        'A good option for final year students: conference timelines are fixed and faster than journals.',
      ] },
      { type: 'h2', text: 'Which should you target?' },
      { type: 'ol', items: [
        'Final year / UG students — an IEEE or Springer conference paper with Scopus indexed proceedings is a realistic, valuable first publication.',
        'PG students — a Scopus indexed journal (Q3/Q4 as a start) or a strong conference.',
        'PhD scholars — check your university regulations first; many require Scopus or Web of Science journal papers specifically.',
        'Faculty — SCIE / Q1–Q2 Scopus journals carry the most weight for appraisal and funding.',
      ] },
      { type: 'tip', text: 'Always check your own university or department circular. Requirements differ between institutions, and they change over time.' },
      { type: 'h2', text: 'Red flags of predatory journals' },
      { type: 'ul', items: [
        'Guaranteed acceptance or publication in a few days.',
        'Journal name very similar to a well-known journal, with a different website.',
        'Claims of indexing that you cannot verify in the database itself.',
        'Very broad scope ("engineering, management, arts and medicine").',
        'Payment requested before any peer review.',
      ] },
      { type: 'p', text: 'Not sure where your paper fits? Share your topic with us and we will suggest suitable, verifiable journals and conferences.' },
    ],
  },
  {
    slug: 'how-to-choose-final-year-project-title',
    title: 'How to Choose the Right Final Year Project Title (CSE, IT, ECE, MCA)',
    description:
      'A simple framework to pick a final year project title that is feasible, interesting to your guide, useful for placements and possible to finish on time.',
    category: 'Final Year Projects',
    date: '2026-07-14',
    keywords: [
      'how to choose final year project title',
      'final year project topics',
      'final year project for cse',
      'final year project chennai',
    ],
    content: [
      { type: 'p', text: 'Your project title is the first thing your guide, review panel and interviewers see. A good title makes reviews easier, gives you something to talk about in placements and can even become a publication. A bad one leads to months of rework. Here is how to choose well.' },
      { type: 'h2', text: 'Use the 4-question filter' },
      { type: 'ol', items: [
        'Is it feasible in your timeline? Count the weeks until your final review and be honest about how many your team can actually work.',
        'Is the data or hardware available? Many ML ideas die because there is no dataset; many hardware ideas die because components are expensive or hard to source.',
        'Does it match a job role you want? Web/full stack, data science, cloud, embedded — pick a project that becomes a talking point in interviews.',
        'Can you explain it in one sentence? If you cannot, your review panel will struggle too.',
      ] },
      { type: 'h2', text: 'Look for a real problem' },
      { type: 'p', text: 'Projects that solve a visible problem — for a hospital, farm, college office, shop or traffic junction — are easier to justify in the problem statement and more memorable to reviewers. Talk to people around you: parents, relatives in business, college admin staff.' },
      { type: 'h2', text: 'Add one "new" element' },
      { type: 'p', text: 'You do not need a completely new idea. Take an existing system and improve one thing: a better model, a lighter architecture for mobile, an added IoT sensor, a real-time dashboard, multilingual support or better accuracy on a local dataset. That improvement becomes your "proposed system" chapter.' },
      { type: 'h2', text: 'Write a strong title' },
      { type: 'p', text: 'Good titles mention the technique and the application:' },
      { type: 'ul', items: [
        'Weak: "Disease Prediction System"',
        'Strong: "Early Diabetes Risk Prediction Using XGBoost with Explainable AI (SHAP)"',
        'Weak: "Smart Home"',
        'Strong: "ESP32-Based Smart Energy Monitoring System with Mobile Alerts"',
      ] },
      { type: 'h2', text: 'Common mistakes to avoid' },
      { type: 'ul', items: [
        'Choosing a trending buzzword (blockchain, metaverse) without a real use case.',
        'Copying a title from a list without understanding the base paper.',
        'Picking something too big — a "complete hospital management system" is rarely finished well.',
        'Ignoring your guide\'s domain; guides are more helpful when the topic is familiar to them.',
      ] },
      { type: 'tip', text: 'Shortlist 3 titles, write a half-page abstract for each and discuss them with your guide before finalising.' },
      { type: 'p', text: 'Need title suggestions for your department? We share curated title lists for CSE, IT, ECE, EEE and MCA with base papers, and help you finalise one that fits your timeline.' },
    ],
  },
  {
    slug: 'how-to-write-final-year-project-report',
    title: 'How to Write a Final Year Project Report: Chapter-wise Format',
    description:
      'Chapter-wise format for a final year engineering project report — abstract, literature survey, system design, implementation, testing and conclusion — with tips for each section.',
    category: 'Final Year Projects',
    date: '2026-06-02',
    keywords: [
      'final year project report format',
      'how to write project report',
      'project documentation for engineering',
      'anna university project report format',
    ],
    content: [
      { type: 'p', text: 'Many good projects lose marks because of a weak report. Your report is permanent proof of your work — examiners read it before your viva, and it forms the base for any paper you publish. Most universities, including Anna University affiliated colleges, follow a similar chapter structure.' },
      { type: 'h2', text: 'Front matter' },
      { type: 'ul', items: [
        'Title page and bonafide certificate (in your college format).',
        'Acknowledgement — keep it short and professional.',
        'Abstract — 200–300 words: problem, approach, tools, key result.',
        'Table of contents, list of figures, list of tables and list of abbreviations.',
      ] },
      { type: 'h2', text: 'Chapter 1 – Introduction' },
      { type: 'p', text: 'Explain the domain, the problem statement, objectives (as a numbered list) and scope. End with a short paragraph describing how the rest of the report is organised.' },
      { type: 'h2', text: 'Chapter 2 – Literature Survey' },
      { type: 'p', text: 'Summarise 10–20 related papers. For each: authors and year, method used, results and limitations. Finish with a table comparing them and a clear "research gap" that your project addresses.' },
      { type: 'h2', text: 'Chapter 3 – System Analysis' },
      { type: 'ul', items: [
        'Existing system and its disadvantages.',
        'Proposed system and its advantages.',
        'Feasibility study (technical, economic, operational).',
        'Hardware and software requirements.',
      ] },
      { type: 'h2', text: 'Chapter 4 – System Design' },
      { type: 'p', text: 'Include an architecture diagram and the diagrams your department expects — commonly use case, class, sequence, activity and data flow diagrams for software; block diagram and circuit diagram for hardware. Every diagram must be referred to and explained in the text.' },
      { type: 'h2', text: 'Chapter 5 – Implementation' },
      { type: 'p', text: 'Describe each module: what it does, the algorithm or logic, and the technology used. Include only key code snippets — full source code belongs in the appendix.' },
      { type: 'h2', text: 'Chapter 6 – Testing and Results' },
      { type: 'p', text: 'List test cases in a table (input, expected output, actual output, status). For ML projects include accuracy, precision, recall, F1-score, confusion matrix and a comparison with existing methods. For hardware projects include readings, photos of the prototype and observations.' },
      { type: 'h2', text: 'Chapter 7 – Conclusion and Future Enhancement' },
      { type: 'p', text: 'Summarise what you achieved against each objective, then list realistic future improvements.' },
      { type: 'h2', text: 'Formatting checklist' },
      { type: 'ul', items: [
        'Consistent font (usually Times New Roman 12, 1.5 line spacing) as per your college template.',
        'Numbered figures and tables with captions (Figure 4.1, Table 6.2).',
        'References in IEEE style, cited in the text as [1], [2].',
        'Plagiarism check before final submission — many colleges now require a report.',
      ] },
      { type: 'tip', text: 'Write the report while you build the project, not after. Screenshots, readings and design decisions are much harder to recreate later.' },
      { type: 'p', text: 'We provide complete documentation along with our final year projects — report, PPT, diagrams and plagiarism check — formatted to your university\'s template.' },
    ],
  },
  {
    slug: 'how-to-prepare-for-final-year-project-viva',
    title: 'Final Year Project Viva: 25 Common Questions and How to Answer Them',
    description:
      'Prepare for your final year project viva and reviews with the most commonly asked questions, sample answers and tips to present your project confidently.',
    category: 'Final Year Projects',
    date: '2026-04-21',
    keywords: [
      'final year project viva questions',
      'project review questions',
      'how to prepare for project viva',
      'project viva tips',
    ],
    content: [
      { type: 'p', text: 'The viva is where your understanding is tested — not just your output. Examiners usually ask a predictable set of questions. If you can answer these confidently, you are well prepared.' },
      { type: 'h2', text: 'About the problem' },
      { type: 'ol', items: [
        'What is your project about? (Answer in 2–3 sentences — practise this.)',
        'Why did you choose this topic?',
        'What problem does it solve and who benefits?',
        'What are the drawbacks of the existing system?',
        'What is new in your proposed system?',
      ] },
      { type: 'h2', text: 'About the technology' },
      { type: 'ol', items: [
        'Why did you choose this language / framework / board?',
        'Explain your architecture diagram.',
        'Which algorithm did you use and why not an alternative?',
        'What dataset did you use? How many records? How did you pre-process it?',
        'How did you split training and testing data?',
        'What is the accuracy, and what do precision and recall mean in your case?',
        'Which database did you use and what are the main tables?',
        'How does the hardware communicate with the software (serial, Wi-Fi, MQTT, HTTP)?',
      ] },
      { type: 'h2', text: 'About your work' },
      { type: 'ol', items: [
        'What was your individual contribution?',
        'What was the most difficult part and how did you solve it?',
        'How did you test the system?',
        'What are the limitations of your project?',
        'What future enhancements are possible?',
        'Can this be deployed in the real world? What would it cost?',
      ] },
      { type: 'h2', text: 'Basics they may cross-check' },
      { type: 'ol', items: [
        'Difference between supervised and unsupervised learning.',
        'What is overfitting and how did you avoid it?',
        'Difference between SQL and NoSQL databases.',
        'What is an API / REST API?',
        'What is the role of the microcontroller in your circuit?',
        'Which base paper did you refer to and what did you change?',
      ] },
      { type: 'h2', text: 'Tips for the day' },
      { type: 'ul', items: [
        'Run the complete demo at least twice on the same laptop the morning of the viva. Keep a screen recording as backup.',
        'Every team member should be able to explain the full flow, not just their module.',
        'If you do not know an answer, say so honestly and explain how you would find out.',
        'Keep your PPT to 12–15 slides; the demo matters more than animations.',
      ] },
      { type: 'tip', text: 'Explain your project to a friend from a different department. If they understand it, your examiner definitely will.' },
      { type: 'p', text: 'All our projects come with a code walkthrough and viva preparation session so you understand every line you present.' },
    ],
  },
  {
    slug: 'iot-arduino-project-ideas-for-ece-eee-students',
    title: '15 IoT and Arduino Project Ideas for ECE & EEE Final Year Students',
    description:
      'Practical IoT, Arduino, ESP32 and Raspberry Pi project ideas for ECE and EEE final year students, with the components needed and what makes each idea stand out.',
    category: 'Hardware',
    date: '2026-03-10',
    keywords: [
      'iot project ideas for final year',
      'arduino projects for ece students',
      'hardware projects chennai',
      'esp32 project ideas',
      'raspberry pi final year projects',
    ],
    content: [
      { type: 'p', text: 'Hardware projects impress review panels because they are tangible — the panel can see and touch your work. The key is choosing an idea that is achievable with available components and has a clear real-world use. Here are ideas we see work well.' },
      { type: 'h2', text: 'Smart agriculture' },
      { type: 'ol', items: [
        'Automatic irrigation using soil moisture sensor and ESP32 with a mobile dashboard.',
        'Crop field monitoring with temperature, humidity and light sensors plus SMS alerts.',
        'Animal intrusion detection with PIR sensor, camera and buzzer.',
      ] },
      { type: 'h2', text: 'Healthcare' },
      { type: 'ol', items: [
        'Patient health monitoring (heart rate, SpO2, temperature) sending data to a web dashboard.',
        'Smart pill box with medicine reminders and missed-dose alerts to caretakers.',
        'Fall detection for elderly people using an accelerometer (MPU6050) and GSM alert.',
      ] },
      { type: 'h2', text: 'Energy and power (great for EEE)' },
      { type: 'ol', items: [
        'Smart energy meter with real-time consumption tracking and bill estimation.',
        'Solar panel monitoring with voltage/current sensing and efficiency logging.',
        'Automatic power factor correction demonstrator.',
        'EV battery monitoring system (voltage, temperature, state of charge).',
      ] },
      { type: 'h2', text: 'Safety and smart city' },
      { type: 'ol', items: [
        'Gas leakage detection with automatic exhaust fan and alert (MQ-2/MQ-6).',
        'Smart parking system showing free slots on a web page.',
        'Accident detection and location alert using GPS and GSM modules.',
        'Smart dustbin that notifies the municipality when full.',
        'Face-recognition door lock using Raspberry Pi and camera.',
      ] },
      { type: 'h2', text: 'How to make your hardware project stand out' },
      { type: 'ul', items: [
        'Add a software layer — a mobile app, web dashboard or cloud storage (Firebase, ThingSpeak, AWS IoT).',
        'Add intelligence — even a simple ML model (anomaly detection, prediction) raises the project level.',
        'Build a neat enclosure. A clean prototype on a board looks far better than loose jumper wires.',
        'Record readings over several days and present graphs in your results chapter.',
      ] },
      { type: 'h2', text: 'Arduino, ESP32 or Raspberry Pi?' },
      { type: 'ul', items: [
        'Arduino Uno/Nano — simple sensor and actuator projects, easy to learn.',
        'ESP32 / NodeMCU — the best default for IoT: built-in Wi-Fi (and Bluetooth on ESP32), low cost.',
        'Raspberry Pi — when you need a camera, image processing, ML models or a full Linux system.',
      ] },
      { type: 'tip', text: 'Buy one or two spare sensors. A sensor failing the day before the review is the most common hardware-project disaster.' },
      { type: 'p', text: 'We build hardware projects end-to-end in Chennai — component sourcing, circuit design, coding, enclosure and documentation — and ship kits across India.' },
    ],
  },
  {
    slug: 'machine-learning-project-ideas-for-final-year',
    title: '20 Machine Learning Project Ideas for Final Year Students (2026)',
    description:
      'Fresh machine learning and deep learning project ideas for CSE, IT and MCA final year students, grouped by domain, with suggested datasets and algorithms.',
    category: 'Project Ideas',
    date: '2026-01-19',
    keywords: [
      'machine learning project ideas for final year',
      'deep learning final year projects',
      'ai ml projects for cse students',
      'final year project with source code',
    ],
    content: [
      { type: 'p', text: 'Machine learning remains the most popular final year domain for CSE, IT and MCA students because it maps directly to data science and AI roles. The best ML projects use a real dataset, compare multiple models and present results clearly. Here are ideas grouped by domain.' },
      { type: 'h2', text: 'Healthcare' },
      { type: 'ol', items: [
        'Diabetic retinopathy detection from retina images using CNN / transfer learning.',
        'Heart disease risk prediction with XGBoost and SHAP explanations.',
        'Brain tumour classification from MRI images.',
        'Skin disease classification with a mobile-friendly model (MobileNet).',
      ] },
      { type: 'h2', text: 'Agriculture' },
      { type: 'ol', items: [
        'Plant leaf disease detection using deep learning.',
        'Crop recommendation based on soil and weather data.',
        'Crop yield prediction using regression models.',
      ] },
      { type: 'h2', text: 'Finance and security' },
      { type: 'ol', items: [
        'Credit card fraud detection on imbalanced data (SMOTE + ensemble models).',
        'Phishing website detection using URL features.',
        'Network intrusion detection using deep learning.',
        'Stock price trend prediction with LSTM (present it as a trend study, not a trading system).',
      ] },
      { type: 'h2', text: 'NLP and generative AI' },
      { type: 'ol', items: [
        'Fake news detection using transformer models (BERT).',
        'Resume screening and job matching system.',
        'Retrieval-augmented chatbot that answers questions from college documents.',
        'Sentiment analysis of product reviews in English and Tamil.',
      ] },
      { type: 'h2', text: 'Computer vision' },
      { type: 'ol', items: [
        'Helmet and number plate detection for traffic violations (YOLO).',
        'Driver drowsiness detection using eye-aspect ratio.',
        'Sign language to text/speech conversion.',
        'Crowd counting and density estimation.',
        'Face-mask / PPE compliance detection for industrial safety.',
      ] },
      { type: 'h2', text: 'What makes an ML project score well' },
      { type: 'ul', items: [
        'A clearly cited public dataset (Kaggle, UCI, government open data) or a well-collected custom dataset.',
        'Comparison of at least 3 models with a results table.',
        'Proper evaluation — confusion matrix, precision, recall, F1, ROC curve — not just accuracy.',
        'A usable front end: a Streamlit/Flask/React web app instead of only a Jupyter notebook.',
        'Deployment (Render, Hugging Face Spaces, cloud VM) if you can — it is a strong placement talking point.',
      ] },
      { type: 'tip', text: 'Pick a dataset first, then the idea. Many students fix a title and discover later that no suitable data exists.' },
      { type: 'p', text: 'Every ML project we deliver includes source code, dataset, trained model, web interface, documentation and a walkthrough so you can explain it confidently in your review.' },
    ],
  },
]

// Newest first.
export const allPosts = [...posts].sort((a, b) => b.date.localeCompare(a.date))

export function getPost(slug: string) {
  return allPosts.find((p) => p.slug === slug)
}

export function getRelatedPosts(post: BlogPost, count = 3) {
  const same = allPosts.filter((p) => p.slug !== post.slug && p.category === post.category)
  const rest = allPosts.filter((p) => p.slug !== post.slug && p.category !== post.category)
  return [...same, ...rest].slice(0, count)
}

export function readingMinutes(post: BlogPost) {
  const text = post.content
    .map((b) => ('text' in b ? b.text : b.items.join(' ')))
    .join(' ')
  return Math.max(1, Math.round(text.split(/\s+/).length / 200))
}

export function formatDate(date: string) {
  return new Date(date).toLocaleDateString('en-IN', { day: 'numeric', month: 'short', year: 'numeric' })
}
