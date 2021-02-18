'use strict';

// import { useState } from "react";

const e = React.createElement;


class LikeButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = { liked: false };
  }

  render() {
    if (this.state.liked) {
      return 'this button is made in react.';
    }

    return e( 'button',  { onClick: () => this.setState({ liked: true }) },  'Like'  );
  }
}

const domContainer = document.getElementById('react-funciones');

ReactDOM.render(e(LikeButton), domContainer);


