var xmlHttp

function showHint(str, type)
{
	if(str.length==0)
	{
		document.getElementById("txtHint").innerHTML=""
		return
	}
	xmlHttp=GetXmlHttpObject()
	if(xmlHttp==null)
	{
		alert ("Browers does not support HTTP Request")
		return
	}
	var url="query.php"
	url=url+"?q="+str
	url=url+"&action="+type
	url=url+"&sid="+Math.random()
	xmlHttp.onreadystatechange=stateChanged
	xmlHttp.open("GET",url,true)
	xmlHttp.send(null)
}

function stateChanged()
{
	if(xmlHttp.readyState==4 || xmlHttp.readyState=="complete")
	{
		document.getElementById("txtHint").innerHTML=xmlHttp.responseText
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

