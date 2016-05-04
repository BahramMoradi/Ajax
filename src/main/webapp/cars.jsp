<%-- 
    Document   : cars
    Created on : 23-03-2016, 16:41:30
    Author     : Bahram
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>cars</title>
        <script src="js/cars.js"></script>
    </head>
    <body>
            <%@include file="index.jsp" %>
        <h1>Select your car!</h1>
        
        <table style="border: 2px; margin: 10px">
            <thead>
            <th>Manufactor</th><th>Door</th><th>Price</th>
            </thead>
            <tbody>
            
                
                <tr>
                    <td> 
            <select id="manufactor">
                <option>BMW</option>
                <option>SEAT</option>
                <option>HONDA</option>
            </select>
             </td>  
             <td>
            <select id="doors">
                <option>2 door</option>
                <option>4 door</option>
                <option>5 door</option>
            </select>
                 </td>
              <td>
                  <input id="price" type="text" name="price" value="0" />
                  <input type="submit" value="Send" onclick="sendJsonRequest()"/>
            </td>
           
            
                    
                </tr>
            </tbody>
        </table>
        <div id="responseDiv"></div>
    </body>
</html>
