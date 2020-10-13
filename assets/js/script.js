$(document).ready(function () {
  $(window).scroll(function () {
    if ($(this).scrollTop() > 40) {
      $("#scroll-top").fadeIn();
    } else {
      $("#scroll-top").fadeOut();
    }
  });

  $("#scroll-top").click(function () {
    $("html ,body").animate(
      {
        scrollTop: 0,
      },
      800
    );
  });
});

$(".burger").click(function () {
  $(".language-menu").removeClass("open");
  $(".language-menu").fadeOut(300);
  $(this).toggleClass("open");
  if ($(".burger").hasClass("open")) {
    $(".mobile-menu").fadeIn(300);
    $("html body").css({
      overflow: "hidden",
      height: "100%",
    });
  } else {
    $(".mobile-menu").fadeOut(300);
    $("html body").css({
      overflow: "auto",
      height: "auto",
    });
  }
});

if ($(window).width() < 768) {
  $(".language-icon").click(function () {
    $(".mobile-menu").removeClass("open");
    $(".mobile-menu").fadeOut(300);
    $(".burger").removeClass("open");
    $(".language-menu").toggleClass("open");
    if ($(".language-menu").hasClass("open")) {
      $(".language-menu").fadeIn(300);
      $("html body").css({
        overflow: "hidden",
        height: "100%",
      });
    } else {
      $(".language-menu").fadeOut(300);
      $("html body").css({
        overflow: "auto",
        height: "auto",
      });
    }
  });
} else {
  $(".language-icon").click(function () {
    $(".mobile-menu").removeClass("open");
    $(".mobile-menu").fadeOut(300);
    $(".burger").removeClass("open");
    $(".language-menu").toggleClass("open");
    if ($(".language-menu").hasClass("open")) {
      $(".language-menu").fadeIn(300);
    } else {
      $(".language-menu").fadeOut(300);
    }
  });
  jQuery(function ($) {
    $(document).mouseup(function (e) {
      var div = $("#language-menu");
      if (!div.is(e.target) && div.has(e.target).length === 0) {
        div.hide();
        div.removeClass("open");
      }
    });
  });
}

$(".language-menu")
  .add($(".language-menu").children())
  .click(function () {
    $("html body").css({
      overflow: "auto",
      height: "auto",
    });
    $(".language-menu").removeClass("open");
    $(".language-menu").fadeOut(300);
  });

$(".mobile-menu")
  .add($(".mobile-menu").children())
  .click(function () {
    $("html body").css({
      overflow: "auto",
      height: "auto",
    });
    $(".burger").removeClass("open");
    $(".mobile-menu").fadeOut(300);
  });

$(".wrapper-slick").slick({
  dots: true,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  arrows: true,
  nextArrow:
      '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="slick-next">\n' +
      '<path d="M4.24993 15.5831H24.9134L17.415 8.08471L19.4182 6.08154L30.3364 16.9998L19.4182 27.918L17.415 25.9149L24.9134 18.4165H4.24993V15.5831Z" fill="#0C743C"/>\n' +
      '</svg>\n',
  responsive: [
    {
      breakpoint: 576,
      settings: {
        arrows: true,
        infinite: true,
        dots: true,
        prevArrow:
          '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="slick-prev"> <path d="M29.7501 15.5831H9.08657L16.585 8.08471L14.5818 6.08154L3.66357 16.9998L14.5818 27.918L16.585 25.9149L9.08657 18.4165H29.7501V15.5831Z" fill="#0C743C"/> </svg>',
        nextArrow:
          '<svg width="34" height="34" viewBox="0 0 34 34" fill="none" xmlns="http://www.w3.org/2000/svg" class="slick-next">\n' +
            '<path d="M4.24993 15.5831H24.9134L17.415 8.08471L19.4182 6.08154L30.3364 16.9998L19.4182 27.918L17.415 25.9149L24.9134 18.4165H4.24993V15.5831Z" fill="#0C743C"/>\n' +
            '</svg>\n',
      },
    },
    {
      breakpoint: 320,
      settings: {
        arrows: true,
      },
    },
  ],
});
const openModalButtons = document.querySelectorAll("[data-modal-target]");
const closeModalButtons = document.querySelectorAll("[data-close-button]");
const overlay = document.getElementById("overlay");

openModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = document.querySelector(button.dataset.modalTarget);
    openModal(modal);
  });
});

overlay.addEventListener("click", () => {
  const modals = document.querySelectorAll(".modal.active");
  modals.forEach((modal) => {
    closeModal(modal);
  });
});

closeModalButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const modal = button.closest(".modal");
    closeModal(modal);
  });
});

function openModal(modal) {
  if (modal == null) return;
  modal.classList.add("active");
  overlay.classList.add("active");
}

function closeModal(modal) {
  if (modal == null) return;
  modal.classList.remove("active");
  overlay.classList.remove("active");
}

$(document).ready(function () {
  $(".point_scroll").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        800,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});
