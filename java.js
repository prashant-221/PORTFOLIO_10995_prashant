

const hamburger = document.querySelector('.fa-bars');
const navMenu = document.querySelector('.right-bar');

hamburger.addEventListener('click', () => {
    navMenu.classList.toggle('show');
    
    
    if (hamburger.classList.contains('fa-bars')) {
        hamburger.classList.remove('fa-bars');
        hamburger.classList.add('fa-times');
    } else {
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    }
});

document.querySelectorAll('.right-bar a').forEach(link => {
    link.addEventListener('click', () => {
        navMenu.classList.remove('show');
        hamburger.classList.remove('fa-times');
        hamburger.classList.add('fa-bars');
    });
});

const skillBars = document.querySelectorAll('.skill-progress');

function animateSkillBars() {
    skillBars.forEach(bar => {
        const level = bar.getAttribute('data-level');
        const isInView = bar.getBoundingClientRect().top < window.innerHeight;
        
        if (isInView) {
            bar.style.width = level + '%';
        }
    });
}

window.addEventListener('scroll', animateSkillBars);
window.addEventListener('load', animateSkillBars);

const contactForm = document.querySelector('.simple-form');

if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
      
        const name = this.querySelector('input[type="text"]').value;
        const email = this.querySelector('input[type="email"]').value;
        const message = this.querySelector('textarea').value;

        if (!name || !email || !message) {
            alert('Please fill in all fields!');
            return;
        }
        
        if (!email.includes('@')) {
            alert('Please enter a valid email address!');
            return;
        }
        
    
        const submitBtn = this.querySelector('button');
        const originalText = submitBtn.textContent;
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;
        
        
        setTimeout(() => {
            this.reset();
            
            // Reset button
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
            
            // Show success message
            alert('Message sent successfully! Thank you for reaching out.');
    
            console.log('Contact Form Submitted:');
            console.log('Name:', name);
            console.log('Email:', email);
            console.log('Message:', message);
            
        }, 2000);
    });
}


const formInputs = document.querySelectorAll('.simple-form input, .simple-form textarea');
formInputs.forEach(input => {
    input.addEventListener('focus', function() {
        this.style.borderColor = '#00599C';
        this.style.boxShadow = '0 0 5px rgba(0, 89, 156, 0.3)';
    });
    
    input.addEventListener('blur', function() {
        this.style.borderColor = '#ccc';
        this.style.boxShadow = 'none';
    });
});



