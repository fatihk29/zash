import {BASE_URL} from '@env';
import {IContact} from 'Interfaces/Interfaces';

const symbol = 'IBM';
const interval = '60min';
const slice = 'year1month2';
const TIME_SERIES_OPTION = '';
const baseUrl = `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${symbol}&interval=${interval}&slice=${slice}&apikey=Y46IPAA3QEBI2XNU`;

export default class ContactApi extends HttpClient {
  constructor() {
    super(baseUrl);
  }

  GetContacts = contactData => this.instance.post > ('getcontact', contactData);
}
