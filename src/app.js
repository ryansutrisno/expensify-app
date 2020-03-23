import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';

// Styles
import 'normalize.css/normalize.css';
import './styles/styles.scss';

// Components

const ExpenseDashboardPage = () => (
  <div>This is from my dashboard component</div>
);
const AddExpensedPage = () => <div>This is from my add expense component</div>;
const EditExpensedPage = () => (
  <div>This is from my edit expense component</div>
);
const HelpPage = () => <div>This is from my help page expense component</div>;
const NotFoundPage = () => (
  <div>
    404! <Link to='/'>Go home</Link>
  </div>
);

const Header = () => (
  <header>
    <h1>Expensify</h1>
    <NavLink to='/' activeClassName='is-active' exact={true}>
      Home
    </NavLink>
    <NavLink to='/create' activeClassName='is-active'>
      Create
    </NavLink>
    <NavLink to='/edit' activeClassName='is-active'>
      Edit
    </NavLink>
    <NavLink to='/help' activeClassName='is-active'>
      Help
    </NavLink>
  </header>
);

const routes = (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path='/' component={ExpenseDashboardPage} exact={true} />
        <Route path='/create' component={AddExpensedPage} />
        <Route path='/edit' component={EditExpensedPage} />
        <Route path='/help' component={HelpPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

ReactDOM.render(routes, document.getElementById('app'));
