// Test Section 8: Professional Responsibilities - Questions 1-50

// Define the questions for Section 8 - Group 1
const section8QuestionsGroup1 = [
    {
        id: 1,
        question: "What is a key professional responsibility of Early Intervention providers?",
        options: [
            "Working independently without consultation with other team members",
            "Maintaining current knowledge and skills in their area of practice and Early Intervention principles",
            "Focusing exclusively on their discipline-specific expertise when providing services",
            "Avoiding interaction with families outside of scheduled sessions"
        ],
        correctIndex: 1,
        explanation: "A key professional responsibility of Early Intervention providers is maintaining current knowledge and skills in their area of practice and Early Intervention principles. This includes staying updated on evidence-based practices, attending continuing education, and understanding the interdisciplinary nature of Early Intervention."
    },
    {
        id: 2,
        question: "Which of the following best describes culturally competent practice in Early Intervention?",
        options: [
            "Treating all families the same way regardless of cultural background",
            "Making assumptions about families based on their cultural identity",
            "Recognizing and respecting diversity while adapting services to be responsive to families' cultural values and beliefs",
            "Expecting families to adapt to providers' preferred methods of service delivery"
        ],
        correctIndex: 2,
        explanation: "Culturally competent practice in Early Intervention involves recognizing and respecting diversity while adapting services to be responsive to families' cultural values and beliefs. This includes understanding how culture influences child-rearing practices, communication styles, and family priorities."
    },
    {
        id: 3,
        question: "What is the purpose of reflective supervision in Early Intervention?",
        options: [
            "To monitor staff compliance with program policies",
            "To provide opportunities for providers to examine their work, emotions, thoughts, and reactions to improve practice",
            "To evaluate staff performance for promotion decisions",
            "To ensure providers are following their discipline-specific guidelines only"
        ],
        correctIndex: 1,
        explanation: "The purpose of reflective supervision in Early Intervention is to provide opportunities for providers to examine their work, emotions, thoughts, and reactions to improve practice. This supportive process helps providers develop insight into how their own experiences impact their work with families."
    },
    {
        id: 4,
        question: "What is a primary ethical obligation of Early Intervention professionals?",
        options: [
            "Maintaining confidentiality and protecting family privacy",
            "Following agency procedures even when they conflict with family needs",
            "Achieving developmental outcomes regardless of family participation",
            "Limiting services to stay within budget constraints"
        ],
        correctIndex: 0,
        explanation: "A primary ethical obligation of Early Intervention professionals is maintaining confidentiality and protecting family privacy. This includes securing records, obtaining consent before sharing information, and discussing sensitive information only in appropriate settings."
    },
    {
        id: 5,
        question: "What is the significance of professional boundaries in Early Intervention?",
        options: [
            "They prevent providers from developing any personal relationship with families",
            "They define appropriate limits in the helping relationship to ensure ethical practice and prevent harm",
            "They are unnecessary when working in a family's home environment",
            "They only apply to communication outside of scheduled visits"
        ],
        correctIndex: 1,
        explanation: "Professional boundaries define appropriate limits in the helping relationship to ensure ethical practice and prevent harm. While Early Intervention is relationship-based, maintaining clear boundaries helps providers maintain objectivity and prevents dual relationships that could compromise services."
    },
    {
        id: 6,
        question: "Which of the following best describes the concept of professional competence in Early Intervention?",
        options: [
            "Having at least five years of experience in the field",
            "Having knowledge and skills that match the needs of the children and families served, with awareness of personal limitations",
            "Being able to work with any child regardless of condition or severity",
            "Having advanced degrees in multiple disciplines"
        ],
        correctIndex: 1,
        explanation: "Professional competence in Early Intervention means having knowledge and skills that match the needs of the children and families served, with awareness of personal limitations. This includes seeking additional training when needed and referring to specialists when appropriate."
    },
    {
        id: 7,
        question: "What is the responsibility of Early Intervention professionals regarding mandated reporting of suspected child abuse or neglect?",
        options: [
            "Reporting is optional based on the provider's judgment",
            "Only reporting after consulting with supervisors and team members",
            "Reporting only if there is definitive evidence of abuse",
            "Promptly reporting reasonable suspicions according to state laws and agency procedures"
        ],
        correctIndex: 3,
        explanation: "Early Intervention professionals are mandated reporters and must promptly report reasonable suspicions of child abuse or neglect according to state laws and agency procedures. This doesn't require proof - just reasonable suspicion based on professional judgment."
    },
    {
        id: 8,
        question: "What approach to professional development is most effective for Early Intervention providers?",
        options: [
            "Completing required training hours without specific focus areas",
            "Focusing only on their specific discipline",
            "Ongoing, reflective learning that includes multi-disciplinary knowledge, family-centered practices, and evidence-based approaches",
            "Occasional workshops when convenient"
        ],
        correctIndex: 2,
        explanation: "The most effective approach to professional development for Early Intervention providers is ongoing, reflective learning that includes multi-disciplinary knowledge, family-centered practices, and evidence-based approaches. This comprehensive approach supports high-quality service delivery."
    },
    {
        id: 9,
        question: "What is the importance of self-care for Early Intervention professionals?",
        options: [
            "It is an unnecessary luxury given the demands of the job",
            "It prevents burnout and compassion fatigue, enabling sustained effective practice",
            "It is only necessary for those working with the most challenging families",
            "It is primarily important for new professionals, not experienced ones"
        ],
        correctIndex: 1,
        explanation: "Self-care is important for Early Intervention professionals because it prevents burnout and compassion fatigue, enabling sustained effective practice. Working with families facing challenges can be emotionally demanding, and self-care strategies help maintain professional effectiveness."
    },
    {
        id: 10,
        question: "What is the professional responsibility of Early Intervention providers regarding evidence-based practice?",
        options: [
            "Using only traditional approaches that have been used for decades",
            "Implementing any new approach that seems promising",
            "Using approaches based on current research evidence, clinical expertise, and family preferences",
            "Using only approaches approved by insurance companies"
        ],
        correctIndex: 2,
        explanation: "Regarding evidence-based practice, Early Intervention providers are responsible for using approaches based on current research evidence, clinical expertise, and family preferences. This balanced approach ensures services are effective while respecting family context and values."
    },
    {
        id: 11,
        question: "What is the primary role of a service coordinator in Early Intervention?",
        options: [
            "To provide direct therapeutic services to children",
            "To coordinate the implementation of the IFSP and serve as a single point of contact for the family",
            "To determine eligibility for Early Intervention services",
            "To supervise other Early Intervention providers"
        ],
        correctIndex: 1,
        explanation: "The primary role of a service coordinator is to coordinate the implementation of the IFSP and serve as a single point of contact for the family. Service coordinators help families navigate the Early Intervention system, access services, and advocate for their needs."
    },
    {
        id: 12,
        question: "Which of the following is NOT typically a responsibility of an Early Intervention service coordinator?",
        options: [
            "Coordinating evaluations and assessments",
            "Facilitating the development of the IFSP",
            "Providing specialized therapy services such as speech or physical therapy",
            "Ensuring timely delivery of services"
        ],
        correctIndex: 2,
        explanation: "Providing specialized therapy services such as speech or physical therapy is NOT typically a responsibility of a service coordinator. While service coordinators coordinate services, they do not typically provide direct therapeutic interventions. Those services are provided by specialists in those areas."
    },
    {
        id: 13,
        question: "What interpersonal skill is most important for effective service coordination?",
        options: [
            "Clinical diagnosis abilities",
            "Effective communication and relationship-building",
            "Expertise in child development therapy techniques",
            "Fluency in multiple languages"
        ],
        correctIndex: 1,
        explanation: "Effective communication and relationship-building is the most important interpersonal skill for service coordination. Service coordinators must build trusting relationships with families, clearly communicate information, and facilitate communication among team members."
    },
    {
        id: 14,
        question: "How often must a service coordinator have contact with a family receiving Early Intervention services?",
        options: [
            "At least monthly",
            "Only during scheduled IFSP meetings",
            "At least every six months",
            "Only when services change"
        ],
        correctIndex: 0,
        explanation: "Service coordinators must have contact with families at least monthly. Regular contact helps ensure that services are being implemented as planned, address any new concerns, and maintain a supportive relationship with the family."
    },
    {
        id: 15,
        question: "What is a key responsibility of the service coordinator during the IFSP development process?",
        options: [
            "Making all decisions about services for the child",
            "Determining the child's eligibility for services",
            "Facilitating team discussion and ensuring family priorities are addressed",
            "Providing clinical recommendations for therapy frequency"
        ],
        correctIndex: 2,
        explanation: "During IFSP development, a key responsibility of the service coordinator is facilitating team discussion and ensuring family priorities are addressed. This includes ensuring all team members have input, the family's concerns drive the plan, and the resulting IFSP reflects a team consensus."
    },
    {
        id: 16,
        question: "Which of the following best describes the service coordinator's role in advocacy?",
        options: [
            "Speaking for the family in all situations",
            "Supporting families in developing their own advocacy skills",
            "Filing complaints against uncooperative service providers",
            "Making decisions on behalf of the family"
        ],
        correctIndex: 1,
        explanation: "The service coordinator's role in advocacy is best described as supporting families in developing their own advocacy skills. This empowerment approach helps families gain the confidence and knowledge to advocate for their child's needs both within and outside of Early Intervention."
    },
    {
        id: 17,
        question: "What is the service coordinator's responsibility regarding community resources?",
        options: [
            "Providing financial assistance to families for accessing resources",
            "Identifying and helping families connect with relevant community resources",
            "Creating new community programs when needed resources don't exist",
            "Determining which community resources the family is eligible to receive"
        ],
        correctIndex: 1,
        explanation: "The service coordinator's responsibility regarding community resources is identifying and helping families connect with relevant community resources. This includes maintaining knowledge of available resources, helping families understand how to access them, and making appropriate referrals."
    },
    {
        id: 18,
        question: "What action should a service coordinator take if a family reports that services outlined in the IFSP are not being provided?",
        options: [
            "Wait until the next IFSP review to address the concern",
            "Tell the family to contact the provider directly",
            "Investigate the issue and work to resolve it promptly",
            "Immediately file a complaint with the state Early Intervention office"
        ],
        correctIndex: 2,
        explanation: "If a family reports that services outlined in the IFSP are not being provided, the service coordinator should investigate the issue and work to resolve it promptly. This includes contacting providers, identifying barriers, and finding solutions to ensure the child receives the services they are entitled to receive."
    },
    {
        id: 19,
        question: "What is the service coordinator's role in the transition process as a child approaches age three?",
        options: [
            "Determining the child's eligibility for preschool special education",
            "Making placement decisions for the child's next setting",
            "Coordinating the transition planning process and helping the family explore options",
            "Continuing to provide service coordination until the child is five years old"
        ],
        correctIndex: 2,
        explanation: "During the transition process as a child approaches age three, the service coordinator's role is coordinating the transition planning process and helping the family explore options. This includes organizing transition meetings, providing information about available programs, and ensuring a smooth handoff to the next service system."
    },
    {
        id: 20,
        question: "Which ethical principle is MOST important for service coordinators to uphold?",
        options: [
            "Maintaining professional distance from families",
            "Protecting family confidentiality and privacy",
            "Ensuring services are cost-effective",
            "Following agency policies without question"
        ],
        correctIndex: 1,
        explanation: "Protecting family confidentiality and privacy is the MOST important ethical principle for service coordinators to uphold. Service coordinators have access to sensitive information about children and families and must ensure this information is shared only with appropriate consent and for legitimate purposes related to service provision."
    }
];

