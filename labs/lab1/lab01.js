function changeFontToLobster(){
    document.body.style.fontFamily = "'Lobster', cursive";
}
function changeFontToHepta(){
    document.body.style.fontFamily = "'Hepta Slab', serif";
}
function changeToEdgyTheme(){
    document.body.style.backgroundColor = "black";
    document.body.style.color = "lawngreen";
}
function changeToFunTheme(){
    document.body.style.backgroundColor = "deeppink";
    document.body.style.color = "aqua";
}
function resetEverything(){
    document.body.style.backgroundColor = "white";
    document.body.style.color = "black";
    document.body.style.fontFamily = "'Roboto', sans-serif";
    document.getElementById("empty").innerHTML = "";
}
function backgroundSurprise(){
    document.body.style.backgroundImage = "url('https://media.giphy.com/media/DgLwPZVu5tT32/source.gif')";
    document.body.style.backgroundSize = "cover";
}
function resetBackground(){
    document.body.style.backgroundImage = "none";
}
function tigersActivate(){
    document.getElementById("empty").innerHTML = '<h2>Time to Learn!</h2><img id="pic" src="img/tiger.png" alt="Tiger"><p class="learnText">The tiger (Panthera tigris) is the largest species among the Felidae and classified in the genus Panthera. It is most recognisable for its dark vertical stripes on reddish-orange fur with a lighter underside. It is an apex predator, primarily preying on ungulates such as deer and wild boar. It is territorial and generally a solitary but social predator, requiring large contiguous areas of habitat, which support its requirements for prey and rearing of its offspring. Tiger cubs stay with their mother for about two years, before they become independent and leave the home range of their mother to establish their own.</p>';
}
function pineapplesActivate(){
    document.getElementById("empty").innerHTML = '<h2>Time to Learn!</h2><img id="pic" src="img/pineapple.png" alt="Pineapple"><p class="learnText">The pineapple (Ananas comosus) is a tropical plant with an edible fruit, also called a pineapple, and the most economically significant plant in the family Bromeliaceae. Pineapples may be cultivated from the offset produced at the top of the fruit, possibly flowering in five to ten months and fruiting in the following six months. Pineapples do not ripen significantly after harvest. In 2016, Costa Rica, Brazil, and the Philippines accounted for nearly one-third of world production of pineapples.</p>';
}
document.getElementById("lobster").addEventListener("click", changeFontToLobster);
document.getElementById("hepta").addEventListener("click", changeFontToHepta);

document.getElementById("edgy").addEventListener("click", changeToEdgyTheme);
document.getElementById("fun").addEventListener("click", changeToFunTheme);

document.getElementById("yesFireworks").addEventListener("mouseenter", backgroundSurprise);
document.getElementById("yesFireworks").addEventListener("mouseleave", resetBackground);

document.getElementById("tigers").addEventListener("click", tigersActivate);
document.getElementById("pineapples").addEventListener("click", pineapplesActivate);

document.getElementById("reset").addEventListener("click", resetEverything);
