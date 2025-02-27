// Test Section 1: Legal Framework - Questions 1-50

// Define the questions for Section 1
const section1Questions = [
    {
        id: 1,
        question: "Which federal law provides the framework for early intervention services for infants and toddlers with disabilities?",
        options: [
            "Section 504 of the Rehabilitation Act",
            "Americans with Disabilities Act (ADA)",
            "Individuals with Disabilities Education Act (IDEA), Part C",
            "Every Student Succeeds Act (ESSA)"
        ],
        correctIndex: 2,
        explanation: "IDEA Part C specifically addresses early intervention services for infants and toddlers (birth to age 3) with developmental delays or disabilities. It establishes federal requirements that states must follow in providing early intervention services."
    },
    {
        id: 2,
        question: "Under New York State law, which agency serves as the lead agency for the Early Intervention Program?",
        options: [
            "Department of Education",
            "Department of Health",
            "Office for People with Developmental Disabilities",
            "Office of Children and Family Services"
        ],
        correctIndex: 1,
        explanation: "The New York State Department of Health is designated as the lead agency for the Early Intervention Program under Title II-A of Article 25 of the Public Health Law."
    },
    {
        id: 3,
        question: "What is the primary state law that establishes the Early Intervention Program in New York?",
        options: [
            "New York State Education Law, Section 4410",
            "New York State Public Health Law, Article 25, Title II-A",
            "New York State Social Services Law",
            "New York State Mental Hygiene Law"
        ],
        correctIndex: 1,
        explanation: "New York State Public Health Law, Article 25, Title II-A establishes the Early Intervention Program for infants and toddlers in New York State. It outlines the program structure, eligibility criteria, and service delivery system."
    },
    {
        id: 4,
        question: "According to federal regulations under IDEA Part C, what is the maximum timeframe for developing an Individualized Family Service Plan (IFSP) after a child is referred to early intervention?",
        options: [
            "30 days",
            "45 days",
            "60 days",
            "90 days"
        ],
        correctIndex: 1,
        explanation: "IDEA Part C requires that an IFSP must be developed within 45 days of referral to early intervention. This timeline ensures that eligible children and families receive timely services."
    },
    {
        id: 5,
        question: "Which of the following is NOT required to be included in an IFSP according to federal law?",
        options: [
            "The child's present levels of development",
            "A statement of measurable outcomes for the child and family",
            "The child's IQ score",
            "The frequency and intensity of services to be provided"
        ],
        correctIndex: 2,
        explanation: "IQ scores are not required in an IFSP. The IFSP must include the child's present levels of development, measurable outcomes, services to be provided (including frequency, intensity, and method), and natural environments where services will be provided, among other requirements."
    }
];

// Add more questions in groups
const section1QuestionsGroup2 = [
    {
        id: 6,
        question: "Under IDEA Part C, early intervention services must be provided in which environment to the maximum extent appropriate?",
        options: [
            "Hospital settings",
            "Natural environments",
            "Specialized clinics",
            "School-based programs"
        ],
        correctIndex: 1,
        explanation: "IDEA Part C requires that early intervention services be provided in natural environments (settings that are natural or typical for same-aged peers without disabilities) to the maximum extent appropriate."
    },
    {
        id: 7,
        question: "In New York State, who is legally designated as the Early Intervention Official (EIO) at the local level?",
        options: [
            "A school superintendent",
            "A person appointed by the county's chief elected official",
            "The county health commissioner by default",
            "A designee from the NYS Department of Health"
        ],
        correctIndex: 1,
        explanation: "Under New York Public Health Law, the Early Intervention Official (EIO) is designated by the chief elected official of each municipality (county)."
    },
    {
        id: 8,
        question: "According to New York State regulations, how often must an IFSP be reviewed at minimum?",
        options: [
            "Every 3 months",
            "Every 6 months",
            "Every 9 months",
            "Annually"
        ],
        correctIndex: 1,
        explanation: "New York State regulations require that an IFSP be reviewed at least every 6 months and evaluated annually with a multidisciplinary assessment."
    },
    {
        id: 9,
        question: "Under IDEA Part C and New York State law, which of the following statements about cost of services is true?",
        options: [
            "Families must pay according to a sliding fee scale based on income",
            "Only low-income families receive free services",
            "Services are provided at no direct cost to families regardless of income",
            "Families must pay a standard co-payment for each service"
        ],
        correctIndex: 2,
        explanation: "Under both IDEA Part C and New York State law, early intervention services must be provided at no direct cost to families, regardless of income level or insurance status."
    },
    {
        id: 10,
        question: "What is a procedural safeguard that must be provided to families under IDEA Part C?",
        options: [
            "Private health insurance",
            "Prior written notice of actions proposed or refused",
            "Guaranteed approval for all requested services",
            "Monthly home visits by all service providers"
        ],
        correctIndex: 1,
        explanation: "Prior written notice of actions proposed or refused is a required procedural safeguard under IDEA Part C. This ensures that families are informed of any changes or decisions regarding their child's services."
    }
];

