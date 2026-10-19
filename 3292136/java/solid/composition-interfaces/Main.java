public class Main {

    public static void main(String[] args) {
        Reporte reporteVentasPdf = new Reporte(new FuenteVentas(), new FormatoPdf());
        Reporte reporteVentasCsv = new Reporte(new FuenteVentas(), new FormatoCsv());
        Reporte reporteInventarioExcel = new Reporte(new FuenteInventario(), new FormatoExcel());
    }

}
