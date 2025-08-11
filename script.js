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



document.addEventListener('DOMContentLoaded', () => {
    const slides = [
        {
            title: "Corporate Events",
            para: "MICE (Meetings, Incentives, Conferences & Exhibitions), Product Launches, Team-Building Retreat, Corporate Giftings - all executed with Professionalism and Style.",
            images: ["images/ce1.avif", "images/ce2.avif"]
        },
        {
            title: "Social Events",
            para: "Award Nights, Holiday Events, Gala Dinner and Private Parties that leave lasting impressions.",
            images: ["images/se1.avif", "images/se2.avif"]
        },
        {
            title: "Corporate Gifts",
            para: "Creative Concepts, custom décor and immersive experiences that reflect your Style and Story.",
            images: ["images/cg1.avif", "images/cg2.avif"]
        }
    ];

    let sectionIndex = 0;
    let imageIndex = 0;

    const h1 = document.querySelector('.banner-content h1');
    const p = document.querySelector('.banner-content p');
    const banner = document.querySelector('.banner');

    function updateContent() {
        const current = slides[sectionIndex];

        banner.style.setProperty('--banner-bg', `url('${current.images[imageIndex]}')`);

        if (imageIndex === 0) {
            h1.classList.add('fade-out');
            p.classList.add('fade-out');

            setTimeout(() => {
                h1.textContent = current.title;
                p.textContent = current.para;

                h1.classList.remove('fade-out');
                p.classList.remove('fade-out');
                h1.classList.add('fade-in');
                p.classList.add('fade-in');

                setTimeout(() => {
                    h1.classList.remove('fade-in');
                    p.classList.remove('fade-in');
                }, 600);
            }, 600);
        }

        imageIndex++;
        if (imageIndex >= current.images.length) {
            imageIndex = 0;
            sectionIndex = (sectionIndex + 1) % slides.length;
        }
    }

    updateContent();

    setInterval(updateContent, 5000);
});
