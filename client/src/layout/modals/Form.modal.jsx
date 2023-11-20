import { Box, Fade, Modal, Typography } from "@mui/material";
import { useState } from "react";

const FormModal = ({ open, handleCloseModal, children }) => {
  return (
    <>
      <Modal open={open} onClose={handleCloseModal}>
        <Fade in={open}>
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
            {children}
          </Box>
        </Fade>
      </Modal>
    </>
  );
};

export default FormModal;

const FormModalTitle = ({ children }) => {
  return (
    <Box sx={{ textAlign: "center" }}>
      <Typography variant="h5" fontWeight={500}>
        {children}
      </Typography>
    </Box>
  );
};

const FormModalTrigger = ({ children }) => {
  return <div>{children}</div>;
};

const FormModalContent = ({ children }) => {
  return <div>{children}</div>;
};
FormModal.Title = FormModalTitle;
FormModal.Trigger = FormModalTrigger;
FormModal.Content = FormModalContent;
