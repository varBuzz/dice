import React, { Component } from "react";
import Die from "./Die";
import "./RollDice.css";

export default class RollDice extends Component {
  static defaultProps = {
    sides: ["one", "two", "three", "four", "five", "six"],
  };

  constructor(props) {
    super(props);
    this.state = { die1: "one", die2: "two" };
    this.roll = this.roll.bind(this);
  }

  roll() {
    // pick 2 new rollls
    const newDie1 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];
    const newDie2 = this.props.sides[
      Math.floor(Math.random() * this.props.sides.length)
    ];

    //set state with two new rolls
    this.setState({
      die1: newDie1,
      die2: newDie2,
    });
  }
  render() {
    return (
      <div className="RollDice">
        <div className="RollDice-container">
          <Die face={this.state.die1} />
          <Die face={this.state.die2} />
        </div>
        <button onClick={this.roll}>Roll Dice</button>
      </div>
    );
  }
}
