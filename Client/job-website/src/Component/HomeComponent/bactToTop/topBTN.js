import React from "react";
import BackToTop from "react-back-to-top-button";
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';

export default function ScrollTop() {

  return <>

    <BackToTop
      showOnScrollDown
      showAt={500}
      speed={1500}
      easing="easeInOutQuint"
    >
      <div style={{ backgroundColor: '#001d3d', color: '#fff', width: '50px', height: '50px', borderRadius: '100%', lineHeight: '35px' }}>
        <ArrowUpwardIcon />
      </div>
    </BackToTop>
  </>
}