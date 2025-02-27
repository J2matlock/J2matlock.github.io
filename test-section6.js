// Test Section 6: Transitions - Questions 1-50

// Define the questions for Section 6
const section6Questions = [
    {
        id: 1,
        question: "What is the primary purpose of transition planning in Early Intervention?",
        options: [
            "To reduce the caseload of service coordinators",
            "To help families and children move smoothly to the next service setting or program",
            "To formally end the service relationship with the family",
            "To evaluate the effectiveness of Early Intervention services"
        ],
        correctIndex: 1,
        explanation: "The primary purpose of transition planning in Early Intervention is to help families and children move smoothly to the next service setting or program. This includes preparing for changes in services, providers, and settings while maintaining continuity of care and support."
    },
    {
        id: 2,
        question: "By what age must transition planning begin for a child who may be eligible for preschool special education services?",
        options: [
            "1 year old",
            "18 months old",
            "2 years old",
            "2 years and 3 months old"
        ],
        correctIndex: 3,
        explanation: "Transition planning for a child who may be eligible for preschool special education services must begin by the time the child is 2 years and 3 months old (27 months). This timing allows for a comprehensive transition process before the child turns 3 years old."
    },
    {
        id: 3,
        question: "Which of the following is a key component of a transition plan?",
        options: [
            "A detailed medical history of the child",
            "A comprehensive list of all possible future placement options",
            "Steps and services to help the child and family prepare for and adjust to new settings",
            "An evaluation of the parents' satisfaction with Early Intervention services"
        ],
        correctIndex: 2,
        explanation: "A key component of a transition plan is the steps and services to help the child and family prepare for and adjust to new settings. This includes specific strategies to support the transition process based on the child's needs and family's preferences."
    },
    {
        id: 4,
        question: "What is the role of the service coordinator in the transition process?",
        options: [
            "To make all decisions about the child's future placement",
            "To coordinate the transition plan, including facilitating communication between EI and receiving programs",
            "To determine if the child is eligible for preschool special education",
            "To take over all transition responsibilities from the family"
        ],
        correctIndex: 1,
        explanation: "The role of the service coordinator in the transition process is to coordinate the transition plan, including facilitating communication between Early Intervention and receiving programs. They help the family navigate the transition process, ensure necessary evaluations are completed, and support the family in exploring options for future services."
    },
    {
        id: 5,
        question: "What information should be shared with the receiving program during transition (with parent consent)?",
        options: [
            "Only diagnostic information about the child's delay or disability",
            "Only contact information for the family",
            "Comprehensive information about the child's strengths, needs, and effective strategies",
            "Only the dates of Early Intervention service delivery"
        ],
        correctIndex: 2,
        explanation: "With parent consent, comprehensive information about the child's strengths, needs, and effective strategies should be shared with the receiving program during transition. This helps ensure continuity of care and that the new program understands what works best for the child."
    },
    {
        id: 6,
        question: "When a child is turning three and transitioning out of Early Intervention, which of the following is a potential transition outcome?",
        options: [
            "Transition to preschool special education services only",
            "Continued Early Intervention services until age 5",
            "Transition to preschool special education, community programs, or no further services based on eligibility and family choice",
            "Automatic enrollment in Head Start"
        ],
        correctIndex: 2,
        explanation: "When a child turns three and transitions out of Early Intervention, potential transition outcomes include preschool special education services (if eligible), community-based programs like regular preschool or Head Start, or no further services if the child no longer needs them. The outcome depends on the child's eligibility and family choice."
    },
    {
        id: 7,
        question: "What is the purpose of a transition conference for a child potentially eligible for preschool special education?",
        options: [
            "To formally evaluate the child for special education eligibility",
            "To discuss with the family and the school district the transition process and service options",
            "To prepare school records for transfer",
            "To terminate Early Intervention services immediately"
        ],
        correctIndex: 1,
        explanation: "The purpose of a transition conference is to discuss with the family and the school district the transition process and service options. This meeting helps families understand the differences between Early Intervention and preschool special education, learn about the evaluation process, and explore available program options."
    },
    {
        id: 8,
        question: "What document must be developed to guide the transition from Early Intervention to preschool special education?",
        options: [
            "Individualized Education Program (IEP)",
            "Transition Plan as part of the IFSP",
            "Memorandum of Understanding (MOU)",
            "Annual Progress Report"
        ],
        correctIndex: 1,
        explanation: "A Transition Plan as part of the IFSP must be developed to guide the transition from Early Intervention to preschool special education. This plan outlines the steps needed to support a smooth transition, including timelines and responsibilities."
    },
    {
        id: 9,
        question: "Which of the following is NOT typically a transition activity for children leaving Early Intervention?",
        options: [
            "Visiting potential future program settings",
            "Sharing information with new providers (with parental consent)",
            "Transferring legal guardianship to the new program",
            "Gradually adjusting the child's schedule to match the new program's schedule"
        ],
        correctIndex: 2,
        explanation: "Transferring legal guardianship to the new program is NOT a transition activity for children leaving Early Intervention. Parents maintain legal guardianship; what transfers is the provision of services. Typical transition activities include visits to new settings, information sharing, and helping the child adjust to new routines."
    },
    {
        id: 10,
        question: "What is an important consideration when preparing a child with sensory sensitivities for transition to a new environment?",
        options: [
            "Transitioning should be done suddenly to avoid anxiety buildup",
            "The child should not be told about the transition until the day it occurs",
            "Gradually introducing the child to new sensory experiences similar to the new environment",
            "Sensory sensitivities will naturally resolve during transition"
        ],
        correctIndex: 2,
        explanation: "When preparing a child with sensory sensitivities for transition to a new environment, gradually introducing the child to new sensory experiences similar to those in the new environment is important. This might include visiting the new setting multiple times, bringing in sensory items or pictures from the new environment, and practicing new routines."
    },
    {
        id: 11,
        question: "What is the significance of including family-identified transition outcomes in the IFSP?",
        options: [
            "It is only a formality with no practical impact",
            "It ensures the transition focuses on what's most important to the family and child",
            "It transfers responsibility for transition success to the family",
            "It is only required for children eligible for preschool special education"
        ],
        correctIndex: 1,
        explanation: "Including family-identified transition outcomes in the IFSP ensures the transition focuses on what's most important to the family and child. This family-centered approach acknowledges the family's priorities, concerns, and hopes for their child's next steps, making the transition more meaningful and successful."
    },
    {
        id: 12,
        question: "Which of the following is a key difference between Early Intervention services and preschool special education services?",
        options: [
            "Early Intervention has no eligibility requirements while preschool special education does",
            "Early Intervention focuses on family outcomes while preschool special education focuses primarily on child outcomes",
            "Early Intervention is always provided in the home while preschool special education is only in schools",
            "Early Intervention is federally funded while preschool special education is only state funded"
        ],
        correctIndex: 1,
        explanation: "A key difference is that Early Intervention focuses on family outcomes while preschool special education focuses primarily on child outcomes. Early Intervention (Part C of IDEA) is family-centered with services often delivered in natural environments, while preschool special education (Part B) is more child-centered and educational in focus."
    },
    {
        id: 13,
        question: "For children not eligible for preschool special education, what should the transition plan include?",
        options: [
            "Extended Early Intervention services past age three",
            "Mandatory enrollment in private therapy",
            "Information about and referrals to other community resources and programs",
            "A detailed educational curriculum for parents to implement"
        ],
        correctIndex: 2,
        explanation: "For children not eligible for preschool special education, the transition plan should include information about and referrals to other community resources and programs. This might include community preschools, Head Start, library programs, playgroups, or other developmental supports appropriate for the child and family."
    },
    {
        id: 14,
        question: "Why is continuity of services important during the transition process?",
        options: [
            "It is required by federal law in all cases",
            "It helps maintain established relationships with providers",
            "It prevents regression and supports continued development while adjusting to changes",
            "It reduces paperwork for service coordinators"
        ],
        correctIndex: 2,
        explanation: "Continuity of services is important during the transition process because it prevents regression and supports continued development while adjusting to changes. Transitions can be challenging for children, and maintaining supportive services helps them adapt while continuing to make developmental progress."
    },
    {
        id: 15,
        question: "What is the role of the Committee on Preschool Special Education (CPSE) in the transition process?",
        options: [
            "To provide Early Intervention services until the child turns 3",
            "To determine eligibility for preschool special education services and develop an IEP if eligible",
            "To evaluate the effectiveness of Early Intervention services",
            "To provide service coordination after age 3"
        ],
        correctIndex: 1,
        explanation: "The role of the CPSE is to determine eligibility for preschool special education services and develop an IEP if the child is eligible. This committee, part of the school district, reviews evaluations, meets with the family, and determines appropriate educational services and supports for children aged 3-5."
    },
    {
        id: 16,
        question: "Which of the following must occur before a child transitions from Early Intervention to preschool special education?",
        options: [
            "The child must master all IFSP outcomes",
            "Parents must consent to referral to the CPSE and to evaluations",
            "The child must attend a regular preschool for at least 6 months",
            "The family must change service coordinators"
        ],
        correctIndex: 1,
        explanation: "Before a child transitions from Early Intervention to preschool special education, parents must consent to referral to the CPSE and to evaluations. This respects parental choice and acknowledges that parents have the right to decide whether to pursue preschool special education services."
    },
    {
        id: 17,
        question: "What happens to Early Intervention services when a child turns 3 but the preschool special education eligibility determination is not yet complete?",
        options: [
            "Services automatically continue until age 4",
            "Services end immediately at age 3 regardless of circumstances",
            "Services may continue through a 'pendency provision' if properly arranged in advance",
            "Services are transferred to the local school district without interruption"
        ],
        correctIndex: 2,
        explanation: "When a child turns 3 but the preschool special education eligibility determination is not complete, services may continue through a 'pendency provision' if properly arranged in advance. This 'pendency' or 'extended IFSP' ensures no interruption in services during the transition process, but requires specific procedural steps and timelines to be followed."
    },
    {
        id: 18,
        question: "What is the 'transition bag' approach sometimes used in Early Intervention?",
        options: [
            "A monetary stipend given to families during transition",
            "A collection of familiar objects and materials that travel with the child to new settings to provide comfort and continuity",
            "A checklist of transition tasks for the service coordinator",
            "A packet of legal documents required for transition"
        ],
        correctIndex: 1,
        explanation: "The 'transition bag' approach involves a collection of familiar objects and materials that travel with the child to new settings to provide comfort and continuity. This strategy helps children feel secure during transitions by having familiar items, photos, or comfort objects available in the new environment."
    },
    {
        id: 19,
        question: "Which of the following statements about transition planning is FALSE?",
        options: [
            "Transition planning should be individualized for each child and family",
            "Transition planning is a collaborative process involving the family and professionals",
            "Transition planning begins only in the final month before the child leaves Early Intervention",
            "Transition planning should address emotional aspects of transition for both child and family"
        ],
        correctIndex: 2,
        explanation: "It is FALSE that transition planning begins only in the final month before the child leaves Early Intervention. Effective transition planning begins well in advance (at least 6-9 months for transitions to preschool special education) to allow adequate time for preparation, visits, evaluations, and adjustment to the idea of change."
    },
    {
        id: 20,
        question: "What is the most helpful information to share from the IFSP during transition?",
        options: [
            "Only the child's medical diagnosis",
            "Only the names of previous service providers",
            "Effective strategies, communication methods, and environmental adaptations that support the child",
            "Only the frequency of Early Intervention services"
        ],
        correctIndex: 2,
        explanation: "The most helpful information to share from the IFSP includes effective strategies, communication methods, and environmental adaptations that support the child. This practical information about what works well for the child helps the new program provide appropriate supports from the beginning, creating continuity of successful approaches."
    },
    {
        id: 21,
        question: "What strategies help prepare a child emotionally for the transition to a new program?",
        options: [
            "Avoiding any discussion of the change until it happens",
            "Using social stories, pictures of the new setting, and gradual introduction to new routines",
            "Telling the child they must behave better in the new program",
            "Discontinuing current services abruptly to create a clean break"
        ],
        correctIndex: 1,
        explanation: "Strategies that help prepare a child emotionally for transition include using social stories, pictures of the new setting, and gradual introduction to new routines. These approaches provide predictability, familiarize the child with upcoming changes, and build comfort with new environments in a supportive way."
    },
    {
        id: 22,
        question: "What is the significance of parent participation in transition planning?",
        options: [
            "It is a legal formality with little practical importance",
            "It ensures families understand and are active partners in planning for their child's future services",
            "It transfers responsibility for transition success from providers to parents",
            "It is only important for children with severe disabilities"
        ],
        correctIndex: 1,
        explanation: "Parent participation in transition planning ensures families understand and are active partners in planning for their child's future services. Parents provide essential information about their child, express preferences about future services, and make key decisions that affect the transition process and outcomes."
    },
    {
        id: 23,
        question: "What is a recommended practice for the first few days after a child transitions to a new program?",
        options: [
            "Having familiar objects or photos from home available to provide comfort",
            "Expecting the child to immediately adjust to all new routines",
            "Preventing parents from communicating with the new program until the child settles in",
            "Comparing the child's behavior to typically developing peers"
        ],
        correctIndex: 0,
        explanation: "A recommended practice for the first few days after transition is having familiar objects or photos from home available to provide comfort. This creates a bridge between home and the new setting, giving the child security items that help them feel safe while adjusting to the new environment."
    },
    {
        id: 24,
        question: "Why might a child's behavior regress during the transition process?",
        options: [
            "The child is intentionally being difficult",
            "The previous intervention was ineffective",
            "Transitions create stress and anxiety, which can affect behavior and skill performance",
            "New programs always cause regression regardless of preparation"
        ],
        correctIndex: 2,
        explanation: "A child's behavior might regress during transition because transitions create stress and anxiety, which can affect behavior and skill performance. This regression is often temporary as the child adjusts to new people, expectations, and routines, and should be anticipated as a normal part of the adaptation process."
    },
    {
        id: 25,
        question: "What is the primary difference between an IFSP and an IEP?",
        options: [
            "IFSPs are only for physical disabilities while IEPs are for cognitive disabilities",
            "IFSPs focus on the family and child in natural environments while IEPs focus on the child's educational needs",
            "IFSPs require parent involvement while IEPs do not",
            "IFSPs are federally mandated while IEPs are optional state programs"
        ],
        correctIndex: 1,
        explanation: "The primary difference is that IFSPs focus on the family and child in natural environments while IEPs focus on the child's educational needs. The IFSP includes family outcomes and is designed around natural environments and routines, while the IEP focuses on the child's educational progress and typically addresses school-based services."
    },
    {
        id: 26,
        question: "What is the importance of helping families understand the differences in service delivery between Early Intervention and preschool special education?",
        options: [
            "It has no importance as the services are identical",
            "It prepares families for changes in approach, location, frequency, and focus of services",
            "It encourages families to decline preschool special education",
            "It is only important for children with severe disabilities"
        ],
        correctIndex: 1,
        explanation: "Helping families understand the differences in service delivery prepares them for changes in approach, location, frequency, and focus of services. This preparation helps set realistic expectations about how preschool special education differs from Early Intervention in terms of service model, provider roles, and educational focus."
    },
    {
        id: 27,
        question: "What aspect of transition is addressed when Early Intervention providers gradually modify their approach to more closely match what the child will experience in the receiving program?",
        options: [
            "Financial transition",
            "Administrative transition",
            "Programmatic transition",
            "Legal transition"
        ],
        correctIndex: 2,
        explanation: "When providers gradually modify their approach to match the receiving program, they are addressing programmatic transition. This might include adjusting to more structured activities, increasing group interactions, or practicing skills needed in the new setting to help the child adapt gradually to different expectations and routines."
    },
    {
        id: 28,
        question: "What transition needs might be unique for a child who has primarily received Early Intervention services in their home?",
        options: [
            "They will not have any unique transition needs",
            "They may need more support adjusting to group settings, noise levels, and shared attention from adults",
            "They will need less transition support than other children",
            "They should remain at home for all services regardless of age"
        ],
        correctIndex: 1,
        explanation: "A child who has primarily received services at home may need more support adjusting to group settings, noise levels, and shared attention from adults. The transition from one-on-one home-based intervention to a group educational environment represents a significant change in social demands, sensory input, and adult-child interaction patterns."
    },
    {
        id: 29,
        question: "What is the purpose of a transition visit to a potential preschool program?",
        options: [
            "To evaluate the preschool staff's qualifications",
            "To familiarize the child and family with the new environment and routines",
            "To determine if the child is eligible for the program",
            "To transfer the child's medical records"
        ],
        correctIndex: 1,
        explanation: "The purpose of a transition visit is to familiarize the child and family with the new environment and routines. These visits help reduce anxiety by allowing the child to preview the setting, meet teachers, see the classroom, and begin to understand what to expect, while also giving parents a chance to ask questions and build relationships with new staff."
    },
    {
        id: 30,
        question: "How can service coordinators best support parents who are anxious about their child's transition out of Early Intervention?",
        options: [
            "Tell parents their anxiety is unfounded",
            "Make all transition decisions for the parents",
            "Provide information, emotional support, and opportunities to voice concerns and ask questions",
            "Recommend the child stay in Early Intervention longer"
        ],
        correctIndex: 2,
        explanation: "Service coordinators can best support anxious parents by providing information, emotional support, and opportunities to voice concerns and ask questions. Acknowledging that transitions can be stressful, validating parents' feelings, and offering concrete information about the process helps parents feel more confident and prepared."
    },
    {
        id: 31,
        question: "What is the purpose of a 'transition summary document'?",
        options: [
            "It is only used for billing purposes",
            "It creates a legal record for potential disputes",
            "It provides the receiving program with key information about the child's strengths, needs, and effective supports",
            "It is a requirement for children transitioning to kindergarten only"
        ],
        correctIndex: 2,
        explanation: "A transition summary document provides the receiving program with key information about the child's strengths, needs, and effective supports. This document synthesizes important information from the child's Early Intervention experience to help the new program understand the child and implement successful strategies from the beginning."
    },
    {
        id: 32,
        question: "How does the timing of a child's third birthday affect the transition process?",
        options: [
            "It has no effect; the process is identical for all children",
            "Children with summer birthdays automatically receive extended Early Intervention services",
            "The timing can affect when transition planning begins, referral deadlines, and whether the child enters preschool special education immediately or at the start of a school year",
            "Children born in the middle of a school year are not eligible for preschool services until the next school year"
        ],
        correctIndex: 2,
        explanation: "The timing of a child's third birthday affects when transition planning begins, referral deadlines, and whether the child enters preschool special education immediately or at the start of a school year. For example, a child turning three in summer might transition at the beginning of the school year, while a child turning three mid-year might transition immediately or use pendency provisions."
    },
    {
        id: 33,
        question: "What skills might be specifically targeted during transition preparation for a child moving to a preschool environment?",
        options: [
            "Advanced academic skills like reading and mathematics",
            "Following group directions, taking turns, participating in circle time, and independent toileting",
            "Skills that will only be needed once the child reaches kindergarten",
            "Adult conversation skills"
        ],
        correctIndex: 1,
        explanation: "Skills often targeted during transition preparation include following group directions, taking turns, participating in circle time, and independent toileting. These functional skills help children succeed in preschool environments, which typically have more group-based activities and different expectations than Early Intervention settings."
    },
    {
        id: 34,
        question: "How might transition planning differ for a child who has significant medical needs?",
        options: [
            "These children always remain in Early Intervention regardless of age",
            "Medical needs are not considered during educational transitions",
            "Additional planning may include training for new staff, development of emergency protocols, and coordination with medical providers",
            "Medical needs are only addressed in the child's IEP, not during transition planning"
        ],
        correctIndex: 2,
        explanation: "For a child with significant medical needs, transition planning may include additional elements such as training for new staff, development of emergency protocols, and coordination with medical providers. This ensures the receiving program is prepared to meet the child's health and safety needs while supporting their educational progress."
    },
    {
        id: 35,
        question: "What is meant by 'transition outcomes' in the IFSP?",
        options: [
            "Predictions about the child's future development",
            "Specific skills or knowledge the child and family need to prepare for the next setting",
            "Requirements set by the receiving program",
            "Financial goals for the transition period"
        ],
        correctIndex: 1,
        explanation: "Transition outcomes in the IFSP are specific skills or knowledge the child and family need to prepare for the next setting. These outcomes target areas that will support a successful transition, such as developing skills needed in the new environment or helping the family gain information about future options."
    },
    {
        id: 36,
        question: "Which of the following is NOT typically part of a transition conference for a child potentially eligible for preschool special education?",
        options: [
            "Discussion of the similarities and differences between Early Intervention and preschool special education",
            "Explanation of the evaluation process for preschool special education",
            "Determination of the child's final IEP services and placement",
            "Discussion of the parents' concerns and questions about transition"
        ],
        correctIndex: 2,
        explanation: "Determination of the child's final IEP services and placement is NOT typically part of a transition conference. The transition conference provides information and begins the process, but final determinations about eligibility, services, and placement are made later by the CPSE after evaluations are completed and the committee has met."
    },
    {
        id: 37,
        question: "What role do Early Intervention providers play in supporting transitions?",
        options: [
            "They have no role once transition planning begins",
            "They continue providing identical services in the new setting",
            "They help prepare the child and family by targeting transition-related skills and providing emotional support",
            "They make all decisions about the child's future placement"
        ],
        correctIndex: 2,
        explanation: "Early Intervention providers support transitions by helping prepare the child and family by targeting transition-related skills and providing emotional support. They may adjust intervention strategies to build skills needed in the next environment, share information about the child's learning style, and help the child and family prepare emotionally for changes."
    },
    {
        id: 38,
        question: "What is the purpose of including transition strategies in the IFSP?",
        options: [
            "To extend Early Intervention eligibility beyond age three",
            "To document specific actions that will be taken to support a smooth transition process",
            "To transfer legal responsibility to the school district",
            "To ensure the child qualifies for preschool special education"
        ],
        correctIndex: 1,
        explanation: "The purpose of including transition strategies in the IFSP is to document specific actions that will be taken to support a smooth transition process. These strategies outline who will do what and when to prepare the child and family for the next setting, ensuring important steps aren't overlooked."
    },
    {
        id: 39,
        question: "How can cultural factors impact the transition process?",
        options: [
            "Cultural factors have no impact on transitions",
            "Cultural factors only affect children from certain backgrounds",
            "Cultural perspectives may influence family preferences, communication styles, and attitudes toward new programs and providers",
            "Cultural factors only matter for language development"
        ],
        correctIndex: 2,
        explanation: "Cultural factors can impact the transition process because cultural perspectives may influence family preferences, communication styles, and attitudes toward new programs and providers. Being culturally responsive during transitions means understanding and respecting each family's cultural context and how it shapes their approach to this significant change."
    },
    {
        id: 40,
        question: "What is the importance of discussing transportation needs during transition planning?",
        options: [
            "Transportation is never provided for preschool special education services",
            "Transportation needs only matter for children with physical disabilities",
            "Transportation arrangements can significantly impact a family's ability to access services and should be planned in advance",
            "Transportation is always the family's responsibility regardless of circumstances"
        ],
        correctIndex: 2,
        explanation: "Discussing transportation needs during transition planning is important because transportation arrangements can significantly impact a family's ability to access services and should be planned in advance. For preschool special education, transportation may be included as a related service if necessary for the child to benefit from special education, and planning for these needs ensures service accessibility."
    },
    {
        id: 41,
        question: "What is the role of developmental monitoring for children who exit Early Intervention without qualifying for additional services?",
        options: [
            "It is not necessary once a child exits Early Intervention",
            "It provides ongoing assessment of the child's development to identify any future concerns quickly",
            "It is only relevant for children with diagnosed conditions",
            "It is the sole responsibility of medical providers"
        ],
        correctIndex: 1,
        explanation: "Developmental monitoring for children who exit without qualifying for additional services provides ongoing assessment of the child's development to identify any future concerns quickly. This monitoring helps ensure that if developmental challenges emerge later, they can be addressed promptly rather than waiting until the child falls significantly behind."
    },
    {
        id: 42,
        question: "What should be included in transition planning for a child who is dual language learner?",
        options: [
            "A requirement that the child use only English in the new setting",
            "Consideration of language supports needed, information about the child's language development in both languages, and cultural considerations",
            "A plan to discontinue use of the home language",
            "Separate goals for each language the child speaks"
        ],
        correctIndex: 1,
        explanation: "Transition planning for a dual language learner should include consideration of language supports needed, information about the child's language development in both languages, and cultural considerations. This ensures the receiving program understands the child's language profile and can provide appropriate support for continued bilingual development."
    },
    {
        id: 43,
        question: "What transition consideration is particularly important for a child with sensory processing challenges?",
        options: [
            "The child should only transition to specialized sensory programs",
            "Transition planning should include strategies to address sensory needs in the new environment and preparation for new sensory experiences",
            "Sensory challenges should not be addressed during transition to avoid drawing attention to differences",
            "All sensory supports should be discontinued during transition to promote independence"
        ],
        correctIndex: 1,
        explanation: "For a child with sensory processing challenges, transition planning should include strategies to address sensory needs in the new environment and preparation for new sensory experiences. This might include creating a sensory profile to share with new providers, gradual exposure to new sensory inputs, and planning for environmental modifications or sensory supports in the new setting."
    },
    {
        id: 44,
        question: "What is the importance of discussing parent involvement expectations during transition planning?",
        options: [
            "It is not relevant to transition planning",
            "It helps parents understand how their role may change in the new program and prepare for different types of involvement",
            "It is only important for parents who have been minimally involved in Early Intervention",
            "It is only necessary for transitions to private programs"
        ],
        correctIndex: 1,
        explanation: "Discussing parent involvement expectations during transition planning helps parents understand how their role may change in the new program and prepare for different types of involvement. Parent participation often looks different in preschool programs than in Early Intervention, and preparing families for this change helps them maintain engagement in their child's services."
    },
    {
        id: 45,
        question: "What elements should be considered when assessing a child's readiness for transition to a new environment?",
        options: [
            "Only the child's cognitive abilities",
            "Only the opinions of Early Intervention providers",
            "Multiple factors including social-emotional skills, communication abilities, self-help skills, and ability to participate in group activities",
            "Only the child's medical diagnoses"
        ],
        correctIndex: 2,
        explanation: "When assessing a child's readiness for transition, multiple factors should be considered including social-emotional skills, communication abilities, self-help skills, and ability to participate in group activities. This comprehensive view helps identify areas of strength and need to target in preparation for the new environment."
    },
    {
        id: 46,
        question: "What must be included in the written notification to the local education agency (school district) when referring a child who may be eligible for preschool special education?",
        options: [
            "The child's full medical history",
            "Predictions about the child's potential for academic success",
            "The child's name, date of birth, and parent contact information",
            "A guarantee that the child will qualify for services"
        ],
        correctIndex: 2,
        explanation: "The written notification to the local education agency must include the child's name, date of birth, and parent contact information. This basic identifying information allows the school district to initiate the preschool special education process, though additional information may be shared later with parental consent."
    },
    {
        id: 47,
        question: "How does the transition process support the principle of 'least restrictive environment' in special education?",
        options: [
            "It automatically places all children in regular education classrooms",
            "It considers the range of placement options and supports needed for the child to participate in settings with typically developing peers to the maximum extent appropriate",
            "It ensures all children receive the most intensive services possible",
            "It focuses exclusively on specialized placements for children with disabilities"
        ],
        correctIndex: 1,
        explanation: "The transition process supports the principle of least restrictive environment by considering the range of placement options and supports needed for the child to participate in settings with typically developing peers to the maximum extent appropriate. This process explores what supports would allow the child to be successful in inclusive settings rather than automatically assuming more restrictive placements are necessary."
    },
    {
        id: 48,
        question: "What communication strategies support successful transitions between programs?",
        options: [
            "Limiting information sharing to protect confidentiality",
            "Formal meetings only, avoiding informal exchanges",
            "Regular, open communication between sending and receiving programs with parent consent, including meetings, written reports, and phone consultations",
            "Communicating only about the child's challenges and delays"
        ],
        correctIndex: 2,
        explanation: "Successful transitions are supported by regular, open communication between sending and receiving programs (with parent consent), including meetings, written reports, and phone consultations. This comprehensive communication ensures important information is shared, questions are answered, and effective strategies continue to be used across settings."
    },
    {
        id: 49,
        question: "What elements should be considered when assessing a child's readiness for transition to a new environment?",
        options: [
            "Only the child's cognitive abilities",
            "Only the opinions of Early Intervention providers",
            "Multiple factors including social-emotional skills, communication abilities, self-help skills, and ability to participate in group activities",
            "Only the child's medical diagnoses"
        ],
        correctIndex: 2,
        explanation: "When assessing a child's readiness for transition, multiple factors should be considered including social-emotional skills, communication abilities, self-help skills, and ability to participate in group activities. This comprehensive view helps identify areas of strength and need to target in preparation for the new environment."
    },
    {
        id: 50,
        question: "What is the key to successful transitions for children with disabilities and their families?",
        options: [
            "Limiting the number of people involved in the process",
            "Delaying transitions as long as possible",
            "Careful planning, collaboration between sending and receiving programs, and family engagement throughout the process",
            "Focusing exclusively on paperwork completion"
        ],
        correctIndex: 2,
        explanation: "The key to successful transitions is careful planning, collaboration between sending and receiving programs, and family engagement throughout the process. This comprehensive approach ensures that transitions are smooth, that important information is shared, and that children and families are prepared for and supported through the changes in services and settings."
    }
];

