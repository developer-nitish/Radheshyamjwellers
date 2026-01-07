// Function to load Navbar
async function loadNavbar() {
    try {
        const response = await fetch('components/navbar.html');
        const data = await response.text();
        document.getElementById('navbar-placeholder').innerHTML = data;
    } catch (error) {
        console.log('Navbar load hone mein error hai:', error);
    }
}

// Slider Logic
function initSlider() {
    const slides = document.querySelectorAll('.slide');
    let current = 0;

    function nextSlide() {
        slides[current].classList.remove('active');
        current = (current + 1) % slides.length;
        slides[current].classList.add('active');
    }

    setInterval(nextSlide, 5000); // 5 seconds interval
}

// Run functions on load
window.onload = () => {
    loadNavbar();
    initSlider();
};




// contact from js



// EmailJS Initialization
(function() {
    emailjs.init("YOUR_PUBLIC_KEY"); // Yahan EmailJS se apni Public Key dalein
})();

document.getElementById('contact-form')?.addEventListener('submit', function(event) {
    event.preventDefault();

    const btn = document.getElementById('submit-btn');
    const status = document.getElementById('form-status');
    btn.innerText = 'Sending...';

    // EmailJS Send Function
    emailjs.sendForm('service_na9vvot', 'YOUR_TEMPLATE_ID', this)
        .then(function() {
            status.style.color = "#D4AF37";
            status.innerText = 'Success! Your royal enquiry has been sent.';
            btn.innerText = 'Send Enquiry';
            document.getElementById('contact-form').reset();
        }, function(error) {
            status.style.color = "red";
            status.innerText = 'Failed to send. Please try again later.';
            btn.innerText = 'Send Enquiry';
            console.log('FAILED...', error);
        });
});


// testimonial

// Auto-Slider for Testimonials
function initAutoSlider() {
    const wrapper = document.getElementById('testimonial-wrapper');
    if (!wrapper) return;

    let index = 0;
    const cards = document.querySelectorAll('.testimonial-card');
    const totalCards = cards.length;
    
    // Har 3 second mein slide hoga
    setInterval(() => {
        index++;
        // Agar desktop hai (3 cards), to loop manage karein
        let displayCount = window.innerWidth > 900 ? 3 : window.innerWidth > 600 ? 2 : 1;
        
        if (index > totalCards - displayCount) {
            index = 0;
        }
        
        const cardWidth = cards[0].offsetWidth + 30; // 30 is gap
        wrapper.style.transform = `translateX(${-index * cardWidth}px)`;
    }, 3000);
}

// Apne existing window.onload mein isse add karein
window.onload = () => {
    loadNavbar();
    initSlider(); // Hero Slider
    initAutoSlider(); // Testimonial Slider
};



// footer


document.addEventListener('DOMContentLoaded', function() {
    // 1. Inject Footer Directly (No Fetch Required)
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        footerPlaceholder.innerHTML = `
        <footer class="main-footer">
            <div class="footer-container">
                <div class="footer-col brand-col">
                    <h2 class="gold-text">RADHE SHYAM JEWELLS</h2>
                    <p>Timeless elegance and pure craftsmanship. Your trusted jeweller in Gaya.</p>
                    <div class="social-links" style="margin-top: 20px;">
                        <a href="https://wa.me/916200454206" target="_blank" style="color:#D4AF37; text-decoration:none;">
                            <img src="https://cdn-icons-png.flaticon.com/512/733/733585.png" width="20"> WhatsApp Chat
                        </a>
                    </div>
                </div>
                <div class="footer-col">
                    <h3>Our Products</h3>
                    <ul style="list-style:none; padding:0; color:#bbb;">
                        <li>Gold Necklaces</li>
                        <li>Marriage Packages</li>
                        <li>Diamond Rings</li>
                        <li>Silver Coins</li>
                    </ul>
                </div>
                <div class="footer-col">
                    <h3>Visit Us</h3>
                    <p>Sidiya Ghat, Near Kali Mandir, Gaya</p>
                    <p>Mob: +91 6200 454 206</p>
                    <p><a href="mailto:radheshayamjwellery@gmail.com" style="color:#D4AF37;">radheshayamjwellery@gmail.com</a></p>
                </div>
                <div class="footer-col developer-col">
                    <h3>Developer</h3>
                    <p>Created by</p>
                    <a href="https://www.linkedin.com/in/nitish-kumar" target="_blank" style="color:#D4AF37; font-weight:bold; text-decoration:none;">Nitish Kumar</a>
                    <div class="mail-icon" style="margin-top:10px;">
                        <a href="mailto:radheshayamjwellery@gmail.com">
                            <img src="https://cdn-icons-png.flaticon.com/512/281/281769.png" width="35" alt="Gmail">
                        </a>
                    </div>
                </div>
            </div>
            <div class="footer-bottom" style="text-align:center; padding-top:20px; border-top:1px solid #222; margin-top:30px; font-size:12px; color:#777;">
                &copy; 2026 Radhe Shyam Jewells. All Rights Reserved.
            </div>
        </footer>`;
    }

    // 2. Load Navbar (Fetch only if needed)
    const navbarPlaceholder = document.getElementById('navbar-placeholder');
    if (navbarPlaceholder) {
        fetch('components/navbar.html')
            .then(res => res.text())
            .then(data => { navbarPlaceholder.innerHTML = data; })
            .catch(err => console.log("Navbar load error"));
    }

    // 3. Hero Slider Logic
    const slides = document.querySelectorAll('.slide');
    if (slides.length > 0) {
        let current = 0;
        setInterval(() => {
            slides[current].classList.remove('active');
            current = (current + 1) % slides.length;
            slides[current].classList.add('active');
        }, 5000);
    }
});