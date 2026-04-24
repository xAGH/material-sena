package ejericio_vehiculos_autonomos;

import ejericio_vehiculos_autonomos.enums.Estado;
import ejericio_vehiculos_autonomos.interfaces.EntregaPaquetes;
import ejericio_vehiculos_autonomos.interfaces.TransportePersonas;

public class TaxiAutonomo extends VehiculoAutonomo implements TransportePersonas, EntregaPaquetes {

    TaxiAutonomo(String identificador, Estado estado, Byte bateria) {
        super(identificador, estado, bateria);
    }

    @Override
    void iniciarOperacion() {
        System.out.println("Salió a la calle a recibir carreras");
    }

    @Override
    void detenerse() {
        System.out.println("Se fue a tomar tinto y se apagó");
    }

    @Override
    public void transportarPersonas() {
        System.out.println("Las personas se montan al taxi para ir a farrear");
    }

    @Override
    public void entregarPaquete() {
        System.out.println("El taxi arranca, recoge el paquete y lo entrega en la dirección dicha");
    }

}
