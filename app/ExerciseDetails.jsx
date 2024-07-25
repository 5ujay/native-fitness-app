import React from "react";
import { View, Text, ScrollView } from "react-native";
import { StatusBar } from "expo-status-bar";
import { Image } from "expo-image";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExerciseDetails = ({ route }) => {
  const { item } = route.params;

  return (
    <ScrollView style={{ flex: 1 }}>
      <Animated.View
        entering={FadeInDown.duration(300).springify()}
        style={{ marginTop: 10, alignItems: "center" }}
      >
        <StatusBar style="dark" />
        <Text
          style={{
            fontSize: hp(2.5),
            fontWeight: "bold",
            marginBottom: 10,
            textAlign: "center",
            paddingTop: 20,
          }}
        >
          {item.name}
        </Text>
        <View
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 2 },
            shadowOpacity: 0.25,
            shadowRadius: 3.84,
            elevation: 5,
            backgroundColor: "#f0f0f0",
            borderRadius: 20,
            overflow: "hidden",
            width: wp(100),
            height: wp(100),
          }}
        >
          <Image
            source={{ uri: item.gifUrl }}
            style={{ width: "100%", height: "100%" }}
          />
        </View>

        <View style={{ padding: 20 }}>
          <Animated.Text
            entering={FadeInDown.delay(100).duration(300).springify()}
            style={{ fontSize: hp(2), fontWeight: "bold", marginBottom: 5 }}
          >
            Equipment:
          </Animated.Text>
          <Text style={{ fontSize: hp(1.8), marginBottom: 15 }}>
            {item.equipment}
          </Text>

          <Animated.Text
            entering={FadeInDown.delay(200).duration(300).springify()}
            style={{ fontSize: hp(2), fontWeight: "bold", marginBottom: 5 }}
          >
            Secondary Muscles:
          </Animated.Text>
          <Text style={{ fontSize: hp(1.8), marginBottom: 15 }}>
            {item.secondaryMuscles?.join(", ")}
          </Text>

          <Animated.Text
            entering={FadeInDown.delay(300).duration(300).springify()}
            style={{ fontSize: hp(2), fontWeight: "bold", marginBottom: 5 }}
          >
            Target:
          </Animated.Text>
          <Text style={{ fontSize: hp(1.8), marginBottom: 15 }}>
            {item.target}
          </Text>

          <Animated.Text
            entering={FadeInDown.delay(400).duration(300).springify()}
            style={{ fontSize: hp(2), fontWeight: "bold", marginBottom: 5 }}
          >
            Instructions:
          </Animated.Text>
          {item.instructions?.map((instruction, index) => (
            <Text key={index} style={{ fontSize: hp(1.8), marginBottom: 10 }}>
              {index + 1}. {instruction}
            </Text>
          ))}
        </View>
      </Animated.View>
    </ScrollView>
  );
};

export default ExerciseDetails;
