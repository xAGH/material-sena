package com.example.fundamentos.views

import androidx.compose.foundation.layout.Arrangement
import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.runtime.Composable
import androidx.compose.runtime.mutableStateListOf
import androidx.compose.runtime.remember
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.fundamentos.components.TaskForm
import com.example.fundamentos.components.TaskList
import com.example.fundamentos.models.TaskModel

@Composable
fun TasksView() {
    val taskList = remember { mutableStateListOf<TaskModel>() }

    Column(
        horizontalAlignment = Alignment.CenterHorizontally,
        verticalArrangement = Arrangement.spacedBy(8.dp),
        modifier = Modifier.fillMaxSize()
    ) {
        TaskForm(taskList)
        TaskList(taskList)
    }
}