// init page
onload=function(){
    var alt = $(this).next("img").attr("alt");
    document.body.style.opacity="100%";
    // SEO title pagina
    var title = $('.title').text();
    document.title = title;
    // lazy load
    $("img.lazy").lazyload();
    $("img.lazy").show().lazyload();
}

 // Detect Mobile

 $( document ).ready(function() {
    if( navigator.userAgent.match(/Android/i)
 || navigator.userAgent.match(/webOS/i)
 || navigator.userAgent.match(/iPhone/i)
 || navigator.userAgent.match(/iPad/i)
 || navigator.userAgent.match(/iPod/i)
 || navigator.userAgent.match(/BlackBerry/i)
 || navigator.userAgent.match(/Windows Phone/i)
 ){
     // Share mobile function
    var url = $(location).attr('href');
    $(".share").click(function() {
        if (navigator.share) {
            navigator.share({
              title: '',
              text: '',
              url: url,
            })
              .then(() => console.log('Successful share'))
              .catch((error) => console.log('Error sharing', error));

            // for popups desktop
            $(".popup-share").css({"display" : "none"});
            $(".shadow_share").css({"display" : "none"});
          }
    }) // on mobile
  }
 else {
    return false; // not mobile
  }
 })

    // init page

    // like function

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

            function a(){ //enter val and style
                var x= $('#counter-like').val();
                var y= $('#counter-dislike').val();
                $('#counter-like').val(++x);
                $(".gg-smile-mouth-open").css({"background-color" : "rgb(92,22,197)"});
                $(".gg-smile-mouth-open").css({"border" : "2px solid rgb(92,22,197)"});
                if (cont2 == 1) {
                    cont2 = 0;
                var y= $('#counter-dislike').val();
                $('#counter-dislike').val(--y);
                $(".gg-smile-sad").css({"border" : "2px solid white"});
                $(".gg-smile-sad").css({"background-color" : "transparent"});
                }
            }
            
            function b(){ //exit val and style
                var x= $('#counter-like').val();
                $('#counter-like').val(--x);
                $(".gg-smile-mouth-open").css({"border" : "2px solid white"});
                $(".gg-smile-mouth-open").css({"background-color" : "transparent"});
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
            
        function w(){ //enter val and style
            var y= $('#counter-dislike').val();
            var x= $('#counter-like').val();
            $('#counter-dislike').val(++y);
            $(".gg-smile-sad").css({"border" : "2px solid rgb(92,22,197)"});
            $(".gg-smile-sad").css({"background-color" : "rgb(92,22,197)"});
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


    function v(){ //exit val and style
    var y= $('#counter-dislike').val();
        $('#counter-dislike').val(--y);
        $(".gg-smile-sad").css({"border" : "2px solid white"});
        $(".gg-smile-sad").css({"background-color" : "transparent"});
        $(".likes-slider").css({"width" : "0%"});
        $(".dislike-slider").css({"width" : "0%"});
    }

            //dislike function//

            //navbar
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
             //navbar
        
            //open comments
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


            //share popup
            var url = $(location).attr('href');
            $(".share").click(function() {
                $("#url_copy").val(url);
                $(".popup-share").css({"visibility":"visible"});
                $(".shadow_share").css({"opacity":"100%"});
                $(".shadow_share").css({"visibility":"visible"});

            })

            $(".shadow_share").click(function() {
                $(".shadow_share").css({"visibility":"hidden"});
                $(".shadow_share").css({"opacity":"0%"});
                $(".popup-share").css({"visibility":"hidden"});
                $(".alert_copy").css({"visibility" : "hidden"});
            })

            $(".close_popup_share").click(function() {
                $(".shadow_share").css({"visibility":"hidden"});
                $(".shadow_share").css({"opacity":"0%"});
                $(".popup-share").css({"visibility":"hidden"});
                $(".alert_copy").css({"visibility" : "hidden"});
            })

            alert_copy = false;
            $(".copy_url").click(function() {
                $('#url_copy').select();
                var ok = document.execCommand('copy');
                if (alert_copy == false)  
                { 
                $(".alert_copy").css({"visibility" : "visible"});
                $(".alert_copy").fadeIn( 400 ).delay(900).fadeOut( 400 ); 
            }
            })
            
            
            
