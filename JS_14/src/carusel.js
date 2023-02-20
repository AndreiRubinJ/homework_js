onload = () => {
    $(document).ready(function () {
        $(".img-items").slick({            
            infinite: true,
            slidesToShow: 5,
            slidesToScroll: 2,
            centerMode: true,
            autoplay: true,
            autoplaySpeed: 1000,
            responsive: [
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    },
                },
            ],
        });
    });
}