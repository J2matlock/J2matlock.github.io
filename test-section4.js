// Test Section 4: IFSP Development - Questions 1-50

// Define the questions for Section 4 - Group 1
const section4QuestionsGroup1 = [
    {
        id: 1,
        question: "What does IFSP stand for in the Early Intervention Program?",
        options: [
            "Individual Family Support Plan",
            "Individualized Family Service Plan",
            "Infant and Family Service Protocol",
            "Intervention and Family Support Program"
        ],
        correctIndex: 1,
        explanation: "IFSP stands for Individualized Family Service Plan. It is a written plan that outlines the early intervention services a child and family will receive."
    },
    {
        id: 2,
        question: "Which of the following is NOT a required component of an IFSP?",
        options: [
            "The child's present levels of development",
            "Family resources, priorities, and concerns",
            "Measurable outcomes or results expected for the child and family",
            "A detailed plan for the child's college education"
        ],
        correctIndex: 3,
        explanation: "A detailed plan for the child's college education is not a required component of an IFSP. The IFSP focuses on the child's current and short-term developmental needs, not long-term educational planning at the college level."
    },
    {
        id: 3,
        question: "How often must an IFSP be reviewed after it is initially developed?",
        options: [
            "Every 3 months",
            "Every 6 months",
            "Annually",
            "Every 45 days"
        ],
        correctIndex: 1,
        explanation: "An IFSP must be reviewed at least every 6 months after it is initially developed. This is to ensure that the plan remains current and continues to meet the child's and family's changing needs."
    },
    {
        id: 4,
        question: "Who is required to participate in the development of an IFSP?",
        options: [
            "Only the service coordinator and the parents",
            "Only the evaluation team and service providers",
            "Parents/legal guardians, service coordinator, evaluator, and EI official",
            "Medical professionals and therapists only"
        ],
        correctIndex: 2,
        explanation: "Required participants in IFSP development include the child's parents or legal guardians, the service coordinator, a person involved in the evaluation, and the Early Intervention Official or designee. Other family members or advocates may also participate if requested by the parents."
    },
    {
        id: 5,
        question: "What should be the primary focus when developing outcomes for an IFSP?",
        options: [
            "The service coordinator's recommendations",
            "The family's priorities and concerns",
            "The availability of service providers",
            "The child's eligibility category"
        ],
        correctIndex: 1,
        explanation: "The primary focus when developing outcomes for an IFSP should be the family's priorities and concerns. The IFSP is family-centered, and outcomes should reflect what the family considers most important for their child's development."
    },
    {
        id: 6,
        question: "How should outcomes be written in an IFSP?",
        options: [
            "Using medical terminology to ensure clarity",
            "In functional terms that describe what the child will do",
            "As general goals without specific timeframes",
            "Focusing only on the child's deficits"
        ],
        correctIndex: 1,
        explanation: "Outcomes in an IFSP should be written in functional terms that describe what the child will do. They should be specific, measurable, achievable, relevant, and time-bound (SMART). Functional outcomes focus on skills the child needs for participation in daily activities."
    },
    {
        id: 7,
        question: "When deciding on services in the IFSP, what is the most important consideration?",
        options: [
            "The services requested by the parents",
            "The services that are most cost-effective",
            "What is necessary to achieve the identified outcomes",
            "What has worked for other children with similar conditions"
        ],
        correctIndex: 2,
        explanation: "When deciding on services in the IFSP, the most important consideration is what is necessary to achieve the identified outcomes. Services should be selected based on their appropriateness for helping the child and family reach the functional outcomes listed in the IFSP."
    },
    {
        id: 8,
        question: "What is a 'natural environment' in the context of an IFSP?",
        options: [
            "A clinical setting with specialized equipment",
            "Settings where children without disabilities typically participate",
            "Only the child's home environment",
            "Outdoor settings with natural landscapes"
        ],
        correctIndex: 1,
        explanation: "A 'natural environment' in the context of an IFSP refers to settings where children without disabilities typically participate. This includes the home, community settings, childcare centers, and other locations where same-age peers without disabilities spend time."
    },
    {
        id: 9,
        question: "If services cannot be provided in a natural environment, what must be documented in the IFSP?",
        options: [
            "A justification for why services cannot be achieved in a natural environment",
            "A signature from a medical doctor approving the non-natural setting",
            "A plan to gradually transition to a natural environment within 3 years",
            "Evidence that the child performs better in clinical settings"
        ],
        correctIndex: 0,
        explanation: "If services cannot be provided in a natural environment, the IFSP must include a justification for why the outcomes cannot be achieved in a natural environment. It should also include a plan for how services will eventually be moved to a natural environment when possible."
    },
    {
        id: 10,
        question: "Which of the following best describes how the IFSP should address the family's concerns?",
        options: [
            "By focusing exclusively on the child's developmental needs",
            "By incorporating family concerns only if they directly relate to the child's delay",
            "By identifying and addressing the resources, priorities, and concerns of the family related to enhancing the child's development",
            "By primarily addressing the family's financial concerns"
        ],
        correctIndex: 2,
        explanation: "The IFSP should address the family's concerns by identifying and addressing the resources, priorities, and concerns of the family related to enhancing the child's development. This reflects the family-centered nature of Early Intervention, recognizing that the family plays a crucial role in the child's development."
    }
];

