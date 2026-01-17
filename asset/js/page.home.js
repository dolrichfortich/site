app.page.home = {

    init: function() {
        $(".owl-carousel").owlCarousel({
            loop: true,
            margin: 24,
            nav: false,
            center: true,
            autoplay: true,
            autoplayTimeout: 5000,
            autoplayHoverPause: true,
            dots: true,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 2
                },
                1000: {
                    items: 3
                }
            }
        });
    }
};