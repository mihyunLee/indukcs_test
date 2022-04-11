import React, { Component } from 'react';
import LifecycleExample from './LifecycleExample';

class LifecycleExampleApp extends Component {
    constructor(props){
        super(props);
        this.state = {hasDestroyed: false};
    }
    componentDidUpdate(){
        this.setState({hasDestroyed: true});
    }
    render() {
        return (
            <div>
                {this.hasDestroyed ? null : <LifecycleExample />} 
            </div>
        );
    }
}

export default LifecycleExampleApp;