// Define additional questions for Section 4 - Group 2
const section4QuestionsGroup2 = [
    {
        id: 11,
        question: "What is the 'outcomes' section of an IFSP intended to address?",
        options: [
            "Only the services that will be provided to the child",
            "Only developmental milestones the child should reach",
            "Measurable results expected for the child and family, including pre-literacy skills when appropriate",
            "Only the family's satisfaction with early intervention services"
        ],
        correctIndex: 2,
        explanation: "The 'outcomes' section of an IFSP addresses the measurable results expected for the child and family, including pre-literacy skills when appropriate. These outcomes should be functional, meaningful in the context of the child's daily life, and reflect the family's priorities."
    },
    {
        id: 12,
        question: "What is the role of the parent(s) in IFSP development?",
        options: [
            "Parents are equal members of the team who help identify concerns, priorities, and resources",
            "Parents only need to sign the final document",
            "Parents observe while professionals develop the plan",
            "Parents must accept all recommendations without question"
        ],
        correctIndex: 0,
        explanation: "Parents are equal members of the IFSP team who help identify concerns, priorities, and resources. The IFSP process should be family-centered, with parents actively participating in all aspects of decision-making about their child's services."
    },
    {
        id: 13,
        question: "What information about the child must be included in an IFSP?",
        options: [
            "Only medical diagnoses",
            "The child's present levels of physical, cognitive, communication, social-emotional, and adaptive development",
            "Only developmental areas where the child has delays",
            "Only information related to the specific services being provided"
        ],
        correctIndex: 1,
        explanation: "An IFSP must include information about the child's present levels of physical, cognitive, communication, social-emotional, and adaptive development. This comprehensive picture helps the team understand the child's strengths and needs across all developmental domains."
    },
    {
        id: 14,
        question: "What should happen if a family disagrees with parts of an IFSP during its development?",
        options: [
            "The disagreement must be documented and the family informed of their due process rights",
            "The family must accept the professional recommendations",
            "Services cannot begin until full agreement is reached",
            "The EI program must withdraw from working with the family"
        ],
        correctIndex: 0,
        explanation: "If a family disagrees with parts of an IFSP during its development, the disagreement must be documented and the family informed of their due process rights. Families have the right to dispute any aspect of the identification, evaluation, or provision of early intervention services."
    },
    {
        id: 15,
        question: "What must be specified about early intervention services in the IFSP?",
        options: [
            "Only the type of services",
            "The projected start date, frequency, intensity, method, location, and duration of services",
            "Only which provider agency will deliver services",
            "Only how often services will occur"
        ],
        correctIndex: 1,
        explanation: "The IFSP must specify the projected start date, frequency, intensity, method, location, and duration of each early intervention service. This detailed information ensures clarity about how services will be delivered and helps with scheduling and coordination."
    }
];

