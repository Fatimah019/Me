import * as React from 'react';
import { styled, Box } from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';

const StyledModal = styled(ModalUnstyled)`
  position: fixed;
  z-index: 1300;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Backdrop = styled('div')`
  z-index: -1;
  position: fixed;
  right: 0;
  bottom: 0;
  top: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  -webkit-tap-highlight-color: transparent;
`;

const style = {
  width: 400,
  bgcolor: 'rgb(37, 37, 37)',
  border: '2px solid rgb(37, 37, 37)',
  p: 2,
  px: 4,
  pb: 3,
};

export default function Modal({open, close, title, description, linkUrl, linkName}) {
  return (
    <div>
      <StyledModal
        aria-labelledby="unstyled-modal-title"
        aria-describedby="unstyled-modal-description"
        open={open}
        onClose={close}
        BackdropComponent={Backdrop}
      >
        <Box sx={style}>
          <h3 id="unstyled-modal-title">{title}</h3>
          <p id="unstyled-modal-description">{description}</p>
          <div
            style={{
                textAlign:"right"
            }}
          >
            <a href={linkUrl} 
              style={{
                color:"rgb(255, 255, 255)",
                cursor: "pointer"
              }}
            >
              {linkName}
            </a>
            </div>
        </Box>
      </StyledModal>
    </div>
  );
}
