$(document).ready(function() {

  $("#inpt_search").on('focus', function() {
    $(this).parent('label').addClass('active');
  });

  $("#inpt_search").on('blur', function() {
    if ($(this).val().length == 0)
      $(this).parent('label').removeClass('active');
  });

  $(".search__input").on('keyup', function() {
    var charCount = $(this).val().replace(/\s/g, '').length;
    if (charCount >= 3) {
      $.ajax({
        type: 'GET',
        async: true,
        url: serviceIP + "searchSuggestions?searchTerm=" + $(this).val(),
        dataType: 'json',
        contentType: 'application/json',
        success: function(resp) {
          console.log(resp);
        },
        error: function(error) {
          console.log(error);
        }
      });
    }
  });

  $(".search__input").on("keydown", function search(e) {
    if (e.keyCode == 13) {
      if ($(this).val() != "") {

      }
    }
  });


});
