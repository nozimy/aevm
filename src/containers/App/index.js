import React, { Component } from 'react';
import { Button, Container, Row, Col,  Form, FormGroup, Label, Input, FormText, Alert  } from 'reactstrap';
import My_Navbar from './../../components/My_Navbar'
import {translate10toAny, translateAnyto10, frac10ToAny, frac, fracAnyTo10} from './../../NumSys'
import Compare2Numbers from './../../components/Compare2Numbers';

class App extends Component {
  constructor() {
    super()

    this.state = {
      sourceNum: 10.11,
      selectNumSys: '2',
      resultNum: '2'
    }
  }

  handleChange = (e) => {
    var change = {}
    change[e.target.name] = e.target.value
    this.setState(change)
  }
  
  handleClick = (e) => {
    const {sourceNum, selectNumSys} = this.state;
    let strarr = String(sourceNum).split('.');
    let int = strarr[0] 
    let fract = '0.' + strarr[1]
    
    let result = this.translate10to(selectNumSys, int);
    if (strarr[1]) result += '.'  + frac10ToAny(selectNumSys, fract, 20);
    
    this.setState({resultNum: result})
  }
  
  translate10to = (system, num10) => {
    return translate10toAny(system, num10)
  }
  handleClickTo10 = (e) => {
    const {sourceNum, selectNumSys} = this.state;
    
    let strarr = String(sourceNum).split('.');
    let int = strarr[0]
    let fract = strarr[1]
    
    let result = translateAnyto10(selectNumSys, int);
    if (strarr[1]) result += '.'  + fracAnyTo10(selectNumSys, fract, 20);
    
    this.setState({resultNum: result})
  }
  
  
  render() {
    const {resultNum} = this.state;
    
    return (
      <div className="App">
      <My_Navbar />
      
      <Container>
        <Row>
          <Col>
              <h3>Задания 1, 2, 3, 4, 5</h3>
             <FormGroup>
              <Label for="">10с/с</Label>
              <Input type="text" name="sourceNum" id="sourceNum" placeholder="введите число" onChange={this.handleChange} value={this.state.sourceNum} />
            </FormGroup>
            <FormGroup>
            <Label for="exampleSelect">система счисления</Label>
            <Input type="select" name="selectNumSys" id="exampleSelect" onChange={this.handleChange} value={this.state.selectNumSys}>
              <option value='2'>2 - двоичная</option>
              <option value='5'>5 - пятеричная</option>
              <option value='8'>8 - восьмеричная</option>
              <option value='16'>16 - шестнадцатеричная</option>
            </Input>
          </FormGroup>
          <FormGroup>
            <Button onClick={this.handleClick }>10 => numeral sysytem</Button>
          </FormGroup>
          <FormGroup>
            <Button onClick={this.handleClickTo10 }>Any => 10</Button>
          </FormGroup>
          
          {resultNum ? 
            <Alert color="success">
              {resultNum.toUpperCase()}
            </Alert> :
            null
          }
          
          
          </Col>
        </Row>
        <Compare2Numbers />
        
      </Container>
      </div>
    );
  }
}

export default App;
