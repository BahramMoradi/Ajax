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
    clearModels();
    var models = document.getElementById("model");
    var jsonArray = JSON.parse(xmlHttp.responseText);
    for (var i = 0; i < jsonArray.length; i++) {
        var m = jsonArray[i].model;
        var optionNode = document.createElement("option");
        var nodeText = document.createTextNode(m);
        optionNode.appendChild(nodeText);
        models.appendChild(optionNode);
    }


}
function clearModels() {
    var models = document.getElementById("model");
    while (models.childNodes.length > 0) {
        models.removeChild(models.childNodes[0]);
    }
}
function getParameters() {
    var make = document.getElementById("make").value;
    var year = document.getElementById("year").value;
    var parameters = "&name=" + make + "&year=" + year;
    return parameters;
}

function refresh() {
    var url = "dynamiclist?timeStamp=" + new Date().getTime() + getParameters();
    createXMLHttpRequest();
    xmlHttp.onreadystatechange = handleStateChange;
    xmlHttp.open("GET", url, true);
    xmlHttp.send(null);

}


