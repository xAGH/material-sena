package abstraccion;

import java.util.ArrayList;
import java.util.List;

public class Main {

    public static void main(String[] args) {
        // MetodoPago new MetodoPago() -> no se puede instanciar una interfaz
        // PagoBase p = new PagoBase("Ana") -> tampoco una clase abstracta

        List<MetodoPago> metodos = new ArrayList<>();
        metodos.add(new TarjetaCredito("Ana", "1234567812345678", 500000));
        metodos.add(new Paypal("Luis", "luis@correo.com", 20000));
        metodos.add(new Efectivo());

        // La tienda solo conoce la abstracción MetodoPago, no las clases concretas
        for (MetodoPago metodo : metodos) {
            realizarCompra(metodo, 80000);
            System.out.println("-----");
        }
    }

    static void realizarCompra(MetodoPago metodo, double total) {
        System.out.println("Pagando con " + metodo.getNombre());
        metodo.pagar(total);
    }

}
