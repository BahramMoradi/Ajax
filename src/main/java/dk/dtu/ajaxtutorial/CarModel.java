/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package dk.dtu.ajaxtutorial;

/**
 *
 * @author Bahram
 */
public class CarModel {

    public CarModel() {
    }

    public CarModel(String name, String model, int year) {
        this.name = name;
        this.model = model;
        this.year = year;
    }

    private String name;
    private String model;
    private int year;

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public int getYear() {
        return year;
    }

    public void setYear(int year) {
        this.year = year;
    }

}
