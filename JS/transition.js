$(".connect").on("click", function(event) {
    event.preventDefault();
    
    const href  = $(this).attr("href");
    console.log(href);
    
//    window.history.pushState(null, null, href);
    
    $.ajax({
        url: href, 
        success: function(data) {
            $("body").fadeOut(350, function() {
                console.log(data);
                $("body").html(data);
                $("body").fadeIn(350);
            });
            
        }
    })
});