"use client";

import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import { useContext, useRef, useState } from "react";
import { ThemeContext } from "./context/ThemeContext";

const Editor = dynamic(() => import("@monaco-editor/react"), {
  ssr: false,
});

export default function Home() {
  const [code,setCode] = useState<string | null>();
  const iframeRef = useRef<HTMLIFrameElement | null>(null);

  const { dark } = useContext(ThemeContext);

  function handleEditorChange(value: string | undefined) {
    if (iframeRef.current && value) {
      iframeRef.current.srcdoc = value;
    }
    setCode(value);
  }

  return (
    <div>
      <Navbar title<Integ="coeee" />

      <div className="flex lg:flex-row flex-col h-screen
      lg:divide-y-0 divide-y-1">
        
        <div className="w-full lg:w-1/2 h-[50vh] lg:h-screen">
          <Editor
            width="100%"
            height="100%"
            theme={dark ? "vs-dark" : "vs-light"}
            defaultLanguage="html"
            defaultValue="// write something"
            onChange={handleEditorChange}
          />
        </div>

        <iframe
          ref={iframeRef}
          className="w-full lg:w-1/2 h-[50vh] lg:h-screen"
        />
      </div>
    </div>
  );
}