const { createContext } = require("react");


export const CodeContext = createContext({
    code: "",
    setCode: () => {}
});

