import React, {useContext} from 'react';
import {LinkedinOutlined, GithubOutlined, InstagramOutlined} from '@ant-design/icons';
import './index.css';
import { Context } from '../../App';

export default function SocialNetwork() {
    const currentLanguage = useContext(Context);
    return (
        <div className='home__social'>
            <span className='home__social__follow-me'>{currentLanguage=== 'English' ? 'Follow me' : '关注我'}</span>
            <a className='home__social__icon' href='https://www.linkedin.com/in/robert-da-huo/' target='_blank' rel="noopener noreferrer"><LinkedinOutlined /></a>
            <a className='home__social__icon' href='https://github.com/DAHUO-Melbourne' target='_blank' rel="noopener noreferrer"><GithubOutlined /></a>
            <a className='home__social__icon' href='' target='_blank' rel="noopener noreferrer"><InstagramOutlined /></a>
        </div>
    )
}
