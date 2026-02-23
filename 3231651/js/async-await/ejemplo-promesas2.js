const users = [
    {
        id: 1,
        name: "Juan Pérez",
        email: "juan.perez@mail.com",
    },
    {
        id: 2,
        name: "María Gómez",
        email: "maria.gomez@mail.com",
    },
    {
        id: 3,
        name: "Carlos Rodríguez",
        email: "carlos.rodriguez@mail.com",
    },
    {
        id: 4,
        name: "Ana Torres",
        email: "ana.torres@mail.com",
    },
    {
        id: 5,
        name: "Luis Martínez",
        email: "luis.martinez@mail.com",
    },
];

const tasks = [
    {
        id: 1,
        userId: 1,
        title: "Aprender JavaScript",
        completed: false,
    },
    {
        id: 2,
        userId: 1,
        title: "Practicar arrays y objetos",
        completed: true,
    },

    {
        id: 3,
        userId: 2,
        title: "Diseñar interfaz",
        completed: false,
    },
    {
        id: 4,
        userId: 2,
        title: "Revisar colores y tipografía",
        completed: false,
    },

    {
        id: 5,
        userId: 3,
        title: "Crear API REST",
        completed: true,
    },
    {
        id: 6,
        userId: 3,
        title: "Probar endpoints",
        completed: false,
    },

    {
        id: 7,
        userId: 4,
        title: "Escribir documentación",
        completed: false,
    },
    {
        id: 8,
        userId: 4,
        title: "Subir proyecto a GitHub",
        completed: true,
    },

    {
        id: 9,
        userId: 5,
        title: "Configurar base de datos",
        completed: false,
    },
    {
        id: 10,
        userId: 5,
        title: "Crear tablas iniciales",
        completed: false,
    },
];

async function getUser(userId) {
    return new Promise((res, rej) => {
        setTimeout(() => {
            const user = users.find((user) => user.id === userId);

            if (user) res(user);
            else rej("Usuario no encontrado");
        }, 2000);
    });
}

async function getTasks(user) {
    return new Promise((res) => {
        setTimeout(() => {
            const tasks = tasks((task) => task.userId === user.id);

            res(tasks);
        }, 2000);
    });
}

function main() {
    getUser(1)
        .then((user) => {
            console.log(user);
            return getTasks(user);
        })
        .then((tasks) => {
            console.log(tasks);
        })
        .catch((error) => {
            console.error(error);
        });
}

async function mainAsyncAwait() {
    try {
        const user = await getUser(1);
        const tasks = await getTasks(user);
        console.log(user);
        console.log(tasks);
    } catch (error) {
        console.error(error);
    }
}
