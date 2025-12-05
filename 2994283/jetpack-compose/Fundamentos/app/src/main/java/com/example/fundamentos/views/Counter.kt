package com.example.fundamentos.views

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.material3.Button
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun Contador() {
    var counter by remember { mutableStateOf(0) };
    Column(
        verticalArrangement = Arrangement.spacedBy(32.dp, Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier
            .fillMaxSize()
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(48.dp, Alignment.CenterHorizontally)
        ) {
            Button(
                onClick = { counter -= 1 }
            ) {
                Text("-", fontSize = 32.sp)
            }
            Text(counter.toString(), fontSize = 32.sp)
            Button(
                onClick = {counter += 1}
            ) {
                Text("+", fontSize = 32.sp)
            }
        }
        Button(
            onClick = {counter = 0}
        ) {
            Text("C", fontSize = 32.sp)
        }
    }
}