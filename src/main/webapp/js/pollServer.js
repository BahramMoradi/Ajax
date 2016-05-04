/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlHttp;
function load(){
    setTimeout("doStart()",5000);
}
function createXMLHttp() {
    if (window.ActiveXObject) {
        xmlHttp = new window.ActiveXObject("Microsoft.XMLHTTP");
    } else if (window.XMLHttpRequest) {
        xmlHttp = new window.XMLHttpRequest();
    }
}
function startCallback() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            parseResult();
        }
    }
}
function doStart() {
    createXMLHttp();
    var url = "AutoPollServlet";
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = startCallback;
    xmlHttp.send(null);

}
function parseResult(){
     var div=document.getElementById("serverTime");
     if(div.hasChildNodes()){
         div.removeChild(div.childNodes[0]);
     }
     var serverRes=xmlHttp.responseText;
     var json=JSON.parse(serverRes);
     var node=document.createTextNode(json.message);
     div.appendChild(node);
     setTimeout("doStart()",5000);
     
 }

