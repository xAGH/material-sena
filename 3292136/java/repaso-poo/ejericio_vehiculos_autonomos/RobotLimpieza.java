package ejericio_vehiculos_autonomos;

import ejericio_vehiculos_autonomos.enums.Estado;
import ejericio_vehiculos_autonomos.interfaces.MantenimientoUrbano;

public class RobotLimpieza extends VehiculoAutonomo implements MantenimientoUrbano {

    RobotLimpieza(String identificador, Estado estado, Byte bateria) {
        super(identificador, estado, bateria);
    }

    @Override
    void iniciarOperacion() {
        System.out.println("Se pone el delantal y empieza a limpiar las calles");
    }

    @Override
    void detenerse() {
        System.out.println("Ya terminó de limpiar y se va a tomar tinto con el taxi");
    }

    @Override
    public void mantenerZonaUrbana() {
        System.out.println("Limpia los espacios públicos");
    }

    @Override
    public void limpiezaUrbana() {
        System.out.println("Recoge basura y poda el césped");
    }

}
