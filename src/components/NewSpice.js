import React from 'react'

class NewSpice extends React.Component {
  state = {
    title: "",
    image: "",
    notes: "",
    description: "",
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addSpice(this.state)
  }

  handleChange = (event) => {
    const { value, name} = event.target
    this.setState((prevState) => ({
      [name] : value
    }))

  }

  render() {
    // let spiceDetails = this.state
    return (
      <div className="card">
        <h2>New Spice</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="title">Title: </label>
          <input onChange = {this.handleChange} value = {this.state.title} type="text" name="title" />
          <label htmlFor="image">Image URL: </label>
          <input onChange = {this.handleChange} value = {this.state.image} type="text" name="image" />
          <label htmlFor="notes">Tasting Notes: </label>
          <input onChange = {this.handleChange} value = {this.state.notes} type="text" name="notes" />
          <label htmlFor="notes">Description: </label>
          <textarea onChange = {this.handleChange} value = {this.state.description} type="text" name="description" />
          <input type="submit" value="Submit" />
        </form>
      </div>
    )
  }
}

export default NewSpice
