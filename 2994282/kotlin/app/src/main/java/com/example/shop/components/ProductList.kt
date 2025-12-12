package com.example.shop.components

import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.lazy.LazyColumn
import androidx.compose.foundation.lazy.items
import androidx.compose.runtime.Composable
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.shop.models.Product

@Composable
fun ProductList(
    products: List<Product>,
    onAdd: (Int) -> Unit,
    onRemove: (Int) -> Unit,
) {
    LazyColumn {
        items(products) { product ->
            ProductCard(
                product = product,
                onAdd = { onAdd(product.price) },
                onRemove = { onRemove(product.price) }
            )
            Spacer(Modifier.height(10.dp))
        }
    }
}
