import React, { Component} from 'react';  

import {Container, ListGroup, ListGroupItem, Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert} from 'reactstrap';
import {CSSTransition, TransitionGroup} from 'react-transition-group';
import {connect} from 'react-redux';
import {getItems,deleteItem} from '../actions/taskaction';
import PropTypes from 'prop-types';
class TaskList extends Component{
   
    componentDidMount() {
        this.props.getItems();
    }
    onDeleteClick = (id) => {
        this.props.deleteItem(id);

    }
    
   
render(){

    const {items} = this.props.item;
    return(
        <div>
        
        <ListGroup>
        <TransitionGroup className ="tasklist">
        {items.map(({ _id,name})=>(
            <CSSTransition key={ _id} timeout ={500} classNames="fade">
            <ListGroupItem>
            <Button className="remove-btn" color="danger" size="sm" onClick={this.onDeleteClick.bind(this, _id)}>&times;</Button>
            {name}
           
            </ListGroupItem>
            
            </CSSTransition>
        ))}
        </TransitionGroup>
        </ListGroup>
    
        
        </div>
        
    )
}

}
TaskList.propTypes ={
    getItems: PropTypes.func.isRequired,
    item:PropTypes.object.isRequired
}
const mapStateToProps = (state) => ({
    item: state.task
})

export default connect(mapStateToProps, {getItems,deleteItem})(TaskList);