// INIT GSAP SCROLL PLUGIN
gsap.registerPlugin(ScrollTrigger);

// SHOW CONTENT
window.onload = () => {
  document.querySelector("body").style.opacity = 1;
};

// REGISTER ANIMATION
function generateScrollAnimation(element) {
  gsap.set(element, {
    scale: 0.8,
    opacity: 0,
  });

  gsap.to(element, {
    scale: 1,
    opacity: 1,
    duration: 0.8,
    ease: "power2.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
      toggleActions: "play none none none",
    },
  });
}
