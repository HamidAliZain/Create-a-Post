import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addlist, initialState } from "./reducer";
import {
  container,
  button,
  border,
  container_first,
  border_tr,
  border_des,
} from "./style";
export function Counter() {
  const lists = useSelector((state) => state.counter.list);
  const dispatch = useDispatch();

  const [title, setTitle] = useState("");
  const [des, newDesc] = useState("");
  const [list, setList] = useState([
    {
      title: "Emil",
      des: "Toby",
    },
  ]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const post = {
      title: title,
      des: des,
    };
    setTitle("");
    newDesc("");
    
    setList([...list, post]);

    dispatch(
      addlist({
        data: post,
      })
    );
  };

  return (
    <>
      <div style={container}>
        <h1> Create a Post</h1>
        <form onSubmit={handleSubmit}>
          <label>Title:</label>
          <br />
          <input
            type="text"
            name="title"
            placeholder="Add title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
          <br />
          <label>Description:</label>
          <br />
          <input
            type="text"
            name="body"
            placeholder="Add body"
            value={des}
            onChange={(e) => newDesc(e.target.value)}
            required
          />
          <br />
          <button style={button} type="submit">
            Create
          </button>
        </form>
      </div>
      <ol>
        <table style={container_first}>
          <tbody>
            <tr>
              <th style={border_tr}>ID</th>
              <th style={border_tr}>Tilte</th>
              <th style={border_des}>Description</th>
            </tr>

            {list.map((item, i) => (
              <tr key={i} style={border}>
                <td style={border}>
                  <li></li>
                </td>
                <td style={border}>{item.title}</td>
                <td style={border}>{item.des}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ol>
    </>
  );
}
