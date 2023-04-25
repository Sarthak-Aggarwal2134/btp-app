import React, { useState, useRef, useEffect } from "react";
import { Text, View, StyleSheet } from "react-native";
import { Audio } from "expo-av";
import moment from "moment";
//  import the global variable
import global from "../global";
import { LinearGradient } from "expo-linear-gradient";

import { Input, Slider, IconButton } from "native-base";
import { Icon } from "react-native-gradient-icon";
import { useSelector,useDispatch } from "react-redux";
import { setURI1,setURI2 } from "../redux/actions";
import { FontAwesome5 } from "@expo/vector-icons";
import Filler from "./filler";
// make a variable for exporting the uri which can be used in the next screen
// import phoneme audio wav file from the assets folder


export default function Recorder_After({ key, text, count, recordedURI, setRecordedURI }) {
  const {URI1,URI2}=useSelector(state=>state.uri_reducer);
  const dispatch=useDispatch();
  const AudioRecorder = useRef(new Audio.Recording());
  const AudioPlayer = useRef(new Audio.Sound());

  // States for UI
  const [AudioPermission, SetAudioPermission] = useState(false);
  const [IsRecording, SetIsRecording] = useState(false);
  const [IsPLaying, SetIsPLaying] = useState(false);
  const [recorded, setRecorded] = useState(false);
  const [startTime, setStartTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [results, setResults] = useState(false);

  // Initial Load to get the audio permission

  // Function to play the recorded audio
  const PlayRecordedAudio = async () => {
    try {
      // Load the Recorded URI
      await AudioPlayer.current.loadAsync({ uri: recordedURI }, {}, true);
      console.log('lolololol',recordedURI)

      // Get Player Status
      const playerStatus = await AudioPlayer.current.getStatusAsync();

      // Play if song is loaded successfully
      if (playerStatus.isLoaded) {
        if (playerStatus.isPlaying === false) {
          AudioPlayer.current.playAsync();
          SetIsPLaying(true);
        }
      }
    } catch (error) {}
  };

  // Function to stop the playing audio
  const StopPlaying = async () => {
    try {
      //Get Player Status
      const playerStatus = await AudioPlayer.current.getStatusAsync();

      // If song is playing then stop it
      if (playerStatus.isLoaded === true)
        await AudioPlayer.current.unloadAsync();

      SetIsPLaying(false);
    } catch (error) {}
  };

  console.log("Key Id:", key, text);
  return (
    <View style={styles.question}>

        <>
          <View style={styles.questionHeader}>
            <Text style={styles.questionText}>{text.pattern}</Text>
          </View>
          <View style={styles.questionFooter}>
            <IconButton
              _icon={{
                as: FontAwesome5,
                name: IsPLaying ? "pause" : "play-circle",
                size: 6,
              }}
              onPress={IsPLaying ? StopPlaying : PlayRecordedAudio}
              style={{ marginRight: 15 }}
            />
            <Slider
              maxW="230"
              defaultValue={0}
              minValue={0}
              maxValue={duration}
            >
              <Slider.Track>
                <Slider.FilledTrack />
              </Slider.Track>
              <Slider.Thumb />
            </Slider>
            <Text style={styles.timerText}>
              {moment(Math.trunc(duration - 19800000, "milliseconds")).format(
                "mm:ss"
              )}
            </Text>
          </View>
        </>
  </View>
  )
}

const styles = StyleSheet.create({
  question: {
    justifyContent: "space-around",
    backgroundColor: "white",
    marginVertical: 10,
    padding: 7,
  },
  questionHeader: {
    flexDirection: "row",
    alignItems: "center",
    marginVertical: 10,
  },
  questionFooter: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  ratingComponent: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    margin: 20,
  },
  questionText: {
    marginLeft: 10,
    fontWeight: "bold",
    fontSize: 20,
  },
  recordingText: {
    marginLeft: 10,
    fontSize: 10,
    color: "red",
  },
  headingTextSlider: {
    marginLeft: 10,
  },
  linearGradient: {
    height: 30,
    width: 30,
  },
});
