import React from 'react'
import {HtmlEditor , Image ,Link , Inject ,QuickToolbar ,Toolbar ,RichTextEditorComponent } from '@syncfusion/ej2-react-richtexteditor'
import { EditorData } from '../data/dummy'
import { Header } from '../components'

const Editor = () => {
  return (
    <div className='m-2 md-m-10 p02 md:p-10 bg-white rounded-3xl'>
    <Header catagory="App" title="Editor"/>
    <RichTextEditorComponent>
      <Inject services={[Image ,Link , HtmlEditor ,QuickToolbar , Toolbar ]} />
      <EditorData />
    </RichTextEditorComponent>
    </div>
  )
}

export default Editor