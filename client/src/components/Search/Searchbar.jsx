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
import { apiUrl } from "../../config/apiEndpoints";
import { getAllLinksOfUser } from "../../services/links/getAllLinksofUser.service";

const Searchbar = () => {
  const [links, setLinks] = useState([]);
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [query, setQuery] = useState("");
  // const [tagName, setTagName] = useState("");
  // const findLinksByTagName = async () => {
  //   try {
  //     const userID = localStorage.getItem("userID");
  //     const token = localStorage.getItem("token");
  //     const response = await axios.get(
  //       `${apiUrl}/api/users/search/links/${userID}`,
  //       {
  //         tagName: "mathematics",
  //         headers: {
  //           authorization: token,
  //         },
  //       }
  //     );
  //     console.log(response);
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  const toggleSearchBar = () => {
    setOpen(!open);
  };
  const getLinksOfUser = async () => {
    try {
      const { isError, response } = await getAllLinksOfUser(
        localStorage.getItem("userID"),
        localStorage.getItem("token")
      );
      if (!isError) {
        const userLinks = response.data;
        setLinks(userLinks.reverse());
      } else {
        console.log("some error in get all links of user");
      }
    } catch (error) {
      console.log(error);
    }
  };
  const [isLinkFilter, setisLinkFilter] = useState(false);
  const [istitleFilter, setistitleFilter] = useState(false);
  const [isTagFilter, setisTagFilter] = useState(false);
  const [appliedFilter, setAppliedFilter] = useState("none");

  const handleSelectedFilter = () => {
    if (appliedFilter === "links") {
      setistitleFilter(false);
      setisTagFilter(false);
      setisLinkFilter(true);
      console.log("links");
      return;
    }
    if (appliedFilter === "title") {
      setisLinkFilter(false);
      setisTagFilter(false);
      setistitleFilter(true);
      console.log("title");
      return;
    }
    if (appliedFilter === "tags") {
      setisLinkFilter(false);
      setistitleFilter(false);
      setisTagFilter(true);
      console.log("tags");
      return;
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
          <Stack>
            <Stack
              direction={"row"}
              sx={{
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
                        setAppliedFilter("links");
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
                        setAppliedFilter("tags");
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
                onChange={(e) => {
                  setQuery(e.target.value);
                  // setTagName(e.target.value);
                }}
              />
              <Stack>
                <IconButton
                // onClick={() => {
                //   findLinksByTagName();
                //   alert(tagName);
                // }}
                >
                  <Search sx={{ color: "gray.main" }} />
                </IconButton>
              </Stack>
            </Stack>
            <Stack>
              <div>
                <SearchItem
                  links={links}
                  query={query}
                  selectedFilter={appliedFilter}
                />
              </div>
            </Stack>
          </Stack>
        </Box>
      </Modal>
    </>
  );
};

export default Searchbar;
