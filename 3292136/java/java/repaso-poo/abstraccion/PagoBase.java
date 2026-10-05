package abstraccion;

public abstract class PagoBase implements MetodoPago {

    private String titular;

    public PagoBase(String titular) {
        this.titular = titular;
    }

    public String getTitular() {
        return titular;
    }

    @Override
    public boolean pagar(double monto) {
        if (monto <= 0) {
            System.out.println("Monto inválido: " + monto);
            return false;
        }
        System.out.println("[" + getNombre() + "] " + titular + " inicia un pago de $" + monto);
        boolean exito = procesar(monto);
        System.out.println(exito ? "Pago aprobado" : "Pago rechazado");
        return exito;
    }

    protected abstract boolean procesar(double monto);

}
