import React from 'react';
import { Layout } from 'antd';
import backgroud from '../../../images/backgroud.jpg';
import twinkle from '../../../images/u3.gif'
import styles from './index.less';

const { Content } = Layout;

class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
      }

      handleClick(){
          
      }

    render() {
        return <Content> 
        <img src={backgroud} alt="backgroud" className='autoSize'/> 
        <div>
          <img src={twinkle} alt="twinkle" className="twinkle"  onClick={() => this.props.onClick()}></img>
        </div>
        </Content>
    }
};

export default Welcome;