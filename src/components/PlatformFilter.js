import React from 'react'

const PlatformFilter = (props) => {

  function selectPlatform(platform) {
    props.setPlatform(platform)
  }

  return (
    <select onChange={(e)=>selectPlatform(e.target.value)}>
      <option >Sélectionnez une console</option>
      <option value="PlayStation">PlayStation</option>
      <option value="Xbox">Xbox</option>
      <option value="PC">PC</option>
    </select>
  )
}

export default PlatformFilter
