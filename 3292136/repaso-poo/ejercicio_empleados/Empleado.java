abstract class Empleado {
    String nombre;
    String id;
    Double salarioBase;

    abstract Double calcularSalario();

    void mostrarInformacion() {
        System.out.println("Mostrando info...");
    }
}