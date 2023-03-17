import react from "react";
import { View } from "native-base";
import { VictoryChart, VictoryGroup, VictoryLegend, VictoryAxis, VictoryBar } from "victory-native";
import { Dimensions } from "react-native";
const data={
    "part1":
    [
        {
            x:"aa",
            y:1
        },
        {
            x:"bb",
            y:2
        },
    ],
    part2:
    [
        {
            x:"aa",
            y:3
        },
        {
            x:"bb",
            y:4
        },
    ]
}

const Bargraph = () => {
    return (
        <View>
        <VictoryChart>
        <VictoryAxis label="syllable"/>
        <VictoryAxis dependentAxis label="score"
        style={{
            axisLabel:{
                padding:30
            }
        }}
        />
        <VictoryGroup offset={20}>
            <VictoryBar data={data.part1} style={
                {data:{
fill:"blue",

                }
            }}></VictoryBar>
            <VictoryBar data={data.part2} style={
                {data:{
fill:"orange",

                }
            }}></VictoryBar>
        </VictoryGroup>
        <VictoryLegend 
        x={(Dimensions.get("window").width/2)-50}
        gutter={20}
        data={[
            {
                name: "part1",
                symbol: {
                    fill: "blue",
                },
            },
            {
                name: "part2",
                symbol: {
                    fill: "orange",
                },
            },
        ]}/>
        </VictoryChart>
        </View>
    );
    }   
export default Bargraph;