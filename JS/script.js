function checkLink( videoLink){
        var videoLinkSplit = videoLink.split("/");
        // verification du protocole
        if(videoLinkSplit[0] !== "https:" && videoLinkSplit[0] !== "http:" ){
            return false ;
        }
        if(videoLinkSplit[2] !== "www.youtube.com"  && videoLinkSplit[2] !== "youtu.be"){
            return false ;
        }
        if(videoLinkSplit[3].length !== 19){
            return false ;
        }
        return true ;
}

function getVideoId(videoLink){
        return videoLink.substring( videoLink.length - 11 , videoLink.length);
        
}

function backToMenu(){
   $('#video').remove();
   $('#back').remove();
    $('section').removeClass('bounceOut');
    $('section').addClass('bounceIn');  
}

$(document).ready(function(){
    var section = $('section');



    $('#start').click(function(){
        var videoLink = $('input').val();
        if(checkLink(videoLink)){
            section.addClass('bounceOut');
           // section.effect( "explode", "slow" );
            var videoId = getVideoId(videoLink);
            var player = $('<div id="video" style="position: fixed; width: 100%; height: 100%"><iframe frameborder="0" height="100%" width="100%" src="https://youtube.com/embed/' + videoId + '?autoplay=1&controls=1&showinfo=0&autohide=1"></iframe></div>');
            player.appendTo($('body'));

            var backButton = $('<button id="back" >Retour</button>');
            
            backButton.appendTo($('body'));

            backButton.on("click", backToMenu);

        }else{
             section.addClass('bounce');
             setTimeout(function(){section.removeClass('bounce')} , 1000);
        }
    })

});