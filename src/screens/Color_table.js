import React from 'react';
import { View, Text, StyleSheet, Dimensions } from 'react-native';

const screen_width = Dimensions.get('window').width;

const getColorFromValue = (value) => {
  // Clamp value between 0 and 1
  const clampedValue = Math.min(Math.max(value, 0), 1);

  // Determine the color based on the clamped value
  // Assuming a threshold of 0.5 to decide between red and green
  if (clampedValue < 0.5) {
    return 'rgb(255, 0, 0)'; // Red
  } else {
    return 'rgb(0, 255, 0)'; // Green
  }
};

const ColorTable = ({ size, colors, details }) => {
    console.log("size",size)
    console.log("color",colors)
  return (
    <View style={styles.container}>
      {Array.from({ length: size }).map((_, index) => (
        <View
          key={index}
          style={[
            styles.cell,
            { backgroundColor: getColorFromValue(colors[index] || 0) },
          ]}
        >
          <Text style={styles.cellText}>{details[index]}</Text>
        </View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: 'black',
    width: 0.95 * screen_width, // 80% of the screen width
  },
  cell: {
    flex: 1,
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'black',
  },
  cellText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorTable;
