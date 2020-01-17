import React from "react";

import { Wrapper } from "./styles";

export default function Table(props) {
  const content = props.content ? props.content : [];

  return (
    <Wrapper>
      <thead>
        <tr>
          <th></th>
        </tr>
      </thead>
      <tbody>{content}</tbody>
      <tfoot>
        <tr>
          <td></td>
        </tr>
      </tfoot>
    </Wrapper>
  );
}
