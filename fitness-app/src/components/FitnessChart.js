import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';

class FitnessChart extends React.Component {
    render() {
        return (
            <LineChart width={400} height={400} data={this.props.data}>
                <Line type="monotone" dataKey="weight" stroke="#8884d8" />
                <CartesianGrid stroke="#ccc" />
                <XAxis dataKey="height" />
                <YAxis />
            </LineChart>
        );
    }
}

export default FitnessChart;
