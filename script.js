 // Smooth scroll for internal links
document.querySelectorAll('a[href^="#"]').forEach(a=>{
    a.addEventListener('click', function(e){
    const target = document.querySelector(this.getAttribute('href'));
    if (target) {
        e.preventDefault();
        window.scrollTo({ top: target.offsetTop - 70, behavior: 'smooth' });
    }
    });
});

// Highlight active nav on scroll
const sections = document.querySelectorAll('section, header');
const navLinks = document.querySelectorAll('.nav-links a');
const obsOptions = { root: null, rootMargin: '-50% 0px -40% 0px', threshold: 0 };
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
    if (entry.isIntersecting) {
        navLinks.forEach(l => l.classList.remove('active'));
        const id = entry.target.id || 'home';
        const link = document.querySelector('.nav-links a[href="#' + id + '"]');
        if (link) link.classList.add('active');
    }
    });
}, obsOptions);
sections.forEach(s => observer.observe(s));

//Contace me form submission//
const form = document.querySelector('.contact-form');
if (form) {
  form.addEventListener('submit', async (e) => {
    e.preventDefault();
    const data = new FormData(form);
    const response = await fetch(form.action, {
      method: form.method,
      body: data,
      headers: { Accept: 'application/json' },
    });
    if (response.ok) {
      alert('✅ Thank you! Your message has been sent successfully.');
      form.reset();
    } else {
      alert('❌ Oops! Something went wrong. Please try again later.');
    }
  });
}
