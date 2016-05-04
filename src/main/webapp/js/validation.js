/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlHttp;
function createXMLHttpRequest(){
    if(window.ActiveXObject){
        xmlHttp=new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest){
        xmlHttp=new window.XMLHttpRequest();
    }
}
function callback(){
    if(xmlHttp.readyState===4){
        if(xmlHttp.status===200){
            parseResult();
        }
    }
}
function parseResult(){
    var div=document.getElementById("responseDiv");
    if(div.hasChildNodes()){
        div.removeChild(div.childNodes[0]);
    }
    var serverRes=JSON.parse(xmlHttp.responseText);
    var name=serverRes.name;
    var res=serverRes.value;
    var inp=document.getElementById(name);
    var node=document.createTextNode(name+": "+res);
    div.appendChild(node);
    if(res==="OK"){
        div.style.color="green";
         inp.style.borderColor="green";
    }else{
        div.style.color="red";
        inp.style.borderColor="red";
    }
}
function validate(name){
    //window.alert(getNameValueAsJson(name));
    var url="validation?timestamp="+new Date().getTime();
    var jsonData=getNameValueAsJson(name);
    createXMLHttpRequest();
    xmlHttp.open("POST",url,true);
    xmlHttp.onreadystatechange=callback;
    xmlHttp.setRequestHeader("Content-Type","application/json");
    xmlHttp.send(jsonData);
    
}
function getNameValueAsJson(name){
    var value=document.getElementById(name).value;
    var kv=new keyValue(name,value);
    var asJson=JSON.stringify(kv);
    return asJson.toString();
}

function keyValue(name,value){
    this.name=name;
    this.value=value;
}

