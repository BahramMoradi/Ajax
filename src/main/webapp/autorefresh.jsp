<%-- 
    Document   : autorefresh
    Created on : 02-04-2016, 22:50:10
    Author     : Bahram
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>auto refresh</title>
        <script src="js/autorefresh.js"></script>
    </head>
    <body>
        <h1>Ajax Dynamic Update Example</h1>
        This page will automatically update itself:
        <input type="button" value="Launch" id="go" onclick="doStart();"/>
        <p>
            Page will refresh in <span id="time">5</span> seconds.
        <p>
        <table id="dynamicUpdateArea" align="left">
            <tbody>
                <tr id="row0"><td></td></tr>
            </tbody>
        </table>
    </body>
</html>
