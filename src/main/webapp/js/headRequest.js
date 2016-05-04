/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlHttp;

function createXmlRequest() {
    if (window.ActiveXObject) {
        xmlHttp = new window.ActiveXObject("Microsoft.XMLHTTP");

    } else if (window.XMLHttpRequest) {
        xmlHttp = new window.XMLHttpRequest();
    }
}
function sendHeadRequest(){
    createXmlRequest();
    var url="headrequest?timestamp="+new Date().getTime();
    xmlHttp.onreadystatechange=callback;
    xmlHttp.open("GET",url,true);
    xmlHttp.send(null);
    
}
function callback(){
    var result='Result: ';
    
    if(xmlHttp.readyState===4){
        if(xmlHttp.status===200){
          result=result+"Resource is available " ; 
          var lm=xmlHttp.getResponseHeader("Last-Modified");
          result=result+lm;
          
        }else{
          result=result+"Resource is not available " ; 
        }
        var resDiv=document.getElementById("serverResponse");
        /*cleare the responseDiv*/
        if(resDiv.hasChildNodes()){
            resDiv.removeChild(resDiv.childNodes[0]);
        }
        var text=document.createTextNode(result);
        resDiv.appendChild(text);
    }
}



