import React, { useState, useEffect } from "react";
import { Container } from "./styles";

export default function Table(props) {
  const head = props.head ? props.head : [];
  // const content = ;
  const foot = props.foot;
  const [listing, setListing] = useState(props.content ? props.content : []);

  console.log(listing);

  function changeMonth(e) {
    let filter = listing.reduce(item => {
      let data = new Date(item.uid);
      console.log(data);
      data = data.getMonth() + 1;
      console.log(e.target.value, data, item.uid);
      return data === e.target.value;
    });
    console.log(filter);
    // filter && setListing(filter);
  }

  // useEffect(() => {
  //   console.log(content);
  // }, []);

  return (
    <Container>
      <form>
        <input name="s" placeholder="Filtro" />
        <label>
          <select onChange={e => changeMonth(e)}>
            <option value="">Mês</option>
            <option value="1">Jan</option>
            <option value="2">Fev</option>
            <option value="3">Mar</option>
            <option value="4">Abr</option>
            <option value="5">Mai</option>
            <option value="6">Jun</option>
            <option value="7">Jul</option>
            <option value="8">Ago</option>
            <option value="9">Set</option>
            <option value="10">Out</option>
            <option value="11">Nov</option>
            <option value="12">Dez</option>
          </select>
          <svg viewBox="0 0 256 512">
            <path
              fill="currentColor"
              d="M119.5 326.9L3.5 209.1c-4.7-4.7-4.7-12.3 0-17l7.1-7.1c4.7-4.7 12.3-4.7 17 0L128 287.3l100.4-102.2c4.7-4.7 12.3-4.7 17 0l7.1 7.1c4.7 4.7 4.7 12.3 0 17L136.5 327c-4.7 4.6-12.3 4.6-17-.1z"
            ></path>
          </svg>
        </label>
      </form>
      <table>
        <thead>
          <tr>
            {head.map(item => {
              return <th key={item.id}>{item.name}</th>;
            })}
          </tr>
        </thead>
        <tbody>
          {listing.map((itemContent, index) => {
            return (
              <tr key={index}>
                {head.map((itemHeader, index) => {
                  return (
                    <td key={index + 9999999}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: itemContent[itemHeader.id]
                        }}
                      ></div>
                    </td>
                  );
                })}
              </tr>
            );
          })}
        </tbody>
        {foot.lenght && (
          <tfoot>
            <tr>
              <td colSpan={head.lenght}>{foot}</td>
            </tr>
          </tfoot>
        )}
      </table>
    </Container>
  );
}
