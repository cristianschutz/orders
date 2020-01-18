import React from "react";

import { Wrapper } from "./styles";

export default function Table(props) {
  const head = props.head ? props.head : [];
  const content = props.content ? props.content : [];
  const foot = props.foot ? props.foot : [];

  return (
    <Wrapper>
      <thead>
        <tr>
          {head.map(item => {
            return <th key={item.id}>{item.name}</th>;
          })}
        </tr>
      </thead>
      <tbody></tbody>
      <tfoot>
        {content.map(itemContent => {
          return (
            <tr>
              {head.map((itemHeader, index) => (
                <td key={itemContent.uid}>--</td>
              ))}
            </tr>
          );
        })}
      </tfoot>
    </Wrapper>
  );
}
