import React from 'react';

function Map(props) {
  return (
    <div className='map'>
      <iframe
        title='map'
        src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3723.651356182433!2d105.78995061548379!3d21.046631692542693!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab306caa83a7%3A0xbfe4b316823e38f7!2zSOG7jWMgVmnhu4duIEPDtG5nIE5naOG7hyBCxrB1IENow61uaCBWaeG7hW4gVGjDtG5n!5e0!3m2!1svi!2s!4v1631898317128!5m2!1svi!2s'
        width='100%'
        height='800px'
        style={{ border: 0 }}
        allowFullScreen=''
        loading='lazy'
      ></iframe>
    </div>
  );
}

export default Map;
