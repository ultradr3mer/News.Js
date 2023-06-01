import React, { useState, useEffect, Fragment } from "react";
import { Card, Space, Col, Row } from 'antd';
import { useLocation } from "react-router-dom";

function WeatherCurrent() {
  let location = useLocation();

  let apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  let host = 'https://api.openweathermap.org/data/2.5';
  let endpoint = host + '/weather';

  const [data, setData] = useState(undefined);

  const fetchInfo = async () => {
    const queryParams = new URLSearchParams(location.search);

    if(!queryParams.get('lat'))
    {
      return;
    }

    const resp = await fetch(endpoint + `?lat=${queryParams.get('lat')}&lon=${queryParams.get('lon')}&appid=${apiKey}`)

    const data = await resp.json();

    setData(data);
  }

  useEffect(() => {
    fetchInfo();
  }, [location.search]);

  return (
    <Fragment>
      {data != undefined &&
        <Card
          title={data.name}
          style={{ margin: '8px 4px' }}>
          <Space size={[16, 0]}>
              <img alt="data.weather[0].main" height={108} src={"/weather-icons/" + data.weather[0].icon + ".svg"} />
            <Space size={[0, 0]} direction="vertical">
              <h1>{data.weather[0].main}</h1>
              <p>{data.weather[0].description}</p>
            </Space>
          </Space>
        </Card>
      }
    </Fragment>
  );
}

export default WeatherCurrent;