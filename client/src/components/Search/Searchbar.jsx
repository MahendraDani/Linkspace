import {
  Box,
  Button,
  IconButton,
  Menu,
  MenuItem,
  Modal,
  Popover,
  Stack,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import {
  Search,
  ArrowBackOutlined,
  FilterAltOutlined,
  AddLink,
  BookmarkAddOutlined,
  Title,
  CloseOutlined,
  LinkOutlined,
  BookmarkBorderOutlined,
} from "@mui/icons-material";
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
  const [isLinkFilter, setisLinkFilter] = useState(false);
  const [istitleFilter, setistitleFilter] = useState(false);
  const [isTagFilter, setisTagFilter] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState("");

  const handleSelectedFilter = () => {
    if (appliedFilter === "link") {
      setistitleFilter(false);
      setisTagFilter(false);
      setisLinkFilter(true);
      return;
    }
    if (appliedFilter === "title") {
      setisLinkFilter(false);
      setisTagFilter(false);
      setistitleFilter(true);
      return;
    }
    if (appliedFilter === "tag") {
      setisLinkFilter(false);
      setistitleFilter(false);
      setisTagFilter(true);
    }
  };

  const removeSelectedFilter = () => {
    setisLinkFilter(false);
    setistitleFilter(false);
    setisTagFilter(false);
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

  const [anchorFilterEl, setAnchorFilterEl] = useState(null);

  const handleFilterClick = (event) => {
    setAnchorFilterEl(event.currentTarget);
  };

  const handleFilterMenuClose = () => {
    setAnchorFilterEl(null);
  };

  const openFilter = Boolean(anchorFilterEl);
  const id = openFilter ? "simple-popover" : undefined;

  useEffect(() => {
    handleSelectedFilter();
  }, [appliedFilter]);
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
            width: { md: 800 },
            minHeight: { md: "fit-content" },
            maxHeight: { md: 600 },
            bgcolor: "secondary.main",
            boxShadow: 24,
            p: { md: 0 },
            overflowY: "scroll",
          }}
        >
          <Stack sx={{ position: "relative" }}>
            <Stack
              direction={"row"}
              sx={{
                position: "sticky",
                zIndex: 10,
                top: 0,
                right: 0,
                left: 0,
                p: 1.5,
                justifyContent: "center",
                alignItems: "center",
                gap: 1,
                borderBottom: "1px solid",
                borderColor: "greenBackground.main",
                bgcolor: "darkGreen.main",
              }}
            >
              <Stack
                direction={"row"}
                sx={{ justifyContent: "start", alignItems: "center", gap: 0.5 }}
              >
                <IconButton
                  onClick={() => {
                    setOpen(false);
                  }}
                >
                  <ArrowBackOutlined
                    sx={{ color: "gray.main", cursor: "pointer" }}
                  />
                </IconButton>
                <IconButton onClick={handleFilterClick}>
                  <FilterAltOutlined sx={{ color: "gray.main" }} />
                </IconButton>
                <Popover
                  open={openFilter}
                  anchorEl={anchorFilterEl}
                  onClose={handleFilterMenuClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                >
                  <Stack p={1} sx={{ bgcolor: "secondary.main" }}>
                    <Button
                      startIcon={<Title />}
                      variant="standard"
                      sx={{
                        ":hover": { bgcolor: "darkGreen.main" },
                        textTransform: "none",
                      }}
                      onClick={() => {
                        setAppliedFilter("title");
                        handleFilterMenuClose();
                      }}
                    >
                      Title
                    </Button>
                    <Button
                      variant="standard"
                      startIcon={<LinkOutlined />}
                      sx={{
                        ":hover": { bgcolor: "darkGreen.main" },
                        textTransform: "none",
                      }}
                      onClick={() => {
                        setAppliedFilter("link");
                        handleFilterMenuClose();
                      }}
                    >
                      By Link
                    </Button>

                    <Button
                      startIcon={<BookmarkBorderOutlined />}
                      variant="standard"
                      sx={{
                        ":hover": { bgcolor: "darkGreen.main" },
                        textTransform: "none",
                      }}
                      onClick={() => {
                        setAppliedFilter("tag");
                        handleFilterMenuClose();
                      }}
                    >
                      By Tag
                    </Button>
                  </Stack>
                </Popover>
                {isLinkFilter ? (
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.3,
                      px: 1.5,
                      py: 0.5,
                      border: "1px solid",
                      borderColor: "gray.main",
                      borderRadius: 4,
                      bgcolor: "greenBackground.main",
                    }}
                  >
                    <Typography color={"gray.main"}>{"Links"}</Typography>
                    <button onClick={removeSelectedFilter}>
                      <CloseOutlined
                        sx={{
                          cursor: "pointer",
                          fontSize: 15,
                        }}
                      />
                    </button>
                  </Stack>
                ) : null}
                {istitleFilter ? (
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.3,
                      px: 1.5,
                      py: 0.5,
                      border: "1px solid",
                      borderColor: "gray.main",
                      borderRadius: 4,
                      bgcolor: "greenBackground.main",
                    }}
                  >
                    <Typography color={"gray.main"}>{"Title"}</Typography>
                    <button onClick={removeSelectedFilter}>
                      <CloseOutlined
                        sx={{
                          cursor: "pointer",
                          fontSize: 15,
                        }}
                      />
                    </button>
                  </Stack>
                ) : null}
                {isTagFilter ? (
                  <Stack
                    direction={"row"}
                    sx={{
                      justifyContent: "center",
                      alignItems: "center",
                      gap: 0.3,
                      px: 1.5,
                      py: 0.5,
                      border: "1px solid",
                      borderColor: "gray.main",
                      borderRadius: 4,
                      bgcolor: "greenBackground.main",
                    }}
                  >
                    <Typography color={"gray.main"}>{"Tag"}</Typography>
                    <button onClick={removeSelectedFilter}>
                      <CloseOutlined
                        sx={{
                          cursor: "pointer",
                          fontSize: 15,
                        }}
                      />
                    </button>
                  </Stack>
                ) : null}
              </Stack>
              <input
                id="searchbar"
                className="w-[100%] p-2 bg-transparent focus:outline-none text-xl placeholder:text-[#5C5C5C]"
                placeholder="Search..."
                onChange={(e) => setQuery(e.target.value)}
              />
              <Stack>
                <IconButton>
                  <Search sx={{ color: "gray.main" }} />
                </IconButton>
              </Stack>
            </Stack>
            <Stack>
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
