import React from 'react'

function SearchBox({searchValue,setSearchValue}) {
  return (
    <div className='col col-sm-4'>
        <input
         className='form-control'
          type="text" 
          value={searchValue}
          onChange={(e)=>setSearchValue(e.target.value)}
          placeholder='Type to search... '
          />
    </div>
  )
}

export default SearchBox;