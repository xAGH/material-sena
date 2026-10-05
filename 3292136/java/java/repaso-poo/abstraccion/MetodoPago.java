package abstraccion;

// Interfaz: define QUÉ se puede hacer, sin decir CÓMO se hace
public interface MetodoPago {

    boolean pagar(double monto);

    String getNombre();

}
