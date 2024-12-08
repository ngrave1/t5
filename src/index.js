import React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import Plans from './plans';
import Addplan from './Addplan';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { Route, Routes, Link } from 'react-router';

class Sex extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
    plan : [
    {  id : 1,
        name : 'pp',
        manage : 1
    }
    ]
  }
    this.addplan = this.addplan.bind(this)
    this.deletplan = this.deletplan.bind(this)
}
  render() {
    return (<><div className="link">
      <Link to="/" className="link1">Plans</Link>
      <Link to="/newplan" className="link1">Addplan</Link>
      </div>
      <Routes>
        <Route path="/" element={<Plans plans={this.state.plan} deletplan = {this.deletplan}/>} />
        <Route path="/newplan" element={<Addplan onAdd={this.addplan}/>}/>
      </Routes>
      </>
    )
  }
  addplan(plans){
    const id = this.state.plan.length + 1
    this.setState({plan : [...this.state.plan, {id, ...plans}]})
  }
  deletplan(id){
    this.setState({plan : this.state.plan.filter((el) => el.id !== id)})
  }
}



const ele = ReactDOMClient.createRoot(document.getElementById("1"))
ele.render(<BrowserRouter><Sex /></BrowserRouter>)
