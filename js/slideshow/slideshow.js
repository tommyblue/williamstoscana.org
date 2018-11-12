



var $jQSlide = jQuery.noConflict();

$jQSlide(".slideshow").each(function() {
	
	var array_id=$jQSlide(this).attr("id").split("slideshow_");
	var idslide=array_id[1];
		
	eval("var myVar" + idslide + ";");
});


$jQSlide(window).load(function() {
	
		
		
	
	$jQSlide(".slideshow_sposta_avanti").css({"cursor":"pointer"});
	$jQSlide(".slideshow_sposta_indietro").css({"cursor":"pointer"});	
	
	$jQSlide(".slideshow").each(function() {
	
			
		var array_id=$jQSlide(this).attr("id").split("slideshow_");
		var idslide=array_id[1];
		
					
		var larghezzaSlide=$jQSlide("#slideshow_"+idslide).width();
		var altezzaSlide=$jQSlide("#slideshow_"+idslide+"_altezza").val();
		var tempo=$jQSlide("#slideshow_"+idslide+"_tempo").val();
		var numfoto=$jQSlide("#slideshow_"+idslide+"_numfoto").val();
		
		
		$jQSlide("#slideshow_"+idslide).parent().css({"width":larghezzaSlide+"px"});
		
		
		var widthWin = $jQSlide(window).width();
	
		var hImg=0;
		if (widthWin <= 799) {
			$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento img").each(function() {
				var h=$jQSlide(this).height();
				
				var to_w=larghezzaSlide;
				var percent = (to_w/h); 
				var to_h = (h*percent);
				
				if(hImg<to_h)
					{
					hImg=h;
					}
			});
			
		
		$jQSlide(this).css({"height":hImg+"px"});
		}
		
		
				
		$jQSlide("#slideshow_"+idslide+" .slideshow_slide").css({"width":larghezzaSlide+"px","visibility":"visible"});
		$jQSlide("#slideshow_"+idslide+" .slideshow_slide_didascalia").css({"width":(larghezzaSlide-10)+"px"});
		
		$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").css({"width":(larghezzaSlide*numfoto)+"px"});
		
		
		
		
		
		
		var altezzaSlideAttuale=$jQSlide("#slideshow_"+idslide).height();
		$jQSlide("#slideshow_"+idslide+" .slideshow_slide_didascalia").each(function() {		
			var position =$jQSlide(this).position();		

			$jQSlide(this).css({"top":(-1)*(position.top-altezzaSlideAttuale+21)+"px"});
		});	
		
		
		
		if(numfoto>1)
			{
			//se ci sono solo immagini è necessario che le raddoppi altrimenti al passo successivo fa un move della seconda e la sposta sulla pirma e quindi la seconda resta vuota.				
			if(numfoto==2)
				{
				var primaFoto='<div class="slideshow_slide" id="slideshow_'+idslide+'_slide2"><div class="slideshow_slide_immagine" id="slideshow_'+idslide+'_immagine2">'+$jQSlide("#slideshow_"+idslide+"_immagine0").html()+'</div></div>';
				
				var secondaFoto='<div class="slideshow_slide" id="slideshow_'+idslide+'_slide3"><div class="slideshow_slide_immagine" id="slideshow_'+idslide+'_immagine3">'+$jQSlide("#slideshow_"+idslide+"_immagine1").html()+'</div></div>';
				
				$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").append(primaFoto); 
				$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").append(secondaFoto);
				
				$jQSlide("#slideshow_"+idslide+" .slideshow_slide").css({"width":larghezzaSlide+"px"});
				
				$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").css({"width":(larghezzaSlide*4)+"px"});
		
				$jQSlide("#slideshow_"+idslide+"_numfoto").val(4);
				}
					
			//in questo modo creo un insieme di 3 immagini last:first:second che servirà per lo spostamento indietro
			$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").prepend($jQSlide("#slideshow_"+idslide+" .slideshow_spostamento .slideshow_slide:last")); 
			$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").css({ marginLeft: "-="+larghezzaSlide+"px"});


			
		
			eval("myVar" + idslide + "= setTimeout(function () { SlideShow(idslide,'avanti',tempo); }, tempo);");
		
		
			$jQSlide("#slideshow_"+idslide+" .slideshow_sposta_avanti").click(function(event) {
				SlideShow (idslide,'avanti',tempo); 
			});
			
			$jQSlide("#slideshow_"+idslide+" .slideshow_sposta_indietro").click(function(event) {
				SlideShow (idslide,'indietro',tempo); 
			});
			}
		
	});
			
});

function SlideShow (idslide,verso,tempo) 
	{
	//non so per quale motivo il clearTimeout non va
	//allora ho annullato direttamente la variabile e così funziona
	clearTimeout(eval("myVar"+idslide));
	eval("myVar"+idslide + "= '';");
	
	
	//se c'è una animazione in corso non si fa niente
	if(!$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").is(':animated'))
		{		
				
		var larghezza=$jQSlide("#slideshow_"+idslide).width();
		
		var verso2=verso;
		
		if(verso2=='')
			{
			verso2='avanti';
			}
			
		if(verso2=='avanti')
			{								
			$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").animate({ marginLeft: "-="+larghezza+"px"}, 1500, function()
				{
				$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").append($jQSlide("#slideshow_"+idslide+" .slideshow_spostamento .slideshow_slide:first")); 
				
				$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").css({ marginLeft: "+="+larghezza+"px"});
				});
			}
		else
			{					
			$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").animate({ marginLeft: "+="+larghezza+"px"}, 1500, function()
				{
				$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").prepend($jQSlide("#slideshow_"+idslide+" .slideshow_spostamento .slideshow_slide:last")); 
				
				$jQSlide("#slideshow_"+idslide+" .slideshow_spostamento").css({ marginLeft: "-="+larghezza+"px"});
				});	
			}
		}

	eval("myVar" + idslide + "= setTimeout(function () { SlideShow(idslide,'avanti',tempo); }, tempo);");
	}
