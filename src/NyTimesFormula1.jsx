import React,  { useState, useEffect } from 'react'
import axios from 'axios'
import Table from 'react-bootstrap/Table'
import { format_date } from './FormatDate'

export default function NyTimesFormula1() {
  const nyt_api_key = 'O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw'
  const [data, setData] = useState([])

  useEffect(() => {
    axios
      .get(`https://api.nytimes.com/svc/search/v2/articlesearch.json`, {
        params: {
          q: 'Formula-1',
          'api-key': nyt_api_key,
        },
      })
      .then((response) => setData(response.data.response.docs))
  }, [])

  return (
    <div className="NyTimesTable">
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th scope="col">Title with Link</th>
            <th scope="col">Author</th>
            <th scope="col">Date</th>
          </tr>
        </thead>
        <tbody>
          {data.map((r, index) => (
            <tr key={index}>
              <td>
                <a
                  className="link-info"
                  href={r.web_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{r.headline.main}</div>
                </a>
              </td>
              <td>{r.byline.original}</td>
              <td>{format_date(r.pub_date)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  )
}
