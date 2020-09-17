import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';

import './custom.css'
import { trips } from './components/Trip/Trips';
import { create } from './components/Trip/Create';
import { update } from './components/Trip/Update';
import { Delete } from './components/Trip/Delete';

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/counter' component={Counter} />
        <Route path='/fetch-data' component={FetchData} />
        <Route path='/trips/alltrip' component={trips} />
        <Route path='/trips/create' component={create} />
        <Route path='/trips/update/:id' component={update} />
        <Route path='/trips/delete/:id' component={Delete} />

      </Layout>
    );
  }
}
