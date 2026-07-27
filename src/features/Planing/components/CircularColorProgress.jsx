import React from "react";
import { View, Text, StyleSheet } from "react-native";
import Svg, { Circle } from "react-native-svg";


const CircularProgress = ({ limit, totalPlans }) => {
  const percentage = limit;

  const size = 100;
  const strokeWidth = 6;

  const radius = (size - strokeWidth) / 2;

  const circumference = 2 * Math.PI * radius;

  const progressOffset =
    circumference - (percentage / 100) * circumference;

  return (
    <View style={styles.container}>
      <Svg width={size} height={size}>

        <Circle
          cx={50}
          cy={50}
          r={radius}
          stroke="#d4d4d6"
          strokeWidth={strokeWidth}
          fill="none"
        />

        <Circle
          cx={50}
          cy={50}
          r={radius}
          stroke="#8B7CF6"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={progressOffset}
          strokeLinecap="round"
          rotation="90"
          origin="50, 50"
        />
      </Svg>

      <View style={styles.percentage}>

        <Text style={{fontSize:22, fontWeight:500, color:"#8B7CF6"}}>
          {totalPlans}
        </Text>
        <Text style={{fontSize:10.8, fontWeight:500}}>
          Total Plans
        </Text>

      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 100,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },

  percentage: {
    position: "absolute",
    justifyContent:"center",
    alignItems:"center",
    gap:3
  },

  percentageText: {
    fontStyle:14
  }
});

export default CircularProgress;