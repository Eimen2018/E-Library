import React, { useState } from "react";
import { ProductConsumer } from "../context";
import { Link } from "react-router-dom";
const AdminUpload = () => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [catagory, setCatagory] = useState("");
  const [price, setPrice] = useState("");
  const [type, setType] = useState("");
  const [info, setInfo] = useState("");
  const [img, setImg] = useState([]);

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
    const HandoutType = [
      "Information System",
      "Computer Science",
      "Software Engineering"
    ];
    const BookType = ["Programming", "Educational", "Fiction"];
    removeoptions();
    var catagory = document.getElementById("catagory");
    setType(e.target.value);
    switch (e.target.value) {
      case "Book":
        BookType.forEach(element => {
          var option = document.createElement("option");
          option.value = element;
          option.innerHTML = element;
          catagory.appendChild(option);
        });
        break;
      case "Handout":
        HandoutType.forEach(element => {
          var option = document.createElement("option");
          option.defaultValue = element;
          option.innerHTML = element;
          catagory.appendChild(option);
        });
        break;
    }
  };
  const updateImg = e => {
    //   e.preventDefault();
    setImg(e.target.files);
  };
  const removeoptions = () => {
    var cat = document.getElementById("catagory");
    for (let index = cat.options.length - 1; index > 0; index--) {
      cat.remove(index);
    }
  };
  return (
    <div className="coming-soon mt-3">
      <div className="magazine-text mt-5">
        <ProductConsumer>
          {value => {
            return (
              <div className="upload-form-container d-flex justify-content-center mt-5">
                <form
                  onSubmit={e => {
                    let formData = new FormData();
                    formData.append("title", title);
                    formData.append("author", author);
                    formData.append("catagory", catagory);
                    formData.append("price", price);
                    formData.append("type", type);
                    formData.append("info", info);
                    formData.append("img", img[0]);
                    e.preventDefault();
                    value.sendData(formData, 1);
                  }}
                  encType="multipart/form-data"
                >
                  <input
                    type="text"
                    name="title"
                    className="form-control mb-2"
                    onChange={updateTitle}
                    placeholder="Title"
                  />
                  <input
                    type="text"
                    name="author"
                    className="form-control mb-2"
                    onChange={updateAuthor}
                    placeholder="Author"
                  />
                  <select
                    name="type"
                    id="type"
                    required
                    onChange={updateType}
                    className="form-control mb-2"
                  >
                    <option defaultValue="" disabled selected>
                      Type
                    </option>
                    <option defaultValue="Book">Book</option>
                    <option defaultValue="Handout">Handout</option>
                    <option defaultValue="Magazine">Magazine</option>
                  </select>
                  <select
                    name="catagory"
                    id="catagory"
                    required
                    onChange={updateCatagory}
                    className="form-control mb-2"
                  >
                    <option defaultValue="" disabled selected>
                      Catagory
                    </option>
                  </select>
                  <input
                    type="file"
                    name="img"
                    className="form-control-file mb-2"
                    onChange={updateImg}
                  />
                  <input
                    type="text"
                    name="price"
                    className="form-control mb-2"
                    onChange={updatePrice}
                    placeholder="Price"
                  />
                  <textarea
                    name="info"
                    id="info"
                    cols="20"
                    rows="5"
                    placeholder="Description"
                    required
                    className="form-control mb-2"
                    onChange={updateInfo}
                  />
                  <button
                    type="submit"
                    className="btn btn-outline-primary float-right"
                  >
                    Submit
                  </button>
                </form>
              </div>
            );
          }}
        </ProductConsumer>
      </div>
    </div>
  );
};

export default AdminUpload;
