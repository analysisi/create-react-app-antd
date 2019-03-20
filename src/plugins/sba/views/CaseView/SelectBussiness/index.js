import React from 'react';
import { Layout } from 'antd';
import styles from './index.less';

const { Content } = Layout;


console.log(styles);


class SelectBussiness extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroud: '',
        };
      }

      handleClick(){
          
      }

    render() {
        return <Content> 
         <div>test</div>
        </Content>
    }
};

export default SelectBussiness;