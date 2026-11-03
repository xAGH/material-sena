// Homologación
enum Color {
  RED = "RED",
  BLUE = "BLUE",
}

const red = Color.RED;
const blue = Color.BLUE;

// Nativo
const createEnumLike = <const T extends string>(...values: T[]) =>
  Object.freeze(Object.fromEntries(values.map((v) => [v, v])) as Record<T, T>);

export type EnumLike<T> = T[keyof T];

const EnumColor = createEnumLike("ROJO", "AZUL", "AMARILLO", "VERDE");
type EnumColorType = EnumLike<typeof EnumColor>;
