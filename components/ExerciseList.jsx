import { View, Text, FlatList, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { Image } from "expo-image";
import Animated, { FadeInDown } from "react-native-reanimated";

const ExerciseList = ({ data }) => {
  const navigation = useNavigation();

  const navigateToExerciseDetails = (item) => {
    navigation.navigate("ExerciseDetails", { item });
  };

  return (
    <View>
      <FlatList
        data={data}
        numColumns={2}
        keyExtractor={(item) => item.name}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 60 }}
        columnWrapperStyle={{
          justifyContent: "space-between",
        }}
        renderItem={({ item, index }) => (
          <ExerciseCard
            item={item}
            onPress={() => navigateToExerciseDetails(item)}
          />
        )}
      />
    </View>
  );
};

const ExerciseCard = ({ item, onPress, index }) => {
  return (
    <Animated.View
      entering={FadeInDown.duration(400)
        .delay(index * 200)
        .springify()}
    >
      <TouchableOpacity className="flex py-3 space-y-2" onPress={onPress}>
        <View className="bg-neutral-200 rounded-xl">
          <Image
            source={{ uri: item.gifUrl }}
            contentFit="cover"
            style={{ width: wp(44), height: wp(52) }}
            className="rounded-2xl"
          />
        </View>

        <Text
          style={{ fontSize: hp(1.7) }}
          className="text-neutral-700 font-semibold ml-1 tracking-wide"
        >
          {item?.name?.length > 20 ? item.name.slice(0, 15) + "..." : item.name}
        </Text>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default ExerciseList;
