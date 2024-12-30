var disableInput = false;

var app = {
    // Application Constructor
    initialize: function(){
        this.bindEvents();
    },
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    onDeviceReady: function(){
		var emailcheck, sesssion = "";		
		localStorage.setItem("appsessionval", "0");
		localStorage.setItem("appsessionmodule", "0");
		localStorage.setItem("appsessionrate", "0");			
		
		session = cookieGet("appsession");			
		localStorage.setItem("appsession", session);
		emailcheck = isEmail(session);
		if(emailcheck == true){			
			signInSession(session, '101010');
		}
		setTimeout(function(){
			if($(".appinit")){
				$(".appinit").replaceWith('<div id="wait-wrapper"><div id="wait"></div><div class="wait-section section-left"></div><div class="wait-section section-right"></div></div>');
			}
			if(emailcheck == true){
				app.receivedEvent('session');
			}else{
				app.receivedEvent('nosession');	
			}		
		}, 6000); 
    },
	
    // Update DOM on a Received Event
    receivedEvent: function(id){
		//$(".appinit").addClass('hide');			
		$(".init").remove();
		if((session && localStorage.getItem("appsessionlogin") && localStorage.getItem("appsessionlogin") == '1')){
			localStorage.setItem("appsessionlogin", "1");
			$(".pinpad").addClass('hide');
			$(".pinpad").removeClass('show');
			$(".homepage").addClass('hide');
			$(".homepage").removeClass('show');
			$(".mainproject").removeClass('hide');
			$(".mainproject").addClass('show').fadeIn(1000);
		}else{
			localStorage.setItem("appsessionlogin", "0");
			if(id == 'session'){
				$(".mainproject").removeClass('show');
				$(".mainproject").addClass('hide');
				$(".pinpad").removeClass('hide');
				$(".pinpad").addClass('show').fadeIn(1000);
				localStorage.setItem("appsessionlogin", "0");
			}
			if(id == 'nosession'){				
				$(".mainproject").removeClass('show');
				$(".mainproject").addClass('hide');
				$(".homepage").removeClass('hide');
				$(".homepage").addClass('show').fadeIn(1000);				
			}
		}
		onPageLoad();
    }
};



function formError(error){
	$(".errorNotify").html(error).fadeIn(400).delay(5000).fadeOut(400);
}


function signUpUser(){
	var regfname = $("#regfname").val();
	var reglname = $("#reglname").val();
	var regref = $("#regref").val();
	var regaddress = $("#regaddress").val();
	var sel = $('.registerpage').find('[name="regcountry"]').val();
	var regcountry = $('.registerpage').find('[value="'+sel+'"]').text();
	if(regcountry == 'Nigeria'){
		var regstate = $("#regstate").val();
	}else{
		var regstate = $("#regstateinput").val();
	}
	var regemail = $("#regemail").val();
	var regphone = $("#regphone").val();
	var regpass = $("#regpass").val();	
	var regrepass = $("#regrepass").val();	
	var regcountrycode = $("#regcountrycode").val();
	
	if($('#regbtn').hasClass('getconcode')){
		
	}else{
		var code = $('#regconcode').val();
		var excode = localStorage.getItem("appregexcode");
		if(code !== excode){
			formError('Invalid Email Confirmation Code');
			return false;
		}
	}
	
	if(regpass !== regrepass){
		formError('Password does not match');
		return false;
	}
	
	if($(".regswitch").prop('checked') == false){
		formError('You must agree to Terms of Use');
		return false;
	}
	
	
	if(regfname && reglname && regaddress && regemail && regcountry && regstate && regphone && regpass && regcountrycode){
		
		if($("#regbtn").hasClass("getconcode")){
			var data = "email="+regemail+"&getconcode=ok";
			localStorage.setItem("appregsession", regemail);
		}else{			
			if(regemail !== localStorage.getItem("appregsession")){
				$('#regconcode').val('');
				$('.emailconfirmationcode').removeClass('show');
				$('.emailconfirmationcode').addClass('hide');
				$('#regbtn').addClass('getconcode');
				$('#regbtn').html('Get Email Code');
				formError("Get new code to email");
				return false;
			}			
			var data = "email="+regemail+"&pass="+regpass+"&country="+regcountry+"&state="+regstate+"&firstname="+regfname+"&lastname="+reglname+"&phone="+regphone+"&refcode="+regref+"&address="+regaddress+"&code="+regcountrycode;
		}      
		$('body').removeClass('loaded');
        var ajax = ajaxObj("POST", "https://endopay.com/appmobile/app_register.php");   
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true) { 
				var ok = ajax.responseText;
				if($('#regbtn').hasClass('getconcode')){
					var uarr = ok.split('|');
					if(uarr[0] == 'success'){
						localStorage.setItem("appregexcode", uarr[1]);
						$('.emailconfirmationcode').removeClass('hide');
						$('.emailconfirmationcode').addClass('show');
						$('#regbtn').removeClass('getconcode');
						$('#regbtn').html('REGISTER');
						setTimeout(function(){$('#regconcode').focus()}, 250);
						formError("Check email for email confirmation code");
					}else{
						formError(ok);
					}
					
				}else{
					if(ok == "success"){
						localStorage.clear();
						$('.registerpage').removeClass('show');
						$('.registerpage').addClass('hide');
						$('.loginpage').removeClass('hide');
						$('.loginpage').addClass('show').fadeIn(1000);
						$(".loginpage .data-title").html('Login');
						$(".loginpage .data-title").addClass('ln40');
						$(".loginpage .data-subtitle").html('');
						formError('Successfully Registered');	
					}else{
						formError(ok);
					} 
				}			
				onPageLoad();
			}else if(ajaxReturn(ajax) == false){
				ajaxTimeout(ajax);
				formError("Please check your internet connection");  
				onPageLoad();
			} 
		} 
		ajax.send(data); 
	} 
	return (true);
}



