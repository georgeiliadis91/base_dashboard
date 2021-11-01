import React, { useState, useRef, useEffect, MouseEventHandler } from "react";

// used to track dropdown menus or modals
// in case of click outside the component,
//it detects it and closes the menu/modal

function useDropdownMenu(initiaState: boolean = false) {
  const [open, setOpen] = useState(initiaState);
  const ref = useRef(null);

  // click handle function
  const handleClick = (event: MouseEvent) => {
    console.log("the event", event);
    // Check for safari, currently not working properly due to event.path TS errors
    // const path = event.path || (event.composedPath && event.composedPath());
    const path =
      (event as any).path || (event.composedPath && event.composedPath());
    if (ref.current && !path.includes(ref.current)) {
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

  return { ref, open, setOpen };
}

export { useDropdownMenu };
