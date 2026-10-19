import java.util.List;

public class FuenteVentas implements FuenteDatos {

    @Override
    public String obtenerTitulo() {
        return "Ventas de octubre";
    }

    @Override
    public List<String> obtenerFilas() {
        return List.of("Café de origen: $640.000", "Prensa francesa: $255.000");
    }

}
