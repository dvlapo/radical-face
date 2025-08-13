import { gsap } from "gsap";
import { SplitText } from "gsap/SplitText";
gsap.registerPlugin(SplitText);

const loaderSplitText = new SplitText(".loader-text", {
    type: "words",
});

const mainHeadingSplitText = new SplitText(".g-main__heading", {
    type: "chars",
});

const loaderTl = gsap.timeline({
    defaults: {
        ease: "power1.inOut",
    },
});

const latest = gsap.utils.toArray(".g-latest");

loaderTl
    .from(loaderSplitText.words, {
        duration: 1,
        opacity: 0,
        y: 50,
        stagger: 0.15,
    })
    .fromTo(
        ".g-loader-icon",
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
    .to(".g-loader-icon", {
        duration: 3,
        rotation: 360,
        repeat: -1,
    })
    .from(".g-loader-text-1", { duration: 0.4, x: 20 }, "-=3.5")
    .from(".g-loader-text-2", { duration: 0.4, x: -20 }, "<")
    .from(".g-main", {
        duration: 1,
        rotate: 90,
        opacity: 0.5,
        ease: "power4.out",
        delay: 1.5,
    })
    .from(
        ".g-hero-image",
        {
            duration: 1.5,
            opacity: 0.7,
            rotate: 80,
            ease: "power4.out",
        },
        "<"
    )
    .from(
        mainHeadingSplitText.chars,
        {
            y: -100,
            opacity: 0,
            stagger: 0.08,
            delay: 0.2,
        },
        "<"
    )
    .from(
        ".g-hero-text",
        {
            opacity: 0,
            y: 50,
        },
        "-=1"
    )
    .from(
        latest,
        {
            opacity: 0,
            yPercent: 100,
            stagger: 0.05,
            duration: 1.5,
            ease: "power4.out",
        },
        "<"
    )
    .from(
        ".g-header",
        {
            duration: 1,
            yPercent: -100,
            ease: "power4.out",
        },
        "<"
    )
    .to(".g-body", {
        css: {
            overflow: "auto",
        },
    })
    .to(".g-loader", {
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
