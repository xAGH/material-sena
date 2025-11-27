package com.example.fundamentos

import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.text.style.LineHeightStyle
import androidx.compose.ui.tooling.preview.Preview
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.fundamentos.ui.theme.FundamentosTheme

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            /* Row {
                Saludo("Alejo")
                Saludo("Pepe")
                Saludo("Andrés")
            }
            Column {
                Saludo("Alejo")
                Saludo("Pepe")
                Saludo("Andrés")
            }*/
            Contador()
        }
    }
}

@Composable
fun Saludo(name: String) {
    Text("Hola $name", fontSize = 36.sp)
}

@Composable
fun Contador() {
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
                onClick = {}
            ) {
                Text("-", fontSize = 32.sp)
            }
            Text("0", fontSize = 32.sp)
            Button(
                onClick = {}
            ) {
                Text("+", fontSize = 32.sp)
            }
        }
        Button(
            onClick = {}
        ) {
            Text("C", fontSize = 32.sp)
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text(
        text = "Hello $name!",
        modifier = modifier
    )
}

@Preview(showBackground = true)
@Composable
fun GreetingPreview() {
    FundamentosTheme {
        Greeting("Android")
    }
}