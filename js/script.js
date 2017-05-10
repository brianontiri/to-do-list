  $(document).ready(function() {
    $("form#textarea").submit(function(event) {
      event.preventDefault();
        var textarea = $("textarea#message").val();
        $("ul#post").append("<li>"+ textarea +"</li>")

        
  })
})