// Define more questions for Section 1
const section1QuestionsGroup3 = [
    {
        id: 11,
        question: "What is the maximum age for a child to be eligible for early intervention services under IDEA Part C?",
        options: [
            "2 years",
            "3 years",
            "4 years",
            "5 years"
        ],
        correctIndex: 1,
        explanation: "Under IDEA Part C, children are eligible for early intervention services from birth until their third birthday (up to age 3). After age 3, children who still need services may transition to preschool special education services under IDEA Part B."
    },
    {
        id: 12,
        question: "In New York State, which document outlines the services a child will receive in the Early Intervention Program?",
        options: [
            "Individual Family Support Plan (IFSP)",
            "Individualized Education Program (IEP)",
            "Family Support Plan (FSP)",
            "Early Learning Plan (ELP)"
        ],
        correctIndex: 0,
        explanation: "The Individualized Family Service Plan (IFSP) is the document that outlines the early intervention services that a child and family will receive. It is developed by a team that includes the family and early intervention professionals."
    },
    {
        id: 13,
        question: "Under New York State Early Intervention regulations, how often must the IFSP be reviewed?",
        options: [
            "Every month",
            "Every 3 months",
            "Every 6 months",
            "Annually"
        ],
        correctIndex: 2,
        explanation: "According to New York State Early Intervention regulations, the IFSP must be reviewed at least every 6 months and evaluated annually to ensure it continues to meet the child's and family's needs."
    },
    {
        id: 14,
        question: "What is the role of the Early Intervention Official (EIO) in New York State?",
        options: [
            "To provide direct therapy services to children",
            "To conduct developmental evaluations",
            "To administer the local Early Intervention Program",
            "To provide parent training exclusively"
        ],
        correctIndex: 2,
        explanation: "The Early Intervention Official (EIO) is responsible for administering the local Early Intervention Program in each county. Their duties include appointing initial service coordinators, authorizing evaluations and services, and ensuring compliance with regulations."
    },
    {
        id: 15,
        question: "Which of the following is NOT a required component of the IFSP under New York State regulations?",
        options: [
            "The child's present levels of development",
            "Outcomes expected to be achieved for the child and family",
            "The child's IQ score",
            "The natural environments in which services will be provided"
        ],
        correctIndex: 2,
        explanation: "IQ scores are not a required component of the IFSP. The IFSP must include the child's present levels of development, outcomes for the child and family, services to be provided, natural environments for services, and other components, but IQ testing is not required or typically included."
    },
    {
        id: 16,
        question: "What is the timeframe for completing the initial evaluation and IFSP for a child referred to the Early Intervention Program in New York State?",
        options: [
            "30 days from referral",
            "45 days from referral",
            "60 days from referral",
            "90 days from referral"
        ],
        correctIndex: 1,
        explanation: "According to New York State regulations, the initial evaluation and IFSP must be completed within 45 days from the date of the child's referral to the Early Intervention Program, unless there are exceptional circumstances."
    },
    {
        id: 17,
        question: "Under IDEA Part C, which of the following is NOT a discipline that may provide early intervention services?",
        options: [
            "Speech-language pathology",
            "Occupational therapy",
            "Veterinary medicine",
            "Psychology"
        ],
        correctIndex: 2,
        explanation: "Veterinary medicine is not a discipline that provides early intervention services under IDEA Part C. Early intervention services are provided by qualified personnel such as special educators, speech-language pathologists, occupational therapists, physical therapists, psychologists, and others who work with infants and toddlers with disabilities."
    },
    {
        id: 18,
        question: "What type of service coordination is required for all families participating in the Early Intervention Program?",
        options: [
            "Initial service coordination only",
            "Ongoing service coordination only",
            "Both initial and ongoing service coordination",
            "Service coordination is optional"
        ],
        correctIndex: 2,
        explanation: "Both initial and ongoing service coordination are required for all families in the Early Intervention Program. Initial service coordination helps families through the evaluation and IFSP development process, while ongoing service coordination assists families in implementing and revising the IFSP as needed."
    },
    {
        id: 19,
        question: "According to New York State Early Intervention regulations, who must participate in the IFSP meeting?",
        options: [
            "Only the service coordinator and the parents",
            "The parents, service coordinator, EIO, and evaluator(s)",
            "Only the EIO and service providers",
            "Only medical professionals"
        ],
        correctIndex: 1,
        explanation: "According to New York State regulations, required participants in the IFSP meeting include the parents, service coordinator, Early Intervention Official (or designee), and the evaluator(s) who conducted the child's evaluation (or an appropriate representative)."
    },
    {
        id: 20,
        question: "What is the purpose of the 'transition plan' in the Early Intervention Program?",
        options: [
            "To plan for a child's move from one service provider to another",
            "To plan for a child's discharge from all services",
            "To plan for a child's transition to preschool services or other appropriate services when leaving early intervention",
            "To plan for a family's relocation to another state"
        ],
        correctIndex: 2,
        explanation: "The transition plan's purpose is to ensure a smooth transition for children leaving the Early Intervention Program, typically to preschool special education services under IDEA Part B (for children still needing services) or to other appropriate community services when the child turns three."
    }
];

