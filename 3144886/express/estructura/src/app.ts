import express from "express";
import coursesRouter from "./routes/courses.routes";
import enrollementsRouter from "./routes/enrollements.routes";
import studentsRouter from "./routes/students.routes";
import { logging } from "./middlewares/logging.middleware";

const app = express();
const PORT = 3000;

// Middlewares
app.use(express.json());
app.use(logging);

// Routers
app.use("/courses", coursesRouter);
app.use("/enrollements", enrollementsRouter);
app.use("/students", studentsRouter);

// Listen
app.listen(PORT, () => {
    console.log("App inicializada en http://127.0.0.1:" + PORT);
});
