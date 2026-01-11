document.addEventListener("DOMContentLoaded", function() {
    
    // --- Universal Component Loader Function ---
    async function loadRSJComponent(elementId, filePath) {
        const placeholder = document.getElementById(elementId);
        if (placeholder) {
            try {
                const response = await fetch(filePath);
                if (!response.ok) {
                    throw new Error(`HTTP Error: ${response.status} - Path: ${filePath}`);
                }
                const htmlContent = await response.text();
                placeholder.innerHTML = htmlContent;
                console.log(`%c [Success] ${elementId} load ho gaya.`, "color: #D4AF37; font-weight: bold;");
            } catch (err) {
                console.error(`%c [Error] ${elementId} fail:`, "color: red;", err);
            }
        }
    }

    // --- Components Call (Sahi Path ke saath) ---
    loadRSJComponent('rsj-navbar-placeholder', 'components/navbar.html');
    loadRSJComponent('rsj-service-placeholder', 'components/services.html'); // Is file ka naam check karein
    loadRSJComponent('rsj-footer-container', 'components/footer.html');

    // --- Hero Slider Auto-Run ---
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let currentIdx = 0;
        setInterval(() => {
            slides[currentIdx].classList.remove('active');
            currentIdx = (currentIdx + 1) % slides.length;
            slides[currentIdx].classList.add('active');
        }, 5000); // 5 seconds interval
    }
});