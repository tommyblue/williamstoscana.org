// INVIA AD UN AMICO  
	

var $jQInviaAmico = jQuery.noConflict();
$jQInviaAmico(function () {

	InizializzazioneInviaAmico();
	
});
	
	
function InizializzazioneInviaAmico()
	{
	$jQInviaAmico(".pul_invia_amico").unbind('click');
	$jQInviaAmico("#ModuloInviaAmico").unbind('submit');
	
	
	$jQInviaAmico(".pul_invia_amico").css({"cursor":"pointer"});
	$jQInviaAmico(".inviaAmico_num_invii").css({"display":"none"});	
	$jQInviaAmico("div[id^=\'errore_\']").css({"display":"none"});

	$jQInviaAmico(".pul_invia_amico").click(function (e) {
	
		if($jQInviaAmico("#ModuloInviaAmico #ReCaptchaInviaAmico").length)
			{	
			createReCaptchaV2("ReCaptchaInviaAmico");
			grecaptcha.reset();
			}
			
		var modulo=$jQInviaAmico(this).attr("data-modulo");
		var specifica=$jQInviaAmico(this).attr("data-specifica");
			
		$jQInviaAmico("#ModuloInviaAmico #modulo").val(modulo);
		$jQInviaAmico("#ModuloInviaAmico #specifica").val(specifica);
		
		ShowInviaAmico();	
	});
	
	
	$jQInviaAmico("#FinestraChiudiInviaAmico").click(function (e){
		HideInviaAmico();
	});	
			
			
	//funzione di salvataggio
	$jQInviaAmico("#ModuloInviaAmico").submit(function(e){	
				
		e.preventDefault();
		var form = $jQInviaAmico(this);
		var post_url = form.attr("action");
		var post_data = form.serialize();
        
		$jQInviaAmico.ajax({
			type: "POST",
			url: post_url, 
			data: post_data,
			success: function(msg) {				
				$jQInviaAmico("#esito_invia_amico").html(msg);
				
				if(!$jQInviaAmico("#errore-invia-amico").length)
					{
					HideInviaAmico();
					
					$jQInviaAmico("#esito_invia_amico").html("");
					
					$jQInviaAmico("#ModuloInviaAmico #nome_mittente").val("");
					$jQInviaAmico("#ModuloInviaAmico #email_mittente").val("");
					$jQInviaAmico("#ModuloInviaAmico #nome_destinatario").val("");
					$jQInviaAmico("#ModuloInviaAmico #email_destinatario").val("");
					$jQInviaAmico("#ModuloInviaAmico #messaggio").val("");
					$jQInviaAmico("#ModuloInviaAmico input[id^='accettazione']").attr("checked", false);
					}
				else 
					{
					check_n_invii();
					}
	

				if($jQInviaAmico("#ModuloInviaAmico #ReCaptchaInviaAmico").length)
					{	
					grecaptcha.reset();
					}
			}
		});
	});
	
		
}
	
	
	
function ShowInviaAmico(modal)
	{
	$jQInviaAmico(".windows_InviaAmico_sfondo").show();
	$jQInviaAmico(".windows_InviaAmico").fadeIn(300);
	
	check_n_invii();

	$jQInviaAmico(".windows_InviaAmico_sfondo").click(function (e)
		{
		HideInviaAmico();
		});
	}

function HideInviaAmico()
	{
	$jQInviaAmico(".windows_InviaAmico_sfondo").hide();
	$jQInviaAmico(".windows_InviaAmico").fadeOut(300);
	}
		
		
function check_n_invii() 
	{	
	var post_url = "js/inviaamico/inviaamico.php";
	var post_data = "azione=n_invii";
	
	$jQInviaAmico.ajax({
		type: "POST",
		url: post_url, 
		data: post_data,
		success: function(msg) {				
			
			if(msg>=10)
				{
				$jQInviaAmico(".inviaAmico_num_invii").css({"display":"inline"});	
				$jQInviaAmico(".inviaAmico_form").css({"display":"none"});
				}
		}
	});
	}