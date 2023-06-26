$(document).ready(function () {
  $(".hamburger_menu").click(function () {
    $("body").addClass("hamburger_nav_open");
    setTimeout(() => {
      $("body").addClass("show_desktop_nav_links");
    }, 700);
  });
  $(".desktop_menu .close_btn").click(function () {
    $("body").removeClass("hamburger_nav_open");
    $("body").removeClass("show_desktop_nav_links");
  });
  $(".testmony_avatar_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
    asNavFor: ".testimony_slider",
  });
  if (window.screen.width < 1200) {
    $(".services_list_wrap").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      arrows: true,
      variableWidth: true,
      nextArrow: `<div class="slick_arrows_service slick_service_right slick-arrow" style="">
      <svg xmlns="http://www.w3.org/2000/svg" width="29.428" height="25.751" viewBox="0 0 29.428 25.751">
        <path id="arrow-left-short" d="M4,17.375a1.839,1.839,0,0,0,1.839,1.839H27.145l-7.9,7.893a1.841,1.841,0,1,0,2.6,2.6L32.887,18.677a1.839,1.839,0,0,0,0-2.6L21.852,5.039a1.841,1.841,0,0,0-2.6,2.6l7.9,7.893H5.838A1.839,1.839,0,0,0,4,17.375Z" transform="translate(-3.999 -4.499)" fill="#fff" fill-rule="evenodd"></path>
      </svg>
    </div>`,
      prevArrow: `<div class="slick_arrows_service slick_service_left slick-arrow" style="">
      <svg xmlns="http://www.w3.org/2000/svg" width="29.671" height="25.964" viewBox="0 0 29.671 25.964">
        <path id="arrow-left-short" d="M33.67,17.481a1.854,1.854,0,0,1-1.854,1.854H10.333l7.962,7.958a1.857,1.857,0,1,1-2.626,2.626L4.544,18.794a1.854,1.854,0,0,1,0-2.626L15.669,5.043a1.857,1.857,0,0,1,2.626,2.626l-7.962,7.958H31.816A1.854,1.854,0,0,1,33.67,17.481Z" transform="translate(-3.999 -4.499)" fill="#fff" fill-rule="evenodd"></path>
      </svg>
    </div>`,
    });
  }
  if (window.screen.width < 990) {
    $(".portfolio_listing .portfolio_slider").slick({
      infinite: false,
      slidesToShow: 1,
      slidesToScroll: 1,
      variableWidth: true,
      nextArrow: `<div class="slick_arrows_portfolio slick_portfolio_right slick-arrow" style="">
      <svg xmlns="http://www.w3.org/2000/svg" width="29.428" height="25.751" viewBox="0 0 29.428 25.751">
        <path id="arrow-left-short" d="M4,17.375a1.839,1.839,0,0,0,1.839,1.839H27.145l-7.9,7.893a1.841,1.841,0,1,0,2.6,2.6L32.887,18.677a1.839,1.839,0,0,0,0-2.6L21.852,5.039a1.841,1.841,0,0,0-2.6,2.6l7.9,7.893H5.838A1.839,1.839,0,0,0,4,17.375Z" transform="translate(-3.999 -4.499)" fill="#fff" fill-rule="evenodd"></path>
      </svg>
    </div>`,
      prevArrow: `<div class="slick_arrows_portfolio slick_portfolio_left slick-arrow" style="">
      <svg xmlns="http://www.w3.org/2000/svg" width="29.671" height="25.964" viewBox="0 0 29.671 25.964">
        <path id="arrow-left-short" d="M33.67,17.481a1.854,1.854,0,0,1-1.854,1.854H10.333l7.962,7.958a1.857,1.857,0,1,1-2.626,2.626L4.544,18.794a1.854,1.854,0,0,1,0-2.626L15.669,5.043a1.857,1.857,0,0,1,2.626,2.626l-7.962,7.958H31.816A1.854,1.854,0,0,1,33.67,17.481Z" transform="translate(-3.999 -4.499)" fill="#fff" fill-rule="evenodd"></path>
      </svg>
    </div>`,
    });
  }
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
