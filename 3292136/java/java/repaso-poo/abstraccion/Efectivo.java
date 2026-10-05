package abstraccion;

// Implementa la interfaz directamente: no necesita la lógica compartida de PagoBase
public class Efectivo implements MetodoPago {

    @Override
    public String getNombre() {
        return "Efectivo";
    }

    @Override
    public boolean pagar(double monto) {
        System.out.println("[Efectivo] Se reciben $" + monto + " en caja");
        return true;
    }

}
