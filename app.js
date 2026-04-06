/* ============================================
   FLOTTE HELFER - App JavaScript
   All interactivity: menu, scroll, marquee,
   accordion, forms, modals, counters, cookies
   ============================================ */

// ========== DATA ==========

const REVIEWS_DATA = [
  {
    name: "Martina Schneider",
    initials: "MS",
    date: "vor 2 Wochen",
    rating: 5,
    service: "Kellerentrümpelung",
    text: "Absolut zuverlässig! Die Entrümpelung unseres Kellers wurde schnell und sauber erledigt. Der Preis war fair und es gab keine versteckten Kosten. Sehr empfehlenswert!"
  },
  {
    name: "Thomas Mueller",
    initials: "TM",
    date: "vor 1 Monat",
    rating: 5,
    service: "Haushaltsauflösung",
    text: "Nach dem Tod meiner Mutter brauchten wir Hilfe bei der Haushaltsauflösung. Frau Sachs und ihr Team waren einfühlsam und professionell. Alles wurde sorgfältig behandelt."
  },
  {
    name: "Sabine Weber",
    initials: "SW",
    date: "vor 3 Wochen",
    rating: 5,
    service: "Dachbodenräumung",
    text: "Top Service! Dachboden komplett geräumt und anschließend besenrein übergeben. Termingerecht und zu einem fairen Festpreis. Kann ich nur weiterempfehlen."
  },
  {
    name: "Klaus Fischer",
    initials: "KF",
    date: "vor 2 Monaten",
    rating: 5,
    service: "Entrümpelung & Renovierung",
    text: "Wir haben Flotte Helfer für die Entrümpelung und anschließende Renovierung unserer Mietwohnung beauftragt. Alles aus einer Hand - super praktisch und das Ergebnis war einwandfrei."
  },
  {
    name: "Andrea Hoffmann",
    initials: "AH",
    date: "vor 1 Monat",
    rating: 5,
    service: "Entrümpelung",
    text: "Schnelle Reaktion auf unsere Anfrage und sofortige Besichtigung. Das Angebot war transparent und der Preis wurde genau eingehalten. Sehr professionelles Team!"
  },
  {
    name: "Michael Braun",
    initials: "MB",
    date: "vor 3 Monaten",
    rating: 5,
    service: "Sperrmüllentsorgung",
    text: "Haben unseren gesamten Sperrmüll abholen lassen. Pünktlich, freundlich und haben sogar noch die Garage gefegt. Besser geht es nicht. Vielen Dank!"
  },
  {
    name: "Petra Wagner",
    initials: "PW",
    date: "vor 6 Wochen",
    rating: 4,
    service: "Kellerentrümpelung",
    text: "Gute Arbeit bei der Kellerentrümpelung. Das Team war fleißig und hat alles ordentlich entsorgt. Einziger Punkt: Der Termin hat sich um eine Stunde verzögert. Sonst top!"
  },
  {
    name: "Hans-Jürgen Becker",
    initials: "HB",
    date: "vor 2 Monaten",
    rating: 5,
    service: "Demontage & Entsorgung",
    text: "Wir haben mehrere Angebote eingeholt und Flotte Helfer hatte das beste Preis-Leistungs-Verhältnis. Die Demontage der alten Einbauküche war in zwei Stunden erledigt. Sehr zufrieden!"
  },
  {
    name: "Ulrike Schulz",
    initials: "US",
    date: "vor 1 Woche",
    rating: 5,
    service: "Haushaltsauflösung",
    text: "Perfekte Haushaltsauflösung! Alles wurde sortiert, verwertbare Dinge angerechnet und der Rest fachgerecht entsorgt. Frau Sachs ist wirklich ein Profi auf ihrem Gebiet."
  }
];

