import React from 'react';

function Fanpage(props) {
  return (
    <div className='fanpage'>
      <iframe
        title='fanpage'
        src='https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2FHocvienPTIT&tabs=timeline&width=500&height=800&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=true&appId'
        width='500'
        height='800px'
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling='no'
        frameborder='0'
        allowFullScreen='true'
        allow='autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share'
      ></iframe>
    </div>
  );
}

export default Fanpage;
