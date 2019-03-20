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
        return <div>test
        <div>退出</div>
        </div> ; 
    }
};

export default SelectBussiness;