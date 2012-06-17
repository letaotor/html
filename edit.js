var xmlHttp2

function process(type)
{
	var content
	var id=document.getElementById("id").value
	if(id.length==0)
	{
		document.getElementById("result").innerHTML="请输入学号"
		return
	}
	xmlHttp2=GetXmlHttpObject()
	if(xmlHttp2==null)
	{
		alert ("Browers does not support HTTP Request")
		return
	}
	if (type == "edit")
	{
		var name=document.getElementById("name").value
		var birth=document.getElementById("birth").value
		var sex=document.all.sex
		for(var i=0; i<sex.length; i++)
		{
			if(sex[i].checked)
				sex = sex[i].value
		}
		content="type="+type+"&id="+id+"&name="+name+"&sex="+sex+"&birth="+birth
	}
	if (type == "delete")
	{
		content="type="+type+"&id="+id
	}
	xmlHttp2.onreadystatechange=stateChanged2
	xmlHttp2.open("POST","edit.php",true)
	xmlHttp2.setRequestHeader("Content-type","application/x-www-form-urlencoded");
	xmlHttp2.send(content)
	return false
}

function stateChanged2()
{
	if(xmlHttp2.readyState==4 || xmlHttp2.readyState=="complete")
	{
		document.getElementById("result").innerHTML=xmlHttp2.responseText
	}
}

