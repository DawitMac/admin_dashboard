import React from 'react'
import { ChartComponent, SeriesCollectionDirective , SeriesDirective , Inject , Category , DataLabel ,Tooltip ,Legend , ColumnSeries } from '@syncfusion/ej2-react-charts'
import { barCustomSeries , barPrimaryXAxis ,barPrimaryYAxis } from '../../data/dummy'
import { Header } from '../../components'
const Bar = () => {
  return (
    <div className='m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl'>
      <Header catagory="Page" title="Orders"/>
      <ChartComponent id="charts"
       primaryXAxis={barPrimaryXAxis}
       primaryYAxis={barPrimaryYAxis}
       tooltip={{enable:true}}
       chartArea={{border:{width:0}}}
       legendSettings={{ background : "white"}}
                       >
        <Inject services={[Tooltip, Legend , Category , DataLabel , ColumnSeries ,]} />
        <SeriesCollectionDirective>
          {barCustomSeries.map((item ,index)=>(
            <SeriesDirective key={index} {...item} />
          ))}
        </SeriesCollectionDirective>
      </ChartComponent>
    </div>
  )
}

export default Bar