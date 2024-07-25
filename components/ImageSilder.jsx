import React from "react";
import { ScrollView, View, Image, StyleSheet } from "react-native";
import SliderImages from "../constants/SilderImages";

const YourComponent = () => {
  return (
    <View className="flex flex-row">
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollViewContent}
      >
        {SliderImages.map((item, index) => (
          <View key={index} className="mr-4">
            <Image
              source={item.image}
              style={styles.image}
              resizeMode="cover"
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  scrollViewContent: {
    paddingHorizontal: 15,
  },
  image: {
    width: 320,
    height: 250,
    borderRadius: 10,
  },
});

export default YourComponent;
