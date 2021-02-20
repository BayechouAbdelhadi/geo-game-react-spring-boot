import React from 'react';
import { useEffect, useState } from 'react';
import {useSelector} from 'react-redux';
import { Line } from 'react-chartjs-2';

export default function ChartTest({parts}) {
    const [ dataChart, setDataChart ] = useState ( {} );
  useEffect(() => {
        let scores = [];
        let dateParts = [];
            for ( let part of parts ) {
              scores.push(part.score);
              let tempDate = new Date (part.created_At);
              dateParts.push(tempDate.toLocaleDateString());
            }
        setDataChart({ 
          labels: dateParts, 
          datasets: [{ 
            label: 'Your evolution', 
            data: scores 
          }]
        });
    }, []);
    return( 
      <div className='container'>
        <Line data={ dataChart }/> 
      </div>
    )
  }