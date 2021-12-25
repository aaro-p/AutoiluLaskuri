import {BiGasPump, BiTimeFive} from 'react-icons/bi'
import {Card, Col, Divider, Row, Statistic, Tag} from 'antd';
import {ArrowDownOutlined, ArrowUpOutlined} from '@ant-design/icons';
import useTripData from "./useTripData";

const TripInfo = () => {

    const {
        tripTimeA,
        setTimeFormat,
        totalConsumptionA,
        averageConsumptionA,
        tripTimeB,
        totalConsumptionB,
        averageConsumptionB
    } = useTripData();

    const calcDiff = (value1, value2) => Math.abs(value1 - value2).toFixed(2);
    let timeDiff = calcDiff(tripTimeA, tripTimeB);

    return (
        <div className="trip-data">
            <Card className="container-info">
                <Row>
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            className="trip-a"
                            value="TRIP A"
                        />
                    </Col>
                    <Col className="center-vs">
                        <h2>VS</h2>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            className="trip-b"
                            value="TRIP B"
                        />
                    </Col>
                    <Divider/>
                </Row>
                <Row className="compare">
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            value={setTimeFormat(tripTimeA)}
                            precision={2}
                            valueStyle={{color: '#000000'}}
                            suffix={tripTimeA < tripTimeB ? (<Tag color="green">
                                <ArrowDownOutlined/> {setTimeFormat(timeDiff)}
                            </Tag>) : <Tag color="red">
                                <ArrowUpOutlined/> {setTimeFormat(timeDiff)} </Tag>
                            }
                        />
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="compare-title time"><BiTimeFive className="icon"/> Trip Time</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            value={setTimeFormat(tripTimeB)}
                            precision={2}
                            valueStyle={{color: '#000000'}}
                            suffix={tripTimeA > tripTimeB ? (<Tag color="green">
                                <ArrowDownOutlined/> {setTimeFormat(timeDiff)}
                            </Tag>) : <Tag color="red">
                                <ArrowUpOutlined/> {setTimeFormat(timeDiff)} </Tag>
                            }
                        />
                    </Col>
                </Row>
                <Row className="compare">
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            value={`${totalConsumptionA} Liters`}
                            precision={2}
                            valueStyle={{color: '#000000'}}
                            suffix={totalConsumptionB > totalConsumptionA ? (<Tag color="green">
                                <ArrowDownOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L
                            </Tag>) : <Tag color="red">
                                <ArrowUpOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L </Tag>
                            }
                        />
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="compare-title"><BiGasPump className="icon"/> Total Consumption</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            value={`${totalConsumptionB} Liters`}
                            precision={2}
                            valueStyle={{color: '#000000'}}
                            suffix={totalConsumptionB < totalConsumptionA ? (<Tag color="green">}
                                <ArrowDownOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L
                            </Tag>) : <Tag color="red">
                                <ArrowUpOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L </Tag>
                            }
                        />
                    </Col>
                </Row>
                <Row className="compare">
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            value={`${averageConsumptionA} Liters`}
                            precision={2}
                            valueStyle={{color: '#000000'}}
                            suffix={averageConsumptionB > averageConsumptionA ? (<Tag color="green">
                                <ArrowDownOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L
                            </Tag>) : <Tag color="red">
                                <ArrowUpOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L </Tag>
                            }
                        />
                    </Col>
                    <Col className="gutter-row" span={4}>
                        <div className="compare-title"><BiGasPump className="icon"/> Average Consumption</div>
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Statistic
                            value={`${averageConsumptionB} Liters`}
                            precision={2}
                            valueStyle={{color: '#000000'}}
                            suffix={averageConsumptionB < averageConsumptionA ? (<Tag color="green">
                                <ArrowDownOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L
                            </Tag>) : <Tag color="red">
                                <ArrowUpOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L </Tag>
                            }
                        />
                    </Col>
                </Row>
                {/*<Card className="data-display">*/}
                {/*    <Row>*/}
                {/*        <Col className="gutter-row data-row">*/}
                {/*            <Statistic*/}
                {/*                title={"Trip Time"}*/}
                {/*                value={setTimeFormat(tripTimeA)}*/}
                {/*                precision={2}*/}
                {/*                valueStyle={{color: '#000000'}}*/}

                {/*            />*/}
                {/*            {tripTimeA < tripTimeB ? (<Tag color="green">*/}
                {/*                <ArrowDownOutlined/> {setTimeFormat(timeDiff)}*/}
                {/*            </Tag>) : <Tag color="red">*/}
                {/*                <ArrowUpOutlined/> {setTimeFormat(timeDiff)} </Tag>*/}
                {/*            }*/}
                {/*        </Col>*/}

                {/*        <Col className="gutter-row data-row">*/}
                {/*            <Statistic*/}
                {/*                title="Total Consumption"*/}
                {/*                value={totalConsumptionA}*/}
                {/*                precision={2}*/}
                {/*                valueStyle={{color: '#000000'}}*/}
                {/*                suffix="Liters"*/}
                {/*            />*/}
                {/*            {totalConsumptionB > totalConsumptionA ? (<Tag color="green">*/}
                {/*                <ArrowDownOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L*/}
                {/*            </Tag>) : <Tag color="red">*/}
                {/*                <ArrowUpOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L </Tag>*/}
                {/*            }*/}
                {/*        </Col>*/}
                {/*        <Col className="gutter-row data-row">*/}
                {/*            <Statistic*/}
                {/*                title="Average Consumption/100km"*/}
                {/*                value={averageConsumptionA}*/}
                {/*                precision={2}*/}
                {/*                valueStyle={{color: '#000000'}}*/}
                {/*                suffix="Liters"*/}
                {/*            />*/}
                {/*            {averageConsumptionB > averageConsumptionA ? (<Tag color="green">*/}
                {/*                <ArrowDownOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L*/}
                {/*            </Tag>) : <Tag color="red">*/}
                {/*                <ArrowUpOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L </Tag>*/}
                {/*            }*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Card>*/}
                {/*<Divider plain>VS</Divider>*/}
                {/*<Card className="data-display">*/}
                {/*    <Row>*/}
                {/*        <Col className="gutter-row data-row">*/}
                {/*            <Statistic*/}
                {/*                title="Trip Time"*/}
                {/*                value={setTimeFormat(tripTimeB)}*/}
                {/*                precision={2}*/}
                {/*                valueStyle={{color: '#000000'}}*/}
                {/*            />*/}
                {/*            {tripTimeA > tripTimeB ? (<Tag color="green">*/}
                {/*                <ArrowDownOutlined/> {setTimeFormat(timeDiff)}*/}
                {/*            </Tag>) : <Tag color="red">*/}
                {/*                <ArrowUpOutlined/> {setTimeFormat(timeDiff)} </Tag>*/}
                {/*            }*/}
                {/*        </Col>*/}
                {/*        <Col className="gutter-row data-row">*/}
                {/*            <Statistic*/}
                {/*                title="Total Consumption"*/}
                {/*                value={totalConsumptionB}*/}
                {/*                precision={2}*/}
                {/*                valueStyle={{color: '#000000'}}*/}
                {/*                suffix="Liters"*/}
                {/*            />*/}
                {/*            {totalConsumptionB < totalConsumptionA ? (<Tag color="green">*/}
                {/*                <ArrowDownOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L*/}
                {/*            </Tag>) : <Tag color="red">*/}
                {/*                <ArrowUpOutlined/> {calcDiff(totalConsumptionA, totalConsumptionB)} L </Tag>*/}
                {/*            }*/}
                {/*        </Col>*/}
                {/*        <Col className="gutter-row data-row">*/}
                {/*            <Statistic*/}
                {/*                title="Average Consumption/100km"*/}
                {/*                value={averageConsumptionB}*/}
                {/*                precision={2}*/}
                {/*                valueStyle={{color: '#000000'}}*/}
                {/*                suffix="Liters"*/}
                {/*            />*/}
                {/*            {averageConsumptionB < averageConsumptionA ? (<Tag color="green">*/}
                {/*                <ArrowDownOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L*/}
                {/*            </Tag>) : <Tag color="red">*/}
                {/*                <ArrowUpOutlined/> {calcDiff(averageConsumptionA, averageConsumptionB)} L </Tag>*/}
                {/*            }*/}
                {/*        </Col>*/}
                {/*    </Row>*/}
                {/*</Card>*/}
            </Card>
        </div>
    );

}

export default TripInfo;