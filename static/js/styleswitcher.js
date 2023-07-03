/**	STYLE SWITCHER
*************************************************** **/
jQuery(document).ready(function() {
	"use strict";

    jQuery("#hideSwitcher, #showSwitcher").click(function () {

        if (jQuery("#showSwitcher").is(":visible")) {

			var _identifier = "#showSwitcher";
            jQuery("#switcher").animate({"margin-left": "0px"}, 500).show();
			createCookie("switcher_visible", 'true', 365);

        } else {

			var _identifier = "#switcher";
            jQuery("#showSwitcher").show().animate({"margin-left": "0"}, 500);
			createCookie("switcher_visible", 'false', 365);

        }

		jQuery(_identifier).animate({"margin-left": "-500px"}, 500, function () {
			jQuery(this).hide();
		});

    });
                      
});

var docean = $('#3docean');
var activeden = $('#activeden');
var audiojungle = $('#audiojungle');
var codecanyon = $('#codecanyon');
var graphicriver = $('#graphicriver');
var themeforest = $('#themeforest');
var photodune = $('#photodune');
$('#is_dark').on('click', function() {
	if (docean.length) {
		document.getElementById('3docean').src='static/img/logos-slider/3docean-dark-background.png';
	}
	if (activeden.length) {
		document.getElementById('activeden').src='static/img/logos-slider/activeden-dark-background.png';
	}
	if (audiojungle.length) {
		document.getElementById('audiojungle').src='static/img/logos-slider/audiojungle-dark-background.png';
	}
	if (codecanyon.length) {
		document.getElementById('codecanyon').src='static/img/logos-slider/codecanyon-dark-background.png';
	}
	if (graphicriver.length) {
		document.getElementById('graphicriver').src='static/img/logos-slider/graphicriver-dark-background.png';
	}
	if (photodune.length) {
		document.getElementById('photodune').src='static/img/logos-slider/photodune-dark-background.png';
	}
	if (themeforest.length) {
		document.getElementById('themeforest').src='static/img/logos-slider/themeforest-dark-background.png';
	}

	try{


		var elements = document.getElementsByClassName("recaptcha0Light");
        for(var i=0; i<elements.length; i++) {
            elements[i].style.display="none"
        }

		var elements = document.getElementsByClassName("recaptcha0Dark");
        for(var i=0; i<elements.length; i++) {
            elements[i].style.display="block"
        }

		var isDark = document.getElementById("isDark");
		isDark.value="dark"

		var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
		
			formControl.style.backgroundColor="#242424";
			formControl.style.color="white"
		});

		var color = "dark"
		$('#KisiselTeklifAl').attr('data-modal-color', color);
		$('#messageModal').attr('data-modal-color', color);
		$('#formcontact').attr('data-modal-color', color);
		$('#KurumsalTeklifAl').attr('data-modal-color', color);
		$('#OzelTeklifAl').attr('data-modal-color', color);
		$('#SosyalTeklifAl').attr('data-modal-color', color);
		$('#VideoAnimasyonTeklifAl').attr('data-modal-color', color);
		$('#EntegrasyonTeklifAl').attr('data-modal-color', color);

		const activeDiv = document.querySelectorAll('.custom-input')

		activeDiv.forEach(function(background) {
			background.style.background="#242424";
		
		});

		document.getElementById("formcontacText").style.background = "#242424";

		document.getElementById("formcontacText").style.color = "#868686";

		var inputFields = document.getElementsByClassName('input-field custom-input-field')
			var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
			inputField.style.color = "#868686";
		});

		var formCheckInputs = document.getElementsByClassName('form-check-input')
		var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
		
			formCheckInput.style.cssText += "box-shadow:0 0 5px 0px #242424 inset;";
		});

		var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
		var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
		
			formCheckInput.style.cssText += "box-shadow:0 0 5px 0px #242424 inset;";
		});

	} catch{

	}


});
$('#is_light').on('click', function() {
	if (docean.length) {
		document.getElementById('3docean').src='static/img/logos-slider/3docean-light-background.png';
	}
	if (activeden.length) {
		document.getElementById('activeden').src='static/img/logos-slider/activeden-light-background.png';
	}
	if (audiojungle.length) {
		document.getElementById('audiojungle').src='static/img/logos-slider/audiojungle-light-background.png';
	}
	if (codecanyon.length) {
		document.getElementById('codecanyon').src='static/img/logos-slider/codecanyon-light-background.png';
	}
	if (graphicriver.length) {
		document.getElementById('graphicriver').src='static/img/logos-slider/graphicriver-light-background.png';
	}
	if (photodune.length) {
		document.getElementById('photodune').src='static/img/logos-slider/photodune-light-background.png';
	}
	if (themeforest.length) {
		document.getElementById('themeforest').src='static/img/logos-slider/themeforest-light-background.png';
	}

	try{

		var elements = document.getElementsByClassName("recaptcha0Light");
        for(var i=0; i<elements.length; i++) {
            elements[i].style.display="block"
        }

		var elements = document.getElementsByClassName("recaptcha0Dark");
        for(var i=0; i<elements.length; i++) {
            elements[i].style.display="none"
        }
		
		var isDark = document.getElementById("isDark");
		isDark.value="white"

		var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
			formControl.style.backgroundColor="white";
			formControl.style.color="black"
		});

		var color = "light"
		$('#KisiselTeklifAl').attr('data-modal-color', color);
		$('#messageModal').attr('data-modal-color', color);
        $('#KurumsalTeklifAl').attr('data-modal-color', color);
		$('#OzelTeklifAl').attr('data-modal-color', color);
		$('#SosyalTeklifAl').attr('data-modal-color', color);
		$('#VideoAnimasyonTeklifAl').attr('data-modal-color', color);
		$('#EntegrasyonTeklifAl').attr('data-modal-color', color);


		const activeDiv = document.querySelectorAll('.custom-input')

		activeDiv.forEach(function(background) {
			background.style.background="white";
		
		});

		document.getElementById("formcontacText").style.background = "white";
		document.getElementById("formcontacText").style.color = "#495057";

		var inputFields = document.getElementsByClassName('input-field custom-input-field')
			var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
			inputField.style.color = "black";
		});

		var formCheckInputs = document.getElementsByClassName('form-check-input')
		var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
			formCheckInput.style.cssText += "box-shadow:0 0 5px 0px white inset;";
		});

		var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
		var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
			formCheckInput.style.cssText += "box-shadow:0 0 5px 0px white inset;";
		});

	} catch{

		
	}


});

