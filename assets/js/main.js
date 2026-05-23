document.addEventListener('DOMContentLoaded', function() {

  // ======== HEADER SCROLL EFFECT ========
  const header = document.getElementById('site-header');
  window.addEventListener('scroll', function() {
    if (window.scrollY > 50) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  });

  // ======== MOBILE MENU TOGGLE ========
  const menuToggle = document.getElementById('menu-toggle');
  const navMenu = document.getElementById('nav-menu');

  menuToggle.addEventListener('click', function() {
    navMenu.classList.toggle('active');
  });

  document.querySelectorAll('.nav-menu a').forEach(function(link) {
    link.addEventListener('click', function() {
      navMenu.classList.remove('active');
    });
  });

  // ======== HERO SLIDER ========
  const slides = document.querySelectorAll('.hero-slide');
  const prevBtn = document.querySelector('.hero-arrow-prev');
  const nextBtn = document.querySelector('.hero-arrow-next');
  let currentSlide = 0;
  let slideInterval;

  function goToSlide(index) {
    slides.forEach(function(slide) {
      slide.classList.remove('active');
    });
    currentSlide = (index + slides.length) % slides.length;
    slides[currentSlide].classList.add('active');
  }

  function nextSlide() {
    goToSlide(currentSlide + 1);
  }

  function prevSlideFn() {
    goToSlide(currentSlide - 1);
  }

  function startSlideInterval() {
    slideInterval = setInterval(nextSlide, 5000);
  }

  function resetSlideInterval() {
    clearInterval(slideInterval);
    startSlideInterval();
  }

  if (slides.length > 0) {
    goToSlide(0);
    startSlideInterval();

    nextBtn.addEventListener('click', function() {
      nextSlide();
      resetSlideInterval();
    });

    prevBtn.addEventListener('click', function() {
      prevSlideFn();
      resetSlideInterval();
    });
  }

  // ======== GALLERY TOGGLE ========
  const galleryToggle = document.getElementById('gallery-toggle');
  const hiddenItems = document.querySelectorAll('.gallery-item.hidden');
  let galleryExpanded = false;

  if (galleryToggle) {
    galleryToggle.addEventListener('click', function() {
      galleryExpanded = !galleryExpanded;
      hiddenItems.forEach(function(item) {
        item.style.display = galleryExpanded ? 'block' : 'none';
      });
      galleryToggle.textContent = galleryExpanded ? 'View Less' : 'View More';
    });
  }

  // ======== WHATSAPP WIDGET ========
  const joinchatBtn = document.getElementById('joinchat-btn');
  const joinchat = document.getElementById('joinchat');
  const joinchatClose = document.getElementById('joinchat-close');
  const joinchatOpen = document.getElementById('joinchat-open');
  const phoneWA = '919289169953';

  joinchatBtn.addEventListener('click', function() {
    joinchat.classList.toggle('open');
  });

  joinchatClose.addEventListener('click', function() {
    joinchat.classList.remove('open');
  });

  joinchatOpen.addEventListener('click', function() {
    window.open('https://wa.me/' + phoneWA, '_blank');
    joinchat.classList.remove('open');
  });

  // ======== SCROLL ANIMATION (Intersection Observer) ========
  const animatedElements = document.querySelectorAll('.fade-in, .fade-in-left, .fade-in-right, .service-card');

  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, {
    threshold: 0.15,
    rootMargin: '0px 0px -40px 0px'
  });

  animatedElements.forEach(function(el) {
    observer.observe(el);
  });

  // ======== FORM SUBMIT ========
  const form = document.getElementById('appointment-form');
  if (form) {
    form.addEventListener('submit', function(e) {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const phone = document.getElementById('form-phone').value.trim();
      const service = document.getElementById('form-service').value;
      const date = document.getElementById('form-date').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !phone || !service || !date || !message) {
        alert('Please fill in all fields.');
        return;
      }

      var whatsappMessage = 'Hello Ekta Sethi Makeovers! I would like to book an appointment.%0A%0A';
      whatsappMessage += '*Name:* ' + encodeURIComponent(name) + '%0A';
      whatsappMessage += '*Phone:* ' + encodeURIComponent(phone) + '%0A';
      whatsappMessage += '*Service:* ' + encodeURIComponent(service) + '%0A';
      whatsappMessage += '*Date:* ' + encodeURIComponent(date) + '%0A';
      whatsappMessage += '*Message:* ' + encodeURIComponent(message);

      window.open('https://wa.me/' + phoneWA + '?text=' + whatsappMessage, '_blank');
      form.reset();
    });
  }
});