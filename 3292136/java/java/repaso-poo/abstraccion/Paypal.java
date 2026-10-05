package abstraccion;

public class Paypal extends PagoBase {

    private String correo;
    private double saldo;

    public Paypal(String titular, String correo, double saldo) {
        super(titular);
        this.correo = correo;
        this.saldo = saldo;
    }

    @Override
    public String getNombre() {
        return "PayPal";
    }

    @Override
    protected boolean procesar(double monto) {
        System.out.println("Autenticando cuenta " + correo);
        if (monto > saldo) {
            return false;
        }
        saldo -= monto;
        return true;
    }

}
