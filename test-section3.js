// Test Section 3: Eligibility & Services - Questions 1-50

// Define the questions for Section 3
const section3Questions = [
    {
        id: 1,
        question: "Which of the following is NOT a qualifying developmental delay that makes a child eligible for Early Intervention services?",
        options: [
            "A 33% delay in cognitive development",
            "A 33% delay in physical development",
            "A 15% delay in speech development",
            "A 33% delay in social/emotional development"
        ],
        correctIndex: 2,
        explanation: "A 15% delay in speech development would not qualify a child for Early Intervention services. The New York State Early Intervention Program typically requires a 33% delay in one developmental area or a 25% delay in multiple areas to qualify for services."
    },
    {
        id: 2,
        question: "What is the definition of a 'diagnosed condition' that would make a child automatically eligible for Early Intervention?",
        options: [
            "Any medical diagnosis provided by a physician",
            "A physical or mental condition with a high probability of resulting in developmental delay",
            "A condition that requires immediate IFSP development",
            "A condition that qualifies for both Early Intervention and preschool special education"
        ],
        correctIndex: 1,
        explanation: "A 'diagnosed condition' that makes a child automatically eligible for Early Intervention is defined as a physical or mental condition with a high probability of resulting in developmental delay. Examples include Down syndrome, cerebral palsy, and certain genetic disorders."
    },
    {
        id: 3,
        question: "Which professional is typically responsible for determining if a child meets the eligibility criteria for the Early Intervention Program?",
        options: [
            "Service Coordinator",
            "Early Intervention Official",
            "Multidisciplinary Evaluation Team",
            "Pediatrician"
        ],
        correctIndex: 2,
        explanation: "A Multidisciplinary Evaluation Team is responsible for determining if a child meets the eligibility criteria for the Early Intervention Program. This team conducts a comprehensive evaluation of the child's developmental status across all domains."
    },
    {
        id: 4,
        question: "What is the time frame in which the initial evaluation for Early Intervention eligibility must be completed from the date of referral?",
        options: [
            "15 days",
            "30 days",
            "45 days",
            "60 days"
        ],
        correctIndex: 2,
        explanation: "The initial evaluation for Early Intervention eligibility must be completed within 45 days from the date of referral. This timeline includes both the evaluation and the initial IFSP meeting if the child is found eligible."
    },
    {
        id: 5,
        question: "Which of the following services is NOT typically provided through the Early Intervention Program?",
        options: [
            "Speech Therapy",
            "Physical Therapy",
            "Long-term residential care",
            "Special Instruction"
        ],
        correctIndex: 2,
        explanation: "Long-term residential care is not typically included as an early intervention service under the IFSP. Early intervention services focus on supporting children in their natural environments, including home and community settings, rather than residential placements."
    },
    {
        id: 6,
        question: "What is 'special instruction' in the context of Early Intervention services?",
        options: [
            "Academic tutoring for preschool readiness",
            "Teaching parents specialized medical procedures",
            "Developmental intervention activities designed to address the child's developmental needs",
            "Training for transition to school district services"
        ],
        correctIndex: 2,
        explanation: "Special instruction in Early Intervention refers to developmental intervention activities designed to address the child's developmental needs. It is provided by early childhood educators or special educators and focuses on promoting the child's development across domains."
    },
    {
        id: 7,
        question: "Which of the following best describes 'natural environments' for Early Intervention services?",
        options: [
            "Clinic settings specifically designed for therapy",
            "Settings where typically developing children spend time",
            "Only the child's home",
            "Environments free from artificial or electronic stimuli"
        ],
        correctIndex: 1,
        explanation: "Natural environments for Early Intervention services are settings where typically developing children spend time, such as homes, childcare centers, playgrounds, and community spaces. The focus is on providing services in environments that are natural or normal for the child's age peers who have no disabilities."
    },
    {
        id: 8,
        question: "When determining a child's eligibility for Early Intervention, which of the following approaches is most appropriate?",
        options: [
            "Relying solely on standardized test scores",
            "Using only parent reports of developmental concerns",
            "Gathering information from multiple sources and using clinical judgment",
            "Comparing the child only to same-age peers in their immediate community"
        ],
        correctIndex: 2,
        explanation: "When determining a child's eligibility for Early Intervention, the most appropriate approach is gathering information from multiple sources and using clinical judgment. This includes standardized assessments, observations, parent reports, and professional clinical opinion."
    },
    {
        id: 9,
        question: "Which of the following is considered a 'related service' in Early Intervention?",
        options: [
            "Multidisciplinary evaluation",
            "IFSP development",
            "Service coordination",
            "Assistive technology devices and services"
        ],
        correctIndex: 3,
        explanation: "Assistive technology devices and services are considered a 'related service' in Early Intervention. Related services support the primary developmental services and help the child benefit from those interventions."
    },
    {
        id: 10,
        question: "Can informed clinical opinion be used as an independent basis to establish eligibility for Early Intervention services?",
        options: [
            "No, standardized testing scores are always required",
            "Yes, qualified professionals can use their judgment particularly when standardized measures don't capture concerns",
            "Only if the child has a diagnosed condition",
            "Only when the family disagrees with test results"
        ],
        correctIndex: 1,
        explanation: "Informed clinical opinion can be used as an independent basis to establish eligibility for Early Intervention services. It allows qualified professionals to use their expertise and judgment, particularly in cases where standardized measures may not capture the full extent of a child's developmental concerns."
    },
    {
        id: 11,
        question: "What is 'informed clinical opinion' in the Early Intervention eligibility determination process?",
        options: [
            "A formal diagnostic test for developmental delays",
            "A judgment by medical professionals based on clinical experience and observation that can be used to determine eligibility",
            "A parental report of concerns about development",
            "A standardized psychological assessment"
        ],
        correctIndex: 1,
        explanation: "Informed clinical opinion is a judgment by qualified professionals based on clinical experience, observation, and assessment that can be used to determine eligibility for early intervention. It's particularly important when standardized tests may not accurately reflect a child's functional abilities."
    },
    {
        id: 12,
        question: "Which of the following is a purpose of the Individualized Family Service Plan (IFSP) in Early Intervention?",
        options: [
            "To determine Medicaid eligibility",
            "To diagnose specific developmental disabilities",
            "To document the services and supports necessary to enhance the child's development and family capacity",
            "To qualify the family for additional public assistance programs"
        ],
        correctIndex: 2,
        explanation: "The purpose of the IFSP is to document the early intervention services and supports necessary to enhance the child's development and the family's capacity to meet their child's needs. It identifies outcomes for the child and family and specifies services to achieve those outcomes."
    },
    {
        id: 13,
        question: "Who must be included in the IFSP development meeting?",
        options: [
            "Only the early intervention providers",
            "The child's parents, service coordinator, evaluator(s), and Early Intervention Official (or designee)",
            "Only the service coordinator and pediatrician",
            "Any interested community members"
        ],
        correctIndex: 1,
        explanation: "The IFSP development meeting must include the child's parents, service coordinator, person(s) who conducted the evaluation, the Early Intervention Official (or designee), and other family members or advocates as requested by the parents. Service providers may also attend as appropriate."
    },
    {
        id: 14,
        question: "What is the maximum duration for which an IFSP can be written before requiring review?",
        options: [
            "3 months",
            "6 months",
            "12 months",
            "24 months"
        ],
        correctIndex: 2,
        explanation: "An IFSP can be written for a maximum duration of 12 months before requiring a full review and evaluation. However, it must also be reviewed at least every 6 months to assess progress and make any needed adjustments to services."
    },
    {
        id: 15,
        question: "Which of the following is NOT typically included as an early intervention service under the IFSP?",
        options: [
            "Speech therapy",
            "Occupational therapy",
            "Long-term residential care",
            "Family training and counseling"
        ],
        correctIndex: 2,
        explanation: "Long-term residential care is not typically included as an early intervention service under the IFSP. Early intervention services focus on supporting children in their natural environments, including home and community settings, rather than residential placements."
    },
    {
        id: 16,
        question: "Which of the following statements about Early Intervention outcomes is most accurate?",
        options: [
            "Outcomes must be written only by professionals with advanced degrees",
            "Outcomes should be based solely on developmental norms for the child's age",
            "Outcomes should be functional, meaningful, and based on family priorities",
            "Outcomes must follow a standardized format determined by state regulations"
        ],
        correctIndex: 2,
        explanation: "Early Intervention outcomes should be functional, meaningful, and based on family priorities. Functional outcomes focus on what the child and family need to accomplish in their daily routines and activities, rather than just addressing isolated developmental skills."
    },
    {
        id: 17,
        question: "What does 'frequency' refer to in an IFSP service recommendation?",
        options: [
            "How many different providers will work with the child",
            "How many times per week or month a service will be provided",
            "How quickly the child is expected to make progress",
            "How many goals will be addressed during each session"
        ],
        correctIndex: 1,
        explanation: "In an IFSP service recommendation, 'frequency' refers to how many times per week or month a service will be provided (e.g., 2 times per week or 8 times per month). This specification helps ensure that the child receives the appropriate intensity of intervention."
    },
    {
        id: 18,
        question: "What does 'duration' refer to in an IFSP service recommendation?",
        options: [
            "How long a service will continue before the next IFSP review",
            "How many months the child will remain in Early Intervention",
            "How long each session will last (e.g., 30 minutes, 60 minutes)",
            "How many total hours of service the child will receive"
        ],
        correctIndex: 2,
        explanation: "In an IFSP service recommendation, 'duration' refers to how long each session will last, typically expressed in minutes (e.g., 30 minutes, 45 minutes, 60 minutes). This helps providers plan appropriate activities and ensures that sessions are the right length for the child's needs and attention span."
    },
    {
        id: 19,
        question: "What must be included in the IFSP regarding the natural environments for service delivery?",
        options: [
            "A simple statement that services will be provided in natural environments",
            "A justification only when services cannot be provided in natural environments",
            "A list of all possible environments where services could be provided",
            "Requirements that all services must be provided in clinical settings"
        ],
        correctIndex: 1,
        explanation: "The IFSP must include a justification when services cannot be provided in natural environments. This justification must explain why the outcomes cannot be achieved in the child's natural environments and include a plan for transitioning services to natural environments when possible."
    },
    {
        id: 20,
        question: "Which of the following is an example of a properly written functional outcome for an IFSP?",
        options: [
            "Child will improve fine motor skills",
            "Child will receive occupational therapy 2x weekly",
            "Child will use a pincer grasp to pick up small foods during meals",
            "Child will make progress in cognitive development"
        ],
        correctIndex: 2,
        explanation: "A properly written functional outcome for an IFSP is specific, measurable, and relevant to daily life activities. 'Child will use a pincer grasp to pick up small foods during meals' is functional because it describes what the child will do in a meaningful daily routine (mealtimes), rather than just focusing on a developmental skill in isolation."
    },
    {
        id: 21,
        question: "What is meant by 'intensity' in an IFSP service recommendation?",
        options: [
            "The level of difficulty of the intervention activities",
            "Whether services are provided individually or in a group",
            "The emotional impact of the services on the child",
            "The decibel level at which providers should speak to the child"
        ],
        correctIndex: 1,
        explanation: "In an IFSP service recommendation, 'intensity' refers to whether services are provided individually (one-on-one) or in a group setting. This specification helps ensure that the child receives services in the most appropriate format to address their needs."
    },
    {
        id: 22,
        question: "Which of the following is an example of an assistive technology device that might be included in an IFSP?",
        options: [
            "A wheelchair that the family already owns",
            "A communication board to help a child with limited verbal skills express choices",
            "Standard toys available in any preschool classroom",
            "Prescription medications"
        ],
        correctIndex: 1,
        explanation: "A communication board to help a child with limited verbal skills express choices is an example of an assistive technology device that might be included in an IFSP. Assistive technology devices are items that help maintain or improve the functional capabilities of children with disabilities."
    },
    {
        id: 23,
        question: "What is the purpose of including 'strategies' in IFSP outcomes?",
        options: [
            "To assign blame if outcomes are not achieved",
            "To identify specific approaches that can be used to help achieve the outcomes",
            "To create additional paperwork for providers",
            "To establish penalties for non-compliance"
        ],
        correctIndex: 1,
        explanation: "The purpose of including strategies in IFSP outcomes is to identify specific approaches that can be used to help achieve the outcomes. Strategies provide practical guidance to both providers and families about how to support the child's progress toward the outcome during daily activities and routines."
    },
    {
        id: 24,
        question: "Which of the following is NOT typically a qualified provider discipline in Early Intervention?",
        options: [
            "Speech-language pathologist",
            "Physical therapist",
            "Classroom teacher",
            "Special educator"
        ],
        correctIndex: 2,
        explanation: "Classroom teacher is not typically a qualified provider discipline in Early Intervention. Early Intervention providers usually include disciplines such as speech-language pathologists, physical therapists, occupational therapists, special educators, psychologists, social workers, and other professionals with specific training in early childhood development and intervention."
    },
    {
        id: 25,
        question: "What does 'method' refer to in an IFSP service recommendation?",
        options: [
            "The specific therapeutic techniques the provider will use",
            "How the service will be delivered (e.g., in-person, telehealth)",
            "The educational background of the provider",
            "The language used during the intervention"
        ],
        correctIndex: 1,
        explanation: "In an IFSP service recommendation, 'method' refers to how the service will be delivered, such as in-person or via telehealth. This specification helps ensure that services are provided in a way that is accessible and appropriate for the child and family."
    },
    {
        id: 26,
        question: "What is the primary purpose of progress monitoring in Early Intervention?",
        options: [
            "To determine if the child qualifies for continued services",
            "To assess if current services are effective and if adjustments are needed",
            "To compare the child's progress to other children in the program",
            "To fulfill administrative reporting requirements"
        ],
        correctIndex: 1,
        explanation: "The primary purpose of progress monitoring in Early Intervention is to assess if current services are effective and if adjustments are needed. Regular progress monitoring helps the team determine whether strategies are working, if outcomes are being achieved, and whether modifications to the IFSP might be necessary."
    },
    {
        id: 27,
        question: "What is interim IFSP?",
        options: [
            "An IFSP that is developed when a child's eligibility is in question",
            "An IFSP that is developed after a child turns three years old",
            "A temporary plan that allows immediate services while evaluation and assessment are being completed",
            "An IFSP that is used only for children with diagnosed conditions"
        ],
        correctIndex: 2,
        explanation: "An interim IFSP is a temporary plan that allows immediate services to begin while the evaluation and assessment process is being completed. It can be developed when there is a presumption of eligibility and an immediate need for services, ensuring that children receive timely support even before the full evaluation process is completed."
    },
    {
        id: 28,
        question: "Which statement about service coordination in the IFSP is accurate?",
        options: [
            "Service coordination is optional and only included if specifically requested",
            "Service coordination must be listed as a service on every IFSP",
            "Service coordination is only needed for children with multiple services",
            "Service coordination is only required during the initial IFSP development"
        ],
        correctIndex: 1,
        explanation: "Service coordination must be listed as a service on every IFSP. All eligible children and families in Early Intervention are entitled to service coordination to help them navigate the system, coordinate services, and access resources."
    },
    {
        id: 29,
        question: "What must happen if the IFSP team cannot reach consensus on the appropriate services for a child?",
        options: [
            "The Early Intervention Official makes the final decision without input",
            "The parent's preferences automatically override all professional recommendations",
            "Services are denied until consensus is reached",
            "The parent must be informed of their due process rights, including the right to mediation and impartial hearing"
        ],
        correctIndex: 3,
        explanation: "If the IFSP team cannot reach consensus on appropriate services, the parent must be informed of their due process rights, including the right to mediation and impartial hearing. Parents have the right to challenge decisions about eligibility, evaluation, or services through these formal dispute resolution mechanisms."
    },
    {
        id: 30,
        question: "What is the 'transdisciplinary model' of service delivery in Early Intervention?",
        options: [
            "Each provider works independently with no communication between disciplines",
            "Providers from different disciplines share roles and expertise across traditional boundaries",
            "Only one professional provides all services regardless of the child's needs",
            "Services are only provided in clinical settings by specialists"
        ],
        correctIndex: 1,
        explanation: "The transdisciplinary model of service delivery involves providers from different disciplines sharing roles and expertise across traditional boundaries. Team members collaborate closely, exchange knowledge and skills, and may implement strategies from disciplines other than their own under appropriate guidance and supervision."
    },
    {
        id: 31,
        question: "What is meant by 'family capacity-building practices' in Early Intervention?",
        options: [
            "Practices that place full responsibility on families to provide therapy",
            "Approaches that help families develop the confidence and competence to support their child's development",
            "Methods to assess a family's financial capacity to pay for services",
            "Techniques to determine how many family members should participate in sessions"
        ],
        correctIndex: 1,
        explanation: "Family capacity-building practices in Early Intervention are approaches that help families develop the confidence and competence to support their child's development. These practices focus on strengthening family members' abilities to provide learning opportunities for their child within everyday routines and activities."
    },
    {
        id: 32,
        question: "What is the primary difference between a 'service' and a 'strategy' in an IFSP?",
        options: [
            "Services are free while strategies require payment",
            "Services are provided by professionals while strategies are activities that families and providers can use to reach outcomes",
            "Services are mandatory while strategies are optional",
            "Services are only for the child while strategies are only for the family"
        ],
        correctIndex: 1,
        explanation: "The primary difference is that services are provided by professionals (such as speech therapy or physical therapy) while strategies are specific activities and approaches that families and providers can use to reach outcomes. Strategies can be implemented throughout everyday routines and activities by both providers and caregivers."
    },
    {
        id: 33,
        question: "What happens during a periodic review of the IFSP?",
        options: [
            "The child is completely re-evaluated to determine continued eligibility",
            "The team reviews progress toward outcomes and determines if any changes to the IFSP are needed",
            "Services are denied until consensus is reached",
            "Only administrative information is updated with no review of outcomes"
        ],
        correctIndex: 1,
        explanation: "During a periodic review of the IFSP, the team reviews progress toward outcomes and determines if any changes to the IFSP are needed. This includes reviewing and documenting progress, revising outcomes if needed, and adding, modifying, or discontinuing services based on the child's current needs."
    },
    {
        id: 34,
        question: "What is the meaning of 'criteria' in relation to IFSP outcomes?",
        options: [
            "Requirements for the child to qualify for services",
            "Methods for measuring when the outcome has been achieved",
            "Standards that providers must meet",
            "Qualifications required by service providers"
        ],
        correctIndex: 1,
        explanation: "In relation to IFSP outcomes, 'criteria' refers to the methods for measuring when the outcome has been achieved. Criteria specify observable, measurable indicators that would indicate the outcome has been met, helping the team determine when progress has been made."
    },
    {
        id: 35,
        question: "Who is responsible for implementing strategies to achieve IFSP outcomes?",
        options: [
            "Only the assigned service providers",
            "Only the child's parents or caregivers",
            "Both providers and families/caregivers, working in partnership",
            "Only the service coordinator"
        ],
        correctIndex: 2,
        explanation: "Both providers and families/caregivers, working in partnership, are responsible for implementing strategies to achieve IFSP outcomes. This collaborative approach ensures that intervention strategies are integrated into everyday routines and that families are empowered partners in supporting their child's development."
    },
    {
        id: 36,
        question: "What is the 'primary service provider approach' in Early Intervention?",
        options: [
            "An approach where only one provider is allowed to work with a child",
            "A model where one professional serves as the primary contact for the family while receiving consultation from other team members",
            "A system where the most experienced provider makes all decisions",
            "An approach where families only work with one provider throughout their time in early intervention"
        ],
        correctIndex: 1,
        explanation: "The primary service provider approach is a model where one professional serves as the primary contact for the family while receiving consultation from other team members with different areas of expertise. This approach reduces the number of professionals directly working with the family while still ensuring comprehensive support across developmental domains."
    },
    {
        id: 37,
        question: "What is the purpose of 'coaching' as an interaction style in Early Intervention?",
        options: [
            "To tell parents exactly what to do with their child",
            "To replace direct services with parent-implemented intervention",
            "To support caregivers in gaining knowledge and skills to promote their child's development",
            "To reduce the cost of early intervention services"
        ],
        correctIndex: 2,
        explanation: "The purpose of coaching as an interaction style in Early Intervention is to support caregivers in gaining knowledge and skills to promote their child's development. Coaching involves collaborative problem-solving, reflection, and feedback to help caregivers implement effective strategies within everyday routines."
    },
    {
        id: 38,
        question: "What should happen if a family consistently misses scheduled Early Intervention sessions?",
        options: [
            "Services should be automatically terminated",
            "The service coordinator should contact the family to understand barriers and develop solutions",
            "The provider should simply continue to attempt visits without discussing the issue",
            "Child protective services should be contacted immediately"
        ],
        correctIndex: 1,
        explanation: "If a family consistently misses scheduled Early Intervention sessions, the service coordinator should contact the family to understand potential barriers and develop solutions. This might include addressing logistical challenges, misunderstandings about the program, or family stressors that may be interfering with participation."
    },
    {
        id: 39,
        question: "What is an appropriate response if an early intervention provider observes signs of possible child abuse or neglect?",
        options: [
            "Discuss concerns only with the service coordinator",
            "Make a report to the appropriate child protective services agency as mandated by law",
            "Confront the family directly about the concerns",
            "End services immediately without explanation"
        ],
        correctIndex: 1,
        explanation: "If an early intervention provider observes signs of possible child abuse or neglect, they are legally mandated to make a report to the appropriate child protective services agency. Early intervention providers are mandated reporters and must follow state laws regarding reporting suspected abuse or neglect."
    },
    {
        id: 40,
        question: "What is 'co-treatment' in Early Intervention?",
        options: [
            "When two children receive services at the same time",
            "When two or more providers from different disciplines conduct a session together",
            "When both parents must be present for therapy",
            "When the same provider treats multiple children in one family"
        ],
        correctIndex: 1,
        explanation: "Co-treatment in Early Intervention occurs when two or more providers from different disciplines conduct a session together. This approach allows for integrated intervention addressing multiple developmental domains simultaneously and promotes collaboration between professionals with different areas of expertise."
    }
];

