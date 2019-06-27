import React, { useState } from "react";
import { ProductConsumer } from "../context";

const Registration = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [catagory, setCatagory] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [info, setInfo] = useState("");
  const [img,setImg] = useState([]);

  const updateTitle = e => {
    setTitle(e.target.value);
  };
  const updateAuthor = e => {
    setAuthor(e.target.value);
  };
  const updatePrice = e => {
    setPrice(e.target.value);
  };
  const updateInfo = e => {
    setInfo(e.target.value);
  };
  const updateCatagory = e => {
    setCatagory(e.target.value);
  };
  const updateType = e => {
    setType(e.target.value);
  };
  const updateImg = e => {
    //   e.preventDefault();
    setImg(e.target.files);
  };
  return (
    <main>
      <section className="presentation">
        <ProductConsumer>
          {value => {
            return (
              <form
                onSubmit={e => {
                    
                  let formData = new FormData();
                  formData.append("title", title);
                  formData.append("author", author);
                  formData.append("catagory", catagory);
                  formData.append("price", price);
                  formData.append("type", type);
                  formData.append("info", info);
                  formData.append("img",img[0]);
                  e.preventDefault();
                  value.sendData(formData);
                }}
                encType="multipart/form-data"
              >
                <input
                  type="text"
                  name="title"
                  className="form-control"
                  onChange={updateTitle}
                  placeholder="Title"
                />
                <input
                  type="text"
                  name="author"
                  className="form-control"
                  onChange={updateAuthor}
                  placeholder="Author"
                />
                <select name="type" id="type" required onChange={updateType} className="form-control">
                <option defaultValue="" disabled selected>Type</option>
                <option defaultValue="Book" >Book</option >
                <option defaultValue="Handout" >Handout</option>
                <option defaultValue="Magazine" >Magazine</option>
                </select>
                <select name="catagory" id="cat" required onChange={updateCatagory} className="form-control">
                <option defaultValue="" disabled selected>Catagory</option>
                <option defaultValue="Programming" >Programming</option >
                <option defaultValue="Fiction" >Fiction</option>
                <option defaultValue="Educational" >Educational</option>
                </select>
                <input
                  type="file"
                  name="img"
                  className="form-control"
                  onChange={updateImg}
                />
                <input
                  type="text"
                  name="price"
                  className="form-control"
                  onChange={updatePrice}
                  placeholder="Price"
                />
                <textarea name="info" id="info" cols="30" rows="10" required className="form-control" onChange={updateInfo} placeholder="Info"> </textarea>
                <button type="submit" className="btn btn-outline-primary form-control">Submit</button>
              </form>
            );
          }}
        </ProductConsumer>
      </section>
    </main>
  );
};

export default Registration;
