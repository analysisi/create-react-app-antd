import React from 'react';
import WelLayout from "./WelLayout"
import Welcome from "./Welcome"

class CaseView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      children: <Welcome/>,
      componentName : "Welcome"
    };
  }

  componentDidMount() {}
  
  render() {
    const { children, componentName } = this.state;
    let result = {};
    switch(componentName)
    {
      case "Welcome":
      result = <div>{children}</div>;
      break;
      default:
      result = <WelLayout children={children}/>;
      break;
    }

      return result;
    }
  }

export default CaseView;
