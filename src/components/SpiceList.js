import React from 'react'
import SpiceItem from './SpiceItem'
import Filter from './Filter'

class SpiceList extends React.Component {
  state = {
    fourStarOnly: false,
    search: ""
  }

  handleChange = (evt) => {
    if (evt.type === "checkbox") {
      this.setState((prevState) => ({
        fourStarOnly : evt.checked
      }))
    } else {
      this.setState((prevState) => ({
        search : evt.value
      }))
    }
  }

  renderSpices() {
    return this.props.spices
      .filter(spice => this.state.fourStarOnly ? spice.rating >= 4 : true) //does saying true mean the same as returning the entire object? is it the same saying as saying return everything?
      .filter(spice => spice.notes.toLowerCase().includes(this.state.search.toLowerCase()))
      .map(spice => (
        <SpiceItem key={spice.title} spice={spice} /> // i changed key to spice.title, the spice.id was giving an unique "key" prop error.
      ))
  }

  render() {

    return (
      <section className="spice-list">
        <Filter search={this.state.search} fourStarOnly={this.state.fourStarOnly} onChange = {this.handleChange}/>
        {this.renderSpices()}
      </section>
    )
  }
}

export default SpiceList
