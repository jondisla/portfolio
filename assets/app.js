$(document).ready(()=>{

    $('#project-1').hover(()=>{
        $('#p1Description').fadeToggle( "slow", "linear" );
    })
    $('#project-2').hover(()=>{
        $('#p2Description').fadeToggle( "slow", "linear" );
    })
    $('#project-3').hover(()=>{
        $('#p3Description').fadeToggle( "slow", "linear" );
    })
    $('#project-4').hover(()=>{
        $('#p4Description').fadeToggle( "slow", "linear" );
    })
    $('#project-5').hover(()=>{
        $('#p5Description').fadeToggle( "slow", "linear" );
    })
    $('#project-6').hover(()=>{
        $('#p6Description').fadeToggle( "slow", "linear" );
    })


    $('#say-hello').click(()=>{
        $('#container-filter').css("filter", "blur(2px)", "z-index", "-1")
        $('#contact-form').removeClass('hidden');
    })

    $('#close, .container').click(()=>{
        $('#container-filter').css("filter", "blur(0px)", "z-index", "1");
        $('#contact-form').addClass('hidden');
    })

})