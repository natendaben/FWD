var slidesArray = ["images/climbing1.jpg", "images/climbing2.jpg", "images/climbing3.jpg", "images/climbing4.jpg", "images/climbing5.jpg"]; //create array of slides that hold different image urls
var count = 0; //index for slidesArray

$(function(){ //document ready
    setInterval(switchSlide, 2500); //every 2500 milliseconds, call setInterval function defined below
});

function switchSlide(){
    $('#picture').animate({opacity: 0.0}, 1000, function(){ //first, fade the picture out. completion function moves on to next step...
        if (count < 4){ //if index is less than 4, keep moving through the array
            count++;
        } else { //otherwise, reset to beginning of slidesArray
            count = 0;
        }
        $('#picture').attr("src", slidesArray[count]).animate({opacity: 1.0}, 1000); //add the actual image url and animate it back into view over 1 second
    });

}