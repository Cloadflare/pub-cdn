var p = 1;
var busy = 0;

function GetXmlHttpObject()
{
var xmlHttp=null;
try
  {
  // Firefox, Opera 8.0+, Safari
  xmlHttp=new XMLHttpRequest();
  }
catch (e)
  {
  // Internet Explorer
  try
    {
    xmlHttp=new ActiveXObject("Msxml2.XMLHTTP");
    }
  catch (e)
    {
    xmlHttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
  }
return xmlHttp;
}

function ChangeForumPage(e){
	if(busy == 0)
	{
		switch(e)
		{
			case "Next":
				page = p+1;
				p++;
				break;
			case "Prev":
				if(p>1)
				{
					page = p-1;
					p--;
				}
				break;
		}
		xmlHttp=GetXmlHttpObject();
		if (xmlHttp==null)
		  {
		  alert ("Your browser does not support AJAX!");
		  return;
		  } 
		var url="https://mymusicbaran1.ir/MTForumsBlock.php?req=LastTopics&p="+page;
		xmlHttp.onreadystatechange=ChangeForumPageProces;
		xmlHttp.open("GET",url,true);
		xmlHttp.send(null);
	}
}

function ChangeForumPageProces(e){
	if(xmlHttp.readyState==4)
      {
		document.getElementById("MTForumBlock").innerHTML=xmlHttp.responseText;
		document.getElementById("MTFloader").innerHTML='';
		busy = 0;
	  }else{
		document.getElementById("MTFloader").innerHTML='<img src="loader.gif" />';
		busy = 1;
	  }
}