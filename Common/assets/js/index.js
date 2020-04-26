$(document).ready(function() {

  $("#inpt_search").on('focus', function() {
    $(this).parent('label').addClass('active');
  });

  $("#inpt_search").on('blur', function() {
    if ($(this).val().length == 0)
      $(this).parent('label').removeClass('active');
  });

  $(".search__input").on("keydown", function search(e) {
    if (e.keyCode == 13) {
        if($(this).val() != "") {
          
        }
    }
  });


});
