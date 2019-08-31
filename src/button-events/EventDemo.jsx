import React from 'react';
import { connect } from 'react-redux';
import { simpleAction } from '../redux/actions/simpleAction';

class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.state = { count: 0 , newName: 'YangSB', inputValue: ''};
      this.myName = props.myName;
      this.handleSubmit = this.handleSubmit.bind(this);
      this.handleClear = this.handleClear.bind(this);
      this.handleInput = this.handleInput.bind(this);
      console.log(props.myName);

      this.student = {
        name: 'wang',
        age: 8,
        major: 'math',
      };

  }

  componentWillMount() {

  }

  handleSubmit() {
    console.log(this.state.count);
    this.setState(state => ({
      count: state.count + 1,
      newName: 'Yang'
    }));
  }
    handleClear() {
        console.log(this.state.count);
        this.setState(state => ({
            count: 0,
            newName: 'Jason'
        }));
    }

    handleInput(value) {
        // console.log(value);
        this.setState(state => ({
            inputValue: value
        }));
    }



    render() {
      console.log(this.props.simpleReducer.reduxName);
      let a = this.student.name;
      return (
       <div>
           <div>
               this is muy nmae father passed to me: {this.props.myName}
           </div>
         This is my Name: {a}
         <div>
         This is my newName: {this.state.newName}
         </div>
         <div>
         This is my reduxName: {this.props.simpleReducer.result}
         </div>
         <div>
           This is a counter: {this.state.count}
         </div>

           <div>
               This is a myinput: {this.state.inputValue}
           </div>

         <div>
          <button onClick={this.handleSubmit}> Plus </button>
         </div>
         <div>
             <button onClick={this.handleClear}> Reset </button>
         </div>

           <div>
               <input onChange={event => {this.handleInput(event.target.value)}}/>
           </div>


           <div>
          <button className={'btn-primary'} onClick={this.props.simpleAction}> Redux </button>
         </div>

       </div>
      );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }
  }

  const mapStateToProps = state => ({
    ...state
   })

const mapDispatchToProps = dispatch => ({
  simpleAction: () => dispatch(simpleAction())
 })

 export default connect(mapStateToProps, mapDispatchToProps)(EventDemo);
