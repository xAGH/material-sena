// Homologación
var Color;
(function (Color) {
    Color["RED"] = "RED";
    Color["BLUE"] = "BLUE";
})(Color || (Color = {}));
const red = Color.RED;
const blue = Color.BLUE;
// Nativo
const createEnumLike = (...values) => Object.freeze(Object.fromEntries(values.map((v) => [v, v])));
const EnumColor = createEnumLike("ROJO", "AZUL", "AMARILLO", "VERDE");
export {};
