import React,{Component} from 'react';
import DisplayList from './DisplayList';

class ComponentListView extends React.PureComponent{
    constructor(props){
        super(props)
    }

    componentDidMount(){
        this.props.fetchPropertie();
    }
    render(){
        const {list} = this.props
        return(
            <div>
                <DisplayList propertyData={list}/>
            </div>
        )
    }
}

export default ComponentListView;

/*
  <DisplayList propertyData={this.props.list}/>
*/