// Define more questions for Section 1
const section1QuestionsGroup4 = [
    {
        id: 21,
        question: "Under New York State regulations, what is the maximum caseload for an ongoing service coordinator in the Early Intervention Program?",
        options: [
            "No specified limit",
            "25 families",
            "40 families",
            "60 families"
        ],
        correctIndex: 2,
        explanation: "According to New York State Early Intervention regulations, the maximum caseload for an ongoing service coordinator is 40 families. This limit helps ensure that service coordinators can provide adequate attention to each family's needs."
    },
    {
        id: 22,
        question: "Which of the following is a procedural safeguard under the Early Intervention Program?",
        options: [
            "The right to decline services without affecting future eligibility",
            "The right to choose any service provider regardless of qualifications",
            "The right to determine eligibility without an evaluation",
            "The right to unlimited services regardless of need"
        ],
        correctIndex: 0,
        explanation: "The right to decline services without affecting future eligibility is a procedural safeguard in the Early Intervention Program. Families have the right to accept or decline any or all services offered without jeopardizing other services or future eligibility."
    },
    {
        id: 23,
        question: "In New York State, what is the process for resolving disputes between parents and early intervention officials?",
        options: [
            "Only through a formal lawsuit",
            "Through mediation, impartial hearing, or systems complaint",
            "Only through direct appeal to the Governor",
            "Exclusively through the child's pediatrician"
        ],
        correctIndex: 1,
        explanation: "New York State offers several dispute resolution options, including mediation, impartial hearings, and systems complaints. These processes allow parents to address disagreements with early intervention officials regarding evaluation, eligibility, services, or other issues."
    },
    {
        id: 24,
        question: "What does the term 'natural environment' refer to in the context of early intervention services?",
        options: [
            "Outdoor settings exclusively",
            "Clinical settings with natural lighting",
            "Settings that are natural or normal for same-aged peers without disabilities",
            "Any environment where the child feels comfortable"
        ],
        correctIndex: 2,
        explanation: "In early intervention, 'natural environment' refers to settings that are natural or typical for same-aged peers without disabilities. This includes the child's home, community settings, childcare settings, and other environments where typically developing children participate."
    },
    {
        id: 25,
        question: "Which statement best describes parental consent requirements in the New York Early Intervention Program?",
        options: [
            "Consent is required only for the initial evaluation",
            "Consent is required for evaluation, services, and before sharing personally identifiable information",
            "Consent is implied once a child is referred to the program",
            "Consent is only needed for medical services"
        ],
        correctIndex: 1,
        explanation: "Parental consent is required before conducting evaluations, providing services, and sharing personally identifiable information about the child or family. This ensures that parents maintain decision-making authority throughout their participation in the program."
    },
    {
        id: 26,
        question: "Under IDEA Part C, which of the following is NOT a primary service coordination activity?",
        options: [
            "Coordinating evaluations and assessments",
            "Facilitating the development of the IFSP",
            "Directly providing therapeutic interventions",
            "Assisting families in identifying available service providers"
        ],
        correctIndex: 2,
        explanation: "Directly providing therapeutic interventions is not a primary service coordination activity. Service coordinators help families access and coordinate services but do not typically provide direct therapeutic interventions themselves. Those are provided by qualified therapists and specialists."
    },
    {
        id: 27,
        question: "When must a referral to the Early Intervention Program be made for an infant or toddler suspected of having a disability?",
        options: [
            "Within 2 working days of identification",
            "Within 7 working days of identification",
            "Within 10 working days of identification",
            "Within 30 working days of identification"
        ],
        correctIndex: 0,
        explanation: "According to New York State regulations, primary referral sources must refer a child to the Early Intervention Program within 2 working days of identifying a child suspected of having a disability or developmental delay, unless the parent objects."
    },
    {
        id: 28,
        question: "What rights do parents have regarding their child's early intervention records?",
        options: [
            "The right to access only with professional supervision",
            "The right to access, review, and request amendments to records",
            "No rights until the child turns 3 years old",
            "Access only to summaries prepared by the EIO"
        ],
        correctIndex: 1,
        explanation: "Parents have the right to access, review, and request amendments to their child's early intervention records. They can examine any records related to evaluation, assessment, eligibility determination, and IFSP development/implementation."
    },
    {
        id: 29,
        question: "Which of the following agencies is responsible for monitoring compliance with the Early Intervention Program regulations in New York State?",
        options: [
            "New York State Education Department",
            "New York State Office of Children and Family Services",
            "New York State Department of Health",
            "New York State Office for People with Developmental Disabilities"
        ],
        correctIndex: 2,
        explanation: "The New York State Department of Health, as the lead agency for the Early Intervention Program, is responsible for monitoring compliance with federal and state early intervention regulations and standards."
    },
    {
        id: 30,
        question: "What is the Family Educational Rights and Privacy Act (FERPA) and how does it relate to the Early Intervention Program?",
        options: [
            "It provides funding for family education courses but doesn't apply to early intervention",
            "It requires all services to be provided in the family's home",
            "It protects the privacy of children's educational records, including early intervention records",
            "It requires families to participate in educational training"
        ],
        correctIndex: 2,
        explanation: "FERPA is a federal law that protects the privacy of student education records, including early intervention records. It gives parents certain rights with respect to their children's records and restricts disclosure of personally identifiable information without parental consent."
    }
];

