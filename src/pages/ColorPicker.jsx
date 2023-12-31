import React from 'react'
import {ColorPickerComponent} from '@syncfusion/ej2-react-inputs'
import { Header } from '../components'

const ColorPicker = () => {
  const change = (args) => {
    document.getElementById('preview').style.backgroundColor= args.currentValue.hex;
  }
  return (
    <div className='m-2 md-m-10 p02 md:p-10 bg-white rounded-3xl'>
    <Header catagory="App" title="Color Picker"/>
    <div className='text-center'>
      <div id="preview">
        <div className='flex justify-between items-center gap-20 flex-wrap'>
          <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Pallete</p>
    <ColorPickerComponent id="inline-pallete" mode="pallete" modeSelection={false} inline showButtons={false} 
    change={change} />
    </div>
    <div>
            <p className='text-2xl font-semibold mt-2 mb-4'>Inline Picker</p>
    <ColorPickerComponent id="inline-picker" mode="picket" modeSelection={false} inline showButtons={false} 
    change={change} />
    </div>
        </div>
        
      </div>
    </div>
    </div>
  )
}

export default ColorPicker