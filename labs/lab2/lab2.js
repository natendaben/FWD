var outputBox = document.getElementById("output");
function doEverything(){
    // document.body.style.backgroundColor = "blue";
    outputBox.value = ""; //reset output
    var personName = document.getElementById("name").value;
    if(personName != ""){
        outputBox.value += "Okay, so you want to take " + personName + " on a date. You can do this! ";
    }
    else{
        outputBox.value += "You don't want to take anyone on a date? Let's just pretend you do for the sake of this lab. ";
    }
    var idea = document.getElementById("idea");
    if (idea.value == "none"){
        outputBox.value += "Looks like you didn't pick a date idea. That makes things a little more difficult. ";
    }
    else if(idea.value == "dinner"){
        outputBox.value += "Remember that you've already figured out the theme of this date, which is the hardest part. It'll be a great romantic dinner! "
    }
    else if(idea.value == "skydiving"){
        outputBox.value += "Remember that you've already figured out the theme of this date, which is the hardest part. It'll be a great skydiving adventure! "
    }
    else if(idea.value == "getaway"){
        outputBox.value += "Remember that you've already figured out the theme of this date, which is the hardest part. It'll be a great weekend trip! "
    }
    else if(idea.value == "picnic"){
        outputBox.value += "Remember that you've already figured out the theme of this date, which is the hardest part. It'll be a great picnic in the park! "
    }
    else if(idea.value == "casual"){
        outputBox.value += "Remember that you've already figured out the theme of this date, which is the hardest part. It'll be a classic dinner and a movie! "
    }
    var car = document.getElementById('car');
    var friends = document.getElementById('friends');
    var writing = document.getElementById('writing');
    var music = document.getElementById('music');
    if(music.checked == false && friends.checked == false && writing.checked == false && car.checked == false){
        //add nothing
    }
    else{
        outputBox.value += "The good news is, you have ";
        if(car.checked == true){
            outputBox.value += "a car to pick them up with and ";
        }
        if(friends.checked == true){
            outputBox.value += "friends to help set up a surprise and ";
        }
        if(writing.checked == true){
            outputBox.value += "writing skills to write a romantic poem for them and ";
        }
        if(music.checked == true){
            outputBox.value += "music skills to play them a sweet ballad and ";
        }
        outputBox.value += "that will help you win their heart! ";
    }
    if(document.getElementById('low').checked == true){
        console.log("low budget");
        outputBox.value += "You should probably cut costs wherever possible. Are you a college student? ";
    }
    else if(document.getElementById('medium').checked == true){
        outputBox.value += "Remember, you can splurge a little bit, but don't go too crazy. ";
    }
    else if(document.getElementById('high').checked == true){
        outputBox.value += "Feel free to buy literally whatever you want for this date. Sounds like you have plenty of cash, so show them a good time! ";
    }
    outputBox.value += "Good luck with your date and don't forget to tell your friends about this fully-featured date planning service!";
}

document.getElementById("enter").addEventListener("click", doEverything);