// Define Section 8 Questions - Group 2
const section8QuestionsGroup2 = [
    {
        id: 21,
        question: "What is the professional responsibility of Early Intervention providers regarding teamwork?",
        options: [
            "Working independently to avoid conflicting recommendations",
            "Collaborating with other team members to provide integrated, coordinated services",
            "Ensuring their discipline takes precedence in treatment planning",
            "Minimizing team meetings to increase direct service time"
        ],
        correctIndex: 1,
        explanation: "Early Intervention providers have a professional responsibility to collaborate with other team members to provide integrated, coordinated services. This team-based approach ensures comprehensive support for children and families."
    },
    {
        id: 22,
        question: "What is a primary responsibility of Early Intervention professionals regarding professional credentials?",
        options: [
            "Maintaining valid licensure, certification, or registration as required by their discipline and state regulations",
            "Obtaining the highest possible degree in their field regardless of state requirements",
            "Working exclusively within Early Intervention to maintain specialized skills",
            "Focusing on practical experience rather than formal credentials"
        ],
        correctIndex: 0,
        explanation: "A primary responsibility of Early Intervention professionals is maintaining valid licensure, certification, or registration as required by their discipline and state regulations. This ensures they meet recognized standards of competence."
    },
    {
        id: 23,
        question: "How should Early Intervention professionals address conflicts with colleagues?",
        options: [
            "Avoiding colleagues with whom they have disagreements",
            "Discussing concerns directly with the colleague in a professional, respectful manner",
            "Immediately reporting conflicts to supervisors without attempting resolution",
            "Discussing the conflict with families to gain their perspective"
        ],
        correctIndex: 1,
        explanation: "Early Intervention professionals should address conflicts with colleagues by discussing concerns directly with the colleague in a professional, respectful manner. This approach promotes collaborative problem-solving and maintains team cohesion."
    },
    {
        id: 24,
        question: "What is the professional responsibility of Early Intervention providers regarding documentation?",
        options: [
            "Completing minimal documentation to maximize direct service time",
            "Documenting only significant developmental milestones",
            "Maintaining clear, accurate, and timely records that meet professional and legal standards",
            "Delegating all documentation to administrative staff"
        ],
        correctIndex: 2,
        explanation: "Early Intervention providers have a professional responsibility to maintain clear, accurate, and timely records that meet professional and legal standards. Proper documentation supports quality care, communication among team members, and accountability."
    },
    {
        id: 25,
        question: "What principle guides ethical decision-making when facing dilemmas in Early Intervention?",
        options: [
            "Always following agency policies regardless of circumstances",
            "Doing what is most convenient for the provider",
            "Acting in the best interest of the child and family while respecting professional standards",
            "Following the most cost-effective approach"
        ],
        correctIndex: 2,
        explanation: "Ethical decision-making in Early Intervention is guided by acting in the best interest of the child and family while respecting professional standards. This balanced approach considers both family needs and professional obligations."
    },
    {
        id: 26,
        question: "What is the appropriate professional response when an Early Intervention provider recognizes they lack the skills needed for a specific situation?",
        options: [
            "Proceeding anyway to avoid admitting limitations",
            "Seeking consultation, supervision, or referring to another professional with appropriate expertise",
            "Focusing only on aspects they feel comfortable addressing",
            "Discontinuing services with that family"
        ],
        correctIndex: 1,
        explanation: "When lacking skills for a specific situation, the appropriate professional response is seeking consultation, supervision, or referring to another professional with appropriate expertise. This ensures families receive competent services while supporting professional growth."
    },
    {
        id: 27,
        question: "What is a key professional responsibility regarding the use of assessment tools in Early Intervention?",
        options: [
            "Using the same assessment tools for all children regardless of individual differences",
            "Using only standardized assessments to ensure objective measurement",
            "Using assessment tools according to their intended purpose and standardized procedures",
            "Creating custom assessment protocols for each child"
        ],
        correctIndex: 2,
        explanation: "A key professional responsibility regarding assessment tools is using them according to their intended purpose and standardized procedures. This ensures valid results while respecting the tool's design and limitations."
    },
    {
        id: 28,
        question: "What is the most important ethical consideration when Early Intervention professionals participate in research?",
        options: [
            "Ensuring the research will advance their career",
            "Protecting the welfare and rights of participating children and families",
            "Completing the research quickly to minimize disruption",
            "Publishing results regardless of findings"
        ],
        correctIndex: 1,
        explanation: "When participating in research, the most important ethical consideration is protecting the welfare and rights of participating children and families. This includes obtaining informed consent, ensuring confidentiality, and minimizing risks."
    },
    {
        id: 29,
        question: "What is a professional responsibility of Early Intervention providers regarding families' right to refuse services?",
        options: [
            "Convincing families to accept all recommended services",
            "Reporting families to child protective services if they refuse services",
            "Respecting families' right to accept or decline services after ensuring they are fully informed",
            "Discontinuing all services if any part of the plan is refused"
        ],
        correctIndex: 2,
        explanation: "Early Intervention providers have a professional responsibility to respect families' right to accept or decline services after ensuring they are fully informed. This respects family autonomy while ensuring decisions are based on complete information."
    },
    {
        id: 30,
        question: "What is the professional responsibility of Early Intervention providers when observing potentially harmful practices by colleagues?",
        options: [
            "Ignoring the situation to maintain workplace harmony",
            "Addressing concerns through appropriate channels to protect children and families",
            "Immediately reporting the colleague to state licensing boards",
            "Telling families to request a different provider"
        ],
        correctIndex: 1,
        explanation: "When observing potentially harmful practices by colleagues, the professional responsibility is addressing concerns through appropriate channels to protect children and families. This typically begins with direct communication and escalates as needed according to program policies."
    }
];

