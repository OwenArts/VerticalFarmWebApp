import { useState, useEffect } from 'react';
import DriverInfo from '../../DataType/Driver/DriverInfo.tsx';
import Flag from 'react-country-flag';
import PropTypes from 'prop-types';

export default function DriverInfoListItem({driver, index}) {
    const [countryCode, setCountryCode] = useState('XX'); // State to hold the country code

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://localhost:7002/Country/getCode?nationality=' + driver.nationality);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                setCountryCode(data); // Update the state with the country code
            } catch (error) {
                console.error('Error fetching data:', error);
                setCountryCode('XX'); // Set default value if fetch fails
            }
        }
        fetchData(); // Fetch data when component mounts
    }, [driver.nationality]); // Fetch data when driver's nationality changes

    const getClassName = () => {
        if (index < 3) {
            return 'w-full md:w-1/3 lg:w-1/3';
        } else {
            return 'w-full md:w-1/2 lg:w-1/4';
        }
    };


    console.log('Log before return:' + countryCode)

    return (
        <div className={`${getClassName()} px-2 my-2`}>
            <div style={{borderColor: driver.Team.teamColor}}
                 className={`py-4 px-4 flex flex-col items-center justify-between bg-base-300 border-t-4 border-r-4 border-accent rounded-tr-lg rounded-bl-lg w-full`}>
                <div className="flex flex-row justify-between items-center w-full">
                    <span className='text-base-content text-3xl font-extrabold'>
                        {index + 1}
                    </span>
                    <div className='flex flex-col items-end'>
                        <span className='text-base-content justify-self-center text-2xl font-medium'>
                          {driver.points}
                        </span>
                        <span
                            className="font-Standard text-info-content text-lg font-extrabold bg-info rounded-md px-2">
                          PTS
                        </span>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                    <div className={`border-l-4 px-8 rounded-l-sm flex flex-col items-start`}
                         style={{borderColor: driver.Team.teamColor}}>
                        <span className="font-Standard text-base-content text-xl font-medium">
                            {driver.FirstName}
                        </span>
                        <span className="font-Standard text-base-content text-3xl font-extrabold">
                            {driver.SecondName}
                        </span>
                    </div>
                    <div className='flex flex-col justify-center items-end'>
                        <Flag countryCode={`${countryCode}`} svg style={{width: '3em', height: '3em'}} />
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center w-full mt-2">
                    <span
                        className={'items-start text-base-content/70 text-xl font-medium'}>{driver.Team.teamName}</span>
                </div>
            </div>
        </div>
    );
}

DriverInfoListItem.propTypes = {
    driver: PropTypes.instanceOf(DriverInfo).isRequired,
    index: PropTypes.number.isRequired
};
