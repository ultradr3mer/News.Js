import React, { useState, useEffect } from "react";
import { Card, Space, Col, Row } from 'antd';


function NewsGrid() {

  // Add your Bing Search V7 subscription key and endpoint to your environment variables.
  let subscriptionKey = process.env.REACT_APP_BING_SEARCH_V7_SUBSCRIPTION_KEY;
  let host = 'https://api.bing.microsoft.com';
  let endpoint = host + '/v7.0/news/search';

  // News topics you'd like to search for.
  let query = 'Microsoft';
  // Market you'd like to search in.
  let mkt = 'en-US'

  const url = "https://jsonplaceholder.typicode.com/users";
  const [data, setData] = useState({ value: [] });

  const fetchInfo = () => {
    // return client.newsOperations.search(search_term)
    // request(request_params, function (error, response, body) {
    //   console.error('error:', error)
    //   console.log('statusCode:', response && response.statusCode)
    //   console.log('original query: ' + body.queryContext.originalQuery)
    //   console.log()
    //   console.log(body)
    // })
    return fetch(endpoint + "?q=" + query + "&mkt=" + mkt, {
      method: "GET",
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
      }
    })
      .then((res) =>
        res.json()
      )
      .then((d) => setData(d))
    // return fetch(url)
    //   .then((res) => res.json())
    //   .then((d) => setData(d))
  }

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
      <Row>
        {data.value.map((dataObj, index) => {
          return (
            <Col xs={24} md={12} xl={6}>
              <Card
                title={dataObj.name}
                style={{margin: '8px 4px'}}>
                <p className="news-text no-pad">{dataObj.description}</p>
              </Card>
            </Col>
          );
        })}
      </Row>
  );
}

export default NewsGrid;