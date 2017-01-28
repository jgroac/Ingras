import React from 'react';

const SearchInput = (props) => {
  return (
    <div className="search-input mt-2" style={{marginLeft: 'auto', marginRigth: 'auto'}}>
      <input className="pl-4" type="text" id="search" placeholder="Search" />
      <label className="search-input__placeholder pt-1 m-0" htmlFor="search">
        <span>
          <i className="sprite-icon sprite-search d-inline-block m-0">icon</i> Search
        </span>
      </label>
      <span className="spinner"></span>
      <div className="search-input__list-holder">
        <ul className="list__elements">
          <li>asdsadsd</li>
        </ul>
      </div>
    </div>
  );
};

export default SearchInput;