function signInSession(a,b){ // PINCODE LOGIN
	var urlpost = 'https://endopay.com/appmobile/app_login.php';
	if(a && b){		
		var data = 'email='+a+'&newapp='+b+'&appversion=430';
		var ajax = ajaxObj("POST", urlpost);		
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true){
				var code = ajax.responseText;
				if($(".appinit")){
					$(".appinit").replaceWith('<div id="wait-wrapper"><div id="wait"></div><div class="wait-section section-left"></div><div class="wait-section section-right"></div></div>');
				}
				if(code && code == 'invalid account'){
					cookieSet("appsession", "", 1);
					localStorage.clear();
					location.reload();
				}else if(code && code == 'invalid user'){
					displaySetup(a);
					onPageLoad();
				}else if(code && code !== '' && code.substring(0, 7) == 'Upgrade'){
					$('.page-title').html('Update Available');
					$('.pin-display').css('visibility', 'hidden');
					$('#upgradeapp').html('<button role="button" class="hundred" onclick="return false;" onmousedown="upgradeApp()">Upgrade here</button>');
					onPageLoad();
				}else if(code.length == 6){
					localStorage.setItem("appsessioncode", code);
					localStorage.setItem("appsessionval", "1");
					cookieSet("appsession", a, 30);
					localStorage.setItem("appsession", a);
					fetchModule(a);
					fetchRate(a);
				}else{
					formError("Invalid confirmation code");
					onPageLoad();
				}
			}else if(ajaxReturn(ajax) == false){
				ajaxTimeout(ajax);
				formError("Please check your internet connection"); 
				onPageLoad();
			}  
		}
		ajax.send(data); 
	}
	return(true);
}







