package ejericio_vehiculos_autonomos;

import ejericio_vehiculos_autonomos.enums.Estado;

public abstract class VehiculoAutonomo {

    private String identificador;
    private Estado estado;
    private Byte bateria;

    VehiculoAutonomo(String identificador, Estado estado, Byte bateria) {
        this.setIdentificador(identificador);
        this.setEstado(estado);
        this.setBateria(bateria);
    }

    VehiculoAutonomo(String identificador, Byte bateria) {
        this.setIdentificador(identificador);
        this.setEstado(Estado.INACTIVO);
        this.setBateria(bateria);
    }

    abstract void iniciarOperacion();

    abstract void detenerse();

    Estado reportarEstado() {
        return this.getEstado();
    }

    public String getIdentificador() {
        return identificador;
    }

    public Estado getEstado() {
        return estado;
    }

    public Byte getBateria() {
        return bateria;
    }

    public void setIdentificador(String identificador) {
        this.identificador = identificador;
    }

    public void setEstado(Estado estado) {
        this.estado = estado;
    }

    public void setBateria(Byte bateria) {
        this.bateria = bateria;
    }

}
