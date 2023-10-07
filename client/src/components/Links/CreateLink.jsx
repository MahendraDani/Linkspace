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
      <Modal open={showModal} onClose={handleCloseModal}>
        <Fade in={showModal}>
          <Box
            sx={{
              position: "absolute",
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "secondary.main",
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
                  color="gray"
                  variant="outlined"
                  label="Title"
                  sx={{ width: "100%" }}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </Box>
              <Box>
                <TextField
                  color="gray"
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
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default CreateLink;
