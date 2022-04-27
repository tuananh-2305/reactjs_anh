import React, { useEffect, useState} from 'react';
import { useForm } from "react-hook-form";
import styled from 'styled-components';

const Heading = styled.h1`
    font-size: "30px";
    color: ${props => props.colorText ? props.colorText : "blue"};
    background: ${props => props.bg ? props.bg : "blue"};
`;
const Text = (props) => {
    return (
        <Heading colorText={props.colorText} bg={props.bg}>
            {props.text}
        </Heading>
    );
};

export default Text;