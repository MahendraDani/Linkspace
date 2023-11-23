import { Add } from "@mui/icons-material";
import { Box, Button, Stack, TextField } from "@mui/material";
import axios from "axios";
import React, { useState } from "react";
import FormModal from "../../layout/modals/Form.modal";
import FormInput from "../../layout/inputs/TextField.input";
import { apiUrl } from "../../config/apiEndpoints";
import { useNavigate } from "react-router-dom";

const CreateTag = ({ showModal, handleCloseModal }) => {
  const [name, setName] = useState("");
  const [purpose, setPurpose] = useState("");
  const navigate = useNavigate();
  const handleCreateTag = async () => {
    try {
      const response = await axios.post(
        `${apiUrl}/api/users/tags/${localStorage.getItem("userID")}`,
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
      navigate(0);
      navigate("/dashboard");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <FormModal open={showModal} handleCloseModal={handleCloseModal}>
      <FormModal.Content>
        <Stack direction={"column"} gap={4}>
          <FormModal.Title>Save a new tag</FormModal.Title>
          <FormInput
            label={"Name"}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
          <FormInput
            label={"Purpose"}
            onChange={(e) => {
              setPurpose(e.target.value);
            }}
          />
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
              onClick={handleCreateTag}
            >
              Create
            </Button>
          </Box>
        </Stack>
      </FormModal.Content>
    </FormModal>
  );
};

export default CreateTag;
