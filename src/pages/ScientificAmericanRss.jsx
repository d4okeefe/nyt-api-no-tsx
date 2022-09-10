import React, { useState, useEffect } from "react";
import axios from "axios";
import Table from "react-bootstrap/Table";
import https from 'https'

import { format } from "date-fns";

const parseDate = function (d) {
  let date = new Date(d);
  return format(date, "d MMM yyyy");
};

export default function ScientificAmericanRss() {
  const [rssFeed, setRssFeed] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    const instance = axios.create({
      httpsAgent: new https.Agent({
        rejectUnauthorized: false,
      }),
    });
    instance
      .get(`http://rss.sciam.com/ScientificAmerican-Global`, {
        "Content-Type": "text/xml"
      })
      .then((response) => {
        const xml_string = response.data;
        setRssFeed(xml_string);

        var parseString = require("xml2js").parseString;
        parseString(xml_string, function (err, result) {
          const inner_array = [];
          for (var i = 0; i < 100; i++) {
            // null check first
            if (result.rss.channel[0].item[i]) {
              inner_array[inner_array.length] = result.rss.channel[0].item[i];
            }
          }

          setData(inner_array);
        });
      });
  }, []);

  return (
    <div className="NewYorkerTable">
      <div>{rssFeed}</div>
      <Table className="newsDataTable striped bordered hover table-dark">
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
                  href={r.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div>{r.title}</div>
                </a>
              </td>
              <td>{r["dc:creator"]}</td>
              <td>{parseDate(r.pubDate)}</td>
            </tr>
          ))}
        </tbody>
      </Table>
    </div>
  );
}
