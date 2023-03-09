import axios from "axios";
import React, { useState, useEffect } from "react";
import Recorder from "../utils/recorder";
import { WebView } from 'react-native-webview';
import Iframe from 'react-iframe';
import { Image, View } from 'react-native';
import {BarChart} from 'react-native-gifted-charts';
import {
  Text,

  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";
import { Button, Column, Row } from "native-base";
import CircularProgress from "react-native-circular-progress-indicator";

const Bar_graph = () => {
  const onSubmit = () => {

    navigation.navigate("Home");
  };
  const data = [
    {value: 2500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Jan'},
    {value: 2400, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 3500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Feb'},
    {value: 3000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 4500, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Mar'},
    {value: 4000, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 5200, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'Apr'},
    {value: 4900, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},

    {value: 3000, frontColor: '#006DFF', gradientColor: '#009FFF', spacing: 6, label:'May'},
    {value: 2800, frontColor: '#3BE9DE', gradientColor: '#93FCF8'},
  ];
  // create a array of "ab","bc","cd","de","ef"
  const arr = Array.from({ length: 20 }, (_, i) => String.fromCharCode(97 + i));
  return (
    <>
      <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center", margin: 10, color: "#ff5733" }}>Peak</Text>
      <ScrollView style={{ flex: 1 }}>
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
              <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                {arr[0]}
              </Text>
            </Column>
            <Column style={{ margin: 10 }}>
              <CircularProgress radius={28} value={58} />
              <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
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
              <Text style={{ fontSize: 20, fontWeight: "bold", textAlign: "center" }}>
                {arr[3]}
              </Text>
            </Column>
          </Row>
          <Text style={{ fontSize: 20, fontWeight: "bold" }}>
            You Speak
          </Text>
          <Recorder
            key={1}
            text={"test"}
            setAudioFiles={"2"}
          />

        </View>

        <View height={200} >

        </View>
        <View height={225} >
          </View>

          <View style={{padding: 20, alignItems: 'center'}}>
        <BarChart
          data={data}
          barWidth={16}
          initialSpacing={10}
          spacing={14}
          barBorderRadius={4}
          showGradient
          yAxisThickness={0}
          xAxisType={'dashed'}
          xAxisColor={'lightgray'}
          yAxisTextStyle={{color: 'lightgray'}}
          stepValue={1000}
          maxValue={6000}
          noOfSections={6}
          yAxisLabelTexts={['0', '1k', '2k', '3k', '4k', '5k', '6k']}
          labelWidth={40}
          xAxisLabelTextStyle={{color: 'lightgray', textAlign: 'center'}}
          showLine
          lineConfig={{
            color: '#F29C6E',
            thickness: 3,
            curved: true,
            hideDataPoints: true,
            shiftY: 20,
            initialSpacing: -30,
          }}
        />
        </View>
        <View >


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
