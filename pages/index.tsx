import React, { Component } from 'react';
import { connect } from 'react-redux';

interface PageProps {
  foo: string;
  custom: string;
}

class Home extends Component<PageProps> {
  static getInitialProps({ store }) {
    store.dispatch({ type: 'FOO', payload: 'foo' });

    return { custom: 'custom', ...store.getState() };
  }

  render() {
    return (
      <>
        <p>Props from Redux {this.props.foo}</p>
        <p>Props from getInitialProps {this.props.custom}</p>
        <p>welcome to next.js!</p>
      </>
    );
  }
}

export default connect()(Home);