function setActiveStyleSheet(title) {
	var i, a, main;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title")) {
			a.disabled = true;
			if(a.getAttribute("title") == title) { a.disabled = false; }
		}
	}

	// DARK SKIN
	var color_skin = readCookie('color_skin');
	if(color_skin == 'dark') {
		jQuery("#css_dark_skin").remove();
		jQuery("head").append('<link id="css_dark_skin" href="assets/css/layout-dark.css" rel="stylesheet" type="text/css" title="dark" />');
		jQuery("#is_dark").trigger('click');
		jQuery("a.logo img").attr('src', 'assets/images/logo_dark.png');
	}

	if (title=="red"){
		
		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid red;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "red";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "red";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "red";
		});

		var isDark = document.getElementById("isDark");

		var color = "red"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style= "border:2px solid red; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid red; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid red; box-shadow:0 0 5px 0px white inset;";
			});


			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid red; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});

		}
		
	}

	else if (title=="blue"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #4169e1;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#4169e1";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#4169e1";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#4169e1";
		});

		var color = "blue"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #4169e1; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #4169e1; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #4169e1; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #4169e1; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="blueviolet"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #8a2be2;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#8a2be2";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#8a2be2";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#8a2be2";
		});

		var color = "blueviolet"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #8a2be2; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #8a2be2; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #8a2be2; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #8a2be2; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="goldenrod"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #daa520;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#daa520";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#daa520";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#daa520";
		});

		var color = "goldenrod"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #daa520; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #daa520; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #daa520; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #daa520; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="green"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #72b626;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#72b626";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#72b626";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#72b626";
		});

		var color = "green"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #72b626; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #72b626; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #72b626; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #72b626; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="magenta"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #ff00ff;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#ff00ff";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#ff00ff";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#ff00ff";
		});

		var color = "magenta"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #ff00ff; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #ff00ff; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #ff00ff; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #ff00ff; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="orange"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #fa5b0f;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#fa5b0f";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#fa5b0f";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#fa5b0f";
		});

		var color = "orange"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #fa5b0f; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #fa5b0f; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #fa5b0f; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #fa5b0f; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="purple"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #6957af;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#6957af";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#6957af";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#6957af";
		});

		var color = "purple"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #6957af; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #6957af; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #6957af; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #6957af; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="yellow"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #ffb400;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#ffb400";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#ffb400";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#ffb400";
		});

		var color = "yellow"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #ffb400; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #ffb400; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #ffb400; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #ffb400; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

	else if (title=="yellowgreen"){

		var formControls = document.getElementsByClassName('form-control')
		var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			formControl.style="border:1px solid #9acd32;"
		});

		var closes = document.getElementsByClassName('close')
		var formControlDivs = Array.prototype.filter.call(closes, function(close){
			close.style.color = "#9acd32";
		});

		var fwNormals = document.getElementsByClassName('fw-normal')
		var fwNormalDiv = Array.prototype.filter.call(fwNormals, function(fwNormal){
			fwNormal.style.color = "#9acd32";
		});

		var formCheckLabels = document.getElementsByClassName('form-check-label')
		var fwNormalDiv = Array.prototype.filter.call(formCheckLabels, function(formCheckLabel){
			formCheckLabel.style.color = "#9acd32";
		});

		var color = "yellowgreen"
    	$('.form-check-input').attr('data-modal-color', color);
		$('.form-check-inputcheck').attr('data-modal-color', color);

		var isDark = document.getElementById("isDark");

		var colorName = document.getElementById("colorName");
		colorName.value=color;

		if (isDark.value=="dark"){

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="#242424";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
			
				formCheckInput.style="border:2px solid #9acd32; box-shadow:0 0 5px 0px #242424 inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #9acd32; box-shadow:0 0 5px 0px #242424 inset;"
			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="white"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "white";
			});

		}

		else{

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
	
				formControl.style.backgroundColor="white";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-inputcheck')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				
				formCheckInput.style="border:2px solid #9acd32; box-shadow:0 0 5px 0px white inset;";
			});

			var formCheckInputs = document.getElementsByClassName('form-check-input')
			var formCheckInputDivs = Array.prototype.filter.call(formCheckInputs, function(formCheckInput){
				formCheckInput.style="border:2px solid #9acd32; box-shadow:0 0 5px 0px white inset;"

			});

			var formControls = document.getElementsByClassName('form-control')
			var formControlDivs = Array.prototype.filter.call(formControls, function(formControl){
			
				formControl.style.color="black"
			});

			var inputFields = document.getElementsByClassName('input-field custom-input-field')
				var inputFieldsDiv = Array.prototype.filter.call(inputFields, function(inputField){
				inputField.style.color = "black";
			});
		}
		
	}

}

function getActiveStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("title") && !a.disabled) { return a.getAttribute("title"); }
	}

	return null;
}

function getPreferredStyleSheet() {
	var i, a;
	for(i=0; (a = document.getElementsByTagName("link")[i]); i++) {
		if(a.getAttribute("rel").indexOf("style") != -1 && a.getAttribute("rel").indexOf("alt") == -1 && a.getAttribute("title")) { 
			return a.getAttribute("title"); 
		}
	}

	return null;
}

function createCookie(name,value,days) {
	if (days) {
		var date = new Date();
		date.setTime(date.getTime()+(days*24*60*60*1000));
		var expires = "; expires="+date.toGMTString();
	} else {
		expires = "";
	}	document.cookie = name+"="+value+expires+";";
}

function readCookie(name) {
	var nameEQ = name + "=";
	var ca = document.cookie.split(';');
	for(var i=0;i < ca.length;i++) {
		var c = ca[i];

		while (c.charAt(0)==' ') {
			c = c.substring(1,c.length);
		}

		if (c.indexOf(nameEQ) == 0) {
			return c.substring(nameEQ.length,c.length);
		}
	}

	return null;
}


/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/
/** ********************************************************************************************************** **/

/**
	@ON LOAD
**/
window.onload = function(e) {

	// COLOR SCHEME
	var cookie = readCookie("style");
	var title = cookie ? cookie : getPreferredStyleSheet();
	setActiveStyleSheet(title);

	// DARK OR LIGHT
	var is_dark = readCookie('is_dark');
	if(is_boxed == 'true') {
		jQuery('body').removeClass('dark');
		jQuery('body').addClass('dark');
		jQuery("#is_dark").trigger('click');
	
	}

	// BOXED or WIDE
	var is_boxed = readCookie('is_boxed');
	if(is_boxed == 'true') {
		jQuery('body').removeClass('boxed');
		jQuery('body').addClass('boxed');
		jQuery("#is_boxed").trigger('click');
	}
	
}


