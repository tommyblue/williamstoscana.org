// array_ext_foto
var array_ext_foto=new Array(); 
array_ext_foto[0]="jpg";       
array_ext_foto[1]="jpeg";
array_ext_foto[2]="gif";
array_ext_foto[3]="png";
array_ext_foto[4]="jpe";

// array_ext_foto2
var array_ext_foto2=new Array(); 
array_ext_foto2[0]="jpg";       
array_ext_foto2[1]="jpeg";
array_ext_foto2[2]="gif";
array_ext_foto2[3]="png";
array_ext_foto2[4]="jpe";
array_ext_foto2[5]="swf";


// array_ext_file
var array_ext_file=new Array();
array_ext_file[0]="pdf";       
array_ext_file[1]="doc";
array_ext_file[2]="docx";
array_ext_file[3]="rtf";
array_ext_file[4]="xls";
array_ext_file[5]="xlsx";       
array_ext_file[6]="pps";
array_ext_file[7]="ppsx";
array_ext_file[8]="ppt";
array_ext_file[9]="pptx";
array_ext_file[10]="zip";
array_ext_file[11]="rar";
array_ext_file[12]="mp3";
array_ext_file[13]="avi";
array_ext_file[14]="gif";
array_ext_file[15]="jpg";
array_ext_file[16]="jpeg";
array_ext_file[17]="jpe";
array_ext_file[18]="png";
array_ext_file[19]="bmp";
array_ext_file[20]="3gp";
array_ext_file[21]="odt";
array_ext_file[22]="ods";
array_ext_file[23]="odp";
array_ext_file[24]="odg";
array_ext_file[25]="epub";
array_ext_file[26]="mobi";
array_ext_file[27]="p7m";
array_ext_file[28]="xml";
array_ext_file[29]="csv";
array_ext_file[30]="swf";
array_ext_file[31]="mp4";


// array_ext_video
var array_ext_video=new Array(); 
array_ext_video[0]="mpg";       
array_ext_video[1]="wmv";
array_ext_video[2]="avi";
array_ext_video[3]="flv";

//serve per dare un limite di inserimento caratteri nelle aree di testo
  
 function MaxText(objTxarea, max) 
	{
    if(objTxarea.value.length <= max)
		{
		document.getElementById('contatore').value = objTxarea.value.length;
		}
	else
		{
		return false;
		}
  	}


//inserimento emoticons nella giusta posizione nell'area di testo
function InsertEmoticons(emoticons,formName,fieldName)
	{	
	var emoticons = ' ' + emoticons + ' ';	
	//var thefield = eval(formName+"."+fieldName+";");
	var thefield = document.getElementById(fieldName);

	//IE7 IE6 IE5 OPERA
	if(document.all)
		{
		//var thefield = modulo.testo;
		thefield.focus();
		sel = document.selection.createRange();
		sel.text = emoticons;
		}
	//FIREFOX
	else if ( thefield.selectionStart || thefield.selectionStart == '0' )
		{
		var startPos = thefield.selectionStart;
		var endPos = thefield.selectionEnd;
		thefield.value = thefield.value.substring(0, startPos) + emoticons + thefield.value.substring(endPos, thefield.value.length);
		}
	//ALTRI
	else
		{
		thefield.value += emoticons;
		}
	thefield.focus();
	}

