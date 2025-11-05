class Persona(val nombre: String, var edad: Int) {
    constructor(nombre: String) : this(nombre, 0)
    constructor(edad: Int) : this("", edad)
}

open class Animal(val nombre: String) {
    open fun hacerSonido() = println("Sonido genérico")
}

class Perro(nombre: String) : Animal(nombre) {
    override fun hacerSonido() = println("Guau!")
}

interface Volador {
    fun volar() {
        println("Mueve las 2 alas")
    }
}

internal class Pajaro : Volador {
    
    class Pajaro2 {
        
    }
    
	override fun volar() {
        println("Mueva las 2 alas y las patas")
    }
}


abstract class Figura {
    abstract fun area(): Double
}

class Circulo(val radio: Double) : Figura() {
    override fun area() = Math.PI * radio * radio
}

data class Usuario (val id: Int, val nickname: String, val createdAt: Int)

sealed class Resultado

data class Exito(val mensajeOk: String) : Resultado()
data class Error(val mensajeError: String, val error: String) : Resultado()
data class Informacion(val mensajeInfo: String, val time: Int) : Resultado()

fun evaluarRespuesta(resultado: Resultado) {
    
}

enum class Direccion {
    NORTE, SUR, ESTE, OESTE
}

enum class Color(val rgb: Int) {
    ROJO(0xFF0000),
    VERDE(0x00FF00),
    AZUL(0x0000FF)
}


fun main() {
    val p1 = Persona("Ana", 25)
    val p2 = Persona("Alejo")
	val p3 = Persona(23)
    
    val usuario = Usuario(1, "Alejo", 126723513)
    
    println("P1: ${p1.nombre} y tiene ${p1.edad}")
    println("P2: ${p2.nombre} y tiene ${p2.edad}")
    println("P3: ${p3.nombre} y tiene ${p3.edad}")
    
    val lista = listOf(1, 2, 3)
    val listaMutable = mutableListOf(1, 2, 3)
    
    val set = setOf(1, 2, 3)
    val setMutable = mutableSetOf(1, 2, 3)
    
    val map = mapOf("nombre" to "Alejo", "edad" to 22, "rol" to "Instructor")
    val mapMutable = mutableMapOf("nombre" to "Alejo", "edad" to 22, "rol" to "Instructor")
    
    val numeros = listOf(1, 2, 3, 4, 5, 6)
    numeros.forEach { println(it) }
	numeros.filter { it % 2 == 0 }.forEach { println(it) }
}
