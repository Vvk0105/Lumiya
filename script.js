document.addEventListener('DOMContentLoaded', () => {
  const isMobile = window.matchMedia('(max-width: 768px)').matches;
  
  let scroll;
  if (!isMobile) {
    scroll = new LocomotiveScroll({
      el: document.querySelector('[data-scroll-container]'),
      smooth: true,
      multiplier: 0.8,
      smartphone: {
        smooth: false
      }
    });
  }


  function updateScroll() {
    if (scroll) scroll.update();
  }

  const logos = [
    { src: 'images/logos/lic.png', alt: 'LIC' },
    { src: 'images/logos/ntc.png', alt: 'NTC' },
    { src: 'images/logos/kseb.png', alt: 'KSEB' },
    { src: 'images/logos/malabar.png', alt: 'Malabar' },
    { src: 'images/logos/gieh.png', alt: 'GIEH' },
    { src: 'images/logos/ntc-award.png', alt: 'NTC Award' },
    { src: 'images/logos/xitrof.png', alt: 'XITROF' },
    { src: 'images/logos/nkcrr.png', alt: 'NKCRR' },
    { src: 'images/logos/infopark.png', alt: 'Infopark' },
    { src: 'images/logos/icfoss.png', alt: 'ICFÖSS' },
    { src: 'images/logos/derrik.png', alt: 'Derrik' },
    { src: 'images/logos/dermavue.png', alt: 'DermaVue' },
    { src: 'images/logos/kim.png', alt: 'KIM' },
    { src: 'images/logos/dernavue.png', alt: 'DERMAVUE' }
  ];

  function createLogoElements(container, count = 2) {
    for (let i = 0; i < count; i++) {
      logos.forEach(logo => {
        const logoItem = document.createElement('div');
        logoItem.className = 'logo-item';
        logoItem.innerHTML = `<img src="${logo.src}" alt="${logo.alt}">`;
        container.appendChild(logoItem);
      });
    }
    updateScroll();
  }

  const ltrContainer = document.querySelector('.logo-scroll-ltr');
  const rtlContainer = document.querySelector('.logo-scroll-rtl');
  
  if (ltrContainer && rtlContainer) {
    createLogoElements(ltrContainer, 2);
    createLogoElements(rtlContainer, 2);
  }

  const video = document.getElementById('main-video');
  const unmuteButton = document.querySelector('.unmute-button');
  let isMuted = true;
  let hasInteracted = false;

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        video.play().catch(e => console.log('Autoplay prevented:', e));
        if (!hasInteracted) {
          video.muted = true;
        }
      } else {
        if (!video.paused) video.pause();
      }
    });
  }, { threshold: 0.5 });

  if (video) observer.observe(video);

  if (unmuteButton) {
    unmuteButton.addEventListener('click', () => {
      isMuted = !isMuted;
      video.muted = isMuted;
      unmuteButton.classList.toggle('unmuted', !isMuted);
      hasInteracted = true;
      
      if (!isMuted && video.paused) {
        video.play().catch(e => console.log('Play failed:', e));
      }
    });
  }

  window.addEventListener('resize', updateScroll);
});


