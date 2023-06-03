import React, { useState, useEffect, Fragment } from "react";
import { Card, Space, Divider  } from 'antd';
import { useLocation } from "react-router-dom";
import WeatherHourly from "./WeatherHourly";

function WeatherCurrent() {
  let location = useLocation();

  let apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  let host = 'https://api.openweathermap.org/data/2.5';
  let endpoint = host + '/weather';

  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchInfo = async () => {
      const queryParams = new URLSearchParams(location.search);
  
      if(!queryParams.get('city'))
      {
        return;
      }
  
      const resp = await fetch(endpoint + `?q=${queryParams.get('city')},${queryParams.get('country')}&appid=${apiKey}&units=metric`)
  
      const data = await resp.json();
  
      setData(data);
    }

    fetchInfo();
  }, [location.search, apiKey, endpoint]);

  return (
    <Fragment>
      {data !== undefined &&
        <Card
          title={data.name}
          style={{ margin: '8px 4px' }}>
          <Space size={[16, 0]}>
              <img alt="data.weather[0].main" height={108} src={"/weather-icons/" + data.weather[0].icon + ".svg"} />
            <Space size={[0, 0]} direction="vertical">
              <h1>{data.weather[0].main} {data.main.temp}°C</h1>
              <Divider style={{margin: "8px 0"}} />
              <p>{data.weather[0].description}</p>
            </Space>
          </Space>
          <Divider style={{margin: "8px 0"}}  />
          <div style={{overflowX: 'scroll'}}>
          <WeatherHourly />
          </div>
        </Card>
      }
    </Fragment>
  );
}

export default WeatherCurrent;