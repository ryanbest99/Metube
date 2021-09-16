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
        <form onSubmit={this.onInputSubmit}>
          <div className="ui icon input">
            <input
              type="text"
              placeholder="Search..."
              value={this.state.term}
              onChange={(e) => this.setState({ term: e.target.value })}
            />
            <i className="search icon"></i>
          </div>
        </form>
        <h1>{this.state.term}</h1>
      </Fragment>
    );
  }
}
