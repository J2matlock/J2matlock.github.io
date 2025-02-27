// Service Coordination section for the Study Guide

function loadServiceCoordination() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'service-coordination';
    
    topic.innerHTML = `
        <h2 id="service-coordination-title">Service Coordination Process</h2>
        <p>Service coordination is a core component of the Early Intervention Program. The Service Coordinator acts as the single point of contact for the family and is responsible for guiding them through the early intervention system.</p>
        
        <h3>Types of Service Coordination</h3>
        <ul>
            <li><strong>Initial Service Coordination</strong>: Begins at referral and continues until the IFSP is developed
                <ul>
                    <li>Assigned by the Early Intervention Official (EIO)</li>
                    <li>Guides family through evaluation and initial IFSP process</li>
                    <li>Provides information about program and family rights</li>
                </ul>
            </li>
            <li><strong>Ongoing Service Coordination</strong>: Begins after IFSP is developed
                <ul>
                    <li>Selected by the family during the IFSP meeting</li>
                    <li>May be the same person as the initial service coordinator or someone new</li>
                    <li>Coordinates and monitors service delivery until the child exits the program</li>
                </ul>
            </li>
        </ul>
        
        <h3>Service Coordinator Responsibilities</h3>
        <ul>
            <li>Informing families of their rights and the complaint process</li>
            <li>Coordinating evaluations and assessments</li>
            <li>Facilitating development of the IFSP</li>
            <li>Assisting families in identifying available service providers</li>
            <li>Coordinating and monitoring delivery of services</li>
            <li>Informing families of advocacy services</li>
            <li>Coordinating with medical and health providers</li>
            <li>Facilitating development of transition plan</li>
            <li>Maintaining communication between all team members</li>
        </ul>
        
        <h3>Key Steps in the Service Coordination Process</h3>
        <h4>1. Initial Contact and Referral</h4>
        <ul>
            <li>Service coordinator contacts family within 2 working days of assignment</li>
            <li>Provides information about the EIP and family rights</li>
            <li>Discusses the evaluation process and helps select evaluators</li>
            <li>Obtains parental consent for evaluation and information sharing</li>
            <li>Gathers information about the family's concerns and insurance</li>
        </ul>
        
        <h4>2. Evaluation Process</h4>
        <ul>
            <li>Assists family in selecting evaluation agency/team</li>
            <li>Ensures evaluators receive relevant records with parental consent</li>
            <li>May attend evaluation if family wishes</li>
            <li>Reviews evaluation results with family</li>
            <li>Helps family prepare for IFSP meeting if child is eligible</li>
        </ul>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadServiceCoordination = loadServiceCoordination;
