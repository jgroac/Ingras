import ReactDOM from 'react-dom';
import store from './store';
import routes from './routes.js';
import '../sass/main.sass';


ReactDOM.render(
  routes(store),
  document.getElementById('root')
);
