// Test Section 2: Service Coordination - Questions 1-50

// Define the questions for Section 2
const section2Questions = [
    {
        id: 1,
        question: "What is the primary role of an initial service coordinator in the Early Intervention Program?",
        options: [
            "To provide direct therapy to the child",
            "To assist families through the evaluation and IFSP development process",
            "To determine if a child is eligible for services",
            "To supervise other service providers"
        ],
        correctIndex: 1,
        explanation: "The primary role of an initial service coordinator is to assist families through the evaluation and IFSP development process. This includes helping families understand their rights, coordinating the evaluation, and facilitating the initial IFSP meeting."
    },
    {
        id: 2,
        question: "What is a key responsibility of the ongoing service coordinator after the IFSP is developed?",
        options: [
            "Directly providing all therapies listed in the IFSP",
            "Coordinating the delivery of services and monitoring their implementation",
            "Making unilateral changes to the IFSP as needed",
            "Determining when a child should exit the program"
        ],
        correctIndex: 1,
        explanation: "A key responsibility of the ongoing service coordinator is coordinating the delivery of services and monitoring their implementation. This includes ensuring services are delivered as specified in the IFSP, facilitating reviews, and helping the family access additional resources as needed."
    },
    {
        id: 3,
        question: "When should an initial service coordinator first contact a family after receiving a referral?",
        options: [
            "Within 24 hours",
            "Within 2 working days",
            "Within 1 week",
            "Within 45 days"
        ],
        correctIndex: 1,
        explanation: "According to New York State regulations, the initial service coordinator should contact the family within 2 working days after being assigned to the case following a referral."
    },
    {
        id: 4,
        question: "Which of the following is NOT a typical duty of a service coordinator?",
        options: [
            "Coordinating evaluations and assessments",
            "Facilitating the development of the IFSP",
            "Directly providing therapeutic interventions",
            "Informing families about advocacy groups and support networks"
        ],
        correctIndex: 2,
        explanation: "Directly providing therapeutic interventions is NOT a typical duty of a service coordinator. Service coordinators coordinate services rather than provide direct therapeutic interventions, which are delivered by qualified service providers in specific disciplines."
    },
    {
        id: 5,
        question: "What must a service coordinator do if a family expresses dissatisfaction with a service provider?",
        options: [
            "Tell the family they must continue with the provider for consistency",
            "Ignore the concern if the provider has good credentials",
            "Address the concern and assist the family in finding a different provider if needed",
            "Report the family's complaint to the Department of Health"
        ],
        correctIndex: 2,
        explanation: "If a family expresses dissatisfaction with a service provider, the service coordinator must address the concern and assist the family in finding a different provider if needed. Service coordinators must be responsive to family preferences and concerns about services."
    }
];

// Add more questions in groups
const section2QuestionsGroup2 = [
    {
        id: 6,
        question: "What information must the service coordinator provide to families about their rights in the Early Intervention Program?",
        options: [
            "Only information specifically requested by the family",
            "Due process rights, confidentiality protections, and consent requirements",
            "Only information about financial responsibilities",
            "Only information after a dispute occurs"
        ],
        correctIndex: 1,
        explanation: "The service coordinator must provide families with information about their due process rights, confidentiality protections, and consent requirements. This includes the right to accept or decline services, the right to confidentiality, and the right to dispute resolution."
    },
    {
        id: 7,
        question: "What is the service coordinator's responsibility regarding the 45-day timeline from referral to IFSP?",
        options: [
            "The timeline is flexible and can be extended at the service coordinator's discretion",
            "The service coordinator has no responsibility for monitoring the timeline",
            "The service coordinator must monitor the timeline and document reasons for any delays",
            "The timeline only applies to the evaluation, not the IFSP development"
        ],
        correctIndex: 2,
        explanation: "The service coordinator must monitor the 45-day timeline from referral to IFSP development and document reasons for any delays. This ensures compliance with federal and state requirements for timely service delivery."
    },
    {
        id: 8,
        question: "How often must a service coordinator have contact with a family receiving early intervention services at minimum?",
        options: [
            "Weekly",
            "Monthly",
            "Quarterly",
            "Only at IFSP meetings"
        ],
        correctIndex: 1,
        explanation: "Service coordinators must have at least monthly contact with families receiving early intervention services. This ensures ongoing monitoring of service delivery and provides opportunities to address emerging issues."
    },
    {
        id: 9,
        question: "What role does the service coordinator play in the IFSP review process?",
        options: [
            "No role; reviews are conducted by the EIO alone",
            "Only scheduling the meeting but not attending",
            "Coordinating and facilitating the review meeting",
            "Only updating paperwork after decisions are made"
        ],
        correctIndex: 2,
        explanation: "The service coordinator plays a central role in coordinating and facilitating the IFSP review meeting. This includes scheduling the meeting, ensuring all required participants are invited, and helping the team assess progress and make needed changes to the plan."
    },
    {
        id: 10,
        question: "What must a service coordinator do if a recommended service in the IFSP cannot be initiated within a reasonable timeframe?",
        options: [
            "Remove the service from the IFSP",
            "Notify the family and EIO, and work to locate an available provider",
            "Tell the family to wait until a provider becomes available",
            "Substitute a different service without consultation"
        ],
        correctIndex: 1,
        explanation: "If a recommended service cannot be initiated within a reasonable timeframe, the service coordinator must notify the family and the Early Intervention Official (EIO) and work diligently to locate an available provider. This ensures transparency and active problem-solving to address service delays."
    }
];

