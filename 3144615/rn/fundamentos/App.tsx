import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { Counter } from "./components/Counter";

export default function App() {
    const [showCounter, setShowCounter] = useState(false);

    return (
        <View>
            <TouchableOpacity
                onPress={() => {
                    setShowCounter((currentValue) => !currentValue);
                }}
            >
                <Text>Toggle counter</Text>
            </TouchableOpacity>

            {showCounter && <Counter />}
        </View>
    );
}
