/** @format */

$(document).ready(() => {
  //////////////////NAVIGATION////////////////////////
  $(window).scroll(function () {
    if ($(this).scrollTop() > 53) {
      $("nav").addClass("navBg");
    }
    if ($(this).scrollTop() < 53) {
      $("nav").removeClass("navBg");
    }
  });

  //////////////////CONTACT////////////////////////
  $(".sayHi").click(() => {
    $(".container-filter").css("filter", "blur(2px)", "z-index", "-1");
    $("#contact-form").removeClass("hidden");
  });

  $("#close, .container").click(() => {
    $(".container-filter").css("filter", "blur(0px)", "z-index", "1");
    $("#contact-form").addClass("hidden");
  });

  //////////////////PROJECTS////////////////////////
  $("#project-1").hover(() => {
    $("#p1Description").fadeToggle("slow", "linear");
  });
  $("#project-2").hover(() => {
    $("#p2Description").fadeToggle("slow", "linear");
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

  ///////////////PRESENTATIONS////////////////////
  $("#rest-pres").hover(() => {
    $("#rest-description").fadeToggle("slow", "linear");
  });
  $("#restful-pres").hover(() => {
    $("#restful-description").fadeToggle("slow", "linear");
  });
  $("#soap-pres").hover(() => {
    $("#soap-description").fadeToggle("slow", "linear");
  });
  $("#json-pres").hover(() => {
    $("#json-description").fadeToggle("slow", "linear");
  });

  //////////////////VIDEO////////////////////////
  //Video play Button
  $("#rest-description").click(() => {
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
    $(".video-pres").css("visibility", "visible");
    $(".video-pres-soap").css("visibility", "hidden");
    $(".video-pres-restful").css("visibility", "hidden");
    $(".video-pres-json").css("visibility", "hidden");
  });

  $("#restful-description").click(() => {
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
    $(".video-pres-restful").css("visibility", "visible");
    $(".video-pres-soap").css("visibility", "hidden");
    $(".video-pres-json").css("visibility", "hidden");
    $(".video-pres-rest").css("visibility", "hidden");
  });

  $("#soap-description").click(() => {
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
    $(".video-pres-soap").css("visibility", "visible");
    $(".video-pres-json").css("visibility", "hidden");
    $(".video-pres-restful").css("visibility", "hidden");
    $(".video-pres-rest").css("visibility", "hidden");
  });

  $("#json-description").click(() => {
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
    $(".video-pres-json").css("visibility", "visible");
    $(".video-pres-soap").css("visibility", "hidden");
    $(".video-pres-restful").css("visibility", "hidden");
    $(".video-pres-rest").css("visibility", "hidden");
  });

  $(".close-vid").click(() => {
    if (
      $(".video-pres").css("visibility") === "visible" ||
      $(".video-pres-soap").css("visibility") === "visible" ||
      $(".video-pres-json").css("visibility") === "visible" ||
      $(".video-pres-restful").css("visibility") === "visible"
    ) {
      $(".pres-container").css("filter", "blur(0px)", "z-index", "1");
      $(".pres-container").removeClass("darken");
      $(
        ".video-pres, .video-pres-restful, .video-pres-soap, .video-pres-json"
      ).css("visibility", "hidden");
      //Stop youtube video
      $("iframe").attr("src", $("iframe").attr("src"));
    }
  });

  //////////////////////DIAGRAMS1//////////////////////////
  $("#nosql1diagram").hover(() => {
    $(".diagram1-description").fadeToggle("slow", "linear");
  });

  $("#nosql1diagram").click(() => {
    $(".nosql1").css("display", "block");
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
  });

  //////////////////////DIAGRAMS2//////////////////////////
  $("#nosql2diagram").hover(() => {
    $(".diagram2-description").fadeToggle("slow", "linear");
  });

  $("#nosql2diagram").click(() => {
    $(".nosql2").css("display", "block");
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
  });

  //////////////////////DIAGRAMS3//////////////////////////
  $("#nosql3diagram").hover(() => {
    $(".diagram3-description").fadeToggle("slow", "linear");
  });

  $("#nosql3diagram").click(() => {
    $(".nosql3").css("display", "block");
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
  });
  //////////////////////DIAGRAMS4//////////////////////////
  $("#nosql4diagram").hover(() => {
    $(".diagram4-description").fadeToggle("slow", "linear");
  });

  $("#nosql4diagram").click(() => {
    $(".nosql4").css("display", "block");
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
  });
  //////////////////////DIAGRAMS5//////////////////////////
  $("#nosql5diagram").hover(() => {
    $(".diagram5-description").fadeToggle("slow", "linear");
  });

  $("#nosql5diagram").click(() => {
    $(".nosql5").css("display", "block");
    $(".pres-container").css({
      filter: "blur(2px)",
      "z-index": "-1",
    });
    $(".pres-container").addClass("darken");
  });

  //Close X
  $(
    ".nosql1Close, .nosql2Close, .nosql3Close, .nosql4Close, .nosql5Close"
  ).click(() => {
    console.log("hey");
    if (
      $(".nosql1").css("display") === "block" ||
      $(".nosql2").css("display") === "block" ||
      $(".nosql3").css("display") === "block" ||
      $(".nosql4").css("display") === "block" ||
      $(".nosql5").css("display") === "block"
    ) {
      $(".nosql1, .nosql2, .nosql3, .nosql4, .nosql5").css("display", "none");
      $(".pres-container").css({
        filter: "blur()",
        "z-index": "-1",
      });
      $(".pres-container").removeClass("darken");
    }
  });

  ////////////END////////////
});
