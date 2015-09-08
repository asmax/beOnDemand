function Varify(LoginForm) {
	url = 'http://beondemand.db.asmex.com.au/index.php/Login/hassam@asmex.com.au/Asmex1';
	var result = '';

	$.ajax({
		url         : url,
		method         : 'POST',
		dataType     : 'json',
		success     : function( data ){
			console.log(data);
			window.location.href = "/home.html";
		},
		error         : function( a, b, c ){
			console.log( 'AN ERROR HAPPENED' );
			console.log(a, b, c);
			window.location.href = "/login.html";
		}
	});

	return false;
	
}