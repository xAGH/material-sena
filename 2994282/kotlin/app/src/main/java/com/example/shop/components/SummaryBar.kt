package com.example.shop.components

import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.fillMaxWidth
import androidx.compose.foundation.layout.padding
import androidx.compose.foundation.shape.RoundedCornerShape
import androidx.compose.material3.Card
import androidx.compose.material3.CardDefaults
import androidx.compose.material3.Text
import androidx.compose.runtime.Composable
import androidx.compose.ui.Alignment
import androidx.compose.ui.Modifier
import androidx.compose.ui.graphics.Color
import androidx.compose.ui.text.font.FontWeight
import androidx.compose.ui.unit.dp
import androidx.compose.ui.unit.sp

@Composable
fun SummaryBar(totalProducts: Int, totalPrice: Int, budget: Int) {

    val color = if (totalPrice <= budget) Color(0xFF2E7D32) else Color(0xFFD32F2F)

    Card(
        modifier = Modifier.fillMaxWidth(),
        shape = RoundedCornerShape(16.dp, 16.dp),
        colors = CardDefaults.cardColors(containerColor = Color(0xFFD6D6D6))
    ) {
        Column(
            modifier = Modifier.padding(16.dp),
        ) {

            Text("Productos seleccionados: $totalProducts", fontSize = 18.sp)
            Text(
                "Precio total: $$totalPrice",
                color = color,
                fontWeight = FontWeight.Bold,
                fontSize = 18.sp
            )
        }
    }
}
