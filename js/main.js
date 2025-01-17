// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Demo Animation
gsap.to("#demo", {
    rotation: 180,
},{
    rotation: 360,
    duration: 2,
})