// Define more questions for Section 1
const section1QuestionsGroup5 = [
    {
        id: 31,
        question: "Under New York State regulations, what are 'core evaluators' in the Early Intervention Program?",
        options: [
            "Any providers who conduct evaluations",
            "Evaluators who focus only on cognitive development",
            "A qualified physician and another qualified personnel who jointly conduct the multidisciplinary evaluation",
            "Administrative staff who review evaluation reports"
        ],
        correctIndex: 2,
        explanation: "Core evaluators in the New York State Early Intervention Program are defined as a physician/nurse practitioner and another appropriately qualified personnel who together conduct the child's multidisciplinary evaluation to determine eligibility."
    },
    {
        id: 32,
        question: "Which of the following is NOT typically a qualifying condition for the Early Intervention Program?",
        options: [
            "Down syndrome",
            "Autism spectrum disorder",
            "Seasonal allergies",
            "Hearing impairment"
        ],
        correctIndex: 2,
        explanation: "Seasonal allergies alone would not typically qualify a child for early intervention services, as they do not generally cause significant developmental delays. Conditions like Down syndrome, autism spectrum disorder, and hearing impairment are qualifying diagnosed conditions that may impact development."
    },
    {
        id: 33,
        question: "What is the purpose of the Child Outcomes Summary (COS) process in the Early Intervention Program?",
        options: [
            "To determine initial eligibility for services",
            "To measure family satisfaction with services",
            "To document children's progress in three outcome areas for federal reporting",
            "To calculate provider reimbursement rates"
        ],
        correctIndex: 2,
        explanation: "The Child Outcomes Summary (COS) process is used to document children's progress in three outcome areas (social-emotional skills, acquisition and use of knowledge and skills, and use of appropriate behaviors) for federal reporting purposes. This data helps evaluate program effectiveness."
    },
    {
        id: 34,
        question: "Under IDEA Part C, which of the following is a required early intervention service?",
        options: [
            "Residential placement",
            "Service coordination",
            "Medication management",
            "Academic tutoring"
        ],
        correctIndex: 1,
        explanation: "Service coordination is a required early intervention service under IDEA Part C. Every eligible child and family must be provided with a service coordinator who is responsible for coordinating evaluations, facilitating IFSP development, and helping the family access services."
    },
    {
        id: 35,
        question: "What is the 'at-risk' category in the New York State Early Intervention Program?",
        options: [
            "Children with confirmed disabilities",
            "Children with greater than 33% delay in one or more developmental areas",
            "Children at risk of developmental delay due to specific medical or biological conditions",
            "Children who live in poverty"
        ],
        correctIndex: 2,
        explanation: "The 'at-risk' category in the New York State Early Intervention Program refers to children who do not have a diagnosed condition or significant delay but are at risk of developing delays due to specific medical or biological risk factors such as low birth weight, prenatal drug exposure, or other conditions."
    },
    {
        id: 36,
        question: "What is the significance of the 'child find' system under IDEA Part C?",
        options: [
            "It's a database of missing children",
            "It's a system to identify and locate children who may need early intervention services",
            "It's a method for parents to find childcare providers",
            "It's a registry of children receiving services"
        ],
        correctIndex: 1,
        explanation: "The 'child find' system under IDEA Part C is a comprehensive system to identify, locate, and evaluate all infants and toddlers with disabilities who may be eligible for early intervention services, ensuring that eligible children are identified as early as possible."
    },
    {
        id: 37,
        question: "Under New York State regulations, how often must a child's ongoing service coordinator have face-to-face contact with the child and family?",
        options: [
            "Weekly",
            "Monthly",
            "At least quarterly",
            "Only at IFSP meetings"
        ],
        correctIndex: 2,
        explanation: "According to New York State Early Intervention regulations, ongoing service coordinators must have face-to-face contact with the child and family at least quarterly (every three months) to ensure appropriate service delivery and address any emerging concerns."
    },
    {
        id: 38,
        question: "What is the significance of 'prior written notice' in the Early Intervention Program?",
        options: [
            "It's just a courtesy notification",
            "It informs parents before any changes to identification, evaluation, or placement of their child",
            "It's a bill for upcoming services",
            "It's only required for medical procedures"
        ],
        correctIndex: 1,
        explanation: "Prior written notice is a procedural safeguard that requires the early intervention system to notify parents in writing before proposing or refusing to initiate or change the identification, evaluation, placement, or provision of services for their child."
    },
    {
        id: 39,
        question: "What is the role of 'surrogate parents' in the Early Intervention Program?",
        options: [
            "To provide respite care for biological parents",
            "To represent the interests of a child when the biological parents are unknown or unavailable",
            "To provide therapeutic interventions",
            "To transport children to appointments"
        ],
        correctIndex: 1,
        explanation: "Surrogate parents are appointed to represent the interests of a child in the Early Intervention Program when the biological parents cannot be identified, located, or when the child is a ward of the state, ensuring the child's rights are protected throughout the process."
    },
    {
        id: 40,
        question: "What is the purpose of a 'supplemental evaluation' in the New York Early Intervention Program?",
        options: [
            "To replace the initial multidisciplinary evaluation",
            "To assess areas of concern not adequately addressed in the initial evaluation",
            "To evaluate service providers' performance",
            "To determine whether a child should be discharged from services"
        ],
        correctIndex: 1,
        explanation: "A supplemental evaluation in the New York Early Intervention Program is conducted to assess specific areas of concern that were not adequately addressed in the initial multidisciplinary evaluation, providing additional information for IFSP development or revision."
    }
];

