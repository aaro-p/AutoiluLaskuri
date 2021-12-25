import {createContext, useState} from "react";

const AppContext = createContext([{}, p => {
}]);

const AppProvider = ({children}) => {
    //init global state
    const [state, setState] = useState({
        tripDistance: 200,
        tripSpeedA: 80,
        tripSpeedB: 100,
        consumptionValue: "0.030",
        tripTimeA: null,
        tripTimeB: null,
    });

    return (
        <AppContext.Provider value={[state, setState]}>
            {children}
        </AppContext.Provider>
    );
};

export {AppContext, AppProvider};
