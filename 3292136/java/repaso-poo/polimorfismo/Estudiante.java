class Estudiante extends Persona {

    private String ficha;
    private Integer semestre;

    @Override
    void comer() {
        System.out.println("El estudiante come");
    }

}