// Define additional questions for Section 2 - Group 3
const section2QuestionsGroup3 = [
    {
        id: 11,
        question: "What is the required minimum frequency for an ongoing service coordinator to have contact with a family?",
        options: [
            "Monthly",
            "Bimonthly",
            "Every 6 months",
            "Annually"
        ],
        correctIndex: 0,
        explanation: "According to New York State Early Intervention regulations, ongoing service coordinators must have contact with the family at least monthly to ensure appropriate service delivery and to address any issues that may arise."
    },
    {
        id: 12,
        question: "What is the service coordinator's role in the IFSP review process?",
        options: [
            "To decide unilaterally if changes are needed",
            "To coordinate and facilitate the IFSP review meeting",
            "To replace any providers who are not meeting goals",
            "To determine if the child is still eligible for services"
        ],
        correctIndex: 1,
        explanation: "The service coordinator's role in the IFSP review process is to coordinate and facilitate the review meeting, ensuring that all team members, including the family, have input into discussing progress and determining if changes are needed to the IFSP."
    },
    {
        id: 13,
        question: "Which of the following is a responsibility of the service coordinator during transition planning?",
        options: [
            "Determining which preschool the child will attend",
            "Facilitating the development of a transition plan in the IFSP",
            "Deciding if the child needs continued services after age three",
            "Automatically enrolling the child in preschool special education"
        ],
        correctIndex: 1,
        explanation: "During transition planning, the service coordinator is responsible for facilitating the development of a transition plan as part of the IFSP. This includes coordinating activities to support the child's smooth transition to preschool services or other appropriate arrangements."
    },
    {
        id: 14,
        question: "How should a service coordinator respond when a family requests a service that is not recommended by the evaluation team?",
        options: [
            "Automatically deny the request",
            "Add the service to the IFSP without discussion",
            "Facilitate discussion among the IFSP team to consider the request",
            "Refer the family to a different program"
        ],
        correctIndex: 2,
        explanation: "When a family requests a service not recommended by the evaluation team, the service coordinator should facilitate discussion among the IFSP team, including the family, to consider the request based on the child's needs and priorities identified in the IFSP."
    },
    {
        id: 15,
        question: "What documentation must a service coordinator maintain for each child and family?",
        options: [
            "Only the initial IFSP",
            "A comprehensive service coordination case record including all contacts, services, and meetings",
            "Only medical records",
            "Only attendance records of therapy sessions"
        ],
        correctIndex: 1,
        explanation: "Service coordinators must maintain a comprehensive service coordination case record that includes documentation of all contacts with the family, referrals made, services arranged, meetings attended, and other activities performed on behalf of the child and family."
    }
];

