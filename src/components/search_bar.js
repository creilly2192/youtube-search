import React, { Component } from 'react';


class SearchBar extends Component {
  constructor(props) {
    super(props);

    // initial state is empty until user enter's some text
    this.state = { term: '' }
  }

  render() {
    return (
      <header>
        <svg width="100%" height="47px" viewBox="0 0 1440 47" version="1.1" xmlns="http://www.w3.org/2000/svg" class="wave" preserveAspectRatio="none" data-reactid="14"><defs data-reactid="15"></defs><g id="Page-1" stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" data-reactid="16">
          <path d="M0,0.0577405639 C117.504588,18.44359 269.602477,22.1720696 456.293666,11.2431795 C562.076057,5.05068514 730.784198,0.911127653 885.297232,3.27366179 C1157.17617,7.43074321 1386.98062,21.3276838 1440,38.3891927 L1440,46.9388979 L0,46.9388979 L0,0.0577405639 Z" id="Path-9" fill="#fff" data-reactid="17"></path>
        </g>
      </svg>
      <div className="container">
        <div className="col-md-12">
          <h1>Search Videos</h1>
          <input
            className="search-bar"
            value={this.state.term}
            onChange={event => this.onInputChange(event.target.value)} />
        </div>
      </div>
      </header>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }

}

export default SearchBar;
