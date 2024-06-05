import React from "react";
import styles from "./styles.module.css";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  return (
    <div className={`${styles.modal} ${isOpen ? styles.open : ""}`}>
      <div className={styles["modal-content"]}>
        <div className={` rounded-md ${styles["flex-container"]}`}>
          <div className="w-2/5 rounded-l-md  linear-background">
            {" "}
            <span className={styles.close} onClick={onClose}>
              Back
            </span>
            <img
              src="https://res.cloudinary.com/dtfvdjvyr/image/upload/v1717613355/Frame_146_1_rj3qfe.png"
              height={200}
              width={200}
            />
          </div>
          <div className="rounded-r-md bg-[#0c111d]  w-3/5"></div>
        </div>
        {children}
      </div>
    </div>
  );
};

export default Modal;
