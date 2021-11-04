$('.partners__slide').slick({
    infinite: true,
    autoplaySpeed: 2000,
    autoplay: true,
    slidesToShow: 6,
    slidesToScroll: 1,
    pauseOnHover: true,
    dots: false,
    arrows: false,
    responsive: [{
            breakpoint: 841,
            settings: {
                slidesToShow: 5,
            }
        },
        {
            breakpoint: 541,
            settings: {
                slidesToShow: 3,
            }
        }
    ]
});