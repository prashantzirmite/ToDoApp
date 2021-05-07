function showUsers()
{
	// alert("in Show Users");
	var userL=JSON.parse(localStorage.getItem("userList"));
	if(userL==null)
		alert("No users yet...!!");
	else
	{
		var temp="<table class='table'><thead><tr>"+
					"<th class='col-2'>Firstname</th>"+
					"<th class='col-2'>Lastname</th>"+
					"<th class='col-2'>Email</th>"+
					"<th class='col-2'>DoB</th>"+
					"<th class='col-2'>Password</th>"+
					"<th class='col-1'>Status</th>"+
					"<th class='col-1'>Action</th>"+
					"<th class='col-1'>Delete</th></tr></thead><tbody>";
        for(let i=0;i<userL.length;i++)
        {
        	temp=temp+"<tr><td>"+userL[i].Name+"</td><td>"+userL[i].SName+"</td><td>"+
        			userL[i].Email+"</td><td>"+userL[i].DoB+"</td><td>"+userL[i].Password
        			+"</td><td>"
        			+"<input type='text'value='\""+userL[i].Status+"\"'disabled>"
        			+"</td><td>"
        			+"<input type='button' onclick='changeStatus(\""+userL[i].Email+"\")' value='Action(a/d)'>"
        			+"</td><td>"
        			+"<input type='button' onclick='deleteUser(\""+userL[i].Email+"\")' value='Delete'>";
        			// alert(userL[i].Name,userL[i].Status);
        }
        temp=temp+"</tbody></table>";

        document.getElementById("out").innerHTML=temp;		
	}
}
function changeStatus(mail)
{
	// alert("in chaneg")
	var users=JSON.parse(localStorage.getItem("userList"));
	for(let i=0;i<users.length;i++)
	{
		if(users[i].Email==mail)
		{
			if(users[i].Status=="Active")
				users[i].Status="Deactive";
			else
				users[i].Status="Active";
			break;
		}
	}
	localStorage.setItem("userList",JSON.stringify(users));
	showUsers();
}
function deleteUser(mail)
{
	var dl=confirm("Do you really Want to delete ");
	if(dl==true)
	{
		var users=JSON.parse(localStorage.getItem("userList"));
		var n;
		for(let i=0;i<users.length;i++)
		{
			if(users[i].Email==mail)
			{
				n=i;
				break;				
			}
		}
		users.splice(n,1);
		localStorage.setItem("userList",JSON.stringify(users));
		showUsers();
	}
}
function generateReport()
{
	alert("Report is Generated");
}
