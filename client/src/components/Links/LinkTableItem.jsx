import React, { useState } from "react";
import {
  Alert,
  Box,
  Button,
  IconButton,
  Link,
  Modal,
  Paper,
  Popover,
  Stack,
  Typography,
  Skeleton,
} from "@mui/material";
import {
  EditOutlined,
  DeleteOutlined,
  OpenInNew,
  MoreVert,
} from "@mui/icons-material";
import axios from "axios";
import UpdateLinkForm from "../Form/UpdateLinkForm";
import { apiUrl } from "../../config/apiEndpoints";
import { useNavigate } from "react-router-dom";

const LinkTableItem = ({ link }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => {
    setShowModal(true);
  };
  const handleCloseModal = () => {
    setShowModal(false);
  };

  const deleteLink = async (linkID) => {
    try {
      const response = await axios.delete(
        `${apiUrl}/api/users/links/delete/${linkID}`,
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
  const [selectedLink, setSelectedLink] = useState({});
  const getSelectedLink = async (linkID) => {
    try {
      // const token = localStorage.getItem("token");
      const response = await axios.get(`${apiUrl}/api/users/links/${linkID}`, {
        headers: {
          authorization: localStorage.getItem("token"),
        },
      });
      // console.log(response.data);
      setSelectedLink(response.data);
    } catch (error) {
      console.log(error);
    }
  };
  const [tags, setTags] = useState([]);
  const getTagsOfUsers = async () => {
    try {
      const response = await axios.get(
        `${apiUrl}/api/users/tags/all/${localStorage.getItem("userID")}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      setTags(response.data.tags);
    } catch (error) {
      console.log(error);
    }
  };
  const [openWarning, setOpenWarning] = useState(false);
  const handleOpenWarning = () => setOpenWarning(true);
  const handleCloseWarning = () => setOpenWarning(false);
  return (
    <Stack
      direction={"row"}
      sx={{
        borderBottom: "1px solid",
        borderColor: "secondary.main",
        justifyContent: "space-between",
        alignItems: "center",
        transition: "all 0.3s ease-in",
        px: 2,
        ":hover": {
          bgcolor: "secondary.main",
        },
      }}
    >
      <Box>
        <Stack direction={"column"} sx={{ py: 1 }}>
          {/* Outer box */}
          <Stack
            direction={"row"}
            sx={{
              justifyContent: "start",
              alignItems: "center",
              gap: 2,
              pr: 2,
            }}
          >
            <Box>
              <Typography
                variant="subtitle1"
                sx={{
                  fontWeight: "500",
                }}
              >
                {link.title}
              </Typography>
            </Box>
            <Box>
              <Stack
                direction={"row"}
                sx={{
                  justifyContent: "start",
                  alignItems: "center",
                  gap: 1,
                }}
              >
                {link.tags.map((tag, index) => {
                  return (
                    <Box key={index}>
                      <Typography
                        variant="body2"
                        sx={{
                          bgcolor: "mediumGreen.main",
                          py: 0.3,
                          px: 0.9,
                          borderRadius: "20px",
                          fontSize: 12,
                        }}
                      >
                        {tag}
                      </Typography>
                    </Box>
                  );
                })}
              </Stack>
            </Box>
          </Stack>
          <Box>
            <Typography variant="body2">{link.link} </Typography>
          </Box>
        </Stack>
      </Box>
      {/* Only for screens greater than md */}
      <Stack
        direction={"row"}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          gap: 1,
          display: { xs: "none", md: "flex" },
        }}
      >
        {/* <Box>
          <Typography variant="body2">{link.createdOn}</Typography>
        </Box> */}
        <Box>
          <IconButton
            onClick={() => {
              getSelectedLink(link.linkID);
              getTagsOfUsers();
              handleOpenModal();
            }}
          >
            <EditOutlined
              fontSize="small"
              sx={{
                color: "gray.main",
                cursor: "pointer",
              }}
            />
          </IconButton>
          <UpdateLinkForm
            selectedLink={selectedLink}
            showModal={showModal}
            handleCloseModal={handleCloseModal}
            userTags={tags}
          />
        </Box>
        <Box>
          <IconButton
            onClick={() => {
              deleteLink(link.linkID);
            }}
          >
            <DeleteOutlined
              fontSize="small"
              sx={{
                color: "gray.main",
              }}
            />
          </IconButton>
        </Box>
        <Box>
          <IconButton onClick={handleOpenWarning}>
            <OpenInNew
              fontSize="small"
              sx={{
                color: "gray.main",
                cursor: "pointer",
              }}
            />
          </IconButton>
        </Box>
        <Modal open={openWarning} onClose={handleCloseWarning}>
          <Box
            sx={{
              position: "absolute",
              borderRadius: 0.5,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%)",
              width: 400,
              bgcolor: "secondary.main",
              boxShadow: 16,
              p: 4,
            }}
          >
            <Stack
              sx={{
                justifyContent: "center",
                alignItems: "center",
                gap: 2,
              }}
            >
              <Box>
                <Alert severity="info">You are being redirected to</Alert>
              </Box>
              <Box>
                <Typography>{link.link}</Typography>
              </Box>
              <Stack direction={"row"} gap={2}>
                <Link href={link.link} target="_blank">
                  <Button
                    variant="contained"
                    disableElevation
                    sx={{
                      border: "1px solid",
                      borderColor: "black",
                      bgcolor: "transparent",
                      ":hover": {
                        bgcolor: "black",
                        color: "lightCyan.main",
                      },
                    }}
                    endIcon={<OpenInNew />}
                  >
                    Visit Site
                  </Button>
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Modal>
      </Stack>

      <Box sx={{ display: { xs: "block", md: "none" } }}>
        <IconButton
          // sx={{ color: "secondary.main" }}
          aria-describedby={id}
          variant="contained"
          onClick={handleClick}
        >
          <MoreVert sx={{ color: "gray.main" }} />
        </IconButton>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <Stack sx={{ p: 1.5, bgcolor: "secondary.main", gap: 1 }}>
            <Box>
              <IconButton
                onClick={() => {
                  getSelectedLink(link.linkID);
                  getTagsOfUsers();
                  handleOpenModal();
                }}
              >
                <EditOutlined
                  fontSize="small"
                  sx={{
                    cursor: "pointer",
                    color: "gray.main",
                  }}
                />
              </IconButton>
              <UpdateLinkForm
                selectedLink={selectedLink}
                showModal={showModal}
                handleCloseModal={handleCloseModal}
                userTags={tags}
              />
            </Box>
            <Box>
              <IconButton
                onClick={() => {
                  deleteLink(link.linkID);
                }}
              >
                <DeleteOutlined
                  fontSize="small"
                  sx={{
                    cursor: "pointer",
                    color: "gray.main",
                  }}
                />
              </IconButton>
            </Box>
            <Box>
              <IconButton onClick={handleOpenWarning}>
                <OpenInNew
                  fontSize="small"
                  sx={{
                    cursor: "pointer",
                    color: "gray.main",
                  }}
                ></OpenInNew>
              </IconButton>
            </Box>
            <Modal open={openWarning} onClose={handleCloseWarning}>
              <Box
                sx={{
                  position: "absolute",
                  borderRadius: 0.5,
                  top: "50%",
                  left: "50%",
                  transform: "translate(-50%, -50%)",
                  width: 400,
                  bgcolor: "secondary.main",
                  boxShadow: 16,
                  p: 4,
                }}
              >
                <Stack
                  sx={{
                    justifyContent: "center",
                    alignItems: "center",
                    gap: 2,
                  }}
                >
                  <Box>
                    <Alert severity="info">You are being redirected to</Alert>
                  </Box>
                  <Box>
                    <Typography>{link.link}</Typography>
                  </Box>
                  <Stack direction={"row"} gap={2}>
                    <Link href={link.link} target="_blank">
                      <Button
                        variant="contained"
                        disableElevation
                        sx={{
                          border: "1px solid",
                          borderColor: "black",
                          bgcolor: "transparent",
                          ":hover": {
                            bgcolor: "black",
                            color: "lightCyan.main",
                          },
                        }}
                        endIcon={<OpenInNew />}
                      >
                        Visit Site
                      </Button>
                    </Link>
                  </Stack>
                </Stack>
              </Box>
            </Modal>
          </Stack>
        </Popover>
      </Box>
    </Stack>
  );
};

export default LinkTableItem;
