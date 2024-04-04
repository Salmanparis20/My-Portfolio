AOS.init();
//You can also pass an optional settings object
//below listed default settings

AOS.init({

    //Setting that can be overridden on per-element basic , by 'data-aos-*' attributes:
    offset:120,// offset (in px) from the original trigger point
    deley:0,//Values from 0to 3000 ,with step 50ms
    duration:1000,//Values from 0to 3000 ,with step 50ms
    easing:'ease',//default easing for AOS animations
    once:false,//Whether animation should happen only once -while scrolling down
    mirror:false,//Wheather elements should animate out while scrolling past them
    anchorPlacement:'top-bottom'//Defines which position of the element regsrding to window should trigger the animation
});