// Define additional questions for Section 4 - Group 3
const section4QuestionsGroup3 = [
    {
        id: 16,
        question: "What is meant by 'functional outcomes' in an IFSP?",
        options: [
            "Outcomes that focus solely on developmental milestones",
            "Outcomes related to the child's ability to function in everyday routines and activities",
            "Outcomes that can only be addressed in a clinical setting",
            "Outcomes that only professionals can measure"
        ],
        correctIndex: 1,
        explanation: "Functional outcomes in an IFSP are related to the child's ability to function in everyday routines and activities. They focus on meaningful skills that help the child participate in family and community life, rather than isolated developmental skills."
    },
    {
        id: 17,
        question: "How should transition planning be addressed in the IFSP?",
        options: [
            "It should only be addressed in the final IFSP before the child turns three",
            "It is optional and only included if requested by the family",
            "It should include steps to support the transition to preschool or other services when the child exits early intervention",
            "It only needs to address the child's adjustment to new service providers"
        ],
        correctIndex: 2,
        explanation: "Transition planning in the IFSP should include steps to support the transition to preschool or other services when the child exits early intervention. This planning should begin well before the child turns three to ensure a smooth transition."
    },
    {
        id: 18,
        question: "What is the purpose of the 'family assessment' component of the IFSP process?",
        options: [
            "To judge the family's parenting skills",
            "To identify family resources, priorities, and concerns related to enhancing the child's development",
            "To determine if the family qualifies for public assistance",
            "To evaluate the family's ability to pay for services"
        ],
        correctIndex: 1,
        explanation: "The purpose of the family assessment component of the IFSP process is to identify family resources, priorities, and concerns related to enhancing the child's development. This voluntary assessment helps tailor the IFSP to the specific needs and strengths of each family."
    },
    {
        id: 19,
        question: "What does the 'natural environments' requirement mean for service delivery in the IFSP?",
        options: [
            "Services must always be provided outdoors",
            "Services must be provided in settings that are natural or typical for same-aged peers without disabilities",
            "Services can only be provided in the child's home",
            "Services must involve natural elements like plants and animals"
        ],
        correctIndex: 1,
        explanation: "The 'natural environments' requirement means that services must be provided in settings that are natural or typical for same-aged peers without disabilities. This includes homes, community settings, and other environments where children without disabilities participate."
    },
    {
        id: 20,
        question: "What must the IFSP include regarding funding for early intervention services?",
        options: [
            "Nothing, as funding is not addressed in the IFSP",
            "A statement that services will be provided at no cost unless the family income exceeds federal poverty guidelines",
            "Identification of the payment arrangements for each service, including any potential family cost participation",
            "A requirement that families must use private insurance before accessing early intervention funding"
        ],
        correctIndex: 2,
        explanation: "The IFSP must include identification of the payment arrangements for each service, including any potential family cost participation. This ensures transparency about financial responsibilities while ensuring that core early intervention services are provided regardless of the family's ability to pay."
    }
];

