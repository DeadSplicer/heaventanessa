var isMobile = window.matchMedia("only screen and (max-width: 991px)");//was 767px 840px

//check if the user is using chrome (used to determine how to handle the input)
function isChrome() {
  var isChromium = window.chrome,
  winNav = window.navigator,
  vendorName = winNav.vendor,
  isOpera = winNav.userAgent.indexOf("OPR") > -1,
  isIEedge = winNav.userAgent.indexOf("Edge") > -1,
  isIOSChrome = winNav.userAgent.match("CriOS");

  if(isIOSChrome){
    return true;
  } else if(isChromium !== null && isChromium !== undefined && vendorName === "Google Inc." && isOpera == false && isIEedge == false) {
    return true;
  } else {
    return false;
  }
}


//Test if user is using MS Edge. Disable sticky sidebar if they are.
if (/MSIE 10/i.test(navigator.userAgent)) {
   // This is internet explorer 10
   // window.alert('isIE10');
}
if (/MSIE 9/i.test(navigator.userAgent) || /rv:11.0/i.test(navigator.userAgent)) {
    // This is internet explorer 9 or 11
    // window.location = 'pages/core/ie.htm';
}
if (/Edge\/\d./i.test(navigator.userAgent)){
   // This is Microsoft Edge
   // window.alert('Microsoft Edge');
   $(".sidebar").css({"position": "static"});
}



// $(".fade-in").hide();
// $(".fade-in").hide(5000);
// $(".fade-in").fadeIn(4000);
$(".row").hide();
$(".row").fadeIn(1000);

$(document).ready(function () {
  adjustForMobile();//run when page first loads
});

$(window).resize(function () {
  adjustForMobile();//run on every window resize
});

function adjustForMobile() {

  if (isMobile.matches) {
    //Conditional script here
    $("div #desktopMenu").attr("id", "mobileMenu");                     //change to mobile menu
    $("div #desktopNavMenu").attr("id", "mobileNavMenu");               //nav
    $("div #mobileMenu a.button").attr("class", "mobileButton");                    //change to mobile button
    $("div a.button").attr("class", "mobileButton");                    //
    $(".menu_button").show();                                           //show mobile menu button
    $(".nav_menu_button").show();                                           //show mobile nav menu button
    $("#headWrapper").addClass("center");                               //center the head wrapper (for home)
    $("#headWrapperPages").addClass("center");                          //center the head wrapper (for pages)
    $("#logo").attr("id", "mobileLogo");                                //change to mobile logo
    $(".fixedbg").attr("class", "fixedbgMobile");                       //change background to mobile
    $(".sidebar").addClass("sidebar-mobile");                      //change sidebar to mobile
    $(".sidebar-button").attr("class", "sidebar-button-mobile");        //change sidebar buttons to mobile
    $(".sidebar-mobile h2").css({"font-size": "2em", "margin": "0px", "text-align": "center"});   //change mobile sidebar h2 to center 2em

  }
  else {
    $("#desktopMenu").show();                         //show desktopMenu
    $("#desktopNavMenu").show();                         //show desktopNavMenu
    $("div #mobileMenu").attr("id", "desktopMenu");   //change to desktop menu
    $("div #mobileNavMenu").attr("id", "desktopNavMenu");   //nav
    $("div a.mobileButton").attr("class", "button");  //change to desktop button
    $(".menu_button").hide();                         //hide mobile button
    $(".nav_menu_button").hide();                         //hide mobile button
    $("#headWrapper").removeClass("center");          //remove headWrapper center (home)
    $("#headWrapperPages").removeClass("center");     //remove headWrapper center (pages)
    $("#mobileLogo").attr("id", "logo");              //change to mobile logo
    $(".fixedbgMobile").attr("class", "fixedbg");     //change to dekstop background
    //$(".sidebar-mobile").attr("class", "sidebar");    //change to desktop sidebar
$(".sidebar").removeClass("sidebar-mobile");
    $(".sidebar-button-mobile").attr("class", "sidebar-button");    //change sidebar buttons to desktop
    $(".sidebar h2").css({"font-size": "inherit", "margin": "inherit", "text-align": "inherit"});   //change sidebar h2 to center 2em

  }


$('#mobileMenu').hide();
$('#mobileNavMenu').hide();

}




$('.menu_button').on('click', function(){
  $('#mobileMenu').slideToggle(823, "easeOutExpo");
})
$('.nav_menu_button').on('click', function(){
  $('#mobileNavMenu').slideToggle(823, "easeOutExpo");
})

  //alert("click");


//Nothing happens here, so just jog on. Twat.
// var txt = "";
// var currentPage = document.getElementById("active").textContent;
//
// if (currentPage === "Photography"){
//   window.addEventListener("keypress", function(event) {
//     if (isChrome()){
//       console.log("Chrome!")
//       txt += event.code[3];
//       if(txt === "CODE"){
//         window.location = "../../txt/index.html"
//       }
//       else if(txt === "NSFW"){
//         window.location = "../../pages/photo/314159265.html"
//       }
//     }
//     else {
//       txt += event.char.toUpperCase();
//       if(txt === "CODE"){
//         window.location = "../../txt/index.html"
//       }
//       else if(txt === "NSFW"){
//         window.location = "../../pages/photo/314159265.html"
//       }
//     }
//   });
//   console.log("Password:");
// }



/*
 * Youtube video auto-resizer script
 * Created by Skipser.com
*/

// $(document).ready(function() {
//   if(typeof YOUTUBE_VIDEO_MARGIN == 'undefined') {
//     YOUTUBE_VIDEO_MARGIN=5;
//   }
//   $('iframe').each(function(index,item) {
//     if($(item).attr('src').match(/(https?:)?\/\/www\.youtube\.com/)) {
//       var w=$(item).attr('width');
//       var h=$(item).attr('height');
//       var ar = h/w*100;
//       ar=ar.toFixed(2);
//       //Style iframe
//       $(item).css('position','absolute');
//       $(item).css('top','0');
//       $(item).css('left','0');
//       $(item).css('width','100%');
//       $(item).css('height','100%');
//       $(item).css('max-width',w+'px');
//       $(item).css('max-height', h+'px');
//       $(item).wrap('<div style="max-width:'+w+'px;margin:0 auto; padding:'+YOUTUBE_VIDEO_MARGIN+'px;" />');
//       $(item).wrap('<div style="position: relative;padding-bottom: '+ar+'%; height: 0; overflow: hidden;" />');
//     }
//   });
// });
