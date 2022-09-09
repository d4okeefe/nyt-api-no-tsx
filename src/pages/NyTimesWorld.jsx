import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { format_date } from '../FormatDate'

export default function NyTimesWorld() {
  const nyt_api_key = 'O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw'
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.nytimes.com/svc/topstories/v2/world.json`, {
        params: {
          'api-key': nyt_api_key,
        },
      })
      .then((response) => setData(response.data.results))
  }, [])

  return (
    <div className="NyTimesTable">
      <h4 className="mx-2">N.Y. Times world news</h4>
      <Table className="newsDataTable striped bordered hover table-dark">
        <thead>
          <tr>
            <th scope="col">Title with Link</th>
            <th scope="col">Abstract</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.filter((r) => {
            return !(r.title.trim() === '')
          }).map((r, index) => (
            <tr key={index}>
              <td>
                <a
                  className="link-info"
                  href={r.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{r.title}</div>
                </a>
              </td>
              <td>{r.abstract}</td>
              <td>{r.byline}</td>
              <td>{format_date(r.published_date)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