function signInUser(a, b){ //MANUAL LOGIN
	var urlpost = 'https://endopay.com/appmobile/app_login.php';
	var email = _(a).value;
	var pass = _(b).value;
	if($('#loginbtn').hasClass('getcode')){
		
	}else{
		var code = _('logincode').value;
		var excode = localStorage.getItem("apploginexcode");
	}
	if(a){		
		if($('#loginbtn').hasClass('getcode')){
			var data = 'email='+email+'&pass='+pass;
			localStorage.setItem("applogsession", email);
		}else{
			if(email !== localStorage.getItem("applogsession")){
				$('#logincode').val('');
				$('.logincode').removeClass('show');
				$('.logincode').addClass('hide');
				$('#loginbtn').addClass('getcode');
				$('#loginbtn').html('Get Code');
				formError("Get new code to email");
				return false;
			}
			
			var data = 'email='+email+'&pass='+pass+'&code='+code+'&expectedcode='+excode;
		}
		$('body').removeClass('loaded');
		var ajax = ajaxObj("POST", urlpost);   
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true){
				var user = ajax.responseText;				
				if($('#loginbtn').hasClass('getcode')){
					var uarr = user.split('|');
					if(uarr[0].length == 4 && $.isNumeric(uarr[0])){
						localStorage.setItem("apploginexcode", uarr[1]);
						$('.logincode').removeClass('hide');
						$('.logincode').addClass('show');
						$('#loginbtn').removeClass('getcode');
						$('.codelabel').html('Email Code for Login ID: '+uarr[0]);
						$('#loginbtn').html('LOGIN');
						setTimeout(function(){$('#logincode').focus()}, 250);
						formError("Check email for login code");
					}else{
						formError(user);
					}					
					
				}else{
					var test = isEmail(user);
					if(test == true){
						localStorage.setItem("appsession", user);
						cookieSet("appsession", user, 30);	
						signInSession(user, '101010'); // init to get pin
					}else{
						formError(user);
					}
				}
				onPageLoad();
			}else if(ajaxReturn(ajax) == false){
				ajaxTimeout(ajax);
				formError("Please check your internet connection");  
				onPageLoad();
			}  
		} 
		ajax.send(data); 
	}
	return(true);
}

function signIn(a){ //MOBILE PAIR LOGIN
	var urlpost = 'https://endopay.com/appmobile/app_login.php';
	if(a){ 
		var data = 'ref='+a;
		var ajax = ajaxObj("POST", urlpost);   
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true){ 
				var user = ajax.responseText;
				var test = isEmail(user);
				if(test == true){
					$(".logoption").addClass('loginoption-page');
					localStorage.setItem("appsession", user);
					cookieSet("appsession", user, 30);	
					signInSession(user, '101010');
				}else{
					$(".logoption").addClass('loginoption-page');
					formError("Invalid mobile pair");
				}
				onPageLoad();
			}else if(ajaxReturn(ajax) == false){
				ajaxTimeout(ajax);
				formError("Please check your internet connection");    
				onPageLoad();
			}  
		} 
		ajax.send(data); 
	}
	return(true);
}




