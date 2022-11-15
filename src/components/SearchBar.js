import React from "react";
class SearchBar extends React.Component {
  state = {
    text: ""
  };

  onFormSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmitted(this.state.text);
  };

  render() {
    return (
      <div className={"ui segment"}>
        <form className={"ui form"} onSubmit={this.onFormSubmit}>
          <div className={"field"}>
            <label>Enter Your Password</label>
            <input
              type="password"
              placeholder="password"
              onChange={(e) =>
                this.setState({
                  text: e.target.value
                })
              }
            />
          </div>
        </form>
        <p>{this.state.text}</p>
      </div>
    );
  }
}

export default SearchBar;
