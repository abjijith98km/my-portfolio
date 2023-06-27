gsap.registerPlugin(ScrollTrigger);

// Using Locomotive Scroll from Locomotive https://github.com/locomotivemtl/locomotive-scroll
if (window.screen.width > 1200) {
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector(".smooth-scroll"),
    smooth: true,
    lerp: 0.1,
  });
  // each time Locomotive Scroll updates, tell ScrollTrigger to update too (sync positioning)
  locoScroll.on("scroll", ScrollTrigger.update);

  // tell ScrollTrigger to use these proxy methods for the ".smooth-scroll" element since Locomotive Scroll is hijacking things
  ScrollTrigger.scrollerProxy(".smooth-scroll", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    }, // we don't have to define a scrollLeft because we're only scrolling vertically.
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    // LocomotiveScroll handles things completely differently on mobile devices - it doesn't even transform the container at all! So to get the correct behavior and avoid jitters, we should pin things with position: fixed on mobile. We sense it by checking to see if there's a transform applied to the container (the LocomotiveScroll-controlled element).
    pinType: document.querySelector(".smooth-scroll").style.transform
      ? "transform"
      : "fixed",
  });
  $(".accordion-button").click(function () {
    setTimeout(() => {
      locoScroll.update();
    }, 1000);
  });
  if (window.screen.width > 1200) {
    // gsap.from(".about_me .video_player_block .thumb_wrap", {
    //   width: "100%",
    //   duration: 0.8,
    //   scrollTrigger: {
    //     trigger: ".about_me .video_player_block .thumb_wrap",
    //     start: "50% 50%",
    //     stop: "+500",
    //     scroller: ".smooth-scroll",
    //     pin:true
    //   },
    // });
    $(".portfolio_listing_card").each(function () {
      gsap.from($(this), {
        rotateY: "-90deg",
        duration: 1.5,
        scrollTrigger: {
          trigger: $(this),
          start: "50% 100%",
          scroller: ".smooth-scroll",
        },
      });
    });
    $(".service_item").each(function () {
      gsap.from($(this), {
        scale: "0",
        duration: 1.5,
        scrollTrigger: {
          trigger: $(this),
          start: "30% 100%",
          scroller: ".smooth-scroll",
        },
      });
    });
    $(".accordion-item").each(function () {
      gsap.from($(this), {
        opacity: "0",
        y: 100,
        duration: 0.8,
        scrollTrigger: {
          trigger: $(this),
          start: "30% 100%",
          scroller: ".smooth-scroll",
        },
      });
    });
  }
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll.
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
}
