import { useState, useRef, useEffect } from "react";

// used to track dropdown menus or modals
// in case of click outside the component,
//it detects it and closes the menu/modal

function useDropdownMenu(initiaState: boolean = false) {
  const [open, setOpen] = useState(initiaState);
  const menuRef = useRef(null);
  const btnRef = useRef(null);

  // get path of clicked item, if not on tree of dropdown close the opened dropdown
  const handleClick = (event: Event) => {
    const path = event.composedPath && event.composedPath();

    // Check for the menuBtn path and MenuPath
    const isNotInMenuBtnRefPath =
      btnRef.current && !path.includes(btnRef.current);
    const isNotDropDownRefPath =
      menuRef.current && !path.includes(menuRef.current);

    //If outside close it.
    if (isNotInMenuBtnRefPath && isNotDropDownRefPath) {
      setOpen(false);
    }
  };

  //listen to click event
  useEffect(() => {
    document.addEventListener("click", handleClick, true);
    //remove the listener on unmount
    return () => {
      document.removeEventListener("click", handleClick, true);
    };
  }, []);

  return { btnRef, menuRef, open, setOpen };
}

export { useDropdownMenu };
