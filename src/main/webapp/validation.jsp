<%-- 
    Document   : validation
    Created on : 24-03-2016, 11:37:02
    Author     : Bahram
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Validation</title>
        <script src="js/validation.js"></script>
    </head>
    <body>
            <%@include file="index.jsp" %>
        <h1>Validation With Ajax!</h1>
        <table>
            <tbody>
                <tr><td>Username</td><td><input type="text" id="username" name="username" value="" onchange="validate(this.name)"/></td></tr>
                <tr><td>Password</td><td><input type="password" id="password" name="password" value="" onchange="validate(this.name)"/></td></tr>
                <tr><td>Bithday</td><td><input type="text" id="birthday" name="birthday" value="" onchange="validate(this.name)"/></td></tr>
                <tr><td><input type="reset" value="Rest" /></td><td><input type="submit" value="OK" /></td></tr>
            </tbody>
        </table>
        <div id="responseDiv" style="border: 2px green"></div>
    </body>
</html>
