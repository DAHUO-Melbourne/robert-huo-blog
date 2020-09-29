import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { BackTop } from 'antd';
import SocialNetwork from '../../components/socialNetwork';
import Program from '../../components/program';
import './index.scss';

export default function Programs() {
  const [programList, setProgramList] = useState([]);
  useEffect(() => {
    axios.get('/api/programs.json').then((res) => {
      setProgramList(res.data.data.programList);
    });
  }, []);
  return (
    <div className="portfolio">
      <BackTop />
      <SocialNetwork />
      {programList.map((program) => (
        <Program key={program.id} program={program} />
      ))}
    </div>
  );
}
