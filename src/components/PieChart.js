import React, { useContext } from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title} from 'chart.js';
import { Pie } from 'react-chartjs-2';
import { AppContext } from './AppContext';

ChartJS.register(ArcElement, Tooltip, Legend ,Title);

var defaultData = [12, 19, 3, 5, 2, 3]



export default function PieChart(props) {
    const data = {
     
        labels: props.labels || [],
        datasets: [
          {
            
            data: props.data ? props.data : defaultData,
            backgroundColor: [
              'rgba(20, 155, 11, 1)',
              'rgba(255, 99, 132, 1)',
             
             
            ],
            borderColor: [
                'rgba(0,0,0,1)',
                'rgba(0,0,0,1)',
         
            ],
            borderWidth: 1.5,
         
          },
        ],
      };

      const options = {
        plugins: {
            title: {
                display: true,
                text: props.title || "",

            },
            tooltip: {
                callbacks: {
                    label: function(context) {
                        let label = context.dataset.label || '';

                        if (label) {
                            label += ': ';
                        }
                        if (context.parsed !== null) {
                            label += context.parsed + "%"
                        }
                        return label;
                    }
                }
            }
          
            
        },
      
        
    }




  return <Pie  data={data} options={options} />;
}
