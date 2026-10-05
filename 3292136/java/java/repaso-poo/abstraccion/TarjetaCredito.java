package abstraccion;

public class TarjetaCredito extends PagoBase {

    private String numero;
    private double cupo;

    public TarjetaCredito(String titular, String numero, double cupo) {
        super(titular);
        this.numero = numero;
        this.cupo = cupo;
    }

    @Override
    public String getNombre() {
        return "Tarjeta de crédito";
    }

    @Override
    protected boolean procesar(double monto) {
        System.out.println("Validando tarjeta terminada en " + numero.substring(numero.length() - 4));
        if (monto > cupo) {
            return false;
        }
        cupo -= monto;
        return true;
    }

}
