/* bootstrap carousel */
jQuery('.carousel').carousel({
		interval: 7000
})

/* add check class on choose skills */
$(".add-skill").click(function(){
	$(this).toggleClass('checked');
});