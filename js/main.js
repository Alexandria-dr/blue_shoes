gsap.registerPlugin(ScrollTrigger);
AOS.init();

function init() {

    gsap.set('.scroll',{
        y:-100
    })

    gsap.fromTo('.scrolldown',{
        y:-150,
        opacity:0},{y:0,
            opacity:1,
            scrollTrigger: {
                trigger:'.about',
                start:'top-=200 center',
                end:'center bottom-=160',
                scrub: true
            }

    });

    gsap.fromTo('.scrollup',{
        y:150,
        opacity:0},{y:0,
            opacity:1,
            scrollTrigger: {
                trigger:'.about',
                start:'top-=200 center',
                end:'center bottom-=160',
                scrub: true
            }

    })

};

window.addEventListener('load', function () {
    init();
});
