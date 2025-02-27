// Family-Centered Practices section for the Study Guide

function loadFamilyCentered() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'family-centered';
    
    topic.innerHTML = `
        <h2 id="family-centered-title">Family-Centered Practices</h2>
        <p>Early Intervention is explicitly family-centered, recognizing that families are the constant in a child's life and the primary influence on development.</p>
        
        <h3>Principles of Family-Centered Practice</h3>
        <ul>
            <li><strong>Families as Partners</strong>: Parents and caregivers are equal team members and the primary decision-makers</li>
            <li><strong>Respecting Diversity</strong>: Each family's cultural background, values, and beliefs are respected</li>
            <li><strong>Individualized Approach</strong>: Services are tailored to each family's unique circumstances</li>
            <li><strong>Building on Strengths</strong>: Services focus on family capabilities and resources, not deficits</li>
            <li><strong>Supporting Competence</strong>: Interventions aim to build family confidence and competence</li>
            <li><strong>Promoting Choice</strong>: Families make informed choices about services and involvement</li>
            <li><strong>Collaborative Relationships</strong>: Professionals and families work as a team</li>
        </ul>
        
        <h3>Family-Centered Communication</h3>
        <ul>
            <li><strong>Active Listening</strong>: Giving full attention and responding appropriately</li>
            <li><strong>Jargon-Free Language</strong>: Using plain language instead of technical terms</li>
            <li><strong>Cultural Sensitivity</strong>: Respecting cultural norms and communication styles</li>
            <li><strong>Translation/Interpretation</strong>: Providing services in the family's primary language</li>
            <li><strong>Regular Updates</strong>: Keeping families informed about their child's progress</li>
            <li><strong>Open Communication</strong>: Creating a safe space for families to express concerns</li>
        </ul>
        
        <h3>Supporting Family Involvement</h3>
        <ul>
            <li><strong>Flexible Scheduling</strong>: Arranging meetings and services around family availability</li>
            <li><strong>Parent Training</strong>: Teaching families strategies to support their child's development</li>
            <li><strong>Information Sharing</strong>: Providing families with relevant resources and information</li>
            <li><strong>Identifying Natural Learning Opportunities</strong>: Helping families incorporate interventions into daily routines</li>
            <li><strong>Respecting Family Decisions</strong>: Accepting when families choose not to participate in certain aspects</li>
        </ul>
        
        <h3>Cultural Competence</h3>
        <ul>
            <li><strong>Self-Awareness</strong>: Recognizing one's own cultural biases and perspectives</li>
            <li><strong>Cultural Knowledge</strong>: Learning about different cultural practices and beliefs</li>
            <li><strong>Adapting Practice</strong>: Modifying approaches to align with family cultural values</li>
            <li><strong>Respecting Differences</strong>: Accepting diverse parenting styles and family structures</li>
            <li><strong>Using Cultural Brokers</strong>: Engaging community members who can bridge cultural gaps</li>
        </ul>
        
        <h3>Family-Professional Partnerships</h3>
        <ul>
            <li><strong>Mutual Respect</strong>: Valuing both family expertise and professional knowledge</li>
            <li><strong>Shared Decision-Making</strong>: Jointly determining goals and strategies</li>
            <li><strong>Trust Building</strong>: Maintaining confidentiality and following through on commitments</li>
            <li><strong>Recognizing Family Expertise</strong>: Acknowledging parents as experts on their child</li>
            <li><strong>Supporting Family Advocacy</strong>: Empowering families to advocate for their child's needs</li>
        </ul>
        
        <div class="key-term">
            <h4>Coaching Model</h4>
            <p>In family-centered early intervention, professionals often use a coaching model rather than direct therapy. This involves teaching, demonstrating, and supporting parents/caregivers to implement intervention strategies during everyday activities, building the family's capacity to support their child's development between visits.</p>
        </div>
    `;
    
    document.getElementById('study-guide').appendChild(topic);
}

// Make function available globally
window.loadFamilyCentered = loadFamilyCentered;
