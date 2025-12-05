package com.example.fundamentos.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Button
import androidx.compose.material3.OutlinedTextField
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.fundamentos.enums.TaskStatus
import com.example.fundamentos.models.TaskModel


@Composable
fun TaskForm(taskList: MutableList<TaskModel>) {
    var taskName by remember { mutableStateOf("") }
    var taskStatus by remember { mutableStateOf("") }
    var inputInvalid by remember { mutableStateOf(false) }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp)
    ) {
        OutlinedTextField(
            value = taskName,
            onValueChange = { taskName = it },
            modifier = Modifier
                .padding(top = 50.dp),
            label = { Text("Ingrese el nombre") }
        )

        OutlinedTextField(
            value = taskStatus,
            onValueChange = {taskStatus = it },
            label = { Text("Ingrese el estado") }
        )
        Button(
            onClick = {
                if (taskName == "" || taskStatus == "") {
                    inputInvalid = true;
                    return@Button
                }
                try {
                    val task = TaskModel(taskName, TaskStatus.valueOf(taskStatus))
                    taskList.add(task)
                    taskName = ""
                    taskStatus = ""
                    inputInvalid = false;
                } catch (e: IllegalArgumentException) {
                    inputInvalid = true;
                }
            },
            modifier = Modifier.padding(top=30.dp)
        ) {
            Text(
                "Agregar",
            )
        }
        if (inputInvalid) {
            Text(
                "Error, los datos son inválidos y no se peude crear la tarea",
                fontSize = 20.sp,
                color = Color.Red
            )
        }
    }
}