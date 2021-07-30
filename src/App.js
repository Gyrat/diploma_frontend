import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/Home';
import FixedNavigation from './components/FixedNavigation';

import News from './components/news';
import EditNews from './components/news/Edit';

import newsFields from './components/news/fields';
import adsFields from './components/fields/ad';
import tabFields from './components/fields/tab';
import specFields from './components/fields/spec';
import doctorFields from './components/fields/doctor';
import cabinetFields from './components/fields/cabinet';
import shiftFields from './components/fields/shift';
import pageFields from './components/fields/page';
import patientFields from './components/fields/patient';
import timetableFields from './components/fields/timetable';
import voucherFields from './components/fields/voucher';
import extractFields from './components/fields/extract';

import Login from './components/auth/Login';
import Register from './components/auth/Register';

const routes = [
  { t: 'ad', fields: adsFields },
  { t: 'news', fields: newsFields },
  { t: 'specs', fields: specFields },
  { t: 'doctors', fields: doctorFields },
  { t: 'cabinets', fields: cabinetFields },
  { t: 'tabs', fields: tabFields },
  { t: 'shifts', fields: shiftFields },
  { t: 'pages', fields: pageFields },
  { t: 'patients', fields: patientFields },
  { t: 'timetables', fields: timetableFields },
  { t: 'vouchers', fields: voucherFields },
  { t: 'extracts', fields: extractFields },
]

function CRUD({ t, fields }) {
  return [
      <Route key={t+1} path={`/${t}/create`} render={props => <EditNews {...props} t={t} fields={fields} />} />,
      <Route key={t+2} path={`/${t}/edit/:id`} render={props => <EditNews {...props} edit t={t} fields={fields} />} />,
      <Route key={t+3} path={`/${t}`} render={props => <News t={t} fields={fields} />} />,
  ]
}

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <FixedNavigation />
          <Switch>
            <Route exact path='/' component={ Home }/>
            <Route path='/login' component={ Login } />
            <Route path='/register' component={ Register } />

            {routes.flatMap(CRUD)}
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
