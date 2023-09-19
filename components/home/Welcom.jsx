import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from "react";
import { Feather, Ionicons } from "@expo/vector-icons";

const Welcome = () => {
  return (
    <View>
      <View className="w-full ">
        <Text className="font-bold text-xl mt-4 text-black ">
          Find the Most
        </Text>
        <Text className="font-bold text-xl mt-4 text-green-900">
          Luxury Furniture
        </Text>
      </View>
      <View>
        <View className="  rounded-md my-6 bg-blue-200">
          <TouchableOpacity>
            <View className="px-4 w-full flex-row gap-4">
              <Feather
                name="search"
                size={24}
                className="mx-10  "
                style={{ color: "gray" }}
              />
              <View className=" bg-blue-200 mr-12 rounded-sm ">
                <TextInput
                  value=""
                  onPressIn={() => {}}
                  placeholder="What are you looking for"
                  className="font-normal  w-full h-8"
                />
              </View>
              <TouchableOpacity className="w-12 bg-green-800 rounded-md items-center ">
                <Ionicons name="camera-outline" size={24} color="white" />
              </TouchableOpacity>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

export default Welcome;