// Define additional questions for Section 3 - Group 2
const section3QuestionsGroup2 = [
    {
        id: 41,
        question: "What is the primary purpose of the Individualized Family Service Plan (IFSP)?",
        options: [
            "To determine Medicaid eligibility",
            "To diagnose specific developmental disabilities",
            "To document the services and supports necessary to enhance the child's development and family capacity",
            "To qualify the family for additional public assistance programs"
        ],
        correctIndex: 2,
        explanation: "The primary purpose of the IFSP is to document the early intervention services and supports necessary to enhance the child's development and the family's capacity to meet their child's needs. It identifies outcomes for the child and family and specifies services to achieve those outcomes."
    },
    {
        id: 42,
        question: "Who must be included in the IFSP development meeting?",
        options: [
            "Only the early intervention providers",
            "The child's parents, service coordinator, evaluator(s), and Early Intervention Official (or designee)",
            "Only the service coordinator and pediatrician",
            "Any interested community members"
        ],
        correctIndex: 1,
        explanation: "The IFSP development meeting must include the child's parents, service coordinator, person(s) who conducted the evaluation, the Early Intervention Official (or designee), and other family members or advocates as requested by the parents. Service providers may also attend as appropriate."
    },
    {
        id: 43,
        question: "What is the maximum duration for which an IFSP can be written before requiring review?",
        options: [
            "3 months",
            "6 months",
            "12 months",
            "24 months"
        ],
        correctIndex: 2,
        explanation: "An IFSP can be written for a maximum duration of 12 months before requiring a full review and evaluation. However, it must also be reviewed at least every 6 months to assess progress and make any needed adjustments to services."
    },
    {
        id: 44,
        question: "Which of the following is NOT typically included as an early intervention service under the IFSP?",
        options: [
            "Speech therapy",
            "Occupational therapy",
            "Long-term residential care",
            "Family training and counseling"
        ],
        correctIndex: 2,
        explanation: "Long-term residential care is not typically included as an early intervention service under the IFSP. Early intervention services focus on supporting children in their natural environments, including home and community settings, rather than residential placements."
    },
    {
        id: 45,
        question: "Which of the following statements about Early Intervention outcomes is most accurate?",
        options: [
            "Outcomes must be written only by professionals with advanced degrees",
            "Outcomes should be based solely on developmental norms for the child's age",
            "Outcomes should be functional, meaningful, and based on family priorities",
            "Outcomes must follow a standardized format determined by state regulations"
        ],
        correctIndex: 2,
        explanation: "Early Intervention outcomes should be functional, meaningful, and based on family priorities. Functional outcomes focus on what the child and family need to accomplish in their daily routines and activities, rather than just addressing isolated developmental skills."
    },
    {
        id: 46,
        question: "What does 'frequency' refer to in an IFSP service recommendation?",
        options: [
            "How many different providers will work with the child",
            "How many times per week or month a service will be provided",
            "How quickly the child is expected to make progress",
            "How many goals will be addressed during each session"
        ],
        correctIndex: 1,
        explanation: "In an IFSP service recommendation, 'frequency' refers to how many times per week or month a service will be provided (e.g., 2 times per week or 8 times per month). This specification helps ensure that the child receives the appropriate intensity of intervention."
    },
    {
        id: 47,
        question: "What does 'duration' refer to in an IFSP service recommendation?",
        options: [
            "How long a service will continue before the next IFSP review",
            "How many months the child will remain in Early Intervention",
            "How long each session will last (e.g., 30 minutes, 60 minutes)",
            "How many total hours of service the child will receive"
        ],
        correctIndex: 2,
        explanation: "In an IFSP service recommendation, 'duration' refers to how long each session will last, typically expressed in minutes (e.g., 30 minutes, 45 minutes, 60 minutes). This helps providers plan appropriate activities and ensures that sessions are the right length for the child's needs and attention span."
    },
    {
        id: 48,
        question: "What must be included in the IFSP regarding the natural environments for service delivery?",
        options: [
            "A simple statement that services will be provided in natural environments",
            "A justification only when services cannot be provided in natural environments",
            "A list of all possible environments where services could be provided",
            "Requirements that all services must be provided in clinical settings"
        ],
        correctIndex: 1,
        explanation: "The IFSP must include a justification when services cannot be provided in natural environments. This justification must explain why the outcomes cannot be achieved in the child's natural environments and include a plan for transitioning services to natural environments when possible."
    },
    {
        id: 49,
        question: "Which of the following is an example of a properly written functional outcome for an IFSP?",
        options: [
            "Child will improve fine motor skills",
            "Child will receive occupational therapy 2x weekly",
            "Child will use a pincer grasp to pick up small foods during meals",
            "Child will make progress in cognitive development"
        ],
        correctIndex: 2,
        explanation: "A properly written functional outcome for an IFSP is specific, measurable, and relevant to daily life activities. 'Child will use a pincer grasp to pick up small foods during meals' is functional because it describes what the child will do in a meaningful daily routine (mealtimes), rather than just focusing on a developmental skill in isolation."
    },
    {
        id: 50,
        question: "What is meant by 'intensity' in an IFSP service recommendation?",
        options: [
            "The level of difficulty of the intervention activities",
            "Whether services are provided individually or in a group",
            "The emotional impact of the services on the child",
            "The decibel level at which providers should speak to the child"
        ],
        correctIndex: 1,
        explanation: "In an IFSP service recommendation, 'intensity' refers to whether services are provided individually (one-on-one) or in a group setting. This specification helps ensure that the child receives services in the most appropriate format to address their needs."
    }
];

