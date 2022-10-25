// var jdata = '';

// for (var j = 1; j <= 5; j++ ){
//        jdata += '<div class="col-lg-3 w-5-width">\
//                         <div class="lessionBox">\
//                             <div class="lessionImage">\
//                                 <img src="images/lession-'+j+'.jpg">\
//                             </div>\
//                             <div class="lessionData back-'+j+'">\
//                                 <div class="lessionname text-center">\
//                                     <h3><strong>Lesson '+j+'</strong></h3>\
//                                     <h3>Kindergarden</h3>\
//                                 </div>\
//                                 <div class="lessionProgress text-center">\
//                                     <a href="#">Resume</a>\
//                                 </div>\
//                                 <div class="restart text-center text-uppercase">\
//                                     <p><a href="#">Restart Level</a></p>\
//                                 </div>\
//                             </div>\
//                         </div>\
//                     </div>';
//   }

// for(var i = 1; i <= 5; i++){

//       var data = '<div class="panel panel-default-none">\
//                       <div class="panel-heading" role="tab" id="levelHead-'+i+'">\
//                           <div class="perc">75%</div>\
//                           <div class="nexticon"><i class="fa fa-angle-down"></i></div>\
//                           <h4 class="panel-title">\
//                               <a role="button" data-toggle="collapse" data-parent="#accordion" href="#Level'+i+'" aria-expanded="true" aria-controls="Level'+i+'">\
//                                   Level '+i+'\
//                               </a>\
//                           </h4>\
//                       </div>\
//                       <div id="Level'+i+'" class="panel-collapse collapse" role="tabpanel" aria-labelledby="levelHead-'+i+'">\
//                           <div class="panel-body-data">\
//                                 <div class="tab-page-slider">\
//                                     <div class="row slider-single-">\
//                                         '+jdata+'\
//                                     </div>\
//                                 </div>\
//                           </div>\
//                       </div>\
//                   </div>';

//       $('#accordion').append(data)

// }


function banner() {
    var height = $(window).outerHeight() - $('.mainHeader').outerHeight();
    $('.bannerHeight').css('height', height);


    var w_height = $(window).outerHeight() - $('.dashboardFooter').outerHeight() - $('.dashboardHeader').outerHeight();
    $('.mainArea').css('min-height', w_height);

    var vHeight = $(window).outerHeight();
    $('#myroom').height(vHeight);

}

banner();

$(window).resize(function() {
    banner();
})

$('.featuredSlider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 4,
    speed: 1500,
    autoplay: true,
    responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
            }
        },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});

$('.storyContent').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
});

$('.slider-single').slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    speed: 1200,
    autoplay: false,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i></button>',
});



$('.bannerSlider').slick({
    infinite: true,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 2000,
    autoplay: true,
    vertical: true,
    cssEase: 'cubic-bezier(0.645, 0.045, 0.355, 1.000)',
    pauseOnHover: false,
});

setTimeout(function() {
    $('.rainbowLoader').addClass('portfolio-experiment');
}, 1000)

jQuery(window).scroll(function() {
    var scroll = jQuery(window).scrollTop();
    if (scroll >= 200) {
        jQuery(".mainHeader").addClass("darkHeader");
    } else {
        jQuery(".mainHeader").removeClass("darkHeader");
    }
});

$(".backgroundD").slick({
    speed: 70000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 2,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: false,
    focusOnSelect: false,
    arrows: false,
    rtl: true,
});




$(".sliderPageCloud").slick({
    speed: 150000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: false,
    focusOnSelect: false,
    arrows: false,
    rtl: true,
});

$(".bannerSlideShow").slick({
    speed: 150000,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: 'linear',
    slidesToShow: 1,
    slidesToScroll: 1,
    infinite: true,
    swipeToSlide: true,
    centerMode: false,
    focusOnSelect: false,
    arrows: false,
});

$(".topSlider").slick({
    infinite: false,
    arrows: false,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    // speed: 2000,
    // autoplay: true,
     asNavFor: '.thumbSlider'
    
});

$(".thumbSlider").slick({
     asNavFor: '.topSlider',
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    focusOnSelect: true,
    // speed: 2000,
    // autoplay: true,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i></button>',
});

$(".thumbSlider2").slick({
    infinite: false,
    arrows: true,
    dots: false,
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i></button>',
});

