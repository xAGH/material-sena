import androidx.compose.foundation.layout.Column
import androidx.compose.foundation.layout.Spacer
import androidx.compose.foundation.layout.fillMaxSize
import androidx.compose.foundation.layout.height
import androidx.compose.foundation.layout.padding
import androidx.compose.material3.Scaffold
import androidx.compose.runtime.Composable
import androidx.compose.runtime.getValue
import androidx.compose.runtime.mutableIntStateOf
import androidx.compose.runtime.mutableStateOf
import androidx.compose.runtime.remember
import androidx.compose.runtime.setValue
import androidx.compose.ui.Modifier
import androidx.compose.ui.unit.dp
import com.example.shop.components.BudgetInput
import com.example.shop.components.ProductList
import com.example.shop.components.SummaryBar
import com.example.shop.data.productsDummy


@Composable
fun ShopView() {

    var budget by remember { mutableStateOf("") }
    var totalPrice by remember { mutableIntStateOf(0) }
    var totalProducts by remember { mutableIntStateOf(0) }

    Scaffold(
        bottomBar = {
            SummaryBar(
                totalProducts = totalProducts,
                totalPrice = totalPrice,
                budget = budget.toIntOrNull() ?: 0
            )
        }
    ) { innerPadding ->
        Column(
            modifier = Modifier
                .padding(innerPadding)
                .padding(16.dp)
                .fillMaxSize()
        ) {

            BudgetInput(value = budget) { new ->
                if (new.all { it.isDigit() }) budget = new
            }

            Spacer(Modifier.height(12.dp))

            ProductList(
                products = productsDummy,
                onAdd = {
                    totalPrice += it
                    totalProducts++;
                },
                onRemove = {
                    totalPrice -= it
                    totalProducts--;
                },
            )
        }
    }
}
