import React from 'react';
import style from './PlatformFilter.module.css';

const PlatformFilter = (props) => {

  function selectPlatform(platform) {
    props.setPlatform(platform)
  }

  return (
    <div>
      <select onChange={(e) => selectPlatform(e.target.value)}>
        <option value="" >Sélectionnez une console</option>
        <option value="PlayStation">PlayStation</option>
        <option value="Xbox">Xbox</option>
        <option value="PC">PC</option>
      </select>
    </div>
  )
}

export default PlatformFilter
