// Social Casework section for the Study Guide

function loadSocialCasework() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'social-casework';
    
    topic.innerHTML = `
        <h2 id="social-casework-title">Principles and Practices of Social Casework</h2>
        <p>Social casework principles and practices form the foundation of effective service coordination in early intervention. Understanding these concepts helps Service Coordinators provide family-centered, ethical, and effective support.</p>
        
        <h3>Core Principles of Social Casework</h3>
        <ul>
            <li><strong>Respect for Dignity and Worth</strong>: Recognizing the inherent value of each individual and family</li>
            <li><strong>Self-Determination</strong>: Supporting families' right to make their own choices</li>
            <li><strong>Individualization</strong>: Tailoring approaches to each family's unique circumstances</li>
            <li><strong>Non-Judgmental Attitude</strong>: Avoiding bias and personal judgments</li>
            <li><strong>Confidentiality</strong>: Protecting private information and respecting privacy</li>
            <li><strong>Purposeful Expression of Feelings</strong>: Creating space for authentic emotional expression</li>
            <li><strong>Controlled Emotional Involvement</strong>: Maintaining appropriate professional boundaries</li>
        </ul>
        
        <h3>The Casework Process</h3>
        <div class="process-diagram">
            <h4>1. Intake and Engagement</h4>
            <ul>
                <li>Establishing rapport and trust with families</li>
                <li>Gathering initial information about needs and concerns</li>
                <li>Explaining available services and the casework process</li>
                <li>Addressing immediate concerns or crises</li>
                <li>Clarifying roles, expectations, and boundaries</li>
            </ul>
            
            <h4>2. Assessment</h4>
            <ul>
                <li>Comprehensive information gathering about family strengths and needs</li>
                <li>Identifying formal and informal support systems</li>
                <li>Evaluating family dynamics and patterns</li>
                <li>Assessing child development and needs</li>
                <li>Understanding cultural and environmental contexts</li>
            </ul>
            
            <h4>3. Planning</h4>
            <ul>
                <li>Collaborative goal-setting with families</li>
                <li>Developing specific, measurable, achievable objectives</li>
                <li>Identifying appropriate interventions and resources</li>
                <li>Creating timelines and determining responsibilities</li>
                <li>Ensuring plans reflect family priorities and cultural values</li>
            </ul>
            
            <h4>4. Implementation</h4>
            <ul>
                <li>Connecting families with services and resources</li>
                <li>Coordinating among multiple service providers</li>
                <li>Advocacy for family needs and preferences</li>
                <li>Problem-solving barriers to implementation</li>
                <li>Maintaining communication among all team members</li>
            </ul>
            
            <h4>5. Monitoring and Evaluation</h4>
            <ul>
                <li>Regular review of progress toward goals</li>
                <li>Gathering feedback from families and providers</li>
                <li>Adjusting plans as needed based on outcomes</li>
                <li>Documenting service delivery and outcomes</li>
                <li>Evaluating the effectiveness of interventions</li>
            </ul>
            
            <h4>6. Transition/Termination</h4>
            <ul>
                <li>Planning for ending or transitioning services</li>
                <li>Ensuring continuity of care when needed</li>
                <li>Evaluating overall outcomes and growth</li>
                <li>Providing closure for the professional relationship</li>
                <li>Connecting families with ongoing resources</li>
            </ul>
        </div>
        
        <h3>Essential Skills in Social Casework</h3>
        <ul>
            <li><strong>Active Listening</strong>: Fully attending to what families communicate
                <ul>
                    <li>Verbal and non-verbal cues</li>
                    <li>Underlying emotions and concerns</li>
                    <li>Cultural expressions and communication patterns</li>
                </ul>
            </li>
            <li><strong>Empathy</strong>: Understanding situations from the family's perspective
                <ul>
                    <li>Validating feelings and experiences</li>
                    <li>Demonstrating genuine concern</li>
                    <li>Recognizing cultural influences on experiences</li>
                </ul>
            </li>
            <li><strong>Critical Thinking</strong>: Analyzing complex situations
                <ul>
                    <li>Identifying patterns and connections</li>
                    <li>Evaluating multiple factors influencing family functioning</li>
                    <li>Developing creative solutions to challenges</li>
                </ul>
            </li>
            <li><strong>Cultural Competence</strong>: Working effectively across cultural differences
                <ul>
                    <li>Understanding diverse family structures and values</li>
                    <li>Adapting approaches to cultural contexts</li>
                    <li>Recognizing one's own cultural biases</li>
                </ul>
            </li>
            <li><strong>Resource Knowledge</strong>: Awareness of available services and supports
                <ul>
                    <li>Community resources and eligibility criteria</li>
                    <li>Formal and informal support networks</li>
                    <li>Navigation of service systems</li>
                </ul>
            </li>
        </ul>
        
        <h3>Ethical Considerations in Social Casework</h3>
        <ul>
            <li><strong>Confidentiality and Privacy</strong>
                <ul>
                    <li>Protecting personal information</li>
                    <li>Understanding mandated reporting requirements</li>
                    <li>Securing proper consent for information sharing</li>
                </ul>
            </li>
            <li><strong>Boundary Management</strong>
                <ul>
                    <li>Maintaining professional relationships</li>
                    <li>Avoiding dual relationships</li>
                    <li>Setting appropriate limits while remaining supportive</li>
                </ul>
            </li>
            <li><strong>Cultural Sensitivity</strong>
                <ul>
                    <li>Respecting diverse values and practices</li>
                    <li>Avoiding imposing personal or dominant cultural values</li>
                    <li>Adapting services to cultural contexts</li>
                </ul>
            </li>
            <li><strong>Self-Determination</strong>
                <ul>
                    <li>Supporting family decision-making</li>
                    <li>Providing information without imposing choices</li>
                    <li>Balancing autonomy with child welfare concerns</li>
                </ul>
            </li>
            <li><strong>Professional Competence</strong>
                <ul>
                    <li>Working within scope of training and expertise</li>
                    <li>Seeking supervision when needed</li>
                    <li>Continuing professional development</li>
                </ul>
            </li>
        </ul>
        
        <h3>Documentation in Social Casework</h3>
        <ul>
            <li><strong>Purpose of Documentation</strong>
                <ul>
                    <li>Creating a record of services and interactions</li>
                    <li>Supporting continuity of care</li>
                    <li>Meeting legal and regulatory requirements</li>
                    <li>Facilitating communication among team members</li>
                </ul>
            </li>
            <li><strong>Key Elements of Quality Documentation</strong>
                <ul>
                    <li>Clarity and objectivity</li>
                    <li>Thorough but concise information</li>
                    <li>Timeliness and accuracy</li>
                    <li>Focus on relevant information</li>
                    <li>Distinction between facts and professional judgments</li>
                </ul>
            </li>
            <li><strong>Common Documentation Types</strong>
                <ul>
                    <li>Assessment reports</li>
                    <li>Service plans and updates</li>
                    <li>Progress notes</li>
                    <li>Referral and transition documents</li>
                    <li>Correspondence with families and providers</li>
                </ul>
            </li>
        </ul>
        
        <h3>Family-Centered Practice in Social Casework</h3>
        <ul>
            <li><strong>Core Elements</strong>
                <ul>
                    <li>Recognizing the family as the constant in the child's life</li>
                    <li>Facilitating family-professional collaboration</li>
                    <li>Honoring family diversity and strengths</li>
                    <li>Respecting family choices and decision-making</li>
                </ul>
            </li>
            <li><strong>Implementation Strategies</strong>
                <ul>
                    <li>Conducting meetings at times convenient for families</li>
                    <li>Using language that is accessible and respectful</li>
                    <li>Including extended family members when appropriate</li>
                    <li>Focusing on family-identified priorities</li>
                    <li>Building on family strengths and natural supports</li>
                </ul>
            </li>
        </ul>
    `;
    
    document.getElementById('study-guide-container').appendChild(topic);
}

// Make function available globally
window.loadSocialCasework = loadSocialCasework;
