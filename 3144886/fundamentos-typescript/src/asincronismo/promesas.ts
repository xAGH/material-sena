/* const promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        if (Math.random() > 0.5) {
            resolve("Éxito"); 
        } else {
            reject(new Error("Fallo")); 
        }
    }, 1000);
});

promesa
    .then(res => console.log(res))
    .catch(error => console.error(error.message))
    .finally(() => console.log("Finalizó"))

function paso1(): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve("Paso 1"), 1000));
}

function paso2(dato: string): Promise<string> {
  return new Promise((resolve) => setTimeout(() => resolve(dato + " -> Paso 2"), 1000));
}

paso1()
  .then(respuesta => paso2(respuesta))
  .then((resultado) => console.log(resultado))
  .catch((err) => console.error(err)); */

// Promise.resolve()
// Promise.reject()

function paso1(): Promise<string> {
    return new Promise((resolve) => setTimeout(() => resolve("Paso 1"), 5000));
}

function paso2(dato: string): Promise<string> {
    return new Promise((resolve) =>
        setTimeout(() => resolve(dato + " -> Paso 2"), 1000)
    );
}

const promesas = [paso1(), paso2("Directo")];
Promise.all(promesas)
    .then((resultados) => console.log(resultados))
    .catch((err) => console.error(err));

Promise.race(promesas)
    .then((resultados) => console.log(resultados))
    .catch((err) => console.error(err));

new Promise<string>(resolve => {resolve("")})