import React, {useContext, useState} from 'react';
import { Context } from '../../App';
import { message } from 'antd';
import { CopyOutlined } from '@ant-design/icons';
import Clipboard from 'react-clipboard.js';

const MobilePage = () => {
  const currentLanguage = useContext(Context);
  const [email] = useState(' robertdahuo@gmail.com');
  const [number] = useState(' +61 450 950 778 ');
  const copySuccess = () => {
    message.info('Copied successfully');
  };

  return (
    <div style={{position: 'relative', minHeight: '100vh', backgroundColor: 'black'}}>
      <img
        src='static/media/mobile-bg.gif'
        style={{
          height: 300,
          marginTop: '48px',
          maxWidth: '100vw',
        }}
      />
      <img
        src='static/media/avatar.jpg'
        style={{
          width: 240,
          '-webkit-clip-path': 'polygon(25% 0, 100% 7%, 77% 100%, 0 83%)',
          clipPath: 'polygon(25% 0, 100% 7%, 77% 100%, 0 83%)',
          position: 'absolute',
          left: 0,
          right: 0,
          margin: '0 auto',
          top: '130px',
        }}
      />
      <p
        style={{
          color: '#a08787',
          padding: '20px',
          fontSize: '20px',
          fontWeight: '300',
          marginTop: '100px'
        }}
      >
        {currentLanguage === 'English'
          ? 'Hi, I am Robert. A passionate full-stack web developer based in Melbourne, Australia. I enjoy the excitement of learning new things and always like to share knowledge with others.I am an excellent team player in Agile/Scrum teams. I believe efficient and responsible communications are the fundamentals of good collaboration.'
          : '你好，我是Robert，坐标墨尔本，一个充满热诚的网页开发者。 我善用代码解决问题. 对于知识的态度是乐于探究更乐于分享。可以单干，也喜欢团队，熟悉敏捷开发. 深知有效负责的沟通是良好协作的第一基石。'}
      </p>
      <p style={{color: 'white', paddingLeft: '20px'}}>
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
      <p style={{color: 'white', paddingLeft: '20px', paddingBottom: '20px'}}>
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
      <div className="home__banner">
        <marquee>
          <span className="scroll_span">
            {currentLanguage === 'English'
              ? 'I spot problems, I solve problems, I code cool website, I love MERN stack'
              : '我写优质的网站，我擅长MERN技术，我发现问题也解决问题'}
          </span>
        </marquee>
      </div>
    </div>
  )
}

export default MobilePage;