function frm_valid()  {
  var flag_val="";
  var f_name= document.getElementById("f_name").value;
  var l_name= document.getElementById("l_name").value;
  var can_email=document.getElementById("e_mail").value;
  var mob_num=document.getElementById("mob_num").value;
  var city=document.getElementById("city").value;
  var address=document.getElementById("addr").value;
  var check= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  var url=document.getElementById("url").value;
  var check_url= /^(www\.){0,1}[a-zA-Z0-9\.\-]+\.[a-zA-Z]{2,5}[\.]{0,1}/;
  var male=document.getElementById("gen_m").value;
  var female=document.getElementById("gen_f").value;
  var qual="";
  
  $("#qualification").each(function()
{
   qual=qual + $(this).val()
});


			


	(f_name=="" || f_name==null) ? (document.getElementById("err_fname").innerHTML="Enter First Name",flag_val=1) : 
					(document.getElementById("err_fname").innerHTML="");



			


	(l_name=="" || l_name==null) ? (document.getElementById("err_lname").innerHTML="Enter last Name",flag_val=1) : 
					(document.getElementById("err_lname").innerHTML="");

			




	(can_email=="" || can_email==null) ? (document.getElementById("err_email").innerHTML="Enter the Email", flag_val=1) :
		((can_email.match(check)) ? (document.getElementById("err_email").innerHTML="") : 
		(document.getElementById("err_email").innerHTML="invalid email", flag_val=1));

			




	(mob_num=="" || mob_num==null) ? (document.getElementById("err_mob").innerHTML="enter no",flag_val=1) : 
		((mob_num>999999999&&mob_num<10000000000) ? (document.getElementById("err_mob").innerHTML="") : 
		(document.getElementById("err_mob").innerHTML="Enter the valid Number",flag_val=1));

			




	(qual=="" || qual==null) ? (document.getElementById("err_qual").innerHTML="Select your qualification",flag_val=1) :
		(document.getElementById("err_qual").innerHTML="");

			




	(city=="" || city==null) ? (document.getElementById("err_city").innerHTML="Enter the city",flag_val=1) : 
		(document.getElementById("err_city").innerHTML="");

			





	(address == "" || address == null) ? (document.getElementById("err_add").innerHTML = "Enter the address",flag_val = 1) : 
		(document.getElementById("err_add").innerHTML = "");

		



	
	(url == "" || url == null) ? (document.getElementById("err_url").innerHTML = "Enter the url",flag_val = 1) : 
		((url.match(check_url)) ? (document.getElementById("err_url").innerHTML = "") : 
			(document.getElementById("err_url").innerHTML = "invalid URL",flag_val = 1));

			



	
	(male != "") ? (document.getElementById("err_gen").innerHTML = "") : 
		((female != "") ? (document.getElementById("err_gen").innerHTML = "") : 
			(document.getElementById("err_gen").innerHTML = "select your gender", flag_val = 1))

	
	
			flag_val != "" ? (document.getElementById("err_all").innerHTML = "Enter Proper value!") : 
				(document.getElementById("check").style.display = "block",
				document.getElementById("err_all").innerHTML = "",
				document.getElementById("wb").innerHTML = "    " + url,
				document.getElementById("ad").innerHTML = "    " + address,
				document.getElementById("ct").innerHTML = "    " + city,
				document.getElementById("ql").innerHTML = "    " + qual,
				document.getElementById("mb").innerHTML = "    " + mob_num,
				document.getElementById("em").innerHTML = "    " + can_email,
				document.getElementById("fn").innerHTML = "    " + f_name,
				document.getElementById("ln").innerHTML = "    " + l_name,
				(male == "") ? (document.getElementById("gn").innerHTML = "    " + female) : 
				     (document.getElementById("gn").innerHTML = "    " + male));

}
 	function frm_reset()
		{
		document.getElementById("check").style.display = "none";
		document.getElementById("table").reset();
		document.getElementById("err_gen").innerHTML="";
		document.getElementById("err_fname").innerHTML="";
		document.getElementById("err_lname").innerHTML="";
		document.getElementById("err_email").innerHTML="";
		document.getElementById("err_all").innerHTML="";
		document.getElementById("err_url").innerHTML="";
		document.getElementById("err_add").innerHTML="";
		document.getElementById("err_city").innerHTML="";
		document.getElementById("err_mob").innerHTML="";
		document.getElementById("err_qual").innerHTML="";
		}
	function male()
		{		
		document.getElementById('gen_m').value='male';
		document.getElementById('gen_f').value='';
		}
	function female()
		{
		document.getElementById('gen_m').value='';
		document.getElementById('gen_f').value='female';
		}
