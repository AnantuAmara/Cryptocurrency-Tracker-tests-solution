// Write your JS code here
import {Component} from 'react'

import Loader from 'react-loader-spinner'

import CryptocurrencyItem from '../CryptocurrencyItem'

import './index.css'

class CryptocurrenciesList extends Component {
  state = {currenciesList: [], isLoading: true}

  componentDidMount() {
    this.getCurrenciesListData()
  }

  getCurrenciesListData = async () => {
    const response = await fetch(
      'https://apis.ccbp.in/crypto-currency-converter',
    )
    const data = await response.json()
    const updatedData = data.map(eachItem => ({
      currencyName: eachItem.currency_name,
      usdValue: eachItem.usd_value,
      euroValue: eachItem.euro_value,
      id: eachItem.id,
      currencyLogo: eachItem.currency_logo,
    }))
    this.setState({currenciesList: updatedData, isLoading: false})
  }

  render() {
    const {currenciesList, isLoading} = this.state
    return (
      <div className="container">
        <h1 className="heading">Cryptocurrency Tracker</h1>
        <img
          className="image"
          src="https://assets.ccbp.in/frontend/react-js/cryptocurrency-bg.png"
          alt="cryptocurrency"
        />
        <div className="container-2">
          <div className="header-container">
            <h1 className="item-heading">coin type</h1>
            <div className="header-container-2">
              <h1 className="item-heading">USD</h1>
              <h1 className="item-heading">EURO</h1>
            </div>
          </div>
          <div>
            <ul className="list-container">
              {isLoading ? (
                <div data-testid="loader">
                  <Loader type="Rings" color="#ffffff" height={80} width={80} />
                </div>
              ) : (
                currenciesList.map(each => (
                  <CryptocurrencyItem currenciesList={each} key={each.id} />
                ))
              )}
            </ul>
          </div>
        </div>
      </div>
    )
  }
}

export default CryptocurrenciesList
