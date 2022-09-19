import React, { useEffect, useState } from 'react'

import Table from 'react-bootstrap/Table'
import axios from 'axios'
import { format_date } from '../utils/FormatDate'

export default (props) => {
  const [data, setData] = useState([])
  const [api, setApi] = useState()

  useEffect(() => {
    fetch('/nyt/topstories')
      .then((res) => res)
      .then((json_data) => {
        setApi(json_data)
      })
  })

  // useEffect(() => {
  //   axios
  //     .get(`https://api.nytimes.com/svc/topstories/v2/home.json`, {
  //       params: {
  //         'api-key': props.api_key,
  //       },
  //     })
  //     .then((response) => {
  //       setData(response.data.results)
  //       console.log('TESTING')
  // console.log('typeof: ' + typeof data)
  // for (const key of Object.keys(data)) {
  //   console.log('key: ' + key)
  //   console.log('data[key]: ' + data[key])
  // }
  //     })
  // }, [])

  return (
    <div className="NyTimesTable">
      <h4 className="mx-2">{props.title}</h4>
      <p>{api}</p>
      {/* <Table className="newsDataTable striped bordered hover table-dark">
        <thead>
          <tr>
            <th scope="col">Title with Link</th>
            <th scope="col">Abstract</th>
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
      </Table> */}
    </div>
  )
}
