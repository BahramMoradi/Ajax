/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlHttp;
function createXMLHttpRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp = new window.XMLHttpRequest();
    }
}
function handleStateChange() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            parseResult();
        }
    }
}

function parseResult() {
    var responseDiv = document.getElementById("serverResponse");
    if (responseDiv.hasChildNodes()) {
        responseDiv.removeChild(responseDiv.childNodes[0]);
    }
    var responseText = document.createTextNode(xmlHttp.responseText);
    responseDiv.appendChild(responseText);
}
function createXML(){
    var xml="<pets>";
    var option=null;
    var options=document.getElementById("petTypes").childNodes;
    for (var i=0; i<options.length;i++){
        option =options[i];
        if (option.selected){
            xml=xml+"<type>"+option.value+"<\/type>";
        }
    }
    xml=xml+"<\/pets>";
    return xml;
}
function sendPetsRequest(){
    var url="pets?timeStamp="+new Date().getTime();
    createXMLHttpRequest();
    var xml=createXML();
    window.alert(xml);
    xmlHttp.open("POST",url,true);
    xmlHttp.onreadystatechange=handleStateChange;
    xmlHttp.setRequestHeader("Content-Type","application/x-www-form-urlencoded;");
    xmlHttp.send(xml);
    
}