const FAQS_DATA = [
  {
    question: "Was kostet eine Entrümpelung?",
    answer: "Die Kosten hängen von der Größe und dem Umfang der Räumung ab. Unsere Preise beginnen ab 499 Euro für kleine Räumungen. Wir bieten eine kostenlose Vor-Ort-Besichtigung an und erstellen ein verbindliches Festpreisangebot ohne versteckte Kosten."
  },
  {
    question: "Bieten Sie eine kostenlose Besichtigung an?",
    answer: "Ja! Wir bieten eine kostenlose und unverbindliche Vor-Ort-Besichtigung an. Dabei schätzen wir den Umfang der Arbeit ein und erstellen Ihnen ein verbindliches Festpreisangebot."
  },
  {
    question: "Wie schnell können Sie den Auftrag ausführen?",
    answer: "In der Regel können wir innerhalb von 48 Stunden nach Auftragserteilung mit der Arbeit beginnen. Bei dringenden Fällen ist auch ein kurzfristiger Einsatz möglich. Kontaktieren Sie uns einfach."
  },
  {
    question: "Was passiert mit den geräumten Gegenständen?",
    answer: "Verwertbare Gegenstände werden auf Wunsch verkauft oder gespendet. Der Erlös wird von Ihren Kosten abgezogen. Alles andere wird umweltgerecht entsorgt und fachgerecht recycelt."
  },
  {
    question: "In welchem Gebiet sind Sie tätig?",
    answer: "Wir sind in Berlin, Brandenburg und der gesamten Umgebung tätig. Für größere Projekte kommen wir auch gerne weiter. Fragen Sie einfach an!"
  },
  {
    question: "Bieten Sie auch Renovierung nach der Räumung an?",
    answer: "Ja, wir bieten alles aus einer Hand! Nach der Entrümpelung können wir die Räume auf Wunsch renovieren - inklusive Malerarbeiten, neue Bodenbeläge und Tapezierarbeiten."
  },
  {
    question: "Wie wird die Entsorgung durchgeführt?",
    answer: "Wir arbeiten mit zertifizierten Entsorgungsbetrieben zusammen und achten auf umweltgerechte Trennung und Recycling. Auf Wunsch erhalten Sie einen Entsorgungsnachweis."
  },
  {
    question: "Kann ich einen festen Termin vereinbaren?",
    answer: "Selbstverständlich! Wir vereinbaren einen festen Termin, der für Sie passt. Unsere Arbeitszeiten sind Montag bis Samstag von 07:00 bis 20:00 Uhr."
  }
];

// ========== SMOOTH SCROLL UTILITY ==========

function smoothScrollTo(targetY, duration) {
  duration = duration || 800;
  var startY = window.pageYOffset || document.documentElement.scrollTop;
  var diff = targetY - startY;
  var startTime = null;

  function easeInOutCubic(t) {
    return t < 0.5
      ? 4 * t * t * t
      : 1 - Math.pow(-2 * t + 2, 3) / 2;
  }

  function step(currentTime) {
    if (!startTime) startTime = currentTime;
    var elapsed = currentTime - startTime;
    var progress = Math.min(elapsed / duration, 1);
    var easedProgress = easeInOutCubic(progress);

    window.scrollTo(0, startY + diff * easedProgress);

    if (progress < 1) {
      requestAnimationFrame(step);
    }
  }

  requestAnimationFrame(step);
}

// ========== INITIALIZATION ==========

document.addEventListener('DOMContentLoaded', () => {
  // Hard refresh always starts at the very top
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';
  window.scrollTo(0, 0);

  initCookieBanner();
  initHeader();
  initMobileNav();
  initBackInterceptor();
  renderReviews();
  initMarquee();
  renderFAQ();
  initScrollAnimations();
  initFloatingQuoteBtn();
  initCounters();
  initContactForm();
});

// ========== COOKIE BANNER ==========

function initCookieBanner() {
  const consent = localStorage.getItem('fh_cookie_consent');
  if (!consent) {
    setTimeout(() => {
      document.getElementById('cookieBanner').classList.add('show');
    }, 1500);
  }
}

function acceptCookies() {
  localStorage.setItem('fh_cookie_consent', 'accepted');
  document.getElementById('cookieBanner').classList.remove('show');
}

function rejectCookies() {
  localStorage.setItem('fh_cookie_consent', 'rejected');
  document.getElementById('cookieBanner').classList.remove('show');
}

// ========== HEADER SCROLL ==========

function initHeader() {
  const header = document.getElementById('siteHeader');

  window.addEventListener('scroll', () => {
    const scrollY = window.scrollY;

    if (scrollY > 80) {
      header.style.background = 'rgba(15, 25, 35, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0,0,0,0.3)';
    } else {
      header.style.background = 'rgba(15, 25, 35, 0.92)';
      header.style.boxShadow = 'none';
    }

    // Header always visible - only background changes on scroll
    header.style.transform = 'translateY(0)';
  }, { passive: true });

  // Smooth scroll for anchor links using custom animated scroll
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', (e) => {
      const href = anchor.getAttribute('href');
      if (!href || href === '#') return;
      try {
        const target = document.querySelector(href);
        if (target) {
          e.preventDefault();
          // Close mobile nav if open
          document.getElementById('mobileNav').classList.remove('open');
          document.getElementById('hamburger').classList.remove('open');
          document.body.style.overflow = '';
          const offsetTop = target.getBoundingClientRect().top + window.scrollY - 70;
          smoothScrollTo(offsetTop, 900);
        }
      } catch (err) {}
    });
  });
}

// ========== MOBILE NAV ==========

function initMobileNav() {
  const hamburger = document.getElementById('hamburger');
  const mobileNav = document.getElementById('mobileNav');

  hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('open');
    mobileNav.classList.toggle('open');
    document.body.style.overflow = mobileNav.classList.contains('open') ? 'hidden' : '';
  });
}

