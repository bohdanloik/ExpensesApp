import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = (props) => {
    const dataPointValue = props.dataPoints.map(item => item.value);
    const totalMaximum = Math.max(...dataPointValue)
    return (
        <div className="chart">
            {props.dataPoints.map(dataPoint => (
            <ChartBar 
                value={dataPoint.value}
                key={dataPoint.label}
                label={dataPoint.label}
                maxValue={totalMaximum}
            />))}
        </div>
    )
}

export default Chart;