// Define final questions for Section 1
const section1QuestionsGroup6 = [
    {
        id: 41,
        question: "What is 'informed clinical opinion' in the context of early intervention eligibility determination?",
        options: [
            "A casual judgment made by any healthcare provider",
            "The use of qualitative and quantitative information to form a determination about a child's developmental status",
            "A medical diagnosis made only by a physician",
            "A parent's opinion about their child's development"
        ],
        correctIndex: 1,
        explanation: "Informed clinical opinion is the use of qualitative and quantitative information by qualified professionals to make a determination about a child's developmental status and need for early intervention services, especially when standardized tests alone may not capture the child's functioning."
    },
    {
        id: 42,
        question: "Under New York State regulations, what constitutes a 'significant delay' for eligibility in the Early Intervention Program?",
        options: [
            "Any noticeable delay in development",
            "A 12-month delay in any developmental area",
            "A 33% or greater delay in one functional area or 25% delay in two or more functional areas",
            "A delay only in speech development"
        ],
        correctIndex: 2,
        explanation: "New York State defines a 'significant delay' as a 33% or greater delay in one functional area or a 25% delay in two or more functional areas of development (cognitive, physical, communication, social-emotional, or adaptive). This criteria is used to determine eligibility for early intervention services."
    },
    {
        id: 43,
        question: "What is the purpose of 'interim IFSPs' in the Early Intervention Program?",
        options: [
            "To replace the need for a full IFSP",
            "To provide temporary services before completing the full evaluation and IFSP process",
            "To document services that were denied",
            "To extend services beyond age three"
        ],
        correctIndex: 1,
        explanation: "Interim IFSPs allow for the provision of temporary early intervention services before the completion of the full evaluation and IFSP process when there is an obvious immediate need for services. This ensures children receive timely support while the complete evaluation process is underway."
    },
    {
        id: 44,
        question: "What does 'pendency' mean in the context of early intervention dispute resolution?",
        options: [
            "The requirement that all services stop during a dispute",
            "The time period during which a family can file a complaint",
            "The right of a child to continue receiving services during dispute proceedings",
            "The waiting period before services can begin"
        ],
        correctIndex: 2,
        explanation: "Pendency (also called 'stay-put' provision) means that during dispute resolution proceedings, the child has the right to continue receiving the services currently in the IFSP that are not in dispute. This ensures continuity of services while disputes are being resolved."
    },
    {
        id: 45,
        question: "Under IDEA Part C, what must state early intervention systems ensure regarding transition planning?",
        options: [
            "That all children transition to special education preschool services",
            "That transition planning begins after the child turns three",
            "That a transition plan is included in the IFSP for all children exiting early intervention",
            "That transitions only occur at specific times of the year"
        ],
        correctIndex: 2,
        explanation: "Under IDEA Part C, state early intervention systems must ensure that a transition plan is included in the IFSP for all children exiting early intervention. This planning must begin well before the child's third birthday to ensure a smooth transition to preschool or other appropriate services."
    },
    {
        id: 46,
        question: "In the context of early intervention services, what is 'family assessment'?",
        options: [
            "A mandatory evaluation of parenting skills",
            "A voluntary identification of family resources, priorities, and concerns related to enhancing the child's development",
            "A determination of family eligibility for financial assistance",
            "An assessment of home safety"
        ],
        correctIndex: 1,
        explanation: "Family assessment in early intervention is a voluntary process to identify family resources, priorities, and concerns related to enhancing their child's development. It helps the IFSP team understand family needs and strengths to better support the child's development within the family context."
    },
    {
        id: 47,
        question: "What is the purpose of the 'public awareness program' requirement under IDEA Part C?",
        options: [
            "To advertise for service providers",
            "To inform the public about the availability of early intervention services",
            "To raise funds for early intervention programs",
            "To promote political support for disability legislation"
        ],
        correctIndex: 1,
        explanation: "The public awareness program requirement under IDEA Part C exists to inform the public, especially parents of infants and toddlers, about the availability of early intervention services, the referral process, and how to access evaluations and services."
    },
    {
        id: 48,
        question: "Under New York State regulations, what is required regarding the frequency, intensity, and method of delivering early intervention services?",
        options: [
            "Services must always be provided weekly",
            "The IFSP must specify the frequency, intensity, method, location, and duration of each service",
            "All decisions are left to the service provider's discretion",
            "Services must follow a standardized schedule for all children"
        ],
        correctIndex: 1,
        explanation: "New York State regulations require that the IFSP clearly specify the frequency, intensity, method of delivering, location, and duration for each early intervention service authorized. This ensures that services are individually tailored to meet each child's unique needs."
    },
    {
        id: 49,
        question: "What role do primary referral sources play in the Early Intervention Program?",
        options: [
            "They provide all necessary services",
            "They identify and refer children who may need early intervention services",
            "They determine eligibility for services",
            "They develop and implement the IFSP"
        ],
        correctIndex: 1,
        explanation: "Primary referral sources (such as hospitals, physicians, childcare programs, and social service agencies) play a crucial role in identifying children who may need early intervention services and referring them to the program, typically within 2 working days of identification."
    },
    {
        id: 50,
        question: "What is a 'multidisciplinary evaluation' in the context of the Early Intervention Program?",
        options: [
            "An evaluation conducted by multiple agencies simultaneously",
            "An assessment of multiple children at once",
            "An evaluation that includes information from multiple developmental domains using qualified personnel from at least two disciplines",
            "A series of evaluations conducted over several months"
        ],
        correctIndex: 2,
        explanation: "A multidisciplinary evaluation in early intervention is an assessment that gathers information about a child's functioning in all developmental domains (cognitive, physical, communication, social-emotional, and adaptive) and is conducted by qualified personnel from at least two different disciplines or professions."
    }
];

