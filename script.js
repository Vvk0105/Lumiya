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
            { src: 'images/logos/dernavue.png', alt: 'DERMAVUE' },

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
        }

        document.addEventListener('DOMContentLoaded', () => {
            const ltrContainer = document.querySelector('.logo-scroll-ltr');
            const rtlContainer = document.querySelector('.logo-scroll-rtl');
            
            createLogoElements(ltrContainer, 2);
            createLogoElements(rtlContainer, 2);
        });