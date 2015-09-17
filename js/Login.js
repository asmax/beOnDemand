function Varify(LoginForm) {

	var username = LoginForm.Username.value;
	var Password= LoginForm.Password.value;

	
	url = "http://beondemand.db.asmex.com.au/index.php/Login/"+username+"/"+Password;	
	var result = '';
	$.ajax({
		url         : url,
		method         : 'POST',
		dataType     : 'json',
		success     : function( data ){
			window.location.href = "/home.html";
		},
		error         : function( a, b, c ){
			alert("Please enter right Username and Password");
			console.log( 'AN ERROR HAPPENED' );			
			window.location.href = "/login.html";
		}
	});

	return false;
	
}