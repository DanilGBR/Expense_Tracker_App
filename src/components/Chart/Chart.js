import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
  return (
    <div className='chart'>
      {props.chartData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={null}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
