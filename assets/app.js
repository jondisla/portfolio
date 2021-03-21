/** @format */

$(document).ready(() => {
  //Stop video used in close video element
  const video = document.querySelector("video");
  function stopVideo() {
    video.pause();
    video.currentTime = 0;
  }

  //Project hovers
  $("#project-1").hover(() => {
    $("#p1Description").fadeToggle("slow", "linear");
  });
  $("#project-2").hover(() => {
    $("#p2Description").fadeToggle("slow", "linear");
  });
  $("#rest-pres").hover(() => {
    $("#rest-description").fadeToggle("slow", "linear");
  });
  $("#project-3").hover(() => {
    $("#p3Description").fadeToggle("slow", "linear");
  });
  $("#project-4").hover(() => {
    $("#p4Description").fadeToggle("slow", "linear");
  });
  $("#project-5").hover(() => {
    $("#p5Description").fadeToggle("slow", "linear");
  });
  $("#project-6").hover(() => {
    $("#p6Description").fadeToggle("slow", "linear");
  });

  //Contact form & Button
  $("#sayHi").click(() => {
    $(".container-filter").css("filter", "blur(2px)", "z-index", "-1");
    $("#contact-form").removeClass("hidden");
  });

  $("#close, .container").click(() => {
    $(".container-filter").css("filter", "blur(0px)", "z-index", "1");
    $("#contact-form").addClass("hidden");
  });
  //Video play Button
  $("#rest-description").click(() => {
    $(".pres-container").css("filter", "blur(2px)", "z-index", "-1");
    $(".video-pres").css("visibility", "visible");
  });

  $(".close-vid").click(() => {
    if ($(".video-pres").css("visibility") === "visible") {
      $(".pres-container").css("filter", "blur(0px)", "z-index", "1");
      $(".video-pres").css("visibility", "hidden");
      stopVideo();
    }
  });

  $(window).scroll(function () {
    if ($(this).scrollTop() > 53) {
      $("nav").addClass("navBg");
    }
    if ($(this).scrollTop() < 53) {
      $("nav").removeClass("navBg");
    }
  });
});
