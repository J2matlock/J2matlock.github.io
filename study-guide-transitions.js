// Transitions section for the Study Guide

function loadTransitions() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'transitions';
    
    topic.innerHTML = `
        <h2 id="transitions-title">Transitions</h2>
        <p>Transition planning is a critical component of the Early Intervention Program, ensuring that children and families experience smooth transitions as they exit early intervention.</p>
        
        <h3>Types of Transitions in Early Intervention</h3>
        <ul>
            <li><strong>Transition to Preschool Special Education</strong>: For children eligible for services under IDEA Part B (Committee on Preschool Special Education/CPSE)</li>
            <li><strong>Transition to Other Early Childhood Programs</strong>: Such as Head Start, childcare, or community preschools</li>
            <li><strong>Transition to No Further Services</strong>: When a child has met outcomes and no longer needs specialized services</li>
            <li><strong>Transition Between Providers or Settings</strong>: When service providers change or the family relocates</li>
        </ul>
        
        <h3>Transition Timeline Requirements</h3>
        <ul>
            <li><strong>At least 120 days before third birthday</strong>: Service coordinator discusses transition options with family</li>
            <li><strong>At least 90 days before third birthday</strong>: 
                <ul>
                    <li>Notification to local school district (CPSE) that the child may be eligible for preschool special education services (unless parent opts out)</li>
                    <li>Transition plan must be developed and included in the IFSP</li>
                    <li>Transition conference must be held (if the family consents)</li>
                </ul>
            </li>
            <li><strong>By the third birthday</strong>: Early Intervention services end (unless eligible for the "summer birthday" exception in NYS)</li>
        </ul>
        
        <h3>Transition Planning Process</h3>
        
        <h4>1. Preparing for Transition</h4>
        <ul>
            <li>Discussing transition options with the family well in advance</li>
            <li>Providing information about available programs and services</li>
            <li>Helping the family understand differences between Early Intervention and preschool services</li>
            <li>Preparing the child for changes in services and settings</li>
            <li>Gathering developmental information to share with future providers (with consent)</li>
        </ul>
        
        <h4>2. Transition Conference</h4>
        <ul>
            <li>Coordinated by the service coordinator with parental consent</li>
            <li>Participants typically include:
                <ul>
                    <li>Parents/caregivers</li>
                    <li>EI service coordinator</li>
                    <li>EI service providers</li>
                    <li>CPSE chairperson (if transitioning to preschool special education)</li>
                    <li>Representatives from other programs the child may attend</li>
                </ul>
            </li>
            <li>Purpose is to discuss:
                <ul>
                    <li>The child's development and current services</li>
                    <li>Program options and eligibility requirements</li>
                    <li>Steps needed to ensure smooth transition</li>
                    <li>Timeline for transition activities</li>
                </ul>
            </li>
        </ul>
        
        <h4>3. Transition to CPSE (if applicable)</h4>
        <ul>
            <li>Service coordinator helps family refer the child to CPSE</li>
            <li>With parental consent, EI evaluation and progress reports are shared with CPSE</li>
            <li>CPSE conducts its own evaluation to determine eligibility</li>
            <li>If eligible, an Individualized Education Program (IEP) is developed</li>
            <li>Services begin at age 3 (or when the child turns 3 during summer, services can begin in September)</li>
        </ul>
        
        <h3>Service Coordinator's Role in Transition</h3>
        <ul>
            <li>Informing families about transition process and timeline</li>
            <li>Helping families understand their options and rights</li>
            <li>Coordinating information sharing between EI and future providers</li>
            <li>Arranging and facilitating the transition conference</li>
            <li>Assisting with referral to CPSE or other programs</li>
            <li>Supporting the family through the entire transition process</li>
            <li>Ensuring all required timelines are met</li>
            <li>Documenting all transition activities in the child's record</li>
        </ul>
        
        <div class="key-term">
            <h4>Summer Birthday Rule in New York</h4>
            <p>In New York State, if a child turns 3 between the months of May and August, the family may choose to have the child remain in Early Intervention until September 1st (the start of the school year) if the child is found eligible for preschool special education services. This is often called the "summer birthday rule" and provides continuity of services during summer months.</p>
        </div>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadTransitions = loadTransitions;