function fetchModule(email){ //MODULE FETCHER
	var res, response, type, ajax;
	
	if(email == ""){
		location.reload();
	}else{ 
		ajax = ajaxObj("POST", "https://endopay.com/appmobile/app_module.php");   
		ajax.onreadystatechange = function() {
		if(ajaxReturn(ajax) == true) { 
			res = ajax.responseText;
			response = res.split("|"); 
			
			

			var hist = decodeURI(response[0]);
			var sell = decodeURI(response[1]);
			var buycc = decodeURI(response[2]);
			var buybt = decodeURI(response[3]);
			var buyen = decodeURI(response[4]);
			var deposit = decodeURI(response[5]);
			var withdraw = decodeURI(response[6]);
			var sendbtc = decodeURI(response[7]);
			var usfund = decodeURI(response[8]);
			var quicksell = decodeURI(response[9]);	
			
			var btcaddress = response[10];
			var btcbalance = response[11];
			var ngnbalance = response[12];
			var btcunitrate = parseFloat(response[13]);
			var btbalance = parseFloat(btcbalance) / 100000000;			
			$('#historybtn').data('message', hist);
			$('#accountbtn').data('message', hist)
			$('#sellbtn').data('message', sell);		
			$('#buyccbtn').data('message', buycc);		
			$('#buybtbtn').data('message', buybt);		
			$('#buyenbtn').data('message', buyen);		
			$('#depositbtn').data('message', deposit);		
			$('#withdrawbtn').data('message', withdraw);		
			$('#fundbtbtn').data('message', usfund);		
			$('#quicksellbtn').data('message', quicksell);		
			$('#sendbtbtn').data('message', sendbtc);
			
			if(isNaN(btbalance)){
				btbalance = 0;
			}
			
			if(!btcaddress){				
				$('.bindex').addClass('vhide');
				$('.genaddress').removeClass('hide');
				$('.genaddress').addClass('show');
			}
			
			if($('.action_pass').hasClass('icon-eye-blocked')){}else{
				if($('.btcbalance').html() !== '***'){			
					$('#btcbalance').val(btbalance);
					$('.btcbalance').html(parseFloat(btbalance).toFixed(8));
					$('#btcaddress').val(btcaddress);
					$('.btcaddress').html(btcaddress);					
					$('.usdbtcbalance').html(moneyFormat(parseFloat(btbalance / btcunitrate).toFixed(2)));					
				}
				
				if(ngnbalance){
					$('#ngnbalance').val(ngnbalance);
					$('.ngnbalance').html(moneyFormat(parseFloat(ngnbalance).toFixed(2)));
				}				
			}
			
			if(!ngnbalance){
				ngnbalance = 0;
				$('#ngnbalance').val(ngnbalance);
				$('.ngnbalance').html(moneyFormat(parseFloat(ngnbalance).toFixed(2)));
			}
			
			
			var first = response[14];
			var last = response[15];
			var phone = response[16];
			var shortaddress = response[17];
			var state = response[18];
			var country = response[19];
			var bankverify =  parseFloat(response[20]);
			var affcode = response[21];
			var apiclass = response[22];
			var api = response[23];
			var apikey = response[24];
			var apiip = response[25];
			var address = response[26];
			var confirmcode =  parseFloat(response[27]);
			var bankdetails =  response[28];
			var contactemail =  response[29];
			var contactmobile =  response[30];
			var availablebtc =  response[31];
			$('#sessionemail').val(email);
			
			$('#contactemail').val(contactemail);
			$('#contactmobile').val(contactmobile);
			
			var availbtc = parseFloat(availablebtc).toFixed(8);
			$('#availablebtc').val(availbtc);
			if(availablebtc == 'insufficient balance'){
				$('#availablebtc').val('0');
			}
				
			if(bankverify == 1){
				$("#bankacct").val("0");
				$(".addfirstbank").addClass('hide');
				$(".addfirstbank").removeClass('show');
				$('.data-name').html(first+" "+last);
				$('.data-email').html("<i class='fa fa-check' style='color: #53fc53'></i> "+email);				
			}else{
				$("#bankacct").val("1");
				$(".addfirstbank").removeClass('hide');				
				$(".addfirstbank").addClass('show');
				$("#setbankfirst").val(first);
				$("#setbanklast").val(last);
				$('.data-name').html(first+" "+last);
				$('.data-email').html("<i class='fa fa-times' style='color: #7c5000'></i> "+email);
			}
			
			
			if(apiclass == "1"){
				$("#apisettings").removeClass('hide');
				$("#apisettings").addClass('show');
			}else{
				$("#apisettings").addClass('hide');
				$("#apisettings").removeClass('show');
			}
			
			
			if(api == "1"){
				$("#apiswitch").prop('checked', true);
			}else{
				$("#apiswitch").prop('checked', false);
			}
			
			if(apikey == "" || apikey == null){
				$(".apikeyholder").addClass('hide');
				$(".apikeyholder").removeClass('show');
				$(".privkey").addClass('show');
				$(".privkey").removeClass('hide');				
			}else{			
				$(".privkey").removeClass('show');
				$(".privkey").addClass('hide');				
				$(".apikeyholder").removeClass('hide');
				$(".apikeyholder").addClass('show');
				$("#apikey").html(apikey);
				$("#setip").val(apiip);
			}
			
			if(confirmcode == 1){
				if(localStorage.getItem("appsessionmodule") == '0' || localStorage.getItem("appsessionmodule") == null){
					disableInput = false;
					$(".pinpad").removeClass('hide');
					$("#pinlock").removeClass('fa-unlock-alt');
					$("#pinlock").addClass('fa-lock');
					$(".homepage").removeClass('show');
					$(".homepage").addClass('hide');
					$(".loginoptionpage").removeClass('show');
					$(".loginoptionpage").addClass('hide');
					$(".loginpage").addClass('hide');
					$(".loginpage").removeClass('show');	
					$(".pinpad").addClass('show').fadeIn(1000);
					localStorage.setItem("appsessionlogin", "0");
				}else if(localStorage.getItem("appsessionmodule") == '1'){
					
				}
				$("#setconfirm").removeClass('show');
				$("#setconfirm").addClass('hide');
				$("#changeconfirm").removeClass('hide');
				$("#changeconfirm").addClass('show');
			}
			if(confirmcode == 0){
				$("#changeconfirm").addClass('hide');
				$("#changeconfirm").removeClass('show');				
				$("#setconfirm").removeClass('hide');
				$("#setconfirm").addClass('show');
			}
			
			$("#bankdetails").html(bankdetails);
			
			$("#fname").val(first);
			$("#lname").val(last);
			$("#rcode").val(affcode);
			$("#phone").val(phone);
			$("#haddress").val(address);				
			
			localStorage.setItem("appsessionmodule", "1");
	
		}else if(ajaxReturn(ajax) == false){
			halfexitApp();
			formError("Please check your internet connection");
		}  
		} 
		ajax.send("user="+email); 
	}
	return (true);
}



