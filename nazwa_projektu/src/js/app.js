$(function () {
  $('a[href*="#"]:not([href="#"])').click(function () {
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
document.querySelector("#nav-toggle")
  .addEventListener("click", function () {
    this.classList.toggle("active");
  });
$(document).ready(function () {
  $(".hamburger").click(function () {
    $(".main-menu").toggle("slide", {
      direction: "right"
    }, 1000);
  });

  var item = $("#single_item");
  $("#plus").click(function () {
    item.addClass("higher-img-zoom");
  });
  
  $("#minus").click(function () {
    item.removeClass("higher-img-zoom");
  });
  var search = $("#search_form");
   $(".search").click(function () {
    search.toggleClass("search-visible");
  });

  $("#close").click(function () {
    search.toggleClass("search-visible");
  });
  
  $('.owl-carousel').owlCarousel({
    loop: true,
    singleItem: true,
    margin: 10,
    responsiveClass: true
  })
});