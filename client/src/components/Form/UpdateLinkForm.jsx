import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { Add } from "@mui/icons-material";
import axios from "axios";
import MulitInput from "./MulitInput";

const UpdateLinkForm = ({
  selectedLink,
  showModal,
  handleCloseModal,
  userTags,
}) => {
  const [inputTags, setInputTagss] = useState([]);
  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setInputTagss(typeof value === "string" ? value.split(",") : value);
  };
  const [newTitle, setNewTitle] = useState("");
  const [newLinkUrl, setNewLinkUrl] = useState("");

  const [defaultTitle, setDefaultTitle] = useState("");
  const [defaultLinkUrl, setDefaultLinkUrl] = useState("");

  const handleUpdateLink = async (linkID) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/users/links/update/${linkID}`,
        {
          url: newLinkUrl,
          title: newTitle,
          tags: inputTags,
        },
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      console.log(response);
      window.location = "/dashboard";
    } catch (error) {
      console.log(error);
    }
  };

  const handleDefaultValue = () => {
    setDefaultTitle(selectedLink.title);
    setDefaultLinkUrl(selectedLink.link);
  };
  useEffect(() => {
    handleDefaultValue();
  }, [selectedLink]);
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
                  defaultValue={defaultTitle}
                  onChange={(e) => setNewTitle(e.target.value)}
                />
              </Box>
              <Box>
                <TextField
                  color="gray"
                  variant="outlined"
                  multiline
                  label="Link"
                  sx={{ width: "100%" }}
                  defaultValue={defaultLinkUrl}
                  onChange={(e) => setNewLinkUrl(e.target.value)}
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
                  onClick={() => {
                    handleUpdateLink(selectedLink.linkID);
                  }}
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
                >
                  Update
                </Button>
              </Box>
            </Stack>
          </Box>
        </Fade>
      </Modal>
    </Box>
  );
};

export default UpdateLinkForm;
