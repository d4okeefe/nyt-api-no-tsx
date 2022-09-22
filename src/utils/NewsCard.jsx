import Card from 'react-bootstrap/Card'
import Col from 'react-bootstrap/Col'
import Image from 'react-bootstrap/Image'
import Row from 'react-bootstrap/Row'

export default (props) => {
  return (
    <Card className="card text-white bg-dark mb-3 newsCard">
      <Image
        className="card-img-top"
        src={props.image_url}
        title={props.image_caption}
      ></Image>
      <div className="card-body">
        <a
          className="link-info card-link"
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <h5 className="card-title">{props.title}</h5>
        </a>
        <p className="card-text" align="justify">
          {props.description}
        </p>
        <p className="card-text">{props.byline}</p>
        <p className="card-text">{props.date}</p>
      </div>
    </Card>
  )
}
