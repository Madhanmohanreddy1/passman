import './index.css'

const ThumbnailFolder = props => {
  const {imageDetails, randomNumber, imgUrl} = props
  const {thumbnailUrl, imageUrl} = imageDetails
  const generateNumber = () => {
    const randomValue = imageUrl === imgUrl ? 'true' : 'false'
    randomNumber(randomValue)
  }
  return (
    <li className="list-style" onClick={generateNumber}>
      <img src={thumbnailUrl} alt="lemon" className="images-styles" />
    </li>
  )
}

export default ThumbnailFolder
