    $(".tabs-menu a").click(function(event) {
        event.preventDefault();
        $(this).parent().addClass("current");
        $(this).parent().siblings().removeClass("current");
        var tab = $(this).attr("href");
        $(".tab-content").not(tab).css("display", "none");
        $(tab).fadeIn();


    var swiper = new Swiper('.jobs-container', {
    spaceBetween: 30,    
    speed: 2000,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    });



	$(".short").click(function(){
	$(this).find(':first-child').toggleClass('rotate')
	$(this).next().slideToggle("slow");
	$(this).toggleClass("active"); return false;
	});




    if($(window).innerWidth() <= 714){


        const sidebarBox = document.querySelector('#box'),
            sidebarBtn = document.querySelector('#btn'),
            pageWrapper = document.querySelector('#page-wrapper');

        sidebarBtn.addEventListener('click', event => {
            sidebarBtn.classList.toggle('active');
        sidebarBox.classList.toggle('active');
    });

        pageWrapper.addEventListener('click', event => {

            if (sidebarBox.classList.contains('active')) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
        }
    });

        window.addEventListener('keydown', event => {

            if (sidebarBox.classList.contains('active') && event.keyCode === 27) {
            sidebarBtn.classList.remove('active');
            sidebarBox.classList.remove('active');
        }
    });

    };