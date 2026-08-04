document.addEventListener('DOMContentLoaded', () => {
  // Scroll reveal
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

  document.querySelectorAll('.reveal, .stagger-children').forEach(el => {
    observer.observe(el);
  });

  // Nav scroll effect
  const nav = document.querySelector('.nav');
  window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    if (currentScroll > 100) {
      nav.style.background = 'rgba(15, 17, 21, 0.98)';
    } else {
      nav.style.background = 'rgba(15, 17, 21, 0.92)';
    }
  });

  // Mobile menu toggle
  const mobileBtn = document.querySelector('.nav-mobile-btn');
  const navLinks = document.querySelector('.nav-links');
  if (mobileBtn && navLinks) {
    mobileBtn.addEventListener('click', () => {
      navLinks.classList.toggle('mobile-open');
    });
  }

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      }
    });
  });

  // Form handling
  const form = document.querySelector('.contact-form form');
  if (form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = form.querySelector('button[type="submit"]');
      const originalText = btn.innerHTML;
      btn.innerHTML = 'Sending...';
      btn.disabled = true;
      
      // Replace with your endpoint (Formspree, Tally, or custom API)
      setTimeout(() => {
        btn.innerHTML = 'Message sent. We will contact you within 24 hours.';
        btn.style.background = 'var(--positive)';
        form.reset();
        setTimeout(() => {
          btn.innerHTML = originalText;
          btn.disabled = false;
          btn.style.background = '';
        }, 4000);
      }, 1500);
    });
  }
});

