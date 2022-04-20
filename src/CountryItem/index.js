import './index.css'

const CountryItem = props => {
  const {countryDetails, visitCountries} = props
  const {name, id, isVisited} = countryDetails

  const onClick = () => {
    visitCountries(id)
  }
  return (
    <li>
      <p className="heading">{name}</p>
      {isVisited ? (
        <p>Visited</p>
      ) : (
        <button type="button" onClick={onClick}>
          Visit
        </button>
      )}
    </li>
  )
}
export default CountryItem
