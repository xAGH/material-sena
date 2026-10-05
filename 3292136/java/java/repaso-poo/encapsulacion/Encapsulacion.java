package encapsulacion;
// Modificadores de acceso -> 4

// (vacío) -> Visible para todo el archivo y paquete
// public -> Visible para todos los paquetes
// private -> Solo la clase puede acceder a si misma
// protected -> Solo el paquete

public class Encapsulacion {

    private String name;

    public String getName() {
        String cleanName = name.substring(0, 5);
        return cleanName;
    }

    public void setName(String name) {
        this.name = name;
    }

}