$(window).on('scroll', function(){
    var height = $('header').outerHeight();
    if($(window).scrollTop() > $(window).height() - height){
        $('header').addClass('white');
            } else {
            $('header').removeClass('white');
            }
        });

