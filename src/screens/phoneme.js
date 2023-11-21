import axios from "axios";
import React, { useState, useEffect } from "react";
import Recorder from "../utils/recorder";
import { WebView } from 'react-native-webview'; 
import Iframe from 'react-iframe';
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Rating, AirbnbRating } from "react-native-ratings";

import { Button, Column, Row } from "native-base";
import CircularProgress from "react-native-circular-progress-indicator";

const Video_page = ({ route, navigation }) => {
  const onSubmit = () => {
    navigation.navigate("Home");
  };
  const [loading, setLoading] = useState(true);
  console.log("hello",route.params.data._parts);
  // jsonify the route.params
  let namely = [];
  let star_rating = [];
  let phoneme_score = [];
  let labels_rec = [];
  let values=0;
  // console log the whole route.params.data
  for (let i = 0; i < route.params.data._parts[4][1].length; i++) {
    namely.push(route.params.data._parts[4][1][i]);
    const jsonData = JSON.parse(route.params.data._parts[5][1][i]);
    console.log("name tarun", jsonData);
    star_rating.push(jsonData.word);
    phoneme_score.push(jsonData.phoneme);
    // console.log("name tarun", jsonData);
    labels_rec.push(jsonData.lables);
  }
  console.log(namely)

  let x_coor=[]
  let y_coor=[]
  for(let i=0;i<labels_rec.length;i++){
    const jsonData = JSON.parse(route.params.data._parts[5][1][i]);
    let x_arr=[]
    let y_arr=[]
    for (let j = 0; j < jsonData.lables.length; j++) {
      x_arr.push(jsonData.values[j].x);
      y_arr.push(jsonData.values[j].y);
    }
    x_coor.push(x_arr)
    y_coor.push(y_arr)
  }
  console.log(x_coor)
  console.log(y_coor)
  const Circular_Progress_Bar = ({ index }) => {
    return (
      <ScrollView horizontal={true}>
        {phoneme_score[index].map((score, i) => (
          <Column key={i} style={{ margin: 10 }}>
            <CircularProgress radius={28} value={parseFloat(score)} style={{ margin: 10 }} />
            <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>{labels_rec[index][i]}</Text>
          </Column>
        ))}
      </ScrollView>
    );
  };
  // create a array of "ab","bc","cd","de","ef"
  const loading_function = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  //  call the loading function
  loading_function();

    // create a array of "ab","bc","cd","de","ef"
    if (loading) {
      return (
        <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
          <Text>Loading...</Text>
        </View>
      );
    } else {
      return (
        <>
          <ScrollView style={{ flex: 1, height: "100%" }}>
            {namely.map((name, index) => (
              <ScrollView style={{ flex: 1 }}>
                <View>
                  <Text
                    style={{
                      fontSize: 20,
                      fontWeight: "bold",
                      textAlign: "center",
                      margin: 10,
                      color: "#ff5733",
                    }}
                  >
                    {name}
                  </Text>
                  <ScrollView style={styles.container}>
                    <Row style={{ flexDirection: "row", alignItems: "center" }}>
                      <Column style={{ margin: 10 }}>
                        <Text
                          style={{
                            fontSize: 10,
                            fontWeight: "bold",
                            textAlign: "center",
                          }}
                        >
                          Rating = {star_rating[index]}
                        </Text>
                        <Rating
                          type="star"
                          ratingCount={1}
                          fractions={10}
                          startingValue={star_rating[index] / 5}
                          imageSize={40}
                          style={{ paddingVertical: 10 }}
                        />
                      </Column>
                      <View style={{ flexDirection: "row", alignItems: "center" }}>
                        {Circular_Progress_Bar((index = { index }))}
                      </View>
                    </Row>
                    <View height={200}>
                      <WebView
                        source={{ html: '<iframe width="100%" height="80%" src="https://www.youtube.com/embed/mYUyaKmvu6Y" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>' }}
                        style={{ marginTop: 20 }}
                      />
                    </View>
                  </ScrollView>
                </View>
              </ScrollView>
            ))}
          </ScrollView>
          <View style={{ bottom: 10, height: 50 }}>
            <Button color="success.600" onPress={onSubmit}>
              SUBMIT
            </Button>
          </View>
        </>
      );
    }
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

export default Video_page;
