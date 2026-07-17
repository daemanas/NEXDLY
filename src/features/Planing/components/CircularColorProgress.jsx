import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";


import Feather from 'react-native-vector-icons/Feather';

const CircularProgress = ({ limit }) => {
  const percentage = limit;

  const size = 60;
  const strokeWidth = 5;

  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const progressOffset =
    circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>

        <Circle
          cx={30}
          cy={30}
          r={radius}
          stroke="#E8E8F5"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <Circle
          cx={30}
          cy={30}
          r={radius}
          stroke="#8B7CF6"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          rotation="-90"
          origin="30, 30"
        />
      </Svg>

      <Text style={styles.percentage}>
        {/* {percentage}% */}
        <Feather
          name="clock"
          size={26}
          color="#fdae02"
        />
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 60,
    height: 60,
    justifyContent: "center",
    alignItems: "center",
  },

  percentage: {
    position: "absolute",
    fontSize: 13,
    color: "#444",
  },
});

export default CircularProgress;