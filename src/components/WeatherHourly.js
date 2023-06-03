import React, { useState, useEffect, Fragment } from "react";
import { Space } from 'antd';
import { useLocation } from "react-router-dom";

function WeatherHourly() {
  let location = useLocation();

  let apiKey = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;
  let host = 'https://api.openweathermap.org/data/2.5';
  let endpoint = host + '/forecast';

  const [data, setData] = useState(undefined);

  useEffect(() => {
    const fetchInfo = async () => {
      const queryParams = new URLSearchParams(location.search);

      if (!queryParams.get('city')) {
        return;
      }

      const resp = await fetch(endpoint + `?q=${queryParams.get('city')},${queryParams.get('country')}&appid=${apiKey}&units=metric`)

      const data = await resp.json();

      setData(data);
    }

    fetchInfo();
  }, [location.search, apiKey, endpoint]);

  const formatTime = (d) => {
    return ("0" + d.getHours()).slice(-2) + ":" + ("0" + d.getMinutes()).slice(-2);
  }

  return (
    <Fragment>
      {data !== undefined &&
        <Space >
          {data.list.map(item => {
            var d = new Date(item.dt * 1000);
            return <Space direction="vertical">
              <img alt={item.weather[0].main} height={32} src={"/weather-icons/" + item.weather[0].icon + ".svg"} />
              <p>{item.main.temp}°C</p>
              <p>{formatTime(d)}</p>
            </Space>
          })}
        </Space>
      }
    </Fragment>
  );
}

export default WeatherHourly;