import {StyleSheet, Text, View} from "react-native";

export function Score({score, maxscore}) {
    const getColors = () => {
        const porcent = (score / maxscore) * 100;
        if (porcent < 40) return "bg-red-500";
        if (porcent < 98) return "bg-yellow-500";
        return "bg-green-500";
    };

    const className = getColors();

    return (
        <View className={`${className} w-8 h-8 rounded-full justify-center items-center`}>
            <Text className="text-lg font-bold text-white">{score}</Text>
        </View>
    );
}

// const styles = StyleSheet.create({
//     text: {
//         fontSize: 20,
//         fontWeight: "bold",
//         marginTop: 10,
//         color: "#fff",
//     },
// });
