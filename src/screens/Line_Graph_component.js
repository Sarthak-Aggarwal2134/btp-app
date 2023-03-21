import react from "react";
import { View } from "native-base";
import { VictoryChart, VictoryGroup, VictoryLegend, VictoryAxis, VictoryBar,VictoryLine } from "victory-native";
import { Dimensions } from "react-native";
const data={
    "part1":
    [
        {
            x:"jh aa",
            y:"0"
        },
        {
            x:"ni h |",
            y:"0"
        },
        {
            x:"bi y",
            y:"0.6"
        },
        {
            x:"hh ii r",
            y:"1"
        },
        {
            x:"s uw n",
            y:"0.6"
        },
    ]
}

const Line_Graph = () => {
    return (
        <View>
            <VictoryChart>
        <VictoryLine
        data = {data.part1}
        style={{
            data:{
                stroke:"orange",
                strokeWidth:3
            }
        }}

        />
        </VictoryChart>
        </View>
    );
    }   
export default Line_Graph;