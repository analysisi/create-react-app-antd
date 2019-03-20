import React from 'react';
import { Layout } from 'antd';
import styles from "./index.less";
import WelLayout from "./WelLayout";
import Welcome from "./Welcome";
import SelectBussiness from "./SelectBussiness";
const { Content } = Layout;

class CaseView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      componentName : "Welcome"
    };
  }

  componentDidMount() {}

  handleClick(name){
    switch(name){
      case "Welcome":
      this.setState({componentName : "SelectBussiness"});
      break;
      default:
      break;
    }
  }
  
  render() {
    const { componentName } = this.state;
    let result = {};
    switch(componentName)
    {
      case "Welcome":
       result = <Content><Welcome onClick={() => this.handleClick("Welcome")}/></Content>;
      break;
      case "SelectBussiness":
       result = <WelLayout><SelectBussiness></SelectBussiness></WelLayout>;
      break;
      default:
      break;
    }

      return result;
    }
  }

export default CaseView;
