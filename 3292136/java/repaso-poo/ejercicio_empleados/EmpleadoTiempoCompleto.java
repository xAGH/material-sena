class EmpeladoTiempoCompleto extends Empleado {

    @Override
    Double calcularSalario() {
        return this.salarioBase + 200000;
    }

}
