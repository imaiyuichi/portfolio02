import gsap from 'gsap';

export const headerNav = () => {
    const card1 = document.querySelector('.image-01');
    const card2 = document.querySelector('.image-02');
    const card3 = document.querySelector('.image-03');
    const cards = document.querySelectorAll('.js-list');
    const bg = document.querySelector('.bg');
    const link = document.querySelectorAll('.link');
    const button = document.querySelector('.js-button');
    const menuButton = document.querySelector('.js-text-03');
    const openButton = document.querySelector('.js-open-button');
    const closeButton = document.querySelector('.js-close-button');

    let isOpen = false;

    openButton.addEventListener('click', (e) => {
        if (!isOpen) {
            e.preventDefault();

            gsap.to(card2, {
                top: '130px',
                direction: 1,
                ease: 'power4.inOut',
            });
            gsap.to(card3, {
                top: '260px',
                direction: 1,
                ease: 'power4.inOut',
            });
            gsap.to(openButton, {
                delay: 0,
                opacity: 0,
                display: 'none',
                direction: 0,
                ease: 'power4.inOut',
            });
            gsap.to(closeButton, {
                delay: 0.5,
                opacity: 1,
                display: 'block',
                direction: 0.5,
                ease: 'power4.inOut',
            });
            gsap.to(bg, {
                className: 'bg isBlur',
                duration: 0.75,
                ease: 'power4.inOut',
            });
            isOpen = true;
        }

        closeButton.addEventListener('click', () => {
            if (isOpen) {
                gsap.to(cards, {
                    top: 0,
                    direction: 1,
                    ease: 'power4.inOut',
                });
                gsap.to(openButton, {
                    delay: 0.5,
                    opacity: 1,
                    display: 'block',
                    direction: 0.5,
                    ease: 'power4.inOut',
                });
                gsap.to(closeButton, {
                    delay: 0,
                    opacity: 0,
                    display: 'none',
                    direction: 0.5,
                    ease: 'power4.inOut',
                });
                gsap.to(bg, {
                    className: 'bg',
                });
                isOpen = false;
            }
        });
    });
};
