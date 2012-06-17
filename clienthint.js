var xmlHttp1
var xmlHttp2

function showHint(str)
{
	if(str.length==0)
	{
		document.getElementById("txtHint").innerHTML=""
		return
	}
	xmlHttp1=GetXmlHttpObject()
	if(xmlHttp1==null)
	{
		alert ("Browers does not support HTTP Request")
		return
	}
	var url="gethint.php"
	url=url+"?q="+str
	url=url+"&sid="+Math.random()
	xmlHttp1.onreadystatechange=stateChanged1
	xmlHttp1.open("GET",url,true)
	xmlHttp1.send(null)
}
function stateChanged1()
{
	if(xmlHttp1.readyState==4 || xmlHttp1.readyState=="complete")
	{
		xmlHttp2=GetXmlHttpObject()
		xmlHttp2.onreadystatechange=stateChanged2
		xmlHttp2.open("GET","result.xml",true)
		xmlHttp2.send(null)
	}
}

function stateChanged2()
{
	if(xmlHttp2.readyState==4 || xmlHttp2.readyState=="complete")
	{
		var result="<table border='1'><tr align='left'><th>学号</th><th>姓名</th>"
		result = result + "<th>性别</th><th>生日</th><tr>"
		var stu=xmlHttp2.responseXML.documentElement.getElementsByTagName("info");
		var i, stuinfo
		for(i=0;i<stu.length;i++)
		{
			result=result+"<tr>"
			stuinfo=stu[i].getElementsByTagName("id");
			{
				try
				{
					result=result+"<td>"+stuinfo[0].firstChild.nodeValue+"</td>"
				}
				catch(e)
				{
					result=result+"<td></td>";
				}
			}
			stuinfo=stu[i].getElementsByTagName("name");
			{
				try
				{
					result=result+"<td>"+stuinfo[0].firstChild.nodeValue+"</td>"
				}
				catch(e)
				{
					result=result+"<td></td>";
				}
			}
			stuinfo=stu[i].getElementsByTagName("sex");
			{
				try
				{
					result=result+"<td>"+stuinfo[0].firstChild.nodeValue+"</td>"
				}
				catch(e)
				{
					result=result+"<td></td>";
				}
			}
			stuinfo=stu[i].getElementsByTagName("birth");
			{
				try
				{
					result=result+"<td>"+stuinfo[0].firstChild.nodeValue+"</td>"
				}
				catch(e)
				{
					result=result+"<td></td>";
				}
			}
		}
		result=result+"</table>"
		if (i == 0)
			result=""
		document.getElementById("txtHint").innerHTML=result
	}
}

function GetXmlHttpObject()
{
	var xmlHttp=null;
	try
	{
		xmlHttp=new XMLHttpRequest();
	}
	catch(e)
	{
		try
		{
			xmlHttp=new ActiveXObject("MsXml2.XMLHTTP");
		}
		catch(e)
		{
			xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
		}
	}
	return xmlHttp;
}