function closeMobileNav() {
  document.getElementById('hamburger').classList.remove('open');
  document.getElementById('mobileNav').classList.remove('open');
  document.body.style.overflow = '';
}

// ========== BACK BUTTON INTERCEPTOR ==========
// 1st press: close modal/mobile-nav if open
// 2nd press: scroll to top
// 3rd press: browser navigates away

function initBackInterceptor() {
  history.pushState({ __fh: true }, '');

  window.addEventListener('popstate', function() {
    // Any modal open? Close it first
    var openModals = document.querySelectorAll('.modal-overlay.open');
    if (openModals.length > 0) {
      openModals.forEach(function(m) { m.classList.remove('open'); });
      document.body.style.overflow = '';
      history.pushState({ __fh: true }, '');
      return;
    }
    // Mobile nav open? Close it first
    var mobileNav = document.getElementById('mobileNav');
    if (mobileNav && mobileNav.classList.contains('open')) {
      closeMobileNav();
      history.pushState({ __fh: true }, '');
      return;
    }
    // Not at top? Scroll up
    if (window.scrollY > 50) {
      smoothScrollTo(0, 600);
      history.pushState({ __fh: true }, '');
    }
    // Already at top → do nothing, browser navigates away
  });
}

// ========== REVIEWS MARQUEE ==========

function renderReviews() {
  const track = document.getElementById('marqueeTrack');
  if (!track) return;

  const starSVG = '<svg width="16" height="16" viewBox="0 0 24 24" fill="#D4A24C"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>';

  track.innerHTML = REVIEWS_DATA.map(review => `
    <div class="review-card">
      <div class="review-stars">${starSVG.repeat(review.rating)}</div>
      <p class="review-text">"${review.text}"</p>
      <div class="review-author">
        <div class="review-avatar">${review.initials}</div>
        <div>
          <div class="review-name">${review.name}</div>
          <div class="review-service">${review.service}</div>
          <div class="review-date">${review.date}</div>
        </div>
      </div>
    </div>
  `).join('');
}

function initMarquee() {
  const marqueeOuter = document.getElementById('marqueeOuter');
  const marqueeTrack = document.getElementById('marqueeTrack');
  if (!marqueeTrack || !marqueeOuter) return;

  // Clone cards for seamless loop
  const origCards = [...marqueeTrack.children];
  origCards.forEach(card => {
    const clone = card.cloneNode(true);
    clone.setAttribute('aria-hidden', 'true');
    marqueeTrack.appendChild(clone);
  });

  let scrollPos = 0;
  const SPEED = 0.5;
  let paused = false;
  let rafId;

  function getHalfWidth() {
    const cards = marqueeTrack.querySelectorAll('.review-card:not([aria-hidden])');
    let w = 0;
    cards.forEach(c => { w += c.offsetWidth + 24; }); // 24 = gap
    return w;
  }

  let halfWidth = getHalfWidth();
  window.addEventListener('resize', () => { halfWidth = getHalfWidth(); });

  function step() {
    // Check if touch momentum is active
    var touchActive = marqueeOuter.dataset.touchActive === 'true';

    // Sync scrollPos after momentum ends
    if (marqueeOuter.dataset.syncScrollPos) {
      scrollPos = parseFloat(marqueeOuter.dataset.syncScrollPos);
      if (scrollPos < 0) scrollPos = 0;
      if (halfWidth > 0 && scrollPos >= halfWidth) scrollPos = scrollPos % halfWidth;
      delete marqueeOuter.dataset.syncScrollPos;
    }

    if (!paused && !touchActive && halfWidth > 0) {
      scrollPos += SPEED;
      if (scrollPos >= halfWidth) scrollPos -= halfWidth;
      marqueeTrack.style.transform = `translateX(-${scrollPos}px)`;
    }
    rafId = requestAnimationFrame(step);
  }

  marqueeOuter.addEventListener('mouseenter', () => { paused = true; });
  marqueeOuter.addEventListener('mouseleave', () => { paused = false; });
  // Touch pause is now handled by the momentum system via dataset.touchActive
  marqueeOuter.addEventListener('touchstart', () => { paused = true; }, { passive: true });
  marqueeOuter.addEventListener('touchend', () => {
    setTimeout(() => { paused = false; }, 2000);
  }, { passive: true });

  step();
}

// ========== FAQ ACCORDION ==========

function renderFAQ() {
  const list = document.getElementById('faqList');
  if (!list) return;

  list.innerHTML = FAQS_DATA.map((faq, i) => `
    <div class="faq-item" id="faq-${i}">
      <button class="faq-question" onclick="toggleFAQ(${i})" aria-expanded="false">
        ${faq.question}
        <span class="faq-icon">+</span>
      </button>
      <div class="faq-answer" id="faq-answer-${i}">
        <p>${faq.answer}</p>
      </div>
    </div>
  `).join('');
}

