import React, {Component} from 'react';

import {
    Button,
    Modal,
    ModalHeader,
    ModalBody,
    Form,
    FormGroup,
    Label,
    Input,
    NavLink,
    Alert
  } from 'reactstrap';
import {connect} from 'react-redux';
import {addTask} from '../actions/taskaction';
class ItemModel extends Component {
    state = {
        model: false,
        name: ''
    }
    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onChange = (e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit = e => {
        e.preventDefault();
         const newItem = {
            name: this.state.name
         }
         this.props.addTask(newItem);

         this.toggle();
    }
render(){
    return(
        <div>
        <NavLink onClick={this.toggle} href="#"> Add Task </NavLink>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
        <ModalHeader toggle={this.toggle}>Add Task</ModalHeader>
        <ModalBody>
        <Form onSubmit = {this.onSubmit}>
            <FormGroup>
                <Label for="item">Task
                </Label>
                <Input type="text" name="name"
                id="item"
                placeholder="Add your task"
                onChange={this.onChange}
                />
                <Button color="dark"
                style={{marginTop:'2rem'}}
                block>Add Task
                </Button>
            </FormGroup>
        </Form>
        </ModalBody>
        </Modal>
        
        </div>
    )
}
}
const mapStateToProps = state => ({
    item: state.item
})
export default connect(mapStateToProps, {addTask})(ItemModel);