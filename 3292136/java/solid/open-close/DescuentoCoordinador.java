public class DescuentoCoordinador implements PoliticaDescuento {

    @Override
    public double calcularDescuento(double subtotal) {
        return subtotal * 0.50;
    }

}
