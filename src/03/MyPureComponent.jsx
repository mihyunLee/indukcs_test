import React, { PureComponent } from 'react';

class MyPureComponent extends React.PureComponent {
    componentDidMount() { console.log('MyPureComponent 새로고침')};
    render() {return null;}
}

export default MyPureComponent;