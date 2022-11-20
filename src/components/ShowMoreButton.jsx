import './ShowMoreButton.css'

const ShowMoreButton = ({ incrementPageNumber }) => {
  return (
    <button className='show-more' onClick={() => incrementPageNumber()}>
      show more
    </button>
  )
}

export default ShowMoreButton
