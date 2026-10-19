import java.util.List;

public class Reporte {

    private FuenteDatos fuenteDatos;
    private Formato formato;

    public Reporte(FuenteDatos fuenteDatos, Formato formato) {
        this.fuenteDatos = fuenteDatos;
        this.formato = formato;
    }

    public void generar() {
        String titulo = this.fuenteDatos.obtenerTitulo();
        List<String> filas = this.fuenteDatos.obtenerFilas();
        this.formato.exportar(titulo, filas);
    }
}