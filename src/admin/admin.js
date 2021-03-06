import React, { Component } from 'react';

const api_url = `http://localhost:3002/api/v1/centers`

class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      // api_url: props.api_url,
      building: "",
      hall: "",
      price: 0,
      capacity: 0
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleTaskChange = this.handleTaskChange.bind(this);
  }

  handleTaskChange(event) {
    this.setState({
      task: event.target.value
    })
  }

  handleSubmit(event) {
    event.preventDefault();
    this.formSubmit(event.target);
  }

  async formSubmit(formData) {
    let data = new FormData(formData);
    await fetch(api_url, {
      method: "POST",
      mode: "cors",
      body: data
    }).then(response => response.json())
  }

  render() {
    return (
      <div className="App" >
        <form onSubmit={this.handleSubmit}>
          <label>
            Building Name:
            <input type="text" name="center[building]" onChange={this.handleTaskChange} />
          </label><br />
          <label>
            Hall name:
            <input type="text" name="center[hall]" onChange={this.handleTaskChange} />
          </label><br />
          <label>
            Price:
            <input type="text" name="center[price]" onChange={this.handleTaskChange} />
          </label><br />
          <label>
            Capacity:
          <input type="text" name="center[capacity]" onChange={this.handleTaskChange} />
          </label><br />
          <input type="submit" value="Add Event Center" />
        </form>
      </div>
    );
  }
}

export default Admin;
