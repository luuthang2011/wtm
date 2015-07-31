$(document).ready(function(){ 
    /*$("p").click(function(){                    //dont effect to elements created after
        $("p").css("color","red");
    }); */
    
    $("button").one('click',function(){
        $("button").after("<p>aaaaaaaa</p>");  
    }); 
    
    $("body").on("dblclick","p",function(){         //double click
        $(this).css("color","red");
    });
    
    //$("body").off("dblclick");                    //off
    
    $( "h2" ).hover( function () {  
        $( this ).css("color","red");              //helpers
        }, function(){ 
        $( this ).css("color","black"); 
    });
    
    $("h2").on("click",sayHello);                  // dont use helper
    
    function sayHello ( event ) {                  //the event object
        alert( "Hello." ); 
    } 
    
    $( "h2" ).trigger( "click" );
        
    $("h3").on({                                   // dont use helper & many events
         mouseenter: function () {
            $( this ).css("color","red");
         },
         mouseleave: function () {
            $( this ).css("color","black"); 
         }
    });
    
});
