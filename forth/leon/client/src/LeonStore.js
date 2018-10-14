import React, { Component } from 'react';
import { Fragment } from "react";
import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import ItemContainer from "./containers/ItemContainer/ItemContainer";


class LeonStore extends Component {
  render() {
    return (
      <Fragment>
        <HeaderContainer></HeaderContainer>
        <ItemContainer></ItemContainer>
      </Fragment>
    );
  }
}

export default LeonStore;
