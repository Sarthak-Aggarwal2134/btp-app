import axios from "axios";
import React, { useState, useEffect } from "react";
import { createStackNavigator } from "@react-navigation/stack";

import Category from "./category";
import Lesson from "./lesson";
import Results from "./results";
import Results_present from "./results_present";
import Video_page from "./video_page";
import Fluency from "./Fluency";
import Bar_graph from "./Bar_graph";
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
      {/* <CategoryStack.Screen name="Results">
        {(props) => <Results {...props} />}
      </CategoryStack.Screen> */}
      <CategoryStack.Screen name="Results_present">
        {(props) => <Results_present {...props} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Fluency">
        {(props) => <Fluency {...props} />}
      </CategoryStack.Screen>
      <CategoryStack.Screen name="Bar_graph">
        {(props) => <Bar_graph {...props} />}
      </CategoryStack.Screen>

    </CategoryStack.Navigator>
  );
}
