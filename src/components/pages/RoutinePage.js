import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div
`
color : white;
font-size: large;
text-align: center;
line-height: 400px;
`;

function RoutinePage(){
    return(
     <StyledText>루틴입니다</StyledText>
    );
}

export default RoutinePage;