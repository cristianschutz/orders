import React from "react";

import { Wrapper } from "./styles";

export default function Table(props) {
  const head = props.head ? props.head : [];
  const content = props.content ? props.content : [];
  const foot = props.foot;

  return (
    <Wrapper>
      <thead>
        <tr>
          {head.map(item => {
            return <th key={item.id}>{item.name}</th>;
          })}
        </tr>
      </thead>
      <tbody>
        {content.map((itemContent, index) => {
          return (
            <tr key={itemContent.uid}>
              {head.map((itemHeader, index) => {
                return (
                  <td key={itemHeader.uid}>{itemContent[itemHeader.id]}</td>
                );
              })}
            </tr>
          );
        })}
      </tbody>
      <tfoot>
        {foot && (
          <tr>
            <td colSpan={head.lenght}>{foot}</td>
          </tr>
        )}
      </tfoot>
    </Wrapper>
  );
}
