import React from "react";
import Header from "./header";
import "../styles/layout.css";

class Layout extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      scrolled: false
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.toggleBodyClass);
    this.toggleBodyClass();
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.toggleBodyClass);
  }

  toggleBodyClass = () => {
    if (this.state.scrolled && window.scrollY <= 10) {
      this.setState({ scrolled: false });
    } else if (!this.state.scrolled && window.scrollY > 10) {
      this.setState({ scrolled: true });
    }
  };

  render() {
    const {
      children,
      textWhite = true
    } = this.props;
    const { scrolled } = this.state;
    return (
      <>
        <Header
          scrolled={scrolled}
          textWhite={textWhite}
        />
        <>{children}</>
      </>
    );
  }
}

export default Layout;