// Define additional questions for Section 2 - Group 4
const section2QuestionsGroup4 = [
    {
        id: 16,
        question: "What is the service coordinator's responsibility regarding family-centered practices?",
        options: [
            "Making all decisions for the family",
            "Respecting family priorities and supporting their decision-making role",
            "Requiring families to accept all recommended services",
            "Placing children in the most convenient program locations"
        ],
        correctIndex: 1,
        explanation: "Service coordinators must respect family priorities and support their decision-making role. This includes recognizing parents as the primary decision-makers for their child and empowering families to make informed choices about services."
    },
    {
        id: 17,
        question: "What action should a service coordinator take if a service provider consistently misses scheduled appointments?",
        options: [
            "Ignore the issue unless the family complains",
            "Immediately terminate the provider's services",
            "Contact the provider to address the issue and document the conversation",
            "Tell the family to find a new provider on their own"
        ],
        correctIndex: 2,
        explanation: "The service coordinator should contact the provider to address the issue of missed appointments, document the conversation, and work toward resolution. If the issue persists, the coordinator should involve the Early Intervention Official and support the family in finding a more reliable provider if necessary."
    },
    {
        id: 18,
        question: "How should a service coordinator help families prepare for the transition out of early intervention?",
        options: [
            "Wait until the last IFSP before discussing transition",
            "Begin discussing transition options at least 6-9 months before the child's third birthday",
            "Tell families they must enroll in preschool special education",
            "Make all transition decisions for the family"
        ],
        correctIndex: 1,
        explanation: "Service coordinators should begin discussing transition options with families at least 6-9 months before the child's third birthday. This gives families time to explore options, visit potential programs, and make informed decisions about services after early intervention."
    },
    {
        id: 19,
        question: "What role does the service coordinator play in helping families understand their due process rights?",
        options: [
            "Discouraging families from filing complaints",
            "Providing verbal explanation only when families express dissatisfaction",
            "Explaining procedural safeguards and helping families access mediation or due process if desired",
            "Filing complaints on behalf of families without their knowledge"
        ],
        correctIndex: 2,
        explanation: "Service coordinators must explain procedural safeguards to families and help them access mediation or due process hearings if desired. This includes providing information about these options in an unbiased manner and supporting families in exercising their rights."
    },
    {
        id: 20,
        question: "What is the service coordinator's role regarding a child's health status and medical needs?",
        options: [
            "Diagnosing medical conditions",
            "Prescribing medications",
            "Coordinating with healthcare providers and ensuring relevant medical information is considered in the IFSP",
            "Providing medical treatments"
        ],
        correctIndex: 2,
        explanation: "The service coordinator's role regarding a child's health status is to coordinate with healthcare providers and ensure that relevant medical information is considered in developing and implementing the IFSP. This may include helping families communicate with medical providers and incorporating medical recommendations into the service plan."
    }
];

// Define additional questions for Section 2 - Group 5
const section2QuestionsGroup5 = [
    {
        id: 21,
        question: "What is the service coordinator's responsibility regarding identifying available service providers?",
        options: [
            "Choosing providers based solely on convenience",
            "Providing families with information about available qualified providers",
            "Requiring families to use only providers the coordinator prefers",
            "Automatically assigning the least expensive provider"
        ],
        correctIndex: 1,
        explanation: "Service coordinators must provide families with information about all available qualified providers who could meet the child's needs. This allows families to make informed choices about which providers they prefer to work with their child."
    },
    {
        id: 22,
        question: "What should a service coordinator do if they identify potential developmental concerns in areas not addressed in the current IFSP?",
        options: [
            "Ignore the concerns as they are outside the current IFSP",
            "Add services without consulting the family",
            "Discuss the concerns with the family and IFSP team and consider a supplemental evaluation if needed",
            "Wait until the next scheduled IFSP review regardless of urgency"
        ],
        correctIndex: 2,
        explanation: "If a service coordinator identifies potential developmental concerns not addressed in the current IFSP, they should discuss these concerns with the family and IFSP team, and consider whether a supplemental evaluation is needed. This ensures that all areas of need are addressed promptly."
    },
    {
        id: 23,
        question: "What is the service coordinator's role in monitoring the quality of services provided?",
        options: [
            "No role, as quality monitoring is only done by state agencies",
            "Formally evaluating each provider's professional skills",
            "Observing sessions and providing clinical supervision to providers",
            "Monitoring whether services are delivered as specified in the IFSP and addressing concerns with implementation"
        ],
        correctIndex: 3,
        explanation: "Service coordinators monitor whether services are being delivered as specified in the IFSP and address any concerns about service implementation. This includes checking that services are provided at the frequency, duration, and in the manner described in the IFSP, and addressing any quality concerns that arise."
    },
    {
        id: 24,
        question: "How should a service coordinator handle a situation where parents disagree with each other about services for their child?",
        options: [
            "Always side with the more involved parent",
            "Make the decision for the parents",
            "Facilitate communication between the parents and help them work toward consensus",
            "Implement all services requested by either parent regardless of disagreement"
        ],
        correctIndex: 2,
        explanation: "When parents disagree about services, the service coordinator should facilitate communication between them and help them work toward consensus. This may involve providing additional information, clarifying misunderstandings, or suggesting a meeting with providers to discuss options."
    },
    {
        id: 25,
        question: "What is the service coordinator's responsibility regarding the family's cultural and linguistic background?",
        options: [
            "Ignoring cultural differences to ensure standardized service delivery",
            "Respecting and responding to the family's cultural and linguistic background in all interactions",
            "Requiring families to adapt to mainstream American practices",
            "Limiting services to those provided in English only"
        ],
        correctIndex: 1,
        explanation: "Service coordinators must respect and respond to the family's cultural and linguistic background in all interactions. This includes ensuring access to interpreters if needed, respecting cultural practices, and ensuring that services are delivered in a culturally sensitive manner."
    }
];

