//Functions
function changeImage(imgId, newImgUrl){
    console.log("Image id is: " + imgId);
    console.log("Image url is: " + newImgUrl);
    document.getElementById(imgId).src = newImgUrl;
}

//Event Listeners
document.getElementById("homeLink").addEventListener("mouseenter", function(){
    changeImage("homeIcon", "img/homeActive.png");
});
document.getElementById("homeLink").addEventListener("mouseleave", function(){
    changeImage("homeIcon", "img/home.png");
});

document.getElementById("labLink").addEventListener("mouseenter", function(){
    changeImage("labIcon", "img/labActive.png");
});
document.getElementById("labLink").addEventListener("mouseleave", function(){
    changeImage("labIcon", "img/labs.png");
});

document.getElementById("projectLink").addEventListener("mouseenter", function(){
    changeImage("projectIcon", "img/projectActive.png");
});
document.getElementById("projectLink").addEventListener("mouseleave", function(){
    changeImage("projectIcon", "img/projects.png");
});

document.getElementById("journalLink").addEventListener("mouseenter", function(){
    changeImage("journalIcon", "img/journalActive.png");
});
document.getElementById("journalLink").addEventListener("mouseleave", function(){
    changeImage("journalIcon", "img/journal.png");
});

document.getElementById("beardLink").addEventListener("mouseenter", function(){
    changeImage("beardIcon", "img/beardActive.png");
});
document.getElementById("beardLink").addEventListener("mouseleave", function(){
    changeImage("beardIcon", "img/beard.png");
});

document.getElementById("lab1Link").addEventListener("mouseenter", function(){
    changeImage("lab1Icon", "img/lab1Active.png");
});
document.getElementById("lab1Link").addEventListener("mouseleave", function(){
    changeImage("lab1Icon", "img/lab1.png");
});

document.getElementById("lab2Link").addEventListener("mouseenter", function(){
    changeImage("lab2Icon", "img/lab2Active.png");
});
document.getElementById("lab2Link").addEventListener("mouseleave", function(){
    changeImage("lab2Icon", "img/lab2.png");
});

document.getElementById("lab3Link").addEventListener("mouseenter", function(){
    changeImage("lab3Icon", "img/lab3Active.png");
});
document.getElementById("lab3Link").addEventListener("mouseleave", function(){
    changeImage("lab3Icon", "img/lab3.png");
});

document.getElementById("lab4Link").addEventListener("mouseenter", function(){
    changeImage("lab4Icon", "img/lab4Active.png");
});
document.getElementById("lab4Link").addEventListener("mouseleave", function(){
    changeImage("lab4Icon", "img/lab4.png");
});

document.getElementById("midtermLink").addEventListener("mouseenter", function(){
    changeImage("midtermIcon", "img/lab1Active.png");
});
document.getElementById("midtermLink").addEventListener("mouseleave", function(){
    changeImage("midtermIcon", "img/lab1.png");
});

document.getElementById("lab5Link").addEventListener("mouseenter", function(){
    changeImage("lab5Icon", "img/lab5Active.png");
});
document.getElementById("lab5Link").addEventListener("mouseleave", function(){
    changeImage("lab5Icon", "img/lab5.png");
});

document.getElementById("project1Link").addEventListener("mouseenter", function(){
    changeImage("project1Icon", "img/project1Active.png");
});
document.getElementById("project1Link").addEventListener("mouseleave", function(){
    changeImage("project1Icon", "img/project1.png");
});

document.getElementById("lab6Link").addEventListener("mouseenter", function(){
    changeImage("lab6Icon", "img/lab6Active.png");
});
document.getElementById("lab6Link").addEventListener("mouseleave", function(){
    changeImage("lab6Icon", "img/lab6.png");
});

document.getElementById("lab7Link").addEventListener("mouseenter", function(){
    changeImage("lab7Icon", "img/lab7Active.png");
});
document.getElementById("lab7Link").addEventListener("mouseleave", function(){
    changeImage("lab7Icon", "img/lab7.png");
});

document.getElementById("lab7filesLink").addEventListener("mouseenter", function(){
    changeImage("lab7filesIcon", "img/lab7Active.png");
});
document.getElementById("lab7filesLink").addEventListener("mouseleave", function(){
    changeImage("lab7filesIcon", "img/lab7.png");
});

document.getElementById("project2Link").addEventListener("mouseenter", function(){
    changeImage("project2Icon", "img/project2Active.png");
});
document.getElementById("project2Link").addEventListener("mouseleave", function(){
    changeImage("project2Icon", "img/project2.png");
});

document.getElementById("finalLink").addEventListener("mouseenter", function(){
    changeImage("finalIcon", "img/finalActive.png");
});
document.getElementById("finalLink").addEventListener("mouseleave", function(){
    changeImage("finalIcon", "img/final.png");
});