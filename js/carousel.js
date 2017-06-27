$(document).ready(function() {

    var $lightbox = $("<div class='lightbox'></div>");
    var $img = $("<img>");

    $lightbox.append($img);

    $("body").append($lightbox);

    $(".grid--item image").click(function(e) {
      //stops the default action of an element from happening
      e.preventDefault();

      var src = $(this).attr("xlink:href");

      $img.attr("src", src);
      $lightbox.fadeIn("fast");

      $lightbox.click(function() {
        $lightbox.fadeOut("fast");
      });
    });
});
