// Professional Responsibilities section for the Study Guide

function loadProfessionalResponsibilities() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'professional-responsibilities';
    
    topic.innerHTML = `
        <h2 id="professional-responsibilities-title">Professional Responsibilities</h2>
        <p>Early Intervention Service Coordinators have significant professional responsibilities that extend beyond the basic functions of coordinating services.</p>
        
        <h3>Ethical Standards</h3>
        <ul>
            <li><strong>Respect for Families</strong>: Treating families with dignity and respect regardless of background</li>
            <li><strong>Confidentiality</strong>: Protecting private information and obtaining consent before sharing</li>
            <li><strong>Professional Boundaries</strong>: Maintaining appropriate relationships with families</li>
            <li><strong>Honesty and Integrity</strong>: Being truthful and reliable in all professional activities</li>
            <li><strong>Competence</strong>: Working within one's scope of practice and knowledge</li>
            <li><strong>Avoiding Conflicts of Interest</strong>: Preventing personal interests from interfering with professional duties</li>
            <li><strong>Advocacy</strong>: Supporting the rights and needs of children and families</li>
        </ul>
        
        <h3>Communication Skills</h3>
        <ul>
            <li><strong>Active Listening</strong>: Fully concentrating on what is being said rather than passively hearing</li>
            <li><strong>Clear Expression</strong>: Communicating information in understandable terms</li>
            <li><strong>Cultural Sensitivity</strong>: Adapting communication style to respect cultural differences</li>
            <li><strong>Conflict Resolution</strong>: Helping resolve disagreements constructively</li>
            <li><strong>Written Communication</strong>: Writing clear, accurate, and professional documentation</li>
            <li><strong>Facilitation Skills</strong>: Guiding meetings and discussions effectively</li>
        </ul>
        
        <h3>Professional Development</h3>
        <ul>
            <li><strong>Continuing Education</strong>: Participating in ongoing learning opportunities</li>
            <li><strong>Staying Current</strong>: Keeping up with new research, practices, and regulations</li>
            <li><strong>Self-Reflection</strong>: Examining one's own work and seeking improvement</li>
            <li><strong>Seeking Supervision</strong>: Consulting with supervisors on challenging cases</li>
            <li><strong>Peer Learning</strong>: Collaborating with colleagues to share knowledge</li>
        </ul>
        
        <h3>Team Collaboration</h3>
        <ul>
            <li><strong>Interdisciplinary Cooperation</strong>: Working effectively with professionals from other disciplines</li>
            <li><strong>Respecting Others' Expertise</strong>: Valuing the knowledge and skills of team members</li>
            <li><strong>Information Sharing</strong>: Ensuring all team members have necessary information</li>
            <li><strong>Coordinating Efforts</strong>: Helping align services toward common goals</li>
            <li><strong>Resolving Team Conflicts</strong>: Addressing disagreements professionally</li>
        </ul>
        
        <h3>Service Coordination in Warren County</h3>
        <ul>
            <li><strong>Local Resources</strong>: Familiarity with Warren County's services and resources</li>
            <li><strong>Community Partnerships</strong>: Working with local agencies and organizations</li>
            <li><strong>Geographic Considerations</strong>: Understanding the rural/urban mix and transportation issues</li>
            <li><strong>County Procedures</strong>: Following Warren County's specific protocols and requirements</li>
            <li><strong>Local Reporting</strong>: Completing documentation according to county standards</li>
        </ul>
        
        <h3>Self-Care and Stress Management</h3>
        <ul>
            <li><strong>Recognizing Stress</strong>: Being aware of signs of burnout and compassion fatigue</li>
            <li><strong>Setting Boundaries</strong>: Maintaining appropriate work-life balance</li>
            <li><strong>Time Management</strong>: Organizing work efficiently to prevent overload</li>
            <li><strong>Seeking Support</strong>: Utilizing supervision and peer support</li>
            <li><strong>Wellness Practices</strong>: Engaging in activities that promote personal wellbeing</li>
        </ul>
        
        <div class="key-term">
            <h4>Professional Boundaries</h4>
            <p>Service coordinators must maintain professional boundaries while building supportive relationships with families. This means being friendly and empathetic without becoming friends, avoiding dual relationships (such as providing other services to the family outside of service coordination), and maintaining objectivity. Clear boundaries protect both the family and the professional while ensuring ethical service delivery.</p>
        </div>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadProfessionalResponsibilities = loadProfessionalResponsibilities;
