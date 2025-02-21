// GSAP Modules -------------------------------------------------------------
gsap.registerPlugin(ScrollTrigger,Observer,ScrollToPlugin,Draggable,MotionPathPlugin);


// SECTION 1 ----------------------------------------

let mm = gsap.matchMedia();
mm.add({
    isMobile: '(max-width: 799px)', 
    isDesktop: '(min-width: 800px)',
}, (context) => {
    let {isMobile, isDesktop} = context.conditions; 
}
)

let tlIntro = gsap.timeline({
    scrollTrigger:{
        trigger:".Section1",
        id:"Section1",
        start:"top 0%",
        end: "+=2000",
        pin: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
    }
})

tlIntro.to(".carreSection1",{
    height: '40vh',
    width: '100%',
    duration: 2,
})
.to(".textCarreSection",{
    opacity: 1,
    duration: 8,
})
.to("#nameSec1",{
    opacity: 0,
    duration: 8,
})





// SECTION 2 -------------------------------------

gsap.to(".logoEsd", {
    duration: 5,
    motionPath:{
        path:'M1.49998 487C0.333314 431.667 27.9 316.6 147.5 299C267.1 281.4 315.333 212.667 324.5 180.5C343 130 408.7 23.4 523.5 1',
        autoRotate: true,
    },
    y: '100px',
    scrollTrigger:{
        trigger:".Section2",
        id:"Section2",
        start:"top 0%",
        end: "+=1000",
        pin: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
    }
})


// SECTION 3 ----------------------------------------------------------


let timelineLogiciel1 = gsap.timeline({
    scrollTrigger:{
        trigger:"#section3",
        id:"section3",
        start:"top 0%",
        end: "+=2000",
        pin: true,
        scrub: 1,
        toggleActions: "play none reverse reset",
    }
});

timelineLogiciel1.to(".css",{x:100,})
.to(".html",{x:100,})
.to(".photoshop",{x:100,})
.to(".illustrator",{x:100,})





/*
//Illustrator RESET
.to(".illustrator",{x:100,})
//Photoshop RESET
.to(".photoshop",{x:100,})
//HTML RESET
.to(".html",{x:100,})
//CSS RESET
.to(".css",{x:100,})
*/

// SECTION 4 ----------------------------------------------------------

Draggable.create(".photoDeProfil", {
    type: "x,y",

    onDragEnd: function(){
        
    }
})

Draggable.create(".classeName", {
    type: "x,y",
})

Draggable.create(".name", {
    type: "x,y",
    },
)

