$("h1").css("color"); //Get Css Property Value
$("h1").css("color", "red"); //Set Css property value

$("a").attr("href"); //Get an Attribute
$("a").attr("href", "www.google.com"); //Set Attribute

$(".alterar").text("Alterado!") //Change innerHTML value

//addEventListener example in JQuery
$("h1").on("click", function () {
    $("h1").text("Hello There!");
})

//Remover elemento HTML
$("button").eq(0).remove();

//Animations - SlideUp-Down-Toggle / FadeIn-Out-Toggle
$("button").on("click", function () {
    $("h1").fadeToggle();
})