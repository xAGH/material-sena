package herencia;

public class Moto extends Vehiculo {

    private Boolean esAutomatica;
    private Boolean esDosTiempos;

    Moto(String chasis, Integer llantas, String motor, String color, String marca, Boolean esAutomatica,
            Boolean esDosTiempos) {
        super(chasis, llantas, 0, motor, color, marca);
        this.esAutomatica = esAutomatica;
        this.esDosTiempos = esDosTiempos;
    }

    public Boolean getEsAutomatica() {
        return esAutomatica;
    }

    public void setEsAutomatica(Boolean esAutomatica) {
        this.esAutomatica = esAutomatica;
    }

    public Boolean getEsDosTiempos() {
        return esDosTiempos;
    }

    public void setEsDosTiempos(Boolean esDosTiempos) {
        this.esDosTiempos = esDosTiempos;
    }

}
