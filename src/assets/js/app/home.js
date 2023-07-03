let isFirstTry = localStorage.getItem("FIRST_ENTRY");

if (isFirstTry) {
  $(".preloader").addClass("d-none");
}
if (isFirstTry == null) {
  localStorage.setItem("FIRST_ENTRY", true);
}
let sysTheme = localStorage.getItem("THEME");
if (sysTheme == "DARK") {
  $("body").addClass("theme_dark");
}
$(document).ready(function () {
  // let bgScore = new Audio("./assets/audio/score2.mp3");
  // bgScore.volume = 0.1;
  // bgScore.play();
  // if(bgScore.ended){
  //   bgScore.play()
  // }
  // $(".desktop_menu .main_header_menu li a").mouseover(function () {
  //   let hoverInt = new Audio("./assets/audio/hover.wav");
  //   hoverInt.play();
  // });
  // $(".desktop_menu .close_btn").click(function () {
  //   let closeMenu = new Audio("./assets/audio/close.wav");
  //   closeMenu.play();
  // });
  if (window.screen.width < 1200) {
    $(window).scroll(function () {
      if (window.scrollY > 20) {
        $("body").addClass("header_sticky");
      } else {
        $("body").removeClass("header_sticky");
      }
    });
  }
  $(".theme_selector").click(function () {
    if ($("body").hasClass("theme_dark")) {
      $("body").removeClass("theme_dark");
      localStorage.setItem("THEME", "LIGHT");
    } else {
      $("body").addClass("theme_dark");
      localStorage.setItem("THEME", "DARK");
    }
  });
  $(".hamburger_menu").click(function () {
    // let accClick = new Audio("./assets/audio/select.wav");
    // accClick.play();
    $("body").addClass("hamburger_nav_open");
    setTimeout(() => {
      $("body").addClass("showf_text");
    }, 100);
    setTimeout(() => {
      $("body").addClass("show_desktop_nav_links");
    }, 1000);
  });
  $(".desktop_menu .close_btn").click(function () {
    setTimeout(() => {
      $("body").removeClass("showf_text");
      $("body").removeClass("show_desktop_nav_links");
    }, 1000);
    $("body").removeClass("hamburger_nav_open");
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
  $(".portfolio_fullwidth_slider").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    variableWidth: true,
    centerMode: true,
    speed: 1000,
    nextArrow: `<div class="slick_arrows_portfolio_grid slick_portfolio_grid_right slick-arrow" style="">
    <svg xmlns="http://www.w3.org/2000/svg" width="29.428" height="25.751" viewBox="0 0 29.428 25.751">
      <path id="arrow-left-short" d="M4,17.375a1.839,1.839,0,0,0,1.839,1.839H27.145l-7.9,7.893a1.841,1.841,0,1,0,2.6,2.6L32.887,18.677a1.839,1.839,0,0,0,0-2.6L21.852,5.039a1.841,1.841,0,0,0-2.6,2.6l7.9,7.893H5.838A1.839,1.839,0,0,0,4,17.375Z" transform="translate(-3.999 -4.499)" fill="#fff" fill-rule="evenodd"></path>
    </svg>
  </div>`,
    prevArrow: `<div class="slick_arrows_portfolio_grid slick_portfolio_grid_left slick-arrow" style="">
    <svg xmlns="http://www.w3.org/2000/svg" width="29.671" height="25.964" viewBox="0 0 29.671 25.964">
      <path id="arrow-left-short" d="M33.67,17.481a1.854,1.854,0,0,1-1.854,1.854H10.333l7.962,7.958a1.857,1.857,0,1,1-2.626,2.626L4.544,18.794a1.854,1.854,0,0,1,0-2.626L15.669,5.043a1.857,1.857,0,0,1,2.626,2.626l-7.962,7.958H31.816A1.854,1.854,0,0,1,33.67,17.481Z" transform="translate(-3.999 -4.499)" fill="#fff" fill-rule="evenodd"></path>
    </svg>
  </div>`,
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
  // $(".clients_slider").slick({
  //   slidesToShow: 3,
  //   rows: 2,
  //   // slidesToScroll: 1,
  //   speed: 700,
  //   variableWidth: true,
  //   arrows: false,
  //   dots: false,

  //   infinite: true,
  //   cssEase: "ease",
  //   swipeToSlide: true,
  //   edgeFriction: 0,
  //   swipeToSlide: true,
  //   touchThreshold: 10000,
  //   responsive: [
  //     {
  //       breakpoint: 1200,
  //       settings: {
  //         slidesToShow: 3,
  //         variableWidth: false,
  //         autoplay: true,
  //         autoplaySpeed: 2000,
  //       },
  //     },
  //     {
  //       breakpoint: 767,
  //       settings: {
  //         slidesToShow: 2,
  //       },
  //     },
  //     {
  //       breakpoint: 580,
  //       settings: {
  //         slidesToShow: 1,
  //         variableWidth: false,
  //       },
  //     },
  //   ],
  // });
  if (window.screen.width > 1200) {
    const cursor = new MouseFollower({
      el: null,
      container: document.body,
      className: "mf-cursor",
      innerClassName: "mf-cursor-inner",
      textClassName: "mf-cursor-text",
      mediaClassName: "mf-cursor-media",
      mediaBoxClassName: "mf-cursor-media-box",
      iconSvgClassName: "mf-svgsprite",
      iconSvgNamePrefix: "-",
      iconSvgSrc: "",
      dataAttr: "cursor",
      hiddenState: "-hidden",
      textState: "-text",
      iconState: "-icon",
      activeState: "-active",
      mediaState: "-media",
      stateDetection: {
        "-pointer": "a,button",
        "-hidden": "iframe",
      },
      visible: true,
      visibleOnState: false,
      speed: 0.55,
      ease: "expo.out",
      overwrite: true,
      skewing: 0,
      skewingText: 2,
      skewingIcon: 2,
      skewingMedia: 2,
      skewingDelta: 0.001,
      skewingDeltaMax: 0.15,
      stickDelta: 0.1,
      showTimeout: 20,
      hideOnLeave: false,
      hideTimeout: 300,
      hideMediaTimeout: 300,
    });
    $(".custom_hero_banner").mouseover(function () {
      $("body").addClass("banner_enter");
    });
    $(".custom_hero_banner").mouseleave(function () {
      $("body").removeClass("banner_enter");
    });
    $(".accordion-button").each(function () {
      if ($(this).hasClass("collapsed")) {
        $(this).attr("data-cursor-text", "open");
      } else {
        $(this).attr("data-cursor-text", "Close");
      }
    });
    // $("[data-scroll-to]").click(function () {
    //   let accClick = new Audio("./assets/audio/swush.wav");
    //   accClick.play();
    // });
    $(".accordion-button").click(function () {
      // setTimeout(() => {
      // let accClick = new Audio("./assets/audio/click2.wav");
      // accClick.play();
      $(".accordion-button").each(function () {
        if ($(this).hasClass("collapsed")) {
          $(this).attr("data-cursor-text", "open");
        } else {
          $(this).attr("data-cursor-text", "Close");
        }
      });
      cursor.setText($(this).attr("data-cursor-text"));
      // }, 1000);
    });
  }

  $(".about_me .video_player_block .thumb_wrap .play_btn").click(function () {
    $("body").addClass("video_popup_open");
  });
  $(".video_popup_wrap .close_btn").click(function () {
    $("body").removeClass("video_popup_open");
  });

  setTimeout(() => {
    $("body").addClass("loading");
  }, 1000);
  $(".Close_blade").click(function () {
    $("body").addClass("page_loaded");
  });
});
