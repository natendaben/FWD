//JavaScript media query code adapted from: http://www.javascriptkit.com/javatutors/matchmediamultiple.shtml
var queryList = [ // list of window.matchMedia() queries
    window.matchMedia("(max-width: 800px)"),
    window.matchMedia("(max-width: 500px)")
];

function ActivateMediaQuery(query){
    if(queryList[1].matches){ //if screen size is smaller than 450px
        ScrollReveal().reveal('.reveal', {delay: 300, duration: 1000, reset: true, rotate: {x: 20, y: 20}, viewOffset: {top: 50, bottom: 50}});
        ScrollReveal().reveal('.date', {delay: 300, duration: 1000, reset: true, rotate: {x: 20, y: 20}, viewOffset: {top: 50, bottom: 0}});
        ScrollReveal().reveal('.fatreveal', {delay: 300, duration: 1000, reset: true, rotate: {x: 20, y: 20}, viewOffset: {top: 50, bottom: 83}});   
        ScrollReveal().reveal('.corner', {delay: 900, duration: 2000, reset: true});
        ScrollReveal().reveal('.sidebar', {delay: 1200, duration: 2000, reset: true});
        ScrollReveal().reveal('.bar', {delay: 1200, duration: 2000, reset: true});
    
    }else if(queryList[0].matches){ //else if screen size is smaller than 800px
        ScrollReveal().reveal('.reveal', {delay: 300, duration: 1000, reset: true, rotate: {x: 20, y: 20}, viewOffset: {top: 75, bottom: 75}});
        ScrollReveal().reveal('.fatreveal', {delay: 300, duration: 1000, reset: true, rotate: {x: 20, y: 20}, viewOffset: {top: 75, bottom: 125}});   
        ScrollReveal().reveal('.corner', {delay: 900, duration: 2000, reset: true});
        ScrollReveal().reveal('.sidebar', {delay: 1200, duration: 2000, reset: true});
        ScrollReveal().reveal('.bar', {delay: 1200, duration: 2000, reset: true});
    
    } else { //if screen scize is larger than 800px
        ScrollReveal().reveal('.reveal', {delay: 300, duration: 1000, reset: true, rotate: {x: 20, y: 20}, viewOffset: {top: 150, bottom: 150}});
        ScrollReveal().reveal('.fatreveal', {delay: 300, duration: 1000, reset: true, rotate: {x: 20, y: 20}, viewOffset: {top: 150, bottom: 150}});   
        ScrollReveal().reveal('.corner', {delay: 900, duration: 2000, reset: true});
        ScrollReveal().reveal('.sidebar', {delay: 1200, duration: 2000, reset: true});
        ScrollReveal().reveal('.bar', {delay: 1200, duration: 2000, reset: true});
    }
}
 
function switchImage(id, picture){
    document.getElementById(id).src = picture;
}

$(function(){
    for (var i=0; i<queryList.length; i++){ // loop through queries
        ActivateMediaQuery(queryList[i]); // call handler function explicitly at run time
        queryList[i].addListener(ActivateMediaQuery); // call handler function whenever the media query is triggered
    }
    $('#bus').hover(
        function(){switchImage("bus", "img/bus2.png");}, 
        function(){switchImage("bus", "img/bus.png");}
    );
    $('#smith').hover(
        function(){switchImage("smith", "img/smith2.png");}, 
        function(){switchImage("smith", "img/smith.png");}
    );
    $('#bench').hover(
        function(){switchImage("bench", "img/bench2.png");}, 
        function(){switchImage("bench", "img/bench.png");}
    );
    $('#hammock').hover(
        function(){switchImage("hammock", "img/hammock2.png");}, 
        function(){switchImage("hammock", "img/hammock.png");}
    );
    $('#cream').hover(
        function(){switchImage("cream", "img/cream2.png");}, 
        function(){switchImage("cream", "img/cream.png");}
    );
    $('#steak').hover(
        function(){switchImage("steak", "img/steak2.png");}, 
        function(){switchImage("steak", "img/steak.png");}
    );
    $('#car').hover(
        function(){switchImage("car", "img/car2.png");}, 
        function(){switchImage("car", "img/car.png");}
    );
});