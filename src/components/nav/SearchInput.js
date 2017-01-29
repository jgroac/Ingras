import React from 'react';
import ProfileList from './ProfileList';
import request from 'reqwest';
import data from '../../testData';


class SearchInput extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      currentSearch: '',
      usersFinded: [],
      onFetch: false,
      onFocus: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleFocus = this.handleFocus.bind(this);
  }

  handleChange (event) {
    this.setState({ currentSearch: event.target.value, onFetch: true }, () => {
      request({
        url: 'https://api.instagram.com/v1/users/search?q=joser&access_token=199403748.ec2cfbd.2571be47025648e49f14a18bcab79545',
        type: 'jsonp',
        method: 'get'
      }).then(
        (response) => this.setState({ usersFinded: data, onFetch: false })
      ).catch(
        (error) => console.log(error)
      );

    });
  }

  handleFocus () {
    const { onFocus } = this.state;
    setTimeout( () => this.setState({ onFocus: !onFocus }), 180 );
  }

  render () {
    const { currentSearch, usersFinded, onFocus, onFetch } = this.state;

    return (
      <div className="search-input mt-2" style={{marginLeft: 'auto', marginRigth: 'auto'}}>
        <input
          value={this.state.currentSearch}
          onChange={this.handleChange}
          onFocus={this.handleFocus}
          onBlur={this.handleFocus}
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
        <ProfileList show={usersFinded.length > 0 && onFocus} users={usersFinded} />
      </div>
    );
  }
}

export default SearchInput;
