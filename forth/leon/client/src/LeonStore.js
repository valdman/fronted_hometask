import React, { Component, Fragment } from 'react';

import HeaderContainer from "./containers/HeaderContainer/HeaderContainer";
import ItemContainer from "./containers/ItemContainer/ItemContainer";
import FooterContainer from "./containers/FooterContainer/FooterContainer";

class LeonStore extends Component {



  render() {
    return (
        <Fragment>
          <HeaderContainer></HeaderContainer>
          <ItemContainer></ItemContainer>
          <FooterContainer></FooterContainer>
        </Fragment>
    );
  }
}

export default LeonStore;
