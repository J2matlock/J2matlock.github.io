// Main JavaScript for Early Intervention Program Study Guide & Practice Test

document.addEventListener('DOMContentLoaded', function() {
    // Initialize navigation
    initNavigation();
    
    // Load initial content for study guide and practice test sections
    initializeContent();
});

// Navigation functionality
function initNavigation() {
    const navLinks = document.querySelectorAll('#main-nav a');
    const sections = document.querySelectorAll('.section');
    
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Remove active class from all links and sections
            navLinks.forEach(l => l.classList.remove('active'));
            sections.forEach(s => s.classList.remove('active'));
            
            // Add active class to clicked link
            this.classList.add('active');
            
            // Get the target section and activate it
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).classList.add('active');
        });
    });
}

// Initialize content for both sections
function initializeContent() {
    initStudyGuide();
    initPracticeTest();
}

// Initialize the study guide structure
function initStudyGuide() {
    const studyGuideContainer = document.getElementById('study-guide-container');
    if (!studyGuideContainer) return;
    
    // Create the basic study guide structure
    const studyGuideContent = `
        <h2>Early Intervention Program Comprehensive Study Guide</h2>
        <p>This study guide provides a comprehensive overview of the Early Intervention Program in New York State, with a focus on the role of the Early Intervention Service Coordinator in Warren County.</p>
        
        <div class="topic-nav">
            <h3>Quick Navigation</h3>
            <ul>
                <li><a href="#legal-framework-title">Legal Framework</a></li>
                <li><a href="#program-overview-title">Program Overview</a></li>
                <li><a href="#service-coordination-title">Service Coordination</a></li>
                <li><a href="#eligibility-services-title">Eligibility & Services</a></li>
                <li><a href="#ifsp-title">IFSP Development</a></li>
                <li><a href="#family-centered-title">Family-Centered Practices</a></li>
                <li><a href="#transitions-title">Transitions</a></li>
                <li><a href="#documentation-title">Documentation</a></li>
                <li><a href="#professional-responsibilities-title">Professional Responsibilities</a></li>
                <li><a href="#exam-preparation-title">Exam Preparation</a></li>
                <li><a href="#key-terms-title">Key Terms & Definitions</a></li>
            </ul>
        </div>
        
        <div class="study-guide-content">
            <!-- Each section will have its own container to be populated -->
            <section id="legal-framework" class="guide-section"></section>
            <section id="program-overview" class="guide-section"></section>
            <section id="service-coordination" class="guide-section"></section>
            <section id="eligibility-services" class="guide-section"></section>
            <section id="ifsp" class="guide-section"></section>
            <section id="family-centered" class="guide-section"></section>
            <section id="transitions" class="guide-section"></section>
            <section id="documentation" class="guide-section"></section>
            <section id="professional-responsibilities" class="guide-section"></section>
            <section id="exam-preparation" class="guide-section"></section>
            <section id="key-terms" class="guide-section"></section>
        </div>
    `;
    
    studyGuideContainer.innerHTML = studyGuideContent;
    
    // Load initial sections directly
    loadLegalFramework();
    loadProgramOverview();
    
    // Other sections will be loaded by study-guide-loader.js
}

// Initialize the practice test structure
function initPracticeTest() {
    const practiceTestContainer = document.getElementById('practice-test-container');
    if (!practiceTestContainer) return;
    
    // Practice test content will be loaded by test-loader.js
    // This is just a simple placeholder in case the loader fails
    if (practiceTestContainer.children.length === 0) {
        practiceTestContainer.innerHTML = `
            <h2>Early Intervention Program Practice Test</h2>
            <p>This practice test will help you prepare for the Early Intervention Service Coordinator Civil Service Exam.</p>
            <p>The test consists of multiple-choice questions covering all aspects of the Early Intervention Program.</p>
            <p>Loading test content...</p>
        `;
    }
}

