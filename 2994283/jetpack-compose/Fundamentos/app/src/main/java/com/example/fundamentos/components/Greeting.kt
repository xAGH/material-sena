package com.example.fundamentos.components

import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.unit.sp

@Composable
fun Saludo(name: String) {
    Text("Hola $name", fontSize = 36.sp)
}

