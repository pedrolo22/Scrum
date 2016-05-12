$('input[type="submit"]').mousedown(function(){
  $(this).css('background', '#2ecc71');
});
$('input[type="submit"]').mouseup(function(){
  $(this).css('background', '#1abc9c');
});



$('#loginform').hover(function(){
$('.regis').hide();
  $('.login').fadeIn('0001');
  $(this).toggleClass('green');
});

$('.login').hide();

$('#regisform').hover(function(){
    $('.login').hide();
  $('.regis').fadeIn('0001');
  $(this).toggleClass('green');
 // $('.regis').css("padding-right", "-400px");    
  //$('.regis').css("position", "relative");  
//$('.randompad2').css("padding-right", "400px")    
});


$(document).mouseup(function (e)
{
    var container = $(".login");
    

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#loginform').removeClass('green');
        
    }
});

$(document).mouseup(function (e)
{
    var container = $(".regis");
    

    if (!container.is(e.target) // if the target of the click isn't the container...
        && container.has(e.target).length === 0) // ... nor a descendant of the container
    {
        container.hide();
        $('#regisform').removeClass('green');
        
    }
});



