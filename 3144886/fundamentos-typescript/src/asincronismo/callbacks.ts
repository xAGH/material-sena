function alarma(callback: () => void, tiempo: number) {
    console.log("Inicia la alarma")
    setTimeout(
        () => {
            console.log("Esta sonando la alarma")
            setTimeout(callback, 5000)
        }, tiempo
    )
}

alarma(() => console.log("Me estoy despertando"), 2000)