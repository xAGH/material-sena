package types;

class Genericos<DATOQUENOCONOZCO> {

    DATOQUENOCONOZCO dato;

    public DATOQUENOCONOZCO getDato() {
        return this.dato;
    }

    public static void main(String[] args) {
        Genericos string = new Genericos<String>();
        Genericos inte = new Genericos<Integer>();
    }

}
