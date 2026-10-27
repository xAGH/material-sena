public class Factura {
    private final PoliticaDescuento politicaDescuento;

    public Factura(PoliticaDescuento politicaDescuento) {
        this.politicaDescuento = politicaDescuento;
    }

    public double calcularTotal() {
        double subtotal = 100000;
        return subtotal - politicaDescuento.calcularDescuento(subtotal);
    }

    public static void main(String[] args) {
        Factura facturaEmpleado = new Factura(new DescuentoEmpleado());
        Factura facturaCoordinador = new Factura(new DescuentoCoordinador());
    }
}