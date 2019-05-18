import React, { Component } from "react";

class Counter extends Component {
  render() {
    return (
      
      <div>
        <b>商品{this.props.counter.id}</b>
        <b>單價{this.props.counter.price}</b>
        <button
          onClick={() => this.props.onDecrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          ↓
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={() => this.props.onIncrement(this.props.counter)}
          className="btn btn-secondary btn-sm"
        >
          ↑
        </button>
        <button
          onClick={() => this.props.onDelete(this.props.counter.id)}
          className="btn btn-danger btn-sm m-2"
        >
          x
        </button>
        <b>總計{this.props.counter.price * this.props.counter.value }</b>
      </div>
    );
  }

  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.props.counter.value === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { value: count } = this.props.counter;
    return count === 0 ? "0" : count;
  }
}

export default Counter;
