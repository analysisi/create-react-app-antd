import React from 'react';
import { Layout } from 'antd';
const {
  Header, Footer,  Content,
} = Layout;


class WeblLayout extends React.Component {
    render() {
        const {
            children
          } = this.props;
    return <Layout>
        <Header>Header</Header>
            <Content>
            {children}
            </Content>
        <Footer>Footer</Footer>
        </Layout>
    }
};

export default WeblLayout;