function fetchRate(email){ //RATES FETCHER
	var res, response, type, ajax;	  

	if(email == ""){
		location.reload();
	}else{ 
		ajax = ajaxObj("POST", "https://endopay.com/appmobile/app_rates.php");   
		ajax.onreadystatechange = function() {
		if(ajaxReturn(ajax) == true) { 
			res = ajax.responseText;
			response = res.split("|"); 

			var ccpmrate = parseFloat(response[0]);
			var ccbtrate = parseFloat(response[1]);
			var ccethrate = parseFloat(response[2]);
			var ccbchrate = parseFloat(response[3]);
			var ccltcrate = parseFloat(response[4]);
			
			var ccenrate = parseFloat(response[5]);
			
			var ccitrate = parseFloat(response[6]);			
			var ccgprate = parseFloat(response[7]);
			
			var pmenrate = parseFloat(response[8]);
			var btenrate = parseFloat(response[9]);
			var btenenrate = parseFloat(response[10]);
			
			var ethenrate = parseFloat(response[11]);
			var bchenrate = parseFloat(response[12]);
			var ltcenrate = parseFloat(response[13]);		
			
			var btenbtrate = parseFloat(response[14]);	
			var btenpmrate = parseFloat(response[15]);
			
			var enbdrate = parseFloat(response[16]);
			
			var myfixedbtcfee = parseFloat(response[17]);
			
			var ethrate = parseFloat(response[18]);
			var ltcrate = parseFloat(response[19]);
			var bchrate = parseFloat(response[20]);
			
			var ccpmrate2 = parseFloat(response[21]);
			var ccbtrate2 = parseFloat(response[22]);
			var ccethrate2 = parseFloat(response[23]);
			var ccbchrate2 = parseFloat(response[24]);
			var ccltcrate2 = parseFloat(response[25]);
			
			var ccenrate2 = parseFloat(response[26]);
			
			var ccitrate2 = parseFloat(response[27]);			
			var ccgprate2 = parseFloat(response[28]);
			var cardadded = parseFloat(response[29]);
			var btdepositadd = parseFloat(response[30]);
			var gateway = parseFloat(response[31]);
			var usdeposit = parseFloat(response[32]);
			
			var btcaddress = response[33];
			var btcbalance = response[34];
			var btbalance = parseFloat(btcbalance) / 100000000;
			var ngnbalance = response[35];
			var api = response[36];
			var apikey = response[37];
			var apiip = response[38];
			var bankdetails =  response[39];
			var availablebtc =  response[40];
			var bankfee =  response[41];
			var withdrawfee =  response[42];
			var withdrawlimitfee =  response[43];
	
			var exval = btenbtrate * 100000000;
			//symbol_local.conversion = exval;
			document.getElementById("footer").setAttribute("data-symbol-local", "{\"symbol\":\"$\",\"code\":\"USD\",\"symbolAppearsAfter\":false,\"name\":\"U.S. dollar\",\"local\":true,\"conversion\":"+exval+"}"); 

			_("tickccpmrate").value = ccpmrate2;
			_("tickccbtrate").value = ccbtrate2;
			_("tickccethrate").value = ccethrate2;
			_("tickccltcrate").value = ccltcrate2;
			_("tickccbchrate").value = ccbchrate2;
			
			_("tickccenrate").value = ccenrate2;
			_("tickbdenrate").value = ccenrate;
			
			_("tickbdpmrate").value = ccpmrate;
			_("tickbdbtrate").value = ccbtrate;
			_("tickbdethrate").value = ccethrate;
			_("tickbdltcrate").value = ccltcrate;
			_("tickbdbchrate").value = ccbchrate;
			
			_("tickenpmrate").value = ccpmrate;
			_("tickenbtrate").value = ccbtrate;
			_("tickenethrate").value = ccethrate;
			_("tickenltcrate").value = ccltcrate;
			_("tickenbchrate").value = ccbchrate;
			
			_("tickenbdrate").value = enbdrate;
			_("tickenccrate").value = enbdrate;
			
			_("tickbtenbtrate").value = btenbtrate;
			_("tickbtenpmrate").value = btenpmrate;		
			
			_("tickbtenenrate").value = btenenrate;				
			_("tickpmenrate").value = pmenrate;
			_("tickbtenrate").value = btenrate;	
			_("tickethenrate").value = ethenrate;
			_("tickltcenrate").value = ltcenrate;				
			_("tickbchenrate").value = bchenrate;
			
			_("tickbtccrate").value = btenrate;	
			_("tickpmccrate").value = pmenrate;	
			_("tickethccrate").value = ethenrate;
			_("tickltcccrate").value = ltcenrate;				
			_("tickbchccrate").value = bchenrate;
			
			_("tickbtenccrate").value = btenenrate;	
			
			_("tickccitrate").value = ccitrate2;
			_("tickccgprate").value = ccgprate2;
			
			_("tickbditrate").value = ccitrate;
			_("tickbdgprate").value = ccgprate;
			
			_("tickenitrate").value = ccitrate;
			_("tickengprate").value = ccgprate;
			
			_("myfixedbtcfee").value = myfixedbtcfee;
			_("ccgatewayfee").value = gateway;
			_("bankfee").value = bankfee;
			_("withdrawfee").value = withdrawfee;
			_("withdrawlimitfee").value = withdrawlimitfee;
			_("usdeposit").value = usdeposit;
			
			_("ethrate").value = ethrate;
			_("ltcrate").value = ltcrate;
			_("bchrate").value = bchrate;	
			
			var availbtc = parseFloat(availablebtc).toFixed(8);
			$('#availablebtc').val(availbtc);
			if(availablebtc == 'insufficient balance'){
				$('#availablebtc').val('0');
			}

			if(isNaN(btbalance)){
				btbalance = 0;
			}
			
			if(!btcaddress){
				$('.bindex').addClass('vhide');
				$('.genaddress').removeClass('hide');
				$('.genaddress').addClass('show');
			}
			
			if($('.action_pass').hasClass('icon-eye-blocked')){}else{				
				if($('.btcbalance').html() !== '***'){			
					$('#btcbalance').val(btbalance);
					$('.btcbalance').html(parseFloat(btbalance).toFixed(8));
					$('#btcaddress').val(btcaddress);
					$('.btcaddress').html(btcaddress);					
					$('.usdbtcbalance').html(moneyFormat(parseFloat(btbalance / btenbtrate).toFixed(2)));					
				}
				
				if(ngnbalance){
					$('#ngnbalance').val(ngnbalance);
					$('.ngnbalance').html(moneyFormat(parseFloat(ngnbalance).toFixed(2)));
				}				
			}
			
			if(!ngnbalance){
				ngnbalance = 0;
				$('#ngnbalance').val(ngnbalance);
				$('.ngnbalance').html(moneyFormat(parseFloat(ngnbalance).toFixed(2)));
			}
			
			
			
			if(api == "1"){
				$("#apiswitch").prop('checked', true);
			}else{
				$("#apiswitch").prop('checked', false);
			}
			
			if(apikey == ""){
				$(".apikeyholder").addClass('hide');
				$(".apikeyholder").removeClass('show');
				$(".privkey").addClass('show');
				$(".privkey").removeClass('hide');				
				
			}else{			
				$(".privkey").removeClass('show');
				$(".privkey").addClass('hide');				
				$(".apikeyholder").removeClass('hide');
				$(".apikeyholder").addClass('show');
				$("#apikey").html(apikey);
			}
			$("#setip").val(apiip);
			
			$("#bankdetails").html(bankdetails);

			localStorage.setItem("appsessionrate", "1");
	
		}else if(ajaxReturn(ajax) == false){
			formError("Please check your internet connection");
		}  
		} 
		ajax.send("user="+email); 
	}
	return (true);
}

