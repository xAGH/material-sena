const inicial = 10;
const paso = 2;

function recur(inicial, paso) {
    console.log(inicial);
    if (inicial === 0) {
        return;
    }
    recur(inicial - paso, paso);
}

recur(10, 2);
