/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var xmlHttp;
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
            setTimeout("pollServer()", 5000);
            refreshTime();
        }
    }
}
function doStart() {
    createXMLHttp();
    var url = "autorefresh?task=reset";
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = startCallback;
    xmlHttp.send(null);

}
function pollServer() {
    var url = "autorefresh?task=foo";
    xmlHttp.open("GET", url, true);
    xmlHttp.onreadystatechange = pollCallback;
    xmlHttp.send(null);
}
function pollCallback() {
    if (xmlHttp.readyState === 4) {
        if (xmlHttp.status === 200) {
            var message = xmlHttp.responseXML.getElementsByTagName("message")[0].firstChild.data;
            if (message !== "done") {
                var new_row = createNewRow(message);
                var table = document.getElementById("dynamicUpdateArea");
                var table_body = table.getElementsByTagName("tbody").item(0);
                var first_row = table_body.getElementsByTagName("tr").item(1);
                table_body.insertBefore(new_row, first_row);
                setTimeout("pollServer()", 5000);
                refreshTime();
            }
        }
    }
}
function createNewRow(message) {
    var row = document.createElement("tr");
    var cell = document.createElement("td");
    var cell_data = document.createTextNode(message);
    cell.appendChild(cell_data);
    row.appendChild(cell);
    return row;
}

function  refreshTime() {
    var time_span = document.getElementById("time");
    var time_val = time_span.innerHTML;
    var int_val = parseInt(time_val);
    var new_int_val = int_val - 1;
    if (new_int_val > -1) {
        setTimeout("refreshTime()", 1000);
        time_span.innerHTML = new_int_val;
    } else {
        time_span.innerHTML = 5;
    }
}



