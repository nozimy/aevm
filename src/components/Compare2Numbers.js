import React, { Component } from 'react';
import { Button, Container, Row, Col,  Form, FormGroup, Label, Input, FormText, Alert  } from 'reactstrap';

class Compare2Numbers extends Component {
  constructor(props) {
    super(props)

    this.state = {
      numOne: 677,
      numOneNumSystem: 16,
      numTwo: 677,
      numTwoNumSystem: 8,
      compareSign: '='
    }
  }

  handleChange = (e) => {
    let change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  
  compare = () => {
      let {numOne, numOneNumSystem, numTwo, numTwoNumSystem, compareSign} = this.state;
      
      if (numOneNumSystem == numTwoNumSystem){
          
          if (numOne == numTwo){
            compareSign = '='
          } else if(numOne > numTwo){
            compareSign = '>'  
          } else if(numOne < numTwo){
            compareSign = '<'
          }
        
      } else if (numOneNumSystem > numTwoNumSystem){
          
          if (numOne == numTwo){
            compareSign = '>'
          } else if(numOne > numTwo){
            compareSign = '>'  
          } else if(numOne < numTwo){
            compareSign = '=, <, >'
          }
          
      } else if (numOneNumSystem < numTwoNumSystem){
          
          if (numOne == numTwo){
            compareSign = '<'
          } else if(numOne > numTwo){
            compareSign = '=, >, <'  
          } else if(numOne < numTwo){
            compareSign = '<'
          }
          
      }
      
      
      this.setState({numOne, numOneNumSystem, numTwo, numTwoNumSystem, compareSign})
  }
  
  handleClick = (e) => {
    this.compare();
  }
  
  
  render() {
    const {compareSign} = this.state;
    
    return (
        <Row>
          <Col>
            <h3>Задание 6</h3>
            <Form inline>
            
            <FormGroup>
              <Label for="" className="mr-sm-2">A</Label>
              <Input type="text" name="numOne" id="numOne" placeholder="введите число" onChange={this.handleChange} value={this.state.numOne} className="mb-2 mr-sm-2 mb-sm-0"/>
              <Input type="select" name="numOneNumSystem" id="numOneNumSystem" onChange={this.handleChange} value={this.state.numOneNumSystem}>
                <option value='2'>2 - двоичная</option>
                <option value='5'>5 - пятеричная</option>
                <option value='8'>8 - восьмеричная</option>
                <option value='16'>16 - шестнадцатеричная</option>
              </Input>
            </FormGroup>
            
            <FormGroup>
              <Label for="" className="mr-sm-2">B</Label>
              <Input type="text" name="numTwo" id="numTwo" placeholder="введите число" onChange={this.handleChange} value={this.state.numTwo} className="mb-2 mr-sm-2 mb-sm-0" />
              <Input type="select" name="numTwoNumSystem" id="numTwoNumSystem" onChange={this.handleChange} value={this.state.numTwoNumSystem} >
                <option value='2'>2 - двоичная</option>
                <option value='5'>5 - пятеричная</option>
                <option value='8'>8 - восьмеричная</option>
                <option value='16'>16 - шестнадцатеричная</option>
              </Input>
            </FormGroup>
            <FormGroup>
                <Button onClick={this.handleClick }>Compare</Button>
              </FormGroup>
            </Form>
            
            <h1>A {compareSign} B</h1>
            
            <pre>
            {JSON.stringify(this.state)}
            </pre>
          </Col>
        </Row>
    );
  }
}

export default Compare2Numbers;
