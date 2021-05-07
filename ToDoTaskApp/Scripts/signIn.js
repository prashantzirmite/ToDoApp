
function logInToAcc()
{
	var uname=document.getElementById("mail").value;
	var pword=document.getElementById("pass").value;

	var userArr=JSON.parse(localStorage.getItem("userList"));
	var userC;
	var flag=false;var p;
	if(uname=="admin@gmail.com")
	{
		if(pword=="admin")
			window.open("Admin.html","_self");
		else
			alert("Wrong Password");
	}
	else
	{
		for (let i=0;i<userArr.length;i++)
		{
			if(userArr[i].Email==uname)
				{
					flag=true;
					p=userArr[i].Password;
					userC=userArr[i];
					break;
				}
		}
		if(flag)
			{
				if(p==pword)
				{
					if(userC.Status=="Deactive")
					{
						alert("User is deactivated by admin");
					}
					else
					{
						// alert("Login successfull..!");
						localStorage.setItem("CurrentUser",JSON.stringify(userC));
						window.open("addTaskData.html","_self")
					}
				}
				else
				{
					alert("Incorrect Password... Enter valid Password");
				}
			}
		else
			{
				alert("Username is not present SignUp now..!");
			}
	}

}