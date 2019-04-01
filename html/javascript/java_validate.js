function frm_valid()
{
	var flag_val="";
	var f_name= document.getElementById("f_name").value;
	var l_name= document.getElementById("l_name").value;
	var can_email=document.getElementById("e_mail").value;
		var mob_num=document.getElementById("mob_num").value;
		var city=document.getElementById("city").value;
		var address=document.getElementById("addr").value;
		var check= /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
	

	if(f_name=="" || f_name==null)
	{		
		document.getElementById("err_fname").innerHTML="Enter First Name";
		flag_val=1;
	}
	else
	{
		document.getElementById("err_fname").innerHTML="";
		
	}
	if(l_name=="" || l_name==null)
	{
		
		document.getElementById("err_lname").innerHTML="Enter Last Name";
		flag_val=1;
	}
	else
	{
		document.getElementById("err_lname").innerHTML="";		
	}


	
	if(can_email=="" || can_email==null)
	{
		document.getElementById("err_email").innerHTML="Enter the Email";
		flag_val=1;
	}
	else
	{
		if(can_email.match(check))
			{
				document.getElementById("err_email").innerHTML="valid email";
			}
		else
			{
		  		document.getElementById("err_email").innerHTML="invalid email";
				flag_val=1;
			}


	}

	if(mob_num=="" || mob_num==null)
	{
		document.getElementById("err_mob").innerHTML="enter no";
		flag_val=1;
	}
	else
	{
		if(mob_num>999999999&&mob_num<10000000000)
		{
		document.getElementById("err_mob").innerHTML="";
		}
		else
		{
		document.getElementById("err_mob").innerHTML="Enter the	valid Number";
		flag_val=1;
		}
	}


	if(city=="" || city==null)
	{
		document.getElementById("err_city").innerHTML="Enter the city";
		flag_val=1;
	}
	else
	{
		document.getElementById("err_city").innerHTML="";
	}


	if(address=="" || address==null)
	{
		document.getElementById("err_add").innerHTML="Enter the address";
		flag_val=1;
	}
	else
	{
		document.getElementById("err_add").innerHTML="";
	}
	
       

	if(flag_val!="")
	{
		document.getElementById("err_all").innerHTML="Enter Proper value!";
	}
	else
	{
		document.getElementById("err_all").innerHTML="Form Fill are Success!";
	}
}
 	function frm_reset()
		{
		document.getElementById("table").reset();
		}
