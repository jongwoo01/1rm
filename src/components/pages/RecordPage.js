import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div
`
color : black;
font-size: large;
text-align: center;
line-height: 100px;


`;

function RecordPage(){
    return(
     <StyledText>
        기록입니다<br />실험용 긴 컨텐츠<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />
        -<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />
        -<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />-<br />
        
     </StyledText>
    );
}

export default RecordPage;