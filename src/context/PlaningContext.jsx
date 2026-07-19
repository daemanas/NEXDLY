const { createContext, useContext, useState } = require("react");

const PlaningContext = createContext();

const PlaningProvider = ({ children }) => {

    const [planing, setPlaning] = useState([])


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