// Define additional questions for Section 2 - Group 6
const section2QuestionsGroup6 = [
    {
        id: 26,
        question: "What is the service coordinator's responsibility when a family temporarily relocates to another county within New York State?",
        options: [
            "Terminate services immediately",
            "Coordinate with the receiving county to ensure continuity of services",
            "Require the family to restart the entire eligibility process",
            "Maintain the current service plan without any adjustments"
        ],
        correctIndex: 1,
        explanation: "When a family temporarily relocates to another county, the service coordinator should coordinate with the receiving county to ensure continuity of services. This includes transferring necessary records and helping the family connect with a service coordinator in the new location."
    },
    {
        id: 27,
        question: "What information should a service coordinator provide to families about financial aspects of early intervention services?",
        options: [
            "No information, as financial matters are handled by billing departments only",
            "Information about the use of public insurance, private insurance, and family cost participation",
            "Only information about private payment options",
            "Guarantee that all services will be free regardless of insurance status"
        ],
        correctIndex: 1,
        explanation: "Service coordinators should provide families with information about all financial aspects of early intervention services, including the use of public insurance (Medicaid), private insurance, and the family cost participation system. This helps families understand potential costs and make informed decisions."
    },
    {
        id: 28,
        question: "What should a service coordinator do if a family requests assistive technology devices that were not recommended in the evaluation?",
        options: [
            "Automatically deny the request",
            "Purchase the devices without evaluation",
            "Facilitate an assistive technology evaluation to determine if the devices are appropriate",
            "Tell the family to purchase the devices on their own"
        ],
        correctIndex: 2,
        explanation: "If a family requests assistive technology devices not recommended in the evaluation, the service coordinator should facilitate an assistive technology evaluation to determine if the devices are appropriate and necessary for the child to achieve IFSP outcomes. This ensures decisions are based on the child's needs."
    },
    {
        id: 29,
        question: "What action should a service coordinator take if they suspect a child in early intervention is being abused or neglected?",
        options: [
            "Discuss it only with the early intervention team",
            "Wait for concrete evidence before taking action",
            "Make a report to child protective services as mandated by law",
            "Address concerns directly with the suspected abuser"
        ],
        correctIndex: 2,
        explanation: "Service coordinators, like all early intervention providers, are mandated reporters. If they suspect abuse or neglect, they must make a report to child protective services as required by law, while continuing to provide supportive services to the family."
    },
    {
        id: 30,
        question: "What is the service coordinator's role in documenting services for state and federal reporting requirements?",
        options: [
            "No role, as this is only the responsibility of the Early Intervention Official",
            "Ensuring accurate documentation of all services and maintaining required records",
            "Creating statistical reports about program effectiveness",
            "Publishing research on early intervention outcomes"
        ],
        correctIndex: 1,
        explanation: "Service coordinators play a key role in ensuring accurate documentation of all services and maintaining required records. This documentation is essential for state and federal reporting requirements, quality assurance activities, and program improvement efforts."
    }
];