// Combine all question groups
section1Questions.push(...section1QuestionsGroup2);
section1Questions.push(...section1QuestionsGroup3);
section1Questions.push(...section1QuestionsGroup4);
section1Questions.push(...section1QuestionsGroup5);
section1Questions.push(...section1QuestionsGroup6);

// Function to load Section 1 questions
function loadSection1Questions() {
    const sectionContainer = document.getElementById('section1');
    
    // Create the section structure
    let sectionContent = `
        <h3>Section 1: Legal Framework</h3>
        <p>This section covers the federal and state laws and regulations that govern the Early Intervention Program.</p>
        
        <div class="progress-bar">
            <div class="progress" id="section1-progress"></div>
        </div>
        
        <div id="section1-questions">
            <!-- Questions will be loaded here -->
        </div>
        
        <div class="test-controls">
            <button class="btn" id="section1-prev" disabled>Previous</button>
            <button class="btn" id="section1-next">Next</button>
            <button class="btn secondary" id="section1-submit" style="display:none;">Submit Section</button>
        </div>
        
        <div id="section1-results" class="results" style="display:none;">
            <!-- Results will be shown here -->
        </div>
    `;
    
    sectionContainer.innerHTML = sectionContent;
    
    // Set up question navigation
    setupSection1Navigation();
}

