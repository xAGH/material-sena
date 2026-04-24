package ejemplo_pc;

class IntelCPU {
    public void start() {
        System.out.println("Procesador Intel iniciado");
    }
}

class RyzenCPU {
    public void start() {
        System.out.println("Procesador Ryzen iniciado");
    }
}

class NvidiaGPU {
    public void render() {
        System.out.println("Renderizando con Nvidia");
    }
}

class RadeonGPU {
    public void render() {
        System.out.println("Renderizando con Nvidia");
    }
}

class GamingPC {

    private RyzenCPU processor;
    private NvidiaGPU gpu;

    public GamingPC() {
        this.processor = new RyzenCPU();
        this.gpu = new NvidiaGPU();
    }

    public void start() {
        processor.start();
        gpu.render();
        System.out.println("PC encendido");
    }
}

public class PCSinDI {
    public static void main(String[] args) {
        GamingPC pc = new GamingPC();
        pc.start();
    }
}