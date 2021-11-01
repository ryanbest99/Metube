import React, { Fragment } from "react";

export default class SearchInput extends React.Component {
  state = { term: "" };

  onInputSubmit = (e) => {
    e.preventDefault();
    console.log("SearchInput.js term: ", this.state.term);
    this.props.onSubmit(this.state.term);
  };

  render() {
    return (
      <Fragment>
        <div className="search-div">
          <a href="https://metube-demo.herokuapp.com/">
            <h2>MeTube</h2>
          </a>
          <form onSubmit={this.onInputSubmit}>
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <button onClick={this.onInputSubmit}>Search</button>
          </form>
        </div>
      </Fragment>
    );
  }
}
