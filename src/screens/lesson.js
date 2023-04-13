import axios from "axios";
import React, { useState, useEffect } from "react";
import global from "../global"
import Consoleuri from "../consoleuri"
import {
  Text,
  View,
  ScrollView,
  StyleSheet,
  TouchableOpacity,
} from "react-native";

import { Button } from "native-base";

import Recorder from "../utils/recorder";
import Category from "./category";

const mapping = {
  1: "phenome",
  2: "stress",
  3: "intonation",
  4: "sentence",
};


const Lesson = ({ route, navigation }) => {

  const [loading, setLoading] = useState(true);
  const [recordedURIs, setRecordedURIs] = useState("");
  const [questions, setQuestions] = useState({});
  const [selectedQuestion, setSelectedQuestion] = useState({});
  const [audioFiles, setAudioFiles] = useState([]);
  // append the recordedURI1 to the audioFiles array
  useEffect(() => {
    const { lessonId, categoryId } = route.params;
    // console.log("xd",lessonId)
    const data = { id: lessonId };
    // console.log("hehe",data);
    axios
      .post("https://asr.iiit.ac.in/chiranjeevi/voisserve/get/questions", data)
      .then((res) => {
        setQuestions(res.data.questions);
        setSelectedQuestion(Object.keys(res.data.questions)[0]);

        setLoading(false);
      })
      .catch((err) => console.log(err.response));
  }, [route.params]);

  // append recordedURIs to audio files
  useEffect(() => {
    setAudioFiles(Object.values(recordedURIs));
  }, [recordedURIs]);
  // console.log("bla bla",questions[selectedQuestion].pattern);

  const onSubmit = () => {
    var data = new FormData();
    // console.log(mapping[route.params]);
    // console.log(route)
    // console log the questions
    // console.log("bla bla",questions);
    data.append("cattype", mapping[route.params.categoryId]);
    data.append("mode", "submitrecording");
    let ids = [];
    let names=[];
    questions[selectedQuestion].forEach((text) => {
      ids.push(text.id);
      names.push(text.pattern);
    });
    data.append("id", ids);
    //  add questions to the data object
    // console.log("questions", questions[selectedQuestion]);
    data.append("questions", questions[selectedQuestion]);
    //  append the names to the data
    data.append("names", names);
    // navigation.navigate("Results_present");
    // navigate to result page and pass data
    console.log(audioFiles)
    navigation.navigate("Results_present", {
      data: data,
      audioFiles: audioFiles,
    });
  };

  return (
    <View style={styles.container}>
      {!loading && (
        <>
          <View style={styles.lessonContainer}>
            <View style={styles.lessonHeader}>
              <Text>
                {selectedQuestion} of {Object.keys(questions).length}
              </Text>
              {questions[selectedQuestion].map((text, index) => {
                console.log("ID:",text.id);
                return <Recorder
                  key={text.id}
                  text={text}
                  count={questions[selectedQuestion].length}
                  setRecordedURI={setRecordedURIs}
                  recordedURI={recordedURIs}
                />
              })}
              {console.log(audioFiles)}
            </View>
            <Button color="success.600" onPress={onSubmit}>
              SUBMIT
            </Button>
          </View>
          <ScrollView horizontal={true} style={styles.horContainter}>
            {Object.keys(questions).map((question) => {
              return (
                <TouchableOpacity
                  key={question}
                  style={styles.lesson}
                  onPress={() => setSelectedQuestion(question)}
                >
                  <Text
                    style={
                      question == selectedQuestion
                        ? styles.selectedLessonText
                        : styles.lessonText
                    }
                  >
                    {question}
                  </Text>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    backgroundColor: "#E5E4E2",
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

export default Lesson;
