$(document).ready(function() {

  $('#tweet-controls').hide();

  $('.tweet-compose').on('click', function(){
    $(this).css('height', '5em');
    $('#tweet-controls').show();
  })
  var lengthAllowed = 140;
    $(".tweet-compose").keyup(function () {
        var charSoFar = $(this).val().length;
        var remaining = lengthAllowed - charSoFar;
        $("#char-count").text(remaining);
        if(remaining <=10) {
            $("#char-count").css("color", "red");
    }

});

});
