import { Box, Button, Modal, Stack, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Search, ArrowBackOutlined } from "@mui/icons-material";
import axios from "axios";
import SearchItem from "./SearchItem";

const Searchbar = () => {
  const [links, setLinks] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [query, setQuery] = useState("");

  const toggleSearchBar = () => {
    setOpen(!open);
  };
  const getLinksOfUser = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/users/links/all/${localStorage.getItem(
          "userID"
        )}`,
        {
          headers: {
            authorization: localStorage.getItem("token"),
          },
        }
      );
      const userLinks = response.data;
      setLinks(userLinks.reverse());
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    const handleKeyDown = (event) => {
      // Check if Ctrl (Cmd on Mac) + K is pressed
      if ((event.ctrlKey || event.metaKey) && event.key === "k") {
        event.preventDefault();
        toggleSearchBar();
      }
      if (event.key === "Escape" && open) {
        toggleSearchBar();
      }
    };

    getLinksOfUser();
    // Add the event listener when the component mounts
    window.addEventListener("keydown", handleKeyDown);

    // Remove the event listener when the component unmounts
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [open]);
  return (
    <>
      <Button
        color="success"
        variant="outlined"
        sx={{ textTransform: "none" }}
        onClick={handleOpen}
      >
        <Stack direction={"row"} gap={3} sx={{ alignItems: "center" }}>
          <Stack direction={"row"} gap={1}>
            <Search />
            <Typography>Search...</Typography>
          </Stack>
          <Box
            sx={{
              border: "1px solid",
              borderColor: "success",
              px: 0.4,
              py: 0.1,
              borderRadius: 1.4,
              bgcolor: "primary.main",
            }}
          >
            <Typography variant="body2">Ctrl + K</Typography>
          </Box>
        </Stack>
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box
          sx={{
            position: "absolute",
            top: { md: "50%", xs: "0" },
            left: { md: "50%", xs: 0 },
            bottom: { md: "50%", xs: 0 },
            right: { md: "50%", xs: 0 },

            transform: { md: "translate(-50%, -50%)" },
            width: { md: 400 },
            bgcolor: "secondary.main",
            boxShadow: 24,
            overflow: "scroll",
            p: { md: 4 },
          }}
        >
          <Stack>
            <Stack
              direction={"row"}
              sx={{
                p: 1.5,
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                borderBottom: "1px solid",
                borderColor: "greenBackground.main",
              }}
            >
              <Box>
                <ArrowBackOutlined
                  sx={{ color: "gray.main", cursor: "pointer" }}
                  onClick={() => {
                    setOpen(false);
                  }}
                />
              </Box>
              <input
                className="w-[100%] p-2 bg-transparent focus:outline-none text-xl placeholder:text-[#5C5C5C]"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
              />
              {/* <Box
                sx={{
                  border: "1px solid",
                  borderColor: "success",
                  px: 0.4,
                  py: 0.1,
                  borderRadius: 1.4,
                  bgcolor: "primary.main",
                }}
              >
                <Typography variant="body2">Esc</Typography>
              </Box> */}
              <Box>
                <Search sx={{ color: "gray.main" }} />
              </Box>
            </Stack>
            <Stack sx={{}}>
              <div>
                <SearchItem links={links} query={query} />
              </div>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Searchbar;
