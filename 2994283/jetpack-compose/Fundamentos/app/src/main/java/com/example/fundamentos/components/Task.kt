package com.example.fundamentos.components

import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Button
import androidx.compose.material3.ButtonDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.unit.dp
import com.example.fundamentos.enums.TaskStatus
import com.example.fundamentos.models.TaskModel

@Composable
fun Task(task: TaskModel, onClick: () -> Unit) {
    Button(
        onClick = onClick,
        shape = RoundedCornerShape(10.dp),
        modifier = Modifier
            .fillMaxWidth(),
        colors = ButtonDefaults.buttonColors(
            containerColor = when (task.status) {
                TaskStatus.PENDIENTE -> Color.Yellow
                TaskStatus.EN_PROCESO -> Color.Blue
                TaskStatus.FINALIZADO -> Color.Green
                else -> Color.Black
            },
            contentColor = when (task.status) {
                TaskStatus.EN_PROCESO -> Color.White
                else -> Color.Black
            },
        )
    ) {
        Text(task.name, modifier = Modifier.padding(vertical=14.dp))
    }
}