import React from "react";
import "./Form.css";

class Form extends React.Component {
  constructor() {
    super();
    this.state = {
      title: "",
      description: "",
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitIdea = (event) => {
    event.preventDefault();
    const newIdea = {
      id: Date.now(),
      ...this.state,
    };
    this.props.addIdea(newIdea);
    this.clearInputs();
  };

  clearInputs = () => {
    this.setState({ title: "", description: "" });
  };

  render() {
    return (
      <form>
        <input
          type="text"
          placeholder="Title"
          name="title"
          value={this.state.title}
          onChange={(e) => this.handleChange(e)}
        />

        <input
          type="text"
          placeholder="Description"
          name="description"
          value={this.state.description}
          onChange={(e) => this.handleChange(e)}
        />

        <button onClick={(e) => this.submitIdea(e)}>SUBMIT!</button>
      </form>
    );
  }
}

export default Form;
