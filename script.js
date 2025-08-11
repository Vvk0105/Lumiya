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
    { src: 'images/logos/LIC.png', alt: 'LIC' },
    { src: 'images/logos/derik.png', alt: 'NTC' },
    { src: 'images/logos/dernavue.png', alt: 'KSEB' },
    { src: 'images/logos/FAYA.png', alt: 'Malabar' },
    { src: 'images/logos/GTECH.png', alt: 'GIEH' },
    { src: 'images/logos/icfoss.png', alt: 'NTC Award' },
    { src: 'images/logos/IMPCOPS.png', alt: 'XITROF' },
    { src: 'images/logos/inapp.png', alt: 'NKCRR' },
    { src: 'images/logos/INFOPARK.png', alt: 'Infopark' },
    { src: 'images/logos/KIMS.png', alt: 'ICFÖSS' },
    { src: 'images/logos/kseb.png', alt: 'Derrik' },
    { src: 'images/logos/malabar.png', alt: 'DermaVue' },
    { src: 'images/logos/MOT.png', alt: 'KIM' },
    { src: 'images/logos/nims.png', alt: 'DERMAVUE' },
    { src: 'images/logos/nkorr.png', alt: 'DERMAVUE' },
    { src: 'images/logos/PRS.png', alt: 'DERMAVUE' },
    { src: 'images/logos/TECHNOPARK.png', alt: 'TECHNOPARK' },
    { src: 'images/logos/techversant.png', alt: 'TECHVERSANT' },
    { src: 'images/logos/xmor.png', alt: 'XMOR' },

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


