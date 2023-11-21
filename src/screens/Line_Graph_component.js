import React from "react";
import { View } from "native-base";
import { VictoryChart, VictoryLegend, VictoryAxis, VictoryLine } from "victory-native";
import { Dimensions } from "react-native";

const Line_Graph = (props) => {
    const xCoordinates = props.x_corr;
    const yCoordinates = props.y_corr;
    const labels = props.labels[0];

    let length = xCoordinates[0].length;

    const prepareData = (arrX, arrY) => {
        let preparedData = [];
        for (let i = 0; i < length; i++) {
            arrX[0][i] = parseFloat(arrX[0][i]) + 0.5;
            arrY[0][i] = parseFloat(arrY[0][i]);
            preparedData.push({ x: i, y: arrY[0][i] });
        }
        return preparedData;
    };

    const dataPart1 = prepareData(xCoordinates, yCoordinates);

    return (
        <View>
            <VictoryChart>
                <VictoryAxis
                    label="syllable"
                    tickValues={dataPart1.map(dataPoint => dataPoint.x)}
                    tickFormat={labels}
                    style={{
                        grid: {
                            stroke: "grey"  // This adds the grey lines perpendicular to x-axis
                        }
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
                <VictoryLine 
                    data={dataPart1} 
                    style={{ data: { stroke: "blue", strokeWidth: 2 }}}
                />
                <VictoryLegend 
                    x={(Dimensions.get("window").width / 2) - 50}
                    gutter={20}
                    data={[
                        {
                            name: "User",
                            symbol: { fill: "blue" },
                        },
                    ]}
                />
            </VictoryChart>
        </View>
    );
};

export default Line_Graph;
