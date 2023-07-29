import React from 'react'
import {ChartComponent , SeriesCollectionDirective , SeriesDirective , Legend , Inject , DateTime , SplineAreaSeries } 
from '@syncfusion/ej2-react-charts'
import { areaPrimaryXAxis , areaPrimaryYAxis , areaCustomSeries } from '../../data/dummy'
import { Header } from '../../components'
//import { areaCustomSeries , areaPrimaryXAxis , areaPrimaryYAxis } from '../../data/dummy'

const Area = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
        <Header catagory="Page" title="Area"/>
         <ChartComponent height="420px" primaryXAxis = { areaPrimaryXAxis} primaryYAxis={areaPrimaryYAxis} >
           <Inject services={[ Legend , DateTime ,SplineAreaSeries]} />
           <SeriesCollectionDirective>
            { areaCustomSeries.map((item, index)=>(
                <SeriesDirective key={index} {...item} />
            ))}
           </SeriesCollectionDirective>
         </ChartComponent>
        </div>
  )
}

export default Area