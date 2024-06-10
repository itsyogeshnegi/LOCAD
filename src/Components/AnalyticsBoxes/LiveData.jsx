import React from 'react'
import './LiveData.css'
import CountUp from 'react-countup';
import Spinner from "react-bootstrap/Spinner";
const LiveData = ({heading , color , data}) => {
  return (
    <div className="liveData" style={{ backgroundColor: `${color}` }}>
      <div className="dataName">
        <h6>{heading}</h6>
      </div>
      <div className="fectData">
        {data ? (
          <CountUp start={0} end={data} />
        ) : (
          <>
            <Spinner animation="grow" />
            <span className="visually">Loading...</span>
          </>
        )}
      </div>
    </div>
  );
}

export default LiveData