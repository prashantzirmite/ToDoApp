function addTask()
{
	
	var tn=document.getElementById("taskname").value;
	var td=document.getElementById("taskdata").value;
	var us=JSON.parse(localStorage.getItem("CurrentUser"));
	var taskTemp=JSON.parse(localStorage.getItem("Tasks"));
	var taskObj={User:us.Email,Task:tn,Details:td,Status:'Pending'}
	if(taskTemp==null)
		taskTemp=[];
	
	taskTemp.push(taskObj);

	localStorage.setItem("Tasks",JSON.stringify(taskTemp));
	alert("Task Added in todo List");
}

function userTask()
{
	window.open("ToDoList.html","_self");
}

function showUserTask()
{
	// 
	// alert("inside task")
	var cu=JSON.parse(localStorage.getItem("CurrentUser"));
	var tsk=JSON.parse(localStorage.getItem("Tasks"));
	document.getElementById("un1").innerHTML=cu.Email;
	// if(cu.Email==tsk.User)
	// {	
		if(tsk==null)
			alert("No task to look at");
		else
		{
				
				var temp=`<table class='table'>
								<tr><th>Task Name</th>
									<th>Task Details</th>
									<th>Status</th>
									<th>Change Status</th>
									<th>Delete</th>
								</tr>`;
							
				for(let i=0;i<tsk.length;i++)
				{
					if(cu.Email==tsk[i].User)
					{
					console.log
				temp=temp+"<tr>"+
					"<td>"+tsk[i].Task+"</td>"+
					"<td>"+tsk[i].Details+"</td>"+
					"<td> <input id='st1' type='text' disabled value='\""+tsk[i].Status+"\"'>"+"</td>"+
					"<td> <input id='ch' type='button' value='Change Status' onclick='tsChange(\""+tsk[i].Task+"\")'></td>"+
					"<td> <input id='del' type='button' value='Delete' onclick='taskDelete(\""+tsk[i].Task+"\")'>"
					+"</tr>";
					}
				}
				temp=temp+"</table>";
			}
		
	// }
	// console.log(temp);
	document.getElementById("out1").innerHTML=temp;
	// alert("table created")
}
function tsChange(n)
{
	// alert("in task change"+n);
	var tsk=JSON.parse(localStorage.getItem("Tasks"));
	let ind=0;
	for(let i=0;i<tsk.length;i++)
	{
		if(tsk[i].Task==n)
		{
			if(tsk[i].Status=="Pending")
				tsk[i].Status="Complete";
			else
				tsk[i].Status="Pending";

		}

	}
	// tsk.splice(ind,1);
	localStorage.setItem("Tasks",JSON.stringify(tsk));
	console.log(ind)
	showUserTask();

}
function taskDelete(m)
{
	var dl=confirm("Do you really want to Delete ??")
	if(dl==true)
	{
		var cu=JSON.parse(localStorage.getItem("CurrentUser"));
		var tsk=JSON.parse(localStorage.getItem("Tasks"));
		let ind=0;
		for(let i=0;i<tsk.length;i++)
		{
			if(tsk[i].Task==m)
			{
				ind=i;
				break;
			}

		}
		tsk.splice(ind,1);
		localStorage.setItem("Tasks",JSON.stringify(tsk));
		console.log(ind)
		showUserTask();
	}
}