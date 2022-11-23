import {createContext} from 'react'

const AppContext = createContext();
const AppProvider = ({children})=>{
    const userData = {
        name: "Yash soni",
        email: "Yashsoni48678@gmail.com"
    };
    return <AppProvider.Provider value={userData}>{children}</AppProvider.Provider>;
}
export  {AppContext,AppProvider};