// INTRO SECTION
const intro = document.querySelector('.intro');
const background = intro.querySelector('.background');
const video = intro.querySelector('video');
const text = intro.querySelector('h1');

// END SECTION
const section = document.querySelector('section');
const end = section.querySelector('h1');
const powerful = section.querySelector('.powerful');
const ipadImage = section.querySelector('img');

// SCROLLMAGIC
const controller = new ScrollMagic.Controller();

//Scenes
let scene = new ScrollMagic.Scene({
  duration: 5000,
  triggerElement: intro,
  triggerHook: 0,
})
  .setPin(intro)
  .addTo(controller);

//Const animation
const backgroundAnimation = TweenMax.fromTo(
  background,
  1,
  { opacity: 1 },
  { opacity: 0 }
);
const textAnimation = TweenMax.fromTo(text, 1, { opacity: 1 }, { opacity: 0 });
const powerfulAnimation = TweenMax.fromTo(
  powerful,
  1,
  { y: 300, x: 0, opacity: 0 },
  { y: -50, x: 0, opacity: 1 }
);
const ipadAnimation = TweenMax.fromTo(
  ipadImage,
  1,
  { opacity: 0 },
  { opacity: 1 }
);

// Background animation
let sceneBackground = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(backgroundAnimation)
  .addTo(controller);

// Texts animation
let sceneTextHero = new ScrollMagic.Scene({
  duration: 300,
  triggerElement: intro,
  triggerHook: 0,
})
  .setTween(textAnimation)
  .addTo(controller);

// Powerful animation
let scenePowerful = new ScrollMagic.Scene({
  duration: 500,
  triggerElement: section,
  triggerHook: 0.4,
})
  .setTween(powerfulAnimation)
  .addTo(controller);

// Image ipad animation
let sceneIpad = new ScrollMagic.Scene({
  duration: 400,
  triggerElement: section,
  triggerHook: 0.3,
})
  .setTween(ipadAnimation)
  .addTo(controller);

// Video Animation
let accelamount = 0.1;
let scrollpos = 0;
let delay = 0;

scene.on('update', (e) => {
  scrollpos = e.scrollPos / 1000;
});

setInterval(() => {
  delay += (scrollpos - delay) * accelamount;
  video.currentTime = scrollpos;
}, 33.3);
