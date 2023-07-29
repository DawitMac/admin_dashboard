import React from 'react'
import {ChartComponent , SeriesCollectionDirective , SeriesDirective , Legend , Inject , DateTime , LineSeries ,Tooltip } 
from '@syncfusion/ej2-react-charts'
import { LinePrimaryXAxis , LinePrimaryYAxis , lineCustomSeries } from '../../data/dummy'
import { Header } from '../../components'

const Line = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
        <Header catagory="Page" title="Line"/>
         <ChartComponent height="420px" primaryXAxis = { LinePrimaryXAxis} primaryYAxis={LinePrimaryYAxis} 
         tooltip={{enable:true}} >
           <Inject services={[ Legend ,DateTime ,LineSeries , Tooltip]} />
           <SeriesCollectionDirective>
            { lineCustomSeries.map((item, index)=>(
                <SeriesDirective key={index} {...item} />
            ))}
           </SeriesCollectionDirective>
         </ChartComponent>
        </div>
  )
}

export default Line