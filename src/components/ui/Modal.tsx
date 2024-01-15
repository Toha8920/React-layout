import { createPortal } from "react-dom";
import cn from "../../utils/cn";
import { useRef } from "react";

const Modal = ({ isOpen, onClose, children }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const handleOutsideClose = (e) => {
    if (!containerRef.current?.contains(e.target)) {
      onClose();
    }
  };

  return createPortal(
    <div
      onClick={handleOutsideClose}
      className={cn(
        "fixed flex justify-center items-center inset-0 bg-gray-500/70 invisible z-[999]",
        {
          visible: isOpen,
        }
      )}
    >
      <div ref={containerRef} className="bg-white w-full max-w-sm rounded-md">
        {children}
      </div>
    </div>,
    document.getElementById("portal") as Element
  );
};

export default Modal;
