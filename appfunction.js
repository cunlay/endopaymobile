

!function($) {
	"use strict";
	var toggle = '[data-toggle="dropdown"]',
	Dropdown = function(element) {
		var $el = $(element).on('click.dropdown.data-api', this.toggle)
		$('html').on('click.dropdown.data-api', function() {
			$el.parent().removeClass('open')
		})
	}
	Dropdown.prototype = {
		constructor: Dropdown,
		toggle: function(e) {
			var $this = $(this),
				$parent, selector, isActive
			if ($this.is('.disabled, :disabled')) return
			selector = $this.attr('data-target')
			if (!selector) {
				selector = $this.attr('href')
				selector = selector && selector.replace(/.*(?=#[^\s]*$)/, '')
			}
			$parent = $(selector)
			$parent.length || ($parent = $this.parent())
			isActive = $parent.hasClass('open')
			clearMenus()
			if (!isActive) $parent.toggleClass('open')
			return false
		}
	}
	function clearMenus() {
		$(toggle).parent().removeClass('open')
	}
	$.fn.dropdown = function(option) {
		return this.each(function() {
			var $this = $(this),
				data = $this.data('dropdown')
				if (!data) $this.data('dropdown', (data = new Dropdown(this)))
				if (typeof option == 'string') data[option].call($this)
		})
	}
	$.fn.dropdown.Constructor = Dropdown
	$(function() {
		$('html').on('click.dropdown.data-api', clearMenus)
		$('body').on('click.dropdown', '.dropdown form', function(e) {
			e.stopPropagation()
		}).on('click.dropdown.data-api', toggle, Dropdown.prototype.toggle)
	})
}(window.jQuery);





/*
speed: 600,
parallax: true,
autoHeight: true, 
effect: 'fade',
effect: 'flip',
effect: 'coverflow',
effect: 'cube',
grabCursor: true,
cubeEffect: {
shadow: true,
slideShadows: true,
shadowOffset: 20,
shadowScale: 0.94,
},
*/


_pinArray = [];

var swiper1 = new Swiper('.swiper1', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper2 = new Swiper('.swiper2', {
	spaceBetween: 30,
	effect: 'flip',
	pagination: {
		el: '.swiper-pagination2',
		clickable: true,
	},
});
var swiper3 = new Swiper('.swiper3', {
	spaceBetween: 30,
	effect: 'coverflow',
	pagination: {
		el: '.swiper-pagination3',
		clickable: true,
	},
});

//.swiper6, .swiper8, .swiper10, .swiper15, .swiper17, .swiper19, .swiper21{
var swiper6 = new Swiper('.swiper6', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper7 = new Swiper('.swiper7', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',	
});

var swiper8 = new Swiper('.swiper8', {
	spaceBetween: 30,
	effect: 'fade',	
});
var swiper9 = new Swiper('.swiper9', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',
});
var swiper10 = new Swiper('.swiper10', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper11 = new Swiper('.swiper11', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',	
});
var swiper15 = new Swiper('.swiper15', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper16 = new Swiper('.swiper16', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',	
});
var swiper17 = new Swiper('.swiper17', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper18 = new Swiper('.swiper18', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',	
});
var swiper19 = new Swiper('.swiper19', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper20 = new Swiper('.swiper20', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',	
});
var swiper21 = new Swiper('.swiper21', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper22 = new Swiper('.swiper22', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',	
});
var swiper23 = new Swiper('.swiper23', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper24 = new Swiper('.swiper24', {
	autoHeight: true,
	spaceBetween: 30,
	effect: 'fade',	
});
/*
var swiper6 = new Swiper('.swiper6', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper7 = new Swiper('.swiper7', {
	spaceBetween: 30,
	effect: 'fade',
});
var swiper8 = new Swiper('.swiper8', {
	spaceBetween: 30,
	effect: 'fade',
});
*/

function modalClick(a){
	if(a){
		$("#"+a).click();
	}		
}

function modalQRClick(a){
	if(a){
		$("#"+a).click();
	}		
}

function barCode(){ 
	cordova.plugins.barcodeScanner.scan(
		function (result){
			if(result.format == 'QR_CODE' && result.cancelled == false){
				var value = result.text;
				$('body').removeClass('loaded');				
				$(".logoption").removeClass('loginoption-page');
				$(".homepage").addClass('hide');
				$(".homepage").removeClass('show');
                signIn(value);
				
			}
		},
		function (error) {
			$('body').removeClass('loaded');
			$(".logoption").addClass('loginoption-page');
			formError("Scanning failed: " + error);		
			onPageLoad();
		},
		{
			preferFrontCamera : false,
			showFlipCameraButton : true,
			showTorchButton : false, 
			torchOn: false, 
			saveHistory: true,
			prompt : "Scan mobile pair code", 
			resultDisplayDuration: 500, 
			formats : "QR_CODE,PDF_417", 
			orientation : "portrait", 
			disableAnimations : true,
			disableSuccessBeep: false 
		}
	);
}


function MkQRcode(target, texts, w, h){	
	jQuery("#"+target).qrcode({
		width: w,
		height: h,
		text: ""+texts+""
	});
}
function getInput(title, curfrom, curto, method){
	
	$("body").removeClass('loaded');
	
	var accountbox, scanner, form, amountsummary, accountsummary, SwtchArr = ['bt', 'bch', 'ltc', 'eth', 'bten'], CardArr = ['it', 'gp'], confirmbox = '';	
	if(SwtchArr.indexOf(curfrom) !== -1){			
		form = '<div class="mid"><label class="rocker rocker-small"><input type="checkbox" class="unitswitch"/><span class="switch-left cryptoswitch">BTC</span><span class="switch-right">USD</span></label></div>';
		if(curfrom == 'bten'){
			form += '<span class="mid"><span class="incsizespan bordernone availablebtc" style="display: block;"></span></span>';
		}		
		amountsummary = '<span class="mid"><span class="incsizespan bordernone" id="amountsummary" style="display: block;"></span></span>';
		accountsummary = '<span class="mid"><span class="incsizespan bordernone" id="accountsummary" style="display: block;"></span></span><input type="hidden" id="prevaccount" value=""/>';
		scanner = '';		
		if(curfrom == 'bten'){
			scanner = '<span class="scanner" onmousedown="scanCrypto(\'account\')"></span>';
			confirmbox = '<div class="mid"><span class="input"><input type="password" class="input__field" id="authorize" maxlength="6" onfocus="onInputFocus(event)" onblur="onInputBlur(event)"/><label for="authorize" class="input__label"><span class="input__label-content">Confirmation Code</span></label></span></div>';
		}
		accountbox = '<div class="mid"><span class="input scan"><input type="text" class="input__field" id="account" onkeyup="nameFetch()" onfocus="onInputFocus(event)" onblur="onInputBlur(event)"/>'+scanner+'<label for="account" class="input__label"><span class="input__label-content" id="acctlabel">Address</span></label></span></div>';	
		
	}else if(SwtchArr.indexOf(curto) !== -1){
		form = '<div class="mid"><label class="rocker rocker-small"><input type="checkbox" class="unitswitch"/><span class="switch-left cryptoswitch">BTC</span><span class="switch-right">USD</span></label></div>';
		amountsummary = '<span class="mid"><span class="incsizespan bordernone" id="amountsummary" style="display: block;"></span></span>';
		accountsummary = '<span class="mid"><span class="incsizespan bordernone" id="accountsummary" style="display: block;"></span></span><input type="hidden" id="prevaccount" value=""/>';
		scanner = '<span class="scanner" onmousedown="scanCrypto(\'account\')"></span>';
		accountbox = '<div class="mid"><span class="input scan"><input type="text" class="input__field" id="account" onkeyup="nameFetch()" onfocus="onInputFocus(event)" onblur="onInputBlur(event)"/>'+scanner+'<label for="account" class="input__label"><span class="input__label-content" id="acctlabel">Address</span></label></span></div>';	
	}else if(CardArr.indexOf(curto) !== -1 || curto == 'en'){
		form = '';
		amountsummary = '<span class="mid"><span class="incsizespan bordernone" id="amountsummary" style="display: block;"></span></span>';
		accountsummary = '';			
		scanner = '';
		accountbox = '';
	}else{
		form = '';
		amountsummary = '<span class="mid"><span class="incsizespan bordernone" id="amountsummary" style="display: block;"></span></span>';			
		accountsummary = '<span class="mid"><span class="incsizespan bordernone" id="accountsummary" style="display: block;"></span></span><input type="hidden" id="prevaccount" value=""/>';
		scanner = '';
		accountbox = '<div class="mid"><span class="input scan"><input type="text" class="input__field" id="account" onkeyup="nameFetch()" onfocus="onInputFocus(event)" onblur="onInputBlur(event)"/>'+scanner+'<label for="account" class="input__label"><span class="input__label-content" id="acctlabel">Address</span></label></span></div>';	
	}
	
	
	
		
	if(method || (curfrom == 'bten' && curto == 'bt')){
		if(method == 'EN'){
			confirmbox = '<div class="mid"><span class="input"><input type="password" class="input__field" id="authorize" maxlength="6" onfocus="onInputFocus(event)" onblur="onInputBlur(event)"/><label for="authorize" class="input__label"><span class="input__label-content">Confirmation Code</span></label></span></div>';
		}
		form += '<div class="mid"><span class="input"><input type="hidden" id="unit" value="USD"/><input type="hidden" id="method" value="'+method+'"/><input type="hidden" id="curfrom" value="'+curfrom+'"/><input type="hidden" id="curto" value="'+curto+'"/><input type="number" class="input__field" id="amount" onfocus="onInputFocus(event)" onblur="onInputBlur(event)" onkeyup="Calculate(\'curfrom\',\'curto\',\'method\',\'amount\',\'unit\')"/><label for="amount" class="input__label"><span class="input__label-content" id="amtlabel">Amount in <span class="btcunit">USD</span></span></label></span></div>'+amountsummary+accountbox+accountsummary+confirmbox+'<div class="mid"><button id="send-button" type="button" onmousedown="Process(\'curfrom\',\'curto\',\'method\',\'amount\',\'unit\')">Proceed</button></div><input type="hidden" id="confirmaccount" value="0"/><input type="hidden" id="reqname" value=""/><input type="hidden" id="reqnamefetch" value="0"/><input type="hidden" id="thistotal" value=""/><input type="hidden" id="thisamount" value=""/><input type="hidden" id="thisrate" value=""/>';			
	}else{
		if(curfrom == 'en'){
			confirmbox = '<div class="mid"><span class="input"><input type="password" class="input__field" id="authorize" maxlength="6" onfocus="onInputFocus(event)" onblur="onInputBlur(event)"/><label for="authorize" class="input__label"><span class="input__label-content">Confirmation Code</span></label></span></div>';
		}
		form += '<div class="mid"><span class="input"><input type="hidden" id="unit" value="USD"/><input type="hidden" id="method" value="'+method+'"/><input type="hidden" id="curfrom" value="'+curfrom+'"/><input type="hidden" id="curto" value="'+curto+'"/><input type="number" class="input__field" id="amount" onfocus="onInputFocus(event)" onblur="onInputBlur(event)" onkeyup="Calculate(\'curfrom\',\'curto\',\'method\',\'amount\',\'unit\')"/><label for="amount" class="input__label"><span class="input__label-content" id="amtlabel">Amount in <span class="btcunit">USD</span></span></label></span></div>'+amountsummary+accountsummary+confirmbox+'<div class="mid"><button id="send-button" type="button" onmousedown="Process(\'curfrom\',\'curto\',\'method\',\'amount\',\'unit\')">Proceed</button></div><input type="hidden" id="confirmaccount" value="0"/><input type="hidden" id="reqname" value=""/><input type="hidden" id="reqnamefetch" value="0"/><input type="hidden" id="thistotal" value=""/><input type="hidden" id="thisamount" value=""/><input type="hidden" id="thisrate" value=""/>';
	}
	
	$(".close").click();
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".formpage").removeClass('hide');
	$(".formpage").addClass('show').fadeIn(1000);
	
	$(".formpage .data-title").html(title);
	if(method == ''){
		$(".formpage .data-title").addClass('ln40');
		$(".formpage .data-subtitle").html('');
	}else if(method == 'EN'){
		$(".formpage .data-title").removeClass('ln40');
		$(".formpage .data-subtitle").html('with Endopay Account');
	}else if(method == 'CC'){
		$(".formpage .data-title").removeClass('ln40');
		$(".formpage .data-subtitle").html('with Debit Card');
	}else if(method == 'BT'){
		$(".formpage .data-title").removeClass('ln40');
		$(".formpage .data-subtitle").html('with Bank Transfer');
	}
	
	$('#ulform').html(form);
	
	if(SwtchArr.indexOf(curto) != -1){
		if(curto == 'bt' || curto == 'bten'){curto = 'btc';}
		$("#acctlabel").html(curto.toUpperCase()+" Address");
		$(".cryptoswitch").html(curto.toUpperCase());
	}else if(SwtchArr.indexOf(curfrom) != -1){
		if(curfrom == 'bt' || curfrom == 'bten'){curfrom = 'btc';}
		$(".cryptoswitch").html(curfrom.toUpperCase());
	}else if(curfrom == 'en' && (curto == 'bd' || curto == 'cc')){			
		$(".btcunit").html('NGN');
		$("#unit").val('NGN');
	}else if((curfrom == 'cc' || curfrom == 'bd') && curto == 'en'){			
		$(".btcunit").html('NGN');
		$("#unit").val('NGN');
	}else{
		if($("#acctlabel")){
			$("#acctlabel").html(curto.toUpperCase()+" Account");
		}
	}
	if(curto == 'cc' || curto == 'bd'){
		nameFetch();
	}
	
	
	
	var $target = $('#amtlabel');
	var $parent = $target.parent();
	$parent.addClass('input--filled');
    $('#amount').val('');
	setTimeout(function(){
		$('#amount').focus();
		$('.availablebtc').html('Available BTC: <b>'+$('#availablebtc').val()+' BTC</b>').removeClass('bordernone');		
	}, 250);
	onPageLoad();
}


function getInput2(title, curfrom, curto, method){
	
	$("body").removeClass('loaded');
	var email = $('#sessionemail').val();
	
	var form = '<input type="hidden" id="confirmaccount" value="0"/><input type="hidden" id="reqname" value=""/><input type="hidden" id="reqnamefetch" value="0"/><input type="hidden" id="thistotal" value=""/><input type="hidden" id="thisamount" value=""/><input type="hidden" id="thisrate" value=""/>Fund Your Bitcoin Address with USD! Cash Deposits ONLY to Banks Below. Walk-In to Bank Cash Deposits ONLY<hr/><div class="mid"><span class="input"><input type="hidden" id="unit" value="USD"/><input type="hidden" id="method" value="'+method+'"/><input type="hidden" id="curfrom" value="'+curfrom+'"/><input type="hidden" id="curto" value="'+curto+'"/><input type="number" class="input__field" id="amount" onfocus="onInputFocus(event)" onblur="onInputBlur(event)" onkeyup="Calculate(\'curfrom\',\'curto\',\'method\',\'amount\',\'unit\')"/><label for="amount" class="input__label"><span class="input__label-content" id="amtlabel">Amount in USD</span></label></span></div><span class="mid"><span class="incsizespan bordernone" id="amountsummary" style="display: block;"></span></span><div class="mid"><span class="input input--filled"><select name="quickfund_bank" id="quickfund_bank" class="input__field"><option value="">SELECT BANK</option><option value="CAPITAL ONE">CAPITAL ONE</option><option value="WOODFOREST">WOODFOREST</option></select><label for="quickfund_bank" class="input__label"><span class="input__label-content">Amount in USD[$50 - $2000]</span></label></span></div><div class="mid"><button class="send-button" id="send-button" type="button" onmousedown="Process(\'curfrom\',\'curto\',\'method\',\'amount\',\'unit\')">REQUEST INFO</button></div>Write Details Below on Receipt After Cash is Deposited<hr/><span class="mid"><span class="incsizespan" style="display: block">No Refund After Payment</span></span><span class="mid"><span class="incsizespan" style="display: block">Email: '+email+'</span></span><span class="mid"><span class="incsizespan" style="display: block">Bank City/State: ....</span></span><span class="mid"><span class="incsizespan" style="display: block">Purpose: Account Funding</span></span><form id="quickfund_form" class="show"><input type="hidden" name="email" id="email" value="'+email+'"/><div class="mid"><span class="input input--filled"><input type="file" name="quickfund_receipt" id="quickfund_receipt" class="input__field"/><label for="quickfund_receipt" class="input__label"><span class="input__label-content">RECEIPT OF PAYMENT: [Required details MUST be written on it. (Size: 1mb)]</span></label></span></div><div class="mid"><input type="hidden" name="quickfund_operation" id="quickfund_operation" value="Send" /><button type="submit" class="send-button" id="quickfund_btn">UPLOAD RECEIPT</button></div></form>';	
	
	$(".close").click();
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".formpage").removeClass('hide');
	$(".formpage").addClass('show').fadeIn(1000);
	
	$(".formpage .data-title").html(title);
	if(method == ''){
		$(".formpage .data-title").addClass('ln40');
		$(".formpage .data-subtitle").html('');
	}
	
	$('#ulform').html(form);
	
	var $target = $('#amtlabel');
	var $parent = $target.parent();
	$parent.addClass('input--filled');
    $('#amount').val('');
	setTimeout(function(){$('#amount').focus()}, 500);
	onPageLoad();
}


function onInputFocus(event){
	var $target = $(event.target);
	var $parent = $target.parent();
	$parent.addClass('input--filled');
}

function onInputBlur(event){
	var $target = $(event.target);
	var $parent = $target.parent();
	if(event.target.value.trim() === '') {
		$parent.removeClass('input--filled');
	}
}



function Calculate(curfrom, curto, method, amount, unit){

	var curfrom = $('#'+curfrom).val();		
	var curto = $('#'+curto).val();		
	var amount = $('#'+amount).val();		
	var unit = $('#'+unit).val();
	var method = $('#'+method).val();
	var join = curfrom+curto;	
	
	if(_('tick'+join+'rate')){
		var drate = parseFloat(_('tick'+join+'rate').value);
		if(isNaN(drate)){
			return false;
		}
	}else if(join == 'usdeposit'){
		
	}else{
		return false;
	}
	
	
	var formtype, SwtchArr = ['bt', 'bch', 'ltc', 'eth', 'bten'], AltArr = ['BCH', 'LTC', 'ETH'];
	
	if(SwtchArr.indexOf(curfrom) != -1){
		formtype = 'crypto';
	}else if(SwtchArr.indexOf(curto) != -1){
		formtype = 'crypto';
	}else{
		formtype = '';
	}
	
	if($('#availablebtc')){
		$('.availablebtc').html('Available BTC: <b>'+$('#availablebtc').val()+' BTC</b>').removeClass('bordernone');
	}
	
	
	if(formtype == 'crypto'){
		if(unit == 'BTC' && method == '' && (curto == 'bt' || curfrom == 'bt' || curto == 'bten' || curfrom == 'bten')){ // SELL BITCOIN BTC
			var equiv = 1 / parseFloat(_("tickbtenbtrate").value);
			var rate = parseFloat(_('tick'+join+'rate').value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			equiv = amount * equiv;
			var thisr = parseFloat(_("tickbtenbtrate").value);
			var thisrate = parseFloat(_("tickbtenbtrate").value) * parseFloat(_('tick'+join+'rate').value);
			
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				if(curfrom == 'bten' && curto == 'bt'){
					$("#amountsummary").html("<b>~ $"+moneyFormat(equiv.toFixed(2))+"");
					$("#thistotal").val(equiv.toFixed(2));
					$("#thisamount").val(amount.toFixed(8));
					$("#thisrate").val(thisr.toFixed(8));
				}else{
					$("#thistotal").val(valu.toFixed(2));
					$("#thisamount").val(amount.toFixed(8));
					$("#thisrate").val(thisrate.toFixed(0));
					$("#amountsummary").html("<b>~ $"+moneyFormat(equiv.toFixed(2))+"<br/>Receive Total <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>");
				}
				
			}
		}else if(unit == 'USD' && method == '' && (curto == 'bt' || curfrom == 'bt' || curto == 'bten' || curfrom == 'bten')){// SELL BITCOIN USD
			var equiv = parseFloat(_("tickbtenbtrate").value);
			var thisrate = equiv;
			var rate = parseFloat(_("tickbtenbtrate").value) * parseFloat(_('tick'+join+'rate').value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			equiv = amount * equiv;
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				if(curfrom == 'bten' && curto == 'bt'){
					$("#amountsummary").html("<b>~ "+equiv.toFixed(8)+" BTC");
					$("#thistotal").val(equiv.toFixed(8));
					$("#thisamount").val(amount.toFixed(8));
					$("#thisrate").val(thisrate.toFixed(8));
				}else{
					$("#thistotal").val(valu.toFixed(8));
					$("#thisamount").val(amount.toFixed(8));
					$("#thisrate").val(rate.toFixed(0));
					$("#amountsummary").html("<b>~ "+equiv.toFixed(8)+" BTC<br/>Receive Total <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>");
				}					
			}
		}else if(unit == 'BTC' && method !== '' && (curto == 'bt' || curfrom == 'bt' || curto == 'bten' || curfrom == 'bten')){// BUY BITCOIN BTC
			var rate = parseFloat(_("tickbtenbtrate").value);
			amount = parseFloat(amount);			
			var equiv = amount / rate;
			var rate2 = rate / parseFloat(_('tick'+join+'rate').value);			
			var valu = equiv * rate2;			
			var valu2 = valu;
			var gateway = '';
			if(method == 'CC'){
				var gtv = parseFloat(_('ccgatewayfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Gateway Fee <b>&#8358;'+gtv+'</b>';
				}
				var rate3 = rate / parseFloat(_('tickbdbtrate').value);	
				var thisrate = rate / rate3;				
			}else if(method == 'BT'){
				var gtv = parseFloat(_('bankfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Bank Fee <b>&#8358;'+gtv+'</b>';
				}
				var thisrate = rate / rate2;				
			}else{
				var thisrate = rate / rate2;
			}
			
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(amount.toFixed(8));
				$("#thisamount").val(valu.toFixed(8));
				$("#thisrate").val(thisrate);
				$("#amountsummary").html("<b>~ $"+moneyFormat(equiv.toFixed(2))+"</b><br/>Payment Due <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>"+gateway+"<br/>Pay Total <b>&#8358;"+moneyFormat(valu2.toFixed(2))+"</b>");
			}
		}else if(unit == 'USD' && method !== '' && (curto == 'bt' || curfrom == 'bt' || curto == 'bten' || curfrom == 'bten')){ //BUY BITCOIN USD
			var rate = parseFloat(_("tickbtenbtrate").value) / parseFloat(_('tick'+join+'rate').value);
			var equiv = parseFloat( _("tickbtenbtrate").value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			equiv = equiv * amount;
			var valu2 = valu;
			var gateway = '';
			if(method == 'CC'){
				var gtv = parseFloat(_('ccgatewayfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Gateway Fee <b>&#8358;'+gtv+'</b>';
				}
				var rate3 = parseFloat( _("tickbtenbtrate").value) / parseFloat(_('tickbdbtrate').value);	
				var thisrate = parseFloat( _("tickbtenbtrate").value) / rate3;				
			}else if(method == 'BT'){
				var gtv = parseFloat(_('bankfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Bank Fee <b>&#8358;'+gtv+'</b>';
				}
				var rate3 = parseFloat( _("tickbtenbtrate").value) / parseFloat(_('tickbdbtrate').value);	
				var thisrate = parseFloat( _("tickbtenbtrate").value) / rate3;				
			}else{
				var rate3 = parseFloat( _("tickbtenbtrate").value) / parseFloat(_('tickbdbtrate').value);	
				var thisrate = parseFloat( _("tickbtenbtrate").value) / rate3;	
			}
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(amount.toFixed(8));
				$("#thisamount").val(valu.toFixed(8));
				$("#thisrate").val(thisrate);
				$("#amountsummary").html("<b>~ "+equiv.toFixed(8)+" BTC</b><br/>Payment Due <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>"+gateway+"<br/>Pay Total <b>&#8358;"+moneyFormat(valu2.toFixed(2))+"</b>");
			}	
			/////////////////// END BTC ////////////////////////
		}else if(AltArr.indexOf(unit) !== -1 && method == ''){ // SELL ALTCOIN ALT
			var equiv = 1 / parseFloat(_(curfrom+"rate").value);
			var rate = parseFloat(_("tick"+join+"rate").value);
			var thisrate = parseFloat(_(curfrom+"rate").value) * parseFloat(_('tick'+join+'rate').value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			equiv = amount * equiv;
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');				
				$("#thistotal").val(valu.toFixed(8));
				$("#thisamount").val(amount.toFixed(8));
				$("#thisrate").val(thisrate.toFixed(0));
				$("#amountsummary").html("<b>~ $"+moneyFormat(equiv.toFixed(2))+"<br/>Receive Total <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>");
			}
		}else if(unit == 'USD' && method == ''){ //SELL ALTCOIN USD
			var equiv = parseFloat(_(curfrom+"rate").value);
			var rate = parseFloat(_("tick"+join+"rate").value) * equiv;
			amount = parseFloat(amount);
			var valu = amount * rate;
			equiv = amount * equiv;			
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(valu.toFixed(8));
				$("#thisamount").val(amount.toFixed(8));
				$("#thisrate").val(rate.toFixed(0));
				$("#amountsummary").html("<b>~ "+equiv.toFixed(8)+" "+curfrom.toUpperCase()+"<br/>Receive Total <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>");
			}
		}else if(AltArr.indexOf(unit) !== -1 && method !== ''){ //BUY ALTCOIN ALT
			var rate = parseFloat(_("tick"+join+"rate").value);
			amount = parseFloat(amount);			
			var equiv = amount / parseFloat(_(curto+'rate').value);			
			var valu = amount / rate;
			var valu2 = valu;
			var gateway = '';
			if(method == 'CC'){
				var gtv = parseFloat(_('ccgatewayfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Gateway Fee <b>&#8358;'+gtv+'</b>';
				}
				if(curto == 'eth'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdethrate').value); }
				if(curto == 'ltc'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdltcrate').value); }
				if(curto == 'bch'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdbchrate').value); }
				var thisrate = parseFloat(_(curto+'rate').value) / rate3;				
			}else if(method == 'BT'){
				var gtv = parseFloat(_('bankfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Bank Fee <b>&#8358;'+gtv+'</b>';
				}
				if(curto == 'eth'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdethrate').value); }
				if(curto == 'ltc'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdltcrate').value); }
				if(curto == 'bch'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdbchrate').value); }
				var thisrate = parseFloat(_(curto+'rate').value) / rate3;				
			}else{
				if(curto == 'eth'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdethrate').value); }
				if(curto == 'ltc'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdltcrate').value); }
				if(curto == 'bch'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdbchrate').value); }
				var thisrate = parseFloat(_(curto+'rate').value) / rate3;	
			}
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(amount.toFixed(8));
				$("#thisamount").val(valu.toFixed(8));
				$("#thisrate").val(thisrate);
				$("#amountsummary").html("<b>~ $"+moneyFormat(equiv.toFixed(2))+"</b><br/>Payment Due <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>"+gateway+"<br/>Pay Total <b>&#8358;"+moneyFormat(valu2.toFixed(2))+"</b>");
			}
		}else if(unit == 'USD' && method !== ''){ //BUY ALTCOIN USD
			var equiv = parseFloat(_(curto+"rate").value);
			var rate = equiv / parseFloat(_("tick"+join+"rate").value);				
			amount = parseFloat(amount);
			var valu = amount * rate;
			equiv = equiv * amount;
			var valu2 = valu;
			var gateway = '';
			if(method == 'CC'){
				var gtv = parseFloat(_('ccgatewayfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Gateway Fee <b>&#8358;'+gtv+'</b>';
				}
				if(curto == 'eth'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdethrate').value); }
				if(curto == 'ltc'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdltcrate').value); }
				if(curto == 'bch'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdbchrate').value); }
				var thisrate = parseFloat(_(curto+'rate').value) / rate3;				
			}else if(method == 'BT'){
				var gtv = parseFloat(_('bankfee').value);
				valu2 = valu + gtv;
				if(gtv > 0){
					gateway = '<br/>Bank Fee <b>&#8358;'+gtv+'</b>';
				}
				if(curto == 'eth'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdethrate').value); }
				if(curto == 'ltc'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdltcrate').value); }
				if(curto == 'bch'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdbchrate').value); }
				var thisrate = parseFloat(_(curto+'rate').value) / rate3;				
			}else{
				if(curto == 'eth'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdethrate').value); }
				if(curto == 'ltc'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdltcrate').value); }
				if(curto == 'bch'){ var rate3 = parseFloat(_(curto+'rate').value) / parseFloat(_('tickbdbchrate').value); }
				var thisrate = parseFloat(_(curto+'rate').value) / rate3;	
			}
			
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(amount.toFixed(8));
				$("#thisamount").val(valu.toFixed(8));
				$("#thisrate").val(thisrate);
				$("#amountsummary").html("<b>~ "+equiv.toFixed(8)+" "+curto.toUpperCase()+"</b><br/>Payment Due <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>"+gateway+"<br/>Pay Total <b>&#8358;"+moneyFormat(valu2.toFixed(2))+"</b>");
			}				
		}
	}else if(join !== 'usdeposit'){
		if(method !== '' && curto !== 'en'){ //BUY PM, BUY IT ,BUY GP
			var rate = 1 / parseFloat(_('tick'+join+'rate').value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			var valu2 = valu;
			var thisrate = parseFloat(_('tickbd'+curto+'rate').value);
			var gateway = '';
			if(method == 'CC'){
				var gtv = parseFloat(_('ccgatewayfee').value);
				valu2 += gtv;
				if(gtv > 0){
					gateway = '<br/>Gateway Fee <b>&#8358;'+gtv+'</b>';
				}
			}else if(method == 'BT'){
				var gtv = parseFloat(_('bankfee').value);
				valu2 += gtv;
				if(gtv > 0){
					gateway = '<br/>Bank Fee <b>&#8358;'+gtv+'</b>';
				}
			}
			
			
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(amount.toFixed(2));
				$("#thisamount").val(valu.toFixed(2));
				$("#thisrate").val(thisrate);
				$("#amountsummary").html("Payment Due <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>"+gateway+"<br/>Pay Total <b>&#8358;"+moneyFormat(valu2.toFixed(2))+"</b>");
			}
		}else if(method == '' && (curto == 'pm' || curfrom == 'pm')){ //SELL PM, DEPOSIT PM
			var rate = parseFloat(_('tick'+join+'rate').value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			var required = amount + (amount * 0.0199);
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				if(curfrom == 'pm'){
					$("#thistotal").val(valu.toFixed(2));
					$("#thisamount").val(amount.toFixed(2));
					$("#thisrate").val(rate);
				}				
				$("#amountsummary").html("<b>$"+moneyFormat(required.toFixed(2))+"</b> PM Balance is Required <br/ >Receive Total <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>");
			}
		}else if(method == '' && curto !== 'pm'){
			var rate = parseFloat(_('tick'+join+'rate').value);
			var withdrawlimit = parseFloat(_('withdrawlimitfee').value);
			var withdrawfee = parseFloat(_('withdrawfee').value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(valu.toFixed(2));
				$("#thisamount").val(amount.toFixed(2));
				$("#thisrate").val(rate);
				if(valu < withdrawlimit && withdrawfee > 0){
					var withdraw = '<br/>Withdrawal Fee <b>&#8358;'+moneyFormat(withdrawfee.toFixed(2))+'</b>';
				}else{
					var withdraw = '';
				}
				$("#amountsummary").html("Receive Total <b>&#8358;"+moneyFormat(valu.toFixed(2))+"</b>"+withdraw);
			}
		}else if(method !== '' && curto == 'en'){ //DEPOSIT WITH CC OR BD
			var rate = parseFloat(_('tick'+join+'rate').value);
			amount = parseFloat(amount);
			var valu = amount * rate;
			var gateway = '';
			if(method == 'CC'){
				var gtv = parseFloat(_('ccgatewayfee').value);
				valu += gtv;
				if(gtv > 0){
					gateway = '<br/>Gateway Fee <b>&#8358;'+gtv+'</b>';
				}
			}else if(method == 'BT'){
				var gtv = parseFloat(_('bankfee').value);
				valu += gtv;
				if(gtv > 0){
					gateway = '<br/>Bank Fee <b>&#8358;'+gtv+'</b>';
				}
			}
			if(isNaN(valu)){
				$("#amountsummary").hide(200);
				$("#amountsummary").addClass('bordernone');
				$("#amountsummary").html('');
				$("#thistotal").val('');
				$("#thisamount").val('');
				$("#thisrate").val('');
			}else{
				$("#amountsummary").show(200);
				$("#amountsummary").removeClass('bordernone');
				$("#thistotal").val(valu.toFixed(2));
				$("#thisamount").val(amount.toFixed(2));
				$("#thisrate").val(rate);
				$("#amountsummary").html("Receive Total <b>&#8358;"+moneyFormat(amount.toFixed(2))+"</b>"+gateway+"<br/>Pay Total <b>&#8358;"+moneyFormat(valu.toFixed(2)));
			}
		}
	}else if(join == 'usdeposit'){ 
		var rate = parseFloat(_(join).value);
		amount = parseFloat(amount);
		var valu = amount * rate;
		if(isNaN(valu)){
			$("#amountsummary").hide(200);
			$("#amountsummary").addClass('bordernone');
			$("#amountsummary").html('');
			$("#thistotal").val('');
			$("#thisamount").val('');
			$("#thisrate").val('');
		}else{
			$("#amountsummary").show(200);
			$("#amountsummary").removeClass('bordernone');
			$("#thistotal").val(valu.toFixed(2));
			$("#thisamount").val(amount.toFixed(2));
			$("#thisrate").val(rate);			
			$("#amountsummary").html("Receive Total <b>$"+moneyFormat(valu.toFixed(2))+" worth of bitcoin</b>");
		}
	}		
}

function Process(curfrom, curto, method, amount, unit)
{	
	var AltArr = ['bch', 'ltc', 'eth'];
	var CurtoArr = ['bch', 'ltc', 'eth', 'bt', 'pm'];
	var alt = "0";
	var receivename = "";
	var account = "";
	var ok = "";
	var rate = "";
	var authorize = "";
	var want = "amount";	
	
	var email = $('#sessionemail').val();	
	var curfrom = $('#'+curfrom).val();		
	var curto = $('#'+curto).val();	
	var join = curfrom+curto;
	var amount = $('#'+amount).val();	
	var thisamount = $('#thisamount').val();	
	var total = $('#thistotal').val();	
	var rate = $('#thisrate').val();	
	var unit = $('#'+unit).val();
	var method = $('#'+method).val();
	
	if(curto == 'cc' || curto == 'en' || (curfrom == 'bten' && curto == 'bt')){
		want = "total";
	}
	
	if($('#account')){
		account = $('#account').val();
	}
	
	if($('#quickfund_bank')){
		var bank = $('#quickfund_bank').val();
	}
	
	var pmacctname = $('#reqname').val();	
	var pmfetch = $('#reqnamefetch').val();
	var confirmacct = $('#confirmaccount').val();
	if(confirmacct == '1'){
		ok = '1';
	}
	
	if(AltArr.indexOf(curto) != -1){
		alt = '1';
		if(curto == 'bch'){receivename = 'Bitcoin Cash';}
		if(curto == 'eth'){receivename = 'Ethereum';}
		if(curto == 'ltc'){receivename = 'Litecoin';}
	}
	
	if(AltArr.indexOf(curfrom) != -1){
		alt = '1';
		if(curfrom == 'bch'){receivename = 'Bitcoin Cash';}
		if(curfrom == 'eth'){receivename = 'Ethereum';}
		if(curfrom == 'ltc'){receivename = 'Litecoin';}
	}
	
	if(curto == 'pm'){receivename = pmacctname;}
	if(curto == 'bt'){receivename = 'Bitcoin';}
	if(curto == 'it'){receivename = 'iTunes Gift Card';}
	if(curto == 'gp'){receivename = 'Google Play Card';}
	
	var confirmcode = localStorage.getItem("appsessioncode");
	if(curfrom == 'en'){
		authorize = $('#authorize').val();
		if(authorize == ''){
			formError('Confirmation Code is Required');
			return false;
		}else if(confirmcode !== authorize){
			formError('Invalid Confirmation Code');
			return false;
		}
	}else if(curfrom == 'bten'){
		authorize = $('#authorize').val();
		if(authorize == ''){
			formError('Confirmation Code is Required');
			return false;
		}else if(confirmcode !== authorize){
			formError('Invalid Confirmation Code');
			return false;
		}
	}else if(method == 'EN'){
		authorize = $('#authorize').val();
		if(authorize == ''){
			formError('Confirmation Code is Required');
			return false;
		}else if(confirmcode !== authorize){
			formError('Invalid Confirmation Code');
			return false;
		}
	}
		
	if(amount == ""){
		formError('Amount is Required');
		return false;
	}else if(pmfetch == '0' && curto == 'pm' && confirmacct == '0'){
		formError('Please turn switch to "YES"');
		return false;
	}else if((CurtoArr.indexOf(curto) != -1) && account == ''){
		formError('Account is Required');
		return false;
	}else if((CurtoArr.indexOf(curto) != -1) && account == ''){
		formError('Account is Required');
		return false;
	}else{		
		$('#send-button').attr('disabled', true);
		$('#form-page').attr('disabled', true);
		if(join == 'btencc'){
			var data = 'email='+email+'&from='+curfrom+'&to='+curto+'&amount='+thisamount+'&total='+total+'&unit='+unit;
			var url = "https://endopay.com/appmobile/app_quicksell.php";
		}else if(join == 'usdeposit'){
			var data = 'email='+email+'&type=request&bank='+bank+'&amount='+thisamount;
			var url = "https://endopay.com/appmobile/app_usbankdeposit.php";
		}else{
			var data = 'email='+email+'&from='+curfrom+'&to='+curto+'&rate='+rate+'&want='+want+'&alt='+alt+'&amount='+thisamount+'&total='+total+'&account='+account+'&accountname='+receivename+'&method='+method+'&ok='+ok+'&unit='+unit;
			var url = "https://endopay.com/appmobile/app_processor.php";
		}
		$("body").removeClass('loaded');	
		ajax = ajaxObj("POST", url);   
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true){
				res = ajax.responseText;
				var success = res.trim().split('|');
				var state = success[0];
				var imgsrc = success[1];
				var ordernumber = success[2];
				if(state == "success"){					
					$('#send-button').attr('disabled', false);
					$('#form-page').attr('disabled', false);
					$(".formpage").removeClass('show');
					$(".formpage").addClass('hide');
					$(".statuspage").removeClass('hide');
					$(".statuspage").addClass('show').fadeIn(1000);
					$(".statuspage .data-title").html("Status Check");
					$(".statuspage .data-title").addClass('ln40');
					$(".statuspage .data-subtitle").html('');
					//$("#statusdisplay").html(imgsrc);					
					$("orderno").val(ordernumber);
					localStorage.setItem("orderno", ordernumber);
					var url = "https://endopay.com/appmobile/app_status.php?OrderID="+ordernumber;
					var iframe = "<iframe src=\""+url+"\" frameborder=\"0\" onload=\"onMyFrameLoad(this)\" allowfullscreen></iframe>";
					$("#statusdisplay").html(iframe);
					fetchData();
					return false;
				}else{
					onPageLoad();
					$('#send-button').attr('disabled', false);
					$('#form-page').attr('disabled', false);
					formError(res);
					return false;
				}
			}else if(ajaxReturn(ajax) == false){
				onPageLoad();
				$('#send-button').attr('disabled', false);
				$('#form-page').attr('disabled', false);
				formError("Please check your internet connection");
			} 
		} 
		ajax.send(data); 
	}
	return (true);
}

function onPageLoad(){
	$("body").addClass('loaded');
}

function onMyFrameLoad(){
	$("body").addClass('loaded');
}

function playSound(){

	var update_sound = new Audio();

	if(!!(update_sound.canPlayType && update_sound.canPlayType('audio/ogg; codecs="vorbis"').replace(/no/, '')))
	{
		update_sound.src = "/audio/update.ogg";
	}
	else
	{ 
		if(!!(update_sound.canPlayType && update_sound.canPlayType('audio/mpeg;').replace(/no/, '')))
		{
			update_sound.src = "/audio/update.mp3";		
		}
		else 
		{
			if(!!(update_sound.canPlayType && update_sound.canPlayType('audio/mp4; codecs="mp4a.40.2"').replace(/no/, '')))
			{
				update_sound.src = "/audio/update.m4a";			
			}
			else
			{
				update_sound.src = "/audio/update.wav";			
			}
		}
	}

	update_sound.play();

}


var ratefetch = setInterval(function(){		
		if(localStorage.getItem("appsessionlogin") == '1'){
			var session = cookieGet("appsession");	
			if(localStorage.getItem("appsessionmodule") !== '1'){				
				localStorage.setItem("appsessionmodule", '1');
				localStorage.setItem("appsession", session);
				fetchModule(session);
			}
			fetchRate(session);
			Calculate('curfrom', 'curto', 'method', 'amount', 'unit');			
		}		
	}, 30000);
	

$(function(){
	
	var input_item, input_block, output_item, output_block, direction, count_vins, accordion_list_item, accordion_list,info_block, clas, accordion_list_itemN, accordion_listN, input_block_count, inplen, inrem, outlen, outrem;
	
	
	$("body").on('paste', '#amount', removeAlphaChars);
		
	$("body").on('paste', '#account', function(){
        var elem = $(this);
        setTimeout(function(){
            nameFetch();
        }, 100);
    });
	
	$("body").on('keydown', '#authorize', function(){
        setTimeout(function(){
            // Allow: backspace, delete, tab, escape, enter and .
			if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
				 // Allow: Ctrl+A
				(e.keyCode == 65 && e.ctrlKey === true) || 
				 // Allow: home, end, left, right
				(e.keyCode >= 35 && e.keyCode <= 39)){
					 // let it happen, don't do anything			 
					 return;
			}
			// Ensure that it is a number and stop the keypress
			if((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105) && (e.keyCode != 86 && e.keyCode != 67 && e.keyCode != 88)){
				e.preventDefault();
			}
        }, 10);
    });	
	
	
	$(document).on("submit", "#quickfund_form", function(event){
		event.preventDefault();
		var name = $("#quickfund_receipt").val();		
		if(!name){
			formError("Please upload a receipt");
			return false;
		}			
		var con = "Is that the receipt?";
		
		if(confirm(con))
		{
			$.ajax({
				url:"https://endopay.com/appmobile/app_usbankdeposit.php",
				method:"POST",
				data:new FormData(this),
				contentType:false,
				processData:false,
				success:function(data)
				{
					formError(data);
				}
			});
		}
		else
		{
			return false;
		}
	});
	
	$("body").on('click', '.unitswitch', function(){
		var unit, amount;
		var cryptoval = $('.cryptoswitch').html();
		if($('.unitswitch').prop('checked') == true){
			$('.btcunit').html(cryptoval);
			$('#unit').val(cryptoval);
			unit = cryptoval;
		}else{
			$('.btcunit').html('USD');
			$('#unit').val('USD');
			unit = 'USD';
		}
		amount = $('#amount').val();
		
		if(amount !== ''){
			Calculate('curfrom', 'curto', 'method', 'amount', 'unit');
		}
	});
	
	$("body").on('click', '.monimiechat', function(){
		
		$('body').removeClass('loaded');
		//var url = "https://monimie-test.herokuapp.com/";
		//var iframe = "<iframe src=\""+url+"\"  frameborder=\"0\" onload=\"onMyFrameLoad(this)\" allowfullscreen></iframe>";		
		
		$(".mainproject").removeClass('show');
		$(".mainproject").addClass('hide');
		$(".pinpad").removeClass('show');
		$(".pinpad").addClass('hide');
		
		$(".monimiepage").removeClass('hide');
		$(".monimiepage").addClass('show').fadeIn(1000);
		
		$(".monimiepage .data-title").html('Monimie ChatBot');
		$(".monimiepage .data-title").addClass('ln40');
		$(".monimiepage .data-subtitle").html('');
		
		
		//$('#ulform').html("<img src='https://endopay.com/images/spinner.gif' alt=''/>");
		//$('#ulform').html(iframe);
		
		//$('.form-page').addClass('monimie-page');
		//$('#setupuse').css('visibility', 'hidden');
		//$('#setupuse').css('display', 'none');
		//setTimeout(function(){$('.monimie-page').removeClass('form-page')}, 250);
		onPageLoad();
	});
	
	$("body").on('click', '.monimie-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		//$(".monimie-page").addClass('form-page');	
		setTimeout(function(){
			disableInput = false;
			//$('.form-page').removeClass('monimie-page');
			$(".homepage").removeClass('show');		
			$(".monimiepage").removeClass('show');
			$(".monimiepage").addClass('hide');	
			$(".homepage").addClass('hide');
			$("#pinlock").removeClass('fa-unlock-alt');
			$("#pinlock").addClass('fa-lock');
			$(".pinpad").removeClass('hide');
			$(".pinpad").addClass('show').fadeIn(1000);	
			onPageLoad();
		}, 250);				
	});
	
	
	
	
	
	$("body").on('click', '.apiswitch', function(){
		if($('.apiswitch').prop('checked') == true){
			Switch('apioff');
		}else{
			Switch('apion');
		}
	});
	
	$("body").on('click', '.confirmswitch', function(){
		if($('.confirmswitch').prop('checked') == true){
			$('#confirmaccount').val('1');
		}else{
			$('#confirmaccount').val('0');
		}
	});
	
	$("body").on('click', '.form-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$(".mainproject").removeClass('hide');		
		$(".formpage").removeClass('show');
		$(".formpage").addClass('hide');	
		$(".mainproject").addClass('show').fadeIn(1000);
		if($('.action_pass').hasClass('icon-eye-blocked')){
			$('.btcaddress').html('***');
			$('.currency').html('***');
		}
		onPageLoad();
	});
	
	$("body").on('click', '.setup-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$(".setup-page").addClass('form-page');	
		setTimeout(function(){
			disableInput = false;
			$("#pinlock").removeClass('fa-unlock-alt');
			$("#pinlock").addClass('fa-lock');
			$(".pinpad").removeClass('show');
			$(".pinpad").addClass('hide');			
			$(".homepage").removeClass('hide');		
			$(".formpage").removeClass('show');
			$(".formpage").addClass('hide');	
			$(".homepage").addClass('show').fadeIn(1000);
		}, 250);
		onPageLoad();
	});
	
	$("body").on('click', '.status-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$("#statusdisplay").html('');
		$(".formpage").removeClass('hide');		
		$(".statuspage").removeClass('show');
		$(".statuspage").addClass('hide');	
		$(".formpage").addClass('show').fadeIn(1000);
		$("input").val('');
		onPageLoad();
	});
	
	$("body").on('click', '.status-page2', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$("#statusdisplay2").html('');
		$(".mainproject").removeClass('hide');		
		$(".statuspage2").removeClass('show');
		$(".statuspage2").addClass('hide');
		$(".mainproject").addClass('show').fadeIn(1000);
		if($('.action_pass').hasClass('icon-eye-blocked')){
			$('.btcaddress').html('***');
			$('.currency').html('***');
		}
		$("#historybtn").click();		
		onPageLoad();
	});
	
	$("body").on('click', '.settings-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		disableInput = false;
		$("#pinlock").removeClass('fa-unlock-alt');
		$("#pinlock").addClass('fa-lock');
		$(".pinpad").removeClass('show');
		$(".pinpad").addClass('hide');
		$(".mainproject").removeClass('hide');		
		$(".settingspage").removeClass('show');
		$(".settingspage").addClass('hide');	
		$(".mainproject").addClass('show').fadeIn(1000);
		if($('.action_pass').hasClass('icon-eye-blocked')){
			$('.btcaddress').html('***');
			$('.currency').html('***');
		}
		onPageLoad();
	});	
	
	$("body").on('click', '.login-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$(".loginoptionpage").removeClass('hide');		
		$(".loginpage").removeClass('show');
		$(".loginpage").addClass('hide');		
		$(".loginoptionpage").addClass('show').fadeIn(1000);
		$(".loginoptionpage .data-title").html('Login');
		$(".loginoptionpage .data-title").addClass('ln40');
		$(".loginoptionpage .data-subtitle").html('');	
		onPageLoad();
	});			
	
	$("body").on('click', '.loginoption-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$(".homepage").removeClass('hide');		
		$(".loginoptionpage").removeClass('show');
		$(".loginoptionpage").addClass('hide');	
		$(".homepage").addClass('show').fadeIn(1000);
		onPageLoad();
	});
	
	$("body").on('click', '.register-page', function(){
		$("body").removeClass('loaded');
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$(".homepage").removeClass('hide');		
		$(".registerpage").removeClass('show');
		$(".registerpage").addClass('hide');
		$(".homepage").addClass('show').fadeIn(1000);
		onPageLoad();
	});
	
	$("body").on('click', '.history-list', function(){
		var ordernumber = $(this).data('order');
		$(".close").click();		
		$(".statuspage2").removeClass('hide');		
		$(".mainproject").removeClass('show');
		$(".mainproject").addClass('hide');
		$(".statuspage2").addClass('show').fadeIn(1000);
		$(".statuspage2 .data-title").html("Status Check");
		$(".statuspage2 .data-title").addClass('ln40');
		$(".statuspage2 .data-subtitle").html('');
		$("#statusdisplay2").html('');
		$("orderno").val(ordernumber);
		$("body").removeClass('loaded');
		localStorage.setItem("orderno", ordernumber);
		var url = "https://endopay.com/appmobile/app_status.php?OrderID="+ordernumber;
		var iframe = "<iframe src=\""+url+"\"  frameborder=\"0\" onload=\"onMyFrameLoad(this)\" allowfullscreen></iframe>";
		$("#statusdisplay2").html(iframe);
		fetchData();
	});
	
	
	$("body").on("click", ".action_pass" ,function(){
		var valid, element = $(this), 
		input = $('.currency'), 
		avalid = $('#btcaddress').val(), 
		nvalid = parseFloat($('#ngnbalance').val()), 
		bvalid = parseFloat($('#btcbalance').val()), 
		uvalid = bvalid / parseFloat($('#tickbtenbtrate').val());			
		
		if($('.action_pass').hasClass('icon-eye-blocked')){
			$('.action_pass').removeClass('icon-eye-blocked');
			if($.isNumeric(nvalid)){
				$('.ngnbalance').html(moneyFormat(nvalid.toFixed(2)));
			}
			if($.isNumeric(bvalid)){
				$('.btcbalance').html(bvalid.toFixed(8));
			}
			if($.isNumeric(uvalid)){
				$('.usdbtcbalance').html(moneyFormat(uvalid.toFixed(2)));
			}	
			$('.btcaddress').html(avalid);				
			$(this).Tocuh_Element(element, 350);
		}else{
			$('.action_pass').addClass('icon-eye-blocked');
			$('.btcaddress').html('***');
			input.html('***');
			$(this).Tocuh_Element(element, 350);
		}		
	});
	
	$("body").on("click", ".scanner" ,function(){			
		var element = $(this), qr_input = $(this).prev();
		$(this).Tocuh_Element(element, 350);				
	});	
	
	$("body").on('click', '.message', function(){
		var message = $(this).data('message');
		var title = $(this).data('title');
		var klass = $(this).data('klass');
		$("body").addClass("modal-open");
		$("body").append('<div class="modal-backdrop fade in"></div>');			
		$("#addModal").addClass("in show animated slideInUp");
		$(".modal-title").html(title);	
		$("#coeg").html(message);
		
		if(klass == 'history'){
			direction =  document.body.querySelectorAll('.people-list'),
			count_vins = direction.length;	 	
			
			for(var i=0; i < count_vins; i++){
				accordion_list_item = direction[i].classList;
				accordion_list_item = accordion_list_item +'';
				clas = accordion_list_item.replace(/\bins-and-outs \b/g, '');
				inplen = $(".people-list > .list").children('.tx-history').length;
				$(".people-list > .list").children('.tx-history').slice(0, 5).show();
				if(inplen == 6){
					inrem = inplen - 5;
					$(".people-list > .list").children("a.loadMore").html("Load More ["+inrem+" Input]");
				}else if(inplen > 6){
					inrem = inplen - 5;
					if(inrem < 5){
						$(".people-list > .list").children("a.loadMore").html("Load More ["+inrem+" Inputs]");
					}else{
						$(".people-list > .list").children("a.loadMore").html("Load More [5/"+inrem+" Inputs]");
					}
				}else{
					$(".people-list > .list").children("a.loadMore").html("");
				}
			}
		}else if(klass == 'sendbtc'){
			var rate = $("#tickbtenbtrate").val();
			$("#btcex").html('$1 = '+rate+' BTC');			
		}
	});	
		
	$("body").on('click', 'a.loadMore', function(e){
		e.preventDefault();
		e.stopPropagation();
		e.stopImmediatePropagation();	
		
		accordion_list_item = this.parentNode;
		accordion_list_itemN = this.parentNode.classList;
		accordion_list = accordion_list_item.parentNode;
		accordion_listN = accordion_list_item.parentNode.classList;
		
		if(accordion_list_itemN == 'list'){
			accordion_listN = accordion_listN +'';
			clas = accordion_listN.replace(/\bins-and-outs \b/g, '');
			input_item = $(".people-list > .list");
			input_block = input_item.find('.tx-history:hidden');
			inplen = input_block.length;
			if(inplen == 6){
				inrem = inplen - 5;
				input_block.slice(0, 5).slideDown();
				$(".people-list > .list").children("a.loadMore").html("Load More ["+inrem+" Input]");
			}else if(inplen > 6){
				inrem = inplen - 5;
				input_block.slice(0, 5).slideDown();
				if(inrem < 5){
					$(".people-list > .list").children("a.loadMore").html("Load More ["+inrem+" Inputs]");
				}else{
					$(".people-list > .list").children("a.loadMore").html("Load More [5/"+inrem+" Inputs]");
				}
			}else{
				input_block.slice(0, inplen).slideDown();
				$(".people-list > .list").children("a.loadMore").html("");
				$(".people-list > .list").children("a.loadMore").fadeOut('slow');
			}		
			
		}
		
		var d = $('#myhistorylist'); 
		d.scrollTop(d[0].scrollHeight - d.height());
		
		
	});
	
	$("body").on("click", ".addressqr" ,function(){	
		
		var element = $('.addressqrcode'), qr_input = $('#btcaddress2').html();
		$('.addressqrcode').Tocuh_Element(element, 350);		
		
		var texts = qr_input;
		if(texts == '***'){
			formError('Make address visible to view QRcode');
			return false;
		}else if(texts !== ""){	
			var title = $(this).data('title');
			$("body").addClass("modal-open");
			$("body").append('<div class="modal-backdrop fade in"></div>');			
			$("#addModal2").addClass("in show animated slideInUp");
			$(".modal-title").html(title);	
			$("#qrcodeHeader").html(title);	
			$("#coeg2").html("");
			$("#coeg2").attr("align", "center");
			MkQRcode("coeg2", texts, 250, 250);
			$("#coeg2").append("<br/><hr/><font size='2'>"+texts+"</font><hr/>");	
		}
	});
	
	
	$("body").on('click', '.close', function(){
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$("#addModal, #addModal2").removeClass("in show animated slideInUp");
		$("#addModal, #addModal2").addClass("animated slideOutDown");		
		$(".modal-backdrop").remove();
		$("#addModal, #addModal2").removeClass("animated slideOutDown");
		$('#addModal, #addModal2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			
		});				
	});
	
	$("body").on('click', '.modal-dialog', function(){
		return false;
	});
	
	$("body").on('click', '.fade', function(event){
		event.preventDefault();	
		var element = $(this);
		$(this).Tocuh_Element(element, 350);
		$("#addModal, #addModal2").removeClass("in show animated slideInUp");
		$("#addModal, #addModal2").addClass("animated slideOutDown");		
		$(".modal-backdrop").remove();
		$("#addModal, #addModal2").removeClass("animated slideOutDown");
		$('#addModal, #addModal2').one('webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend', function(){
			
		});				
	});
		
	$("body").on("click", ".keypad--button[data-value]" ,function(evt){			
		if(disableInput){
			return;
		}
		const value = evt.target.attributes["data-value"].value;
		if(_pinArray.length < 6){
			_pinArray.push(value);
			bindPinToDisplay(_pinArray);
			if(_pinArray.length === 6){
				evaluatePin(_pinArray);
			}
		}	
	});
	
	$("body").on("click", ".keyboard--button__back-arrow" ,function(){			
		if(disableInput){
			return;
		}
		_pinArray.pop();
		bindPinToDisplay(_pinArray);			
	});
	
	$("body").on("click", ".keyboard--button__x" ,function(){			
		if(disableInput){
			return;
		}
		_pinArray = [];
		bindPinToDisplay(_pinArray);			
	});
	
	
});	




	
function bindPinToDisplay(pinArray, pinStatus) {		
	document.body.querySelectorAll(".pin-circle").forEach((el, index) => {
		if(pinStatus === "success"){
			el.classList.add("success");
		}else if(pinStatus === "error"){
			el.classList.add("error");
		}else if(index > pinArray.length - 1){
			el.classList.remove("entered");
			el.classList.remove("success");
			el.classList.remove("error");
		}else{
			el.classList.add("entered");
		}
	});
	
	if(pinStatus === "error"){
		document.body.querySelector(".confirmation-dots").classList.add("error");
	}else{
		document.body.querySelector(".confirmation-dots").classList.remove("error");
	}
}
var logintrial = 0;
function evaluatePin(pinArray){
	const enteredPin = pinArray.join("");
	const correctPin = localStorage.getItem("appsessioncode");		
	if(enteredPin === correctPin){		
		$("body").removeClass('loaded');
		$("#pinlock").removeClass('fa-lock');
		$("#pinlock").addClass('fa-unlock-alt');		
		disableInput = true;
		setTimeout(() => {
			bindPinToDisplay(pinArray, "success");
			setTimeout(() => {
				playSound();
				_pinArray = [];
				bindPinToDisplay(_pinArray);				
				$(".pinpad").addClass('hide');
				$(".pinpad").removeClass('show');
				$(".homepage").removeClass('show');
				$(".homepage").addClass('hide');
				$(".loginoptionpage").removeClass('show');
				$(".loginoptionpage").addClass('hide');
				$(".mainproject").removeClass('hide');						
				$(".mainproject").removeClass('vhide');
				$(".mainproject").addClass('vshow');
				$(".mainproject").addClass('show').fadeIn(1000);
				localStorage.setItem("appsessionlogin", "1");
				logintrial = 0;
				onPageLoad();
			}, 600);
		}, 250);
	}else{
		disableInput = true;
		setTimeout(() => {
			bindPinToDisplay(pinArray, "error");
			setTimeout(() => {
				_pinArray = [];
				bindPinToDisplay(_pinArray);
				disableInput = false;
				logintrial += 1;				
				if(logintrial >= 6){
					cookieSet("appsession", "", 1);
					localStorage.clear();
					location.reload();
					return false;
				}else{
					var tleft = 6 - logintrial;
					if(tleft > 1){
						formError(tleft+' trials left');
					}else{
						formError('Last trial left');
					}
				}
				
			}, 350);
		}, 250);
	}
}



function isEmail(email){
	var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
	return regex.test(email);
}


function nameFetch(){
	var account = $("#account").val();
	var prevqueried = $("#prevaccount").val();
	var curto = $("#curto").val();
	var email = $("#sessionemail").val();
	var test = isEmail(account);
	
	if($("#accountsummary")){
		$("#accountsummary").hide(200);
	}
	
	if(curto == "bd" || curto == "cc"){
		nameQuery(email, curto);
	}else if((account.length >= 8 && account.length <= 10) && curto == "pm"){
		var account = account.substring(0,9);
		$("#accountsummary").show(200);
		if(prevqueried != account){
			nameQuery(account, curto);
		}
		$("#prevaccount").val(account);
	}else if((curto == "bt" || curto == "bch" || curto == "ltc") && account.length >= 32){
		
	}else if(curto == "eth" && account.length >= 41){
		
	}else if(curto !== "pm" && curto !== "em" && curto !== "bt" && curto !== "pp" && curto !== "ltc" && curto !== "bch" && curto !== "eth"){
					
	}
}

function nameQuery(a, b){
	var res, response, type, ajax, name;		
	name = 'rate';		
	if(name == ""){
		return false;
	}else{
		ajax = ajaxObj("POST", "https://endopay.com/includes/name_lookup.php?name="+a+"&type="+b);   
		ajax.onreadystatechange = function() {
		if(ajaxReturn(ajax) == true) { 
			res = ajax.responseText;
			res = res.trim();
			if(res == "Wrong Account"){
				_("reqnamefetch").value = "0";
				_("reqname").value = "";
				$("#accountsummary").hide(200);
			}else if(res == "Account does not exist" || res == ""){
				_("reqnamefetch").value = "0";
				_("reqname").value = "";				
				var test = isEmail(a);
				if(test == true){
					$("#accountsummary").show(200);
					$("#accountsummary").removeClass("bordernone");
					$("#accountsummary").html("Add bank details");
				}else{
					var swtch = '<span class="mid"><label class="rocker rocker-small"><input type="checkbox" class="confirmswitch"/><span class="switch-left">YES</span><span class="switch-right">NO</span></label></span>';
					$("#accountsummary").show(200);
					$("#accountsummary").removeClass("bordernone");
					if(b == 'pm' && a.trim() != ''){
						$("#accountsummary").html("<b>"+a+"</b> appears to be Invalid<br/><b><font color='#bd5757'>Turn switch below to 'YES' if it is correct</font></b><br/>"+swtch);
					}else if(b == 'cc' && a.trim() == ''){
						$("#accountsummary").html("<b>Please check you bank account in the settings</b>");
					}else{
						$("#accountsummary").html("<b>Unknown error, Please try to restart your device or contact us if the issue persist.</b>");
					}
				}
			}else{
				_("reqnamefetch").value = "1";
				_("reqname").value = res;
				$("#accountsummary").show(200);
				$("#accountsummary").removeClass("bordernone");
				if(b == "bd" || b == "cc"){
					var gname = res.split('[');
					var acct = gname[1].split(']');
					var bankname = gname[0];						
					var acctno = acct[0];
					$("#accountsummary").html("<b>Account Resolved</b><br/>Bank Name: <b>"+bankname+"</b><br/>Bank Account: <b>"+acctno+"</b>");
				}else{
					$("#accountsummary").html("<b>"+a+" = "+res+"</b>");
				}				
			}
			
		}else if(ajaxReturn(ajax) == false){
			console.log("Please check your internet connection");
		}  
		} 
		ajax.send("name="+name); 
	}
	return (true);
}



function fetchData(){
	var res, response, type, ajax, email;	
	email = localStorage.getItem("appsession");             

	if(email == ""){
		location.reload();
	}else{ 
		ajax = ajaxObj("POST", "https://endopay.com/appmobile/app_data.php");   
		ajax.onreadystatechange = function() {
		if(ajaxReturn(ajax) == true) { 
			res = ajax.responseText;
			response = res.split("|"); 

			var hist = decodeURI(response[0]);
			$('#historybtn').data('message', hist);
			$('#accountbtn').data('message', hist);
					
			var btcaddress = response[1];
			var btcbalance = response[2];
			var ngnbalance = response[3];
			var btcunitrate = parseFloat(response[4]);
			var btbalance = parseFloat(btcbalance) / 100000000;			
			
			if(isNaN(btbalance)){
				btbalance = 0;
			}
			
			if(!btcaddress){
				$('.bindex').addClass('vhide');
				setTimeout(function(){fetchData();}, 30000);
				
			}else{
				$('#ngnbalance').val(ngnbalance);
				$('.ngnbalance').html(moneyFormat(parseFloat(ngnbalance).toFixed(2)));
				$('#btcbalance').val(btbalance);
				$('.btcbalance').html(btbalance);
				$('#btcaddress').val(btcaddress);
				$('.btcaddress').html(btcaddress);					
				$('.usdbtcbalance').html(moneyFormat(parseFloat(btbalance / btcunitrate).toFixed(2)));	
				$('#tickbtenbtrate').val(btcunitrate);
			}
			
			localStorage.setItem("appsessionrate", "1");
	
		}else if(ajaxReturn(ajax) == false){
			formError("Please check your internet connection");
		}  
		} 
		ajax.send("user="+email); 
	}
	return (true);
}


function scanCrypto(a){
	cordova.plugins.barcodeScanner.scan(
		function (result){
			if(result.format == 'QR_CODE' && result.cancelled == false){
				var value = result.text;
				var $target = $('#acctlabel');
				var $parent = $target.parent();
				$parent.addClass('input--filled');
                $('#'+a).val(value);
				setTimeout(function(){$('#'+a).focus()}, 500);
			}
		},
		function (error) {
			formError("Scanning failed: " + error);
		},
		{
			preferFrontCamera : false,
			showFlipCameraButton : true, 
			showTorchButton : true, 
			torchOn: false,
			saveHistory: true,
			prompt : "Scan Address QRcode",
			resultDisplayDuration: 500,
			formats : "QR_CODE,PDF_417",
			orientation : "portrait",
			disableAnimations : true,
			disableSuccessBeep: false
		}
	);
}


function removeAlphaChars(e){
	var self = $(this);
	setTimeout(function () {
		var initVal = self.val(),
			midVal = initVal.replace(/[^0-9.]/g, ""),
			outputVal = initVal.replace(/[^0-9]/g, "");
		if(initVal != outputVal) self.val(outputVal);
		
		var decimalloc = midVal.split("."),
			partone = decimalloc[0],
			parttwo = decimalloc[1];
			
		if(parttwo){
			var inarr = partone.split("");
			var countone = inarr.length;
			var outarr = outputVal.split("");
			var countout = outarr.length;
			var add = "";
			for(var i = 0; i < countout; i++){
				add = add+""+outarr[i];
				if(i == countone-1){
					add = add+".";
				}
			}
			var outVal = parseFloat(add);
			self.val(outVal);
		}
		Calculate('curfrom', 'curto', 'method', 'amount', 'unit');
	});
}

function SelectText(b){
	var Element = _(b+'2');
	if(Element.innerHTML == '***'){
		formError('Make address visible to copy');
		return false;
	}
	
	if(window.getSelection){		
		try{
			var selection = window.getSelection();
			var rangeToSelect = document.createRange();
			rangeToSelect.selectNodeContents(Element);
			selection.removeAllRanges(); 
			selection.addRange(rangeToSelect);					
			document.execCommand('copy');
			var tooltip = _(b+"_Tooltip");					
			tooltip.innerHTML = "Copied";
			tooltip.style.visibility = 'visible';
			
		}
		catch(err) 
		{
			var tooltip = _(b+"_Tooltip");					
			tooltip.innerHTML = "Unable to copy";
			tooltip.style.visibility = 'visible';
		}
	}
	else 
	{ 
		if(document.selection){
			try{
				var rangeToSelect = document.body.createTextRange();
				rangeToSelect.moveToElementText(Element);
				rangeToSelect.select();
				document.execCommand('copy');
				var tooltip = _(b+"_Tooltip");					
				tooltip.innerHTML = "Copied";
				tooltip.style.visibility = 'visible';
			}
			catch(err)
			{
				var tooltip = _(b+"_Tooltip");					
				tooltip.innerHTML = "Unable to copy";
				tooltip.style.visibility = 'visible';
			}
		}
	}
	
	setTimeout(function(){
		tooltip.innerHTML = "";
		tooltip.style.visibility = 'hidden';
	}, 1000);
}


function displaySetup(a){	
	$("body").removeClass('loaded');
	localStorage.setItem("appsession", a);	
	
	var form = '<span class="glarebg"></span><br/><br/>Set Confirmation Code<hr/><br/><span class="mid"><font size="2">Use any 6-digit</font></span><div class="mid"><span class="input input--filled"><input type="password" class="input__field" id="setcode12"/><label for="setcode12" class="input__label"><span class="input__label-content">Confirmation Code 1</span></label></span></div><div class="mid"><span class="input input--filled"><input type="password" class="input__field" id="setcode22"/><label for="setcode22" class="input__label"><span class="input__label-content">Confirmation Code 2</span></label></span></div><div class="mid"><button class="send-button" type="button" onmousedown="setPincode2()">Set Code</button></div><hr/>';	
	
	
	$('.loginpage').removeClass('show');
	$('.loginpage').addClass('hide');
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".pinpad").removeClass('show');
	$(".pinpad").addClass('hide');
	$(".formpage").removeClass('hide');
	$(".formpage").addClass('show').fadeIn(1000);
	
	$(".formpage .data-title").html('Set Confirmation');
	$(".formpage .data-title").addClass('ln40');
	$(".formpage .data-subtitle").html('');
	
	$('#ulform').html(form);
	
	$('.form-page').addClass('setup-page');
	$('#setupuse').css('visibility', 'hidden');
	$('#setupuse').css('display', 'none');
	setTimeout(function(){$('.setup-page').removeClass('form-page')}, 250);
	onPageLoad();
	
}



function displaySupport(){
	$("body").removeClass('loaded');
	var contactemail = $("#contactemail").val();
	var contactmobile = $("#contactmobile").val();
	
	//<span class="glarebg"></span>
	var form = '<br/><br/>Contact Us<hr/><br/><span class="mid"><span class="incsizespan" style="display: block;"><b>Contact Email:</b> <a href="mailto:'+contactemail+'">'+contactemail+'</a></span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>Whatsapp Contact:</b> <a href="https://api.whatsapp.com/send?phone='+contactmobile+'&text=Hi">+'+contactmobile+'</a></span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>App Version:</b> <font color="#fff">v4.3.0</font></span></span>';
	
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".formpage").removeClass('hide');
	$(".formpage").addClass('show').fadeIn(1000);
	
	$(".formpage .data-title").html('Support');
	$(".formpage .data-title").addClass('ln40');
	$(".formpage .data-subtitle").html('');
	
	$('#ulform').html(form);
	onPageLoad();
}


function displayProfile(){
	$("body").removeClass('loaded');
	var fname = $("#fname").val();
	var lname = $("#lname").val();
	var address = $("#haddress").val();
	var phone = $("#phone").val();
	var refcode = $("#rcode").val();
	var email = $("#sessionemail").val();
	var state = $("#bankacct").val();
	
	if(state == '0'){
		var sta = '<span style="color: #53fc53"><b>VERIFIED</b></span>';
	}else{
		var sta = '<span style="color: #7c5000"><b>NOT VERIFIED</b></span>';
	}
	
	var form = '<br/><br/>Registration Details<hr/><br/><span class="mid"><span class="incsizespan" style="display: block;"><b>Account Status:</b> '+sta+'</span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>Referral Code:</b> '+refcode+'</span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>Referral Link:</b> https://endopay.com/?ref='+refcode+'</span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>Name:</b> '+fname+' '+lname+'</span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>Address:</b> '+address+'</span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>Email:</b> '+email+'</span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>Phone:</b> '+phone+'</span></span><span class="mid"><span class="incsizespan" style="display: block;"><b>App Version:</b> <font color="#fff">v4.3.0</font></span></span>';
	
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".formpage").removeClass('hide');
	$(".formpage").addClass('show').fadeIn(1000);
	
	$(".formpage .data-title").html('Profile');
	$(".formpage .data-title").addClass('ln40');
	$(".formpage .data-subtitle").html('');
	
	$('#ulform').html(form);
	onPageLoad();
}


function displayLogin(){	
	$("body").removeClass('loaded');
	$(".loginoptionpage").addClass('hide');
	$(".loginoptionpage").removeClass('show');
	$(".loginpage").removeClass('hide');
	$(".loginpage").addClass('show').fadeIn(1000);
	$(".loginpage .data-title").html('Login');
	$(".loginpage .data-title").addClass('ln40');
	$(".loginpage .data-subtitle").html('');
	onPageLoad();
}

function displaySettings(){	
	$("body").removeClass('loaded');
	$(".mainproject").addClass('hide');
	$(".mainproject").removeClass('show');
	$(".settingspage").removeClass('hide');
	$(".settingspage").addClass('show').fadeIn(1000);
	$(".settingspage .data-title").html('Settings');
	$(".settingspage .data-title").addClass('ln40');
	$(".settingspage .data-subtitle").html('');
	onPageLoad();
}

function disLogin(){	
	$("body").removeClass('loaded');
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".homepage").addClass('hide');
	$(".homepage").removeClass('show');
	$(".loginoptionpage").removeClass('hide');
	$(".loginoptionpage").addClass('show').fadeIn(1000);
	$(".loginoptionpage .data-title").html('Login');
	$(".loginoptionpage .data-title").addClass('ln40');
	$(".loginoptionpage .data-subtitle").html('');
	onPageLoad();
}

function disRegister(){
	$("body").removeClass('loaded');
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".homepage").addClass('hide');
	$(".homepage").removeClass('show');
	$(".registerpage").removeClass('hide');
	$(".registerpage").addClass('show').fadeIn(1000);
	$(".registerpage .data-title").html('Register');
	$(".registerpage .data-title").addClass('ln40');
	$(".registerpage .data-subtitle").html('');
	onPageLoad();
}

function halfexitApp(){
	$("body").removeClass('loaded');
	disableInput = false;	
	var code = localStorage.getItem("appsessioncode");
	$(".mainproject").removeClass('vshow');
	$(".mainproject").addClass('vhide');
	$(".mainproject").removeClass('show');
	$(".mainproject").addClass('hide');
	$(".settingspage").removeClass('show');
	$(".settingspage").addClass('hide');
	$(".statuspage").removeClass('show');
	$(".statuspage").addClass('hide');
	$(".statuspage2").removeClass('show');
	$(".statuspage2").addClass('hide');
	$(".formpage").removeClass('show');
	$(".formpage").addClass('hide');
	$(".pinpad").removeClass('hide');
	$(".pinpad").addClass('show').fadeIn(1000);
	$("#pinlock").addClass('fa-lock');
	$("#pinlock").removeClass('fa-unlock-alt');	
	localStorage.clear();
	localStorage.setItem("appsessionlogin", "0");
	localStorage.setItem("appsessioncode", code);
	onPageLoad();
}


function QrCode(){
	var a = $("#btcaddress2").html();
	if(a !== '***'){		
		$("#qrcodeTable").html('');
		$("#QrCode").attr("title", a);		
		if(a && a !== '0'){
			jQuery('#qrcodeTable').qrcode({width:200,height:200,text:""+a+""});
		}
	}
	return false;
}

function AddressView(b){
	var address = $("#"+b).html();
	if(address !== '***'){
		window.open('https://endopay.com/btc/address/'+address, '_parent');
	}else{
		formError('Make address visible to view history');
	}
	return false;
}


function LaunchURL(b){
	if(b !== ''){
		window.open(b, '_parent');
	}
	return false;
}

function Switch(a){
	var res, response, type, ajax, email;
	if(a == 'apion'){
		type = '1';
	}else{
		type = '0';
	}
    email = cookieGet("appsession");           
    
	if(email == ""){
		location.reload();
	}else{ 
		$('body').removeClass('loaded');
		ajax = ajaxObj("POST", "https://endopay.com/appmobile/app_apiswitch.php");   
		ajax.onreadystatechange = function() {
			if(ajaxReturn(ajax) == true) {
				res = ajax.responseText;
				if(res == 'success' && a == 'apion'){
					$("#apiswitch").prop('checked', false);
					formError('Operation Successful');
				}else if(res == 'success' && a == 'apioff'){
					$("#apiswitch").prop('checked', true);
					formError('Operation Successful');
				}else{
					formError('Unknown error, Please try again');
				}
				onPageLoad();
			}else if(ajaxReturn(ajax) == false){
				formError("Please check your internet connection");
				onPageLoad();
			}  
		} 
		ajax.send("email="+email+"&type="+type); 
	} 
	return (true);
}

function makedefaultBank(a){
    var res, response, type, ajax, email;	
    email = cookieGet("appsession");
    
	if(email == ""){
		location.reload();
	}else{
		$('body').removeClass('loaded');
		$(".setpage").addClass("settings-page");
		$(".send-button").attr("disabled", true);					
		$("a").attr("disabled", true);
		ajax = ajaxObj("POST", "https://endopay.com/appmobile/app_makedefault.php");   
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true) {
				res = ajax.responseText;	
				if(res == 'success'){
					$(".setpage").addClass("settings-page");
					$(".send-button").attr("disabled", false);					
					$("a").attr("disabled", false);					
					fetchModule(email);
					if($('.action_pass').hasClass('icon-eye-blocked')){				
						$('.action_pass').removeClass('icon-eye-blocked');
					}
					formError('Operation Successful');
					onPageLoad();
				}else{
					$(".setpage").addClass("settings-page");
					$(".send-button").attr("disabled", false);					
					$("a").attr("disabled", false);
					formError(res); 
					onPageLoad();
				}
			}else if(ajaxReturn(ajax) == false){
				$(".setpage").addClass("settings-page");
				$(".send-button").attr("disabled", false);					
				$("a").attr("disabled", false);
				formError("Please check your internet connection");
				onPageLoad();
			}  
		} 
		ajax.send("email="+email+"&account="+a); 
	} 
	return (true);
}



function genAddress(){
	var email = cookieGet("appsession");
	var urlpost = 'https://endopay.com/appmobile/app_genaddress.php';
	if(email){
		$('body').removeClass('loaded');
		var data = 'email='+email;
		var ajax = ajaxObj("POST", urlpost);   
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true){
				var ok = ajax.responseText;   
				if(ok == 'Please try again'){
					formError(ok); 
				}else{
					$('.bindex').removeClass('vhide');
					$('.bindex').addClass('vshow');
					$('.genaddress').removeClass('show');
					$('.genaddress').addClass('hide');	
					formError('Operation Successful'); 
					fetchModule(email);					
				}
				onPageLoad();
				return false;
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


function genPrivKey(){
	var email = cookieGet("appsession");
	var urlpost = 'https://endopay.com/appmobile/app_genprivkey.php';
	if(email){
		$("body").removeClass("loaded");
		$(".setpage").addClass("settings-page");
		$(".send-button").attr("disabled", true);					
		$("a").attr("disabled", true);
		var data = 'email='+email;   
		var ajax = ajaxObj("POST", urlpost);   
		ajax.onreadystatechange = function() {
			if(ajaxReturn(ajax) == true) {
				var ok = ajax.responseText;   
				if(ok == 'Please try again'){
					$(".setpage").addClass("settings-page");
					$(".send-button").attr("disabled", false);					
					$("a").attr("disabled", false);
					formError(ok); 
				}else{
					$(".setpage").addClass("settings-page");
					$(".send-button").attr("disabled", false);					
					$("a").attr("disabled", false);
					$(".privkey").removeClass('show');
					$(".privkey").addClass('hide');				
					$(".apikeyholder").removeClass('hide');
					$(".apikeyholder").addClass('show');
					$("#apikey").html(ok);
					if($('.action_pass').hasClass('icon-eye-blocked')){				
						$('.action_pass').removeClass('icon-eye-blocked');
					}
					formError('Operation Successful');
				}
				onPageLoad();
				return false;
			}else if(ajaxReturn(ajax) == false){
				ajaxTimeout(ajax); 
				$(".setpage").addClass("settings-page");
				$(".send-button").attr("disabled", false);					
				$("a").attr("disabled", false);
				formError("Please check your internet connection");  
				onPageLoad();
			}  
		} 
		ajax.send(data); 
	}
	return(true);
}


function updateIP(){
	var ip = $("#setip").val();		
	var email = $("#sessionemail").val();
	
    if(!ip){
		formError('Please enter an IP');
		return false;
	}else if(ip){
		var data = 'type=updateIP&ip='+ip+'&email='+email;
		settingsForm(data);
	}else{
		formError('Please Fill the Form Properly');
	}
}

function addBank(){
	
    var bank = $("#setbank").val();
    var account = $("#setbankaccount").val();
    var prev = $("#bankacct").val();
	var email = $("#sessionemail").val();
	
	if(prev == "1"){
		var first = $("#setbankfirst").val();
		var last = $("#setbanklast").val();
		if(!first){
			formError('Please enter a valid first name');
			return false;
		}else if(!last){
			formError('Please enter a valid last name');
			return false;
		}
	}	
	
    if(!account){
		formError('Please enter a valid bank account');
		return false;
	}else if(!bank){
		formError('Please select a bank');
		return false;
	}	
	

    if(account && bank && prev != "1"){
		var data = 'type=addBank2&bankname='+bank+'&bankacct='+account+'&email='+email;
		settingsForm(data);
	}else if(account && bank && prev == "1" && first && last){
		var data = 'type=addBank&firstname='+first+'&lastname='+last+'&bankname='+bank+'&bankacct='+account+'&email='+email;
		settingsForm(data);
	}else{
		formError('Please Fill the Form Properly');
	}
}


function setPincode(){
	var code1 = $("#setcode1").val();
    var code2 = $("#setcode2").val();	
	var email = localStorage.getItem("appsession");
	
    if(!code1){
		formError('Please enter a code');
		return false;
	}
	
	if(!code2){
		formError('Please re-enter code');
		return false;
	}

    if(code1 && code2){
		var data = 'type=updatePincode&code2='+code1+'&code3='+code2+'&email='+email;
		settingsForm(data);
	}else{
		formError('Please Fill the Form Properly');
	}
}

function setPincode2(){
	var code1 = $("#setcode12").val();
    var code2 = $("#setcode22").val();	
	var email = localStorage.getItem("appsession");
	
    if(!code1){
		formError('Please enter a code');
		return false;
	}
	
	if(!code2){
		formError('Please re-enter code');
		return false;
	}

    if(code1 && code2){
		var data = 'type=updatePincode&code2='+code1+'&code3='+code2+'&email='+email;
		localStorage.setItem("appsetcode", "1");
		settingsForm(data);
	}else{
		formError('Please Fill the Form Properly');
	}
}

function updatePincode(){
	var code1 = $("#setcode").val();
    var code2 = $("#setnewcode").val();	
    var code3 = $("#setnewcode2").val();
	var email = $("#sessionemail").val();
	
    if(!code1){
		formError('Please enter current confirmation code');
		return false;
	}else if(!code2){
		formError('Please enter a new confirmation code');
		return false;
	}else if(!code3){
		formError('Please re-enter new confirmation code');
		return false;
	}

    if(code1 && code2 && code3){
		var data = 'type=updatePincode&code1='+code1+'&code2='+code2+'&code3='+code3+'&email='+email;
		settingsForm(data);
	}else{
		formError('Please Fill the Form Properly');
	}
}

function updatePassword(){
	var code1 = $("#setpass").val();
    var code2 = $("#setnewpass").val();	
    var code3 = $("#setnewpass2").val();	
	var email = $("#sessionemail").val();	
	
	if(!code1){
		formError('Please enter current password');
		return false;
	}else if(!code2){
		formError('Please enter a new password');
		return false;
	}else if(!code3){
		formError('Please re-enter new password');
		return false;
	}
	

    if(code1 && code2 && code3){
		var data = 'type=updatePassword&code1='+code1+'&code2='+code2+'&code3='+code3+'&email='+email;
		settingsForm(data);
	}else{
		formError('Please Fill the Form Properly');
	}
}

function settingsForm(a){
	var email = localStorage.getItem("appsession");
	if(a === ""){
		location.reload();
	}else{		
		var data = a;
		$("body").removeClass("loaded");
		$(".setpage").removeClass("settings-page");
		$(".send-button").attr("disabled", true);
		$("a").attr("disabled", true);
		ajax = ajaxObj("POST", "https://endopay.com/appmobile/app_settings.php");   
		ajax.onreadystatechange = function(){
			if(ajaxReturn(ajax) == true){
				var ok = ajax.responseText;
				if(ok == "success"){
					if(localStorage.getItem('appsetcode') == '1'){
						$(".setpage").addClass("settings-page");
						$(".send-button").attr("disabled", false);					
						$("a").attr("disabled", false);	
						formError('Operation successful');
						signInSession(email, '101010');
						$('.setup-page').addClass('form-page');	
						setTimeout(function(){					
							$('#setupuse').css('display', 'block');
							$('#setupuse').css('visibility', 'visible');
							$('.form-page').removeClass('setup-page');
							$(".formpage").removeClass('show');						
							$(".formpage").addClass('hide');
							$(".mainproject").removeClass('show');
							$(".mainproject").addClass('hide');
							$(".pinpad").removeClass('hide');
							$(".pinpad").addClass('show').fadeIn(1000);	
							localStorage.setItem("appsessionlogin", "0");
						}, 500);						
					}else{
						window.scrollTo(0,0);
						fetchModule(email);
						$(".setpage").addClass("settings-page");
						$(".send-button").attr("disabled", false);					
						$("a").attr("disabled", false);	
						if($('.action_pass').hasClass('icon-eye-blocked')){				
							$('.action_pass').removeClass('icon-eye-blocked');
						}
						formError('Operation successful');
					}
					onPageLoad();
				}else{			
					formError(ok);
					$(".setpage").addClass("settings-page");
					$(".send-button").attr("disabled", false);					
					$("a").attr("disabled", false);
					onPageLoad();
					return false;			
				}
			}else if(ajaxReturn(ajax) == false){
				ajaxTimeout(ajax);
				formError("Please check your internet connection");
				onPageLoad();
			} 
		}
		ajax.send(data);
	}
	return true;
}


function exitApp(){
	if(confirm("Sign in as different user?"))
	{
		cookieSet("appsession", "", 1);
		localStorage.clear();
		location.reload();
		return false;
	}
}

function upgradeApp(){
	if(navigator.userAgent.toLowerCase().indexOf("android") > -1) { 
		window.open('market://details?id=com.endopay.app', '_system', 'location=no');	
		//window.open('https://play.google.com/store/apps/details?id=com.endopay.app', '_system', 'location=no');
	}
}
		
function EmptySelection(b){
	_(b).innerHTML = '';
	_(b).style.visibility = 'hidden !important';
}

function formError(error){
	$(".errorNotify").html(error).fadeIn(400).delay(5000).fadeOut(400);
}

function moneyFormat(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

$.fn.Tocuh_Element = function(element, time){	
	element.addClass('clicked');		
	setTimeout(function(){
		element.removeClass('clicked');
	}, time);
}
