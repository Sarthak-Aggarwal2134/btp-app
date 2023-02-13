import axios from "axios";
import React, { useState, useEffect } from "react";
import Recorder from "../utils/recorder";
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Button, Column, Row } from "native-base";
import CircularProgress from "react-native-circular-progress-indicator";

const Results_present = ({ route, navigation }) => {
  const onSubmit = () => {
  
    navigation.navigate("Video_page");
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
            <CircularProgress radius={38} value={58} activeStrokeColor={'#f39c12'} />
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
      </View>
      
      <View height={10} />
      <Text style={{fontSize:20,fontWeight:"bold",textAlign:"center",margin:10,color: "#ff5733"}}>Beak</Text>

      <View style={styles.container}>
      <Row>
          {/* make 5 columns having "hello" in each column */}
          <Column style={{ margin: 10 }}>
            <CircularProgress radius={38} value={58} activeStrokeColor={'#f39c12'} />
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
