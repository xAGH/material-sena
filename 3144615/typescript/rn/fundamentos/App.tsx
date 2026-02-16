import { useState } from "react";
import { Button, StyleSheet, Text, TouchableOpacity, View } from "react-native";

export default function App() {
    const [counter, setCounter] = useState(0);
    return (
        <View style={styles.container}>
            <TouchableOpacity
                style={styles.button}
                onPress={() => {
                    setCounter((v) => v + 1);
                }}
            >
                {" "}
                <Text>Incrementar</Text>{" "}
            </TouchableOpacity>
            <Text style={styles.text}> {counter} </Text>
            <Button
                title="Decrementar"
                onPress={() => {
                    setCounter((v) => v - 1);
                }}
            ></Button>
            <Button
                title="Restablecer"
                onPress={() => {
                    setCounter((v) => (v = 0));
                }}
            ></Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    text: {
        fontSize: 24,
    },
    button: {
        fontSize: 24,
        padding: 8,
        borderRadius: 10,
        backgroundColor: "green",
    },
});
