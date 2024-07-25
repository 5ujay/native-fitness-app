import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { StatusBar } from "expo-status-bar";
import fitness_wallpaper from "../assets/images/fitness_wallpaper.jpg";
import { LinearGradient } from "expo-linear-gradient";
import Animated, { FadeInDown } from "react-native-reanimated";
import { useNavigation } from "@react-navigation/native";

const Index = () => {
  const navigation = useNavigation();
  return (
    <View className="flex items-center justify-end h-full">
      <StatusBar style="light" />
      <Image source={fitness_wallpaper} className="h-full w-full absolute" />

      <LinearGradient
        colors={["transparent", "#18181b"]}
        style={{ width: wp(100), height: hp(40) }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 0.8 }}
        className="flex justify-end pb-12 space-y-8"
      >
        <Animated.View
          entering={FadeInDown.delay(100).springify()}
          className="flex items-center"
        >
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold">
            Best <Text className="text-rose-500">Workouts</Text>
          </Text>
          <Text style={{ fontSize: hp(5) }} className="text-white font-bold">
            For Yourself
          </Text>
        </Animated.View>

        <Animated.View entering={FadeInDown.delay(200).springify()}>
          <TouchableOpacity
            onPress={() => navigation.navigate("Home")}
            style={{ height: hp(7), width: wp(80) }}
            className="bg-rose-500 flex items-center justify-center mx-auto rounded-full border-2 border-white"
          >
            <Text style={{ fontSize: hp(3) }} className="text-white font-bold">
              Get Started
            </Text>
          </TouchableOpacity>
        </Animated.View>
      </LinearGradient>
    </View>
  );
};

export default Index;
