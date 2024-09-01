import {StatusBar} from "expo-status-bar";
import {StyleSheet, View} from "react-native";
import {SafeAreaProvider} from "react-native-safe-area-context";

import {Main} from "./Components/Main";

export default function App() {
    return (
        <View style={styles.app}>
            <SafeAreaProvider>
                <View style={styles.container}>
                    <StatusBar style="dark" />
                    <Main />
                </View>
            </SafeAreaProvider>
        </View>
    );
}

const styles = StyleSheet.create({
    app: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
    },
    container: {
        flex: 1,
        backgroundColor: "#000",
        alignItems: "center",
        justifyContent: "center",
        marginHorizontal: 10,
    },
});
