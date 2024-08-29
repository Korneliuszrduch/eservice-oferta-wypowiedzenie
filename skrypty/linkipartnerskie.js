

	$( document ).ready(function() 

{
		var $_GET = {};

		document.location.search.replace(/\??(?:([^=]+)=([^&]*)&?)/g, function ()
	{
			function decode(s) 
		{
				return decodeURIComponent(s.split("+").join(" "));
		}

			$_GET[decode(arguments[1])] = decode(arguments[2]);
	});

		if($_GET['a'] != null)
		{
			var partner = $_GET['a'];
			$.cookie('lr_partner', ''+ partner +'', { expires: 30, path: '/' });
                      
		}
		    else
               		 {
			var partner = ''+ $.cookie('lr_partner') +'';
                       
			}

		$('#lr_partner').val(''+ partner +'');
                $('#lr_partner1').val(''+ partner +'');
                $('#lr_partner2').val(''+ partner +'');
                $('#lr_partner3').val(''+ partner +''); 
                $('#lr_partner4').val(''+ partner +'');
                $('#lr_partner5').val(''+ partner +'');
                $('#lr_partner6').val(''+ partner +'');
                $('#lr_partner7').val(''+ partner +'');
                $('#lr_partner8').val(''+ partner +'');
                $('#lr_partner9').val(''+ partner +'');
                $('#lr_partner10').val(''+ partner +'');
                $('#lr_partner11').val(''+ partner +''); 
                $('#lr_partner12').val(''+ partner +'');
                $('#lr_partner13').val(''+ partner +'');
                $('#lr_partner14').val(''+ partner +'');
                $('#lr_partner15').val(''+ partner +'');
                $('#lr_partner16').val(''+ partner +'');
                $('#lr_partner17').val(''+ partner +'');
                $('#lr_partner18').val(''+ partner +'');
                $('#lr_partner19').val(''+ partner +'');
                $('#lr_partner99').val(''+ partner +'');
                $('#lr_partner100').val(''+ partner +'');
                $('#lr_partner20').val(''+ partner +'');

                $('#lr_partnerterminal').val(''+ partner +'');
                $('#lr_partnerterminal1').val(''+ partner +'');
                $('#lr_partnerterminal2').val(''+ partner +'');
                $('#lr_partnerterminal3').val(''+ partner +'');
                $('#lr_partnerterminal4').val(''+ partner +'');
                $('#lr_partnerterminal5').val(''+ partner +'');
                $('#lr_partnerterminal6').val(''+ partner +''); 
                $('#lr_partnerterminal7').val(''+ partner +'');
                $('#lr_partnerterminal8').val(''+ partner +'');
                $('#lr_partnerterminal9').val(''+ partner +''); 

                $('#lr_partnerelektryk').val(''+ partner +'');
                $('#lr_partnerelektryk1').val(''+ partner +'');
                $('#lr_partnerelektryk2').val(''+ partner +'');
                $('#lr_partnerelektryk3').val(''+ partner +'');
                $('#lr_partnerelektryk4').val(''+ partner +'');
                $('#lr_partnerelektryk5').val(''+ partner +'');
                $('#lr_partnerelektryk6').val(''+ partner +''); 
                

		  //alert(''+ partner +'');
	});
