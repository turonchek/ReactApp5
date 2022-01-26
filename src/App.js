import React, {PureComponent} from 'react';
import { NewsPage } from './components/NewsPage/NewsPage';

export class App extends PureComponent {
  render(){
    return (
      <div className="App">
        <NewsPage/>
      </div>
    );
  }
}

export default App;
