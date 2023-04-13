import axios from "axios";
import React, { useState, useEffect } from "react";
import Recorder from "../utils/recorder";
import CollapsibleView from "@eliav2/react-native-collapsible-view";

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
const Results_present = ({ route, navigation }) => {
  const [loading, setLoading] = useState(true);
  const [star, setStar] = useState(0);
  var check = route.params.data._parts[0][1];
  // const [responses, setResponses] = useState([]);
  console.log("now", route.params.data._parts[4][1]);
  // iterate over the route.params.data._parts[4][1] array and append to a list called namely
  let namely = [];
  for (let i = 0; i < route.params.data._parts[4][1].length; i++) {
    namely.push(route.params.data._parts[4][1][i]);
  }
  console.log("namely", namely);
  const random = () => {
    return Math.floor(Math.random() * 100) + 1;
  };

  let star_rrate=0.0;
  // create a array having entries as 0.0,0.1,0.2,...,1.0
  const arr_star = Array.from({ length: 11 }, (_, i) => i / 10);
  // create a function that return any random element from the array
  const random_star = () => {
    //  set the star rating to the random value
    star_rrate = arr_star[Math.floor(Math.random() * arr_star.length)];
    // return arr_star[Math.floor(Math.random() * arr_star.length)];
  };
  // create a array having random alphabetically literals each of length 4
  const arr = ["x01", "x02", "x03", "x04"];

  //  create a function that return any integer between 1 to 4
  const random_cat = () => {
    return Math.floor(Math.random() * 4) + 1;
  };

  // const [controlledValue, setControlledValue] = useState(false);

  const onSubmit = () => {
    //  chewck if the category is phoneme, then redirect it to the phoneme page
    if (check == "phenome") {
      navigation.navigate("Phoneme");
    }
    //  chewck if the category is stress, then redirect it to the stress page
    else if (check == "stress") {
      navigation.navigate("Result_graph_1");
    }
    //  chewck if the category is intonation, then redirect it to the intonation page
    else if (check == "intonation") {
      navigation.navigate("Result_graph_2");
    }
    //  chewck if the category is sentence, then redirect it to the sentence page
    else if (check == "sentence") {
      navigation.navigate("Fluency");
    }
  };
  
  // function to return Circular Progress Bar with input progress value
  let number_render = 0;
  const Circular_Progress_Bar = () => {
    number_render = random_cat();
    console.log(number_render);
    // render circular compoment number_render times
    let circular_component = [];
    for (let i = 0; i < number_render; i++) {
      circular_component.push(
        <Column style={{ margin: 10 }}>
          <CircularProgress
            radius={28}
            value={random()}
            style={{ margin: 10 }}
          />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
            }}
          >
            {arr[i]}
          </Text>
        </Column>
      );
    }
    return circular_component;
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
      <View style={{ height: "100%" }}>
        {namely.map((name) => (
          <>
          {random_star()}
          <View style={{height:"25%"}}>
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

            <ScrollView style={{ flex: 1, height: "100%" }}>
              <View style={styles.container}>
                <Row>
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
                      Rating = {star_rrate}
                    </Text>
                    <Rating
                      type="star"
                      ratingCount={1}
                      fractions={10}
                      startingValue={{ star_rrate }}
                      imageSize={40}
                      // showRating
                      style={{ paddingVertical: 10 }}
                    />
                    <Row>{/* show the first element of the array */}</Row>
                  </Column>
                  {Circular_Progress_Bar()}
                </Row>
                <CollapsibleView title={"Expand"}>
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    You Speak
                  </Text>
                  <Recorder key={1} text={"test"} setAudioFiles={"2"} />
                  <Text style={{ fontSize: 20, fontWeight: "bold" }}>
                    Expert Speak
                  </Text>
                  <Recorder key={1} text={"test"} setAudioFiles={"2"} />
                </CollapsibleView>
                <View>
                  <Row>
                    <Column></Column>
                    {/* <Column onPress={onSubmit1} style = {{paddingLeft :150}}>
          <Text style = {{fontSize:30,fontWeight:"bold",textAlign:"center"}}>\/</Text>  
      
          </Column> */}
                    <Column style={{ paddingLeft: 150 }}></Column>
                    <Column></Column>
                  </Row>
                </View>
              </View>
              
            </ScrollView>
            </View>
          </>
        ))}
      </View>
              <View style={{ bottom: 80, height: 50 }}>
                <Button color="success.600" onPress={onSubmit}>
                  SUBMIT
                </Button>
              </View>
              </>
    );
  }
  // return (
  //   <>
  //     <View style={{ height: "100%" }}>
  //       <Text
  //         style={{
  //           fontSize: 20,
  //           fontWeight: "bold",
  //           textAlign: "center",
  //           margin: 10,
  //           color: "#ff5733",
  //         }}
  //       >
  //         Peak
  //       </Text>

  //       <ScrollView style={{ flex: 1, height: "100%" }}>
  //         <View style={styles.container}>
  //           <Row>
  //             {/* make 5 columns having "hello" in each column */}
  //             <Column style={{ margin: 10 }}>
  //               {/* <CircularProgress radius={38} value={58} activeStrokeColor={'#f39c12'} /> */}
  //               {/* rating = 0.6 */}
  //               <Text
  //                 style={{
  //                   fontSize: 10,
  //                   fontWeight: "bold",
  //                   textAlign: "center",
  //                 }}
  //               >
  //                 Rating = 0.6
  //               </Text>
  //               <Rating
  //                 type="star"
  //                 ratingCount={1}
  //                 fractions={10}
  //                 startingValue={0.6}
  //                 imageSize={40}
  //                 // showRating
  //                 style={{ paddingVertical: 10 }}
  //               />
  //               <Row>{/* show the first element of the array */}</Row>
  //             </Column>
  //             {Circular_Progress_Bar()}
  //           </Row>
  //           <CollapsibleView title={"Expand"}>
  //             <Text style={{ fontSize: 20, fontWeight: "bold" }}>
  //               You Speak
  //             </Text>
  //             <Recorder key={1} text={"test"} setAudioFiles={"2"} />
  //             <Text style={{ fontSize: 20, fontWeight: "bold" }}>
  //               Expert Speak
  //             </Text>
  //             <Recorder key={1} text={"test"} setAudioFiles={"2"} />
  //           </CollapsibleView>
  //           <View>
  //             <Row>
  //               <Column></Column>
  //               {/* <Column onPress={onSubmit1} style = {{paddingLeft :150}}>
  //     <Text style = {{fontSize:30,fontWeight:"bold",textAlign:"center"}}>\/</Text>

  //     </Column> */}
  //               <Column style={{ paddingLeft: 150 }}></Column>
  //               <Column></Column>
  //             </Row>
  //           </View>
  //         </View>

  //         <View height={10} />
  //         <Text
  //           style={{
  //             fontSize: 20,
  //             fontWeight: "bold",
  //             textAlign: "center",
  //             margin: 10,
  //             color: "#ff5733",
  //           }}
  //         >
  //           Beak
  //         </Text>

  //         <View style={styles.container}>
  //           <Row>
  //             {/* make 5 columns having "hello" in each column */}
  //             <Column style={{ margin: 10 }}>
  //               <Text
  //                 style={{
  //                   fontSize: 10,
  //                   fontWeight: "bold",
  //                   textAlign: "center",
  //                 }}
  //               >
  //                 Rating = 0.4
  //               </Text>
  //               <Rating
  //                 type="star"
  //                 ratingCount={1}
  //                 fractions={10}
  //                 startingValue={0.4}
  //                 imageSize={40}
  //                 // showRating
  //                 style={{ paddingVertical: 10 }}
  //               />
  //               <Row>{/* show the first element of the array */}</Row>
  //             </Column>
  //             {Circular_Progress_Bar()}
  //           </Row>
  //           <CollapsibleView title={"Expand"}>
  //             <Text style={{ fontSize: 20, fontWeight: "bold" }}>
  //               You Speak
  //             </Text>
  //             <Recorder key={1} text={"test"} setAudioFiles={"2"} />
  //             <Text style={{ fontSize: 20, fontWeight: "bold" }}>
  //               Expert Speak
  //             </Text>
  //             <Recorder key={1} text={"test"} setAudioFiles={"2"} />
  //           </CollapsibleView>

  //           <View>
  //             <Row>
  //               <Column></Column>
  //               {/* <Column onPress={onSubmit1} style = {{paddingLeft :150}}>
  //     <Text style = {{fontSize:30,fontWeight:"bold",textAlign:"center"}}>\/</Text>

  //     </Column> */}
  //               <Column style={{ paddingLeft: 150 }}></Column>
  //               <Column></Column>
  //             </Row>
  //           </View>
  //         </View>

  //         <View height={100} />
  //         {/* add a submit button */}
  //       </ScrollView>
  //       <View style={{ bottom: 10, height: 50 }}>
  //         <Button color="success.600" onPress={onSubmit}>
  //           SUBMIT
  //         </Button>
  //       </View>
  //     </View>
  //   </>
  // );
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
