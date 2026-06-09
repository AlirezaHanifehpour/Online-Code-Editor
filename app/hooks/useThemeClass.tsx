import { useEffect } from "react";

function useThemeClass(dark: boolean) {
  useEffect(() => {
    const html = document.documentElement;

    if (dark) {
      html.classList.add("dark");
    } else {
      html.classList.remove("dark");
    }
  }, [dark]);
}

export default useThemeClass;