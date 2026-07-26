const { createContext, useContext, useState } = require("react");

const PlaningContext = createContext();

const PlaningProvider = ({ children }) => {

    const [planing, setPlaning] = useState([])

    const handaleDeletePlan = (id) => {
        setPlaning(planing.filter(
            (item) => item.id != id
        ))
    }

    const totalPlans = planing.length;

    const totalCompletedPlans = planing.filter(
        item => item.status === "✔️ Completed Plan"
    ).length

    const totalPendingPlans = planing.filter(
        item => item.status === "active"
    ).length



    return (
        <PlaningContext.Provider
            value={{
                planing,
                setPlaning,
                handaleDeletePlan,
                totalCompletedPlans,
                totalPlans,
                totalPendingPlans
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