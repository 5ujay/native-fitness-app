import { View, Text, SafeAreaView, Image } from "react-native";
import React from "react";
import { StatusBar } from "expo-status-bar";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import icon_home from "../assets/images/icon_home.jpg";
import ImageSilder from "../components/ImageSilder";
import BodyParts from "../components/BodyParts";

const Home = () => {
  return (
    <SafeAreaView
      className="flex-1 bg-white flex space-y-3 pt-4"
      edges={["top"]}
    >
      <StatusBar style="dark" />

      {/* punchline and avatar */}
      <View className="flex-row justify-between items-center mx-5">
        <View className="space-y-2">
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold text-neutral-700"
          >
            READY TO
          </Text>
          <Text
            style={{ fontSize: hp(4.5) }}
            className="font-bold text-rose-500"
          >
            WORKOUT
          </Text>
        </View>

        <View className="flex justify-center items-center  rounded-full border border-gray-500">
          <Image source={icon_home} className="w-16 h-16 rounded-full" />
        </View>
      </View>

      {/* Image slider */}
      <ImageSilder />

      {/* body parts list */}
      <View className="flex-1">
        <BodyParts />
      </View>
    </SafeAreaView>
  );
};

export default Home;
