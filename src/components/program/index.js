import React from 'react';
import './index.scss';
import { LinkOutlined } from '@ant-design/icons';

function ProgramHeader (props) {
  return (
    <div className="project-header">
      <div>
        <span className="project-header_name">
          <a href={props.content.websiteURL}>{props.content.title}</a>
        </span>
        <LinkOutlined className="link_icon" />
      </div>
      <div className="project-type">{props.content.type}</div>
      <div>year: {props.content.year}</div>
    </div>
  );
}

function ProgramContent (props) {
  return (
    <div className="project_content">
      <div className="project_img">
        <img src={props.content.imgUrl} alt="project demo" />
      </div>
      <div className="project__content__right">
        <div className="project__description">
          <div className="project__description__title">Description</div>
          <p>{props.content.desc}</p>
        </div>
        <div>
          <div className="project__description__title">My role</div>
          <p>{props.content.role}</p>
        </div>
        <div>
          <div className="project__description__title">
            Tech-stack I have used
          </div>
          {Object.keys(props.content.tech).map((key) => (
            <div className="skill-set">
              <span className="skill-set__name">{`${key}: `}</span>
              {props.content.tech[key].map((tech) => (
                <span>{`${tech} `}</span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function Program (props) {
  return (
    <div className="commercial-project">
      <ProgramHeader content={props.program.summary} />
      <ProgramContent content={props.program.content} />
    </div>
  );
}
