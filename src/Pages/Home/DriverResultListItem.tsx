import PropTypes from "prop-types";
import DriverResult from "../../DataType/Driver/DriverResult.tsx"; // Adjust the path as necessary

export default function DriverResultListItem({driverResult, index}) { // Use different parameter names
    return (
        <div className={`w-full  px-2 my-2`}>
            <div style={{borderColor: driverResult.Team.teamColor}}
                 className={`py-4 px-4 flex flex-row items-center justify-between bg-base-300 border-t-4 border-r-4 border-accent rounded-tr-lg rounded-bl-lg w-full`}>
                <div className={'items-start flex flex-row'}>
                    <div>
                        <span className='text-base-content text-3xl font-extrabold'>
                            {index + 1}
                        </span>
                    </div>
                    <div className={`border-l-4 px-8 rounded-l-sm flex flex-col items-start ml-8`}
                         style={{borderColor: driverResult.Team.teamColor}}>
                        <span className="font-Standard text-base-content text-3xl font-extrabold">
                            {driverResult.FirstName}
                        </span>
                        <span className="font-Standard text-base-content text-3xl font-extrabold">
                            {driverResult.SecondName}
                        </span>
                    </div>
                    <div className={`px-8 rounded-l-sm flex flex-col items-start flex-grow justify-end`}>
                        <span className="font-Standard text-base-content/70 text-xl font-medium">
                            {driverResult.Team.teamName}
                        </span>
                    </div>
                </div>

                <div className={'items-end flex flex-row'}>
                    <div className='flex flex-col items-end ml-8'>
                        <span
                            className="font-Standard text-Fastest-Lap-content text-2xl font-extrabold bg-Fastest-Lap rounded-md px-2">
                          {driverResult.hasFastestLap ?
                              <svg xmlns="http://www.w3.org/2000/svg"
                                   className="icon icon-tabler icon-tabler-alarm-filled stroke-Fastest-Lap-content"
                                   width="44" height="44"
                                   viewBox="0 0 24 24" strokeWidth="1.5" fill="none"
                                   strokeLinecap="round" strokeLinejoin="round">
                                  <path stroke="none" d="M0 0h24v24H0z" fill="none"/>
                                  <path
                                      d="M16 6.072a8 8 0 1 1 -11.995 7.213l-.005 -.285l.005 -.285a8 8 0 0 1 11.995 -6.643zm-4 2.928a1 1 0 0 0 -1 1v3l.007 .117a1 1 0 0 0 .993 .883h2l.117 -.007a1 1 0 0 0 .883 -.993l-.007 -.117a1 1 0 0 0 -.993 -.883h-1v-2l-.007 -.117a1 1 0 0 0 -.993 -.883z"
                                      strokeWidth="0" fill="currentColor"/>
                                  <path
                                      d="M6.412 3.191a1 1 0 0 1 1.273 1.539l-.097 .08l-2.75 2a1 1 0 0 1 -1.273 -1.54l.097 -.08l2.75 -2z"
                                      strokeWidth="0" fill="currentColor"/>
                                  <path
                                      d="M16.191 3.412a1 1 0 0 1 1.291 -.288l.106 .067l2.75 2a1 1 0 0 1 -1.07 1.685l-.106 -.067l-2.75 -2a1 1 0 0 1 -.22 -1.397z"
                                      strokeWidth="0" fill="currentColor"/>
                              </svg>
                              :
                              ''
                          }
                        </span>
                        <span
                            className="font-Standard text-info-content text-2xl font-extrabold bg-info rounded-md px-2 mt-2">
                          {driverResult.time}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
}


DriverResultListItem.propTypes = {
    driverResult: PropTypes.instanceOf(DriverResult).isRequired, // Use DriverResult without curly braces
    index: PropTypes.number.isRequired
};