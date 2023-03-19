import axios from "axios";
import React, { useState, useEffect } from "react";
import Recorder from "../utils/recorder";
import { WebView } from "react-native-webview";
import Iframe from "react-iframe";
import { Image, View } from "react-native";
import { Text, ScrollView, StyleSheet, TouchableOpacity } from "react-native";
import { Button, Column, Row } from "native-base";
import CircularProgress from "react-native-circular-progress-indicator";
import { Rating, AirbnbRating } from "react-native-ratings";
import { ReactSVG } from "react";

import Bargraph from "./bargraph_component";
import Graph from "./Graph";
const Bar_graph = () => {
  const onSubmit = () => {
    navigation.navigate("Home");
  };
  const series = [
    {
      data: [1, 2, 3],
    },
    {
      data: [5, 7, 11],
    },
    {
      data: [13, 17, 19],
    },
  ];

  // create a array of "ab","bc","cd","de","ef"
  const arr = Array.from({ length: 20 }, (_, i) => String.fromCharCode(97 + i));
  return (
    <>
      <Text
        style={{
          fontSize: 20,
          fontWeight: "bold",
          textAlign: "center",
          margin: 10,
          color: "#ff5733",
        }}
      >
        Peak
      </Text>
      <ScrollView style={{ flex: 1 }}>
        <View style={styles.container}>
          <Row>
            {/* make 5 columns having "hello" in each column */}
            <Column style={{ margin: 10 }}>
              <Text
                style={{
                  fontSize: 10,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                Rating = 0.6
              </Text>
              <Rating
                type="star"
                ratingCount={1}
                fractions={10}
                startingValue={0.6}
                imageSize={40}
                // showRating
                style={{ paddingVertical: 10 }}
              />
              <Row>{/* show the first element of the array */}</Row>
            </Column>
            <Column style={{ margin: 10 }}>
              <CircularProgress radius={28} value={58} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {arr[0]}
              </Text>
            </Column>
            <Column style={{ margin: 10 }}>
              <CircularProgress radius={28} value={58} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {arr[1]}
              </Text>
            </Column>
            <Column style={{ margin: 10 }}>
              <CircularProgress radius={28} value={58} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {arr[2]}
              </Text>
            </Column>
            <Column style={{ margin: 10 }}>
              <CircularProgress radius={28} value={58} />
              <Text
                style={{
                  fontSize: 20,
                  fontWeight: "bold",
                  textAlign: "center",
                }}
              >
                {arr[3]}
              </Text>
            </Column>
          </Row>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>You Speak</Text>
          <Recorder key={1} text={"test"} setAudioFiles={"2"} />
        </View>

        
        <Graph />
        <View style={{ padding: 20, alignItems: "center" }}></View>
        <View>
          <Button color="success.600" onPress={onSubmit}>
            SUBMIT
          </Button>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#fff",
  },
  lessonContainer: {
    flex: 1,
  },
  lessonHeader: {
    justifyConent: "space-between",
  },
  horContainter: {
    backgroundColor: "#fff",
    position: "absolute",
    bottom: 5,
    marginLeft: 5,
  },
  lesson: {
    height: 50,
    width: 50,
    justifyContent: "center",
    alignItems: "center",
    margin: 1,
    backgroundColor: "#71797E",
  },
  lessonText: {
    color: "white",
  },
  selectedLessonText: {
    color: "white",
    fontWeight: "bold",
    textDecorationLine: "underline",
    fontSize: 18,
  },
});

export default Bar_graph;