function addslashes(str) 
	{
	str=str.replace(/\\/g,'\\\\');
	str=str.replace(/\'/g,'\\\'');
	str=str.replace(/\"/g,'\\"');
	str=str.replace(/\0/g,'\\0');
	
	return str;
	}

function stripslashes(str) 
	{
	str=str.replace(/\\'/g,'\'');
	str=str.replace(/\\"/g,'"');
	str=str.replace(/\\0/g,'\0');
	str=str.replace(/\\\\/g,'\\');
	
	return str;
	}


function createReCaptchaV2(element_id)
	{ 
	var container='';
	
	if( document.getElementById )
		{ // this is the way the standards work
		if(document.getElementById(element_id))
			{
			container = document.getElementById(element_id);	
			}
		}
	else if( document.all )
		{// this is the way old msie versions work
		if(document.all[element_id])
			{
			container = document.all[element_id];
			}
		}
	else if( document.layers )
		{// this is the way nn4 works
		if(document.layers[element_id])
			{
			container = document.layers[element_id];
			}
		}				

  	if(container.innerHTML=='')
  		{	
		var recaptcha = grecaptcha.render(element_id, {
	          'sitekey' : '6Ld4KUAUAAAAAA4wMQVk0tyu7iBsYW21InFamGwI'
	        });	
       	}

	}








/*per il prezzo della ricerca immobili*/

// formatta automaticamente il prezzo durante l'inserimento
function prezzoCheckFormat(valore,event,blurOnCheck,accettaDec, decimali)
	{ 
		
	if (!valore || !valore.value)
		{
		return false;
		}
		
	if (typeof decimali == "undefined")
		{
		decimali = 2;
		}
		
	if (typeof accettaDec == "undefined")
		{
		accettaDec = false;
		decimali = 0;
		}
		

    var ev = event ? event : window.event;

    var prezzo = valore.value.replace(/\./g,'');
    
	var iLength_init = valore.value.length;

	if (!prezzo)
		{
		valore.value = "";
		return false;
		}

	var PosCursore;
	if (ev)
		{
		PosCursore = getPosCursore(valore);
		}
		
	var length = prezzo.length;

    var prezzo_old = prezzo;

    prezzo = "";
	alreadyAddedDecSep = false;
    for (var i=0;i<length;i++)
    	{
        if ( isNumeric(prezzo_old.charAt(i)))
        	{
			if (prezzo_old.charAt(i)==",")
				{
				if(!accettaDec || alreadyAddedDecSep)
					continue;
				alreadyAddedDecSep = true;
				}
            prezzo = prezzo + "" + prezzo_old.charAt(i);
        	}
        else
        	{
            if (i < PosCursore)
            	{
                PosCursore--;
               	}
        	}
   		}
   	
	var decimal = "";
	var hasDecimal = prezzo.search(/,/);
	if (hasDecimal > 0)
		{
		var aPrezzo = prezzo.split(",");
		
		if (2 == aPrezzo.length)
			{
			prezzo = aPrezzo[0];
			decimal = aPrezzo[1];
			
			if(decimal.length>decimali)
				{
				decimal=decimal.substring(0, decimali );
				}
			}
		}

    length = prezzo.length;
    var newPrice = new Array();
    var newPriceIdx = 0;
    var digitCounter = 1;
	for (var i=length;i>=1;i--)
		{
		newPrice[newPriceIdx++] = prezzo.charAt(i-1);
		
		if (((i-1 % 3) != 0) && ((digitCounter % 3) == 0))
			{
			digitCounter = 1;
			newPrice[newPriceIdx++] = ".";
			}
		else
			{
			digitCounter++;
			}
		}

	var output = "";
	for (var i=newPrice.length-1;i>=0;i--)
		{
		output+=newPrice[i];
		}

	if (hasDecimal > 0)
		 output+=","+decimal;

	valore.value = output;
	var iLength_post = valore.value.length;

	if (iLength_post > iLength_init)
		PosCursore++;

	if (ev)
		setPosCursore(valore,PosCursore);

		return true;
	}


function getPosCursore(oField) {

  // Initialize
  var iPosCursore = 0;

  // IE Support
  if (document.selection) {

    // Set focus on the element
    oField.focus ();

    // To get cursor position, get empty selection range
    var oSel = document.selection.createRange ();

    // Move selection start to 0 position
    oSel.moveStart ('character', -oField.value.length);

    // The caret position is selection length
    iPosCursore = oSel.text.length;
  }

  // Firefox support
  else if (oField.selectionStart || oField.selectionStart == '0')
    iPosCursore = oField.selectionStart;

  // Return results
  return (iPosCursore);
}

function setPosCursore(fieldOrId,pos){

    var oField = (typeof fieldOrId == "string" || fieldOrId instanceof String) ? document.getElementById(fieldOrId) : fieldOrId;

    if(!oField){
        return false;
    }else if(oField.createTextRange){
        var textRange = oField.createTextRange();
        textRange.collapse(true);
        textRange.moveEnd('character',pos);
        textRange.moveStart('character',pos);
        textRange.select();


        return true;
    }else if(oField.setSelectionRange){

        oField.setSelectionRange(pos,pos);
        return true;
    }

    return false;
}



function isNumeric(valore)

{
   if (typeof valore == "undefined" || valore == "")
	return false;

   var ValidChars = "0123456789,.-";
   var IsNumber=true;
   var Char;


   for (var i = 0; i < valore.length && IsNumber == true; i++)
      {
      Char = valore.charAt(i);
      if (ValidChars.indexOf(Char) == -1)
         {
         IsNumber = false;
         }
      }
   return IsNumber;

}


var StilePopupDiretta = "top=10, left=10, width=850, height=600, status=no, menubar=no, toolbar=no, scrollbars=yes";
 
function PopupDiretta(url,name) 
	{
  	window.open(url, name, StilePopupDiretta,false);
	}



function aggiungiLink(){
  var linkURL = prompt("Inserisci il link da aggiungere:", "");
  AttivaFrame("editArea").execCommand("createLink", false, linkURL);
}    

function aggiungiLinkMailto(){
  var linkURL = prompt("Inserisci l'indirizzo email da utilizzare:", "");
  AttivaFrame("editArea").execCommand("createLink", false, "mailto:"+linkURL);
} 

function applicaComando(cmdStr,valCmdStr){
  AttivaFrame('editArea').execCommand(cmdStr,false,valCmdStr);
} 

// JavaScript Document
function applicaTag(tag, form)
	{	
	if(tag=='bold')
		{
		var tag_start="<strong>";
		var tag_end="</strong>";
		}
	else if(tag=='italic')
		{
		var tag_start="<em>";
		var tag_end="</em>";
		}
	else if(tag=='underline')
		{
		var tag_start="<u>";
		var tag_end="</u>";
		}
	else if(tag=='strike')
		{
		var tag_start="<strike>";
		var tag_end="</strike>";
		}
	else if(tag=='right')
		{
		var tag_start='<div align="right">';
		var tag_end="</div>";
		}
	else if(tag=='left')
		{
		var tag_start='<div align="left">';
		var tag_end="</div>";
		}
	else if(tag=='center')
		{
		var tag_start='<div align="center">';
		var tag_end="</div>";
		}
	else if(tag=='justify')
		{
		var tag_start='<div align="justify">';
		var tag_end="</div>";
		}
		
	var text
	
	if(tag=='elenco')
		{
		if(document.all)
			{
			//IE7 IE6 IE5 OPERA
			text = (document.all) ? document.selection.createRange().text : document.getSelection();
			if (text=="")
				return false
			else 
				{
				text=elabora(text);
				if (document.all)
					document.selection.createRange().text=text
				return true
				}
			}
		//FIREFOX
		else if(window.getSelection)
			{
			var rv = "";
			var i,x;
			
			if(form)
				{
				var modulo=eval('document.'+form);
				}
			else
				{
				var modulo=eval('document.modulo');
				}
			
			for (i = 0; x = modulo.elements[i]; i++)
				{
				if(x.type=='textarea' || x.type=='text')
					{
					rv = x.value.substr(x.selectionStart, x.selectionEnd - x.selectionStart)	
					if(rv!="")
						{
						rv=elabora(rv)
						x.value=x.value.substr(0,x.selectionStart) + rv +x.value.substring(x.selectionEnd,x.value.length)
						}
					}
				}	
			}
		}
	else
		{	
		//IE7 IE6 IE5 OPERA
		if(document.all)
			{
			text = (document.all) ? document.selection.createRange().text : document.getSelection();
			if (text=="")
				{
				return false
				}
			else 
				{
				text=tag_start + text + tag_end
				if (document.all)
					document.selection.createRange().text=text
				return true
				}
			}
		//FIREFOX
		else if(window.getSelection)
			{
			var rv = "";
			var i,x;
			
			if(form)
				{
				var modulo=eval('document.'+form);
				}
			else
				{
				var modulo=eval('document.modulo');
				}
			
			for (i = 0; x = modulo.elements[i]; i++)
				{
				if(x.type=='textarea' || x.type=='text')
					{
					rv = x.value.substr(x.selectionStart, x.selectionEnd - x.selectionStart);	
					if(rv!="")
						{						
						x.value=x.value.substr(0,x.selectionStart) + tag_start + rv + tag_end +x.value.substring(x.selectionEnd,x.value.length);
						}
					}
				}
			}
		}
	}
	

function applicaTagColore(tag, form, value)
	{	
	if(tag=='colore')
		{
		if (typeof String.prototype.startsWith != 'function') {
		  // see below for better implementation!
		  String.prototype.startsWith = function (str){
			return this.indexOf(str) === 0;
		  };
		}
		
		if(value.startsWith("#"))
			{
				var tag_start='<span style="color: '+value+';">';
			}
		else
			{
				var tag_start='<span style="color: #'+value+';">';
			}
		
		var tag_end="</span>";
		}
	
		
	var text;
		
	//IE7 IE6 IE5 OPERA
	if(document.all)
		{
		text = (document.all) ? document.selection.createRange().text : document.getSelection();
		if (text=="")
			{
			return false
			}
		else 
			{
			text=tag_start + text + tag_end
			if (document.all)
				document.selection.createRange().text=text
			return true
			}
		}
	//FIREFOX
	else if(window.getSelection)
		{
		var rv = "";
		var i,x;
		
		if(form)
			{
			var modulo=eval('document.'+form);
			}
		else
			{
			var modulo=eval('document.modulo');
			}
		
		for (i = 0; x = modulo.elements[i]; i++)
			{
			if(x.type=='textarea' || x.type=='text')
				{
				rv = x.value.substr(x.selectionStart, x.selectionEnd - x.selectionStart)	
				if(rv!="")
					{						
					x.value=x.value.substr(0,x.selectionStart) + tag_start + rv + tag_end +x.value.substring(x.selectionEnd,x.value.length)
					}
				}
			}
		}
	}
	
	
function applicaTagColoreEvidenziatore(tag, form, value)
	{	
	if(tag=='colore')
		{
		if (typeof String.prototype.startsWith != 'function') {
		  // see below for better implementation!
		  String.prototype.startsWith = function (str){
			return this.indexOf(str) === 0;
		  };
		}
		
		if(value.startsWith("#"))
			{
				var tag_start='<span style="background-color: '+value+';">';
			}
		else
			{
				var tag_start='<span style="background-color: #'+value+';">';
			}
		
		var tag_end="</span>";
		}
	
		
	var text;
		
	//IE7 IE6 IE5 OPERA
	if(document.all)
		{
		text = (document.all) ? document.selection.createRange().text : document.getSelection();
		if (text=="")
			{
			return false
			}
		else 
			{
			text=tag_start + text + tag_end
			if (document.all)
				document.selection.createRange().text=text
			return true
			}
		}
	//FIREFOX
	else if(window.getSelection)
		{
		var rv = "";
		var i,x;
		
		if(form)
			{
			var modulo=eval('document.'+form);
			}
		else
			{
			var modulo=eval('document.modulo');
			}
		
		for (i = 0; x = modulo.elements[i]; i++)
			{
			if(x.type=='textarea' || x.type=='text')
				{
				rv = x.value.substr(x.selectionStart, x.selectionEnd - x.selectionStart)	
				if(rv!="")
					{						
					x.value=x.value.substr(0,x.selectionStart) + tag_start + rv + tag_end +x.value.substring(x.selectionEnd,x.value.length)
					}
				}
			}
		}
	}
	
function applicaTagConValore(tag, form, value)
	{	
	if(tag=='font')
		{
		var tag_start='<span style="font-family: '+value+';">';
		var tag_end='</span>';
		}
	else if(tag=='size')
		{
		var tag_start='<span style="font-size: '+value+'px;">';
		var tag_end='</span>';
		}
		
	var text;
	
	//IE7 IE6 IE5 OPERA
	if(document.all)
		{
		text = (document.all) ? document.selection.createRange().text : document.getSelection();
		if (text=="")
			{
			return false
			}
		else 
			{
			text=tag_start + text + tag_end
			if (document.all)
				document.selection.createRange().text=text
			return true
			}
		}
	//FIREFOX
	else if(window.getSelection)
		{
		var rv = "";
		var i,x;
		
		if(form)
			{
			var modulo=eval('document.'+form);
			}
		else
			{
			var modulo=eval('document.modulo');
			}
		
		for (i = 0; x = modulo.elements[i]; i++)
			{
			if(x.type=='textarea' || x.type=='text')
				{
				rv = x.value.substr(x.selectionStart, x.selectionEnd - x.selectionStart)	
				if(rv!="")
					{						
					x.value=x.value.substr(0,x.selectionStart) + tag_start + rv + tag_end +x.value.substring(x.selectionEnd,x.value.length)
					}
				}
			}
		}
	}
	
	
function array_search(needle, haystack, argStrict) {
  //  discuss at: http://phpjs.org/functions/array_search/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Brett Zamir (http://brett-zamir.me)
  // bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //  depends on: array
  //        test: skip
  //   example 1: array_search('zonneveld', {firstname: 'kevin', middle: 'van', surname: 'zonneveld'});
  //   returns 1: 'surname'
  //   example 2: ini_set('phpjs.return_phpjs_arrays', 'on');
  //   example 2: var ordered_arr = array({3:'value'}, {2:'value'}, {'a':'value'}, {'b':'value'});
  //   example 2: var key = array_search(/val/g, ordered_arr); // or var key = ordered_arr.search(/val/g);
  //   returns 2: '3'

  var strict = !! argStrict,
    key = '';

  if (haystack && typeof haystack === 'object' && haystack.change_key_case) { // Duck-type check for our own array()-created PHPJS_Array
    return haystack.search(needle, argStrict);
  }
  if (typeof needle === 'object' && needle.exec) { // Duck-type for RegExp
    if (!strict) { // Let's consider case sensitive searches as strict
      var flags = 'i' + (needle.global ? 'g' : '') +
        (needle.multiline ? 'm' : '') +
        (needle.sticky ? 'y' : ''); // sticky is FF only
      needle = new RegExp(needle.source, flags);
    }
    for (key in haystack) {
      if (needle.test(haystack[key])) {
        return key;
      }
    }
    return false;
  }

  for (key in haystack) {
    if ((strict && haystack[key] === needle) || (!strict && haystack[key] == needle)) {
      return key;
    }
  }

  return false;
}

function AttivaFrame(iFrameID){
  if (document.getElementById(iFrameID).contentDocument){  
	  //Mozilla
	return document.getElementById(iFrameID).contentDocument;
  } else {
	  //Internet Explorer
	return document.frames[iFrameID].document;
   }
 }
 
function converti_ajax(stringa)
	{
	var str=String(stringa);
	
	str=str.replace(/%C2%B4/g,"'"); //converte il segno Â´
	
	return str;
	}
 
function count(mixed_var, mode) {
  //  discuss at: http://phpjs.org/functions/count/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  //    input by: Waldo Malqui Silva
  //    input by: merabi
  // bugfixed by: Soren Hansen
  // bugfixed by: Olivier Louvignes (http://mg-crea.com/)
  // improved by: Brett Zamir (http://brett-zamir.me)
  //   example 1: count([[0,0],[0,-4]], 'COUNT_RECURSIVE');
  //   returns 1: 6
  //   example 2: count({'one' : [1,2,3,4,5]}, 'COUNT_RECURSIVE');
  //   returns 2: 6

  var key, cnt = 0;

  if (mixed_var === null || typeof mixed_var === 'undefined') {
    return 0;
  } else if (mixed_var.constructor !== Array && mixed_var.constructor !== Object) {
    return 1;
  }

  if (mode === 'COUNT_RECURSIVE') {
    mode = 1;
  }
  if (mode != 1) {
    mode = 0;
  }

  for (key in mixed_var) {
    if (mixed_var.hasOwnProperty(key)) {
      cnt++;
      if (mode == 1 && mixed_var[key] && (mixed_var[key].constructor === Array || mixed_var[key].constructor ===
        Object)) {
        cnt += this.count(mixed_var[key], 1);
      }
    }
  }

  return cnt;
}
	
function implode(glue, pieces) {
  //  discuss at: http://phpjs.org/functions/implode/
  // original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // improved by: Waldo Malqui Silva
  // improved by: Itsacon (http://www.itsacon.net/)
  // bugfixed by: Brett Zamir (http://brett-zamir.me)
  //   example 1: implode(' ', ['Kevin', 'van', 'Zonneveld']);
  //   returns 1: 'Kevin van Zonneveld'
  //   example 2: implode(' ', {first:'Kevin', last: 'van Zonneveld'});
  //   returns 2: 'Kevin van Zonneveld'

  var i = '',
    retVal = '',
    tGlue = '';
  if (arguments.length === 1) {
    pieces = glue;
    glue = '';
  }
  if (typeof pieces === 'object') {
    if (Object.prototype.toString.call(pieces) === '[object Array]') {
      return pieces.join(glue);
    }
    for (i in pieces) {
      retVal += tGlue + pieces[i];
      tGlue = glue;
    }
    return retVal;
  }
  return pieces;
}
	
//elenco puntato
function elabora(testo) 
	{
	var s=new String(testo);
	s=s.replace("<ul>","");
 	s=s.replace("</ul>","");
	pippo = "<li>";
	pluto = "";
	while (s.indexOf(pippo)>-1) 
		{
		PosReplace = s.indexOf(pippo);
		s = "" + (s.substring(0, PosReplace) + "" + s.substring((PosReplace + pippo.length), s.length));
		} 
	pippo = "</li>";
	pluto = "";
	while (s.indexOf(pippo)>-1) 
		{
		PosReplace = s.indexOf(pippo);
		s = "" + (s.substring(0, PosReplace) + "" + s.substring((PosReplace + pippo.length), s.length));
		} 

	var out = new String;
	var nomi = new Array();
	nomi = s.split("\n");
	out += "<ul>";
	for (i=0;i<nomi.length;i++) 
		{
		pippo = "\n";
		pluto = "";
		while (nomi[i].indexOf(pippo)>-1) 
			{
			PosReplace = nomi[i].indexOf(pippo);
			nomi[i] = "" + (nomi[i].substring(0, PosReplace) + "" + nomi[i].substring((PosReplace + pippo.length), nomi[i].length));
			} 
	
		out += "<li>" + nomi[i] + "</li>";
		}
	
	out += "</ul>";
	return out;
	}
	
function end (arr) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   bugfixed by: Legaev Andrey
  // +    revised by: J A R
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   restored by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +    revised by: Brett Zamir (http://brett-zamir.me)
  // %        note 1: Uses global: php_js to store the array pointer
  // *     example 1: end({0: 'Kevin', 1: 'van', 2: 'Zonneveld'});
  // *     returns 1: 'Zonneveld'
  // *     example 2: end(['Kevin', 'van', 'Zonneveld']);
  // *     returns 2: 'Zonneveld'
  // BEGIN REDUNDANT
  this.php_js = this.php_js || {};
  this.php_js.pointers = this.php_js.pointers || [];
  var indexOf = function (value) {
    for (var i = 0, length = this.length; i < length; i++) {
      if (this[i] === value) {
        return i;
      }
    }
    return -1;
  };
  // END REDUNDANT
  var pointers = this.php_js.pointers;
  if (!pointers.indexOf) {
    pointers.indexOf = indexOf;
  }
  if (pointers.indexOf(arr) === -1) {
    pointers.push(arr, 0);
  }
  var arrpos = pointers.indexOf(arr);
  if (Object.prototype.toString.call(arr) !== '[object Array]') {
    var ct = 0;
    for (var k in arr) {
      ct++;
      var val = arr[k];
    }
    if (ct === 0) {
      return false; // Empty
    }
    pointers[arrpos + 1] = ct - 1;
    return val;
  }
  if (arr.length === 0) {
    return false;
  }
  pointers[arrpos + 1] = arr.length - 1;
  return arr[pointers[arrpos + 1]];
}

function fetchAscii(obj)
	{	
	var convertedObj = '';
	
	for(i = 0; i < obj.length; i++)
		{
		var asciiChar = '&#' + obj.charCodeAt(i) + ';';	
		convertedObj += asciiChar;		
		} 
	
	return convertedObj;	
	}
	
function in_array (needle, haystack, argStrict) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: vlado houba
  // +   input by: Billy
  // +   bugfixed by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: in_array('van', ['Kevin', 'van', 'Zonneveld']);
  // *     returns 1: true
  // *     example 2: in_array('vlado', {0: 'Kevin', vlado: 'van', 1: 'Zonneveld'});
  // *     returns 2: false
  // *     example 3: in_array(1, ['1', '2', '3']);
  // *     returns 3: true
  // *     example 3: in_array(1, ['1', '2', '3'], false);
  // *     returns 3: true
  // *     example 4: in_array(1, ['1', '2', '3'], true);
  // *     returns 4: false
  var key = '',
    strict = !! argStrict;

  if (strict) {
    for (key in haystack) {
      if (haystack[key] === needle) {
        return true;
      }
    }
  } else {
    for (key in haystack) {
      if (haystack[key] == needle) {
        return true;
      }
    }
  }

  return false;
}

function LimitText (campo, contatore, maxchar) 
	{
	if (campo.value.length > maxchar) 
		{
		campo.value = campo.value.substring(0, maxchar);
		}
	else 
		{
		contatore.value = maxchar - campo.value.length;
		}
	}
	
function load(nomeiframe, nometextarea){
  AttivaFrame(nomeiframe).designMode = "On";
  /*if(document.getElementById(nometextarea).value != "")
  	{
	if (document.getElementById(nomeiframe).contentDocument)
		{	 	
		AttivaFrame(nomeiframe).body.innerHTML = document.getElementById(nometextarea).value;
		}
	else
		{
		document.getElementById(nomeiframe).contentWindow.document.body.innerHTML = "pippo";
		}
	}*/
 document.getElementById(nometextarea).style.display = "none";
 document.getElementById(nometextarea).style.visibility = "hidden";

}

function MM_openBrWindow(theURL,winName,features) { //v2.0
  window.open(theURL,winName,features);
}

function mostraDiv(nomediv) {
	document.getElementById(nomediv).style.visibility = "visible";
	document.getElementById(nomediv).style.display = "block";
}

function mostraElenco(elenco) {
	document.getElementById(elenco).style.visibility = "visible";
	document.getElementById(elenco).style.display = "block";
	
	document.getElementById("chiudi_"+elenco).style.visibility = "visible";
	document.getElementById("chiudi_"+elenco).style.display = "inline";
}

function nascondiDiv(nomediv) {
	document.getElementById(nomediv).style.visibility = "hidden";
	document.getElementById(nomediv).style.display = "none";
}

function nascondiElenco(elenco) {
	document.getElementById(elenco).style.visibility = "hidden";
	document.getElementById(elenco).style.display = "none";
	
	document.getElementById("chiudi_"+elenco).style.visibility = "hidden";
	document.getElementById("chiudi_"+elenco).style.display = "none";
}

function parseHtmlEnteties(str) {
    return str.replace(/&#([0-9]{1,3});/gi, function(match, numStr) {
        var num = parseInt(numStr, 10); // read num as normal number
        return String.fromCharCode(num);
    });
}

