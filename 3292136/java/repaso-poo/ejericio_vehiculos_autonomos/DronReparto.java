package ejericio_vehiculos_autonomos;

import ejericio_vehiculos_autonomos.enums.Estado;
import ejericio_vehiculos_autonomos.interfaces.EntregaPaquetes;
import ejericio_vehiculos_autonomos.interfaces.MantenimientoUrbano;

public class DronReparto extends VehiculoAutonomo implements MantenimientoUrbano, EntregaPaquetes {

    DronReparto(String identificador, Estado estado, Byte bateria) {
        super(identificador, estado, bateria);
    }

    @Override
    void iniciarOperacion() {
        System.out.println("Se eleva y empieza e entregar pedidos");
    }

    @Override
    void detenerse() {
        System.out.println("Lo tumbaron con una pedrada");
    }

    @Override
    public void mantenerZonaUrbana() {
        System.out.println("Se eleva para cambiar los bombillos de las torres de control");
    }

    @Override
    public void limpiezaUrbana() {
        System.out.println("Tira agua desde el cielo");
    }

    @Override
    public void entregarPaquete() {
        System.out.println("El dron recibe el paquete y lo entrega en la dirección indicada");
    }

}
