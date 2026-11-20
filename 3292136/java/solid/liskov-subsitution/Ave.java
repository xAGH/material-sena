interface AveVoladora {
    void volar();

}

public abstract class Ave {
    void volar() {
    };

    void ponerHuevo() {
    };

    void comer() {
    };

}

class Paloma extends Ave implements AveVoladora {
    @Override
    public void volar() {

    }
}

class Gaviota extends Ave implements AveVoladora {
    @Override
    public void volar() {

    }
}

class Pinguino extends Ave {

    @Override
    void volar() {
        throw new UnsupportedOperationException("Unimplemented method 'metodo1'");
    }

}

class Gallina extends Ave {

}