function pulisciCodice(nomeiframe,nometextarea){
	   var contenuto = AttivaFrame(nomeiframe).body.innerHTML;
		contenuto = contenuto.replace(/<br\>/gi,"<br>");
		contenuto = contenuto.replace(/(<p\>)(.*)(<\/p\>)/gi,"$2<br><br>");
		contenuto = contenuto.replace(/<\a/gi,"<a");
		contenuto = contenuto.replace(/<\/a\>/gi,"</a>");
		contenuto = contenuto.replace(/<\div\>/gi,"");
		contenuto = contenuto.replace(/<\/div\>/gi,"<br><br>");
		//contenuto = contenuto.replace(/(<strong\>)(.*)(<\/strong\>)/gi,"<span style=\"font-weight: bold;\">$2</span>");
		contenuto = contenuto.replace(/(<ul\>)(.*)(<\/ul\>)/gi,"<ul>$2</ul>");
		contenuto = contenuto.replace(/(<li\>)(.*)(<\/li\>)/gi,"<li>$2</li>");
		//internet explorer	
        contenuto = contenuto.replace(/(<font )(color)(=)(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)(>)(.*)(<\/font\>)/gi,"<span style=\"$2:$4;\">$9</span>"); 
		contenuto = contenuto.replace(/(<p )(align)(=)([A-Za-z]*)(>)(.*)(<\/p\>)/gi,"$6<br><br>");
		contenuto = contenuto.replace(/(<em\>)(.*)(<\/em\>)/gi,"<span style=\"font-style: italic;\">$2</span>");
		
		// PULISCE COPIA E INCOLLA DA WORD
		
		contenuto = contenuto.replace(/<\?xml:[^>]*>/g, '');
	   	contenuto = contenuto.replace(/<\/?st1:[^>]*>/g,''); 
		contenuto = contenuto.replace(/<\meta[^>]*>/g, '');
		contenuto = contenuto.replace(/<\link[^>]*>/g, '');
		contenuto = contenuto.replace(/<\xml[^>]*>/g, '');
		contenuto = contenuto.replace(/<\w:[^>]*>/g, '');
		contenuto = contenuto.replace(/<\/w:[^>]*>/g, '');
		contenuto = contenuto.replace(/<\m:[^>]*>/g, '');
		contenuto = contenuto.replace(/<\/m:[^>]*>/g, '');
		contenuto = contenuto.replace(/<\style[^>]*>/g, '');
		contenuto = contenuto.replace(/<\/style[^>]*>/g, '');
		contenuto = contenuto.replace(/\style="text-align: [^>]*"/g, '');
		contenuto = contenuto.replace(/<\o:[^>]*>/g, '');
		contenuto = contenuto.replace(/<\/o:[^>]*>/g, '');
		
		// CORSIVO E GRASSETTO
		contenuto = contenuto.replace(/<\I[^>]*>/g, '<span style="font-style: italic;">');
		contenuto = contenuto.replace(/<\/I[^>]*>/g, '</span>');
		contenuto = contenuto.replace(/<\i[^>]*>/g, '<span style="font-style: italic;">');
		contenuto = contenuto.replace(/<\/i[^>]*>/g, '</span>');
		
		/*contenuto = contenuto.replace(/<\b[^>]*>/g, '<span style="font-weight: bold;">');
		contenuto = contenuto.replace(/<\/b[^>]*>/g, '</span>');
		contenuto = contenuto.replace(/<\B[^>]*>/g, '<span style="font-weight: bold;">');
		contenuto = contenuto.replace(/<\/B[^>]*>/g, '</span>');
		contenuto = contenuto.replace(/<\strong[^>]*>/g, '<span style="font-weight: bold;">');
		contenuto = contenuto.replace(/<\/strong[^>]*>/g, '</span>');
		contenuto = contenuto.replace(/<\STRONG[^>]*>/g, '<span style="font-weight: bold;">');
		contenuto = contenuto.replace(/<\/STRONG[^>]*>/g, '</span>');*/
		
		
		//opera
		contenuto = contenuto.replace(/(<font )(color)(=\")(#?([A-Fa-f0-9]){3}(([A-Fa-f0-9]){3})?)(\")(>)(.*)(<\/font\>)/gi,"<span style=\"$2:$4;\">$10</span>"); 
		contenuto = contenuto.replace(/(<div )(align)(=\")([A-Za-z]*)(\")(>)(.*)(<\/div\>)/gi,"$7<br><br>");		
		contenuto = contenuto.replace(/(<i\>)(.*)(<\/i\>)/gi,"<span style=\"font-style: italic;\">$2</span>");

		document.getElementById(nometextarea).value = contenuto;	
	 }
	 
function riconverti_json(stringa)
	{
	var str=String(stringa);
   
	str=str.replace(/-puntoevirgola-/g,";");
	//str=str.replace(/\n/g,aCapo);
	
	return str;
	}
	
	
function riconvertiInputTextJQ(stringa)
	{
	var str=String(stringa);
   
	str=str.replace(/</g,"&lt;");
	str=str.replace(/>/g,"gt;");
	str=str.replace(/\"/g,"&quot;");
	str=str.replace(/\'/g,"&apos;");
	str=str.replace(/\•/g,"&bull;");
	//str=addslashes(str);

	return str;
	}		
	
function strpos (haystack, needle, offset) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Onno Marsman
  // +   bugfixed by: Daniel Esteban
  // +   improved by: Brett Zamir (http://brett-zamir.me)
  // *     example 1: strpos('Kevin van Zonneveld', 'e', 5);
  // *     returns 1: 14
  var i = (haystack + '').indexOf(needle, (offset || 0));
  return i === -1 ? false : i;
}

function strtolower (str) {
  // http://kevin.vanzonneveld.net
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: Onno Marsman
  // *     example 1: strtolower('Kevin van Zonneveld');
  // *     returns 1: 'kevin van zonneveld'
  return (str + '').toLowerCase();
}
 
function trim (str, charlist) {
  // From: http://phpjs.org/functions
  // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +   improved by: mdsjack (http://www.mdsjack.bo.it)
  // +   improved by: Alexander Ermolaev (http://snippets.dzone.com/user/AlexanderErmolaev)
  // +      input by: Erkekjetter
  // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
  // +      input by: DxGx
  // +   improved by: Steven Levithan (http://blog.stevenlevithan.com)
  // +    tweaked by: Jack
  // +   bugfixed by: Onno Marsman
  // *     example 1: trim('    Kevin van Zonneveld    ');
  // *     returns 1: 'Kevin van Zonneveld'
  // *     example 2: trim('Hello World', 'Hdle');
  // *     returns 2: 'o Wor'
  // *     example 3: trim(16, 1);
  // *     returns 3: 6
  var whitespace, l = 0,
    i = 0;
  str += '';

  if (!charlist) {
    // default list
    whitespace = " \n\r\t\f\x0b\xa0\u2000\u2001\u2002\u2003\u2004\u2005\u2006\u2007\u2008\u2009\u200a\u200b\u2028\u2029\u3000";
  } else {
    // preg_quote custom list
    charlist += '';
    whitespace = charlist.replace(/([\[\]\(\)\.\?\/\*\{\}\+\$\^\:])/g, '$1');
  }

  l = str.length;
  for (i = 0; i < l; i++) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(i);
      break;
    }
  }

  l = str.length;
  for (i = l - 1; i >= 0; i--) {
    if (whitespace.indexOf(str.charAt(i)) === -1) {
      str = str.substring(0, i + 1);
      break;
    }
  }

  return whitespace.indexOf(str.charAt(0)) === -1 ? str : '';
}
 
 
function validateEmail(indirizzo_email) {
	var indirizzo_emailReg = /^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;
	if (!indirizzo_emailReg.test(indirizzo_email) || indirizzo_email=='') {
		return false;
	} else {
		return true;
	}
}

function vediCodice(){
	   var contenuto = AttivaFrame("editArea").body.innerHTML;
      document.getElementById("codice").innerHTML = contenuto.replace(/</g,"&lt;");
    }
 
 
 
 function ceil(value) {
  //  discuss at: http://phpjs.org/functions/ceil/
  // original by: Onno Marsman
  //   example 1: ceil(8723321.4);
  //   returns 1: 8723322

  return Math.ceil(value);
}
 
 
 
	
function SelezionaTutti(conta,form,cosa) 
	{

	for (var idx = 1; idx <=conta; idx++) 
		{
		eval("document."+form+"."+cosa+""+idx+".checked=true");
		}
	return true
	}

function DeselezionaTutti(conta,form,cosa) {

	for (var idx = 1; idx <=conta; idx++) 
		{
		eval("document."+form+"."+cosa+""+idx+".checked=false");
		}
	return true
	}
	
	
	

var $JQFunzioniPerTutti = jQuery.noConflict();

$JQFunzioniPerTutti(document).ready(function (){	
	
	var cache = [];
	$JQFunzioniPerTutti.preLoadImages = function() {
		var args_len = arguments.length;
		for (var i = args_len; i--;) {
		  var cacheImage = document.createElement('img');
		  cacheImage.src = arguments[i];
		  cache.push(cacheImage);
		}
	}
	$JQFunzioniPerTutti.preLoadImages("img/loading.gif");
	
	//tooltip
	if($JQFunzioniPerTutti('.tooltipText').length)
		{
		$JQFunzioniPerTutti('.tooltipText').hide();
			
		$JQFunzioniPerTutti('.tooltipInfo').mouseover(function(e) {
				
				var top = e.pageY;
				var left = e.pageX;
				
				var wWidth=$JQFunzioniPerTutti( window ).width();
				
				if((left+400)>wWidth)	
					{
					left=wWidth-400	
					}
				
				
				$JQFunzioniPerTutti(this).next('.tooltipText').css({				
					display: 'block',
					top: top +10,
					left: left-30				
			});
		});
		
		$JQFunzioniPerTutti('.tooltipInfo').mouseout(function(e) {
			$JQFunzioniPerTutti('.tooltipText').fadeOut("slow");
		});
	}
	
	
	
		
	
	if($JQFunzioniPerTutti(".input").length)
		{
		$JQFunzioniPerTutti("input").bind("focus blur", 
						{"background-color":"#FFFFCC"}, 
						function(event) {
							if(event.type=="focus")
								{
								$JQFunzioniPerTutti(this).css(event.data);
								}
							else
								{
								$JQFunzioniPerTutti(this).css({"background-color":""});
								}
						});
					
		$JQFunzioniPerTutti("input").bind("focus blur", 
						{"background-color":"#FFFFCC"}, 
						function(event) {
							if(event.type=="focus")
								{
								$JQFunzioniPerTutti(this).css(event.data);
								}
							else
								{
								$JQFunzioniPerTutti(this).css({"background-color":""});
								}
						});
		}
					
	
	
	// CERCA	
	if($JQFunzioniPerTutti(".windows_ModuloCerca").length)
		{
		if($JQFunzioniPerTutti.isFunction("draggable"))
			{
			$JQFunzioniPerTutti(".windows_ModuloCerca").draggable();
			}
			
		$JQFunzioniPerTutti("#cerca").click(function (e)
			{	
			ShowModuloCerca();
			});
			
			
		$JQFunzioniPerTutti("#FinestraChiudiModuloCerca").click(function (e)
			{
			HideModuloCerca();
			});	
		
		
		$JQFunzioniPerTutti("#ModuloCercaForm").submit(function ()
			{
			$JQFunzioniPerTutti("#load_ModuloCercaForm").html('<img src="img/loading.gif">');
			});
		}
	
});

// CERCA
function ShowModuloCerca(modal)
	{
	$JQFunzioniPerTutti(".windows_ModuloCerca_sfondo").show();
	$JQFunzioniPerTutti(".windows_ModuloCerca").fadeIn(300);

	$JQFunzioniPerTutti(".windows_ModuloCerca_sfondo").click(function (e)
		{
		HideModuloCerca();
		});
	}

function HideModuloCerca()
	{
	$JQFunzioniPerTutti(".windows_ModuloCerca_sfondo").hide();
	$JQFunzioniPerTutti(".windows_ModuloCerca").fadeOut(300);
	} 


	
function CountInsertChar (idform, idcampo, idcontatore) 
	{
	$JQFunzioniPerTutti("#"+idform+" #"+idcontatore).html($JQFunzioniPerTutti("#"+idform+" #"+idcampo).val().length);
	}




function SelezionaTuttiRadio(conta,form,cosa,valore,conta2) 
	{
	if(conta2=='' || conta2==0)
		{
		for (var idx = 0; idx <conta; idx++) 
			{
			$JQFunzioniPerTutti("#"+form+" input:radio[id='"+cosa+idx+valore+"']").attr('checked','checked');
			}
		}
	else
		{
		for (var idx = 0; idx <conta; idx++) 
			{			
			for (var idx2 = 0; idx2 <conta2; idx2++) 
				{
				$JQFunzioniPerTutti("#"+form+" input:radio[id='"+cosa+idx+'_'+idx2+valore+"']").attr('checked','checked');
				}
			}
		}
	return true;
	}

function DeselezionaTuttiRadio(conta,form,cosa,valore,conta2) 
	{
	if(conta2=='' || conta2==0)
		{
		for (var idx = 0; idx <conta; idx++) 
			{
			$JQFunzioniPerTutti("#"+form+" input:radio[id='"+cosa+idx+valore+"']").attr('checked',false);
			}
		}
	else
		{
		for (var idx = 0; idx <conta; idx++) 
			{			
			for (var idx2 = 0; idx2 <conta2; idx2++) 
				{
				$JQFunzioniPerTutti("#"+form+" input:radio[id='"+cosa+idx+'_'+idx2+valore+"']").attr('checked',false);
				}
			}
		}
	return true;
	}

 
function number_format (number, decimals, decPoint, thousandsSep) 
	{	
	number = (number + '').replace(/[^0-9+\-Ee.]/g, '');
	var n = !isFinite(+number) ? 0 : +number;
	var prec = !isFinite(+decimals) ? 0 : Math.abs(decimals);
	var sep = (typeof thousandsSep === 'undefined') ? ',' : thousandsSep;
	var dec = (typeof decPoint === 'undefined') ? '.' : decPoint;
	var s = '';
	var toFixedFix = function (n, prec) 
		{
    	var k = Math.pow(10, prec);
    	return '' + (Math.round(n * k) / k).toFixed(prec);
  		}
  // @todo: for IE parseFloat(0.55).toFixed(0) = 0;
	s = (prec ? toFixedFix(n, prec) : '' + Math.round(n)).split('.');
	
	if (s[0].length > 3) 
		{
    	s[0] = s[0].replace(/\B(?=(?:\d{3})+(?!\d))/g, sep);
  		}

	if ((s[1] || '').length < prec) 
		{
		s[1] = s[1] || '';
		s[1] += new Array(prec - s[1].length + 1).join('0');
  		}
	return s.join(dec);
	}
 
 
 /**
 * PHP-like print_r() equivalent for JavaScript Object
 *
 * @author Faisalman fyzlman@gmail.com
 * @license http://www.opensource.org/licenses/mit-license.php
 * @link http://gist.github.com/879208
 */
var print_r = function (obj, t) {

    // define tab spacing
    var tab = t || '';

    // check if it's array
    var isArr = Object.prototype.toString.call(obj) === '[object Array]';
	
    // use {} for object, [] for array
    var str = isArr ? ('Array\n' + tab + '[\n') : ('Object\n' + tab + '{\n');

    // walk through it's properties
    for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
            var val1 = obj[prop];
            var val2 = '';
            var type = Object.prototype.toString.call(val1);
            switch (type) {
                
                // recursive if object/array
                case '[object Array]':
                case '[object Object]':
                    val2 = print_r(val1, (tab + '\t'));
                    break;
					
                case '[object String]':
                    val2 = '\'' + val1 + '\'';
                    break;
					
                default:
                    val2 = val1;
            }
            str += tab + '\t' + prop + ' => ' + val2 + ',\n';
        }
    }
	
    // remove extra comma for last property
    str = str.substring(0, str.length - 2) + '\n' + tab;
	
    return isArr ? (str + ']') : (str + '}');
};
 
 








