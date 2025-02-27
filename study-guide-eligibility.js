// Eligibility and Services section for the Study Guide

function loadEligibilityServices() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'eligibility-services';
    
    topic.innerHTML = `
        <h2 id="eligibility-services-title">Eligibility & Services</h2>
        <p>Understanding eligibility criteria and available services is essential for Early Intervention Service Coordinators.</p>
        
        <h3>Eligibility Criteria</h3>
        <p>Children from birth to age three may be eligible for the Early Intervention Program if they meet one of the following criteria:</p>
        
        <h4>1. Developmental Delay</h4>
        <p>A child has a developmental delay if they meet any of these criteria:</p>
        <ul>
            <li>A 33% delay in one developmental area</li>
            <li>A 25% delay in each of two developmental areas</li>
            <li>A 12-month delay in one developmental area</li>
            <li>Standardized test scores of 2.0 standard deviations below the mean in one area</li>
            <li>Standardized test scores of 1.5 standard deviations below the mean in each of two areas</li>
        </ul>
        
        <h4>2. Diagnosed Condition</h4>
        <p>A child with a diagnosed physical or mental condition that has a high probability of resulting in developmental delay, such as:</p>
        <ul>
            <li>Genetic disorders (e.g., Down syndrome, fragile X syndrome)</li>
            <li>Neurological disorders (e.g., cerebral palsy)</li>
            <li>Sensory impairments (e.g., hearing loss, vision impairment)</li>
            <li>Congenital disorders (e.g., cleft palate, spina bifida)</li>
            <li>Severe attachment disorders</li>
            <li>Autism spectrum disorders</li>
            <li>Fetal alcohol spectrum disorders</li>
        </ul>
        
        <h3>Developmental Areas Assessed</h3>
        <ul>
            <li><strong>Cognitive Development</strong>: Thinking, learning, problem-solving</li>
            <li><strong>Physical Development</strong>: 
                <ul>
                    <li>Gross motor skills (large movements, coordination)</li>
                    <li>Fine motor skills (hand-eye coordination, manipulation)</li>
                </ul>
            </li>
            <li><strong>Communication Development</strong>: 
                <ul>
                    <li>Receptive language (understanding)</li>
                    <li>Expressive language (speaking, gesturing)</li>
                </ul>
            </li>
            <li><strong>Social-Emotional Development</strong>: Relating to others, expressing emotions, self-regulation</li>
            <li><strong>Adaptive Development</strong>: Self-help skills like feeding, dressing</li>
        </ul>
        
        <h3>Early Intervention Services</h3>
        <p>Once eligible, children may receive various services based on their identified needs:</p>
        
        <ul>
            <li><strong>Special Instruction</strong>: Educational services to promote development</li>
            <li><strong>Speech-Language Therapy</strong>: Addressing communication delays</li>
            <li><strong>Physical Therapy</strong>: Improving motor development and mobility</li>
            <li><strong>Occupational Therapy</strong>: Developing fine motor, sensory, and daily living skills</li>
            <li><strong>Psychological Services</strong>: Supporting social-emotional development</li>
            <li><strong>Social Work Services</strong>: Family counseling and support</li>
            <li><strong>Vision Services</strong>: For children with visual impairments</li>
            <li><strong>Audiology Services</strong>: For children with hearing loss</li>
            <li><strong>Assistive Technology</strong>: Devices and services to increase functional capabilities</li>
            <li><strong>Nutrition Services</strong>: Addressing feeding and nutritional needs</li>
            <li><strong>Transportation</strong>: When necessary to access services</li>
            <li><strong>Service Coordination</strong>: Coordinating all aspects of the child's services</li>
        </ul>
        
        <div class="key-term">
            <h4>Natural Environments</h4>
            <p>Early intervention services must be provided in "natural environments" to the maximum extent appropriate. Natural environments are settings that are natural or typical for same-aged peers without disabilities, such as the home, childcare centers, playgrounds, and community locations.</p>
        </div>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadEligibilityServices = loadEligibilityServices;
