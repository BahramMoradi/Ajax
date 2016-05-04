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
    else {
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
function createQueryString() {
    var first = document.getElementById("firstname").value;
    var last = document.getElementById("lastname").value;
    var birth = document.getElementById("birthday").value;
    var qs = "firstname=" + first + "&lastname=" + last + "&birthday=" + birth;
    return qs;
}

function doRequestUsingGET() {
    createXMLHttpRequest();
    var qs = createQueryString();
    var url = "dynamic?" + qs;
    xmlHttp.onreadystatechange =handleStateChange;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);


}
function doRequestUsingPOST() {
    //var xmlHttp = new window.XMLHttpRequest();
    createXMLHttpRequest();
    var qs = createQueryString();
    var url = "dynamic";
    xmlHttp.onreadystatechange =handleStateChange;
    xmlHttp.open("POST", url, true);
    xmlHttp.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xmlHttp.send(qs);
}


