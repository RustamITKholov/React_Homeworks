/**
 * Задание 1: Температурный конвертер с Material UI

Цель: Создать компонент TemperatureConverter, используя компоненты TextField и Button из Material UI для ввода и отображения температур в градусах Цельсия и Фаренгейта.

Компоненты:
Используйте TextField для ввода значения температуры.
Добавьте лейблы к каждому TextField, указывая единицы измерения (Цельсия и Фаренгейта).

Логика:
При вводе значения в одно поле, автоматически конвертируйте его и отобразите в другом.
Реализуйте конвертацию температур в обоих направлениях.
 */



import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import '../TemperatureFields.css'

function TemperatureFields({ inputOne, setInputOne, inputTwo, setInputTwo, isSwapped, setIsSwapped }) {

    return (
        <div className="fields">
            {isSwapped ? (
                <>
                    <TextField
                        id="outlined-number"
                        type="number"
                        label="Градусы по °C"
                        value={inputOne}
                        onChange={(e) => {
                            setInputOne(e.target.value);
                            setInputTwo((e.target.value * 9 / 5) + 32);
                        }}
                    />
                    <Button style={{ height: '30px', width: '60px' }} variant="contained"
                        onClick={() => {
                            setIsSwapped(!isSwapped);
                            setInputOne('');
                            setInputTwo('');
                        }}>↔</Button>
                    <TextField
                        id="outlined-number"
                        type="number"
                        label="Градусы по °F"
                        value={inputTwo}
                        onChange={(e) => {
                            setInputTwo(e.target.value);
                            setInputOne((e.target.value - 32) * 5 / 9)
                        }}
                    />
                </>
            ) : (
                <>
                    <TextField
                        id="outlined-number"
                        type="number"
                        label="Градусы по °F"
                        value={inputTwo}
                        onChange={(e) => {
                            setInputTwo(e.target.value);
                            setInputOne((e.target.value - 32) * 5 / 9)
                        }}
                    />
                    <Button style={{ height: '30px', width: '60px' }} variant="contained" onClick={() => { setIsSwapped(!isSwapped); setInputOne(''); setInputTwo('') }}>↔</Button>
                    <TextField
                        id="outlined-number"
                        type="number"
                        label="Градусы по °C"
                        value={inputOne}
                        onChange={(e) => {
                            setInputOne(e.target.value);
                            setInputTwo((e.target.value * 9 / 5) + 32);
                        }}
                    />
                </>
            )}
        </div>
    );
}

export default TemperatureFields;