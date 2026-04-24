class Profesor extends Persona {

    private Integer salario;
    private String[] horario;

    @Override
    void comer() {
        System.out.println("El profesor come");
    }

}