// Define Section 8 Questions - Group 3
const section8QuestionsGroup3 = [
    {
        id: 31,
        question: "What professional responsibility do Early Intervention providers have regarding accommodations for children with specific needs?",
        options: [
            "Providing only accommodations that are easy to implement",
            "Making appropriate accommodations based on individual needs to ensure equal access to services",
            "Referring children who need accommodations to specialized programs",
            "Expecting all children to adapt to standard intervention approaches"
        ],
        correctIndex: 1,
        explanation: "Early Intervention providers have a professional responsibility to make appropriate accommodations based on individual needs to ensure equal access to services. This may include modifying activities, environments, or communication methods."
    },
    {
        id: 32,
        question: "What is a key professional responsibility regarding the transition from Early Intervention to preschool services?",
        options: [
            "Extending Early Intervention services beyond age three to avoid transitions",
            "Transferring responsibility entirely to the receiving program with minimal involvement",
            "Supporting a smooth transition by collaborating with receiving programs and preparing families",
            "Recommending all children continue with private therapy after Early Intervention"
        ],
        correctIndex: 2,
        explanation: "A key professional responsibility regarding transition is supporting a smooth transition by collaborating with receiving programs and preparing families. This ensures continuity of services and reduces stress for children and families."
    },
    {
        id: 33,
        question: "What professional responsibility do Early Intervention providers have regarding cultural and linguistic diversity?",
        options: [
            "Expecting all families to adapt to the provider's cultural norms",
            "Developing cultural competence and using culturally responsive practices",
            "Referring culturally diverse families to specialists in cultural issues",
            "Focusing only on developmental milestones regardless of cultural context"
        ],
        correctIndex: 1,
        explanation: "Early Intervention providers have a professional responsibility to develop cultural competence and use culturally responsive practices. This includes recognizing how culture influences development, communication, and family priorities."
    },
    {
        id: 34,
        question: "What professional responsibility do Early Intervention providers have regarding the use of technology?",
        options: [
            "Avoiding technology use in Early Intervention sessions",
            "Using technology only for children with communication disorders",
            "Using technology ethically and appropriately to support intervention goals",
            "Recommending the same apps to all families regardless of needs"
        ],
        correctIndex: 2,
        explanation: "Regarding technology, Early Intervention providers have a professional responsibility to use it ethically and appropriately to support intervention goals. This includes selecting technologies that match child and family needs and providing guidance on appropriate use."
    },
    {
        id: 35,
        question: "What is an important professional responsibility regarding goal-setting in Early Intervention?",
        options: [
            "Setting standardized goals for all children of the same age",
            "Establishing goals that are measurable, functional, and meaningful to the family",
            "Creating goals that focus exclusively on developmental milestones",
            "Setting goals that are easily achievable to ensure success"
        ],
        correctIndex: 1,
        explanation: "An important professional responsibility in goal-setting is establishing goals that are measurable, functional, and meaningful to the family. This ensures interventions address priorities that matter in the child's daily life."
    },
    {
        id: 36,
        question: "What is a professional responsibility of Early Intervention providers regarding evidence-based intervention strategies?",
        options: [
            "Using only traditional approaches proven over decades",
            "Implementing any strategy requested by the family regardless of evidence",
            "Staying current with research and implementing strategies with evidence of effectiveness",
            "Using only strategies approved by insurance companies"
        ],
        correctIndex: 2,
        explanation: "Early Intervention providers have a professional responsibility to stay current with research and implement strategies with evidence of effectiveness. This ensures families receive interventions most likely to produce positive outcomes."
    },
    {
        id: 37,
        question: "What professional responsibility do Early Intervention providers have regarding supervision of assistants or students?",
        options: [
            "Allowing assistants to work independently to maximize service delivery",
            "Providing appropriate supervision and ensuring assistants work within their competence",
            "Assigning assistants the most challenging cases for learning purposes",
            "Having assistants observe only without direct participation"
        ],
        correctIndex: 1,
        explanation: "When supervising assistants or students, Early Intervention providers have a professional responsibility to provide appropriate supervision and ensure assistants work within their competence. This maintains service quality while supporting professional development."
    },
    {
        id: 38,
        question: "What is the professional responsibility of Early Intervention providers regarding service frequency and duration recommendations?",
        options: [
            "Always recommending the maximum allowable services",
            "Basing recommendations on the child's needs, evidence, and family capacity",
            "Recommending minimal services to save program costs",
            "Following standardized service packages for all children with similar diagnoses"
        ],
        correctIndex: 1,
        explanation: "When making service frequency and duration recommendations, the professional responsibility is basing recommendations on the child's needs, evidence, and family capacity. This individualized approach ensures appropriate intensity while considering family context."
    },
    {
        id: 39,
        question: "What is a professional responsibility of Early Intervention providers regarding advocacy at the systems level?",
        options: [
            "Focusing only on direct service and avoiding policy involvement",
            "Advocating for increased funding regardless of program effectiveness",
            "Participating in efforts to improve Early Intervention systems and policies when possible",
            "Criticizing program administrators to families when disagreements arise"
        ],
        correctIndex: 2,
        explanation: "At the systems level, Early Intervention providers have a professional responsibility to participate in efforts to improve Early Intervention systems and policies when possible. This broader advocacy helps create sustainable improvements for all children and families."
    },
    {
        id: 40,
        question: "What is the professional responsibility of Early Intervention providers regarding dual relationships with families?",
        options: [
            "Establishing personal friendships with all families to build rapport",
            "Avoiding dual relationships that could impair objectivity or create conflicts of interest",
            "Providing additional services to families outside the Early Intervention system",
            "Accepting gifts and social invitations to strengthen relationships"
        ],
        correctIndex: 1,
        explanation: "Regarding dual relationships with families, Early Intervention providers have a professional responsibility to avoid dual relationships that could impair objectivity or create conflicts of interest. This maintains professional boundaries while still allowing warm, supportive relationships."
    }
];

