// Test Loader - Main script to connect all test sections

document.addEventListener('DOMContentLoaded', function() {
    // Set up the practice test once the base DOM content is loaded
    setupPracticeTest();
});

function setupPracticeTest() {
    const testContainer = document.getElementById('practice-test-container');
    if (!testContainer) return;
    
    // Create test navigation
    createTestNavigation();
    
    // Create test sections containers
    createTestSections();
    
    // Attempt to load all test sections - we use the try/catch approach
    // since some sections might not be loaded yet
    loadAllTestSections();
    
    // Set up event handlers for test navigation
    setupTestNavigationHandlers();
}

function createTestNavigation() {
    const testNav = document.createElement('div');
    testNav.className = 'test-nav';
    testNav.innerHTML = `
        <h2>Practice Test Sections</h2>
        <ul>
            <li><button id="nav-section1" class="test-nav-button active">1. Legal Framework</button></li>
            <li><button id="nav-section2" class="test-nav-button">2. Service Coordination</button></li>
            <li><button id="nav-section3" class="test-nav-button">3. Eligibility & Services</button></li>
            <li><button id="nav-section4" class="test-nav-button">4. IFSP Development</button></li>
            <li><button id="nav-section5" class="test-nav-button">5. Family-Centered Practices</button></li>
            <li><button id="nav-section6" class="test-nav-button">6. Transitions</button></li>
            <li><button id="nav-section7" class="test-nav-button">7. Documentation</button></li>
            <li><button id="nav-section8" class="test-nav-button">8. Professional Responsibilities</button></li>
        </ul>
    `;
    
    document.getElementById('practice-test-container').appendChild(testNav);
}

function createTestSections() {
    // Create containers for each section
    const sections = [
        {id: 'section1', title: 'Section 1: Legal Framework'},
        {id: 'section2', title: 'Section 2: Service Coordination'},
        {id: 'section3', title: 'Section 3: Eligibility & Services'},
        {id: 'section4', title: 'Section 4: IFSP Development'},
        {id: 'section5', title: 'Section 5: Family-Centered Practices'},
        {id: 'section6', title: 'Section 6: Transitions'},
        {id: 'section7', title: 'Section 7: Documentation'},
        {id: 'section8', title: 'Section 8: Professional Responsibilities'}
    ];
    
    const testContent = document.createElement('div');
    testContent.className = 'test-content';
    
    sections.forEach(section => {
        const sectionDiv = document.createElement('div');
        sectionDiv.id = section.id;
        sectionDiv.className = 'test-section';
        sectionDiv.style.display = section.id === 'section1' ? 'block' : 'none';
        
        testContent.appendChild(sectionDiv);
    });
    
    document.getElementById('practice-test-container').appendChild(testContent);
}

function loadAllTestSections() {
    // Load all test sections that have been created
    // We use try/catch to handle cases where the functions might not be defined yet
    
    // Section 1: Legal Framework
    try {
        // First check if the base function exists
        if (typeof window.loadSection1Questions === 'function') {
            window.loadSection1Questions();
            
            // Now try to add additional questions if those functions exist
            if (typeof window.addSection1AdditionalQuestions === 'function') {
                window.addSection1AdditionalQuestions();
            }
            
            if (typeof window.addSection1FinalQuestions === 'function') {
                window.addSection1FinalQuestions();
            }
        }
    } catch (error) {
        console.error('Error loading Section 1 questions:', error);
    }
    
    // Section 2: Service Coordination
    try {
        if (typeof window.loadSection2Questions === 'function') {
            window.loadSection2Questions();
            
            if (typeof window.addSection2AdditionalQuestions === 'function') {
                window.addSection2AdditionalQuestions();
            }
            
            if (typeof window.addSection2FinalQuestions === 'function') {
                window.addSection2FinalQuestions();
            }
        }
    } catch (error) {
        console.error('Error loading Section 2 questions:', error);
    }
    
    // Section 3: Eligibility & Services
    try {
        if (typeof window.loadSection3Questions === 'function') {
            window.loadSection3Questions();
        }
    } catch (error) {
        console.error('Error loading Section 3 questions:', error);
    }
    
    // Section 4: IFSP Development
    try {
        if (typeof window.loadSection4Questions === 'function') {
            window.loadSection4Questions();
        }
    } catch (error) {
        console.error('Error loading Section 4 questions:', error);
    }
    
    // Section 5: Family-Centered Practices
    try {
        if (typeof window.loadSection5Questions === 'function') {
            window.loadSection5Questions();
        }
    } catch (error) {
        console.error('Error loading Section 5 questions:', error);
    }
    
    // Section 6: Transitions
    try {
        if (typeof window.loadSection6Questions === 'function') {
            window.loadSection6Questions();
        }
    } catch (error) {
        console.error('Error loading Section 6 questions:', error);
    }
    
    // Section 7: Documentation
    try {
        if (typeof window.loadSection7Questions === 'function') {
            window.loadSection7Questions();
        }
    } catch (error) {
        console.error('Error loading Section 7 questions:', error);
    }
    
    // Section 8: Professional Responsibilities
    try {
        if (typeof window.loadSection8Questions === 'function') {
            window.loadSection8Questions();
        }
    } catch (error) {
        console.error('Error loading Section 8 questions:', error);
    }
}

function setupTestNavigationHandlers() {
    // Add click handlers to navigation buttons
    document.querySelectorAll('.test-nav-button').forEach(button => {
        button.addEventListener('click', function() {
            // Get the section ID from the button ID
            const sectionId = this.id.replace('nav-', '');
            
            // Hide all sections
            document.querySelectorAll('.test-section').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show the selected section
            document.getElementById(sectionId).style.display = 'block';
            
            // Update active button
            document.querySelectorAll('.test-nav-button').forEach(btn => {
                btn.classList.remove('active');
            });
            this.classList.add('active');
        });
    });
}

// Function to simulate taking a full practice test with all sections
function startFullPracticeTest() {
    // This function could be expanded to implement a full practice test
    // that combines questions from all sections
    alert('Full practice test functionality will be implemented in a future update.');
}

// Make key functions available globally
window.startFullPracticeTest = startFullPracticeTest;
