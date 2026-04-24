class Gaviota extends Animal implements AnimalVolador, Herviboro, Carnivoro {

    @Override
    void comer() {
        System.out.println("La gaviota come")
    }

    @Override
    void desplazarse() {
        System.out.println("La gaviota camina o vuela")
    }

    @Override
    void hacerRuido() {
        System.out.println("Ahh")
    }

    @Overrida
    void volar(Int cantidadPlumas) {
        
    }

}
