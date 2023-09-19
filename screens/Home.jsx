import {
  View,
  Text,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import React from "react";
import { Ionicons, Fontisto } from "@expo/vector-icons";
import { Welcome } from "../components";

const Home = () => {
  return (
    <SafeAreaView className="h-full">
      <View>
        <View className="w-full flex-row justify-between px-4">
          <Ionicons name="location-outline" size={24} />
          <Text className="font-semibold text-base text-gray-500">
            Accra Ghana
          </Text>
          <View className="flex justify-end items-center">
            <View className="absolute bottom-4 w-4 h-4 rounded-full bg-green-600 z-40">
              <Text className="font-semibold text-center text-white ">8</Text>
            </View>
            <TouchableOpacity>
              <Fontisto name="shopping-bag" size={24} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
      <ScrollView>
        <Welcome />
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
