import React from 'react';
import { Layout } from 'antd';
import backgroud from '../../../images/backgroud.jpg';
import styles from './Header.less';

const { Content } = Layout;


class Welcome extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            backgroud: <Welcome/>,
        };
      }

    render() {
        return <Content> <img src={backgroud} alt="backgroud" className={styles.autoImg} /> </Content>
    }
};

export default Welcome;