//funzione generica da mettere su tutti piano piano
function checkPerTutti(modulo)
	{
	var errori=0;
	var identificatore='';
	
	//obbligatorieta
	$JQFunzioniPerTutti('.campo_obbligatorio').each(function() {
		
			if($JQFunzioniPerTutti(this).is(':disabled')==false)
				{
				if(strpos ($JQFunzioniPerTutti(this).attr("class"), 'formato_file', 0)===false && strpos ($JQFunzioniPerTutti(this).attr("class"), 'formato_filefoto', 0)===false)	//solo per la modifica perché in modifica se un campo file è obbligatorio in realtà dovrebbe esere gia presente, altrimenti anche se nel db c'è già, fa comq il controllo e non mi fa salvare
					{
					var valore=$JQFunzioniPerTutti.trim($JQFunzioniPerTutti(this).val());		
					var identificatore=$JQFunzioniPerTutti(this).attr("id");
				
					//se il campo obbligatorio &egrave; di tipo radio devo controllare le specifiche
					if(strpos ($JQFunzioniPerTutti(this).attr("class"), 'formato_radio', 0)!==false)
						{
						var trovato=0;
						$JQFunzioniPerTutti("input[name='"+identificatore+"']").each(function() 
							{
							if($JQFunzioniPerTutti(this).attr('checked'))
								{
								trovato++;	
								}
							});
									
						if(trovato==0)
							{
							errori++;
							
							$JQFunzioniPerTutti("#label"+identificatore).addClass("txt-errore");					
							}
						else
							{			
							$JQFunzioniPerTutti("#label"+identificatore).removeClass("txt-errore");		
							}
						}
	                else if(strpos ($JQFunzioniPerTutti(this).attr("class"), 'formato_checkbox', 0)!==false)
	                    {
	                    var trovato=0;
	                    var arraySplit=identificatore.split('__');
	                    $JQFunzioniPerTutti("input[name^='"+arraySplit[0]+"']").each(function() 
	                        {
	                        if($JQFunzioniPerTutti(this).attr('checked'))
	                            {
	                            trovato++;  
	                            }
	                        });
	                                
	                    if(trovato==0)
	                        {
	                        errori++;
	                        
	                        $JQFunzioniPerTutti("#label"+arraySplit[0]).addClass("txt-errore");                    
	                        }
	                    else
	                        {           
	                        $JQFunzioniPerTutti("#label"+arraySplit[0]).removeClass("txt-errore");     
	                        }
	                    }
					else
						{
						if(valore=='')
							{
							errori++;
							
							$JQFunzioniPerTutti(this).addClass("field-errore");	
							$JQFunzioniPerTutti("#label"+identificatore).addClass("txt-errore");
							
                            if($JQFunzioniPerTutti("#textEditor"+identificatore).length)
                              {
                              $JQFunzioniPerTutti("#textEditor"+identificatore).addClass("field-errore");
                              }                 					
							}
						else
							{			
							$JQFunzioniPerTutti(this).removeClass("field-errore");	
							$JQFunzioniPerTutti("#label"+identificatore).removeClass("txt-errore");
									
                            if($JQFunzioniPerTutti("#textEditor"+identificatore).length)
                              {
                              $JQFunzioniPerTutti("#textEditor"+identificatore).removeClass("field-errore");
                              }                 
							}
						}
					}
				}			
		});

	
		
	//data
	$JQFunzioniPerTutti(modulo+" .formato_data").each(function() {
			
			if($JQFunzioniPerTutti(this).is(':disabled')==false)
				{
				var valore=$JQFunzioniPerTutti.trim($JQFunzioniPerTutti(this).val());		
				
				if(valore!='')
					{
					var identificatore=$JQFunzioniPerTutti(this).attr("id");
					
					var dtRegex = new RegExp(/\b\d{1,2}[\/]\d{1,2}[\/]\d{4}\b/);			
		
					if(!dtRegex.test(valore))
						{
						errori++;
						
						$JQFunzioniPerTutti(this).addClass("field-errore");	
						$JQFunzioniPerTutti(modulo+" #label"+identificatore).addClass("txt-errore");					
						}
					else
						{	
						$JQFunzioniPerTutti(this).removeClass("field-errore");	
						$JQFunzioniPerTutti(modulo+" #label"+identificatore).removeClass("txt-errore");		
						}
					}
				}
		});
	
		
	//numdec con punto come separatore decimale
	// formato_numdec2sigifica 2 decimali
	// formato_numdec3 signifcia 3 decimali
	// formato_numdec6 signifcia 6 decimali
	$JQFunzioniPerTutti(modulo+' input[class*="formato_numdec"]').each(function() {
			
			if($JQFunzioniPerTutti(this).is(':disabled')==false)
				{
				var identificatore=$JQFunzioniPerTutti(this).attr("id");
				
				var id2Tmp=$JQFunzioniPerTutti(this).attr("class").split('formato_numdec');				
                var id2=id2Tmp[1].split(' ');
                var nDec=id2[0]; //numero decimali
 
				var valore=$JQFunzioniPerTutti.trim($JQFunzioniPerTutti(this).val());	
							
				if(valore!='')
					{	
					var expreg=eval('/^[0-9]+\\.?[0-9]{0,'+nDec+'}$/g');	
					var dtRegex = new RegExp(expreg);			
		
					if(!dtRegex.test(valore))
						{						
						errori++;
						
						$JQFunzioniPerTutti(this).addClass("field-errore");	
						$JQFunzioniPerTutti(modulo+" #label"+identificatore).addClass("txt-errore");
						}
					else
						{			
						$JQFunzioniPerTutti(this).removeClass("field-errore");	
						$JQFunzioniPerTutti(modulo+" #label"+identificatore).removeClass("txt-errore");	
						}
					}
				}			
		});
		
		
	
		
	//int
	$JQFunzioniPerTutti(modulo+" .formato_int").each(function() {
			
			if($JQFunzioniPerTutti(this).is(':disabled')==false)
				{
				var valore=$JQFunzioniPerTutti.trim($JQFunzioniPerTutti(this).val());
				
				if(valore!='')
					{		
					var identificatore=$JQFunzioniPerTutti(this).attr("id");
					
					var dtRegex = new RegExp(/^\d+$/);	
					
					if(!dtRegex.test(valore))
						{
						errori++;
						
						$JQFunzioniPerTutti(this).addClass("field-errore");	
						$JQFunzioniPerTutti(modulo+" #label"+identificatore).addClass("txt-errore");					
						}
					else
						{	
						$JQFunzioniPerTutti(this).removeClass("field-errore");	
						$JQFunzioniPerTutti(modulo+" #label"+identificatore).removeClass("txt-errore");		
						}
					}
				}
		});
	
	
		
	if(errori==0)
		{
		$JQFunzioniPerTutti(modulo+" input:submit").removeAttr('disabled');
		$JQFunzioniPerTutti(modulo+" #checkClient").html('');
		}
	else
		{
		$JQFunzioniPerTutti(modulo+" input:submit").attr('disabled', 'disabled');
		$JQFunzioniPerTutti(modulo+" #checkClient").html('Attenzione, non tutti i campi obbligatori sono stati compilati o non sono stati compilati correttamente');
		}
	}
	
	
function getViewportOffset($e) {
    var $window = $JQFunzioniPerTutti(window), scrollLeft = $window.scrollLeft(), scrollTop = $window.scrollTop(), offset = $e.offset(), rect1 = {
        x1 : scrollLeft,
        y1 : scrollTop,
        x2 : scrollLeft + $window.width(),
        y2 : scrollTop + $window.height()
    }, rect2 = {
        x1 : offset.left,
        y1 : offset.top,
        x2 : offset.left + $e.width(),
        y2 : offset.top + $e.height()
    };
    return {
        left : offset.left - scrollLeft,
        top : offset.top - scrollTop,
        insideViewport : rect1.x1 < rect2.x2 && rect1.x2 > rect2.x1 && rect1.y1 < rect2.y2 && rect1.y2 > rect2.y1
    };
}

	

function SelectText(element) {
    var doc = document
        , text = doc.getElementById(element)
        , range, selection
    ;    
    if (doc.body.createTextRange) {
        range = document.body.createTextRange();
        range.moveToElementText(text);
        range.select();
    } else if (window.getSelection) {
        selection = window.getSelection();        
        range = document.createRange();
        range.selectNodeContents(text);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}


