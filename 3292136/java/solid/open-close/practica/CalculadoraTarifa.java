package practica;

public class CalculadoraTarifa {

    public double calcular(String tipoVehiculo, int minutos) {
        int horas = (int) Math.ceil(minutos / 60.0);
        if (tipoVehiculo.equals("moto")) {
            return horas * 1500;
        } else if (tipoVehiculo.equals("carro")) {
            return horas * 3000;
        } else if (tipoVehiculo.equals("bicicleta")) {
            return 0;
        }
        throw new IllegalArgumentException("Tipo de vehículo desconocido: " + tipoVehiculo);
    }

    public String describir(String tipoVehiculo) {
        if (tipoVehiculo.equals("moto")) {
            return "Motocicleta ($1.500 por hora)";
        } else if (tipoVehiculo.equals("carro")) {
            return "Automóvil ($3.000 por hora)";
        } else if (tipoVehiculo.equals("bicicleta")) {
            return "Bicicleta (gratis)";
        }
        throw new IllegalArgumentException("Tipo de vehículo desconocido: " + tipoVehiculo);
    }
}