import './index.css'

const VisitCountryItem = props => {
  const {visitDetails, removeCountry} = props
  const {imageUrl, name, id} = visitDetails

  const onClick = () => {
    removeCountry(id)
  }

  return (
    <li>
      <img src={imageUrl} alt="thumbnail" className="image" />
      <div>
        <p>{name}</p>
        <button type="button" onClick={onClick}>
          Remove
        </button>
      </div>
    </li>
  )
}
export default VisitCountryItem
