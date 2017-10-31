import React, { Component } from "react";
//import { connect } from "react-redux";

import { connect, Provider } from "react-redux";
import { createStore } from "redux";

class BookDetail extends Component {
  render() {
    if (!this.props.book) {
      return <div>Select a book to get started.</div>;
    }

    console.log(this.props.book, "this.props.book");

    return (
      <div>
        <h3>Details for:</h3>
        <div>Title: {this.props.book.title}</div>
        <div>Pages: {this.props.book.pages}</div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  console.log(state, "state in book details");

  return {
    book: state.activeBook
  };
}

export default connect(mapStateToProps)(BookDetail);
