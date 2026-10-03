interface Person {
  name: string;
  lastname: string;
  age: number;
  email?: string;

  eat: (food: unknown) => void;
}

const person: Person = {
  name: "Alejo",
  lastname: "Giraldo",
  age: 23,
  email: "",
  eat: function eatBanano() {},
};

const person2: Person = {
  name: "Alejo",
  lastname: "Giraldo",
  age: 23,
  eat: () => {},
};
