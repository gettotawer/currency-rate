import React from 'react';
import { Route, Switch } from "react-router-dom";
import ConverterPage from './ConverterPage';
import Header from './Header';
import ActualRates from './ActualRates';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/">
          <Header name={"К актуальным курсам"} link={"/rates"}/>
          <ConverterPage/>
        </Route>
        <Route exact path="/rates">
          <Header name={"К калькулятору"} link={"/"}/>
          <ActualRates/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
