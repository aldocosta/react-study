import React, {Component}  from 'react';
import './App.css'
import MultiThemeProvider from 'material-ui/styles/MuiThemeProvider'
import { AppBar, Drawer, List, ListItem} from 'material-ui';
import {BrowserRouter, Route, NavLink } from 'react-router-dom'; 
import Notes from './Pages/Notes';
import Diario from './Pages/Diario';
import Todo from './Pages/Todo';


class App extends Component {
  constructor(){
  super();
   this.state = {
     draweVisible:false
   } 
   //this._tooGle.bind(this);
  }

_tooGle(){
  this.setState({draweVisible: !this.state.draweVisible});
}

  render () {return (
    <BrowserRouter>
      <div>
        <MultiThemeProvider>
          <div>
            <AppBar onLeftIconButtonClick={()=> this._tooGle()}/>                    
            <Route path="/" component={Notes}/>
            <Route path="/diario" component={Diario}/>
            <Route path="/todo" component={Todo}/>
            <Drawer open={this.state.draweVisible} docked={false} onRequestChange={() => this._tooGle()}>          
              <List>
                <ListItem>
                  <NavLink to="/">Notas</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/diario">Diário</NavLink>
                </ListItem>
                <ListItem>
                  <NavLink to="/todo">Todo</NavLink>
                </ListItem>                
              </List>
            </Drawer>
          </div>
        </MultiThemeProvider>
      </div>
    </BrowserRouter>
  );
  }
}

export default App;
