// Documentation and Confidentiality section for the Study Guide

function loadDocumentation() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'documentation';
    
    topic.innerHTML = `
        <h2 id="documentation-title">Documentation & Confidentiality</h2>
        <p>Accurate documentation and maintaining confidentiality are essential responsibilities for Early Intervention Service Coordinators.</p>
        
        <h3>Documentation Requirements</h3>
        <ul>
            <li><strong>Service Coordination Notes</strong>:
                <ul>
                    <li>Must document all contacts, activities, and services provided</li>
                    <li>Include date, duration, type of contact, persons involved, and outcome</li>
                    <li>Notes should be factual, objective, and professional</li>
                    <li>Must be maintained for each child in the program</li>
                </ul>
            </li>
            <li><strong>Required Documentation</strong>:
                <ul>
                    <li>Referral documentation</li>
                    <li>Parent consent forms</li>
                    <li>Evaluation reports</li>
                    <li>IFSP and review documents</li>
                    <li>Progress notes from service providers</li>
                    <li>Correspondence related to the child</li>
                    <li>Transition plan and related activities</li>
                    <li>Records of family contacts and meetings</li>
                </ul>
            </li>
            <li><strong>Documentation Timeline</strong>:
                <ul>
                    <li>Notes should be completed as soon as possible after each activity</li>
                    <li>Documentation must be submitted according to county timelines</li>
                    <li>All required information must be entered into the state's data system</li>
                </ul>
            </li>
        </ul>
        
        <h3>Documentation Best Practices</h3>
        <ul>
            <li><strong>Clarity and Accuracy</strong>: Information should be clear, accurate, and complete</li>
            <li><strong>Objectivity</strong>: Focus on observable facts, not opinions or judgments</li>
            <li><strong>Relevance</strong>: Include information that is relevant to the child's services</li>
            <li><strong>Specificity</strong>: Use specific, descriptive language rather than generalizations</li>
            <li><strong>Timeliness</strong>: Complete documentation promptly while details are fresh</li>
            <li><strong>Organization</strong>: Maintain records in a systematic, organized manner</li>
            <li><strong>Professionalism</strong>: Use professional language and avoid jargon</li>
        </ul>
        
        <h3>Confidentiality Requirements</h3>
        <ul>
            <li><strong>Legal Basis</strong>:
                <ul>
                    <li>IDEA requirements</li>
                    <li>Family Educational Rights and Privacy Act (FERPA)</li>
                    <li>Health Insurance Portability and Accountability Act (HIPAA)</li>
                    <li>New York State Public Health Law</li>
                </ul>
            </li>
            <li><strong>Protected Information</strong>:
                <ul>
                    <li>Any personally identifiable information about the child or family</li>
                    <li>Includes name, address, social security numbers, and other identifying data</li>
                    <li>Medical information, evaluation results, and service records</li>
                    <li>Family-provided information</li>
                </ul>
            </li>
            <li><strong>Parental Consent Requirements</strong>:
                <ul>
                    <li>Written consent required before sharing information with anyone outside the IFSP team</li>
                    <li>Consent forms must specify what information will be shared and with whom</li>
                    <li>Parents can revoke consent at any time</li>
                    <li>Limited exceptions for health and safety emergencies</li>
                </ul>
            </li>
        </ul>
        
        <h3>Maintaining Confidentiality in Practice</h3>
        <ul>
            <li><strong>Secure Storage</strong>: 
                <ul>
                    <li>Physical records kept in locked cabinets</li>
                    <li>Electronic records protected with passwords and encryption</li>
                    <li>Access limited to authorized personnel only</li>
                </ul>
            </li>
            <li><strong>Communication Safeguards</strong>:
                <ul>
                    <li>Avoid discussing cases in public places</li>
                    <li>Use secure methods for transmitting information (encrypted email, secure fax)</li>
                    <li>Verify recipient identity before sharing information</li>
                    <li>Use only initials or case numbers in emails when possible</li>
                </ul>
            </li>
            <li><strong>Records Access and Management</strong>:
                <ul>
                    <li>Parents have the right to inspect and review all records</li>
                    <li>Parents can request amendments to records they believe are inaccurate</li>
                    <li>Records must be retained according to state requirements (typically 6 years or until child turns 21)</li>
                    <li>Records must be disposed of securely when retention period ends</li>
                </ul>
            </li>
        </ul>
        
        <div class="key-term">
            <h4>Exceptions to Confidentiality Requirements</h4>
            <p>While confidentiality is generally strictly maintained, there are limited exceptions, including: mandatory reporting of suspected child abuse/neglect, health and safety emergencies, and certain legal proceedings. Service coordinators should be familiar with these exceptions and consult with supervisors when uncertain about disclosure requirements.</p>
        </div>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadDocumentation = loadDocumentation;
