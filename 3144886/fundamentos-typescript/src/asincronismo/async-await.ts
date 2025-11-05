function operacionPromesa(): Promise<string> {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (Math.random() > 0.5) {
        resolve("Éxito");
      } else {
        reject(new Error("Fallo"));
      }
    }, 1000);
  });
}

async function operacionAsync(): Promise<string> {
  try {
    const resultado = await operacionPromesa();
    console.log(resultado);
    return "Completado";
  } catch (error) {
    console.error((error as Error).message);
    throw error;
  }
}

operacionAsync().then((res) => console.log(res));
