<%-- 
    Document   : dc
    Created on : 21-03-2016, 21:38:53
    Author     : Bahram
--%>

<%@page  language="java" contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>dyn</title>
        

    </head>
    <body>
        <%@include file="index.jsp" %>
        <h1>title Dynamically Editing Page Content</h1>

        <table>
            <tbody>
                <tr> <td>First name:</td><td><input type="text" id="firstname"/></td></tr>
                <tr><td>last name:</td><td><input type="text" id="lastname"/></td></tr>
                <tr><td>Birthday:</td><td><input type="text" id="birthday"/></td></tr>
            </tbody>

        </table>

        <form action="#">
            <input type="button" value="Send Parameter using GET" onclick="doRequestUsingGET()"/>
            <input type="button" value="Send Parameter using POST" onclick="doRequestUsingPOST()"/>
        </form>
        <div id="serverResponse"></div>
        <script src="js/appjs.js">
           
        </script>
    </body>
</html>
