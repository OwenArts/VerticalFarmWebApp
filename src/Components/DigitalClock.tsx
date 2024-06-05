import {useState, useEffect} from 'react'

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const intervalId = setInterval(() => {
            setTime(new Date());
        }, 1000);

        return () => {
            clearInterval(intervalId);
        }
    }, []);

    function formatTime() {
        return `${padZero(time.getHours())}:${padZero(time.getMinutes())}:${padZero(time.getSeconds())}`;
    }

    function padZero(number) {
        return number >= 10 ? `${number}` : `0${number}`;
    }

    return (
        <div className="bg-cover bg-center bg-no-repeat bg-fixed w-screen bg-italy-background">
            <div className="h-screen flex items-center justify-center ">
                <div className="font-mono font-bold text-8xl text-center drop-shadow-2xl backdrop-blur-sm bg-white/30 rounded-lg px-8 py-4">
                    <span>
                        {formatTime()}
                    </span>
                </div>
            </div>
        </div>)
}

export default DigitalClock