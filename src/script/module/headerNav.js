import gsap from "gsap";

export const headerNav = () => {
  const card1 = document.querySelector(".image-01");
  const card2 = document.querySelector(".image-02");
  const card3 = document.querySelector(".image-03");
  const cards = document.querySelectorAll(".js-list");
  const bg = document.querySelector(".bg");
  const link = document.querySelectorAll(".link");
  const button = document.querySelector(".js-button");
  let isOpen = false;

  card3.addEventListener("click", (e) => {
    if (!isOpen) {
      e.preventDefault();

      gsap.to(card2, {
        top: "130px",
        direction: 1,
        ease: "power4.inOut",
      });
      gsap.to(card3, {
        top: "260px",
        direction: 1,
        ease: "power4.inOut",
      });
      gsap.to(button, {
        delay: 0.5,
        display: "block",
        opacity: 1,
        direction: 0.5,
        ease: "power4.inOut",
      });
      gsap.to(bg, {
        className: "bg isBlur",
        duration: 0.75,
        ease: "power4.inOut",
      });
      isOpen = true;
    }

    button.addEventListener("click", () => {
      if (isOpen) {
        gsap.to(cards, {
          top: 0,
          direction: 1,
          ease: "power4.inOut",
        });
        gsap.to(button, {
          delay: 0,
          display: "none",
          opacity: 0,
          direction: 0.5,
          ease: "power4.inOut",
        });
        gsap.to(bg, {
          className: "bg",
        });
        isOpen = false;
      }
    });
  });
};
