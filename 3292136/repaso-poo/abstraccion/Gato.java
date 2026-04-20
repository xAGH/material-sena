class Gato extends Animal {

    @Override
    void comer() {
        System.out.println("El gato come")
    }

    @Override
    void desplazarse() {
        System.out.println("El gato se mueve con las patas y escala")
    }

    @Override
    void hacerRuido() {
        System.out.println("Miau")
    }

}