import React from "react";
import "../styles/layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
  }


  render() {
    const {
      children,
    } = this.props;
    return (
      <>
        <>{children}</>
      </>
    );
  }
}

export default Layout;
