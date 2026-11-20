class Rectangulo {
    public Integer ancho;
    public Integer alto;

    public Integer calcularArea() {
        return this.alto * this.ancho;
    }

    public Integer getAncho() {
        return ancho;
    }

    public void setAncho(Integer ancho) {
        this.ancho = ancho;
    }

    public Integer getAlto() {
        return alto;
    }

    public void setAlto(Integer alto) {
        this.alto = alto;
    }

}

class Cuadrado extends Rectangulo {

    @Override
    public void setAlto(Integer alto) {
        throw new UnsupportedOperationException();
    }

    @Override
    public void setAncho(Integer ancho) {
        this.ancho = ancho;
        this.alto = ancho;
    }

}