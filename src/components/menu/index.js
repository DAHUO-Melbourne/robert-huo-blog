import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import 'antd/dist/antd.css';
import { Menu } from 'antd';
import {
  HomeOutlined,
  DesktopOutlined,
  FileDoneOutlined,
  GlobalOutlined,
} from '@ant-design/icons';
import './index.scss';
import { useIsMobile } from '../../utils/responsiveness';

export default function TopMenu(props) {
  const [current, setCurrent] = useState('home');
  const language = props.currentLanguage;
  const isOnMobile = useIsMobile();

  const handleClick = (e) => {
    setCurrent(e.key);
  };

  const handleSwitch = (e) => {
    props.handleSwitch(e.key);
  };

  const { SubMenu } = Menu;

  return (
    <Menu
      onClick={handleClick}
      selectedKeys={current}
      mode="horizontal"
      className="menu"
    >
      {!isOnMobile && (
        <Menu.Item key="name">
          <Link to="/">{language === 'English' ? 'Robert Da Huo' : '霍达'}</Link>
        </Menu.Item>
      )}
      <Menu.Item key="home" style={{width: isOnMobile && '42.5%'}}>
        <Link to="/">{language === 'English' ? 'Homepage' : '首页'}</Link>
      </Menu.Item>
      <Menu.Item key="portfolio" icon={<DesktopOutlined />} style={{width: isOnMobile && '42.5%'}}>
        <Link to="/programs">
          {language === 'English' ? 'Portfolio' : '项目'}
        </Link>
      </Menu.Item>
      <Menu.Item key="resume" icon={<FileDoneOutlined />}>
        <a
          href="https://github.com/DAHUO-Melbourne/robert-huo-blog/raw/master/src/RobertHuoResume.pdf"
          rel="noopener noreferrer"
          download
        >
          {language === 'English' ? 'Resume' : '简历'}
        </a>
      </Menu.Item>
      <SubMenu
        key="SubMenu"
        icon={<GlobalOutlined />}
        selectedKeys={props.currentLanguage}
        onClick={handleSwitch}
        title="Language/语言"
      >
        <Menu.Item key="English">English</Menu.Item>
        <Menu.Item key="Chinese">中文</Menu.Item>
      </SubMenu>
    </Menu>
  );
}
