<%-- 
    Document   : headrequest
    Created on : 29-03-2016, 22:18:28
    Author     : Bahram
--%>

<%@page contentType="text/html" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
    <head>
        <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
        <title>Head Request</title>
        <script src="js/headRequest.js">
            
        </script>
    </head>
    <body>
        <%@include file="index.jsp" %>
        <h1>Head Request</h1>
        <p>
            Sometimes you won’t need to retrieve any content from the server, for instance, in the case
            where you just want to “ping” the server to verify that it is operational. You may want to simply
            read the response headers sent by the server and ignore the content. By reading the response
            headers, you can find out the Content-Type, the Content-Length, or even the Last-Modified date.
            The standard way to perform a request where you’re interested only in the response headers
            is to use a HEAD request, as opposed to a GET or POST request as discussed earlier. When a server
            responds to a HEAD request, it sends only the response headers, omitting the content even if the
            requested content could be returned to the browser. By omitting the content, the response to a
            HEAD request is much smaller than a GET or POST response.  
        </p>
        <h2>Server Response</h2>
        <input  type="submit" value="OK" onclick="sendHeadRequest()"/>
        <div id="serverResponse">
            
        </div>
    </body>
</html>
