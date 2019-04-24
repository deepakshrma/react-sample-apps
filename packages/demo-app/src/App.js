import React from 'react';
import { FormattedMessage } from 'react-intl'

import './App.css';
import { DatePicker } from 'date-picker'
import modLocale from 'date-picker/lib/translate.json';
import { TranslateProvider, addLocale } from './translate'

const messages = {
  en: {
    'app.header': 'React Intl Demo'
  },
  zh: {
    'app.header': 'React Intl 演示'
  }
}
addLocale(messages)
addLocale(modLocale)
const BindInput = ({ stateRef }) => {
  const [user, setUser] = React.useState({ name: 'deepak' })
  const proxy = new Proxy(user, {
    get(target, propKey) {
      return target[propKey]
    },
    set(target, prop, value) {
      target[prop] = value
      setUser({ ...target })
      return true
    }
  })
  stateRef(proxy)
  return (<React.Fragment>
    <h1>{user.name}</h1>
  </React.Fragment>)
}
const App = () => {
  const [locale, setLocale] = React.useState('en')
  let userInput
  const setStateRef = (ref) => {
    userInput = ref
  }
  return (
    <TranslateProvider locale={locale}>
      <div className="App">
        <button type="button" onClick={() => setLocale('en')}>En</button>
        <button type="button" onClick={() => setLocale('zh')}>Ch</button>
        <header>
          <h1><FormattedMessage id="app.header" /></h1>
          <DatePicker placeholder="D.O.B"></DatePicker>
        </header>
        <h1>Two way magic with proxy</h1>
        <BindInput stateRef={setStateRef}></BindInput>
        <input onChange={({ target: { value } }) => {
          userInput.name = value
        }}></input>
        <button onClick={() => {
          userInput.name = 'Deepak is awesome'
        }}>Update user</button>
      </div>
    </TranslateProvider>
  );
}

export default App;