$(".videoModel").fancybox({
    type: "iframe", //<--added
    maxWidth: 800,
    maxHeight: 600,
    fitToView: false,
    width: '70%',
    height: '70%',
    autoSize: false,
    closeClick: false,
    openEffect: 'swing',
    closeEffect: 'none'
});

$('.mobileMenu a').on('click', function(e) {
    e.preventDefault();
    $('.mobileNav').addClass('open');
})

$('.mobileClose a').on('click', function(e) {
    e.preventDefault();
    $('.mobileNav').removeClass('open');
})




var c = 0;

$('.labelSelect').each(function(){
     c++;
     $(this).find('label').attr('for', 'data-'+c);
     $(this).find('input').attr('id' , 'data-'+c);
});

var i = 0;

$('.loginPage').each(function(){
     i++;
     // $(this).attr('id', 'model-'+i);
});

function openModal(value){
     $('body').addClass('active-model');
     $('.modalMain').addClass('model-active');
     $('.loginPage').removeClass('active');
     var id = value;
     setTimeout(function(){
         $('.modalMain').addClass('model-fade');
         $('#'+id).addClass('active');
         $('.data-slider-inline').slick('refresh');
     },100);
}

function closeModel(){
     $('.loginPage').removeClass('active');
     $('.modalMain').removeClass('model-active');
     $('body').removeClass('active-model');
     setTimeout(function(){
          $('.modalMain').removeClass('model-fade');
     },100);
}


$('.openModal').on('click', function(e){
     e.preventDefault();
     openModal( $(this).attr('data-model') );
});

$('.ModalPage').append('<a href="#" class="closeModal"><img src="images/close.png"></a>');

$('.loginPage').each(function(){
      var id = $(this).attr('id');
      $(this).addClass(id);
})

$('.ModalPage').on('click', '.closeModal', function(e){
     e.preventDefault();
     closeModel();
});

// openModal('model-1');

$('.panelData').on('click', function(e){
     e.preventDefault();
     var id = $(this).attr('data-toggle');
     $('.tabbingData .tabbing').removeClass('active');
     $('.formLoader').addClass('show');
     $('.tabbingData #'+id).addClass('active');
     $('.formLoader').removeClass('show');
     $('.panelData').removeClass('active');
     $(this).addClass('active');
});


$("#fileUpload").bind("change", function(e) {
    var file_name = $(this).val();
    if( file_name.length > 0 ){
         var fileName = e.target.files[0].name;
         var extension = fileName.split('.').pop();
         if( extension != 'mp3' ){
              alert('Accept only Mp3');
         }
         else{
              $('#fileUploadText').html(fileName + '<div class="deleteFile"><i class="fa fa-times"></i> Change</div>');
         }     
    }
    else{
         $('#fileUploadText').html('Upload your recording here');
    }
});


// var html = '<div class="col-lg-4">\
//               <div class="productBox m-b-30 m-t-30">\
//                     <div class="pImages">\
//                           <img src="images/product.jpg">\
//                     </div>\
//                     <div class="pData m-t-30">\
//                           <h3>Little Chinese Learners All - Access Curriculum</h3>\
//                           <ul>\
//                                  <li>full curriculum</li>\
//                                  <li>One - time purchase</li>\
//                           </ul>  \
//                           <p>$ 15.00</p>\
//                           <div class="buttonProduct m-t-20 text-uppercase">\
//                                  <a class="btn" href="javascript:void(0)">\
//                                       Buy\
//                                  </a>\
//                           </div>\
//                     </div>\
//               </div>\
//          </div>';

// for(var i = 0; i <= 5; i++){
//     $('#data').append(html);
// }

$('.dataText').on('click', function(){
     $(this).parent().find('.openDrop').slideToggle();
})

$('.level-text-sec').on('click', function(){
     $('.level-text-sec').removeClass('active');
     $(this).addClass('active');
     var id = $(this).attr('data-click');
     $('.tab-new-cou').removeClass('active');
     $('.tab-new-cou').removeClass('showlisy');
     $('#tab-course').find('#'+id).addClass('active');
     setTimeout(function(){
         $('#tab-course').find('#'+id).addClass('showlisy');
     },10)
})


$('.tab-statci').on('click', function(){
     $('.tab-statci').removeClass('active');
     $(this).addClass('active');
     var id = $(this).attr('data-click');
     $('.listNone').removeClass('active');
     $('#tabapage').find('#'+id).addClass('active');  
});

$('.generateCode').on('click', function(e){
     e.preventDefault();
     openModal('Generate-Code');
})