// Define additional questions for Section 2 - Group 7
const section2QuestionsGroup7 = [
    {
        id: 31,
        question: "What is the service coordinator's responsibility regarding transportation arrangements for early intervention services?",
        options: [
            "No responsibility, as transportation is solely the family's concern",
            "Coordinating transportation services if they are included in the IFSP as necessary for the child to benefit from early intervention",
            "Personally driving families to all appointments",
            "Providing public transportation vouchers to all families"
        ],
        correctIndex: 1,
        explanation: "If transportation is included in the IFSP as necessary for the child to benefit from early intervention services, the service coordinator is responsible for coordinating these transportation services, which may include arranging for service providers to travel to the home or for transportation to center-based services."
    },
    {
        id: 32,
        question: "What should a service coordinator do if a family repeatedly misses scheduled appointments without notification?",
        options: [
            "Immediately terminate all services",
            "Ignore the missed appointments",
            "Contact the family to understand the reasons and work to address barriers to participation",
            "Bill the family for the missed appointments"
        ],
        correctIndex: 2,
        explanation: "When a family repeatedly misses appointments, the service coordinator should contact them to understand the underlying reasons and work collaboratively to address any barriers to participation. This might include adjusting the schedule, addressing transportation issues, or discussing the importance of consistent services."
    },
    {
        id: 33,
        question: "What is the service coordinator's role in facilitating communication between multiple service providers working with a child?",
        options: [
            "No role, as providers should communicate directly with each other",
            "Facilitating team meetings and ensuring information is shared appropriately among providers",
            "Restricting communication between providers to protect confidentiality",
            "Requiring all communication to go through the coordinator only"
        ],
        correctIndex: 1,
        explanation: "The service coordinator plays a crucial role in facilitating communication between multiple service providers by arranging team meetings, ensuring that information is shared appropriately, and promoting a collaborative approach to addressing the child's needs."
    },
    {
        id: 34,
        question: "What is the service coordinator's responsibility regarding linking families to community resources beyond early intervention?",
        options: [
            "No responsibility beyond early intervention services",
            "Identifying and helping families access community resources that may benefit the child and family",
            "Requiring families to participate in all suggested community programs",
            "Providing direct financial assistance for community services"
        ],
        correctIndex: 1,
        explanation: "Service coordinators are responsible for identifying and helping families access community resources beyond early intervention that may benefit the child and family. This might include parent support groups, recreational programs, housing assistance, or other community services that support family functioning."
    },
    {
        id: 35,
        question: "What is a service coordinator's responsibility when a family wants to change service providers?",
        options: [
            "Denying the request to maintain consistency",
            "Requiring the family to provide written justification",
            "Helping the family identify a new provider and facilitating a smooth transition",
            "Requiring the family to continue with the current provider for at least six months"
        ],
        correctIndex: 2,
        explanation: "When a family wants to change service providers, the service coordinator should respect this choice and help them identify a new qualified provider who can meet their child's needs. The coordinator should then facilitate a smooth transition to ensure continuity of services."
    }
];

