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
    .from(".loader-text-2", { duration: 0.5, x: -20 }, "<")
    .from(".main", {
        duration: 1.5,
        rotate: 90,
        opacity: 0.5,
        ease: "power4.out",
    })
    .from(
        ".header",
        {
            duration: 1,
            yPercent: -100,
            ease: "power4.out",
        },
        "-=0.8"
    )
    .to("body", {
        css: {
            overflow: "auto",
        },
    })
    .to(".loader", {
        css: {
            display: "none",
        },
    });

const navLinks = document.querySelectorAll(".nav__link");
navLinks.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
        link.classList.add("hovered");
    });
    link.addEventListener("mouseleave", (e) => {
        link.classList.remove("hovered");
    });
});
