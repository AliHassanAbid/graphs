import React, { useState } from 'react'
import Select from 'react-select'

export default function MySelect() {
    const [selectedOptions, setSelectedOptions] = useState()

    const optionList = [
        { value: 'red', label: 'Red' },
        { value: 'green', label: 'Green' },
    ]

    function handleSelect(data) {
        setSelectedOptions(data)
    }
    return (
        <div className=''>
            <h2>Choose your color</h2>
            <div className=''>
                <Select
                    options={optionList}
                    placeholder='Select color'
                    value={selectedOptions}
                    onChange={handleSelect}
                    isSearchable
                    isMulti
                />
            </div>
        </div>
    )
}
