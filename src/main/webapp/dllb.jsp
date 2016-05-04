<%-- 
    Document   : dllb
    Created on : 29-03-2016, 23:54:49
    Author     : Bahram
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>dllb</title>
        <style>
            td,th{
                width: 100px;
            }

        </style>
        <script src="js/dynamicLoadingListBox.js"></script>
    </head>
    <body>
        <h1>Dynamic loading listbox!</h1>
        <form action="#">
            <table>
                <tr><th>Select Maker</th> <th>Select Year</th> <th>Model</th></tr>
                <tr>
                    <td>

                        <select id="make" onchange="refresh()">
                            <option id="Dodge">Dodge</option>
                            <option id="Chevrolet">Chevrolet</option>   
                        </select>

                    </td>
                    <td>

                        <select id="year" onchange="refresh()">
                            <option id="2006">2006</option>
                            <option id="1995">1995</option>   
                            <option id="1985">1985</option>   
                        </select>

                    </td>
                    <td>

                        <select id="model" ></select>


                    </td>

                </tr>

            </table>
        </form>
    </body>
</html>
