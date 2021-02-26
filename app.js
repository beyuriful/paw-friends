$(document).ready(function() {

    $(".burger").on("click", function() {
        $(".collapsible").slideToggle(); 
    }); 


    // initialize tiny slider
    tns({
            container: ".slider",
            items: 1,
            slideBy: "page",
            autoPlay: false,
            controlsContainer: ".slider-controls",
            navPosition: "bottom"
    }); 




    var slider = tns({
        container: ".banner-content",
        controlsContainer: ".banner-controls",
        items: 1,
        slideBy: "page",
        autoplay: true,
        autoplayTimeout: 3000,
        autoplayButtonOutput: false,
        

    }); 

    
    slider.play(); 

    
    
}); 