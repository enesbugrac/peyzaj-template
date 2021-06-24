import React, { useState } from "react";
import { Typography, Button, Form, message, Input, Icon } from "antd";
import FileUpload from "./FileUpload";
import { firestore } from "../firebase";
const { Title } = Typography;
const { TextArea } = Input;

const Continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

function UploadProductPage(props) {
  const [TitleValue, setTitleValue] = useState("");
  const [DescriptionValue, setDescriptionValue] = useState("");
  const [Images, setImages] = useState([]);

  const onTitleChange = (event) => {
    setTitleValue(event.currentTarget.value);
  };

  const onDescriptionChange = (event) => {
    setDescriptionValue(event.currentTarget.value);
  };

  const updateImages = (newImages) => {
    setImages(newImages);
  };
  const onSubmit = (event) => {
    event.preventDefault();

    if (!TitleValue || !DescriptionValue || !Images) {
      return alert("fill all the fields first!");
    }

    const variables = {
      title: TitleValue,
      desc: DescriptionValue,
      images: Images,
    };
    firestore
      .collection("projeler")
      .add(variables)
      .then(() => console.log("OLDU"))
      .catch((e) => console.log(e));
    console.log(variables);
  };

  return (
    <div style={{ maxWidth: "700px", margin: "2rem auto" }}>
      <div style={{ textAlign: "center", marginBottom: "2rem" }}>
        <Title level={2}> Yeni Proje Ekleme</Title>
      </div>

      <Form onSubmit={onSubmit}>
        {/* DropZone */}
        <FileUpload refreshFunction={updateImages} />

        <br />
        <br />
        <label>Başlık</label>
        <Input onChange={onTitleChange} value={TitleValue} />
        <br />
        <br />
        <label>Açıklama</label>
        <TextArea onChange={onDescriptionChange} value={DescriptionValue} />
        <br />
        <br />

        <Button type="primary" onClick={onSubmit}>
          Yükle
        </Button>
      </Form>
    </div>
  );
}

export default UploadProductPage;
