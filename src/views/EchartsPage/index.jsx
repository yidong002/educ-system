/* eslint-disable react/react-in-jsx-scope */
import * as echarts from 'echarts';
import { useEffect } from 'react'
const EchartsDemo = () => {
  useEffect(() => {
    // 基于准备好的dom，初始化echarts实例
    var myChart = echarts.init(document.getElementById('echarts'));
    // 绘制图表
    myChart.setOption({
      title: {
        text: 'ECharts 入门示例'
      },
      tooltip: {},
      xAxis: {
        data: ['衬衫', '羊毛衫', '雪纺衫', '裤子', '高跟鞋', '袜子']
      },
      yAxis: {},
      series: [
        {
          name: '销量',
          type: 'bar',
          data: [5, 20, 36, 10, 10, 20]
        }
      ]
    });
    return () => {
      
    };
  }, []);
  return (
    <div id='echarts' style={{width: '200px', height: '300px'}}></div>
  )
}


export default EchartsDemo;