import java.util.List;

public class FormatoCsv implements Formato {

    @Override
    public void exportar(String titulo, List<String> filas) {
        System.out.println(titulo);
        for (String fila : filas) {
            System.out.println(fila.replace(": ", ";"));
        }
    }

}