// Define Section 8 Questions - Group 4
const section8QuestionsGroup4 = [
    {
        id: 41,
        question: "What is a professional responsibility of Early Intervention providers regarding health and safety during sessions?",
        options: [
            "Following universal precautions and ensuring safe environments during interventions",
            "Expecting families to handle all safety concerns in their homes",
            "Focusing only on developmental goals and ignoring safety issues",
            "Implementing interventions regardless of safety concerns"
        ],
        correctIndex: 0,
        explanation: "Early Intervention providers have a professional responsibility to follow universal precautions and ensure safe environments during interventions. This includes handwashing, sanitizing materials, and addressing environmental hazards."
    },
    {
        id: 42,
        question: "What is the professional responsibility of Early Intervention providers regarding assistive technology?",
        options: [
            "Avoiding technology use to focus on natural skill development",
            "Considering assistive technology options when appropriate and helping families access and use them effectively",
            "Recommending the most sophisticated technology available regardless of need",
            "Waiting until children have exhausted all other options before considering technology"
        ],
        correctIndex: 1,
        explanation: "Regarding assistive technology, Early Intervention providers have a professional responsibility to consider assistive technology options when appropriate and help families access and use them effectively. This maximizes participation and independence based on individual needs."
    },
    {
        id: 43,
        question: "What professional responsibility do Early Intervention providers have regarding program evaluation and quality improvement?",
        options: [
            "Avoiding participation in evaluation activities to protect family privacy",
            "Participating in data collection and quality improvement activities to enhance program effectiveness",
            "Focusing only on individual cases without concern for program-wide outcomes",
            "Criticizing program evaluation efforts that require additional documentation"
        ],
        correctIndex: 1,
        explanation: "Early Intervention providers have a professional responsibility to participate in data collection and quality improvement activities to enhance program effectiveness. This contributes to continuous improvement and accountability in Early Intervention systems."
    },
    {
        id: 44,
        question: "What is a key professional responsibility regarding relationships with other agencies serving children and families?",
        options: [
            "Maintaining professional cooperation and communication to support coordinated services",
            "Competing with other agencies to demonstrate superior outcomes",
            "Working in isolation to maintain programmatic autonomy",
            "Criticizing other agencies' approaches when speaking with families"
        ],
        correctIndex: 0,
        explanation: "A key professional responsibility regarding relationships with other agencies is maintaining professional cooperation and communication to support coordinated services. This collaboration reduces duplication and gaps in services."
    },
    {
        id: 45,
        question: "What is the professional responsibility of Early Intervention providers when facing ethical dilemmas?",
        options: [
            "Making quick decisions based on personal judgment alone",
            "Consulting ethical guidelines, relevant codes of ethics, supervisors, or colleagues when facing difficult situations",
            "Always prioritizing program policies over other considerations",
            "Avoiding situations that might involve ethical challenges"
        ],
        correctIndex: 1,
        explanation: "When facing ethical dilemmas, Early Intervention providers have a professional responsibility to consult ethical guidelines, relevant codes of ethics, supervisors, or colleagues. This reflective process supports sound ethical decision-making."
    },
    {
        id: 46,
        question: "What is a professional responsibility of Early Intervention providers regarding team collaboration?",
        options: [
            "Working primarily within their own discipline to maintain role clarity",
            "Actively participating in team processes and valuing diverse perspectives",
            "Deferring to the most experienced team member in all decisions",
            "Focusing only on their specific intervention without consideration of the whole child"
        ],
        correctIndex: 1,
        explanation: "Regarding team collaboration, Early Intervention providers have a professional responsibility to actively participate in team processes and value diverse perspectives. This transdisciplinary approach supports comprehensive, integrated services."
    },
    {
        id: 47,
        question: "What professional responsibility do Early Intervention providers have regarding professional judgment?",
        options: [
            "Applying sound professional judgment based on knowledge, experience, and evidence",
            "Always following predetermined protocols regardless of individual circumstances",
            "Deferring all judgment to supervisors to avoid making mistakes",
            "Basing decisions primarily on what other team members suggest"
        ],
        correctIndex: 0,
        explanation: "Early Intervention providers have a professional responsibility to apply sound professional judgment based on knowledge, experience, and evidence. This balanced approach recognizes the art and science of Early Intervention."
    },
    {
        id: 48,
        question: "What is a key professional responsibility of Early Intervention providers regarding self-awareness?",
        options: [
            "Ignoring personal biases since they don't affect professional work",
            "Recognizing how personal beliefs, values, and experiences may influence interactions with families",
            "Sharing personal opinions freely to build authentic relationships",
            "Focusing only on technical skills rather than reflective practice"
        ],
        correctIndex: 1,
        explanation: "A key professional responsibility regarding self-awareness is recognizing how personal beliefs, values, and experiences may influence interactions with families. This reflection helps providers maintain objectivity and cultural sensitivity."
    },
    {
        id: 49,
        question: "What is the professional responsibility of Early Intervention providers regarding resource allocation?",
        options: [
            "Advocating for all families to receive maximum services regardless of need",
            "Using resources efficiently and equitably based on child and family needs",
            "Limiting services to stay under budget regardless of identified needs",
            "Providing identical resources to all families to ensure fairness"
        ],
        correctIndex: 1,
        explanation: "Regarding resource allocation, Early Intervention providers have a professional responsibility to use resources efficiently and equitably based on child and family needs. This ensures responsible stewardship while meeting individualized needs."
    },
    {
        id: 50,
        question: "What is a core professional responsibility for all Early Intervention providers?",
        options: [
            "Following a medical model focused on fixing developmental delays",
            "Maintaining a family-centered approach that respects family strengths and choices",
            "Prioritizing cognitive development over social-emotional development",
            "Working primarily on predetermined developmental milestones"
        ],
        correctIndex: 1,
        explanation: "A core professional responsibility for all Early Intervention providers is maintaining a family-centered approach that respects family strengths and choices. This foundational principle recognizes families as the constant in children's lives and essential partners in intervention."
    }
];

