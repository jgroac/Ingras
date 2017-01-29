import React from 'react';
import ProfileList from './ProfileList';
import request from 'reqwest';
import auth from '../../utils/auth';


class SearchInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSearch: '',
      usersFinded: null,
      onFetch: false,
      onFocus: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
    this.handleBlur = this.handleBlur.bind(this);
  }

  handleChange (event) {
    const value = event.target.value;

    this.setState({ currentSearch: value }, () => {
      if (value === '' || this.state.onFetch) return;

      this.setState({ onFetch: true });
      request({
        url: `https://api.instagram.com/v1/users/search?q=${value}&access_token=${auth.getToken()}`,
        type: 'jsonp',
        method: 'get'
      }).then(
        (response) => this.setState({ usersFinded: response.data, onFetch: false })
      ).catch(
        (error) => console.log(error)
      );

    });
  }

  handleFocus () {
    this.setState({ onFocus: true });
  }

  handleBlur () {
    setTimeout( () => this.setState({ onFocus: false }), 180 );
  }

  render () {
    const { currentSearch, usersFinded, onFocus, onFetch } = this.state;

    return (
      <div className="search-input mt-2" style={{marginLeft: 'auto', marginRigth: 'auto'}}>
        <input
          value={this.state.currentSearch}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleBlur}
          className="pl-4 pr-1"
          type="text"
          id="search"
          placeholder="Search"
        />
        <label className="search-input__placeholder pt-1 m-0" htmlFor="search">
          <span>
            <i className="sprite-icon sprite-search d-inline-block m-0 mr-1">icon</i>
            {currentSearch || 'Search'}
          </span>
        </label>
        <span className={`spinner ${onFetch ? 'd-block' : null}`}>
          <img src={require('../../../public/default.gif')} />
        </span>
        <ProfileList show={usersFinded && onFocus} users={usersFinded} />
      </div>
    );
  }
}

export default SearchInput;
