package com.example.fundamentos

import android.annotation.SuppressLint
import android.os.Bundle
import androidx.activity.ComponentActivity
import androidx.activity.compose.setContent
import androidx.activity.enableEdgeToEdge
import androidx.compose.foundation.background
import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Row
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxHeight
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Scaffold
import androidx.compose.material3.Text
import androidx.compose.material3.TextField
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.text.rememberTextMeasurer
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.fundamentos.ui.theme.FundamentosTheme

import com.example.fundamentos.components.InputPresupuesto

class MainActivity : ComponentActivity() {
    override fun onCreate(savedInstanceState: Bundle?) {
        super.onCreate(savedInstanceState)
        enableEdgeToEdge()
        setContent {
            FundamentosTheme {
                /* Scaffold(modifier = Modifier.fillMaxSize()) { innerPadding ->
                    Greeting(
                        name = "Alejo",
                        modifier = Modifier.padding(innerPadding)
                    )
                } */
                /* TextoEnTiempoReal() */
                /* SimpleCounter */
                TaskList()
            }
        }
    }
}

@Composable
fun SimpleCounter() {
    var count by remember { mutableIntStateOf(0) }

    Column(
        verticalArrangement = Arrangement.spacedBy(16.dp, Alignment.CenterVertically),
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxSize()
    ) {
        Row(
            verticalAlignment = Alignment.CenterVertically,
            horizontalArrangement = Arrangement.spacedBy(32.dp, Alignment.CenterHorizontally),
            modifier = Modifier.fillMaxWidth()
        ) {
            Button(
                onClick = { count -= 1 },
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFFF77E7E),
                )
            ) {
                Text(text = "-", fontSize = 32.sp)
            }
            Text(text=count.toString(), fontSize = 32.sp)
            Button(
                onClick = { count += 1 },
                colors = ButtonDefaults.buttonColors(
                    containerColor = Color(0xFF94EBB3)
                )
            ) {
                Text(text = "+", fontSize = 32.sp)
            }
        }
        Button(
            onClick = { count = 0 },
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFFFCD188))
        ) {
            Text(text = "C", fontSize = 32.sp)
        }
    }
}

@Composable
fun TextoEnTiempoReal() {
    var text by remember { mutableStateOf("") }

    Column(
        modifier = Modifier
            .fillMaxSize()
            .padding(24.dp),
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.Center
    ) {

        TextField(
            value = text,
            onValueChange = { newValue -> text = newValue },
            label = { Text("Escribe algo") }
        )

        Spacer(modifier = Modifier.height(20.dp))

        Text(
            text = "Escribiste: $text",
            fontSize = 22.sp,
            fontWeight = FontWeight.Medium
        )

        if (text == "ADSO") {
            Text(
                text = "Adivinaste la palabra",
                color = Color(0xFF00FF00),
                fontSize = 32.sp
            )
        }
    }
}

enum class TaskStatus(val status: String) {
    PENDIENTE("PENDIENTE"),
    COMPLETADO("COMPLETADO")
}

data class TaskModel(val name: String, val status: TaskStatus)

@Composable
fun TaskForm(tasks: MutableList<TaskModel>) {
    var taskName by remember { mutableStateOf("") }
    var taskStatus by remember { mutableStateOf("") }
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.padding(0.dp, 48.dp)
    ) {
        TextField(
            value = taskName,
            onValueChange = { newValue -> taskName = newValue },
            label = { Text("Nombre de la tarea") }
        )
        TextField(
            value = taskStatus,
            onValueChange = { newValue -> taskStatus = newValue },
            label = { Text("Estado de la tarea") }
        )
        Button(
            colors = ButtonDefaults.buttonColors(
                containerColor = Color(0xFF8AFF9C)
            ),
            onClick = {
                val task = TaskModel(taskName, TaskStatus.valueOf(taskStatus))
                tasks.add(task)
                taskName = ""
                taskStatus = ""
            }
        ) {
            Text("Agregar")
        }
    }
}

@Composable
fun Task(task: TaskModel) {
    val color = when (task.status) {
        TaskStatus.PENDIENTE -> Color(0xFFBDA100);
        TaskStatus.COMPLETADO -> Color(0xFF148000)
    }
    Text("- ${task.name}", fontSize = 20.sp, color = color)
}

@Composable
fun TaskList() {
    val tasks = remember { mutableStateListOf<TaskModel>() }
    // val task = TaskModel("Estudiar Jetpack compose", status = TaskStatus.PENDIENTE)
    // tasks.add(task);
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        modifier = Modifier.fillMaxWidth()
    ) {
        TaskForm(tasks)
        Spacer(modifier = Modifier.height(16.dp))
        for (task in tasks) {
            Task(task)
        }
    }
}

@Composable
fun Greeting(name: String, modifier: Modifier = Modifier) {
    Text("Hello $name", modifier = Modifier, fontSize = 36.sp)
}