/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dk.dtu.ajaxtutorial;

import com.google.gson.Gson;
import com.google.gson.GsonBuilder;
import java.io.BufferedReader;
import java.io.IOException;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.logging.Level;
import java.util.logging.Logger;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

/**
 *
 * @author Bahram
 */
@WebServlet(name = "Validation", urlPatterns = {"/validation"})
public class Validation extends HttpServlet {

    /**
     * Processes requests for both HTTP <code>GET</code> and <code>POST</code>
     * methods.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    protected void processRequest(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        response.setContentType("text/html;charset=UTF-8");
        try (PrintWriter out = response.getWriter()) {
            /* TODO output your page here. You may use following sample code. */
            out.println("<!DOCTYPE html>");
            out.println("<html>");
            out.println("<head>");
            out.println("<title>Servlet Validation</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet Validation at " + request.getContextPath() + "</h1>");
            out.println("</body>");
            out.println("</html>");
        }
    }

    // <editor-fold defaultstate="collapsed" desc="HttpServlet methods. Click on the + sign on the left to edit the code.">
    /**
     * Handles the HTTP <code>GET</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doGet(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        processRequest(request, response);
    }

    /**
     * Handles the HTTP <code>POST</code> method.
     *
     * @param request servlet request
     * @param response servlet response
     * @throws ServletException if a servlet-specific error occurs
     * @throws IOException if an I/O error occurs
     */
    @Override
    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        BufferedReader reader = request.getReader();
        String line = null;
        StringBuilder sb = new StringBuilder();
        while ((line = reader.readLine()) != null) {
            sb.append(line);
        }
        System.err.println("Received: "+sb.toString());
        String res=validate(sb.toString());
        response.getWriter().write(res);
    }

    private String validate(String str) {

        Gson gson = new GsonBuilder().create();
        Message msg = gson.fromJson(str, Message.class);
        Message response = new Message();
        String value = msg.getValue();
        response.setName(msg.getName());
        switch (msg.getName()) {

            case "username":

                if (value.length() < 2) {
                    response.setValue("Username must not be less than two character");
                } else if (value.length() > 100) {
                    response.setValue("Username must not be less than two character");
                } else if (value.isEmpty()) {
                    response.setValue("Username must not be empty");
                } else {
                    response.setValue("OK");
                }
                break;
            case "password":
                if (value.length() < 2) {
                    response.setValue("Password must not be less than two character");
                } else if (value.length() > 100) {
                    response.setValue("Password must not be less than two character");
                } else if (value.isEmpty()) {
                    response.setValue("Password must not be empty");
                } else {
                    response.setValue("OK");
                }

                break;
            case "birthday":
                SimpleDateFormat formater = new SimpleDateFormat("yyyy/MM/dd");
                 {
                    try {
                        formater.parse(value);
                        response.setValue("OK");
                    } catch (ParseException ex) {
                        response.setValue("Date format is not valid");
                        Logger.getLogger(Validation.class.getName()).log(Level.SEVERE, null, ex);

                    }
                }
                break;
            default:
                response.setValue("Unknown");
                break;

        }

        return gson.toJson(response);
    }

    /**
     * Returns a short description of the servlet.
     *
     * @return a String containing servlet description
     */
    @Override
    public String getServletInfo() {
        return "Short description";
    }// </editor-fold>

    private class Message {

        private String name;
        private String value;

        public Message() {
        }

        public Message(String name, String value) {
            this.name = name;
            this.value = value;
        }

        public String getName() {
            return name;
        }

        public void setName(String name) {
            this.name = name;
        }

        public String getValue() {
            return value;
        }

        public void setValue(String value) {
            this.value = value;
        }

    }

}
