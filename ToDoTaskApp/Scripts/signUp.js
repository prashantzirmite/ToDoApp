function registerUser()
{
	
	var fn=document.getElementById("fname").value;
	var ln=document.getElementById("lname").value;
	var email=document.getElementById("mail").value;
	var dob=document.getElementById("dob").value;
	var ps=document.getElementById("pass").value;
	var cps=document.getElementById("cpass").value;

	if(ps!==cps)
	{
		alert("Password and Confirm Password do no match...!!")
	}
	
		var users=JSON.parse(localStorage.getItem("userList"));
		var userObj={Name:fn,SName:ln,Email:email,DoB:dob,Password:ps,Status:"Active"};
		if(users==null)
		{
			users=[];
		}
		users.push(userObj);
		localStorage.setItem("userList",JSON.stringify(users));
	
	alert("Succesfully SignedUp now log in to account ")		
	window.open("signIn.html","_self");
	
}
function validateUser()
{
	var users=JSON.parse(localStorage.getItem("userList"));
	var dob=new Date(document.getElementById("dob").value);
	var tod=new Date();
	var age=Math.abs((tod.getTime()-dob.getTime())/(1000 * 3600 * 24 * 365.25));
	if(age<18)
	{
		alert("You are not a valid User (age must be 18+)");
	}
	else
	{
		var em=document.getElementById("mail").value;
		var users=JSON.parse(localStorage.getItem("userList"));
		var flag=true;
		for(let i=0;i<users.length;i++)
		{
			if(em==users[i].Email)
			{
				alert("Email already Exists , use another");
				flag=false;
				break;
			}
		}
		if(flag==true)
			registerUser();
	}


}
