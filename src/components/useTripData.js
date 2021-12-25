import {useContext, useEffect, useState} from "react";
import {AppContext} from "../appContext";

const useTripData = () => {
    //get global state
    const [state, setState] = useContext(AppContext);
    //local state(s)
    const [fuelSpent1, setFuelSpent1] = useState(0);
    const [fuelSpent2, setFuelSpent2] = useState(0);
    const [avgFuelSpent1, setAvgFuelSpent1] = useState(0);
    const [avgFuelSpent2, setAvgFuelSpent2] = useState(0);


    useEffect(() => {
        setFuelSpent1(calcTotalConsumption(state.tripSpeedA))
        setFuelSpent2(calcTotalConsumption(state.tripSpeedB));
        setAvgFuelSpent1(calcAvgConsumption(fuelSpent1, state.tripDistance));
        setAvgFuelSpent2(calcAvgConsumption(fuelSpent2, state.tripDistance));
        setState({
            ...state,
            tripTimeA: calcTripTime(state.tripDistance, state.tripSpeedA),
            tripTimeB: calcTripTime(state.tripDistance, state.tripSpeedB)
        });
        console.log(state)
        // eslint-disable-next-line
    }, [
        state.tripSpeedA,
        state.tripSpeedB,
        state.tripDistance,
        state.consumptionValue,
        fuelSpent1,
        fuelSpent2,
        state.tripSpeedA,
        state.tripSpeedB
    ]);
    //functions for state


    //calc average consumption per 100km
    const calcAvgConsumption = (fuelspent, distance) => parseFloat((fuelspent / (distance / 100)).toFixed(2));

    //calc total consumption
    const calcTotalConsumption = (speed) => {
        let incVal = state.consumptionValue * Math.pow(1.009, speed - 1);
        return parseFloat((state.tripDistance * incVal).toFixed(2));
    };

    //calc total triptime in minutes
    const calcTripTime = (distance, speed) => parseFloat((distance / speed).toFixed(2)) * (60);

    //format total triptime to HRS : MIN'S
    const setTimeFormat = (totaltime) => {
        let hour = Math.floor(totaltime / 60);
        let minute = Math.round(totaltime % 60);
        hour = hour < 10 ? hour : hour;
        minute = minute < 10 ? +minute : minute;
        if (minute === 0) {
            return `${hour} H`
        }
        if (hour < 1) {
            return `${minute} Min`
        }
        return `${hour} H ${minute} Min`
    };

    //functions to set state between components and global state
    const setConsumptionValue = (value) => {
        setState({...state, consumptionValue: value});
    };

    const setTripSpeedA = (speed) => {
        setState({...state, tripSpeedA: speed});
    };

    const setTripSpeedB = (speed) => {
        setState({...state, tripSpeedB: speed});
    };

    const setTripDistance = (distance) => {
        setState({...state, tripDistance: distance});
    };

    return {
        totalConsumptionA: fuelSpent1,
        totalConsumptionB: fuelSpent2,
        tripDistance: state.tripDistance,
        tripSpeedA: state.tripSpeedA,
        tripSpeedB: state.tripSpeedB,
        consumptionValue: state.consumptionValue,
        averageConsumptionA: avgFuelSpent1,
        averageConsumptionB: avgFuelSpent2,
        tripTimeA: state.tripTimeA,
        tripTimeB: state.tripTimeB,
        setTripSpeedA,
        setTripSpeedB,
        setTripDistance,
        setConsumptionValue,
        setTimeFormat
    };
};

export default useTripData;