// Key Terms section for the Study Guide

function loadKeyTerms() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'key-terms';
    
    topic.innerHTML = `
        <h2 id="key-terms-title">Key Terms & Definitions</h2>
        <p>This glossary provides definitions for important terms related to the Early Intervention Program.</p>
        
        <div class="key-terms-list">
            <div class="key-term">
                <h4>Assessment</h4>
                <p>The ongoing procedures used by qualified personnel to identify the child's unique strengths and needs and the services appropriate to meet those needs. Assessment also refers to the family's resources, priorities, and concerns regarding their child's development.</p>
            </div>
            
            <div class="key-term">
                <h4>Child Find</h4>
                <p>A system of public awareness, screening, and referral designed to locate, identify, and refer as early as possible all young children with disabilities and their families who need Early Intervention Program services.</p>
            </div>
            
            <div class="key-term">
                <h4>Committee on Preschool Special Education (CPSE)</h4>
                <p>A multidisciplinary team established in accordance with New York State Education Law that determines eligibility for and develops an Individualized Education Program (IEP) for preschool children with disabilities ages 3-5.</p>
            </div>
            
            <div class="key-term">
                <h4>Developmental Delay</h4>
                <p>A condition that represents a significant delay in the process of development for which services are necessary. In New York, this may be a 33% delay in one developmental area, 25% delay in two areas, or standardized test scores 2.0 SD below the mean in one area or 1.5 SD below the mean in two areas.</p>
            </div>
            
            <div class="key-term">
                <h4>Early Intervention Official (EIO)</h4>
                <p>The person designated by the chief elected official of the county to administer the Early Intervention Program at the local level. The EIO has overall responsibility for ensuring eligible children receive appropriate services.</p>
            </div>
            
            <div class="key-term">
                <h4>Evaluation</h4>
                <p>The procedures used by qualified personnel to determine a child's initial and continuing eligibility for the Early Intervention Program. A multidisciplinary evaluation includes assessment of the child's functioning in all developmental areas.</p>
            </div>
            
            <div class="key-term">
                <h4>Family Assessment</h4>
                <p>A family-directed identification of the resources, priorities, and concerns of the family related to enhancing their child's development. Participation in family assessment is voluntary on the part of the family.</p>
            </div>
            
            <div class="key-term">
                <h4>Family-Centered Practices</h4>
                <p>An approach to planning and implementing services that recognizes the centrality of the family in the child's life. It involves treating families with dignity and respect, providing individualized services, sharing information so families can make informed decisions, and ensuring family choice regarding interventions.</p>
            </div>
            
            <div class="key-term">
                <h4>Individualized Education Program (IEP)</h4>
                <p>A written plan for a preschool or school-age child with a disability that is developed, reviewed, and revised by the CPSE or CSE. The IEP specifies the special education and related services needed by the child.</p>
            </div>
            
            <div class="key-term">
                <h4>Individualized Family Service Plan (IFSP)</h4>
                <p>A written plan for providing early intervention services to an eligible child and the child's family. The IFSP is developed by a multidisciplinary team including the family and specifies outcomes, services, and coordination of services.</p>
            </div>
            
            <div class="key-term">
                <h4>Individuals with Disabilities Education Act (IDEA)</h4>
                <p>A federal law that ensures services to children with disabilities throughout the nation. Part C of IDEA covers early intervention services for infants and toddlers birth to age 3 and their families.</p>
            </div>
            
            <div class="key-term">
                <h4>Multidisciplinary Evaluation</h4>
                <p>An assessment of a child's development conducted by qualified professionals from at least two different disciplines or professions to determine eligibility and needs for early intervention services.</p>
            </div>
            
            <div class="key-term">
                <h4>Natural Environments</h4>
                <p>Settings that are natural or typical for a same-aged infant or toddler without a disability, including the home and community settings where children without disabilities participate.</p>
            </div>
            
            <div class="key-term">
                <h4>Parent</h4>
                <p>A natural or adoptive parent, a guardian, a person acting in the place of a parent, or a surrogate parent who has been appointed to represent the child. The term does not include the state if the child is a ward of the state.</p>
            </div>
            
            <div class="key-term">
                <h4>Procedural Safeguards</h4>
                <p>The rights and protections afforded to children and families in the Early Intervention Program, including informed consent, confidentiality, access to records, prior notice, and due process procedures.</p>
            </div>
            
            <div class="key-term">
                <h4>Qualified Personnel</h4>
                <p>Individuals who have met New York State approved or recognized certification, licensing, or other comparable requirements for the areas in which they provide early intervention services.</p>
            </div>
            
            <div class="key-term">
                <h4>Service Coordination</h4>
                <p>Activities carried out by a service coordinator to assist and enable a child and the child's family to receive the rights, procedural safeguards, and services that are authorized under the Early Intervention Program.</p>
            </div>
            
            <div class="key-term">
                <h4>Transition Plan</h4>
                <p>A written plan included in the IFSP that outlines steps and services to support the child's transition from early intervention to preschool services, other appropriate programs, or no further services.</p>
            </div>
        </div>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadKeyTerms = loadKeyTerms;
