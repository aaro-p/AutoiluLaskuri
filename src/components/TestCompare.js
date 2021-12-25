import useTripData from "./useTripData";

const TestCompare = () => {
    const {
        totalConsumptionA,
        totalConsumptionB,
        averageConsumptionA,
        averageConsumptionB,
        tripTimeA,
        tripTimeB,
        setTimeFormat,
    } = useTripData();

    const calcDiff = (value1, value2) => Math.abs(value1 - value2).toFixed(2);

    let timeDiff = calcDiff(tripTimeA, tripTimeB);


    return (
        <div>
            <p>Total fuel diff: {calcDiff(totalConsumptionA, totalConsumptionB)}</p>
            <p>
                Total avg diff: {calcDiff(averageConsumptionA, averageConsumptionB)}
            </p>
            <p>Total time diff: {setTimeFormat(timeDiff)}</p>
        </div>
    );
};

export default TestCompare;