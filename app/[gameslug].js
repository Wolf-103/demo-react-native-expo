import {ActivityIndicator, ScrollView, Text, View} from "react-native";
import {Stack} from "expo-router";
import {useLocalSearchParams} from "expo-router";
import ScreenLayout from "../Components/ScreenLayout";
import {useEffect, useState} from "react";
import {getGameDetails} from "../lib/metacritic";

export default function Detail() {
    const {gameslug} = useLocalSearchParams();
    const [gameInfo, setGameInfo] = useState(null);

    useEffect(() => {
        if (gameslug) {
            getGameDetails(gameslug).then(setGameInfo);
        }
    }, [gameslug]);
    return (
        <ScreenLayout>
            <Stack.Screen
                options={{
                    headerStyle: {backgroundColor: "yellow"},
                    headerTintColor: "black",
                    headerLeft: () => {},
                    headerTitle: "Wolf",
                    headerRight: () => {},
                }}
            />
            <View className="flex-shrink pt-4 mx-2">
                {gameInfo === null ? (
                    <ActivityIndicator color={"#fff"} size={"large"} />
                ) : (
                    <ScrollView>
                        <Text className="text-white font-bold mb-8 text-2xl">
                            Detalle del Juego {gameInfo.title}
                        </Text>
                    </ScrollView>
                )}
            </View>
        </ScreenLayout>
    );
}
