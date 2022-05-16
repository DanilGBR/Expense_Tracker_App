import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
  const dataValues = props.chartData.map((data) => data.value);
  const maxChart = Math.max(...dataValues);
  return (
    <div className='chart'>
      {props.chartData.map((data) => (
        <ChartBar
          key={data.label}
          value={data.value}
          maxValue={maxChart}
          label={data.label}
        />
      ))}
    </div>
  );
};

export default Chart;