// Define additional questions for Section 4 - Group 4
const section4QuestionsGroup4 = [
    {
        id: 21,
        question: "How are service coordinator responsibilities addressed in the IFSP?",
        options: [
            "They are not included in the IFSP",
            "The IFSP must identify who will serve as the service coordinator and their specific responsibilities",
            "Service coordination is automatically assigned to the therapist who provides the most services",
            "Service coordination is only addressed if requested by the family"
        ],
        correctIndex: 1,
        explanation: "The IFSP must identify who will serve as the service coordinator and their specific responsibilities. Service coordination is a required service for all eligible children and families in early intervention, and the designated coordinator helps implement the IFSP and coordinates with other services."
    },
    {
        id: 22,
        question: "What must the IFSP include about the child's health status?",
        options: [
            "Only information about the qualifying disability or delay",
            "A complete medical history since birth",
            "Information about health status that is relevant to the child's development and service needs",
            "No health information, as this violates privacy laws"
        ],
        correctIndex: 2,
        explanation: "The IFSP must include information about the child's health status that is relevant to their development and service needs. This may include medical diagnoses, medications, allergies, or other health considerations that could impact intervention services or developmental progress."
    },
    {
        id: 23,
        question: "What is the purpose of including 'criteria' in IFSP outcomes?",
        options: [
            "To set unrealistic standards for the child to achieve",
            "To specify how the team will know when the outcome has been achieved",
            "To rank the importance of each outcome",
            "To determine if the family qualifies for continued services"
        ],
        correctIndex: 1,
        explanation: "The purpose of including criteria in IFSP outcomes is to specify how the team will know when the outcome has been achieved. Clear, observable criteria help the team measure progress and determine when an outcome has been met or needs to be revised."
    },
    {
        id: 24,
        question: "What does the IFSP include about timelines for services?",
        options: [
            "Only start dates for each service",
            "Projected start dates and anticipated duration of services",
            "Only the total number of sessions that will be provided",
            "No timeline information as this is determined by providers"
        ],
        correctIndex: 1,
        explanation: "The IFSP includes projected start dates and anticipated duration of services. This timeline information helps families understand when services will begin and how long they are expected to continue, which supports planning and coordination."
    },
    {
        id: 25,
        question: "What should an IFSP include regarding assistive technology needs?",
        options: [
            "Nothing, as assistive technology is addressed separately from the IFSP",
            "Only high-tech devices if recommended by specialists",
            "Assistive technology devices and services needed to achieve outcomes, if appropriate",
            "A statement that all technology must be purchased by the family"
        ],
        correctIndex: 2,
        explanation: "An IFSP should include assistive technology devices and services needed to achieve outcomes, if appropriate. This may range from simple adaptations (like special spoons or pencil grips) to more complex communication devices or mobility equipment, based on the child's individual needs."
    }
];

// Define additional questions for Section 4 - Group 5
const section4QuestionsGroup5 = [
    {
        id: 26,
        question: "What must be documented in the IFSP when services are not provided in a natural environment?",
        options: [
            "Nothing, as services should never be provided outside natural environments",
            "Just the location of services",
            "A justification based on the child's outcomes and a plan for transitioning to natural environments",
            "Only the parents' request for a clinical setting"
        ],
        correctIndex: 2,
        explanation: "When services are not provided in a natural environment, the IFSP must document a justification based on the child's outcomes and a plan for transitioning to natural environments. The justification must explain why the outcomes cannot be achieved in a natural environment."
    },
    {
        id: 27,
        question: "How should families be involved in identifying outcomes for the IFSP?",
        options: [
            "Families should only approve outcomes suggested by professionals",
            "Families should be equal partners in identifying priorities and outcomes based on their concerns and the child's needs",
            "Families should defer to professional judgment on all outcomes",
            "Families should only be involved if they insist on participating"
        ],
        correctIndex: 1,
        explanation: "Families should be equal partners in identifying priorities and outcomes based on their concerns and the child's needs. The IFSP is a family-centered document, and outcomes should reflect what the family values and what will make a meaningful difference in their child's life and daily routines."
    },
    {
        id: 28,
        question: "Which of the following is NOT a required participant in an IFSP meeting?",
        options: [
            "The child's parent(s) or guardian(s)",
            "The service coordinator",
            "The child's pediatrician",
            "Other family members, if requested by the parent"
        ],
        correctIndex: 2,
        explanation: "The child's pediatrician is not a required participant in an IFSP meeting. While medical input is valuable and medical professionals may be invited, their physical presence is not legally required. Required participants include the parent(s), service coordinator, evaluation team member, EI official or designee, and service providers as appropriate."
    },
    {
        id: 29,
        question: "What is the purpose of including 'strategies' in IFSP outcomes?",
        options: [
            "To list all possible interventions regardless of applicability",
            "To specify how service providers and families will work toward achieving the outcome",
            "To justify billing for services",
            "To demonstrate the therapist's expertise"
        ],
        correctIndex: 1,
        explanation: "The purpose of including strategies in IFSP outcomes is to specify how service providers and families will work toward achieving the outcome. Strategies outline the specific approaches, techniques, or activities that will be used to help the child progress toward the desired result."
    },
    {
        id: 30,
        question: "How should cultural considerations be addressed in the IFSP?",
        options: [
            "They should be noted but not impact service delivery",
            "Cultural practices should be eliminated if they interfere with evidence-based practices",
            "The IFSP should be developed with cultural and linguistic responsiveness to family beliefs and practices",
            "Culture is irrelevant to early intervention services"
        ],
        correctIndex: 2,
        explanation: "The IFSP should be developed with cultural and linguistic responsiveness to family beliefs and practices. Early intervention services must respect and incorporate the family's cultural values, beliefs, and practices to be effective and meaningful."
    }
];

