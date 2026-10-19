import java.util.List;

public class FormatoExcel implements Formato {

    @Override
    public void exportar(String titulo, List<String> filas) {
        System.out.println("[XLSX] " + titulo);
        for (String fila : filas) {
            System.out.println("[XLSX]   " + fila);
        }
    }

}