// Define additional questions for Section 2 - Group 8
const section2QuestionsGroup8 = [
    {
        id: 36,
        question: "What information must a service coordinator provide to families about available advocacy services?",
        options: [
            "No information, as advocacy services are outside the early intervention system",
            "Information only if the family is in disagreement with the Early Intervention Official",
            "Information about parent centers, advocacy organizations, and legal resources available to support families",
            "Information only about state-operated advocacy programs"
        ],
        correctIndex: 2,
        explanation: "Service coordinators must provide families with information about parent centers, advocacy organizations, and legal resources that can help them advocate for their child's needs. This empowers families to be effective advocates for their children both within and beyond the early intervention system."
    },
    {
        id: 37,
        question: "What role does the service coordinator play in supporting families to participate in their child's services?",
        options: [
            "No role, as parent participation is optional",
            "Helping families understand how they can participate in and reinforce intervention strategies",
            "Requiring parents to be present at all sessions",
            "Excluding parents from sessions to avoid interference with professional services"
        ],
        correctIndex: 1,
        explanation: "Service coordinators play an important role in helping families understand how they can participate in and reinforce intervention strategies. This includes explaining the importance of parent involvement, suggesting ways parents can implement strategies in daily routines, and addressing barriers to participation."
    },
    {
        id: 38,
        question: "What should a service coordinator do when a family requests services in a language other than English?",
        options: [
            "Deny the request and require the family to use English",
            "Arrange for qualified interpreters or bilingual providers as needed",
            "Suggest the family find their own interpreter",
            "Limit services to only what is available in English"
        ],
        correctIndex: 1,
        explanation: "When a family requests services in a language other than English, the service coordinator should arrange for qualified interpreters or bilingual providers as needed. This ensures equitable access to early intervention services for families with limited English proficiency."
    },
    {
        id: 39,
        question: "What is the service coordinator's role regarding respite services for families of children in early intervention?",
        options: [
            "No role, as respite is not related to early intervention",
            "Providing respite personally",
            "Informing families about available respite programs and helping them access these services if needed",
            "Requiring all families to use respite services"
        ],
        correctIndex: 2,
        explanation: "Service coordinators should inform families about available respite programs and help them access these services if needed. While respite is not typically an early intervention service, coordinators should help connect families to these support services through other systems when appropriate."
    },
    {
        id: 40,
        question: "What is the service coordinator's responsibility regarding the child's transition from hospital to home for medically complex infants?",
        options: [
            "No responsibility until the child is discharged",
            "Coordinating with hospital staff, medical providers, and early intervention providers to ensure a smooth transition",
            "Making medical decisions about when discharge is appropriate",
            "Providing nursing care in the home"
        ],
        correctIndex: 1,
        explanation: "For medically complex infants, the service coordinator plays a crucial role in coordinating with hospital staff, medical providers, and early intervention providers to ensure a smooth transition from hospital to home. This includes helping arrange home-based services, equipment, and supports needed after discharge."
    }
];

// Define additional questions for Section 2 - Group 9
const section2QuestionsGroup9 = [
    {
        id: 41,
        question: "What is the service coordinator's role in ensuring that services are delivered in natural environments?",
        options: [
            "No role, as the location of services is determined solely by providers",
            "Ensuring that services are provided in natural environments to the maximum extent appropriate",
            "Requiring all services to be provided in clinical settings",
            "Leaving the decision entirely to the family without guidance"
        ],
        correctIndex: 1,
        explanation: "Service coordinators must ensure that early intervention services are provided in natural environments to the maximum extent appropriate. This includes discussing the importance of natural environments with the family and team, and documenting justification when services need to be provided in non-natural settings."
    },
    {
        id: 42,
        question: "What is the service coordinator's responsibility regarding helping families understand evaluation results?",
        options: [
            "No responsibility, as this is solely the evaluator's role",
            "Helping families understand evaluation results and their implications for service planning",
            "Providing their own clinical interpretation regardless of evaluator findings",
            "Withholding concerning results to avoid upsetting families"
        ],
        correctIndex: 1,
        explanation: "Service coordinators should help families understand evaluation results and their implications for service planning. This includes ensuring that evaluators explain findings clearly, answering questions, and helping families connect evaluation results to potential intervention strategies."
    },
    {
        id: 43,
        question: "What must a service coordinator do if a family disagrees with evaluation findings?",
        options: [
            "Require the family to accept the findings regardless of concerns",
            "Automatically order a new evaluation from different providers",
            "Discuss the family's concerns and inform them of their options, including the right to request additional evaluations",
            "Side with the evaluators in all cases"
        ],
        correctIndex: 2,
        explanation: "If a family disagrees with evaluation findings, the service coordinator must discuss their concerns and inform them of their options, including the right to request additional evaluations. The coordinator should also explain the dispute resolution options available to the family."
    },
    {
        id: 44,
        question: "What is the service coordinator's responsibility regarding ensuring that IFSP outcomes are functional and family-centered?",
        options: [
            "No responsibility, as outcomes are determined solely by therapists",
            "Facilitating discussion to ensure outcomes are functional, measurable, and reflect family priorities",
            "Writing all outcomes without family input",
            "Focusing only on child developmental milestones regardless of family priorities"
        ],
        correctIndex: 1,
        explanation: "Service coordinators are responsible for facilitating discussion to ensure that IFSP outcomes are functional, measurable, and reflect family priorities. This means ensuring that outcomes are meaningful in the context of the child's and family's daily life and routines."
    },
    {
        id: 45,
        question: "What is the service coordinator's role in monitoring progress toward IFSP outcomes?",
        options: [
            "No role, as progress monitoring is solely the provider's responsibility",
            "Collecting data and conducting formal assessments of the child",
            "Discussing progress with the family and providers regularly and documenting these discussions",
            "Focusing only on whether services were delivered, not on actual progress"
        ],
        correctIndex: 2,
        explanation: "Service coordinators play an important role in monitoring progress by discussing progress with the family and providers regularly and documenting these discussions. This ongoing monitoring helps determine whether services are effective or if changes to the IFSP are needed."
    }
];