// Define additional questions for Section 4 - Group 6
const section4QuestionsGroup6 = [
    {
        id: 31,
        question: "When can an IFSP meeting be conducted by other means than a face-to-face meeting?",
        options: [
            "Never, all IFSP meetings must be face-to-face",
            "When approved by the early intervention official",
            "If requested by the family and agreed upon by all required participants",
            "Only for annual reviews, not initial IFSPs"
        ],
        correctIndex: 2,
        explanation: "An IFSP meeting can be conducted by other means than face-to-face (such as video conferencing or conference calls) if requested by the family and agreed upon by all required participants. This flexibility helps accommodate family needs while ensuring full participation of team members."
    },
    {
        id: 32,
        question: "What is an interim IFSP?",
        options: [
            "A plan used when services are interrupted due to provider shortages",
            "A temporary plan that can be implemented before completing the evaluation and assessment if there is an obvious immediate need",
            "A plan used during the summer months when schedules change",
            "A simplified plan for children with minor delays"
        ],
        correctIndex: 1,
        explanation: "An interim IFSP is a temporary plan that can be implemented before completing the evaluation and assessment if there is an obvious immediate need for services. It allows services to begin quickly while the full evaluation process continues."
    },
    {
        id: 33,
        question: "What must be documented regarding a family's decision to decline a recommended service?",
        options: [
            "The family's decision to decline cannot be honored if the service is deemed necessary",
            "The family must sign a legal waiver releasing the EI program from responsibility",
            "The IFSP must document which services were declined and that the parents were informed of their right to accept or decline any service",
            "The family must provide a written explanation justifying their decision"
        ],
        correctIndex: 2,
        explanation: "When a family declines a recommended service, the IFSP must document which services were declined and that the parents were informed of their right to accept or decline any service. This respects the family's decision-making authority while ensuring informed choices."
    },
    {
        id: 34,
        question: "How should ongoing assessments be addressed in the IFSP?",
        options: [
            "They should only be mentioned if the child fails to make progress",
            "The IFSP should include procedures for ongoing assessment of the child's progress toward outcomes",
            "Ongoing assessments are not part of the IFSP as they occur after the plan is developed",
            "They should only be conducted by independent evaluators not involved in service delivery"
        ],
        correctIndex: 1,
        explanation: "The IFSP should include procedures for ongoing assessment of the child's progress toward outcomes. This allows the team to monitor progress, adjust strategies as needed, and determine when outcomes have been achieved or need to be revised."
    },
    {
        id: 35,
        question: "What information about the child's strengths should be included in the IFSP?",
        options: [
            "Only strengths related to areas of delay",
            "Only strengths identified by formal assessment tools",
            "Information about the child's strengths across all developmental domains",
            "Strengths should not be included as they distract from addressing needs"
        ],
        correctIndex: 2,
        explanation: "The IFSP should include information about the child's strengths across all developmental domains. Building on a child's strengths is an important intervention strategy, and a comprehensive picture of capabilities helps the team develop appropriate and effective interventions."
    }
];

