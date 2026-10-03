interface Box<T, K = string> {
  value1: T;
  value2?: K;
}

const box1: Box<string, number> = {
  value1: "",
  value2: 2,
};

const box2: Box<number, boolean | undefined> = {
  value1: 1,
  value2: true,
};

const box3: Box<number> = {
  value1: 1,
};
