// import logo from "./logo.svg";
import React, { Component } from "react";

import CardList from "./components/CardList/CardList";
// import SearchBox from "./components/SearchBox/SearchBox";
import Card from "./components/Card/Card";

import "./App.css";
import SearchBox from "./components/SearchBox/SearchBox";

// Class component
export default class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
      searchField: "",
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((res) => this.setState({ monsters: res }));
  }

  render() {
    const { monsters, searchField } = this.state;

    const filteredMonsters = monsters.filter((monster) =>
      monster.name.toLowerCase().includes(searchField.toLowerCase())
    );

    return (
      <div className="App">
        <h1 className="heading">Monsters Rolodex</h1>
        {/* <input
          type="search"
          onChange={(e) => {
            this.setState({ searchField: e.target.value }, () =>
              console.log(this.state)
            );
          }}
        /> */}
        <SearchBox
          placeHolder="Search monsters"
          handleChange={(e) => {
            // This is called lifting state up. Instead of placing state in searchBox component, we are placing it in app.js which can access both cardList component and searchBox component
            this.setState({ searchField: e.target.value });
          }}
        />
        <CardList monsters={filteredMonsters} />
        <Card monster={this.state.monsters} />
      </div>
    );
  }
}
