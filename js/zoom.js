var $JQzoom = jQuery.noConflict();
$JQzoom(document).ready(function(){
var native_width = 0;
var native_height = 0;



$JQzoom("#magnify_fotodazoomare").mousemove(function(e){

var nomeid = $JQzoom(this).attr("data-nomeid");
if(!native_width && !native_height)
	{
	var image_object = new Image;
	image_object.src = $JQzoom("#"+nomeid).attr("src");
	native_width = image_object.width;
	native_height = image_object.height;
	show_width = $JQzoom("#"+nomeid).width();
	// calcolo la percentuale di visualizzazione
	percentuale = (100*show_width) / native_width;
	}
//else
//	{
	if(percentuale >= 70)
		{
		mostra_zoom = 'no';
		}
	else
		{
		mostra_zoom = 'si';	
		}
	
	if(mostra_zoom == 'no')
		{
		$JQzoom(this).find("#zoom_fotodazoomare").append($JQzoom(this).find($JQzoom("#fotodazoomare")));	
		
		$JQzoom(this).find("#zoom_fotodazoomare").find("#fotodazoomare").removeAttr("id");	
		
		$JQzoom(this).find("#zoom_fotodazoomare").removeAttr("id");
		}
	else if(mostra_zoom == 'si')
		{
		// calcolo la posizione della div "lente"
		//var magnify_offset = $JQzoom("#zoom_"+nomeid).offset();
		var magnify_offset = $JQzoom(this).offset();
		
		
		// calcolo la posizione del mouse in relazione alla posizione della div "lente"
		var mx = e.pageX - magnify_offset.left;
		var my = e.pageY - magnify_offset.top;
		
		// se sono nella div "lente" faccio vedere la lente...
		if(mx < $JQzoom(this).width() && my < $JQzoom(this).height() && mx > 0 && my > 0)
			{
			$JQzoom("#zoom_fotodazoomare").fadeIn(100);
			}
		// ...altrimenti la nascondo
		else
			{
			$JQzoom("#zoom_fotodazoomare").fadeOut(100);
			}
		
		// se la div "lente" � visibile
		//if($JQzoom("#zoom_"+nomeid).css("display") == "block")
		if($JQzoom("#zoom_fotodazoomare").is(":visible"))
			{
			var rx = Math.round(mx / $JQzoom("#"+nomeid).width() * native_width - $JQzoom("#zoom_fotodazoomare").width() / 2) * -1;
			var ry = Math.round(my / $JQzoom("#"+nomeid).height() * native_height - $JQzoom("#zoom_fotodazoomare").height() / 2) * -1;
			var bgp = rx+"px "+ry+"px";
			
			var px = mx - $JQzoom("#zoom_fotodazoomare").width() / 2;
			var py = my - $JQzoom("#zoom_fotodazoomare").height() / 2;
			
			$JQzoom("#zoom_fotodazoomare").css({left:px+"px",top:py+"px",backgroundPosition:bgp});
			}
		}
	//}

$JQzoom("#zoom_fotodazoomare").click(function(){$JQzoom("#zoom_fotodazoomare").fadeOut(100);});

});


}
);
