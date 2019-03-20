import React from 'react';
import { Layout } from 'antd';
import backgroud from '../../../images/u7.jpg';
const {
   Content,
} = Layout;


class WeblLayout extends React.Component {
    render() {
        const {
            children
          } = this.props;
    return <Layout>
         <img src={backgroud} alt="backgroud" className='autoSize'/> 
       
            <Content className="contentCenter">
            {children}
            </Content>
       
        </Layout>
    }
};

export default WeblLayout;
