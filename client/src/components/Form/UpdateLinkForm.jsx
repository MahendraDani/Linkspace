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
import FormModal from "../../layout/modals/Form.modal";
import FormInput from "../../layout/inputs/TextField.input";
import { apiUrl } from "../../config/apiEndpoints";
import { useNavigate } from "react-router-dom";

const UpdateLinkForm = ({
  selectedLink,
  showModal,
  handleCloseModal,
  userTags,
}) => {
  const [inputTags, setInputTagss] = useState([]);
  const navigate = useNavigate();
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
        `${apiUrl}/api/users/links/update/${linkID}`,
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
      navigate(0);
      navigate("/dashboard");
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
      <FormModal open={showModal} handleCloseModal={handleCloseModal}>
        <FormModal.Content>
          <Stack direction={"column"} gap={4}>
            <FormModal.Title>Edit your link</FormModal.Title>
            <FormInput
              label={"Title"}
              defaultValue={defaultTitle}
              onChange={(e) => setNewTitle(e.target.value)}
            />
            <FormInput
              label={"Link"}
              defaultValue={defaultLinkUrl}
              onChange={(e) => setNewLinkUrl(e.target.value)}
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
        </FormModal.Content>
      </FormModal>
    </Box>
  );
};

export default UpdateLinkForm;