/**
	COLOR SKIN [light|dark]
**/
jQuery("input.dark_switch").bind("click", function() {
	var boxed_switch = jQuery(this).attr('value');

	if(boxed_switch == 'dark') {
		jQuery("body").removeClass('dark');
		jQuery("body").addClass('dark');
		createCookie("is_dark", 'true', 365);

	} else {
		jQuery("body").removeClass('dark');
		createCookie("is_dark", '', -1);
		jQuery('body').removeClass('transparent');
	}
});





/**
	LAYOUT STYLE [wide|boxed]
**/
jQuery("input.boxed_switch").bind("click", function() {
	var boxed_switch = jQuery(this).attr('value');

	if(boxed_switch == 'boxed') {
		jQuery("body").removeClass('boxed');
		jQuery("body").addClass('boxed');
		createCookie("is_boxed", 'true', 365);
	} else {
		jQuery("body").removeClass('boxed');
		createCookie("is_boxed", '', -1);
		jQuery('body').removeClass('transparent');
	}
});



/**
	SEPARATOR STYLE [Normal|Skew|Reversed Skew|Double Diagonal|Big Triangle]
**/
jQuery("input.separator_switch").bind("click", function() {
	var separator_switch = jQuery(this).attr('value');

	if(separator_switch == 'skew') {
		jQuery("body").removeClass('reversed-skew');
		jQuery("body").removeClass('double-diagonal');
		jQuery("body").removeClass('big-triangle');
		jQuery("body").removeClass('normal');
		jQuery("body").addClass('skew');
		createCookie("is_skew", 'true', 365);
	}
	
	else if(separator_switch == 'reversed-skew') {
		jQuery("body").removeClass('skew');
		jQuery("body").removeClass('double-diagonal');
		jQuery("body").removeClass('big-triangle');
		jQuery("body").removeClass('normal');
		jQuery("body").addClass('reversed-skew');
		createCookie("is_reversed_skew", 'true', 365);
	}
	
	else if(separator_switch == 'double-diagonal') {
		jQuery("body").removeClass('skew');
		jQuery("body").removeClass('reversed-skew');
		jQuery("body").removeClass('big-triangle');
		jQuery("body").removeClass('normal');
		jQuery("body").addClass('double-diagonal');
		createCookie("is_double_diagonal", 'true', 365);
	}
	
	else if(separator_switch == 'big-triangle') {
		jQuery("body").removeClass('skew');
		jQuery("body").removeClass('reversed-skew');
		jQuery("body").removeClass('double-diagonal');
		jQuery("body").removeClass('normal');
		jQuery("body").addClass('big-triangle');
		createCookie("is_big_triangle", 'true', 365);
	}
	
	else {
		jQuery("body").removeClass('skew');
		jQuery("body").removeClass('reversed-skew');
		jQuery("body").removeClass('double-diagonal');
		jQuery("body").removeClass('big-triangle');
		jQuery("body").addClass('normal');
		createCookie("is_big_triangle", 'true', 365);
	}
});