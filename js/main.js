// GSAP Modules
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);

// GSAP Demo Animation

gsap.to(".profilsNetflix", {
    scrollTrigger: {
        trigger: "#homePageNetflix",
        markers: true,
        id: "#homePageNetflix",
        start: "top 10%",
        end: "bottome 90%",
        toggleActions: "play none none none",
        scrub: 1,

    },
    rotation: 360,
    duration: 2
,})