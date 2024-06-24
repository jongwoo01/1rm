import React from 'react';
import './MobileWebView.css';
import UnderBar from './UnderBar';
import ContentsBox from './ContentsBox';
import UpperBar from './UpperBar';

function MobileWebView(){

return(
<div class="mobile-web-view">
    <div className ='upper-bar'> <UpperBar /> </div>
    <div className='contents-box'> < ContentsBox /> </div>
    <div className='under-bar' > <UnderBar /> </div>
</div>
)

}

export default MobileWebView;