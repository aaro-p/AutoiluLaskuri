import useTripData from "./useTripData";
import {Radio} from 'antd';
import {BiGasPump} from 'react-icons/bi'

const CarSelector = () => {
    const {setConsumptionValue} = useTripData();


    return (
        <div>
            <Radio.Group defaultValue={"0.030"} buttonStyle="solid" className="car-selector" shape="round">
                <Radio.Button value={"0.030"} onChange={(e) => setConsumptionValue(e.target.value)} className="car-btn">Car
                    1 <p className="consumption-value"><BiGasPump className="c-icon"/>3.0L /100km</p></Radio.Button>
                <Radio.Button value={"0.035"} onChange={(e) => setConsumptionValue(e.target.value)} className="car-btn">Car
                    2 <p className="consumption-value"><BiGasPump className="c-icon"/>3.5L /100km</p></Radio.Button>
                <Radio.Button value={"0.040"} onChange={(e) => setConsumptionValue(e.target.value)} className="car-btn">Car
                    3 <p className="consumption-value"><BiGasPump className="c-icon"/>4.0L /100km</p></Radio.Button>
            </Radio.Group>
        </div>

        // <div>
        //        <input
        //            type="radio"
        //            value="0.030"
        //            onChange={(e) => setConsumptionValue(e.target.value)}
        //            name="Car1"
        //            checked={consumptionValue === "0.030"}
        //
        //        />
        //        Car1
        //     <input
        //         type="radio"
        //         value="0.035"
        //         onChange={(e) => setConsumptionValue(e.target.value)}
        //         name="Car2"
        //         checked={consumptionValue === "0.035"}
        //
        //     />
        //     Car2
        //     <input
        //         type="radio"
        //         value="0.040"
        //         onChange={(e) => setConsumptionValue(e.target.value)}
        //         name="Car3"
        //         checked={consumptionValue === "0.040"}
        //     />
        //     Car3
        // </div>
    );
}

export default CarSelector;