// Define final questions for Section 2 - Group 10
const section2QuestionsGroup10 = [
    {
        id: 46,
        question: "What is the service coordinator's role in supporting families through periods of crisis?",
        options: [
            "No role, as crisis intervention is outside of early intervention",
            "Providing therapeutic counseling services",
            "Connecting families with appropriate crisis resources and temporarily adjusting service coordination to meet immediate needs",
            "Taking custody of the child during crisis periods"
        ],
        correctIndex: 2,
        explanation: "During periods of crisis, service coordinators should connect families with appropriate crisis resources and temporarily adjust service coordination to meet immediate needs. This may include more frequent contact, helping access emergency services, or temporarily adjusting the IFSP to address priority concerns."
    },
    {
        id: 47,
        question: "What is the service coordinator's responsibility regarding ensuring confidentiality of early intervention records?",
        options: [
            "Sharing information freely with anyone who requests it",
            "Maintaining strict confidentiality and obtaining written consent before sharing personally identifiable information",
            "Discussing case details with other service coordinators without permission",
            "Posting updates about the child's progress on social media"
        ],
        correctIndex: 1,
        explanation: "Service coordinators must maintain strict confidentiality of early intervention records and obtain written consent from parents before sharing personally identifiable information with individuals outside the early intervention system, except as permitted by law."
    },
    {
        id: 48,
        question: "What is a service coordinator's role when a child is determined to be no longer eligible for early intervention services?",
        options: [
            "Immediately terminating all contact with the family",
            "Continuing services regardless of eligibility determination",
            "Helping the family access other appropriate services and supports in the community",
            "Encouraging the family to move to a different county with different eligibility criteria"
        ],
        correctIndex: 2,
        explanation: "When a child is determined to be no longer eligible for early intervention services, the service coordinator should help the family access other appropriate services and supports in the community. This might include referrals to community playgroups, library programs, or other developmental supports."
    },
    {
        id: 49,
        question: "What is the service coordinator's responsibility regarding supporting families in the development of self-advocacy skills?",
        options: [
            "No responsibility, as self-advocacy is beyond the scope of early intervention",
            "Making all decisions for families to avoid burdening them",
            "Providing information and support to help families develop skills to advocate effectively for their child",
            "Requiring families to handle all system navigation without assistance"
        ],
        correctIndex: 2,
        explanation: "Service coordinators should provide information and support to help families develop skills to advocate effectively for their child. This includes explaining systems, modeling advocacy strategies, and gradually empowering families to take a more active role in advocating for their child's needs."
    },
    {
        id: 50,
        question: "What ethical principles should guide a service coordinator's practice?",
        options: [
            "Maximizing billing for services regardless of need",
            "Focusing only on the child's needs while ignoring family concerns",
            "Respecting family choice, maintaining confidentiality, and promoting the best interests of the child and family",
            "Limiting services to minimize system costs"
        ],
        correctIndex: 2,
        explanation: "Service coordinators should be guided by ethical principles that include respecting family choice, maintaining confidentiality, and promoting the best interests of the child and family. These principles ensure that service coordination is family-centered, respectful, and effective."
    }
];

// Combine all question groups
section2Questions.push(...section2QuestionsGroup2);
section2Questions.push(...section2QuestionsGroup3);
section2Questions.push(...section2QuestionsGroup4);
section2Questions.push(...section2QuestionsGroup5);
section2Questions.push(...section2QuestionsGroup6);
section2Questions.push(...section2QuestionsGroup7);
section2Questions.push(...section2QuestionsGroup8);
section2Questions.push(...section2QuestionsGroup9);
section2Questions.push(...section2QuestionsGroup10);

