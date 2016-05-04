<%-- 
    Document   : index
    Created on : 29-03-2016, 22:54:01
    Author     : Bahram
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <title>home</title>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <style>
            body{
                width: 60%;
                text-align:center;
            }
            a:link{
                display: inline-block;
                position: relative;
                border-collapse: collapse;
                background-color: black;
                color:white;
                text-align: center;
                text-decoration: none;
                padding:10px 20px 10px 20px;
                margin: 0px;
                z-index: 1;
            }
            a:visited{
                color: green;
            }
            a:hover{
                background-color: #3399ff;
                color:white;

            }
            a:active{
                color:red;
            }
        </style>
    </head>
    <body>
        <a href="dc.jsp">Dynamic content</a>
        <a href="cars.jsp">Cars</a>
        <a href="pets.jsp">Pets</a>
        <a href="validation.jsp">Validation</a>
        <a href="headrequest.jsp">Head Request</a>
        <a href="dllb.jsp">Dynamic loadng list</a>
        <a href="autorefresh.jsp">Auto Refresh</a>
        <a href="autopoll.jsp">Auto Poll</a>
    </body>
</html>
