import React, { useState, useEffect } from "react";
import { Card, Col, Row } from 'antd';
import { useParams, useLocation } from "react-router-dom";

function NewsGrid() {
  let params = useParams();
  let location = useLocation();

  // Add your Bing Search V7 subscription key and endpoint to your environment variables.
  let subscriptionKey = process.env.REACT_APP_BING_SEARCH_V7_SUBSCRIPTION_KEY;
  let host = 'https://api.bing.microsoft.com';
  let endpoint = host + '/v7.0/news/search';


  // Market you'd like to search in.
  let mkt = 'en-US'

  const [data, setData] = useState({ value: [] });

  useEffect(async () => {
    let query = params.id;

    const resp = await fetch(endpoint + "?q=" + query + "&mkt=" + mkt, {
      method: "GET",
      headers: {
        'Ocp-Apim-Subscription-Key': subscriptionKey,
      }
    })

    const data = await resp.json();

    setData(data);
  }, [location]);

  return (
    <Row>
      {data.value.map((dataObj, index) => {
        return (
          <Col xs={24} md={12} xl={6}>
            <Card
              title={dataObj.name}
              style={{ margin: '8px 4px' }}>
              <p className="news-text no-pad">{dataObj.description}</p>
            </Card>
          </Col>
        );
      })}
    </Row>
  );
}

export default NewsGrid;