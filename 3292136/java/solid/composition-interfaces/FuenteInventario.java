import java.util.List;

public class FuenteInventario implements FuenteDatos {
    @Override
    public String obtenerTitulo() {
        return "Inventario actual";
    }

    @Override
    public List<String> obtenerFilas() {
        return List.of("Café de origen: 42 unidades", "Taza: 7 unidades");
    }
}
