// DOM Ready
document.addEventListener('DOMContentLoaded', function () {

  // =============== HAMBURGER MENU ===============
  const hamburger = document.getElementById('hamburger');
  const navMenu = document.querySelector('.nav-menu');

  if (hamburger && navMenu) {
    hamburger.addEventListener('click', () => {
      navMenu.classList.toggle('active');
      hamburger.textContent = navMenu.classList.contains('active') ? '✕' : '☰';
    });

    const navLinks = navMenu.querySelectorAll('a');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navMenu.classList.remove('active');
        hamburger.textContent = '☰';
      });
    });
  }

  // =============== MODAL DE ORÇAMENTO ===============
  const openButtons = document.querySelectorAll('#open-orcamento, #hero-orcamento');
  const modal = document.getElementById('orcamento-modal');
  const closeModal = document.getElementById('close-modal');

  if (modal && closeModal) {
    const openModal = () => {
      modal.style.display = 'flex';
      document.body.style.overflow = 'hidden';
    };

    const closeModalFunc = () => {
      modal.style.display = 'none';
      document.body.style.overflow = '';
    };

    openButtons.forEach(btn => {
      if (btn) btn.addEventListener('click', openModal);
    });

    closeModal.addEventListener('click', closeModalFunc);

    window.addEventListener('click', (e) => {
      if (e.target === modal) closeModalFunc();
    });

    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && modal.style.display === 'flex') closeModalFunc();
    });
  }

  // =============== SMOOTH SCROLL ===============
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;

      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        const offsetTop = targetElement.offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: 'smooth'
        });
      }
    });
  });

  // =============== LIGHTBOX (PORTFÓLIO) ===============
  const lightbox = document.getElementById('lightbox');
  if (lightbox) {
    document.querySelectorAll('.portfolio-item').forEach(item => {
      item.addEventListener('click', () => {
        const title = item.getAttribute('data-title');
        const sector = item.getAttribute('data-sector');
        const desc = item.getAttribute('data-desc');
        const results = item.getAttribute('data-results');
        const tech = item.getAttribute('data-tech');
        const imgSrc = item.querySelector('img').src;

        document.getElementById('lightbox-img').src = imgSrc;
        document.getElementById('lightbox-title').textContent = title;
        document.getElementById('lightbox-sector').textContent = sector;
        document.getElementById('lightbox-desc').textContent = desc;
        document.getElementById('lightbox-results').textContent = results;
        document.getElementById('lightbox-tech').textContent = tech;

        lightbox.style.display = 'flex';
        document.body.style.overflow = 'hidden';
      });
    });

    document.getElementById('lightbox-close').addEventListener('click', closeLightbox);
    window.addEventListener('click', (e) => {
      if (e.target === lightbox) closeLightbox();
    });
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && lightbox.style.display === 'flex') closeLightbox();
    });

    function closeLightbox() {
      lightbox.style.display = 'none';
      document.body.style.overflow = '';
    }
  }

  // =============== FORMULÁRIO DE CONTATO COM AJAX (FORMSPREE) ===============
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', async function (e) {
      e.preventDefault();

      // Honeypot anti-spam
      const honeypot = document.getElementById('honeypot');
      if (honeypot && honeypot.value.trim() !== '') {
        alert('Spam detectado. Mensagem não enviada.');
        return;
      }

      const submitBtn = contactForm.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = 'Enviando...';

      const formData = new FormData(contactForm);

      try {
        const response = await fetch(contactForm.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        });

        if (response.ok) {
          // Substituição suave do formulário pela mensagem de sucesso
          contactForm.innerHTML = `
            <div style="text-align: center; padding: 2rem; background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: var(--radius); color: #166534;">
              <h3 style="margin: 0 0 1rem; font-size: 1.25rem;">✅ Mensagem enviada com sucesso!!!</h3>
              <p>Obrigado pelo contato. Responderemos em breve!</p>
              <a href="index.html" class="btn-primary" style="margin-top: 1rem; display: inline-block;">Voltar ao site</a>
            </div>
          `;
        } else {
          const error = await response.json().catch(() => ({}));
          console.error('Erro Formspree:', error);
          alert('Erro ao enviar. Verifique os campos e tente novamente.');
          submitBtn.disabled = false;
          submitBtn.textContent = originalText;
        }
      } catch (err) {
        console.error('Erro de rede:', err);
        alert('Erro de conexão. Tente novamente mais tarde.');
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
      }
    });
  }

  // =============== LAZY LOAD (fallback) ===============
  if (!('loading' in HTMLImageElement.prototype)) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
      img.src = img.dataset.src || img.src;
    });
  }

});