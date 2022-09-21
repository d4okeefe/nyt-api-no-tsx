import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { format_date } from '../utils/FormatDate'

export default (props) => {
  const [data, setData] = useState([])

  //  https://api.nytimes.com/svc/topstories/v2/opinion.json?api-key=O7qlJESoWIOLRSrMh63pU90FoTtWT8Fw

  const nyt_topstories_axios = axios.create({
    baseURL: `https://api.nytimes.com/svc/topstories/v2/`,
    timeout: 30000,
  })

  const nyt_topstories_url = props.url

  useEffect(() => {
    nyt_topstories_axios
      .get(nyt_topstories_url, {
        params: {
          'api-key': props.api_key,
        },
      })
      .then((response) => setData(response.data.results))
  }, [])

  return (
    <div className="NyTimesTable">
      <h4 className="mx-2">{props.title}</h4>
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
          {data
            .filter((r) => {
              return !(r.title.trim() === '')
            })
            .map((r, index) => (
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
