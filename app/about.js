import { Link } from "expo-router";
import {Pressable, ScrollView, Text} from "react-native";
import { HomeIcon } from "../Components/Icons";
import StyledPressable from "../Components/StyledPressable";

export default function about() {
    return (
        <ScrollView className="pt-24">
            <Link asChild href="/" >
                <StyledPressable className={`active:opacity-20 p-2`}>
                   <HomeIcon />
                </StyledPressable>
            </Link>
            <Text className="text-white font-bold mb-8 text-2xl">About</Text>
            <Text className="text-white text-white/90 mb-4">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Text>
            <Text className="text-white text-white/90 mb-4">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Text>
            <Text className="text-white text-white/90 mb-4">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Text>
            <Text className="text-white text-white/90 mb-4">
                What is Lorem Ipsum? Lorem Ipsum is simply dummy text of the printing and
                typesetting industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley of type
                and scrambled it to make a type specimen book. It has survived not only
                five centuries, but also the leap into electronic typesetting, remaining
                essentially unchanged. It was popularised in the 1960s with the release of
                Letraset sheets containing Lorem Ipsum passages, and more recently with
                desktop publishing software like Aldus PageMaker including versions of
                Lorem Ipsum.
            </Text>
        </ScrollView>
    );
}
