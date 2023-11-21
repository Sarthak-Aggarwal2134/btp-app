import React from "react";
import { View } from "native-base";
import { VictoryChart, VictoryGroup, VictoryLegend, VictoryAxis, VictoryBar } from "victory-native";
import { Dimensions } from "react-native";

const Bargraph = (props) => {
    const xCoordinates = props.x_corr;
    const yCoordinates = props.y_corr;
    const labels = props.labels[0];
    
    let length = xCoordinates[0].length;

    const prepareData = (arrX, arrY) => {
        let preparedData = [];
        for (let i = 0; i < length; i++) {
            arrX[0][i] = parseFloat(arrX[0][i]) + 0.5;
            arrY[0][i] = parseFloat(arrY[0][i]);
            preparedData.push({ x: i+0.5, y: arrY[0][i] });
        }
        return preparedData;
    };

    const dataPart1 = prepareData(xCoordinates, yCoordinates);
    const dataPart2 = [...dataPart1]; 

    return (
        <View>
            <VictoryChart>
                <VictoryAxis
                    label="syllable"
                    tickValues={dataPart1.map(dataPoint => dataPoint.x)}
                    tickFormat={labels}
                    style={{
                        // grid: {
                        //     stroke: "grey"  // Grey lines perpendicular to x-axis
                        // }
                    }}
                />
                <VictoryAxis
                    dependentAxis
                    label="score"
                    style={{
                        axisLabel: {
                            padding: 30
                        },
                        grid: {
                            stroke: "#d3d3d3"  // Lighter shade of grey for lines perpendicular to y-axis
                        }
                    }}
                />
                <VictoryGroup offset={20}>
                    <VictoryBar 
                        data={dataPart1} 
                        style={{ data: { fill: "blue" }, barWidth: 20 }}
                    />
                    <VictoryBar 
                        data={dataPart2} 
                        style={{ data: { fill: "orange" }, barWidth: 20 }}
                    />
                </VictoryGroup>
                <VictoryLegend 
                    x={(Dimensions.get("window").width / 2) - 50}
                    gutter={20}
                    data={[
                        {
                            name: "User",
                            symbol: { fill: "blue" },
                        },
                        {
                            name: "Expert",
                            symbol: { fill: "orange" },
                        },
                    ]}
                />
            </VictoryChart>
        </View>
    );
};

export default Bargraph;
