
    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();
    });



	$(".short").click(function(){
	$(this).find(':first-child').toggleClass('rotate')
	$(this).next().slideToggle("slow");
	$(this).toggleClass("active"); return false;
	});

    
 