$(document).ready(function(){
    $(window).scroll(function(){
        // sticky navbar on scroll script
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // slide-up script
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // applying again smooth scroll on menu items click
        $('html').css("scrollBehavior", "smooth");
    });

    // toggle menu/navbar script
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // typing text animation script
    var typed = new Typed(".typing", {
        strings: ["Designer", "Developer", "Deployer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Designer", "Developer", "Deployer", "Freelancer"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});

document.onkeydown = function(e) {
      if(event.keyCode == 123) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'I'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'C'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.shiftKey && e.keyCode == 'J'.charCodeAt(0)) {
         return false;
      }
      if(e.ctrlKey && e.keyCode == 'U'.charCodeAt(0)) {
         return false;
      }
    }

document.addEventListener('contextmenu', function(e) {
  e.preventDefault();
});

//MAIL SERVICE     
$(document).on('submit','#enquiry-form',function(e)
{ 
    e.preventDefault();
    var values=$('#enquiry-form').serialize();
    $.post('mail.php',values,function(response)
    {
        if(response=='success')
        {
            $("#enquiry-form")[0].reset();
            $("#c_thankyou").show().delay(5000).fadeOut();
        }
        else
        {
            $("#c_error").show().delay(5000).fadeOut();
        }
    }
    )
})

// $(".home").ripples({
// 	resolution: 512,
// 	dropRadius: 20,
// 	perturbance: 0.04,
// });

    // $(".home").ripples();

// $(".home").ripples({
//     resolution: 500,
// 				dropRadius: 20,
// 				perturbance: 0.04
//   });

  function shikha_ripple(){		
    jQuery('.rippledesign').ripples({
            resolution: 500,
            dropRadius: 20,
            perturbance: 0.04
        });
       }
    shikha_ripple();

// //////////////////////////////////
// let myEmojis = [ 
//     "😊",
//     "😍",
//     "😄",
//     "🤩",
//     "😇",
//     "🙃",
//     "😋",
//     "😉",
//     "😀",
//     "😎",
//     "😁",
//     "🤗",
//    ];

// let urlAnimate = () => {
// window.location.hash = myEmojis[Math.floor((Date.now() / 100) % myEmojis.length)];
// setTimeout(urlAnimate, 70);
// };

// urlAnimate();
