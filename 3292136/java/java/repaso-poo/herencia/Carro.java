package herencia;

public class Carro extends Vehiculo {

    private String ciudadPlaca;
    private String[] diasPicoYPlaca;

    public String getCiudadPlaca() {
        return ciudadPlaca;
    }

    public void setCiudadPlaca(String ciudadPlaca) {
        this.ciudadPlaca = ciudadPlaca;
    }

    public String[] getDiasPicoYPlaca() {
        return diasPicoYPlaca;
    }

    public void setDiasPicoYPlaca(String[] diasPicoYPlaca) {
        this.diasPicoYPlaca = diasPicoYPlaca;
    }

    Carro(String chasis, Integer llantas, Integer puertas, String motor, String color, String marca, String ciudadPlaca,
            String[] diasPicoYPlaca) {
        super(chasis, llantas, puertas, motor, color, marca);
        this.ciudadPlaca = ciudadPlaca;
        this.diasPicoYPlaca = diasPicoYPlaca;
    }

}
