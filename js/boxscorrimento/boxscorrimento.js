var $jQBoxScorrimento = jQuery.noConflict();

$jQBoxScorrimento("div[id^='scorrimento']").each(function() {
	
	var valoretemporaneo=$jQBoxScorrimento(this).attr("id").split("scorrimento");
	
	/*alert(valoretemporaneo[1]);*/
	
	var array_id=valoretemporaneo[1].split("_");
	var idbox=array_id[0];
	var temposcorrimento=array_id[1];
	var tipobox=$jQBoxScorrimento(this).attr("class"); // se class=verticale il box e' a piu' colonne
	
	/*alert("IDBOX: "+idbox+" - tempo: "+temposcorrimento);*/
	
	eval("var myVar" + idbox + ";");
});


$jQBoxScorrimento(window).load(function() {
	
	
	$jQBoxScorrimento("div[id^='scorrimento']").each(function() {
		
		var valoretemporaneo=$jQBoxScorrimento(this).attr("id").split("scorrimento");
		/*alert(valoretemporaneo[1]);*/
		
		var array_id=valoretemporaneo[1].split("_");
		
		var idbox=array_id[0];
		var temposcorrimento=array_id[1];
		
		/*alert("IDBOX: "+idbox+" - tempo: "+temposcorrimento);*/
		
		/*var array_id=$jQBoxScorrimento(this).attr("id").split("scorrimento");
		var idbox=array_id[1];	*/
		
		var tipobox='';// se class=verticale il box e' a piu' colonne
		if($jQBoxScorrimento(this).attr("class"))
			{
			tipobox=$jQBoxScorrimento(this).attr("class");
			} 
		
		
		
		// SE BOX A COLONNE
		if(tipobox=='verticale')
			{
			if($jQBoxScorrimento("#box"+idbox+" .tab03-riga").length > 1)
				{
				var miaaltezza = 0;
			    var htab=0;
			
			    var wrighe=0;
			    
			    
			    var wBox=$jQBoxScorrimento("#box"+idbox).outerWidth(true);
			    $jQBoxScorrimento("#box"+idbox).css({"width": wBox+"px"});   
			    
			    //hide tab03-segnaposto
			    $jQBoxScorrimento("#box"+idbox+" .tab03-riga .tab03-segnaposto").remove();
			    
			   	var screenWidth=$jQBoxScorrimento(window).width();

				var wtab01=0;
				var diff2=0;

				//se mobile
			   	if( screenWidth <800 )
			   		{
				    var wriga=$jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab03-riga .tab03").outerWidth(true);
				   
			   		$jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab03-riga").each(function(){ 
				     	  		
					    $jQBoxScorrimento(this).find(".tab03").each(function(){ 
				    
						    if($jQBoxScorrimento(this).index()>0)
						    	{
						    	$jQBoxScorrimento(this).css({"visibility":"initial", "display":"initial"});
						    	}
					     						    	
					    	htab=$jQBoxScorrimento(this).outerHeight(true);          
				            if(htab>miaaltezza)
				                {
				                miaaltezza = htab;
				                }
					    						    
						    if($jQBoxScorrimento(this).index()>0)
						    	{
						    	$jQBoxScorrimento(this).css({"visibility":"hidden", "display":"none"});
						    	}
					    	});
					    	
				       $jQBoxScorrimento(this).css({"width": (wriga * $jQBoxScorrimento(this).find(".tab03").length ) +"px"});  
		
				       wrighe+=$jQBoxScorrimento(this).outerWidth(true);
					   });
				    
					$jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab03-riga").css({"height": miaaltezza+"px"});
			   		}
			   	// se pc
			   	else
			   		{
				    $jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab03-riga:first-child").each(function(){ 
				     	
						var wriga=0;				     	
				     	var nTab=0;
				     		 		     		
					    $jQBoxScorrimento(this).find(".tab03").each(function(){ 

							wtab01=$jQBoxScorrimento(this).width();
							nTab++;												     	
				            wriga+=$jQBoxScorrimento(this).outerWidth(true)+1;      
				            wrighe+=$jQBoxScorrimento(this).outerWidth(true)+1;     				                 
				            });
					     
						var diff=wriga/nTab;
						diff2=diff-wtab01;      
			            
			            });
			         
			        wrighe*=$jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab03-riga").length;
			       
			            
				    $jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab03-riga").each(function(){
				     					
			    		//rendo momentaneamente tutti i tab-riga visibili per poter recuperare le misure
			    		//dal secondo in poi perchè il pirmo è già visibile	     
					    if($jQBoxScorrimento(this).index()>0)
					    	{
					    	$jQBoxScorrimento(this).css({"visibility":"initial", "position":"static"});
					    	}
				     	
				     	//associo al tab-riga una larghezza definita
				     	$jQBoxScorrimento(this).css({"width": wriga+"px"});
				     	
				     	//calcolo l'altezza maggiore fra tutti i tab-riga
			            htab=$jQBoxScorrimento(this).outerHeight(true);          
			            if(htab>miaaltezza)
			                {
			                miaaltezza = htab;
			                }			       
			             
			    		//rendo tutti i tab-riga, ad accezione del primo non visibili per poter recuperare le misure					    
					    if($jQBoxScorrimento(this).index()>0)
					    	{
					    	$jQBoxScorrimento(this).css({"visibility":"hidden", "position":"absolute"});
					    	}
			            });
			    
				         
				    var paddingVerticale=$jQBoxScorrimento("#box"+idbox+" .verticale").css("padding-top");
				    miaaltezza+=parseInt(paddingVerticale);
			        

				    wrighe+=20; //aggiungo 20px per sicurezza
				    }
			    
			    $jQBoxScorrimento("#box"+idbox+" .verticale").append("<div class=\"cancellatore-scorrimento-row\"></div>");
			    
			
			    if($jQBoxScorrimento("#box"+idbox+" .tab01.tab-nudo").length>0) 
			        {         
			    	$jQBoxScorrimento("#box"+idbox+" .tab01").css({"height":miaaltezza+"px", "overflow":"hidden"});
			        }
			    else
			        {
				    $jQBoxScorrimento("#box"+idbox+" .tab01-corpo-cx").css({"height":miaaltezza+"px", "overflow":"hidden"});
			        }
			    
			    
			    
			    //eliminare table + width verticale	
			    $jQBoxScorrimento("#box"+idbox+" .verticale").css("cssText", "width: "+wrighe+"px !important; display: block !important; table-layout: inherit !important;");
			   
			    
			    
			    //eliminare row + float row
			    $jQBoxScorrimento("#box"+idbox+" .tab03-riga").css({"float":"left"});
			    $jQBoxScorrimento("#box"+idbox+" .tab03-riga").css({"display":"block !important"});
			    
			    
			    
			    //eliminare cell + float cell
			    // se mobile
			    if( screenWidth <800 )
			   		{
			   		if($jQBoxScorrimento("#box"+idbox+" .tab03").attr('class')=='tab03 tab-nudo') // nudo
			   			{
			   			$jQBoxScorrimento("#box"+idbox+" .tab03").css("cssText",  "float: left;  display: block !important; width: "+wriga+"px !important; margin: 0px; margin-right: 5px; margin-left: 5px; visibility: initial;");	
			   			}
			   		else
			   			{
			   			$jQBoxScorrimento("#box"+idbox+" .tab03").css("cssText",  "float: left;  display: block !important; width: "+(wriga-10)+"px !important; margin: 0px; margin-right: 5px; margin-left: 5px; visibility: initial;");
			   			}
			   		}
			    // se pc
			   	else
			   		{			 	    
			   		$jQBoxScorrimento("#box"+idbox+" .tab03").css("cssText",  "float: left;  display: block !important; width: "+wtab01+"px !important; margin: 0px; margin-right: "+diff2+"px; box-sizing: border-box;");
			   		}		
			    
			    
			    //clear row
			    $jQBoxScorrimento("#box"+idbox+" .cancellatore-scorrimento-row").css({"clear":"left"});
			    
			    
			    
			    //copio subito il primo insieme di tab03 (tab03-riga) e lo metto in fondo perchè se il secondo tab03-riga avesse meno degli elementi del primo risultarebbe vuoto lo scorrimento. poi sposto il cancellatore sotto
				$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga").first().clone().appendTo($jQBoxScorrimento("#box"+idbox+" .verticale"));
				$jQBoxScorrimento("#box"+idbox+" .verticale .cancellatore-scorrimento-row").appendTo($jQBoxScorrimento("#box"+idbox+" .verticale"));
				
				
				$jQBoxScorrimento("div[id^='scorrimento'] .tab03-riga").each(function() { 

					if($jQBoxScorrimento(this).index()>0)
						{
						$jQBoxScorrimento(this).css({"visibility":"visible", "position":"static"});
						}		
				});
				
				$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga").css({"visibility":"visible"});	
				$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga:last").css({"visibility":"hidden"});	
				
			    /*eval("myVar" + idbox + "= setTimeout(function () { SlideBoxColonna(idbox,1); }, 5000);");*/
				eval("myVar" + idbox + "= setTimeout(function () { SlideBoxColonna(idbox,1," + temposcorrimento + "); }, " + temposcorrimento + ");");
				/*eval("myVar" + idbox + "= setTimeout(function () { SlideBoxColonna(idbox,1," + temposcorrimento + "); }, 5000);");*/
			   }
			}
		// SE BOX ORIZZONTALE
		else
			{			        
		    //width box
		    var widthBox=parseInt($jQBoxScorrimento("#box"+idbox).width());
		    $jQBoxScorrimento("#box"+idbox).css({"width" : widthBox+"px"});
				
				
			if($jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento+" .tab02").length > 1)
				{
				var miaaltezza = 0;
			    var htab=0;
			
			    var wrighe=0;   
			    
			    $jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab02").each(function(){  
			            	               
					    if($jQBoxScorrimento(this).index()>0)
					    	{
					    	$jQBoxScorrimento(this).css({"visibility":"initial", "display":"initial"});
					    	}
			            
					    
			            var wtab=parseInt($jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento+" .tab02:first-child").width()); 
			           
			            var marginL=parseInt($jQBoxScorrimento(this).css("margin-left").replace("px",""));
			            var marginR=parseInt($jQBoxScorrimento(this).css("margin-right").replace("px",""));
			            
			            
			            
			            if(marginL==0 && marginR!=0)
			                {
			                $jQBoxScorrimento(this).css({"float":"left", "width":wtab+"px", "margin-left":marginR+"px", "margin-right":marginR+"px"});
			                }
			            else if(marginL!=0 && marginR==0)
			                {
			                $jQBoxScorrimento(this).css({"float":"left", "width":wtab+"px", "margin-left":marginL+"px", "margin-right":marginL+"px"});
			                }
			            else if(marginL==0 && marginR==0)
			                {
			                $jQBoxScorrimento(this).css({"float":"left", "width":wtab+"px", "margin-left":"5px", "margin-right":"5px"});
			                }
			            else if(marginL!=0 && marginR!=0)
			                {
			                $jQBoxScorrimento(this).css({"float":"left", "width":wtab+"px", "margin-left":marginL+"px", "margin-right":marginR+"px"});
			                }
			                
			            
			            
			            htab=$jQBoxScorrimento(this).outerHeight(true);      
			            $jQBoxScorrimento(this).css({"height":htab+"px"});
			                
			            if(htab>miaaltezza)
			                {
			                miaaltezza = htab;
			                }
			            
			            var wriga=parseInt($jQBoxScorrimento(this).outerWidth(true));
			        
					   
					   if($jQBoxScorrimento(this).index()>0)
					    	{
					    	$jQBoxScorrimento(this).css({"visibility":"hidden", "display":"none"});
					    	}
					    	
			            wrighe+=wriga;
			            });
		    
		            
			    $jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento+" .tab02").last().add( "<div class=\"cancellatore-scorrimento\"></div>" );
			     
			    if($jQBoxScorrimento("#box"+idbox+" .testo-tabella-calendario").length>0)
			    	{
			    	var heightCal=$jQBoxScorrimento("#box"+idbox+" .testo-tabella-calendario").outerHeight(true); 
			    	
			    	miaaltezza=parseInt(miaaltezza)+parseInt(heightCal);
			    	}
			     
			     
			    
			    if($jQBoxScorrimento("#box"+idbox+" .tab01.tab-nudo").length>0) 
			        {    
			    	$jQBoxScorrimento("#box"+idbox+" .tab01").css({"height":miaaltezza+"px", "overflow":"hidden"});
			        }
			    else
			        {
			        $jQBoxScorrimento("#box"+idbox+" .tab01-corpo-cx").css({"height":miaaltezza+"px", "overflow":"hidden"});
			        }
			          
			        
			    //width scorrimento
			    $jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento).css("cssText", "width: "+wrighe+"px !important;");
			    
			    
			    //clear scorrimento
			    $jQBoxScorrimento("#box"+idbox+" .cancellatore-scorrimento").css({"clear":"left"});
			    
			      
				$jQBoxScorrimento("#scorrimento"+idbox+"_"+temposcorrimento+" .tab02").each(function() {  
					if($jQBoxScorrimento(this).index()>0)
						{
						$jQBoxScorrimento(this).css({"visibility":"visible", "display":"block"});
						}	
				});
				
			    /*eval("myVar" + idbox + "= setTimeout(function () { SlideBoxOrizzontale(idbox); }, 5000);");*/
			    eval("myVar" + idbox + "= setTimeout(function () { SlideBoxOrizzontale(idbox," + temposcorrimento + "); }, " + temposcorrimento + ");");
			    /*eval("myVar" + idbox + "= setTimeout(function () { SlideBoxOrizzontale(idbox," + temposcorrimento + "); }, 5000);");*/
			    }
			}

		
	});
		
});



