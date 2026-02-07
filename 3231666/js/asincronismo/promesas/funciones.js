const promesa1 = new Promise((res) => {
    setTimeout(() => {
        res("Se completó la promesa 1");
    }, 2000);
});

const promesa2 = new Promise((res) => {
    setTimeout(() => {
        res("Se completó la promesa 2");
    }, 4000);
});

const promesa3 = new Promise((res) => {
    setTimeout(() => {
        res("Se completó la promesa 3");
    }, 1000);
});

// const primeraPromesa = Promise.race([promesa2, promesa1, promesa3]);
// primeraPromesa.then();

const listaRespuestas = Promise.all([promesa2, promesa1, promesa3]);

listaRespuestas.then((respuestas) => {
    console.log(respuestas);
});
