import {useState, useEffect} from 'react';
import Team from '../../DataType/Constructor/Constructor.tsx'
import Flag from 'react-country-flag';
import PropTypes from 'prop-types';

export default function TeamInfoListItem({team, index}) {
    const [countryCode, setCountryCode] = useState('XX'); // State to hold the country code

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch('https://localhost:7002/Country/getCode?nationality=' + team.nationality);
                if (!response.ok) {
                    throw new Error('Failed to fetch data');
                }
                const data = await response.json();
                // console.log('Data: ', data);
                setCountryCode(data); // Update the state with the country code
                // console.log('Code: ', countryCode);
            } catch (error) {
                console.error('Error fetching data:', error);
                setCountryCode('XX'); // Set default value if fetch fails
            }
        }

        fetchData(); // Fetch data when component mounts
    }, [team.nationality]); // Fetch data when driver's nationality changes


    useEffect(() => {
        // Update the country code when it changes
        console.log(countryCode); // Check if countryCode is updated
    }, [countryCode]);

    const getClassName = () => {
        if (index < 3) {
            return 'w-full';
        } else {
            return 'w-full md:w-1/2 lg:w-1/3';
        }
    };

    return (
        <div className={`${getClassName()} px-2 my-2`}>
            <div style={{borderColor: team.teamColor}}
                 className={`py-4 px-4 flex flex-row items-center justify-between bg-base-300 border-t-4 border-r-4 border-accent rounded-tr-lg rounded-bl-lg w-full`}>
                <div className={'items-start flex flex-row'}>
                    <div>
                    <span className='text-base-content text-3xl font-extrabold'>
                        {index + 1}
                    </span>
                    </div>
                    <div className={`border-l-4 px-8 rounded-l-sm flex flex-col items-start ml-8`}
                         style={{borderColor: team.teamColor}}>
                        <span className="font-Standard text-base-content text-3xl font-extrabold">
                            {team.teamName}
                        </span>
                    </div>
                </div>
                <div className={'items-end flex flex-row'}>
                    <div className='flex flex-col justify-center'>
                        <Flag countryCode={`${countryCode}`} svg style={{width: '3em', height: '3em'}}/>
                    </div>
                    <div className='flex flex-col items-end ml-8'>
                        <span className='text-base-content justify-self-center text-2xl font-medium'>
                          {team.points}
                        </span>
                        <span
                            className="font-Standard text-info-content text-lg font-extrabold bg-info rounded-md px-2">
                          PTS
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}

TeamInfoListItem.propTypes = {
    team: PropTypes.instanceOf(Team).isRequired,
    index: PropTypes.number.isRequired
};
