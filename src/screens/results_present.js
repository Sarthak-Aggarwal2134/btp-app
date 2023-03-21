import axios from "axios";
import React, { useState, useEffect } from "react";
import Recorder from "../utils/recorder";
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
import { Rating, AirbnbRating } from 'react-native-ratings';
import Bar_graph from "./results_graph";
import Graph from "./Line_Graph_component";
const Results_present = ({ route, navigation }) => {
  // variable set to 0
  console.log(route.params.data)
  var check=route.params.data._parts[0][1]
  // console.log(check)
  var fir = 0
  var sec = 0
  const onSubmit = () => {
    //  chewck if the category is phoneme, then redirect it to the phoneme page
    if(check=="phenome"){
      navigation.navigate("Phoneme");
    }
    //  chewck if the category is stress, then redirect it to the stress page
    else if(check=="stress"){
      navigation.navigate("Result_graph_1");
    }
    //  chewck if the category is intonation, then redirect it to the intonation page
    else if(check=="intonation"){
      navigation.navigate("Result_graph_2");
    }
    //  chewck if the category is sentence, then redirect it to the sentence page
    else if(check=="sentence"){
      navigation.navigate("Fluency");
    }
  };
  const onSubmit1 = () => {
    fir = 1-fir
  };
  const onSubmit2 = () => {
    sec = 1-sec
  };

  

    // create a array of "ab","bc","cd","de","ef"
    const arr = Array.from({ length: 20 }, (_, i) => String.fromCharCode(97 + i));
      return (
    


        <>
              <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",margin:10,color: "#ff5733"}}>Peak</Text>
          <ScrollView style={{flex:1}}>
          <View style={styles.container}>
            <Row>
              {/* make 5 columns having "hello" in each column */}
              <Column style={{ margin: 10 }}>
                {/* <CircularProgress radius={38} value={58} activeStrokeColor={'#f39c12'} /> */}
                {/* rating = 0.6 */}
                <Text style={{ fontSize: 10, fontWeight: "bold" ,textAlign: "center" }}>
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
                <Row>
                    {/* show the first element of the array */}
                    
                </Row>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center" }}>
                        {arr[0]}
                    </Text>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center"}}>
                        {arr[1]}
                    </Text>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                        {arr[2]}
                    </Text>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold",textAlign: "center" }}>
                        {arr[3]}
                    </Text>
              </Column>
            </Row>
            <Text style={{fontSize:20 ,fontWeight:"bold"}}>
                You Speak
            </Text>
            <Recorder
                      key={1}
                      text={"test"}
                      setAudioFiles={"2"}
                    />
            <Text style={{fontSize:20 ,fontWeight:"bold"}}>
                Expert Speak
            </Text>
            <Recorder
                      key={1}
                      text={"test"}
                      setAudioFiles={"2"}
                    />
    
          <View >
            <Row >
              <Column></Column>
              {/* <Column onPress={onSubmit1} style = {{paddingLeft :150}}>
        <Text style = {{fontSize:30,fontWeight:"bold",textAlign:"center"}}>\/</Text>  
    
        </Column> */}
        <Column style = {{paddingLeft:150}}>
        <Button colorScheme="primary" variant="subtle" onPress={onSubmit1}>
      
\/
                </Button>
                </Column>
        <Column></Column>
     
        </Row> 
          </View>
          </View>
    
    
          <View height={10} />
          <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",margin:10,color: "#ff5733"}}>Beak</Text>
    
          <View style={styles.container}>
          <Row>
              {/* make 5 columns having "hello" in each column */}
              <Column style={{ margin: 10 }}>
                <Text style={{ fontSize: 10, fontWeight: "bold" ,textAlign: "center" }}>
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
                <Row>
                    {/* show the first element of the array */}
                    
                </Row>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center" }}>
                        {arr[0]}
                    </Text>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold" ,textAlign: "center"}}>
                        {arr[1]}
                    </Text>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                        {arr[2]}
                    </Text>
              </Column>
              <Column style={{ margin: 10 }}>
                <CircularProgress radius={28} value={58} />
                <Text style={{ fontSize: 20, fontWeight: "bold",textAlign: "center" }}>
                        {arr[3]}
                    </Text>
              </Column>
            </Row>
        
                     <View >
            <Row >
              <Column></Column>
              {/* <Column onPress={onSubmit1} style = {{paddingLeft :150}}>
        <Text style = {{fontSize:30,fontWeight:"bold",textAlign:"center"}}>\/</Text>  
    
        </Column> */}
        <Column style = {{paddingLeft:150}}>
        <Button colorScheme="primary" variant="subtle" onPress={onSubmit2}>
                  \/
                </Button>
                </Column>
        <Column></Column>
     
        </Row> 
          </View>
    
                    <Button color="success.600" onPress={onSubmit}>
                  SUBMIT
                </Button>
          </View>
    
          <View height={100} />
          {/* add a submit button */}
          
          <ScrollView horizontal={true} style={styles.horContainter}>
            {arr.map((item, index) => (
                <TouchableOpacity
                    key={index}
                    style={styles.lesson}
                    onPress={() => {
                        console.log("pressed");
                    }}
                >
                    <Text style={styles.lessonText}>{item}</Text>
                </TouchableOpacity>
            ))}
    
    
          </ScrollView>
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
