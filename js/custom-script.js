/* bootstrap carousel */
jQuery('.carousel').carousel({
		interval: 7000
})

/* add check class on choose skills */
$(".add-skill").click(function(){
	$(this).toggleClass('checked');
});

$(function () {
	
    $('#datetimepicker12').datetimepicker({
        inline: true,
        sideBySide: true, 
        format: 'DD/MM/YYYY'
    });
    $('#datetimepicker1, #datetimepicker2').datetimepicker({
        format: 'DD/MM/YYYY'
      /*  inline: true,
        sideBySide: true*/

    });
    
});



// add class on load 
$(function() {
  $('#about').addClass('expand');
});

// price bar slider
$("#ex6").slider();
$("#ex6").on("slide", function(slideEvt) {
    $("#ex6SliderVal").text(slideEvt.value);
});

$("#ex7").slider();
$("#ex7").on("slide", function(slideEvt) {
    $("#ex7SliderVal").text(slideEvt.value);
});


