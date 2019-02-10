import React from 'react';

export default class EventDemo extends React.Component {
  constructor(props) {
      super();
      this.state = { count: 0 , newName: 'YangSB'};
      this.myName = props.myName;
      this.handleSubmit = this.handleSubmit.bind(this);
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

    render() {
      let a = this.student.name;
      return (
       <div>
         This is my Name: {a}
         <div>
         This is my newName: {this.state.newName}
         </div>
         <div>
           This is a counter: {this.state.count}
         </div>
         
         <div>
          <button onClick={this.handleSubmit}> Plus </button>
         </div>
   
       </div>
      );
    }


    componentDidMount() {

    }

    componentDidUpdate() {

    }
  }
  
  