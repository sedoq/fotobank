$(document).ready(function(){
    $(".menu > label").on("click", function(){
        $(".menu > label.current-sort").removeAttr("class");
        
        $(this).addClass("current-sort");
    });
    
     $(".colors-radio > label").on("click", function(){
        $(".colors-radio > label.current").removeAttr("class");
        
        var color = $(this).attr("style");
        
        $(".current-color").attr("style", color); 
        $(this).addClass("current");
        
         
    });
    
     //Scroll
     $(window).scroll(function() {
			if ($(this).scrollTop() > 100) {
				$('#scroll-top').fadeIn();
			} else {
				$('#scroll-top').fadeOut();
			}
		});
    
       $("#scroll-top").click (function(){

                var destination = 0;

                $("html,body").animate({"scrollTop": destination}, 500);
           
                

        }); 
    
    //Position filter 
    $(".filter > input[type='radio']").on("click", function(){
        var pos = $(this).attr("id");
        
        switch(pos){
            case "six-on-six": repos('six-n-six', '2', '2');
                break;
            case "four-on-four": repos('four-n-four', '3', '3');
                break;
        }
        
        function repos( _class, col_lg, col_md ){
            $(".photo-gal").removeClass("col-lg-3");
            $(".photo-gal").removeClass("col-lg-2");
            $(".photo-gal").removeClass("col-md-3");
            $(".photo-gal").removeClass("col-md-2");
            $(".photo-gal").removeClass("four-n-four");
            $(".photo-gal").removeClass("six-n-six");
            
            $(".photo-gal").addClass("col-lg-" + col_lg);
            $(".photo-gal").addClass("col-md-" + col_md);
            
            if(_class){
                $(".photo-gal").addClass(_class);
            }
        }
    });
    
/*Ajax loading*/
var count = parseInt($(".found > b").text());    
var display = 12;
var offset = 12;    
    
$('footer').on('inview', function(event, isInView) {
  if (isInView) { 
    $.post("/assets/snippets/galleryLoad/ajax_addDL.php", {
        'count': count,
        'display': display,
        'offset': offset,
    },
      function(data){
        if(data) {
            $("#addit").prepend(data);
            
            console.log(offset);
            offset += display;
        }
      });
  } 
});    
    
});