// Combine all question groups for Section 8
const section8Questions = [
    ...section8QuestionsGroup1,
    ...section8QuestionsGroup2,
    ...section8QuestionsGroup3,
    ...section8QuestionsGroup4
];

// Function to load Section 8 questions
function loadSection8Questions() {
    const sectionContainer = document.getElementById('section8');
    
    // Create the section structure
    let sectionContent = `
        <h3>Section 8: Professional Responsibilities</h3>
        <p>This section covers professional ethics, responsibilities, and best practices for Early Intervention professionals, including maintaining professional competence, ethical decision-making, and collaboration.</p>
        
        <div class="progress-bar">
            <div class="progress" id="section8-progress"></div>
        </div>
        
        <div id="section8-questions">
            <!-- Questions will be loaded here -->
        </div>
        
        <div class="test-controls">
            <button class="btn" id="section8-prev" disabled>Previous</button>
            <button class="btn" id="section8-next">Next</button>
            <button class="btn secondary" id="section8-submit" style="display:none;">Submit Section</button>
        </div>
        
        <div id="section8-results" class="results" style="display:none;">
            <!-- Results will be shown here -->
        </div>
    `;
    
    sectionContainer.innerHTML = sectionContent;
    
    // Set up question navigation
    setupSection8Navigation();
}

