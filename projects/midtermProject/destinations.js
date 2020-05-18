$content = $('#contentArea'); //define object for content area

function boulderContent(){ //add content for bouldering destination
    $('#contentArea').html("<img src='images/rmnp.jpg' alt='rmnp'><p>Quality gneiss colored with splotches of green, yellow, black, and gray, a seemingly unlimited amount of development potential, breathtaking vistas of some of Rocky’s most scenic peaks, hundreds of four-star boulder problems (of all grades), and a rich history all make this place one of the most visited summer climbing areas in North America.</p>");
}

function rockContent(){ //add content for rock climbing destination
    $('#contentArea').html("<img src='images/jurassicpark.jpg' alt='jurassicpark'><p>Jurassic Park is an exceptionally pretty area located just south of Estes Park above Lilly Lake. The climbs are short, steep, slabby and fun on west facing sunny rock. The views of Longs Peak and the Diamond are spectacular as are the wildflowers and the lake below. The approach is relatively short. Jurassic park makes for a great full day outing.</p>");
}
function iceContent(){ //add content for ice climbing destination
    $('#contentArea').html("<img src='images/ouray.jpg' alt='ouray'><p>Within a one mile span of the Uncompahgre Gorge the Ouray Ice Park contains over 200 manmade ice and mixed climbs, 14 distinct climbing areas, and three miles of vertical terrain. Since its inception more than two decades ago, the Ouray Ice Park has become a premier destination for climbers, travelers and outdoor enthusiasts from around the world.</p>");
}

$(function(){ //on document ready
    //add event listeners for each icon to add content for that destination
    $('#boulderIcon').on('click', boulderContent);
    $('#rockIcon').on('click', rockContent);
    $('#iceIcon').on('click', iceContent);
});