function moneyFormat(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}


function isEmail(email){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}

function cookieSet(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

function cookieGet(cname) {
    var name = cname + "=";
    var ca = document.cookie.split(';');
    for(var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            return c.substring(name.length, c.length);
        }
    }
    return "";
}

function cookieCheck(cname) {
    var user = cookieGet(cname);
    if (user != "") {
        return user;
    } else {
        user = prompt("Please enter your name:", "");
        if (user != "" && user != null) {
            cookieSet(cname, user, 30);
        }
    }
}




var satoshi = 100000000;

var symbol_btc = {code:"BTC",symbol:"BTC",name:"Bitcoin",conversion:satoshi,symbolAppearsAfter:true,local:false};

var symbol_local = {code:"USD",symbol:"$",name:"U.S. dollar",conversion:0,symbolAppearsAfter:false,local:true};

var symbol = symbol_btc;


function sShift(a){   
    return(satoshi/a.conversion).toString().length-1;
}

function convert(a,b){
    return(a/b).toFixed(2).toString().replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");
}

function formatSatoshi(d,a,c){
	if(!d){
	   return "0.00"
	}
	var f="";
	if(d<0){
	   d=-d;
	   f="-";
	}
	if(!a){
	   a=0;
	}
	   d=""+parseInt(d);
	   var e=(d.length>(8-a)?d.substr(0,d.length-(8-a)):"0");
	if(!c){
	   e=e.replace(/(\d)(?=(\d\d\d)+(?!\d))/g,"$1,");
	}
	   var b=d.length>(8-a)?d.substr(d.length-(8-a)):d;
	if(b && b != 0){
	while(b.length<(8-a)){
	   b="0"+b;
	}
	   b=b.replace(/0*$/,"");
	while(b.length<2){
	   b+="0";
	}
	return f+e+"."+b;
	}
	return f+e;
}


