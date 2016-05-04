/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dk.dtu.ajaxtutorial;

import com.google.gson.Gson;
import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.List;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.sound.midi.SysexMessage;

/**
 *
 * @author Bahram
 */
@WebServlet(name = "DynamicallyLoadingListServlet", urlPatterns = {"/dynamiclist"})
public class DynamicallyLoadingListServlet extends HttpServlet {

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
            out.println("<title>Servlet DynamicallyLoadingListServlet</title>");
            out.println("</head>");
            out.println("<body>");
            out.println("<h1>Servlet DynamicallyLoadingListServlet at " + request.getContextPath() + "</h1>");
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
      
        String yea = request.getParameter("year");
        String car = request.getParameter("name");
        int year=0;
        if(yea!=null){
            year=Integer.parseInt(yea.trim());
        }
        System.err.println("Received request: name : "+car+" year: "+year);
        List<CarModel> cars = prepare();
        List<CarModel> filtered = new ArrayList<>();
        for (CarModel ca : cars) {
            if (ca.getName().equalsIgnoreCase(car) && ca.getYear() == year) {
                filtered.add(ca);
            }
        }
        
        Gson gson = new Gson();
        String carjson = gson.toJson(filtered);
        System.err.println("Filtered length: "+filtered.size());
        System.err.println("Filtered: "+carjson);
        response.setHeader("Content-type", "application/json");
        response.getWriter().write(carjson);
        
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
        processRequest(request, response);
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

    private List<CarModel> prepare() {
        int[] years = new int[]{2006, 2006, 2006, 2006, 1995, 1995, 1995, 1995, 1985, 1985, 1985};
        String[] dodgemodel = new String[]{"Charger", "Magnum", "Ram", "Viper", "Aventger", "Intrepid", "Neon", "Sprit", "Aries", "Daytona", "Diplomat"};
        String[] chevmodel = new String[]{"Colorado", "Corvette", "Equinox", "Monte Carlo", "Beretta", "Camaro", "Cavalier", "Lumina", "Cavalier", "Celebrity", "Bel Air"};
        List<CarModel> cars = new ArrayList<>();
        for (int i = 0; i < years.length; i++) {
            cars.add(new CarModel("Dodge", dodgemodel[i], years[i]));
            cars.add(new CarModel("Chevrolet", chevmodel[i], years[i]));
        }
        
        return cars;
    }
    
}
