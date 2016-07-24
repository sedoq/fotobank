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
    
    
    //ГАЛЕРЕЯ
    var load_variant = $(".menu > #current_load");
    
    //Actions
    
    
    $(".menu > input[type='radio']").on("click", function(){
        $(load_variant).val($(this).val());
    });
    
    var query = {
        'load': $(load_variant).val(),
    } 
    
    console.log(query.load);
});