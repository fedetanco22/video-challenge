import { createContext, useContext } from "react";

const AppContext = createContext();
const useAppContext = () => useContext(AppContext);

export const AppProvider = ({ children }) => {
	return <AppContext.Provider value={{}}>{children}</AppContext.Provider>;
};

export default useAppContext;