// Define additional questions for Section 4 - Group 7
const section4QuestionsGroup7 = [
    {
        id: 36,
        question: "What is the importance of including 'timelines' for each outcome in the IFSP?",
        options: [
            "Timelines are not necessary as development varies widely between children",
            "Timelines help establish accountability and provide a timeframe for measuring progress",
            "Timelines are only needed for motor development outcomes",
            "Timelines are only used to determine when services should be terminated"
        ],
        correctIndex: 1,
        explanation: "Including timelines for each outcome in the IFSP helps establish accountability and provides a timeframe for measuring progress. Timelines create a sense of intentionality and urgency about addressing outcomes, while also providing expectations for when progress should be visible."
    },
    {
        id: 37,
        question: "How should transportation needs be addressed in the IFSP?",
        options: [
            "Transportation is never included in the IFSP",
            "The IFSP should identify if transportation is needed as an early intervention service and how it will be provided",
            "Transportation must always be provided regardless of need",
            "Transportation is only addressed for families without vehicles"
        ],
        correctIndex: 1,
        explanation: "The IFSP should identify if transportation is needed as an early intervention service and how it will be provided. If necessary to enable a child and family to receive early intervention services, transportation may be included as a service in the IFSP."
    },
    {
        id: 38,
        question: "What is the significance of 'functionality' in developing IFSP outcomes?",
        options: [
            "Functional outcomes address child-initiated activities that promote participation in daily routines",
            "Functional outcomes focus only on self-help skills",
            "Functional outcomes only address skills that can be measured by standardized tests",
            "Functional outcomes are only related to motor development"
        ],
        correctIndex: 0,
        explanation: "Functional outcomes address child-initiated activities that promote participation in daily routines. Functionality focuses on how the child uses skills in meaningful contexts rather than isolated developmental milestones."
    },
    {
        id: 39,
        question: "What should the IFSP specify about who will implement the strategies for each outcome?",
        options: [
            "Only licensed therapists can implement strategies",
            "Strategies should clearly identify roles for both family members and providers",
            "Implementation is solely the responsibility of service providers",
            "The service coordinator is responsible for implementing all strategies"
        ],
        correctIndex: 1,
        explanation: "The IFSP should clearly identify roles for both family members and providers in implementing strategies for each outcome. This collaborative approach recognizes that the family plays a critical role in reinforcing and generalizing skills in daily routines."
    },
    {
        id: 40,
        question: "When developing an IFSP, what should be considered regarding the family's daily routines?",
        options: [
            "Family routines should be adjusted to accommodate service providers' schedules",
            "Family routines are irrelevant to service delivery",
            "Services and strategies should be integrated into the family's existing daily routines",
            "The IFSP should establish new routines for the family to follow"
        ],
        correctIndex: 2,
        explanation: "When developing an IFSP, services and strategies should be integrated into the family's existing daily routines. This approach makes intervention more relevant and sustainable, as it builds on activities the family already engages in regularly."
    }
];

// Define additional questions for Section 4 - Group 8
const section4QuestionsGroup8 = [
    {
        id: 41,
        question: "What is the purpose of a 'review' of the IFSP?",
        options: [
            "To ensure the family is following professional recommendations",
            "To determine if the child still qualifies for services",
            "To evaluate the child's progress and determine if any modifications to outcomes or services are needed",
            "To decide if services should be terminated"
        ],
        correctIndex: 2,
        explanation: "The purpose of a review of the IFSP is to evaluate the child's progress and determine if any modifications to outcomes or services are needed. Reviews ensure the plan remains current and responsive to the changing needs of the child and family."
    },
    {
        id: 42,
        question: "How should the IFSP address the needs of the family related to enhancing their child's development?",
        options: [
            "Family needs should not be included in the IFSP",
            "The IFSP should identify resources, concerns, and priorities of the family related to enhancing their child's development",
            "Family needs are only addressed if time permits after addressing the child's needs",
            "The IFSP should focus exclusively on parent training needs"
        ],
        correctIndex: 1,
        explanation: "The IFSP should identify resources, concerns, and priorities of the family related to enhancing their child's development. This reflects the family-centered philosophy of early intervention and recognizes that supporting the family ultimately supports the child."
    },
    {
        id: 43,
        question: "What is the required frequency of formal IFSP reviews?",
        options: [
            "Every 3 months",
            "At least every 6 months, with a complete re-evaluation annually",
            "Only when requested by the family",
            "Only when a service provider recommends changes"
        ],
        correctIndex: 1,
        explanation: "The required frequency of formal IFSP reviews is at least every 6 months, with a complete re-evaluation annually. However, the plan can be reviewed more frequently if conditions warrant or if the family requests a review."
    },
    {
        id: 44,
        question: "How should disagreements between team members about IFSP content be handled?",
        options: [
            "The early intervention official makes the final decision",
            "The service coordinator decides what to include",
            "The disagreement should be documented, and parents should be informed of their due process rights",
            "The majority vote of team members determines the outcome"
        ],
        correctIndex: 2,
        explanation: "Disagreements between team members about IFSP content should be documented, and parents should be informed of their due process rights. This ensures transparency and respects the family's right to dispute resolution while acknowledging differing professional perspectives."
    },
    {
        id: 45,
        question: "What is the importance of the 'present levels of development' section in the IFSP?",
        options: [
            "It is only included for record-keeping purposes",
            "It provides baseline information to measure progress and inform outcome development",
            "It is only important for determining eligibility",
            "It is only relevant for children with severe delays"
        ],
        correctIndex: 1,
        explanation: "The 'present levels of development' section in the IFSP provides baseline information to measure progress and inform outcome development. This comprehensive picture of the child's current functioning across developmental domains is essential for creating meaningful, appropriate outcomes and strategies."
    }
];

