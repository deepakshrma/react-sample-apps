import React from 'react';
import { FormattedMessage } from 'react-intl'

import './App.css';
import { DatePicker } from 'date-picker'
import modLocale from 'date-picker/lib/translate.json';
import {TranslateProvider, addLocale} from './translate'

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
const App = () => {
  const [locale, setLocale] = React.useState('en')
  return (
    <TranslateProvider locale={locale}>
      <div className="App">
        <header className="App-header">
          <h1><FormattedMessage id="app.header" /></h1>
          <DatePicker placeholder="D.O.B"></DatePicker>
        </header>
      <button type="button" onClick={() => setLocale('en')}>En</button>
      <button type="button" onClick={() => setLocale('zh')}>Ch</button>
      </div>
    </TranslateProvider>
  );
}

export default App;
