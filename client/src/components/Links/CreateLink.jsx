import {
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Add } from "@mui/icons-material";
import MulitInput from "../Form/MulitInput";
import axios from "axios";
import FormModal from "../../layout/modals/Form.modal";
import FormInput from "../../layout/inputs/TextField.input";

const CreateLink = ({ showModal, handleCloseModal, userTags }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [inputTags, setInputTagss] = useState([]);

  const handleCreateLink = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/users/links/${localStorage.getItem(
          "userID"
        )}`,
        {
          title: title,
          link: link,
          tags: inputTags,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      handleCloseModal();
      window.location = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInputTagss(typeof value === "string" ? value.split(",") : value);
  };

  return (
    <Box>
      <FormModal open={showModal} handleCloseModal={handleCloseModal}>
        <FormModal.Content>
          <Stack direction={"column"} gap={4}>
            <FormModal.Title>Save a new link</FormModal.Title>
            <FormInput
              label={"Title"}
              onChange={(e) => {
                setTitle(e.target.value);
              }}
            />
            <FormInput
              label={"Link"}
              onChange={(e) => {
                setLink(e.target.value);
              }}
            />
            <Box>
              <MulitInput
                handleChange={handleChange}
                inputTags={inputTags}
                userTags={userTags}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="contained"
                disableElevation
                startIcon={<Add />}
                sx={{
                  border: "1px solid #433C53",
                  bgcolor: "transparent",
                  color: "#433C53",
                  ":hover": {
                    bgcolor: "#393347",
                    color: "white",
                  },
                }}
                onClick={handleCreateLink}
              >
                Create
              </Button>
            </Box>
          </Stack>
        </FormModal.Content>
      </FormModal>
    </Box>
  );
};

export default CreateLink;
