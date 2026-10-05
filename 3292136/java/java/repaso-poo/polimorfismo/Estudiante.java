package polimorfismo;

public class Estudiante extends Persona {
    private String programa;
    private double promedio;

    public Estudiante(String nombre, int edad, String documento, String programa, double promedio) {
        super(nombre, edad, documento);
        this.programa = programa;
        this.promedio = promedio;
    }

    public String getPrograma() {
        return programa;
    }

    public void setPrograma(String programa) {
        this.programa = programa;
    }

    public double getPromedio() {
        return promedio;
    }

    public void setPromedio(double promedio) {
        this.promedio = promedio;
    }

    @Override
    public String presentarse() {
        return super.presentarse() + " Soy estudiante de " + programa + ".";
    }

    @Override
    public String actividad() {
        return getNombre() + " está estudiando.";
    }
}
