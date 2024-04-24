$(document).ready(function(){

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');     
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',function(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');

        if($(window).scrollTop() > 0){
            $('.top').show();
        }else{
            $('.top').hide();
        }
    });


   
    // smooth scrolling

    // $('a[href*="#"]').click(function(e){
       
    // })

});

function changeBG(color){
    document.body.style.backgroundColor = color;
    let txt=document.getElementsByClassName("th");
    if(color == "#ffffff"){
       for(let elm of txt){
        elm.style.color="#111";
       }
    }else{
        for(let elm of txt){
            elm.style.color="white";
           }
    }
}



// $(document).ready(function(){
//   $("#confirm").click(function(){
//     let response= confirm('Are you sure,You want to Downlode My Resume?');
//     // if(response){
//     //     document.write('Downlode');
//     // }else{
//     //     document.write('Not Downlode');
//     // }
//   });
// });