import {ActivityIndicator, Image, ScrollView, Text, View} from "react-native";
import {Stack} from "expo-router";
import {useLocalSearchParams} from "expo-router";
import ScreenLayout from "../Components/ScreenLayout";
import {useEffect, useState} from "react";
import {getGameDetails} from "../lib/metacritic";
import {Score} from "../Components/Score";

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
                    headerTitle: "Detalle del Juego",
                    headerRight: () => {},
                }}
            />
            <View className="flex-shrink pt-4 mx-2">
                {gameInfo === null ? (
                    <ActivityIndicator color={"#fff"} size={"large"} />
                ) : (
                    <ScrollView>
                        <View className="justify-center items-center text-center">
                            <Image
                                className="mb-4 rounded"
                                source={{uri: gameInfo.img}}
                                style={{width: 214, height: 294}}
                            />
                            <Score score={gameInfo.score} maxscore={100}></Score>
                            <Text className="text-white font-bold mb-8 text-2xl">
                                {gameInfo.title}
                            </Text>
                            <Text className="text-white text-justify font-bold mb-8 text-xl">
                                Detalle del Juego {gameInfo.description}
                            </Text>
                        </View>
                    </ScrollView>
                )}
            </View>
        </ScreenLayout>
    );
}
