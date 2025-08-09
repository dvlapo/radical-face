import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const splitText = new SplitText(".loader-text", {
    type: "words",
});

const loaderTl = gsap.timeline({
    defaults: {
        ease: "power1.inOut",
    },
});

loaderTl
    .from(splitText.words, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.15,
    })
    .fromTo(
        ".loader-icon",
        {
            duration: 1,
            opacity: 0,
            scale: 0,
        },
        {
            opacity: 1,
            scale: 1,
        },
        "+=0.3"
    )
    .to(".loader-icon", {
        duration: 3,
        rotation: 360,
        repeat: -1,
    })
    .from(".loader-text-1", { duration: 0.5, x: 20 }, "-=3.5")
    .from(".loader-text-2", { duration: 0.5, x: -20 }, "<");
