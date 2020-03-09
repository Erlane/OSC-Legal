import React from "react";
import styled from "styled-components";

export const MyButton = styled.button`
  width: 87%;
  height: 50px;
  text-transform: uppercase;
  color: #fff;
  background-color: #ff4136;
  border: 0;
  font-weight: 600;
  margin: 0.5rem 0;
`;

export default function Button(props) {
  return (
    <MyButton onClick={props.onClick} type={props.value}>
      {props.text}
    </MyButton>
  );
}
