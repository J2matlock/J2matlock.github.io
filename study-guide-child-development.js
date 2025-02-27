// Child Development section for the Study Guide

function loadChildDevelopment() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'child-development';
    
    topic.innerHTML = `
        <h2 id="child-development-title">Child Development</h2>
        <p>Understanding child development is crucial for Early Intervention Service Coordinators to recognize typical milestones, identify potential delays, and support appropriate intervention strategies.</p>
        
        <h3>Developmental Domains</h3>
        <ul>
            <li><strong>Physical/Motor Development</strong>
                <ul>
                    <li><em>Gross Motor</em>: Large muscle movements (sitting, crawling, walking)</li>
                    <li><em>Fine Motor</em>: Small muscle movements (grasping, pincer grasp, using tools)</li>
                </ul>
            </li>
            <li><strong>Cognitive Development</strong>
                <ul>
                    <li>Problem-solving abilities</li>
                    <li>Memory and attention</li>
                    <li>Understanding cause and effect</li>
                </ul>
            </li>
            <li><strong>Communication Development</strong>
                <ul>
                    <li><em>Receptive</em>: Understanding language</li>
                    <li><em>Expressive</em>: Using language to communicate</li>
                    <li>Verbal and non-verbal communication skills</li>
                </ul>
            </li>
            <li><strong>Social-Emotional Development</strong>
                <ul>
                    <li>Attachment and bonding</li>
                    <li>Emotional regulation</li>
                    <li>Social interaction skills</li>
                </ul>
            </li>
            <li><strong>Adaptive Development</strong>
                <ul>
                    <li>Self-help skills</li>
                    <li>Daily living activities</li>
                </ul>
            </li>
        </ul>
        
        <h3>Key Developmental Milestones (0-3 years)</h3>
        
        <h4>Infancy (0-12 months)</h4>
        <div class="milestone-table">
            <table>
                <tr>
                    <th>Age</th>
                    <th>Physical/Motor</th>
                    <th>Cognitive</th>
                    <th>Communication</th>
                    <th>Social-Emotional</th>
                </tr>
                <tr>
                    <td>2 months</td>
                    <td>Holds head up briefly, makes smoother movements</td>
                    <td>Follows moving objects with eyes</td>
                    <td>Coos, makes gurgling sounds</td>
                    <td>Begins to smile socially</td>
                </tr>
                <tr>
                    <td>4 months</td>
                    <td>Pushes up on arms when on stomach, rolls from front to back</td>
                    <td>Reaches for and grasps objects</td>
                    <td>Babbles with expression, imitates sounds</td>
                    <td>Smiles spontaneously, enjoys social play</td>
                </tr>
                <tr>
                    <td>6 months</td>
                    <td>Sits with support, begins to sit unsupported</td>
                    <td>Passes objects hand to hand</td>
                    <td>Responds to sounds, begins to string vowels together</td>
                    <td>Recognizes familiar faces, responds to emotions</td>
                </tr>
                <tr>
                    <td>9 months</td>
                    <td>Sits without support, crawls, may stand with support</td>
                    <td>Explores objects in different ways</td>
                    <td>Understands "no," makes many different sounds</td>
                    <td>Shows anxiety with strangers, has favorite toys</td>
                </tr>
                <tr>
                    <td>12 months</td>
                    <td>Pulls to stand, walks holding furniture, may take first steps</td>
                    <td>Uses objects correctly, follows simple directions</td>
                    <td>Says "mama" and "dada," tries to imitate words</td>
                    <td>Plays interactive games like peek-a-boo, shows preferences</td>
                </tr>
            </table>
        </div>
        
        <h4>Toddlerhood (12-36 months)</h4>
        <div class="milestone-table">
            <table>
                <tr>
                    <th>Age</th>
                    <th>Physical/Motor</th>
                    <th>Cognitive</th>
                    <th>Communication</th>
                    <th>Social-Emotional</th>
                </tr>
                <tr>
                    <td>18 months</td>
                    <td>Walks independently, begins to run, climbs furniture</td>
                    <td>Points to show things, follows 1-step verbal commands</td>
                    <td>Uses 5-20 words, points to body parts when asked</td>
                    <td>Shows independence, begins defiant behavior</td>
                </tr>
                <tr>
                    <td>24 months</td>
                    <td>Runs, kicks a ball, climbs stairs with help</td>
                    <td>Sorts shapes/colors, plays simple make-believe</td>
                    <td>Uses 2-word phrases, follows 2-step instructions</td>
                    <td>Parallel play emerges, copies others' behavior</td>
                </tr>
                <tr>
                    <td>36 months</td>
                    <td>Pedals tricycle, climbs well, runs easily</td>
                    <td>Completes puzzles with 3-4 pieces, engages in complex pretend play</td>
                    <td>Uses 3-5 word sentences, follows 3-step instructions</td>
                    <td>Takes turns, expresses affection, shows wider range of emotions</td>
                </tr>
            </table>
        </div>
        
        <h3>Developmental Theories</h3>
        
        <h4>Piaget's Cognitive Development Theory</h4>
        <ul>
            <li><strong>Sensorimotor Stage (0-2 years)</strong>: Learning through senses and actions</li>
            <li><strong>Preoperational Stage (2-7 years)</strong>: Beginning of symbolic thinking</li>
        </ul>
        
        <h4>Erikson's Psychosocial Development Theory</h4>
        <ul>
            <li><strong>Trust vs. Mistrust (0-18 months)</strong>: Developing trust when needs are met</li>
            <li><strong>Autonomy vs. Shame and Doubt (18 months-3 years)</strong>: Developing independence and self-control</li>
        </ul>
        
        <h4>Vygotsky's Sociocultural Theory</h4>
        <ul>
            <li><strong>Zone of Proximal Development</strong>: Gap between what a child can do independently versus with help</li>
            <li><strong>Scaffolding</strong>: Support provided to help children accomplish tasks</li>
        </ul>
        
        <h3>Red Flags for Developmental Delays</h3>
        <div class="red-flags">
            <h4>By 6 months</h4>
            <ul>
                <li>Doesn't try to get objects within reach</li>
                <li>Shows no affection for caregivers</li>
                <li>Doesn't respond to sounds</li>
                <li>Cannot roll over in either direction</li>
            </ul>
            
            <h4>By 12 months</h4>
            <ul>
                <li>Doesn't crawl</li>
                <li>Cannot stand when supported</li>
                <li>Doesn't search for objects that are hidden</li>
                <li>No single words ("mama" or "dada")</li>
                <li>Doesn't use gestures like waving or shaking head</li>
            </ul>
            
            <h4>By 18 months</h4>
            <ul>
                <li>Doesn't point to show things to others</li>
                <li>Cannot walk</li>
                <li>Doesn't know what familiar objects are for</li>
                <li>Doesn't imitate others</li>
                <li>Doesn't gain new words</li>
            </ul>
            
            <h4>By 24 months</h4>
            <ul>
                <li>Doesn't use 2-word phrases</li>
                <li>Doesn't follow simple instructions</li>
                <li>Doesn't imitate actions or words</li>
                <li>Cannot push a wheeled toy</li>
                <li>Loses skills once had</li>
            </ul>
        </div>
        
        <h3>Impact of Environment on Development</h3>
        <ul>
            <li><strong>Protective Factors</strong>: Elements that support healthy development
                <ul>
                    <li>Secure attachment relationships</li>
                    <li>Extended family support</li>
                    <li>Adequate nutrition and health care</li>
                    <li>Opportunities for play and exploration</li>
                </ul>
            </li>
            <li><strong>Risk Factors</strong>: Elements that may impede development
                <ul>
                    <li>Poverty and resource limitations</li>
                    <li>Exposure to trauma or violence</li>
                    <li>Parental mental health issues</li>
                    <li>Limited access to developmental support</li>
                </ul>
            </li>
        </ul>
        
        <h3>Role of Play in Development</h3>
        <ul>
            <li><strong>Types of Play</strong>
                <ul>
                    <li>Exploratory Play: Sensory investigation of objects</li>
                    <li>Functional Play: Using toys as intended</li>
                    <li>Construction Play: Building and creating</li>
                    <li>Pretend Play: Using symbols and imagination</li>
                    <li>Social Play: Interactive play with others</li>
                </ul>
            </li>
            <li><strong>Benefits of Play</strong>
                <ul>
                    <li>Promotes development across all domains</li>
                    <li>Strengthens neural connections</li>
                    <li>Provides context for learning skills</li>
                    <li>Allows practice of social skills</li>
                    <li>Supports emotional regulation and coping</li>
                </ul>
            </li>
        </ul>
    `;
    
    document.getElementById('study-guide-container').appendChild(topic);
}

// Make function available globally
window.loadChildDevelopment = loadChildDevelopment;