$(".data-slider-inline").slick({
    infinite: true,
    arrows: true,
    dots: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200, 
    prevArrow: '<button type="button" data-role="none" class="slick-prev" aria-label="Previous" tabindex="0" role="button"><i class="fa fa-angle-left"></i></button>',
    nextArrow: '<button type="button" data-role="none" class="slick-next" aria-label="Next" tabindex="0" role="button"><i class="fa fa-angle-right"></i></button>',
});


// function toggleIcon(e) {
//     $(e.target)
//         .prev('.panel-heading')
//         .find(".more-less")
//         .toggleClass('fa-plus fa-minus');
// }
// $('.panel-group').on('hidden.bs.collapse', toggleIcon);
// $('.panel-group').on('shown.bs.collapse', toggleIcon);


$('.panel-heading a').click(function() {

    $('.panel-heading').removeClass('active');
    if(!$(this).closest('.panel').find('.panel-collapse').hasClass('in'))
        $(this).parents('.panel-heading').addClass('active');

    

});


$('.panel-heading').click(function() {
    $('.slider-single').slick('refresh');
}); 



var wifht = $('.right-layer').outerWidth();

var total = 60;

var finalStep = parseInt(wifht/total);

for(var i = 0; i < total; i++){
    $('.layer-data').append('<div class="step-color" />');
}

var wifhth = $('.left-layer').outerWidth();
var totalh = 60;
var finalSteph = parseInt(wifhth/totalh);

for(var i = 0; i < totalh; i++){
    $('.layer-l-data').append('<div class="step-left" />');
}



var divs = $('.page-datas>div.data-content');
var now = 0; // currently shown div
divs.hide().first().show(); // hide all divs except first
$("#Next").click(function() {
    divs.eq(now).hide();
    now = (now + 1 < divs.length) ? now + 1 : 0;
    divs.eq(now).show(); // show next
});
$("#Prev").click(function() {
    divs.eq(now).hide();
    now = (now > 0) ? now - 1 : divs.length - 1;
    divs.eq(now).show(); // show previous
});


var element = $("#myroom"); // global variable
var getCanvas; // global variable

$('.botto-bnc a').on('click', function(e){
     e.preventDefault();
     $('.sure-repeat').fadeIn();
})

$('.yes').on('click', function(e){
     e.preventDefault();
     location.reload();
})

$('.no').on('click', function(e){
     e.preventDefault();
     $('.sure-repeat').fadeOut();
});



$('.shop-button a').on('click', function(e){
    e.preventDefault();
    $('.slide-content').slideToggle()
});


function preleoader(id){
     $('.preloader').show(); 
     if( id ){
         $(id).on('load', function() {
                setTimeout(function(){
                     $('.preloader').hide();
                },300)
         });
     }
     else{
         setTimeout(function(){
             $('.preloader').hide();
         },300)
     }
}


$('.main-bg').on('click', function(){
    var color = $(this).attr('data-color');
    $('#check-color').attr('fill', color);
    preleoader();
})

$('.left-bg').on('click', function(){
    var color = $(this).attr('data-color');
    $('#color1').css('background-color', color);
    preleoader();
})

$('.right-bg').on('click', function(){
    var color = $(this).attr('data-color');
    $('#color2').css('background-color', color);
    preleoader();
})

$('.bed-image-click').on('click', function(){
     var image = $(this).attr('data-image');
     $('#bed-image img').attr('src', image);
     preleoader('#bed-image img');
})

$('.bed-image-table').on('click', function(){
     var image = $(this).attr('data-image');
     $('#bed-table img').attr('src', image);
     preleoader('#bed-table img');
})


var clicks = new Array();

clicks[0] = 0;

$('.bed-change').on('change', function(){
     var image = $(this).attr('data-image');
     $('#bed-image img').attr('src', image);
     var price = parseInt( $(this).attr('data-price') );     
     var coins = parseInt( $('#final').val() );
     clicks.push(price); 
     var oldps = parseInt( clicks[clicks.length-2] );
     var totalPrice = coins + oldps - price; 
     $('#final').val( totalPrice ); 
     preleoader('#bed-image img');
});


var dclicks = new Array();

dclicks[0] = 0;