function toggleFAQ(index) {
  const item = document.getElementById('faq-' + index);
  const isOpen = item.classList.contains('open');

  // Close all
  document.querySelectorAll('.faq-item').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.faq-question').forEach(btn => btn.setAttribute('aria-expanded', 'false'));

  // Open clicked if wasn't open
  if (!isOpen) {
    item.classList.add('open');
    item.querySelector('.faq-question').setAttribute('aria-expanded', 'true');
  }
}

// ========== SCROLL ANIMATIONS ==========

function initScrollAnimations() {
  if (!('IntersectionObserver' in window)) return;

  const animateEls = document.querySelectorAll(
    '.bento-card, .review-card, .process-step, .trust-item, .why-list li, .more-service-item, .contact-item, .stat-block'
  );

  const animObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry, i) => {
      if (entry.isIntersecting) {
        // Stagger animation
        const delay = Math.min(i * 80, 400);
        setTimeout(() => {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        }, delay);
        animObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.1 });

  animateEls.forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(24px)';
    el.style.transition = 'opacity 0.6s cubic-bezier(0.22, 1, 0.36, 1), transform 0.6s cubic-bezier(0.22, 1, 0.36, 1)';
    animObserver.observe(el);
  });
}

// ========== FLOATING QUOTE BUTTON ==========

function initFloatingQuoteBtn() {
  const btn = document.getElementById('floatingQuoteBtn');
  const hero = document.getElementById('hero');
  if (!btn || !hero) return;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) {
        btn.classList.add('show');
      } else {
        btn.classList.remove('show');
      }
    });
  }, { threshold: 0.1 });

  observer.observe(hero);
}

// ========== ANIMATED COUNTERS ==========

function initCounters() {
  const counters = document.querySelectorAll('.counter');
  if (!counters.length) return;

  const counterObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        animateCounter(entry.target);
        counterObserver.unobserve(entry.target);
      }
    });
  }, { threshold: 0.5 });

  counters.forEach(counter => counterObserver.observe(counter));
}

function animateCounter(el) {
  const target = parseInt(el.dataset.target);
  const duration = 2000;
  const start = performance.now();

  function update(currentTime) {
    const elapsed = currentTime - start;
    const progress = Math.min(elapsed / duration, 1);
    // Ease out quad
    const eased = 1 - (1 - progress) * (1 - progress);
    el.textContent = Math.floor(eased * target);

    if (progress < 1) {
      requestAnimationFrame(update);
    } else {
      el.textContent = target;
    }
  }

  requestAnimationFrame(update);
}

// ========== CONTACT FORM ==========

function initContactForm() {
  const form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', (e) => {
    // Save to localStorage before submitting to FormSubmit
    saveSubmission(form);
  });

  const quoteForm = document.getElementById('quoteForm');
  if (quoteForm) {
    quoteForm.addEventListener('submit', (e) => {
      saveSubmission(quoteForm);
    });
  }
}

function saveSubmission(form) {
  const formData = new FormData(form);
  const submission = {
    id: Date.now().toString(36) + Math.random().toString(36).substr(2, 5),
    timestamp: new Date().toISOString(),
    status: 'Neu',
    data: {}
  };

  formData.forEach((value, key) => {
    if (!key.startsWith('_')) {
      submission.data[key] = value;
    }
  });

  // Get existing submissions
  const submissions = JSON.parse(localStorage.getItem('fh_submissions') || '[]');
  submissions.unshift(submission);
  localStorage.setItem('fh_submissions', JSON.stringify(submissions));
}

// ========== MODALS ==========

function openImpressum() {
  document.getElementById('impressumModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeImpressum() {
  document.getElementById('impressumModal').classList.remove('open');
  document.body.style.overflow = '';
}

function openDatenschutz() {
  document.getElementById('datenschutzModal').classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeDatenschutz() {
  document.getElementById('datenschutzModal').classList.remove('open');
  document.body.style.overflow = '';
}

function openQuoteModal(service) {
  const modal = document.getElementById('quoteModal');
  const select = document.getElementById('quoteService');

  if (service && select) {
    for (let i = 0; i < select.options.length; i++) {
      if (select.options[i].value === service) {
        select.selectedIndex = i;
        break;
      }
    }
  }

  modal.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeQuoteModal() {
  document.getElementById('quoteModal').classList.remove('open');
  document.body.style.overflow = '';
}

// Close modals on overlay click
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('modal-overlay') && e.target.classList.contains('open')) {
    e.target.classList.remove('open');
    document.body.style.overflow = '';
  }
});

// Close modals on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') {
    document.querySelectorAll('.modal-overlay.open').forEach(modal => {
      modal.classList.remove('open');
    });
    document.body.style.overflow = '';
  }
});

