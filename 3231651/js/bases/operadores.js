/*
    && -> AND
    || -> OR
    ! -> NOT
    < -> LOWER THAN
    > -> GREATER THAN
    <= -> LOWER OR EQUAL THAN
    >= -> GREATER OR EQUAL THAN
    == -> EQUALS BY VALUE
    != -> DIFFERENT BY VALUE
    === -> EQUALS BY VALUE AND TYPE
    !== -> DIFFERENT BY VALUE AND TYPE
*/

const edad = 20;

// Coerción
if (edad) {
    console.log("ES TRUE");
} else {
    console.log("ES FALSE");
}

console.log(+edad);
console.log("" + edad);
console.log(!!edad);
