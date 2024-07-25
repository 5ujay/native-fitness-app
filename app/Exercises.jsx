import React, { useEffect, useState } from "react";
import { View, Text, Image } from "react-native";
import { useRoute } from "@react-navigation/native";
import { fetchExerciseBodyPart } from "../api/exercise_database";
import { StatusBar } from "expo-status-bar";
import ExerciseList from "../components/ExerciseList";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

const Exercises = () => {
  const route = useRoute();
  const bodypart = route.params?.item;
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        if (bodypart) {
          const data = await fetchExerciseBodyPart(bodypart.name); // Assuming bodypart has a `name` property
          setExercises(data);
        }
      } catch (error) {
        console.error("Error fetching exercises: ", error);
      }
    };

    fetchData();
  }, [bodypart]);

  return (
    <View style={{ flex: 1 }}>
      <StatusBar style="light" />
      <Image
        source={bodypart?.image}
        style={{ width: wp(100), height: hp(45) }}
      />

      <View style={{ flex: 1, marginTop: 20, paddingHorizontal: 20 }}>
        <Text style={{ fontSize: hp(3), fontWeight: "600", marginBottom: 10 }}>
          {bodypart?.name} Exercises
        </Text>
        <ExerciseList data={exercises} />
      </View>
    </View>
  );
};

export default Exercises;
