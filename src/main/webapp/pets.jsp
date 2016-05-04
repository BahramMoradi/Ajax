<%-- 
    Document   : pets
    Created on : 22-03-2016, 13:47:48
    Author     : Bahram
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>pets</title>
        <script src="js/pets.js"></script>
    </head>
    <body>
            <%@include file="index.jsp" %>
        <h1>Select the type of your pets at home!</h1>
        <form action="#">
            <select id="petTypes" size="6" multiple="true">
                <option value="cats">Cats</option>
                <option value="dogs">Dogs</option>
                <option value="birds">Birds</option>
                <option value="fish">Fish</option>
                <option value="hamsters">Hamsters</option>
                <option value="rabbits">Rabbits</option>
                
            </select>
            <input type="button" value="Send" onclick="sendPetsRequest()"/>
        </form>
        
        <h1>Server Response: </h1>
        <div id="serverResponse"></div>
    </body>
</html>
