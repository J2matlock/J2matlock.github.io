// Loader file to connect all study guide sections

document.addEventListener('DOMContentLoaded', function() {
    // Once the base DOM content is loaded, load all study guide sections
    loadAllStudyGuideSections();
});

function loadAllStudyGuideSections() {
    // We've already loaded the Legal Framework and Program Overview in the main script
    // Now load the remaining sections
    
    // Check if these functions are available before calling them
    if (typeof window.loadServiceCoordination === 'function') {
        window.loadServiceCoordination();
    }
    
    if (typeof window.loadEligibilityServices === 'function') {
        window.loadEligibilityServices();
    }
    
    if (typeof window.loadIFSP === 'function') {
        window.loadIFSP();
    }
    
    if (typeof window.loadFamilyCentered === 'function') {
        window.loadFamilyCentered();
    }
    
    if (typeof window.loadTransitions === 'function') {
        window.loadTransitions();
    }
    
    if (typeof window.loadDocumentation === 'function') {
        window.loadDocumentation();
    }
    
    if (typeof window.loadProfessionalResponsibilities === 'function') {
        window.loadProfessionalResponsibilities();
    }
    
    if (typeof window.loadExamPreparation === 'function') {
        window.loadExamPreparation();
    }
    
    if (typeof window.loadKeyTerms === 'function') {
        window.loadKeyTerms();
    }
    
    // Set up quick navigation for study guide topics
    setupStudyGuideNavigation();
}

function setupStudyGuideNavigation() {
    const topicLinks = document.querySelectorAll('.topic-nav a');
    
    topicLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            // Get target section ID
            const targetId = this.getAttribute('href').substring(1);
            
            // Scroll to target section
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
}
