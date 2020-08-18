import React, { Component } from "react";
import Item from '../item/item';
import ItemDetail from '../itemdetail/itemdetail';

const api_url = `http://localhost:3002/api/v1/centers`

class ItemList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      event_centers: []
    }
    this.updateEventCenters = this.updateEventCenters.bind(this);
  }

  componentDidMount() {
    this.getEventCenters();
  }

  getEventCenters() {
    fetch(api_url)
      .then(response => response.json())
      .then(response_items => {
        this.setState({
          event_centers: response_items
        })
      });
  }

  updateEventCenters(event_center) {
    let _event_centers = this.state.event_centers
    _event_centers.unshift(event_center)
    this.setState({
      event_centers: _event_centers
    })
  }

  render() {
    console.log(this.state.event_centers);
    return (
      <div className="event_centers">
        <ul>
          {this.state.event_centers.map((center) => (
            <Item key={center.id}
              event_center={center}
            />
          ))}
        </ul>
        <ItemDetail

        />
      </div>
    )
  }
}

export default ItemList;
