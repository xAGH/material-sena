public class Pato {
    void nadar() {
    };
}

interface Ejemplo {
    void metodo1();

    void metodo2();

    void metodo3();
}

class PatoJuguete extends Pato implements Ejemplo {

    Boolean tienePilas = false;

    @Override
    void nadar() {
        if (this.tienePilas) {
            System.out.println("NADA");
        }
    }

    @Override
    public void metodo1() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'metodo1'");
    }

    @Override
    public void metodo2() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'metodo2'");
    }

    @Override
    public void metodo3() {
        // TODO Auto-generated method stub
        throw new UnsupportedOperationException("Unimplemented method 'metodo3'");
    }

}