import axios from "axios";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Category from "./category";
import Lesson from "./lesson";
import Results from "./results";
import Results_present from "./results_present";
import Video_page from "./phoneme";
// import Bar_graph from "./results_graph";
import Graph from "./Line_Graph_component";
import Result_graph_1 from "./results_graph";
import Result_graph_2 from "./results_graph2";
import Fluency from "./Fluency";
const CategoryStack = createStackNavigator();

export default function CategoryRouter({ category }) {
  return (
    <CategoryStack.Navigator screenOptions={{ headerShown: false }}>
      <CategoryStack.Screen name="Category">
        {(props) => <Category {...props} category={category} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Lesson">
        {(props) => <Lesson {...props} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Results_present">
        {(props) => <Results_present {...props} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Phoneme">
        {(props) => <Video_page {...props} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Result_graph_1">
        {(props) => <Result_graph_1 {...props} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Result_graph_2">
        {(props) => <Result_graph_2 {...props} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Fluency">
        {(props) => <Fluency {...props} />}
      </CategoryStack.Screen>

    </CategoryStack.Navigator>
  );
}
