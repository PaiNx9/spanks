
onload=function(){
    var alt = $(this).next("img").attr("alt");
    document.body.style.opacity="100%";
    //SEO title pagina//
    var title = $('.title').text();
    document.title = title;
    $("img.lazy").lazyload();
    $("img.lazy").show().lazyload();
}
            //like function//

            cont = 0;
            $( ".like" ).click(function() {  
                if(cont == 0)
                  {
                 a();
                  cont += 1;
                  }
              else
                  {
                  b();
                  cont = 0;
                  }
            });

            function a(){
                var x= $('#counter-like').val();
                var y= $('#counter-dislike').val();
                $('#counter-like').val(++x);
                $(".gg-smile-mouth-open").css({"background-color" : "rgb(83,5,185)"});
                $(".gg-smile-mouth-open").css({"border" : "2px solid #5e02d6c9"});
                $(".likes-slider").css({"width" : "100%"});
                $(".likes-slider").css({"opacity" : "100%"});
                $(".dislike-slider").css({"width" : "0%"});
                if (cont2 == 1) {
                    cont2 = 0;
                var y= $('#counter-dislike').val();
                $('#counter-dislike').val(--y);
                $(".gg-smile-sad").css({"border" : "2px solid white"});
                $(".gg-smile-sad").css({"background-color" : "transparent"});
                }
            }
            
            function b(){
                var x= $('#counter-like').val();
                $('#counter-like').val(--x);
                $(".gg-smile-mouth-open").css({"border" : "2px solid white"});
                $(".gg-smile-mouth-open").css({"background-color" : "transparent"});
                $(".likes-slider").css({"width" : "0%"});
                $(".dislike-slider").css({"width" : "0%"});
            }

            //like function//

            //dislike function//

            cont2 = 0;
            $( ".dislike" ).click(function() {  
              if(cont2 == 0)
                  {
                 w();
                  cont2 += 1;
                  }
              else 
                  {
                  v();
                  cont2 = 0;
                  }
            });
            
        function w(){
            var y= $('#counter-dislike').val();
            var x= $('#counter-like').val();
            $('#counter-dislike').val(++y);
            $(".gg-smile-sad").css({"border" : "2px solid #5e02d6c9"});
            $(".gg-smile-sad").css({"background-color" : "rgb(83,5,185)"});
            $(".dislike-slider").css({"width" : "100%"});
            $(".dislike-slider").css({"opacity" : "100%"});
            $(".likes-slider").css({"width" : "0%"});
            if(cont == 1) {
                cont = 0;
            var x= $('#counter-like').val();
            $('#counter-like').val(--x);
            $(".gg-smile-mouth-open").css({"border" : "2px solid white"});
            $(".gg-smile-mouth-open").css({"background-color" : "transparent"});
            }
        }


    function v(){
    var y= $('#counter-dislike').val();
        $('#counter-dislike').val(--y);
        $(".gg-smile-sad").css({"border" : "2px solid white"});
        $(".gg-smile-sad").css({"background-color" : "transparent"});
        $(".likes-slider").css({"width" : "0%"});
        $(".dislike-slider").css({"width" : "0%"});
    }

            //dislike function//

            //navbar//
            function menubar(){
            if ($(this).toggle('.menu-drw').toggle) {
                    $(".menu-drw").css({"left" : "225.5px"});
                    $(".menu-drw").css({"visibility" : "visible"});
                    $(".menu-drw").css({"opacity" : "1"});
                    }}
            function exit(){
        if ($(this).toggle('.menu-drw').toggle) {
                $(".menu-drw").css({"left" : "-19%"});
                $(".menu-drw").css({"visibility" : "hidden"});
                $(".menu-drw").css({"opacity" : "0"});
                }}
            function close(){
        if ($(this).toggle('.menu-drw').toggle) {
                $(".menu-drw").css({"left" : "190%"});
                $(".menu-drw").css({"visibility" : "hidden"});
                $(".menu-drw").css({"opacity" : "0"});
                }}
             //navbar//
        
            //open comments//
                opening = false;
                var count = $('.profile-channel-cm-others').length;
            $(".comments").click(function() {
              if (opening == false) {
                  opening += true;
                    $(".comments_open").css({"display" : "block"});
                    $('html, body').animate({
                        scrollTop: $(".title").offset().top
                      }, 500);
                $(".btn-post").prop('disabled')
                  }
            else {
                opening = false
                    $(".comments_open ").css({"display" : "none"});
                  }
            });


            $(".btn-post").click(function() {
                $('#cmt').val("");
                $(".btn-post").prop('disabled',true)
                $('#cmt').css('height', 'auto');
                $(".alert-confirm").css({"visibility" : "visible"});
                $(".alert-confirm").fadeIn( 400 ).delay(900).fadeOut( 400 );
            })

            $('#cmt').on('input', function() { 
             
            });
            
            $('#cmt').on('keyup input', function() { 
                $(this).css('height', 'auto').css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));
                $(".btn-post").prop('disabled', ($(this).val().value == ("")))
                });
            //open comments//

            //report pop-up//
                function report() {
                    $(".popup-report").css({"display":"block"});
                    $(".shadow").css({"opacity":"100%"});
                    $(".shadow").css({"visibility":"visible"});
                    
                }
                
                $(".shadow").click(function() {
                    $(".shadow").css({"visibility":"hidden"});
                    $(".shadow").css({"opacity":"0%"});
                    $(".popup-report").css({"display":"none"});
                })

                $(".close_popup").click(function() {
                    $(".shadow").css({"visibility":"hidden"});
                    $(".shadow").css({"opacity":"0%"});
                    $(".popup-report").css({"display":"none"});
                })

            //report pop-up//


        //video-cfg fullscreen//

    
        this.fullScreenMode = document.fullScreen || document.mozFullScreen || document.webkitIsFullScreen; // This will return true or false depending on if it's full screen or not.

        $(document).on ('mozfullscreenchange webkitfullscreenchange fullscreenchange',function(){
               this.fullScreenMode = !this.fullScreenMode;
              simulateFullScreen();
         });
        
        
        var simulateFullScreen = function() {
             if(this.fullScreenMode) {
                    docElm = document.documentElement
                    if (docElm.requestFullscreen) 
                    $('#container video').css({"max-height" : "700px"});
                    else{
                        if (docElm.mozRequestFullScreen) 
                        $('#container video').css({"max-height" : "700px"});
                        else{
                           if (docElm.webkitRequestFullScreen)
                           $('#container video').css({"max-height" : "700px"});
                        }
                    }
             }else{
                     if (document.exitFullscreen) 
                     $('#container video').css({"max-height" : "7000px"});
                     else{ 
                          if (document.mozCancelFullScreen) 
                          $('#container video').css({"max-height" : "7000px"});
                          else{
                             if (document.webkitCancelFullScreen) 
                             $('#container video').css({"max-height" : "7000px"});
                          }
                     }
             }
        
             this.fullScreenMode= !this.fullScreenMode
        
        }
        //video-cfg fullscreen//

