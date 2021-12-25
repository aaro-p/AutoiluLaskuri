import useTripData from "./useTripData";

const TestData = () => {
    const {
        setTimeFormat,
        totalConsumptionA,
        averageConsumptionA,
        totalConsumptionB,
        averageConsumptionB,
        tripTimeA,
        tripTimeB,
        consumptionValue
    } = useTripData();

    return (
        <div>
            <h1>TEST DATA</h1>
            <p>Consumption value: {consumptionValue}</p>
            <p>
                Trip 1 : Total= {totalConsumptionA} {" "} Avg= {averageConsumptionA} {" "}
                Duration= {setTimeFormat(tripTimeA)}
            </p>
            <p>
                Trip 2 : Total= {totalConsumptionB} {" "} Avg= {averageConsumptionB} {" "}
                Duration= {setTimeFormat(tripTimeB)}
            </p>
        </div>
    );
};

export default TestData;
