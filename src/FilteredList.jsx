import React, { Component } from 'react';
import { DropdownButton, Dropdown } from 'react-bootstrap'; // Import Dropdown instead of DropdownButton
import List from './List';
import './FilteredList.css'; // Import the CSS file

class FilteredList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: "",
      type: "All"
    };
  }

  onSearch = (event) => {
    this.setState({ search: event.target.value.trim().toLowerCase() });
  }

  onSelectType = (eventKey) => {
    this.setState({ type: eventKey });
  }

  filterItem = (item) => {
    const { search, type } = this.state;
    return (
      item.name.toLowerCase().includes(search) &&
      (type === "All" || item.type === type)
    );
  }

  render() {
    return (
      <div className="filter-list">
        <h1>Produce Search</h1>
        <DropdownButton id="typeDropdown" title={"Type"} onSelect={this.onSelectType}>
          <Dropdown.Item eventKey="All">All</Dropdown.Item> {/* Use Dropdown.Item instead of MenuItem */}
          <Dropdown.Item eventKey="Fruit">Fruit</Dropdown.Item> {/* Use Dropdown.Item instead of MenuItem */}
          <Dropdown.Item eventKey="Vegetable">Vegetable</Dropdown.Item> {/* Use Dropdown.Item instead of MenuItem */}
        </DropdownButton>
        <input type="text" placeholder="Search" onChange={this.onSearch} />
        <List items={this.props.items.filter(this.filterItem)} />
      </div>
    );
  }
}

export default FilteredList;