// Define additional questions for Section 4 - Group 9
const section4QuestionsGroup9 = [
    {
        id: 46,
        question: "How should transition from early intervention be addressed in the IFSP?",
        options: [
            "Only in the final review before the child turns three",
            "It should not be addressed until the child is referred to preschool services",
            "The IFSP must include a transition plan with steps and services to support the smooth transition out of early intervention",
            "Transition planning is separate from the IFSP process"
        ],
        correctIndex: 2,
        explanation: "Transition from early intervention should be addressed in the IFSP through a transition plan with steps and services to support the smooth transition out of early intervention. This planning should begin well before the child exits the program to ensure continuity of services and supports."
    },
    {
        id: 47,
        question: "What role do 'natural learning opportunities' play in IFSP implementation?",
        options: [
            "They are irrelevant to early intervention services",
            "They should be the primary context for implementing intervention strategies",
            "They are only important for social development",
            "They should be avoided to ensure consistent therapy techniques"
        ],
        correctIndex: 1,
        explanation: "Natural learning opportunities should be the primary context for implementing intervention strategies in IFSP implementation. Using everyday activities and routines as learning opportunities makes intervention more meaningful and helps skills generalize across settings."
    },
    {
        id: 48,
        question: "How should the IFSP address communication needs for families who speak a language other than English?",
        options: [
            "Families must provide their own interpreters",
            "The IFSP must identify how communication needs will be addressed, including interpreter services if needed",
            "All discussions must be conducted in English with translation provided later",
            "Communication needs are not addressed in the IFSP"
        ],
        correctIndex: 1,
        explanation: "The IFSP must identify how communication needs will be addressed for families who speak a language other than English, including interpreter services if needed. Ensuring effective communication is essential for family-centered services and true collaboration."
    },
    {
        id: 49,
        question: "What is meant by 'intensity' of services in the IFSP?",
        options: [
            "The level of expertise of the service provider",
            "Whether the service is group or individual and the number of minutes per session",
            "How strictly the therapist follows the treatment protocol",
            "The priority level of the service"
        ],
        correctIndex: 1,
        explanation: "Intensity of services in the IFSP refers to whether the service is provided in a group or individual setting and the number of minutes per session. This information helps clarify the nature and extent of services the child will receive."
    },
    {
        id: 50,
        question: "What is the significance of the 'resources' section in addressing family needs within the IFSP?",
        options: [
            "It only identifies financial resources available to the family",
            "It identifies supports, services, and resources the family has or needs to enhance their child's development",
            "It is an optional section that is rarely completed",
            "It only addresses formal support services"
        ],
        correctIndex: 1,
        explanation: "The 'resources' section in addressing family needs within the IFSP identifies supports, services, and resources the family has or needs to enhance their child's development. This may include informal supports, community resources, and formal services that support the family's capacity to meet their child's needs."
    }
];

// Combine all question groups
const section4Questions = [...section4QuestionsGroup1, ...section4QuestionsGroup2, ...section4QuestionsGroup3, ...section4QuestionsGroup4, ...section4QuestionsGroup5, ...section4QuestionsGroup6, ...section4QuestionsGroup7, ...section4QuestionsGroup8, ...section4QuestionsGroup9];

