function toggleTips(){ //function for displaying tips
    $(this).next('.tips').slideToggle(600); //slide the tips up or down depending on current status with speed of 600 milliseconds
    $(this).toggleClass('closeTopic'); //toggle class of "closeTopic" which changes our background arrow icon
}

$(function(){
    $('.tips').hide(); //make sure all of the tips are collapsed (hidden) when the page loads
    $('.topic').click(toggleTips); //add event listener for topic drop-downs to call toggleTips function
});

