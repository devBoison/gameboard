var main = function () {
  $(".more-btn").on("click", () => {
    $(".more-menu").show();
  });

  $(".share").on("click", () => {
    $(".share-menu").show();
  });

  $(".notification").on("click", (event) => {
    $(event.currentTarget).css({ color: "yellow" });
  });

  $("more-btn").on("click", (event) => {
    $(".more-menu").sibling().toggle();
  });

  $(".share").on("click", (event) => {
    $(".share-menu").toggle();
  });

  $(".notification").on("click", (event) => {
    $(".active").toggle();
  });
};

$(document).ready(main);
