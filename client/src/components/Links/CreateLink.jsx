import {
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import MulitInput from "../Form/MulitInput";
import axios from "axios";

const CreateLink = ({ showModal, handleCloseModal }) => {
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
      <Modal open={showModal} onClose={handleCloseModal}>
        <Fade in={showModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "#E0F5E6",
              boxShadow: 16,
              p: 4,
            }}
          >
            <Stack direction={"column"} gap={4}>
              <Box sx={{ textAlign: "center" }}>
                <Typography variant="h5" fontWeight={500}>
                  Save a new link
                </Typography>
              </Box>
              <Box>
                <TextField
                  variant="outlined"
                  label="Title"
                  sx={{ width: "100%" }}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <Box>
                <TextField
                  variant="outlined"
                  multiline
                  label="Link"
                  sx={{ width: "100%" }}
                  onChange={(e) => setLink(e.target.value)}
                />
              </Box>
              <Box>
                <MulitInput
                  handleChange={handleChange}
                  inputTags={inputTags}
                  setInputTagss={setInputTagss}
                />
              </Box>
              <Box sx={{ textAlign: "center" }}>
                <Button
                  variant="outlined"
                  startIcon={<Add />}
                  onClick={handleCreateLink}
                >
                  Create
                </Button>
              </Box>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default CreateLink;
