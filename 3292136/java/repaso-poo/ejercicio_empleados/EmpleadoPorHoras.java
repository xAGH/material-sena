class EmpleadoPorHoras extends Empleado {

    Double horasTrabajadas;
    Double valorPorHora;

    @Override
    Double calcularSalario() {
        return this.horasTrabajadas * this.valorPorHora;
    }

}