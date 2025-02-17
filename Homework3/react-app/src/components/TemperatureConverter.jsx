import { useState } from "react";
import TemperatureFields from "./TemperatureFields";

function TemperatureConverter() {

    const [celsius, setCelsius] = useState('');
    const [fahrenheit, setFahrenheit] = useState('');
    const [isSwapped, setIsSwapped] = useState(false);

    return (
        <div>
            <h2>Конвертер градусов</h2>
            <TemperatureFields
                inputOne={celsius}
                setInputOne={setCelsius}
                inputTwo={fahrenheit}
                setInputTwo={setFahrenheit}
                isSwapped={isSwapped}
                setIsSwapped={setIsSwapped}
            />
        </div>
    );
}

export default TemperatureConverter;