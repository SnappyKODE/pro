let nav_items = $(".navbar a");
let effect_hover = $(".blur");
nav_items.click(function(){
    $(this).addClass("cc");
    nav_items.not(this).removeClass("cc");
})

effect_hover.mouseover(function(){
    $(this).removeClass("hide");

})

effect_hover.mouseleave(function(){
    $(this).addClass("hide");
})