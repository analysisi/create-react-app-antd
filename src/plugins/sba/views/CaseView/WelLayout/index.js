import React from 'react';
import { Layout } from 'antd';
import backgroud from '../../../images/u7.jpg';
const {
  Header, Footer,  Content,
} = Layout;


class WeblLayout extends React.Component {
    render() {
        const {
            children
          } = this.props;
    return <Layout>
         <img src={backgroud} alt="backgroud" className='autoSize'/> 
        <Header>Header</Header>
            <Content>
            {children}
            </Content>
        <Footer>Footer</Footer>
        </Layout>
    }
};

export default WeblLayout;
