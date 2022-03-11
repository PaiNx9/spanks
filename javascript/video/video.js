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

$( document ).ready(function() {
    //like counter (input) size
    if ($("#counter-like").val().length == 1) {
        $("#counter-like").css({"width" : "1.2rem"});
    }
    if ($("#counter-like").val().length == 2) {
        $("#counter-like").css({"width" : "1.7rem"});
    }

    if ($("#counter-like").val().length == 3) {
        $("#counter-like").css({"width" : "2.1rem"});
    }

    if ($("#counter-like").val().length == 4) {
        $("#counter-like").css({"width" : "2.4rem"});
    }

    if ($("#counter-like").val().length == 5) {
        $("#counter-like").css({"width" : "2.57rem"});
    }

    if ($("#counter-like").val().length == 6) {
        $("#counter-like").css({"width" : "2.75rem"});
    }

    //dislike counter (input) size
    if ($("#counter-dislike").val().length == 1) {
        $("#counter-dislike").css({"width" : "1.2rem"});
    }
    if ($("#counter-dislike").val().length == 2) {
        $("#counter-dislike").css({"width" : "1.7rem"});
    }

    if ($("#counter-dislike").val().length == 3) {
        $("#counter-dislike").css({"width" : "2.1rem"});
    }

    if ($("#counter-dislike").val().length == 4) {
        $("#counter-dislike").css({"width" : "2.4rem"});
    }

    if ($("#counter-dislike").val().length == 5) {
        $("#counter-dislike").css({"width" : "2.57rem"});
    }

    if ($("#counter-dislike").val().length == 6) {
        $("#counter-dislike").css({"width" : "2.75rem"});
    }
 })

    // init page

    // like function

    //Counter size (input)//
        //Counter Likes input
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

            $('#cmt').on('keyup input', function() { 
                $(this).css('height', 'auto').css('height', this.scrollHeight + (this.offsetHeight - this.clientHeight));
                $(".btn-post").prop('disabled', ($(this).val() == ''))
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
            

            "use strict";

            let hour = 0;
            let minute = 0;
            let second = 0;
            let millisecond = 0;
            let cron;
            
                var timer_ = false;
            $(".start_").click(function() {
                if (timer_ == false) {
                  timer_ = true;
                  start();
                }
                else {
                  timer_ = false
                  pause();
                }
            })
            
            function start() {
              pause();
              cron = setInterval(() => { timer(); }, 10);
            }
            
            function pause() {
              clearInterval(cron);
            }
            
            function timer() {
              if ((millisecond += 10) == 1000) {
                millisecond = 0;
                second++;
              }
              
              if (second == 60) {
                second = 0;
                minute++;
              }
            
              if (minute == 60) {
                minute = 0;
                hour++;
              }
            
              document.getElementById('second').value = returnData(second);
            }
            
            function returnData(input) {
              return input > -1 ? input : `0${input}`
            }
            
            get_ = $(".here");
            durations = get_durations.duration;
            
            function returnData(input) {
              if (second ==  $(".time").val()) {
                alert(durations)
              }
            }
            
            
            $(document).ready(function()  {
                if ($(".receive_time_min").val() < 1) {
                  calcular()
                  start();
                }
                else {
                  calcularmin()
                  start();
            }})
            
            
            function calcular() {
              var calc = $(".timersec_video").val()
            
              if (calc > 4 ) {
                $(".time").val(3)
              }
              
              if (calc > 9 ) {
                $(".time").val(3)
              }
            
              if (calc > 10) {
                $(".time").val(4)
              }
            
              if (calc > 15) {
                $(".time").val(7)
              }
            
              if (calc > 20) {
                $(".time").val(7)
              }
            
              if (calc > 24) {
                $(".time").val(7)
              }
            
              if (calc > 29) {
                $(".time").val(10)
              }
            
              if (calc > 34) {
                $(".time").val(10)
              }
            
              if (calc > 40) {
                $(".time").val(12)
              }
            
              if (calc > 49) {
                $(".time").val(12)
              }
            
              if (calc > 55) {
                $(".time").val(13)
              }
            
            }
            
            function calcularmin() {
              var calc = $(".timersec_video").val()
            
              if (calc > 4 ) {
                $(".time").val(13)
              }
              if (calc > 9 ) {
                $(".time").val(13)
              }
            
              if (calc > 10) {
                $(".time").val(13)
              }
            
              if (calc > 15) {
                $(".time").val(14)
              }
            
              if (calc > 20) {
                $(".time").val(14)
              }
            
              if (calc > 24) {
                $(".time").val(15)
              }
            
              if (calc > 29) {
                $(".time").val(15)
              }
            
              if (calc > 34) {
                $(".time").val(15)
              }
            
              if (calc > 40) {
                $(".time").val(15)
              }
            
              if (calc > 49) {
                $(".time").val(15)
              }
            
              if (calc > 55) {
                $(".time").val(15)
              }
            
            }
            
            
            
