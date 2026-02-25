async function getUser() {
    return new Promise((res, rej) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                res({ id: 1, name: "Alejo" });
            } else {
                rej("No existe el usuario");
            }
        }, 1000);
    });
}

// function main() {
//     getUser()
//         .then((user) => {
//             console.log(user);
//         })
//         .catch((message) => {
//             console.error(message);
//         });
// }

async function main() {
    try {
        const user = await getUser();
        console.log(user);
    } catch (message) {
        console.error(message);
    }
}

main();