// Function to load Section 4 questions
function loadSection4Questions() {
    const sectionContainer = document.getElementById('section4');
    
    // Create the section structure
    let sectionContent = `
        <h3>Section 4: IFSP Development</h3>
        <p>This section covers the Individualized Family Service Plan (IFSP) process, components, and implementation.</p>
        
        <div class="progress-bar">
            <div class="progress" id="section4-progress"></div>
        </div>
        
        <div id="section4-questions">
            <!-- Questions will be loaded here -->
        </div>
        
        <div class="test-controls">
            <button class="btn" id="section4-prev" disabled>Previous</button>
            <button class="btn" id="section4-next">Next</button>
            <button class="btn secondary" id="section4-submit" style="display:none;">Submit Section</button>
        </div>
        
        <div id="section4-results" class="results" style="display:none;">
            <!-- Results will be shown here -->
        </div>
    `;
    
    sectionContainer.innerHTML = sectionContent;
    
    // Set up question navigation
    setupSection4Navigation();
}

// Function to set up question navigation for Section 4
function setupSection4Navigation() {
    // Initialize variables
    let currentQuestionIndex = 0;
    const questionsContainer = document.getElementById('section4-questions');
    const prevButton = document.getElementById('section4-prev');
    const nextButton = document.getElementById('section4-next');
    const submitButton = document.getElementById('section4-submit');
    const progressBar = document.getElementById('section4-progress');
    
    // Array to track user's answers (initialized to null for each question)
    const userAnswers = new Array(section4Questions.length).fill(null);
    
    // Function to display current question
    function showQuestion(index) {
        console.log(`Section 4: Starting to show question ${index+1}`);
        
        // Update progress bar
        progressBar.style.width = `${((index + 1) / section4Questions.length) * 100}%`;
        
        // Get the current question
        const question = section4Questions[index];
        
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
        
        console.log(`Section 4: HTML inserted for question ${index+1}`);
        
        // Update button states
        prevButton.disabled = index === 0;
        
        if (index === section4Questions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
        
        // Critical: Use a slight delay to ensure DOM is updated before adding listeners
        setTimeout(() => {
            console.log(`Section 4: Adding event listeners for question ${index+1}`);
            
            // Get options after the DOM update
            const options = questionsContainer.querySelectorAll('.option');
            console.log(`Section 4: Found ${options.length} options for question ${index+1}`);
            
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
                console.log(`Section 4: Adding listener to option ${optionIndex+1} for question ${index+1}`);
                
                option.onclick = function() {
                    console.log(`Section 4: Option ${optionIndex+1} clicked for question ${index+1}`);
                    
                    // Remove selected class from all options
                    options.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Store the user's answer
                    const selectedIndex = parseInt(this.getAttribute('data-index'));
                    userAnswers[index] = selectedIndex;
                    
                    // Check if the answer is correct
                    const isCorrect = selectedIndex === question.correctIndex;
                    console.log(`Section 4: Answer for question ${index+1} is ${isCorrect ? 'correct' : 'incorrect'}`);
                    
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
        if (currentQuestionIndex < section4Questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });
    
    submitButton.addEventListener('click', function() {
        // Calculate score
        let score = 0;
        for (let i = 0; i < section4Questions.length; i++) {
            if (userAnswers[i] === section4Questions[i].correctIndex) {
                score++;
            }
        }
        
        // Show results
        const resultsDiv = document.getElementById('section4-results');
        resultsDiv.innerHTML = `
            <h3>Section 4 Results</h3>
            <p>You scored ${score} out of ${section4Questions.length}.</p>
            <button class="btn" id="section4-retry">Retry Section</button>
        `;
        
        resultsDiv.style.display = 'block';
        
        // Hide questions and controls
        questionsContainer.style.display = 'none';
        document.querySelector('.test-controls').style.display = 'none';
        
        // Add event listener for retry button
        document.getElementById('section4-retry').addEventListener('click', function() {
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
    console.log("Section 4: Navigation setup complete, showing first question");
    showQuestion(currentQuestionIndex);
}

// Make function available globally
window.loadSection4Questions = loadSection4Questions;
