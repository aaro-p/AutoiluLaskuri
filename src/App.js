import Input from "./components/Input";
import 'antd/dist/antd.css';
import TripInfo from "./components/TripInfo";
import './styles.css';
import {PageHeader} from 'antd'
import {FcCalculator} from 'react-icons/fc'

function App() {
    return (
        <div>
            <PageHeader title="AUTOILU LASKURI" subTitle={<FcCalculator className="header-icon"/>} className="heading"/>
            <div className="app-content">
                <Input/>
                <TripInfo/>
            </div>
        </div>
    );
}

export default App;
