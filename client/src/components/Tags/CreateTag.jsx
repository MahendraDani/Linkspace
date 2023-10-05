import { Add } from "@mui/icons-material";
import {
  Box,
  Button,
  Fade,
  Modal,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import axios from "axios";
import React, { useState } from "react";

const CreateTag = ({ showModal, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const handleCreateTag = async () => {
    try {
      const response = await axios.post(
        `http://localhost:3000/api/users/tags/${localStorage.getItem(
          "userID"
        )}`,
        {
          name: name,
          purpose: purpose,
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
  return (
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
                Save a new tag
              </Typography>
            </Box>
            <Box>
              <TextField
                variant="outlined"
                label="Name"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                sx={{ width: "100%" }}
              />
            </Box>
            <Box>
              <TextField
                variant="outlined"
                multiline
                onChange={(e) => {
                  setPurpose(e.target.value);
                }}
                label="Purpose"
                sx={{ width: "100%" }}
              />
            </Box>
            <Box sx={{ textAlign: "center" }}>
              <Button
                variant="outlined"
                startIcon={<Add />}
                onClick={handleCreateTag}
              >
                Create
              </Button>
            </Box>
          </Stack>
        </Box>
      </Fade>
    </Modal>
  );
};

export default CreateTag;