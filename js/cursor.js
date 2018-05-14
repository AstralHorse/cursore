$(document)[0].onmousemove = mouseMove;
$(document)[0].onmousewheel = (event)=>{
  $('#fly')[0].style.visibility = 'hidden';
};

function mouseMove(event){
    $('#fly')[0].style.left = event.pageX + 'px';
    $('#fly')[0].style.top = event.pageY +'px';
    $('#fly')[0].style.visibility = 'visible';
    
    $("a").mouseover(function() {
        $('#fly')[0].style.width = '60px';
        $('#fly')[0].style.height = '60px';
        $('#fly')[0].style.margin = '-30px';
        $('#fly')[0].style.transition = '.1s';
    });
    
    $("a").mouseout(function() {
        $('#fly')[0].style.width = '30px';
        $('#fly')[0].style.height = '30px';
        $('#fly')[0].style.margin = '-15px';
    });
    
}
/*skil*/
$('.skill_card').click(function(){
   $(this).children().toggleClass('active');    
});