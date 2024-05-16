$(document).ready(function(){
    searchImpact();
    hamburgerImpact();
    mainSlidernow();
    johnnysshoesSlide();
});

function searchImpact(){
    $('header div div:first-of-type label').click(function(){
        $('#searchPanel').toggleClass("active");
    });
}


function hamburgerImpact(){
    $('header div div:last-of-type label').click(function(){
        $('#hamburgerPanel').toggleClass("active");
    });

}

function mainSlidernow(){
    $('.mainFirstSlider').bxSlider({
        wrapperClass: "mainFirst",
        touchEnabled: false,
        auto: true,
        pause: 4000
    });

}


function johnnysshoesSlide(){
    
    var shoesSlider = $(".shoesSlider").bxSlider({
        maxSlides: 4,
        minSlides: 1,
        slideWidth: 320,
        slideMargin: 130,
        pager: false,
        wrapperClass: "subOne"

    });
}