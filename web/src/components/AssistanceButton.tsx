import react from "react";
import { toast, ToastContainer } from "react-toastify";
import styled from "styled-components";

const DivWrapper = styled.div`
  cursor: pointer;
  position: absolute;
  top: 5vh;
  left: 5vw;
  border: 1px solid black;
  padding: 5px 20px;
`;

const AssistanceButton: React.FC = () => {
  const assistanceNotification = () => {
    toast.error(
      "Thanks for requesting assistance, a staff member will be with you momentarily.\n\n If you no longer need assistance, you may close this box.",
      {
        position: "top-center",
        hideProgressBar: true,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: 0,
        autoClose: false,
      }
    );
  };
  return (
    <DivWrapper onClick={assistanceNotification}>
      <p>Request Assistance</p>
    </DivWrapper>
  );
};

export { AssistanceButton };
