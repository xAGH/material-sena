package herencia;

// Clase Padre
public class Vehiculo {

    private String chasis;
    private Integer llantas;
    private Integer puertas;
    private String motor;
    private String color;
    private String marca;

    public Vehiculo(String chasis, Integer llantas, Integer puertas, String motor, String color, String marca) {
        this.chasis = chasis;
        this.llantas = llantas;
        this.puertas = puertas;
        this.motor = motor;
        this.color = color;
        this.marca = marca;
    }

    public String getChasis() {
        return chasis;
    }

    public Integer getLlantas() {
        return llantas;
    }

    public Integer getPuertas() {
        return puertas;
    }

    public String getMotor() {
        return motor;
    }

    public String getColor() {
        return color;
    }

    public String getMarca() {
        return marca;
    }

    public void setChasis(String chasis) {
        this.chasis = chasis;
    }

    public void setLlantas(Integer llantas) {
        this.llantas = llantas;
    }

    public void setPuertas(Integer puertas) {
        this.puertas = puertas;
    }

    public void setMotor(String motor) {
        this.motor = motor;
    }

    public void setColor(String color) {
        this.color = color;
    }

    public void setMarca(String marca) {
        this.marca = marca;
    }

}
