$(function(){ //shorthand for document.ready
    $playlist = $('ul');

    function addSong(){
        var songTitle = $('#songAdder').val();
        var artistName = $('#artistAdder').val();
        if(songTitle != "" && artistName != ""){
            $playlist.append("<li>"+songTitle+" by "+artistName+" <span class='heart'>♡</span><span class='delete'>X</span></li>");
            $('#songAdder').val("");
            $('#artistAdder').val("");
        }
        else{
            alert("Make sure you have a song title and artist name!");
        }
        $('[class="heart"]').last().on("click", function(){
            $(this).parent().toggleClass('favorite');
        });
        $('[class="delete"]').last().on('click', function(){
            $(this).parent().slideUp(400, function(){
                $(this).remove();
            });
        });
    }
    function namePlaylist(){
        var playlistName = $('#playlistAdder').val();
        console.log(playlistName);
        if(playlistName!=""){
            $('#playlistNameContainer').text(playlistName);
        }else{
            alert("Make sure you've entered a playlist name!");
        }
    }
    $addButton = $('span#addButton');
    $addButton.on("click", addSong);
    $nameButton = $('span#nameButton');
    $nameButton.on("click", namePlaylist);
    $(document).on("keypress", function(e){
        if(e.which == "13"){ //if enter key was pressed
            addSong();
        }
    });
});