function formatSymbol(a,c,b){
    var d;
	if(c!==symbol_btc){
		d=convert(a,c.conversion)
	}else{
		d=formatSatoshi(a,sShift(c))
	}
	if(b){
		d=d.replace(/([1-9]\d*\.\d{2}?)(.*)/,'$1<span style="font-size:85%;">$2</span>')
	}
	if(c.symbolAppearsAfter){
		d+=" "+c.symbol
	}else{
		d=c.symbol+" "+d
	}
	return d
}

function formatMoney(a,b){
    
    var c = formatSymbol(a, symbol);
    if(b){c = '<span data-c="'+a+'">'+c+"</span>"}
    return c;
}

function calcMoney(){
    $("span[data-c]").each(function(){
    $(this).text(formatMoney(
        $(this).data("c")))
    })
}

function toggleSymbol(){
    if(symbol_local && symbol === symbol_btc){
        symbol = symbol_local;
        SetCookie("local","true")
    }else{
        symbol = symbol_btc;
        SetCookie("local","false")
    }    
    calcMoney();
}

function setupSymbolToggle(){
	$(".currency").unbind("click").click(function(){
		toggleSymbol();
	});
}


function SetCookie(a,b){
	document.cookie = ""+a+"="+encodeURI(b.toString())+""; 
	path = "/";
	domain = "endopay.com";
	age = 60*60*24;
}


function getCookie(a){
	if(document.cookie.length > 0){
	    c_start=document.cookie.indexOf(a+"=");
		if(c_start != -1){
			c_start = c_start+a.length+1;
			c_end = document.cookie.indexOf(";",c_start);
			if(c_end == -1){
				c_end=document.cookie.length;
			}
			return decodeURI(document.cookie.substring(c_start,c_end));
		}
	}
	return "";
}