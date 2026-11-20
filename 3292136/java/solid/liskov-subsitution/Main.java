abstract class MetodoPago {
    void pagar(double valor) {
    };
}

abstract class Bono {
    void pagar(double valor) {
    };
}

class TarjetaCredito extends MetodoPago {
    @Override
    void pagar(double valor) {
        System.out.println("PAGA CON TC");
    }
}

class PayPal extends MetodoPago {
    @Override
    void pagar(double valor) {
        System.out.println("PAGA CON PAYPAL");
    }
}

class Efectivo extends MetodoPago {
    @Override
    void pagar(double valor) {
        System.out.println("PAGA CON EFECTIVO");
    }
}

class BonoRegalo extends Bono {
    @Override
    void pagar(double valor) {
        if (valor <= 50000) {
            System.out.println("PAGA CON BONO DE REGALO");
            return;
        }
        System.out.println("NO PAGA; EXCEDE EL MONTO");
    }
}

class Servicio {
    public void cobrar(MetodoPago metodoPago) {
        metodoPago.pagar(50000);
    }
}

public class Main {
    public static void main(String[] args) {
        Servicio servicio = new Servicio();
        servicio.cobrar(new PayPal());
    }
}