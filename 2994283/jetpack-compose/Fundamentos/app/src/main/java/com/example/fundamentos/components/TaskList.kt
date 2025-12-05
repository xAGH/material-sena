package com.example.fundamentos.components

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp
import com.example.fundamentos.models.TaskModel

@Composable
fun TaskList(taskList: MutableList<TaskModel>) {
    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(5.dp),
        modifier = Modifier
            .padding(top = 40.dp)
            .fillMaxWidth()
            .padding(horizontal = 40.dp)
    ) {
        Text("Lista de tareas", fontSize = 32.sp)
        for (task in taskList) {
            Task(task) { taskList.remove(task) }
        }
    }
}