import * as React from 'react'
import { injectIntl } from 'react-intl'
const DatePicker = ({date, intl, ...props}: any) => {
    return <div>
        <input type="date" value={date} placeholder={intl.formatMessage({id: 'datepicker.placeholder', defaultMessage: 'DOB'})} />
    </div>
}
export default injectIntl(DatePicker)