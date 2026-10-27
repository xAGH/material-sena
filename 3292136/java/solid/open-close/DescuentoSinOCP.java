class DescuentoSinOCP {

    public double calcularDescuento(String tipoCliente, double subtotal) {
        if (tipoCliente.equals("frecuente")) {
            return subtotal * 0.10;
        } else if (tipoCliente.equals("empleado")) {
            return subtotal * 0.20;
        } else if (tipoCliente.equals("usuario")) {
            return subtotal * 0.30;
        } else if (tipoCliente.equals("coordinador")) {
            return subtotal * 0.50;
        }
        return 0;
    }

}