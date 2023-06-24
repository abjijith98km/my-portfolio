$(document).ready(function () {
  $('.hamburger_menu').click(function(){
    $('body').addClass('hamburger_nav_open')
  })
  $('.desktop_menu .close_btn').click(function(){
    $('body').removeClass('hamburger_nav_open')
  })
  $(".testmony_avatar_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".testimony_slider",
  });
  $(".testimony_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    asNavFor: ".testmony_avatar_slider",
    dots: true,
    appendDots: $(".testimonials_inner_wrap"),
    nextArrow: $(".slick_right"),
    prevArrow: $(".slick_left"),
  });
  // const cursor = new MouseFollower({
  //   el: null,
  //   container: document.body,
  //   className: "cursor",
  //   innerClassName: "mf-cursor-inner",
  //   textClassName: "mf-cursor-text",
  //   mediaClassName: "mf-cursor-media",
  //   mediaBoxClassName: "mf-cursor-media-box",
  //   iconSvgClassName: "mf-svgsprite",
  //   iconSvgNamePrefix: "-",
  //   iconSvgSrc: "",
  //   dataAttr: "cursor",
  //   hiddenState: "-hidden",
  //   textState: "-text",
  //   iconState: "-icon",
  //   activeState: "-active",
  //   mediaState: "-media",
  //   stateDetection: {
  //     "-pointer": "a,button",
  //     "-hidden": "iframe",
  //   },
  //   visible: true,
  //   visibleOnState: false,
  //   speed: 0.55,
  //   ease: "expo.out",
  //   overwrite: true,
  //   skewing: 0,
  //   skewingText: 2,
  //   skewingIcon: 2,
  //   skewingMedia: 2,
  //   skewingDelta: 0.001,
  //   skewingDeltaMax: 0.15,
  //   stickDelta: 0.15,
  //   showTimeout: 20,
  //   hideOnLeave: false,
  //   hideTimeout: 300,
  //   hideMediaTimeout: 300,
  // });

  // const el = document.querySelector(".portfolio_listing_card");

  // el.addEventListener("mouseenter", () => {
  //   cursor.setImg("/uploads/home/arrow-right.svg");
  // });
});
