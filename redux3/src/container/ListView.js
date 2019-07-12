import { connect } from 'react-redux';
import { fetchProperty } from '../actions';
import ComponentListView from '../component/componentListView';

export const mapStateToProps =(state)=>{
    return{
        list: state.propertyReducer.data
    }
}

export const mapDispatchToProps =(dispatch) => {
    return{
        fetchPropertie: () =>{
            return dispatch(fetchProperty.getPropertyList())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ComponentListView)