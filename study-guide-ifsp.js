// IFSP section for the Study Guide

function loadIFSP() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'ifsp';
    
    topic.innerHTML = `
        <h2 id="ifsp-title">Individualized Family Service Plan (IFSP)</h2>
        <p>The IFSP is the cornerstone document that guides early intervention services for each eligible child and family.</p>
        
        <h3>IFSP Definition and Purpose</h3>
        <ul>
            <li>A written plan developed by a multidisciplinary team including the family</li>
            <li>Documents the early intervention services needed by the child and family</li>
            <li>Serves as both a process and a document to guide service delivery</li>
            <li>Family-centered and based on the family's priorities and concerns</li>
            <li>Must be developed within 45 days of referral for eligible children</li>
        </ul>
        
        <h3>Required Components of the IFSP</h3>
        <ol>
            <li><strong>Child Information</strong>: Name, date of birth, address, etc.</li>
            <li><strong>Family Information</strong>: Family's resources, priorities, and concerns (with consent)</li>
            <li><strong>Service Coordinator</strong>: Name and contact information</li>
            <li><strong>Evaluation Results</strong>: Summary of the child's present levels of development</li>
            <li><strong>Outcomes</strong>: Measurable results expected to be achieved for the child and family</li>
            <li><strong>Early Intervention Services</strong>: 
                <ul>
                    <li>Type of services (e.g., speech therapy, physical therapy)</li>
                    <li>Frequency (how often services will be provided)</li>
                    <li>Length (duration of each session)</li>
                    <li>Intensity (individual or group)</li>
                    <li>Method of delivery</li>
                    <li>Location (where services will be provided)</li>
                    <li>Payment arrangements</li>
                    <li>Projected start dates and duration</li>
                </ul>
            </li>
            <li><strong>Natural Environments</strong>: Statement justifying the extent to which services will not be provided in a natural environment, if applicable</li>
            <li><strong>Other Services</strong>: Medical and other services the child needs but are not required under EIP</li>
            <li><strong>Transition Plan</strong>: Steps to support the child's transition to preschool or other services</li>
        </ol>
        
        <h3>The IFSP Process</h3>
        
        <h4>1. IFSP Meeting</h4>
        <ul>
            <li>Must be conducted in the family's native language or mode of communication</li>
            <li>Required participants:
                <ul>
                    <li>Parent(s)/guardian(s)</li>
                    <li>Service coordinator</li>
                    <li>Person(s) involved in evaluation/assessment</li>
                    <li>Early Intervention Official or designee</li>
                    <li>Other family members, advocates, or service providers (as requested by parents)</li>
                </ul>
            </li>
            <li>Meeting arrangements must be convenient for the family</li>
            <li>Written notice must be provided to all participants</li>
        </ul>
        
        <h4>2. Developing IFSP Outcomes</h4>
        <ul>
            <li>Outcomes should be functional and meaningful to the child and family</li>
            <li>Based on the family's priorities and concerns</li>
            <li>Written in jargon-free, family-friendly language</li>
            <li>Must include criteria and timelines to determine progress</li>
            <li>Should address the child's development in relevant domains</li>
        </ul>
        
        <h4>3. IFSP Reviews and Updates</h4>
        <ul>
            <li>IFSP must be reviewed at least every 6 months</li>
            <li>Complete evaluation of the IFSP must occur at least annually</li>
            <li>Reviews can occur more frequently if requested by the family</li>
            <li>Changes to the IFSP require parental consent</li>
            <li>All review meetings must follow the same procedural requirements as the initial IFSP meeting</li>
        </ul>
        
        <div class="key-term">
            <h4>Functional Outcomes</h4>
            <p>IFSP outcomes should be functional, meaning they relate to the child's participation in everyday routines and activities. Examples: "Joey will use words or signs to communicate his needs during mealtime," or "Maria will be able to transition between activities without becoming upset."</p>
        </div>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadIFSP = loadIFSP;
