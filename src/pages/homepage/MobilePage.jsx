import React from 'react';

const MobilePage = () => {
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
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          margin: 'auto'
        }}
      />
    </div>
  )
}

export default MobilePage;