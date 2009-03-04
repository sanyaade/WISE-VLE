function loadXMLDoc(dname) 
{
try //Internet Explorer
  {
	  alert("trying IE");
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  }
catch(e)
  {
  try //Firefox, Mozilla, Opera, etc.
    {
	  alert('trying ff, mozilla, opera');
    xmlDoc=document.implementation.createDocument("","",null);
    }
  catch(e) {alert(e.message)}
  }
try 
  {
  xmlDoc.async=false;
  xmlDoc.load(dname);
  return(xmlDoc);
  }
catch(e) {alert(e.message)}
return(null);
}

function LoadXMLDocObj(){
	this.xmlDoc = null;
	this.loadedEvent = new YAHOO.util.CustomEvent("loadedEvent", this);
}

LoadXMLDocObj.prototype.load = function(dname) {
		
try //Internet Explorer
  {	  alert("trying IE");

  this.xmlDoc = "abc";
  alert("ie0, this.xmlDoc: " + this.xmlDoc);
  this.xmlDoc = null;
  alert("ie1, this.xmlDoc: " + this.xmlDoc);
  this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
  alert("ie2, this.xmlDoc: " + this.xmlDoc);
  //this.xmlDoc = new ActiveXObject("Microsoft.XMLHTTP");
  //alert("ie3, this.xmlDoc: " + this.xmlDoc);

  alert("here, before done" + new ActiveXObject("Microsoft.XMLDOM"));
  alert('done');
  this.xmlDoc.loadXML();
  this.loadedEvent.fire(null);
  return;
  }
catch(e)
  {
  try //Firefox, Mozilla, Opera, etc.
    {
	  alert('trying ff,mozilla');
    this.xmlDoc=document.implementation.createDocument("","",null);
    }
  catch(e) {alert(e.message)}
  }
try 
  {
	alert(this.xmlDoc);
  this.xmlDoc.async=false;
  //this.xmlDoc.load(dname);
  this.xmlDoc.load("POC2v9.xml");
  //alert('done loading!');
  this.loadedEvent.fire(null);
  }
catch(e) {alert(e.message)}
}


LoadXMLDocObj.prototype.loadString = function(txt){
	try //Internet Explorer
	{
		this.xmlDoc = new ActiveXObject("Microsoft.XMLDOM");
		this.xmlDoc.async = "false";
		this.xmlDoc.loadXML(txt);
		this.loadedEvent.fire(this.xmlDoc);
		//return (this.xmlDoc);
	} 
	catch (e) {
		try //Firefox, Mozilla, Opera, etc.
		{
			parser = new DOMParser();
			this.xmlDoc = parser.parseFromString(txt, "text/xml");
 	 		//alert('done loading!');
  			this.loadedEvent.fire(null);
			//return (xmlDoc);
		} 
		catch (e) {
			alert(e.message)
		}
	}
	return (null);
}		

function loadXMLString(txt) 
{
try //Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async="false";
  xmlDoc.loadXML(txt);
  return(xmlDoc); 
  }
catch(e)
  {
  try //Firefox, Mozilla, Opera, etc.
    {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(txt,"text/xml");
    return(xmlDoc);
    }
  catch(e) {alert(e.message)}
  }
return(null);
}

function loadXMLDocFromString(txt) 
{
try //Internet Explorer
  {
  xmlDoc=new ActiveXObject("Microsoft.XMLDOM");
  xmlDoc.async="false";
  xmlDoc.loadXML(txt);
  return(xmlDoc); 
  }
catch(e)
  {
  try //Firefox, Mozilla, Opera, etc.
    {
    parser=new DOMParser();
    xmlDoc=parser.parseFromString(txt,"text/xml");
    return(xmlDoc);
    }
  catch(e) {alert(e.message)}
  }
return(null);
}
