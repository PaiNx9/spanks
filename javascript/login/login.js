    function create() {
    $(".side-login").css({"opacity":"0"});
    $(".side-login").css({"left":"100%"});
    $(".side-login").css({"visibility":"hidden"});
    $(".side-create_account").css({"visibility":"visible"});
    $(".side-create_account").css({"opacity":"1"});
    $(".side-create_account").css({"left":"0%"});
    $("#email-acc").val("");
    $("#password-acc").val("");
    $("#password-acc_").val("");
}

    function login() {
    $(".side-login").css({"opacity":"1"});
    $(".side-login").css({"left":"0%"});
    $(".side-login").css({"visibility":"visible"});
    $(".side-create_account").css({"visibility":"hidden"});
    $(".side-create_account").css({"opacity":"0"});
    $(".side-create_account").css({"left":"-100%"});
    $("#email-log").val("");
    $("#password-log").val("");
}

    var show = false
    $( ".background-eyes" ).click(function() {
        if (show == false) {
            show += true;
        $(".eye-pass").css({"visibility":"hidden"});
        $(".eye-pass-alt").css({"visibility":"visible"});
        $("#password-log").attr("type", "text");
        }
        else {
            show = false;
            $("#password-log").attr("type", "password");
            $(".eye-pass").css({"visibility":"visible"});
            $(".eye-pass-alt").css({"visibility":"hidden"});
        } 
    })