// Function to set up question navigation for Section 8
function setupSection8Navigation() {
    // Initialize variables
    let currentQuestionIndex = 0;
    const questionsContainer = document.getElementById('section8-questions');
    const prevButton = document.getElementById('section8-prev');
    const nextButton = document.getElementById('section8-next');
    const submitButton = document.getElementById('section8-submit');
    const progressBar = document.getElementById('section8-progress');
    
    // Array to track user's answers (initialized to null for each question)
    const userAnswers = new Array(section8Questions.length).fill(null);
    
    // Function to display current question
    function showQuestion(index) {
        console.log(`Section 8: Starting to show question ${index+1}`);
        
        // Update progress bar
        progressBar.style.width = `${((index + 1) / section8Questions.length) * 100}%`;
        
        // Get the current question
        const question = section8Questions[index];
        
        // Create HTML for the question
        let questionHTML = `
            <div class="question-container">
                <div class="question">${index + 1}. ${question.question}</div>
                <ul class="options">
        `;
        
        // Add options
        question.options.forEach((option, i) => {
            const isSelected = userAnswers[index] === i;
            questionHTML += `
                <li class="option ${isSelected ? 'selected' : ''}" data-index="${i}">${option}</li>
            `;
        });
        
        questionHTML += `
                </ul>
                <div class="feedback-message" id="feedback-${index}"></div>
                <div class="explanation" id="explanation-${index}" style="display: none;">
                    ${question.explanation}
                </div>
            </div>
        `;
        
        // Display the question
        questionsContainer.innerHTML = questionHTML;
        
        console.log(`Section 8: HTML inserted for question ${index+1}`);
        
        // Update button states
        prevButton.disabled = index === 0;
        
        if (index === section8Questions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
        
        // Critical: Use a slight delay to ensure DOM is updated before adding listeners
        setTimeout(() => {
            console.log(`Section 8: Adding event listeners for question ${index+1}`);
            
            // Get options after the DOM update
            const options = questionsContainer.querySelectorAll('.option');
            console.log(`Section 8: Found ${options.length} options for question ${index+1}`);
            
            const feedbackElement = document.getElementById(`feedback-${index}`);
            const explanationElement = document.getElementById(`explanation-${index}`);
            
            // If user has already answered, show feedback
            if (userAnswers[index] !== null) {
                const isCorrect = userAnswers[index] === question.correctIndex;
                
                // Display feedback
                if (isCorrect) {
                    feedbackElement.textContent = "Correct! Great job.";
                    feedbackElement.className = "feedback-message correct";
                } else {
                    feedbackElement.textContent = "Incorrect. Please review the explanation.";
                    feedbackElement.className = "feedback-message incorrect";
                }
                
                // Show explanation
                explanationElement.style.display = 'block';
            }
            
            // Add click event listeners for each option
            options.forEach((option, optionIndex) => {
                console.log(`Section 8: Adding listener to option ${optionIndex+1} for question ${index+1}`);
                
                option.onclick = function() {
                    console.log(`Section 8: Option ${optionIndex+1} clicked for question ${index+1}`);
                    
                    // Remove selected class from all options
                    options.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Store the user's answer
                    const selectedIndex = parseInt(this.getAttribute('data-index'));
                    userAnswers[index] = selectedIndex;
                    
                    // Check if the answer is correct
                    const isCorrect = selectedIndex === question.correctIndex;
                    console.log(`Section 8: Answer for question ${index+1} is ${isCorrect ? 'correct' : 'incorrect'}`);
                    
                    // Display feedback
                    if (isCorrect) {
                        feedbackElement.textContent = "Correct! Great job.";
                        feedbackElement.className = "feedback-message correct";
                    } else {
                        feedbackElement.textContent = "Incorrect. Please review the explanation.";
                        feedbackElement.className = "feedback-message incorrect";
                    }
                    
                    // Show explanation
                    explanationElement.style.display = 'block';
                };
            });
        }, 50); // Small delay to ensure DOM is ready
    }
    
    // Set up event listeners for navigation buttons
    prevButton.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (currentQuestionIndex < section8Questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });
    
    submitButton.addEventListener('click', function() {
        // Calculate score
        let score = 0;
        for (let i = 0; i < section8Questions.length; i++) {
            if (userAnswers[i] === section8Questions[i].correctIndex) {
                score++;
            }
        }
        
        // Show results
        const resultsDiv = document.getElementById('section8-results');
        resultsDiv.innerHTML = `
            <h3>Section 8 Results</h3>
            <p>You scored ${score} out of ${section8Questions.length}.</p>
            <button class="btn" id="section8-retry">Retry Section</button>
        `;
        
        resultsDiv.style.display = 'block';
        
        // Hide questions and controls
        questionsContainer.style.display = 'none';
        document.querySelector('.test-controls').style.display = 'none';
        
        // Add event listener for retry button
        document.getElementById('section8-retry').addEventListener('click', function() {
            // Reset user answers
            userAnswers.fill(null);
            currentQuestionIndex = 0;
            
            // Show questions and controls again
            questionsContainer.style.display = 'block';
            document.querySelector('.test-controls').style.display = 'flex';
            
            // Hide results
            resultsDiv.style.display = 'none';
            
            // Show first question
            showQuestion(0);
        });
    });
    
    // Show the first question to start
    console.log("Section 8: Navigation setup complete, showing first question");
    showQuestion(currentQuestionIndex);
}

// Make function available globally
window.loadSection8Questions = loadSection8Questions;
