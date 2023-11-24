import { Box, Button, Stack } from "@mui/material";
import React, { useState } from "react";
import { Add } from "@mui/icons-material";
import MulitInput from "../Form/MulitInput";
import FormModal from "../../layout/modals/Form.modal";
import FormInput from "../../layout/inputs/TextField.input";
import { useNavigate } from "react-router-dom";
import { CreateLinkService } from "../../services/links/createLink.service";

const CreateLink = ({ showModal, handleCloseModal }) => {
  const [title, setTitle] = useState("");
  const [link, setLink] = useState("");
  const [inputTags, setInputTagss] = useState([]);
  const navigate = useNavigate();

  const handleCreateLink = async () => {
    try {
      const { isError, response } = await CreateLinkService(
        { title, link, tags: inputTags },
        localStorage.getItem("userID"),
        localStorage.getItem("token")
      );
      if (!isError) {
        handleCloseModal();
        navigate(0);
        navigate("/dashboard");
        return;
      } else {
        console.log("Some error occured");
      }
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
              <MulitInput handleChange={handleChange} inputTags={inputTags} />
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
