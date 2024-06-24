import React from 'react';
import './UpperBar.css';

function UpperBar(){

return(
<nav className='upper-bar'>
    <div className='back'><i class="fa-solid fa-angle-left"></i> </div>
    <div className='status'>상태창 컴포넌트</div>
    <div className='upper-bar-button'>상단버튼</div>
</nav>
)

}

export default UpperBar;