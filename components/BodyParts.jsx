import React from "react";
import { View, Text, FlatList, TouchableOpacity, Image } from "react-native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";
import bodyParts from "../constants/BodyParts";
import Animated, { FadeInDown } from "react-native-reanimated";

const BodyParts = () => {
  const navigation = useNavigation();

  const navigateToExercises = (item) => {
    navigation.navigate("Exercises", { item });
  };

  return (
    <View className="mx-4">
      <Text style={{ fontSize: hp(3), fontWeight: "600", marginBottom: 10 }}>
        Exercises
      </Text>

      <FlatList
        data={bodyParts}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 50 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <BodyCard item={item} onPress={() => navigateToExercises(item)} />
        )}
      />
    </View>
  );
};

const BodyCard = ({ item, onPress, index }) => (
  <Animated.View
    entering={FadeInDown.duration(400)
      .delay(index * 200)
      .springify()}
  >
    <TouchableOpacity
      onPress={onPress}
      style={{
        width: wp(44),
        height: wp(52),
      }}
      className="flex justify-end p-4 mb-4"
    >
      <Image
        source={item.image}
        resizeMode="cover"
        style={{
          width: wp(44),
          height: wp(52),
        }}
        className="absolute rounded-2xl"
      />
      <LinearGradient
        colors={["transparent", "rgba(0,0,0,0.9)"]}
        style={{
          width: wp(44),
          height: wp(15),
        }}
        start={{ x: 0.5, y: 0 }}
        end={{ x: 0.5, y: 1 }}
        className="absolute bottom-0 rounded-b-2xl"
      />
      <Text
        style={{
          fontSize: hp(2.3),
        }}
        className="text-white font-semibold text-center "
      >
        {item.name}
      </Text>
    </TouchableOpacity>
  </Animated.View>
);

export default BodyParts;
