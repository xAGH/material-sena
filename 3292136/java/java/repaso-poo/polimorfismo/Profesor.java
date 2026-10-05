package polimorfismo;

public class Profesor extends Persona {
    private String materia;
    private double salario;

    public Profesor(String nombre, int edad, String documento, String materia, double salario) {
        super(nombre, edad, documento);
        this.materia = materia;
        this.salario = salario;
    }

    public String getMateria() {
        return materia;
    }

    public void setMateria(String materia) {
        this.materia = materia;
    }

    public double getSalario() {
        return salario;
    }

    public void setSalario(double salario) {
        this.salario = salario;
    }

    @Override
    public String presentarse() {
        return super.presentarse() + " Soy profesor de " + materia + ".";
    }

    @Override
    public String actividad() {
        return getNombre() + " está dictando clase.";
    }
}