// Function to load Section 6 questions
function loadSection6Questions() {
    const sectionContainer = document.getElementById('section6');
    
    // Create the section structure
    let sectionContent = `
        <h3>Section 6: Transitions</h3>
        <p>This section covers the transition process in Early Intervention, including transitions between service providers, settings, and exiting from Early Intervention services.</p>
        
        <div class="progress-bar">
            <div class="progress" id="section6-progress"></div>
        </div>
        
        <div id="section6-questions">
            <!-- Questions will be loaded here -->
        </div>
        
        <div class="test-controls">
            <button class="btn" id="section6-prev" disabled>Previous</button>
            <button class="btn" id="section6-next">Next</button>
            <button class="btn secondary" id="section6-submit">Submit Answer</button>
        </div>
        
        <div id="section6-results" class="results" style="display:none;">
            <!-- Results will be shown here -->
        </div>
    `;
    
    sectionContainer.innerHTML = sectionContent;
    
    // Set up question navigation
    setupSection6Navigation();
}

// Function to set up question navigation for Section 6
function setupSection6Navigation() {
    // Initialize variables
    let currentQuestionIndex = 0;
    const questionsContainer = document.getElementById('section6-questions');
    const prevButton = document.getElementById('section6-prev');
    const nextButton = document.getElementById('section6-next');
    const submitButton = document.getElementById('section6-submit');
    const progressBar = document.getElementById('section6-progress');
    
    // Array to track user's answers (initialized to null for each question)
    const userAnswers = new Array(section6Questions.length).fill(null);
    
    // Function to display current question
    function showQuestion(index) {
        // Update progress bar
        progressBar.style.width = `${((index + 1) / section6Questions.length) * 100}%`;
        
        // Get the current question
        const question = section6Questions[index];
        
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
        
        // Set the question HTML
        questionsContainer.innerHTML = questionHTML;
        
        // Update button states
        prevButton.disabled = index === 0;
        
        if (index === section6Questions.length - 1) {
            nextButton.style.display = 'none';
            submitButton.style.display = 'inline-block';
        } else {
            nextButton.style.display = 'inline-block';
            submitButton.style.display = 'none';
        }
        
        // Critical: Use a slight delay to ensure DOM is updated before adding listeners
        setTimeout(() => {
            // Get options after the DOM update
            const options = questionsContainer.querySelectorAll('.option');
            
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
                option.onclick = function() {
                    // Remove selected class from all options
                    options.forEach(opt => opt.classList.remove('selected'));
                    
                    // Add selected class to clicked option
                    this.classList.add('selected');
                    
                    // Store the user's answer
                    const selectedIndex = parseInt(this.getAttribute('data-index'));
                    userAnswers[index] = selectedIndex;
                    
                    // Check if the answer is correct
                    const isCorrect = selectedIndex === question.correctIndex;
                    
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
        
        // Update current index
        currentQuestionIndex = index;
    }
    
    // Set up navigation button listeners
    nextButton.addEventListener('click', () => {
        if (currentQuestionIndex < section6Questions.length - 1) {
            showQuestion(currentQuestionIndex + 1);
        }
    });
    
    prevButton.addEventListener('click', () => {
        if (currentQuestionIndex > 0) {
            showQuestion(currentQuestionIndex - 1);
        }
    });
    
    // Set up submit button listener
    submitButton.addEventListener('click', function() {
        // Calculate score
        let score = 0;
        for (let i = 0; i < section6Questions.length; i++) {
            if (userAnswers[i] === section6Questions[i].correctIndex) {
                score++;
            }
        }
        
        // Show results
        const resultsDiv = document.getElementById('section6-results');
        resultsDiv.innerHTML = `
            <h3>Section 6 Results</h3>
            <p>You scored ${score} out of ${section6Questions.length}.</p>
            <button class="btn" id="section6-retry">Retry Section</button>
        `;
        
        resultsDiv.style.display = 'block';
        
        // Hide questions and controls
        questionsContainer.style.display = 'none';
        document.querySelector('.test-controls').style.display = 'none';
        
        // Add event listener for retry button
        document.getElementById('section6-retry').addEventListener('click', function() {
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
    showQuestion(0);
}

// Make functions available globally
window.loadSection6Questions = loadSection6Questions;
window.setupSection6Navigation = setupSection6Navigation;
