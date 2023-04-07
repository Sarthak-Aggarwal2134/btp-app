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
  var check = route.params.data._parts[0][1];
  const [responses, setResponses] = useState([]);
  useEffect(() => {
    const APICall = async () => {
      for (var i = 0; i < route.params.audioFiles.length; i++) {
      const data = new FormData();
      let fileName = route.params.data._parts[0][1];
      fileName = fileName.charAt(0).toUpperCase() + fileName.slice(1);
      if (fileName == "Stress") {
        fileName = `Stress\_L1\_${i+2}_8.wav`;
      }
      else if (fileName == "Phenome") {
        fileName = `Phoneme\_L1\_1\-${i+1}_8.wav`;
      }
      else if (fileName == "Intonation") {
        fileName = `Intonation\_L1\_${i+2}_8.wav`;
      }
      else if (fileName == "Sentence") {
        fileName = `Sentence\_L1\_${i+2}_8.wav`;
      }
      console.log(fileName);
      data.append("audioFiles", {
        uri: route.params.audioFiles[i],
        type: "audio/wav",
        name: `${fileName}`,
      });
      let cattype = route.params.data._parts[0][1];
      if (cattype == "phenome") {
        cattype = "phoneme";
      }
      data.append("cattype", cattype);
      data.append("mode", "submitrecording");
      data.append("id", route.params.data._parts[2][1][0].toString(10));
        await fetch(
          "https://asr.iiit.ac.in/chiranjeevi/voisserve/post/submit",
          {
            method: "POST",
            body: data,
          }
        )
          .then((res) => {
            console.log(res.status);
            // console.log(data.results.PhonemePronunciationScores);

            return res.json();
          })
          .then((data) => {
            // size of data.results
             
            // console.log(data.results)
            setResponses((responses) => [...responses, data]);
            // total number of responses
            console.log("responses",responses);

            setLoading(false);
          })
          .catch((err) => console.log(err.response));
      };
    }
    
    APICall();
  }, []);

// console.log(responses) gives [{"results": {"PhonemePronunciationScores": [Array], "WordPronunciationScore": [Array], "colors": [Array], "expertAudios": [Array], "phonemeletters": [Array], "userAudios": [Array], "videos": [Array]}}, {"results": {"PhonemePronunciationScores": [Array], "WordPronunciationScore": [Array], "colors": [Array], "expertAudios": [Array], "phonemeletters": [Array], "userAudios": [Array], "videos": [Array]}}]


  // console.log(check)
  var fir = 0;
  var sec = 0;
  const [controlledValue, setControlledValue] = useState(false);

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
  // create a array of "ab","bc","cd","de","ef"
  const arr = Array.from({ length: 20 }, (_, i) => String.fromCharCode(97 + i));
   
  // if the loading is true, then show the loading screen
  if (loading) {

    return(
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <Text>Loading...</Text>
      </View>


    )
  }
  // if the loading is false, then show the results screen
  else{



  return (
    <>

      <View style={{ height: "100%" }}>
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
        {
          responses.map((response, index) => {
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
          })
        }
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

          <View height={10} />
          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              textAlign: "center",
              margin: 10,
              color: "#ff5733",
            }}
          >
            Beak
          </Text>

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
                  Rating = 0.4
                </Text>
                <Rating
                  type="star"
                  ratingCount={1}
                  fractions={10}
                  startingValue={0.4}
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

          <View height={100} />
          {/* add a submit button */}
        </ScrollView>
        <View style={{ bottom: 10, height: 50 }}>
          <Button color="success.600" onPress={onSubmit}>
            SUBMIT
          </Button>
        </View>
      </View>
    </>
  );
};
}

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

// import axios from "axios";
// import React, { useState, useEffect } from "react";
// import Recorder from "../utils/recorder";
// import {
//   Text,
//   View,
//   ScrollView,
//   StyleSheet,
//   TouchableOpacity,
//   Image,
// } from "react-native";
// import drop from "./drop.png"
// import { Button, Column, Row } from "native-base";
// import CircularProgress from "react-native-circular-progress-indicator";
// import { Rating, AirbnbRating } from 'react-native-ratings';
// import Bar_graph from "./results_graph";
// import Graph from "./Graph";

// const Results_present = ({ route, navigation }) => {
//   // variable set to 0
//   var fir = 0
//   var sec = 0
//   const onSubmit = () => {

//     navigation.navigate("Bar_graph");
//   };
//   const onSubmit1 = () => {
//     fir = 1-fir
//   };
//   const onSubmit2 = () => {
//     sec = 1-sec
//   };

//     // create a array of "ab","bc","cd","de","ef"
//     const arr = Array.from({ length: 20 }, (_, i) => String.fromCharCode(97 + i));
//       return (

//         <>
//               <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",margin:10,color: "#ff5733"}}>Peak</Text>
//           <ScrollView style={{flex:1}}>
//           <View style={styles.container}>
//             <Row>
//               {/* make 5 columns having "hello" in each column */}
//               <Column style={{ margin: 10 }}>
//                 {/* <CircularProgress radius={38} value={58} activeStrokeColor={'#f39c12'} /> */}
//                 {/* rating = 0.6 */}
//                 <Text style={{ fontSize: 10, fontWeight: "bold" ,textAlign: "center" }}>
//                 Rating = 0.6
//                     </Text>
//                 <Rating
//                   type="star"
//                   ratingCount={1}
//                   fractions={10}
//                   startingValue={0.6}
//                   imageSize={40}
//                   // showRating
//                   style={{ paddingVertical: 10 }}
//                 />
//                 <Row>
//                     {/* show the first element of the array */}

