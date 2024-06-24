import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div
`
color : white;
font-size: large;
text-align: center;
line-height: 400px;
`;

function WorkOutPage(){
    return(
     <StyledText>운동칸입니다</StyledText>
    );
}

export default WorkOutPage;