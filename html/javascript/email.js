function ValidateEmail(inputText)
{
var mailformat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
if(inputText.value.match(mailformat))
{
alert("correct mail format");
return true;
}
else
{
alert("You have entered an maamakmamkinvalid email address!");
document.form1.text1.focus();
return false;
}
}

Copy