//                 </Row>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center" }}>
//                         {arr[0]}
//                     </Text>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center"}}>
//                         {arr[1]}
//                     </Text>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
//                         {arr[2]}
//                     </Text>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold",textAlign: "center" }}>
//                         {arr[3]}
//                     </Text>
//               </Column>
//             </Row>
//             <Text style={{fontSize:20 ,fontWeight:"bold"}}>
//                 You Speak
//             </Text>
//             <Recorder
//                       key={1}
//                       text={"test"}
//                       setAudioFiles={"2"}
//                     />
//             <Text style={{fontSize:20 ,fontWeight:"bold"}}>
//                 Expert Speak
//             </Text>
//             <Recorder
//                       key={1}
//                       text={"test"}
//                       setAudioFiles={"2"}
//                     />

//           <View >
//             <Row >
//               <Column></Column>
//               {/* <Column onPress={onSubmit1} style = {{paddingLeft :150}}>
//         <Text style = {{fontSize:30,fontWeight:"bold",textAlign:"center"}}>\/</Text>

//         </Column> */}
//         <Column style = {{paddingLeft:150}}>
//         <Button color="white.600" onPress={onSubmit1}>
// \/
//                 </Button>
//                 </Column>
//         <Column></Column>

//         </Row>
//           </View>
//           </View>

//           <View height={10} />
//           <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",margin:10,color: "#ff5733"}}>Beak</Text>

//           <View style={styles.container}>
//           <Row>
//               {/* make 5 columns having "hello" in each column */}
//               <Column style={{ margin: 10 }}>
//                 <Text style={{ fontSize: 10, fontWeight: "bold" ,textAlign: "center" }}>
//                 Rating = 0.4
//                     </Text>
//                 <Rating
//                   type="star"
//                   ratingCount={1}
//                   fractions={10}
//                   startingValue={0.4}
//                   imageSize={40}
//                   // showRating
//                   style={{ paddingVertical: 10 }}
//                 />
//                 <Row>
//                     {/* show the first element of the array */}

//                 </Row>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center" }}>
//                         {arr[0]}
//                     </Text>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center"}}>
//                         {arr[1]}
//                     </Text>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
//                         {arr[2]}
//                     </Text>
//               </Column>
//               <Column style={{ margin: 10 }}>
//                 <CircularProgress radius={28} value={58} />
//                 <Text style={{ fontSize: 20, fontWeight: "bold",textAlign: "center" }}>
//                         {arr[3]}
//                     </Text>
//               </Column>
//             </Row>
//             <Text style={{fontSize:20 ,fontWeight:"bold"}}>
//                 You Speak
//             </Text>
//             <Recorder
//                       key={1}
//                       text={"test"}
//                       setAudioFiles={"2"}
//                     />
//             <Text style={{fontSize:20 ,fontWeight:"bold"}}>
//                 Expert Speak
//             </Text>
//             <Recorder
//                       key={1}
//                       text={"test"}
//                       setAudioFiles={"2"}
//                     />
//                      <View >
//             <Row >
//               <Column></Column>
//               {/* <Column onPress={onSubmit1} style = {{paddingLeft :150}}>
//         <Text style = {{fontSize:30,fontWeight:"bold",textAlign:"center"}}>\/</Text>

//         </Column> */}
//         <Column style = {{paddingLeft:150}}>
//         <Button color="white.600" onPress={onSubmit2}>
//                   \/
//                 </Button>
//                 </Column>
//         <Column></Column>

//         </Row>
//           </View>

//                     <Button color="success.600" onPress={onSubmit}>
//                   SUBMIT
//                 </Button>
//           </View>

//           <View height={100} />
//           {/* add a submit button */}

//           <ScrollView horizontal={true} style={styles.horContainter}>
//             {arr.map((item, index) => (
//                 <TouchableOpacity
//                     key={index}
//                     style={styles.lesson}
//                     onPress={() => {
//                         console.log("pressed");
//                     }}
//                 >
//                     <Text style={styles.lessonText}>{item}</Text>
//                 </TouchableOpacity>
//             ))}

//           </ScrollView>
//           </ScrollView>
//         </>
//       );
//     };

//     const styles = StyleSheet.create({
//       container: {
//         flex: 1,
//         padding: 10,
//         backgroundColor: "#fff",
//       },
//       lessonContainer: {
//         flex: 1,
//       },
//       lessonHeader: {
//         justifyConent: "space-between",
//       },
//       horContainter: {
//         backgroundColor: "#fff",
//         position: "absolute",
//         bottom: 5,
//         marginLeft: 5,
//       },
//       lesson: {
//         height: 50,
//         width: 50,
//         justifyContent: "center",
//         alignItems: "center",
//         margin: 1,
//         backgroundColor: "#71797E",
//       },
//       lessonText: {
//         color: "white",
//       },
//       selectedLessonText: {
//         color: "white",
//         fontWeight: "bold",
//         textDecorationLine: "underline",
//         fontSize: 18,
//       },
//     });

// export default Results_present;