// Combine all question groups
section3Questions.push(...section3QuestionsGroup2);

// Function to load Section 3 questions
function loadSection3Questions() {
    const sectionContainer = document.getElementById('section3');
    
    // Create the section structure
    let sectionContent = `
        <h3>Section 3: Eligibility & Services</h3>
        <p>This section covers eligibility criteria and the various services available through the Early Intervention Program.</p>
        
        <div class="progress-bar">
            <div class="progress" id="section3-progress"></div>
        </div>
        
        <div id="section3-questions">
            <!-- Questions will be loaded here -->
        </div>
        
        <div class="test-controls">
            <button class="btn" id="section3-prev" disabled>Previous</button>
            <button class="btn" id="section3-next">Next</button>
            <button class="btn secondary" id="section3-submit" style="display:none;">Submit Section</button>
        </div>
        
        <div id="section3-results" class="results" style="display:none;">
            <!-- Results will be shown here -->
        </div>
    `;
    
    sectionContainer.innerHTML = sectionContent;
    
    // Set up question navigation
    setupSection3Navigation();
}

// Function to set up question navigation for Section 3
function setupSection3Navigation() {
    // Initialize variables
    let currentQuestionIndex = 0;
    const questionsContainer = document.getElementById('section3-questions');
    const prevButton = document.getElementById('section3-prev');
    const nextButton = document.getElementById('section3-next');
    const submitButton = document.getElementById('section3-submit');
    const progressBar = document.getElementById('section3-progress');
    
    // Array to track user's answers (initialized to null for each question)
    const userAnswers = new Array(section3Questions.length).fill(null);
    
    // Function to display current question
    function showQuestion(index) {
        console.log(`Section 3: Starting to show question ${index+1}`);
        
        // Update progress bar
        progressBar.style.width = `${((index + 1) / section3Questions.length) * 100}%`;
        
        // Get the current question
        const question = section3Questions[index];
        
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
        
        console.log(`Section 3: HTML inserted for question ${index+1}`);
        
        // Update button states
        prevButton.disabled = index === 0;
        
        if (index === section3Questions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
        
        // Critical: Use a slight delay to ensure DOM is updated before adding listeners
        setTimeout(() => {
            console.log(`Section 3: Adding event listeners for question ${index+1}`);
            
            // Get options after the DOM update
            const options = questionsContainer.querySelectorAll('.option');
            console.log(`Section 3: Found ${options.length} options for question ${index+1}`);
            
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
                console.log(`Section 3: Adding listener to option ${optionIndex+1} for question ${index+1}`);
                
                option.onclick = function() {
                    console.log(`Section 3: Option ${optionIndex+1} clicked for question ${index+1}`);
                    
                    // Remove selected class from all options
                    options.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Store the user's answer
                    const selectedIndex = parseInt(this.getAttribute('data-index'));
                    userAnswers[index] = selectedIndex;
                    
                    // Check if the answer is correct
                    const isCorrect = selectedIndex === question.correctIndex;
                    console.log(`Section 3: Answer for question ${index+1} is ${isCorrect ? 'correct' : 'incorrect'}`);
                    
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
        if (currentQuestionIndex < section3Questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });
    
    submitButton.addEventListener('click', function() {
        // Calculate score
        let score = 0;
        for (let i = 0; i < section3Questions.length; i++) {
            if (userAnswers[i] === section3Questions[i].correctIndex) {
                score++;
            }
        }
        
        // Show results
        const resultsDiv = document.getElementById('section3-results');
        resultsDiv.innerHTML = `
            <h3>Section 3 Results</h3>
            <p>You scored ${score} out of ${section3Questions.length}.</p>
            <button class="btn" id="section3-retry">Retry Section</button>
        `;
        
        resultsDiv.style.display = 'block';
        
        // Hide questions and controls
        questionsContainer.style.display = 'none';
        document.querySelector('.test-controls').style.display = 'none';
        
        // Add event listener for retry button
        document.getElementById('section3-retry').addEventListener('click', function() {
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
    console.log("Section 3: Navigation setup complete, showing first question");
    showQuestion(currentQuestionIndex);
}

// Make function available globally
window.loadSection3Questions = loadSection3Questions;
