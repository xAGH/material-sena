const promesa1 = new Promise((res) => {
    setTimeout(() => {
        res("promesa1");
    }, 1000);
});
const promesa2 = new Promise((res) => {
    setTimeout(() => {
        res("promesa2");
    }, 3000);
});
const promesa3 = new Promise((res) => {
    setTimeout(() => {
        res("promesa3");
    }, 2000);
});
const promesa4 = new Promise((res) => {
    setTimeout(() => {
        res("promesa4");
    }, 5000);
});
const promesa5 = new Promise((res) => {
    setTimeout(() => {
        res("promesa5");
    }, 500);
});

const promesas = [promesa1, promesa2, promesa3, promesa4, promesa5];

const primera = Promise.race(promesas);

primera.then((res) => console.log(res));

const todas = Promise.all(promesas);

todas.then((res) => {
    console.log(res);
});
