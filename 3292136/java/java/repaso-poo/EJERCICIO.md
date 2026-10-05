# Taller POO: Veterinaria "Patitas"

Construye un sistema que registre los animales que atiende una veterinaria.

### 1. Encapsulamiento

Crea la clase `Animal` con **nombre** y **edad**.
Desde fuera de la clase nadie debe poder poner una edad negativa ni cambiar el nombre.

## 2. Herencia

Crea `Perro` (con **raza**) y `Gato` (con **si es de interior**).
No repitas nada de lo que ya tiene `Animal`. Todos deben tener `mostrarInfo()` que muestre nombre, edad y raza en el caso de `Perro` o si es de interior en el caso de `Gato`.

## 3. Polimorfismo

Guarda perros y gatos en **una sola lista** y recórrela con **un solo `for`** que muestre la información y el sonido de cada uno ("¡Guau!" / "¡Miau!").

## 4. Abstracción

Haz que sea **imposible** escribir `new Animal(...)` y que toda clase hija esté **obligada** a definir su sonido.

## Reto

Agrega una `Vaca` ("¡Muuu!") **sin modificar** las otras clases ni el `for`.

## Salida esperada

```
Nombre: Firulais | Edad: 3
Firulais dice: ¡Guau!
Nombre: Michi | Edad: 2
Michi dice: ¡Miau!
```

## Entrega

1. Un solo archivo `Main.java` dentro de una carpeta llamada `Apellido_Nombre`.
2. Primera línea del archivo, como comentario: nombre completo y ficha.
3. Al final del archivo, como comentario, responde con tus palabras: **¿dónde aplicaste cada pilar?**
