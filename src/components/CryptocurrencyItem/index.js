// Write your JS code here
import './index.css'

const CryptocurrencyItem = props => {
  const {currenciesList} = props
  const {currencyName, usdValue, euroValue, currencyLogo} = currenciesList
  return (
    <li className="container-1">
      <div className="containers-2">
        <img className="images" src={currencyLogo} alt={currencyName} />
        <p className="paragraph-1">{currencyName}</p>
      </div>
      <div className="container-3">
        <p className="paragraph">{usdValue}</p>
        <p className="paragraph">{euroValue}</p>
      </div>
    </li>
  )
}

export default CryptocurrencyItem
