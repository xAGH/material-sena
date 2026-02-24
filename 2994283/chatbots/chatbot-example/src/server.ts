import express from "express";
import fetch from "node-fetch";
import dotenv from "dotenv";
import path from "path";

dotenv.config();

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));

const context = (message: string) => {
    return `Eres un agente de soporte para la plataforma 'Ubik', una plataforma enfocada en la búsqueda y reserva de moteles en Armenia, Quindío - Colombia.
    Tu objetivo es decirme la intención del mensaje del cliente para tormar decisiones. En este contexto, las intenciones se dividen en:
        - El usuario está interesado en buscar moteles: BUSCAR_MOTELES
        - El usuario quiere conocer los precios de los moteles: PRECIO_MOTELES
        - El cliente quiere conocer cuánto cuesta estar en la aplicación 'Ubik': PRECIO_NUEVO_CLIENTE
        - El usuario desea hacer una reserva: BUSCAR_MOTELES
        - El usuario indica el nombre de un motel: BUSCAR_MOTEL
        - En cualquier otro caso: DESCONOCIDA
    Respondeme solo con la palabra que describe la intención, en este caso: BUSCAR_MOTELES, BUSCAR_MOTELm PRECIO_MOTELES, PRECIO_NUEVO_CLIENTE, DESCONOCIDA
    Prompt del cliente ${message}
    `;
};

// Chat endpoint
app.post("/chat", async (req, res) => {
    const { message } = req.body;

    try {
        const response = await fetch(process.env.OLLAMA_URL!, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                model: process.env.OLLAMA_MODEL,
                prompt: context(message),
                stream: false,
            }),
        });

        const data: any = await response.json();

        let reply = "";

        console.log(data.response);

        switch (data.response) {
            case "PRECIO_NUEVO_CLIENTE":
            case "PRECIO_MOTELES":
                reply =
                    "Los precios de los móteles pueden varia según la habitación y la ubicación";
                break;
            default:
                reply = "No puedo ayudarte con eso";
        }

        res.json({ reply });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "Error hablando con Ollama" });
    }
});

app.listen(PORT, () => {
    console.log(`🤖 Chatbot corriendo en http://localhost:${PORT}`);
});