// Legal Framework section
function loadLegalFramework() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'legal-framework';
    
    topic.innerHTML = `
        <h3 id="legal-framework-title">1. Legal Framework</h3>
        
        <div class="subtopic">
            <h4>Federal Laws and Regulations</h4>
            <p>The Early Intervention Program is governed primarily by Part C of the Individuals with Disabilities Education Act (IDEA). This federal law establishes the framework for early intervention services for infants and toddlers with disabilities and their families.</p>
            
            <h5>Key Provisions of IDEA Part C:</h5>
            <ul>
                <li>Requires states to provide early intervention services to eligible infants and toddlers (birth to age 3) with developmental delays or disabilities</li>
                <li>Mandates family-centered practices that recognize parents as equal team members</li>
                <li>Requires services to be provided in natural environments to the maximum extent appropriate</li>
                <li>Establishes procedural safeguards to protect the rights of children and families</li>
                <li>Requires the development of an Individualized Family Service Plan (IFSP) for each eligible child and family</li>
                <li>Establishes a 45-day timeline from referral to IFSP development</li>
                <li>Requires service coordination to be provided to all eligible families</li>
            </ul>
        </div>
        
        <div class="subtopic">
            <h4>New York State Laws and Regulations</h4>
            <p>In New York State, the Early Intervention Program is established under Title II-A of Article 25 of the Public Health Law and implemented through regulations in 10 NYCRR Part 69-4.</p>
            
            <h5>Key Components of New York's Early Intervention Program:</h5>
            <ul>
                <li>Designates the Department of Health as the lead agency for the Early Intervention Program</li>
                <li>Establishes the role of municipalities (counties) in program administration</li>
                <li>Defines eligibility criteria for the program</li>
                <li>Outlines the evaluation and assessment process</li>
                <li>Details IFSP requirements and service delivery standards</li>
                <li>Establishes qualifications for Early Intervention Officials (EIOs) and service providers</li>
                <li>Outlines procedures for due process and dispute resolution</li>
                <li>Establishes a system of payments, with no direct cost to families</li>
            </ul>
        </div>
    `;
    
    document.getElementById('legal-framework').replaceWith(topic);
}

// Program Overview section
function loadProgramOverview() {
    const topic = document.createElement('div');
    topic.className = 'topic';
    topic.id = 'program-overview';
    
    topic.innerHTML = `
        <h3 id="program-overview-title">2. Program Overview</h3>
        
        <div class="subtopic">
            <h4>Purpose and Goals</h4>
            <p>The Early Intervention Program is designed to enhance the development of infants and toddlers with disabilities, minimize potential developmental delays, and strengthen the capacity of families to meet their child's needs.</p>
            
            <h5>Primary Goals:</h5>
            <ul>
                <li>Enhance the development of infants and toddlers with disabilities or developmental delays</li>
                <li>Reduce educational costs by minimizing the need for special education through early intervention</li>
                <li>Maximize the potential for independent living</li>
                <li>Enhance the capacity of families to meet their child's needs</li>
            </ul>
        </div>
        
        <div class="subtopic">
            <h4>Program Structure</h4>
            <p>The Early Intervention Program operates as a partnership between state and local governments, with service delivery provided by qualified professionals in various disciplines.</p>
            
            <h5>Key Program Elements:</h5>
            <ul>
                <li><strong>State Level:</strong> The New York State Department of Health oversees the program, establishes policies, monitors implementation, and distributes federal and state funds.</li>
                <li><strong>County Level:</strong> Each municipality (county) administers the program locally through an Early Intervention Official (EIO) who is responsible for implementing the program, ensuring services are provided, and authorizing services.</li>
                <li><strong>Service Coordinators:</strong> Act as the single point of contact for families, helping them navigate the system and access services.</li>
                <li><strong>Evaluators:</strong> Qualified professionals who determine eligibility and assess the child's strengths and needs.</li>
                <li><strong>Service Providers:</strong> Professionals in various disciplines who deliver direct services to children and families.</li>
                <li><strong>Family:</strong> Recognized as the constant in the child's life and an equal member of the intervention team.</li>
            </ul>
        </div>
        
        <div class="subtopic">
            <h4>Program Process</h4>
            <p>The Early Intervention process follows a structured sequence from referral through transition.</p>
            
            <h5>Key Steps:</h5>
            <ol>
                <li><strong>Referral:</strong> Children suspected of having a developmental delay or disability are referred to the program.</li>
                <li><strong>Initial Service Coordination:</strong> A service coordinator is assigned to assist the family through the evaluation and IFSP process.</li>
                <li><strong>Evaluation:</strong> A multidisciplinary evaluation determines eligibility and assesses the child's strengths and needs.</li>
                <li><strong>IFSP Development:</strong> If eligible, an Individualized Family Service Plan is developed with the family.</li>
                <li><strong>Service Delivery:</strong> Early intervention services are provided according to the IFSP.</li>
                <li><strong>Ongoing Service Coordination:</strong> Continued support to monitor services and address emerging needs.</li>
                <li><strong>IFSP Review:</strong> The plan is reviewed at least every six months and evaluated annually.</li>
                <li><strong>Transition:</strong> Planning for the child's transition out of early intervention when approaching age three.</li>
            </ol>
        </div>
    `;
    
    document.getElementById('program-overview').replaceWith(topic);
}

// These functions will be called by the loader files
window.loadLegalFramework = loadLegalFramework;
window.loadProgramOverview = loadProgramOverview;
