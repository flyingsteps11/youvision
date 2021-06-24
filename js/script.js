$(document).ready(function () {
    const owl1 = $(".about__history").owlCarousel({
        nav: false,
        items: 1,
        dots: false,

    });
    $('.about__history-next').click(function () {
        owl1.trigger('next.owl.carousel');
    });

    $('.about__history-prev').click(function () {
        owl1.trigger('prev.owl.carousel', [300]);
    });
    const owl2 = $(".team-carousel").owlCarousel({
        nav: false,
        margin: 23,
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoWidth: true,
            },

            376: {
                items: 3,
                dots: true,
                autoWidth: true,
            },
            1261: {
                items: 5,
                dots: false,
                autoWidth: false,
                draggable: false,
                mouseDrag: false,
            }
        }
    });
    const owl3 = $(".partners-carousel").owlCarousel({
        nav: false,
        margin: 46,
        responsive: {
            0: {
                items: 1,
                dots: true,
                autoWidth: true,
            },

            376: {
                items: 3,
                dots: true,
                autoWidth: true,
            },
            1261: {
                items: 5,
                dots: false,
                autoWidth: false,
                draggable: false,
                mouseDrag: false,
            }
        }
    });

});