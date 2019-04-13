import * as React from 'react'
import { IntlProvider, addLocaleData } from "react-intl";
import * as zhLocaleData from 'react-intl/locale-data/zh';
import * as enLocaleData from 'react-intl/locale-data/en';
addLocaleData(zhLocaleData);
addLocaleData(enLocaleData);
const messages = {
    en: {},
    zh: {}
}
export const addLocale = (message) => {
    for(let lang in message) {
        messages[lang] = {
            ...messages[lang],
            ...message[lang]
        }
    }
}
export const TranslateProvider = (props) => {
    return <IntlProvider messages={messages[props.locale]} {...props}>{props.children}</IntlProvider>
}