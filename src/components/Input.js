import useTripData from "./useTripData";
import CarSelector from "./CarSelector";
import {Col, InputNumber, Row} from "antd";

const Input = () => {
    const {
        setTripDistance,
        setTripSpeedA,
        setTripSpeedB,
        tripDistance,
        tripSpeedA,
        tripSpeedB,
    } = useTripData();

    //event handlers for ant design number inputs
    const setDistance = (value) => {
        setTripDistance(value);
    }

    const setTripA = (value) => {
        setTripSpeedA(value);
    }

    const setTripB = (value) => {
        setTripSpeedB(value);
    }

    return (
        <div>
            <CarSelector/>
            <div>
                <Col>
                    <p className="input-label">Trip Distance:</p>
                    <InputNumber addonAfter="km" defaultValue={tripDistance} onChange={setDistance} min={1} max={2000}
                                 className="input-distance"/>
                </Col>
                <Row className="input-speed">
                    <Col className="input-width">
                        <p className="input-label">Trip A Speed:</p>
                        <InputNumber addonAfter="km/h" defaultValue={tripSpeedA} onChange={setTripA} min={1} max={250}/>
                    </Col>
                    <Col className="input-width">
                        <p className="input-label">Trip B Speed:</p>
                        <InputNumber addonAfter="km/h" defaultValue={tripSpeedB} onChange={setTripB} min={1} max={250}
                                     className="input-width"/>
                    </Col>
                </Row>
            </div>


            {/*<input*/}
            {/*  type="text"*/}
            {/*  placeholder="Trip Distance"*/}
            {/*  value={tripDistance}*/}
            {/*  onChange={(event) => setTripDistance(event.target.value)}*/}
            {/*/>*/}
            {/*<input*/}
            {/*  type="text"*/}
            {/*  placeholder="speed 1"*/}
            {/*  value={tripSpeedA}*/}
            {/*  onChange={(event) => setTripSpeedA(event.target.value)}*/}
            {/*/>*/}
            {/*<input*/}
            {/*  type="text"*/}
            {/*  placeholder="speed 2"*/}
            {/*  value={tripSpeedB}*/}
            {/*  onChange={(event) => setTripSpeedB(event.target.value)}*/}
            {/*/>*/}
        </div>
    );
};

export default Input;