// Function to set up question navigation for Section 1
function setupSection1Navigation() {
    let currentQuestionIndex = 0;
    const questionsContainer = document.getElementById('section1-questions');
    const prevButton = document.getElementById('section1-prev');
    const nextButton = document.getElementById('section1-next');
    const submitButton = document.getElementById('section1-submit');
    const progressBar = document.getElementById('section1-progress');
    
    // Array to track user's answers
    const userAnswers = new Array(section1Questions.length).fill(null);
    
    // Function to display current question
    function showQuestion(index) {
        console.log(`Section 1: About to show question ${index+1}`);
        
        // Update progress bar
        progressBar.style.width = `${((index + 1) / section1Questions.length) * 100}%`;
        
        // Get the current question
        const question = section1Questions[index];
        
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
        
        console.log(`Section 1: Question ${index+1} HTML inserted into DOM`);
        
        // Apply event listeners after DOM is updated
        setTimeout(() => {
            applyQuestionEventListeners(index, question);
        }, 0);
        
        // Update button states
        prevButton.disabled = index === 0;
        
        if (index === section1Questions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
    }
    
    // Function to apply event listeners to the current question
    function applyQuestionEventListeners(index, question) {
        // Get options directly from questionsContainer
        const options = questionsContainer.querySelectorAll('.option');
        const feedbackElement = document.getElementById(`feedback-${index}`);
        const explanationElement = document.getElementById(`explanation-${index}`);
        
        console.log(`Section 1: Found ${options.length} options for question ${index+1}`);
        
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
        
        // Add click handlers to each option
        options.forEach(option => {
            option.addEventListener('click', function() {
                console.log(`Section 1: Option clicked for question ${index+1}:`, this.textContent);
                
                // Remove selected class from all options
                options.forEach(opt => opt.classList.remove('selected'));
                
                // Add selected class to clicked option
                this.classList.add('selected');
                
                // Store the user's answer
                const optionIndex = parseInt(this.getAttribute('data-index'));
                userAnswers[index] = optionIndex;
                
                // Check if the answer is correct
                const isCorrect = optionIndex === question.correctIndex;
                console.log(`Section 1: Answer for question ${index+1} is ${isCorrect ? 'correct' : 'incorrect'}`);
                
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
            });
        });
    }
    
    // Set up event listeners for navigation buttons
    prevButton.addEventListener('click', function() {
        if (currentQuestionIndex > 0) {
            currentQuestionIndex--;
            showQuestion(currentQuestionIndex);
        }
    });
    
    nextButton.addEventListener('click', function() {
        if (currentQuestionIndex < section1Questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });
    
    submitButton.addEventListener('click', function() {
        // Calculate score
        let score = 0;
        for (let i = 0; i < section1Questions.length; i++) {
            if (userAnswers[i] === section1Questions[i].correctIndex) {
                score++;
            }
        }
        
        // Show results
        const resultsDiv = document.getElementById('section1-results');
        resultsDiv.innerHTML = `
            <h3>Section 1 Results</h3>
            <p>You scored ${score} out of ${section1Questions.length}.</p>
            <button class="btn" id="section1-retry">Retry Section</button>
        `;
        
        resultsDiv.style.display = 'block';
        
        // Hide questions and controls
        questionsContainer.style.display = 'none';
        document.querySelector('.test-controls').style.display = 'none';
        
        // Add event listener for retry button
        document.getElementById('section1-retry').addEventListener('click', function() {
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
    
    // Show the first question
    showQuestion(currentQuestionIndex);
}

// Make function available globally
window.loadSection1Questions = loadSection1Questions;
