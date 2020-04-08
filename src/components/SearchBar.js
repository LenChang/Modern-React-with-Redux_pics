import React from "react";

class SearchBar extends React.Component {
  state = { term: "Hi there" };

  // onInputChange(event) {
  //   console.log(event.target.value);
  // }

  // onInputClick() {
  //   console.log("Input was clicked");
  // }

  onFormSubmit = (event) => {
    event.preventDefault(); // Doesn't refresh page when key-in "Enter"

    console.log(this.state.term);
  };

  render() {
    return (
      <div className="ui segment">
        <form onSubmit={this.onFormSubmit} className="ui form">
          <div className="field">
            <label>Image Search</label>
            <input
              type="text"
              // onClick={this.onInputClick}
              value={this.state.term}
              onChange={
                (e) => this.setState({ term: e.target.value })
                // this.setState({ term: e.target.value.toUpperCase() }) // It's a example for controlled comp. which you can do
              }
            ></input>
          </div>
        </form>
      </div>
    );
  }
}

export default SearchBar;
