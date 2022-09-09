import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import Image from 'react-bootstrap/Image'
import { format_date } from '../FormatDate'

export default function NyTimesMovieReviews() {
  
  const nyt_api_key = 'O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw'
  
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.nytimes.com/svc/movies/v2/reviews/picks.json`, {
        params: {
          'api-key': nyt_api_key,
        },
      })
      .then((response) => setData(response.data.results))
  }, [])

  return (
    <div className="NyTimesTable">
      <Table className="newsDataTable striped bordered hover table-dark">
        <thead>
          <tr>
            <th scope="col">Movie</th>
            <th scope="col">Summary</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, index) => (
            <tr key={index}>
              <td>
                <a
                  className="link-info"
                  href={r.link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{r.display_title}</div>
                </a>
                <div>
                  <Image
                    className="rounded img-fluid"
                    src={r.multimedia.src}
                  ></Image>
                </div>
              </td>

              <td>{r.summary_short}</td>
              <td>{format_date(r.date_updated)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
