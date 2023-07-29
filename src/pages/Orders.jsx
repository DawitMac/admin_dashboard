import React from 'react';
import { GridComponent, ColumnsDirective, ColumnDirective, Resize, Sort, ContextMenu, Filter, Page, ExcelExport, PdfExport, Edit, Inject } from '@syncfusion/ej2-react-grids';
import { contextMenuItems, categoriesGrid } from '../data/dummy';
import { Header } from '../components';
import { useQuery , gql } from '@apollo/client';

const GET_CATEGORIES = gql`
query{
allProductsPaginated{
  objects{
    id
    __typename
    stockAmount
    name
    status
    image
  }
}
}
`
const Orders = () => {
  const { error , loading ,data } = useQuery(GET_CATEGORIES)
  if(error){
    return(
      <h2>Something went wrong</h2>
    )
  }
  if(loading){
    return(
      <div className='flex justify-center h-screen'>
      <h2 className='text-3xl flex items-center text-gray-800'>Loading....</h2>
      </div>
    )
  }
  const categoriesData = data.allProductsPaginated.objects;
  const editing = { allowDeleting: true, allowEditing: true };
  console.log(error , loading , data)
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="Page" title="Orders" />
      <GridComponent
        id="gridcomp"
        dataSource={categoriesData}
        allowPaging
        allowSorting
        allowExcelExport
        allowPdfExport
        contextMenuItems={contextMenuItems}
        editSettings={editing}
      >
        <ColumnsDirective>
          {/* eslint-disable-next-line react/jsx-props-no-spreading */}
          {categoriesGrid.map((item, index) => <ColumnDirective key={index} {...item} />)}
        </ColumnsDirective>
        <Inject services={[Resize, Sort, ContextMenu, Filter, Page, ExcelExport, Edit, PdfExport]} />
      </GridComponent>
    </div>
  );
};
export default Orders;

/*
import React from 'react'
import {GridComponent , ColumnsDirective , ColumnDirective ,
Inject , Page , Filter ,Edit , Sort , ContextMenu ,ExcelExport , PdfExport} from '@syncfusion/ej2-react-grids'

import { ordersData , contextMenuItems ,ordersGrid } from '../data/dummy';
import { Header } from '../components';

const Orders = () => {
  return (
    <div className='m-2 md-m-10 p02 md:p-10 bg-white rounded-3xl'>
        <Header catagory="Page" title="Orders"/>
        <GridComponent>
          <ColumnsDirective id="gridComp" dataSource={ordersData} allowPaging allowSorting>
             {ordersGrid.map((item , index) => (
               <ColumnDirective key={index} {...item}  />
             ))}
          </ColumnsDirective>
          <Inject setvices={[Edit ,Sort , Page , ContextMenu ,ExcelExport ,PdfExport, Filter]} />
        </GridComponent>
    </div>
  )
}

export default Orders
*/