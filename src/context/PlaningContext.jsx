const { createContext, useContext, useState } = require("react");

const PlaningContext = createContext();

const PlaningProvider = ({ children }) => {

    const [planing, setPlaning] = useState([])

    const handaleDeletePlan = (id) => {
        setPlaning(planing.filter(
            (item) => item.id != id
        ))
    }



    return (
        <PlaningContext.Provider
        value ={{
            planing,
            setPlaning,
            handaleDeletePlan
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