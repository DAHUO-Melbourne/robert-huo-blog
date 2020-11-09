import React, { useContext, useState } from 'react';
import { CopyOutlined } from '@ant-design/icons';
import Clipboard from 'react-clipboard.js';
import { message, BackTop } from 'antd';
import SocialNetwork from '../../components/socialNetwork';
import 'antd/dist/antd.css';
import './index.scss';
import { Context } from '../../App';

function Portrait () {
  return (
    <div className="portrait">
      <img
        src="/static/media/avatar.jpg"
        alt="avatar"
        className="portrait_img"
      />
    </div>
  );
}

function Introduction () {
  const currentLanguage = useContext(Context);
  return (
    <div className="intro">
      <p>
        {currentLanguage === 'English'
          ? 'Hi, I am Robert. A passionate full-stack web developer based in Melbourne, Australia. I enjoy the excitement of learning new things and always like to share knowledge with others.I am an excellent team player in Agile/Scrum teams. I believe efficient and responsible communications are the fundamentals of good collaboration.'
          : '你好，我是Robert，坐标墨尔本，一个充满热诚的网页开发者。 我善用代码解决问题. 对于知识的态度是乐于探究更乐于分享。可以单干，也喜欢团队，熟悉敏捷开发. 深知有效负责的沟通是良好协作的第一基石。'}
      </p>
    </div>
  );
}

function ContactMethod () {
  const [email] = useState(' roberthuomelbourne@gmail.com');
  const [number] = useState(' +61 450 950 778 ');
  const currentLanguage = useContext(Context);
  const copySuccess = () => {
    message.info('Copied successfully');
  };
  return (
    <div className="home__contacts">
      <BackTop />
      <SocialNetwork />
      <p>
        <CopyOutlined />
        {currentLanguage === 'English' ? 'Email: ' : '邮箱：'}
        <Clipboard
          className="clipboard"
          component="span"
          data-clipboard-text={email}
          onSuccess={copySuccess}
        >
          {email}
        </Clipboard>
      </p>
      <p>
        <CopyOutlined />
        {currentLanguage === 'English' ? 'Mobile: ' : '手机：'}
        <Clipboard
          className="clipboard"
          component="span"
          data-clipboard-text={number}
          onSuccess={copySuccess}
        >
          {number}
        </Clipboard>
      </p>
    </div>
  );
}

function Banner () {
  const currentLanguage = useContext(Context);
  return (
    <div className="home__banner">
      <marquee>
        <span className="scroll_span">
          {currentLanguage === 'English'
            ? 'I spot problems, I solve problems, I code cool website, I love MERN stack'
            : '我写优质的网站，我擅长MERN技术，我发现问题也解决问题'}
        </span>
      </marquee>
    </div>
  );
}

export default function Homepage () {
  return (
    <div className="home">
      <div className="wrapper">
        <div className="wrapper_up">
          <Portrait />
          <Introduction />
        </div>
        <div className="wrapper_bottom">
          <ContactMethod />
          <Banner />
        </div>
      </div>
    </div>
  );
}
