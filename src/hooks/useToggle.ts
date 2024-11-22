import { useState } from "react";

export default function useToggle() {
  const [isOpen, setIsOpen] = useState(false);
  const handleIsToggle = () => {
    setIsOpen((prev) => !prev);
  };

  return { isOpen, handleIsToggle };
}
