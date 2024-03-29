import axios from "axios";
import React, { useState, useEffect } from "react";
import Recorder from "../utils/recorder";
import CollapsibleView from "@eliav2/react-native-collapsible-view";
import Recorder_After from "../utils/recorder_after_recording";
import { FontAwesome } from "@expo/vector-icons";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
  Image,
} from "react-native";
const mapping = {
  1: "phenome",
  2: "stress",
  3: "intonation",
  4: "sentence",
};

// import drop from "./drop.png"
import { Button, Column, Row } from "native-base";
import CircularProgress from "react-native-circular-progress-indicator";
import { Rating, AirbnbRating } from "react-native-ratings";
import Bar_graph from "./results_graph";
import Graph from "./Line_Graph_component";
import Video_page from "./phoneme";
const Results_present = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [star, setStar] = useState(0);
  var check = route.params.data._parts[0][1];
  // const [responses, setResponses] = useState([]);
  console.log("now", route.params.audioFiles[0]);
  // iterate over the route.params.data._parts[4][1] array and append to a list called namely
  let namely = [];
  let star_rating = [];
  let phoneme_score = [];
  let labels_rec = [];
  let audioFiles = [];
  // console log the whole route.params.data
  for (let i = 0; i < route.params.data._parts[4][1].length; i++) {
    namely.push(route.params.data._parts[4][1][i]);
    audioFiles.push(route.params.audioFiles[i]);
    const jsonData = JSON.parse(route.params.data._parts[5][1][i]);
    star_rating.push(jsonData.word);
    phoneme_score.push(jsonData.phoneme);
    // console.log("name tarun", jsonData);
    labels_rec.push(jsonData.lables);
  }
  console.log("audio files check reulst arrat", audioFiles);
  let star_rrate = 0.0;
  // create a array having entries as 0.0,0.1,0.2,...,1.0
  const arr_star = Array.from({ length: 11 }, (_, i) => i / 10);
  // create a function that return any random element from the array
  // const [controlledValue, setControlledValue] = useState(false);

  // store the uri in an array of the length = route.params.audioFiles.length
  // const [recordedURIs, setRecordedURIs] = useState("");

  const onSubmit = () => {
    //  chewck if the category is phoneme, then redirect it to the phoneme page
    if (check == "phenome") {
      navigation.navigate("Phoneme",{
        data:route.params.data,
      });
  
    }
    //  chewck if the category is stress, then redirect it to the stress page
    else if (check == "stress") {
      navigation.navigate('Result_graph_1',{
        data:route.params.data,
      });
    }
    //  chewck if the category is intonation, then redirect it to the intonation page
    else if (check == "intonation") {
      navigation.navigate('Result_graph_2',{
        data:route.params.data,
       });
    }
    //  chewck if the category is sentence, then redirect it to the sentence page
    else if (check == "sentence") {
      navigation.navigate("Fluency",
      {
        data:route.params.data,
       });
    }
  };

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
  //  create a loading function that set teh loading to false after 15 seconds
  const loading_function = () => {
    setTimeout(() => {
      setLoading(false);
    }, 1500);
  };

  //  call the loading function
  loading_function();

  // get the length of the audio files array present in route.params.data._parts[1][1]
  const length = route.params.data._parts[1][1].length;
  // if the loading is true, then show the loading screen

  if (loading) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text>Loading...</Text>
      </View>
    );
  }
  // if the loading is false, then show the results screen
  else {
    return (
      <>
        <ScrollView style={{ flex: 1, height: "100%" }}>
          {namely.map((name, index) => (
            <>
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
                    {console.log("Index:", index, "URI:", audioFiles[index])}
                  </Text>
                  <ScrollView style={styles.container}>
                    <Row style={{ flexDirection: "row", alignItems: "center" }}>
                      {/* make 5 columns having "hello" in each column */}
                      <Column style={{ margin: 10 }}>
                        {/* <CircularProgress radius={38} value={58} activeStrokeColor={'#f39c12'} /> */}
                        {/* rating = 0.6 */}
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
                          // showRating
                          style={{ paddingVertical: 10 }}
                        />
                        <Row>{/* show the first element of the array */}</Row>
                      </Column>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        {Circular_Progress_Bar((index = { index }))}
                      </View>
                    </Row>
                    <CollapsibleView title={"Expand"}>
                      <View
                        style={{ flexDirection: "row", alignItems: "center" }}
                      >
                        <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                          You Speak
                        </Text>
                        {/* add a clickable search favicon icon */}
                        <View style={{ marginLeft: 250 }}></View>
                        <TouchableOpacity
                          onPress={() => {
                            // const audioData = route.params.audioFiles[index]; // Extracting the audio data for the current index
                            // const audioName = name; // Using the 'name' variable as the name of the audio
                            // const audioID = index; // Using the index as the audio ID (or you can adjust this as per your data structure)

                            if (check == "phenome") {
                              navigation.navigate("Phoneme",{
                                data:route.params.data,
                              });
                            }
                            //  chewck if the category is stress, then redirect it to the stress page
                            else if (check == "stress") {
                              navigation.navigate("Result_graph_1",{
                                data:route.params.data,
                              });
                            }
                            //  chewck if the category is intonation, then redirect it to the intonation page
                            else if (check == "intonation") {
                              navigation.navigate('Result_graph_2',{
                                data:route.params.data,
                               });
                            }
                            //  chewck if the category is sentence, then redirect it to the sentence page
                            else if (check == "sentence") {
                              navigation.navigate("Fluency",{
                                data:route.params.data,
                              });
                            } // Navigate to the search screen
                          }}
                        >
                          <FontAwesome
                            name="search" // Use the FontAwesome icon name for the search icon
                            size={20}
                            color="black" // Customize the color
                          />
                        </TouchableOpacity>
                      </View>
                      <Recorder_After
                        text="hello"
                        setAudioFiles="2"
                        recordedURI={audioFiles[0]}
                      />
                      <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                        Expert Speak
                      </Text>
                      <Recorder_After
                        text={"hi"}
                        setAudioFiles={"2"}
                        recordedURI={route.params.audioFiles[0]}
                      />
                    </CollapsibleView>
                    <View>
                      <Row>
                        <Column></Column>
                        
                        <Column style={{ paddingLeft: 150 }}></Column>
                        <Column></Column>
                      </Row>
                    </View>
                  </ScrollView>
                </View>
              </ScrollView>
            </>
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
    position: "sticky",
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

export default Results_present;
