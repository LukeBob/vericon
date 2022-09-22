import React, { useRef, useEffect, useContext , useState} from 'react';
import { Bar } from 'react-chartjs-2';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { AppContext } from './AppContext';

  ChartJS.register(
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
  );



export default function BarChart() {


    const [data, ] = useContext(AppContext);
    const [labels, setLabels] = useState([])
    const [data1, setData1] = useState([])
    const [data2, setData2] = useState([])
    const [data3, setData3] = useState([])
    const [data4, setData4] = useState([])
   
    useEffect(() => {
        if (data) {
            let arr = []
            let d1 = []
            let d2 = []
            let d3 = []
            let d4 = []
            data.map((item) => {
                arr.push(item.type);
                d1.push(item.percent.online)
                d2.push(item.percent.offline)
                d3.push(item.percent.failed)
                d4.push(item.percent.notFailed)
            })
            setLabels(arr)
            setData1(d1)
            setData2(d2)
            setData3(d3)
            setData4(d4)
        }
    }, [data])
    

    const d = {
        labels: labels ? labels : [""],
        datasets: [{
          label: 'online',
          data: data1 ? data1 : [""],
          backgroundColor: [
            'rgba(20, 155, 11, 1)',
            'rgba(20, 155, 11, 1)',
            'rgba(20, 155, 11, 1)',
          ],
          borderColor: [
            'rgba(20, 155, 11, 1)',
            'rgba(20, 155, 11, 1)',
            'rgba(20, 155, 11, 1)',
           
          ],
          borderWidth: 1
        },
        {
            label: 'offline',
            data: data2 ? data2 : [""],
            backgroundColor: [
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',
              'rgba(255, 99, 132, 1)',

            ],
            borderColor: [
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
              'rgb(255, 99, 132)',
        
            ],
            borderWidth: 1
          },
        {
            label: 'failed',
            data: data3 ? data3 : [""],
            backgroundColor: [
              'rgba(255, 99, 12, 1)',
              'rgba(255, 99, 12, 1)',
              'rgba(255, 99, 12, 1)',

            ],
            borderColor: [
              'rgba(255, 99, 12, 1)',
              'rgba(255, 99, 12, 1)',
              'rgba(255, 99, 12, 1)',
        
            ],
            borderWidth: 1
          },
        {
            label: 'OK',
            data: data4 ? data4 : [""],
            backgroundColor: [
              'rgba(0, 205, 100, 1)',
              'rgba(0, 205, 100, 1)',
              'rgba(0, 205, 100, 1)',

            ],
            borderColor: [
              'rgba(0, 205, 100, 1)',
              'rgba(0, 205, 100, 1)',
              'rgba(0, 205, 100, 1)',
        
            ],
            borderWidth: 1
          },
        ]
      };

      const options = {
        plugins: {
           
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed.y !== null) {
                            label += context.parsed.y + "%"
                        }
                        return label;
                    }
                }
            }
          
            
        },
      
        
    }

    return (
        <Bar options={options}  data={d}/>
    )
}