$('.drawer-change').on('change', function(){
     var image = $(this).attr('data-image');
     $('#bed-table img').attr('src', image);
     var price = parseInt( $(this).attr('data-price') );     
     var coins = parseInt( $('#final').val() );
     dclicks.push(price); 
     var oldps = parseInt( dclicks[dclicks.length-2] );
     var totalPrice = coins + oldps - price; 
     $('#final').val( totalPrice ); 
     preleoader('#bed-table img');
});


var wclicks = new Array();
wclicks[0] = 0;

$('.window-change').on('change', function(){
     var image = $(this).attr('data-image');
     $('#window-ch img').attr('src', image);
     var price = parseInt( $(this).attr('data-price') );     
     var coins = parseInt( $('#final').val() );
     wclicks.push(price); 
     var oldps = parseInt( wclicks[wclicks.length-2] );
     var totalPrice = coins + oldps - price; 
     $('#final').val( totalPrice ); 
     preleoader('#window-ch img');
});

var twclicks = new Array();
twclicks[0] = 0;

$('.table-change').on('change', function(){
     var image = $(this).attr('data-image');
     $('#table-ch img').attr('src', image);
     var price = parseInt( $(this).attr('data-price') );     
     var coins = parseInt( $('#final').val() );
     twclicks.push(price); 
     var oldps = parseInt( twclicks[twclicks.length-2] );
     var totalPrice = coins + oldps - price; 
     $('#final').val( totalPrice ); 
     preleoader('#table-ch img');
});

var cabinet = new Array();
cabinet[0] = 0;

$('.cabinet-change').on('change', function(){
     var image = $(this).attr('data-image');
     $('#Cabinet img').attr('src', image);
     var price = parseInt( $(this).attr('data-price') );     
     var coins = parseInt( $('#final').val() );
     cabinet.push(price); 
     var oldps = parseInt( cabinet[cabinet.length-2] );
     var totalPrice = coins + oldps - price; 
     $('#final').val( totalPrice ); 
     preleoader('#Cabinet img');
});



var bArray = new Array();
bArray[0] = 0;

$('.background-change').on('change', function(){
     var color = $(this).attr('data-color');
    $('#check-color').attr('fill', color);
    var price = parseInt( $(this).attr('data-price') );
    bArray.push(price);
    var coins = parseInt( $('#final').val() );
    var oldps = parseInt( bArray[bArray.length-2] );

    var totalPrice = coins + oldps - price;
    $('#final').val( totalPrice ); 
    preleoader();
});

var lwArray = new Array();
lwArray[0] = 0;

$('.left-wall').on('change', function(){
    var color = $(this).attr('data-color');
    $('#color1').css('background-color', color);
    var price = parseInt( $(this).attr('data-price') );
    lwArray.push(price);
    var coins = parseInt( $('#final').val() );
    var oldps = parseInt( lwArray[lwArray.length-2] );
    var totalPrice = coins + oldps - price;
    $('#final').val( totalPrice ); 
    preleoader();
});


var rwArray = new Array();
rwArray[0] = 0;

$('.right-wall').on('change', function(){
    var color = $(this).attr('data-color');
    $('#color2').css('background-color', color);
    var price = parseInt( $(this).attr('data-price') );
    rwArray.push(price);
    var coins = parseInt( $('#final').val() );
    var oldps = parseInt( rwArray[rwArray.length-2] );
    var totalPrice = coins + oldps - price;
    $('#final').val( totalPrice ); 
    preleoader();
});

$('.first-div input').on('change', function(){
    $('.first-div input').each(function(){
            var coins = parseInt( $('#final').val() );
            var val = $(this).attr('data-price'); 
            if( val > coins ){
                  $(this).attr('disabled', true);
            }    
            else{
                  $(this).attr('disabled', false);
            }
    }); 
    if( $('#final').val() > 0 ){
           $(this).attr('disabled', false);
    }

    if ($('.first-div input:checked').length > 0) {
           $('.button-data-cart').fadeIn();
    }
    else{
           $('.button-data-cart').fadeOut();
    }
})

$('.first-div input').each(function(){
        var coins = parseInt( $('#final').val() );
        var val = $(this).attr('data-price');
        if( val > coins ){
              $(this).attr('disabled', true);
        }    
        else{
              $(this).attr('disabled', false);
        }
});

$('.add-student-btn').on('click', function(){
        
        var length = $('.add-std-box').length + 1;

        var html = '<div class="add-std-box" id="student-'+length+'">\
                         <h3>Add Student '+length+'</h3>\
                         <div class="plus-btn"></div>\
                   </div>';
 
        $('.student-add').append(html);
})