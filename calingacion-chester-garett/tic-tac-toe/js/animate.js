
$(document).ready(function() {   
    //adding hover effect to player X button  
    $('button').hover(function(){     
        $('.playerX').addClass('pulse');    
    },     
    function(){    
        $('.playerX').removeClass('pulse');     
    });

    //adding hover effect to player O button
    $('.playerO').hover(function(){     
        $('.playerO').addClass('pulse');    
    },     
    function(){    
        $('.playerO').removeClass('pulse');     
    });

    //adding hover effect to replay button
    $('.btn').hover(function(){     
        $('.btn').addClass('pulse');    
    },     
    function(){    
        $('.btn').removeClass('pulse');     
    });
});   