import java.util.List;

public class FormatoPdf implements Formato {

    @Override
    public void exportar(String titulo, List<String> filas) {
        System.out.println("[PDF] " + titulo);
        for (String fila : filas) {
            System.out.println("[PDF]   " + fila);
        }
    }

}