function SlideBoxColonna(idbox,quantiPassati,temposcorrimento) 
    {   
    clearTimeout("myVar"+idbox);
    
    //se c'e' una animazione in corso non si fa niente
    if(!$jQBoxScorrimento("#box"+idbox+" .verticale").is(':animated'))
        {
        //se non c'e' verso non si fa niente
        if(idbox=='')
            {
            return false;   
            }
         
        var spostamento=$jQBoxScorrimento("#box"+idbox+" .tab03").outerWidth(true);

        if($jQBoxScorrimento("#box"+idbox+" .verticale").css("margin-left")=="0px")
            {
            var paddingContenitore=$jQBoxScorrimento("#box"+idbox+" .verticale").parent().css("padding-left").replace("px","");
            spostamento+=parseInt(paddingContenitore);
            }
           
        $jQBoxScorrimento("#box"+idbox+" .verticale").animate({ marginLeft: "-="+spostamento+"px"}, 1500, function()
			{	
			var widthRigaFirst=$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga").first().outerWidth(true);
		
			if(quantiPassati==$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga:first .tab03").length)
				{
				$jQBoxScorrimento("#box"+idbox+" .verticale").css({ marginLeft: "+="+widthRigaFirst+"px"});
				$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga:first").remove();
				
				quantiPassati=0;
				
				
				$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga").first().clone().appendTo($jQBoxScorrimento("#box"+idbox+" .verticale"));
				$jQBoxScorrimento("#box"+idbox+" .verticale .cancellatore-scorrimento-row").appendTo($jQBoxScorrimento("#box"+idbox+" .verticale"));
				
				$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga").css({"visibility":"visible"});	
				$jQBoxScorrimento("#box"+idbox+" .verticale .tab03-riga:last").css({"visibility":"hidden"});	
				}
			
			quantiPassati++;
			});
        }
        
    var variabile=eval("myVar"+idbox);
    /*variabile = setTimeout(function () { SlideBoxColonna(idbox,quantiPassati); }, 5000);*/
    variabile = setTimeout(function () { SlideBoxColonna(idbox,quantiPassati,temposcorrimento); }, temposcorrimento);
    /*variabile = setTimeout(function () { SlideBoxColonna(idbox,quantiPassati,temposcorrimento); }, 5000);*/
    }
    




function SlideBoxOrizzontale(idbox,temposcorrimento) 
    {       
    clearTimeout("myVar"+idbox);
    

    //se c'e' una animazione in corso non si fa niente
    if(!$jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento).is(':animated'))
        {
        //se non c'e' verso non si fa niente
        if(idbox=='')
            {
            return false;   
            }
           
       
        var spostamento=$jQBoxScorrimento("#box"+idbox+" .tab02").outerWidth(true);
        
        if($jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento).css("margin-left")=="0px")
            {
            var paddingContenitore=$jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento).parent().css("padding-left").replace("px","");
            spostamento+=parseInt(paddingContenitore);
            }
        
       $jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento).animate({ marginLeft: "-="+spostamento+"px"}, 1500, function()
			{
			$jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento).append($jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento+" .tab02:first")); 
			
			$jQBoxScorrimento("#box"+idbox+" #scorrimento"+idbox+"_"+temposcorrimento).css({ marginLeft: "+="+spostamento+"px"});
			});
        }
        
    var variabile=eval("myVar"+idbox);
    /*variabile = setTimeout(function () { SlideBoxOrizzontale(idbox); }, 5000);*/
    variabile = setTimeout(function () { SlideBoxOrizzontale(idbox,temposcorrimento); }, temposcorrimento);
    /*variabile = setTimeout(function () { SlideBoxOrizzontale(idbox,temposcorrimento); }, 5000);*/
    }
    
