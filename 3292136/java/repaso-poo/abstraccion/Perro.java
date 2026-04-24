class Perro extends Animal {

    @Override
    void comer() {
        System.out.println("El perro come")
    }

    @Override
    void desplazarse() {
        System.out.println("El perro se mueve con las patas")
    }

    @Override
    void hacerRuido() {
        System.out.println("Guau")
    }

}
