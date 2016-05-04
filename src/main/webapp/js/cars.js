/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlHttp;

function createXMLHttpRequest(){
    if(window.ActiveXObject){
        xmlHtpp=new window.ActiveXObject("Microsoft.XMLHTTP");
    }
    else if(window.XMLHttpRequest){
        xmlHttp=new window.XMLHttpRequest();
    }
}
function createJson(){
    var carOptions=document.getElementById("manufactor").childNodes;
    var selectedCar;
    var doorOptions=document.getElementById("doors").childNodes;
    var selectedDoor;
    var price=document.getElementById("price").value;
    
    for(var i=0; i<carOptions.length;i++){
        if(carOptions[i].selected){
            selectedCar=carOptions[i].value;
        }
    }
    
     for(var i=0; i<doorOptions.length;i++){
        if(doorOptions[i].selected){
            selectedDoor=doorOptions[i].value;
        }
    }
    
  var json={
      "car":selectedCar,
      "door":selectedDoor,
      "price":price
  };
  return json;
}
function handleStateChange(){
    if(xmlHttp.readyState===4){
        if(xmlHttp.status===200){
            parseRequest();
        }
    }
}
function parseRequest(){
   var responseText=xmlHttp.responseText;
   var div=document.getElementById("responseDiv");
   if(div.hasChildNodes()){
       div.removeChild(div.childNodes[0]);
   }
   var responseNode=document.createTextNode(responseText);
   div.appendChild(responseNode);
   
}
function sendJsonRequest(){
    createXMLHttpRequest();
    var json=createJson();
    window.alert(JSON.stringify(json));
    xmlHttp.onreadystatechange=handleStateChange;
    xmlHttp.open("POST","CarsServlets",true);
    xmlHttp.setRequestHeader("Content-Type","application/json");
    xmlHttp.send(JSON.stringify(json));
}