// Function to load Section 2 questions
function loadSection2Questions() {
    const sectionContainer = document.getElementById('section2');
    
    // Create the section structure
    let sectionContent = `
        <h3>Section 2: Service Coordination</h3>
        <p>This section covers the roles and responsibilities of service coordinators in the Early Intervention Program.</p>
        
        <div class="progress-bar">
            <div class="progress" id="section2-progress"></div>
        </div>
        
        <div id="section2-questions">
            <!-- Questions will be loaded here -->
        </div>
        
        <div class="test-controls">
            <button class="btn" id="section2-prev" disabled>Previous</button>
            <button class="btn" id="section2-next">Next</button>
            <button class="btn secondary" id="section2-submit" style="display:none;">Submit Section</button>
        </div>
        
        <div id="section2-results" class="results" style="display:none;">
            <!-- Results will be shown here -->
        </div>
    `;
    
    sectionContainer.innerHTML = sectionContent;
    
    // Set up question navigation
    setupSection2Navigation();
}

// Function to set up question navigation for Section 2
function setupSection2Navigation() {
    // Initialize variables
    let currentQuestionIndex = 0;
    const questionsContainer = document.getElementById('section2-questions');
    const prevButton = document.getElementById('section2-prev');
    const nextButton = document.getElementById('section2-next');
    const submitButton = document.getElementById('section2-submit');
    const progressBar = document.getElementById('section2-progress');
    
    // Array to track user's answers (initialized to null for each question)
    const userAnswers = new Array(section2Questions.length).fill(null);
    
    // Function to display current question
    function showQuestion(index) {
        console.log(`Section 2: Starting to show question ${index+1}`);
        
        // Update progress bar
        progressBar.style.width = `${((index + 1) / section2Questions.length) * 100}%`;
        
        // Get the current question
        const question = section2Questions[index];
        
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
        
        console.log(`Section 2: HTML inserted for question ${index+1}`);
        
        // Update button states
        prevButton.disabled = index === 0;
        
        if (index === section2Questions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
        
        // Critical: Use a slight delay to ensure DOM is updated before adding listeners
        setTimeout(() => {
            console.log(`Section 2: Adding event listeners for question ${index+1}`);
            
            // Get options after the DOM update
            const options = questionsContainer.querySelectorAll('.option');
            console.log(`Section 2: Found ${options.length} options for question ${index+1}`);
            
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
                console.log(`Section 2: Adding listener to option ${optionIndex+1} for question ${index+1}`);
                
                option.onclick = function() {
                    console.log(`Section 2: Option ${optionIndex+1} clicked for question ${index+1}`);
                    
                    // Remove selected class from all options
                    options.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Store the user's answer
                    const selectedIndex = parseInt(this.getAttribute('data-index'));
                    userAnswers[index] = selectedIndex;
                    
                    // Check if the answer is correct
                    const isCorrect = selectedIndex === question.correctIndex;
                    console.log(`Section 2: Answer for question ${index+1} is ${isCorrect ? 'correct' : 'incorrect'}`);
                    
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
        if (currentQuestionIndex < section2Questions.length - 1) {
            currentQuestionIndex++;
            showQuestion(currentQuestionIndex);
        }
    });
    
    submitButton.addEventListener('click', function() {
        // Calculate score
        let score = 0;
        for (let i = 0; i < section2Questions.length; i++) {
            if (userAnswers[i] === section2Questions[i].correctIndex) {
                score++;
            }
        }
        
        // Show results
        const resultsDiv = document.getElementById('section2-results');
        resultsDiv.innerHTML = `
            <h3>Section 2 Results</h3>
            <p>You scored ${score} out of ${section2Questions.length}.</p>
            <button class="btn" id="section2-retry">Retry Section</button>
        `;
        
        resultsDiv.style.display = 'block';
        
        // Hide questions and controls
        questionsContainer.style.display = 'none';
        document.querySelector('.test-controls').style.display = 'none';
        
        // Add event listener for retry button
        document.getElementById('section2-retry').addEventListener('click', function() {
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
    console.log("Section 2: Navigation setup complete, showing first question");
    showQuestion(currentQuestionIndex);
}

// Make function available globally
window.loadSection2Questions = loadSection2Questions;
