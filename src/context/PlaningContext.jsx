const { createContext, useContext, useState } = require("react");

const PlaningContext = createContext();

const PlaningProvider = ({ children }) => {

    const [planing, setPlaning] = useState([])
    console.log("Name : ", planing.planName)


    return (
        <PlaningContext.Provider
        value ={{
            planing,
            setPlaning
        }}
        >
            {children}
        </PlaningContext.Provider>
    )
}

const usePlaning = () => {
    return useContext(PlaningContext);
};

export {
    PlaningProvider,
    usePlaning,
}