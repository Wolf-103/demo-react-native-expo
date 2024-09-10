import {Text, View} from "react-native";
import {HomeIcon} from "../Components/Icons";
import StyledPressable from "../Components/StyledPressable";
import { Link } from "expo-router";

export default function Detail() {
    return (
        <View className="flex-1 justify-center items-center">
            <View>
                <Text className="text-white font-bold mb-8 text-2xl">
                    Detalle del Juego
                </Text>
                <Link asChild href="/">
                    <StyledPressable className={`active:opacity-20 p-2`}>
                        <HomeIcon />
                    </StyledPressable>
                </Link>
            </View>
        </View>
    );
}
