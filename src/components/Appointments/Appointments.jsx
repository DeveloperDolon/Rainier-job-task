import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';


const Appointments = () => {
    return (
        <div className='pb-10'>

            <h3 className='md:text-2xl px-5 py-5 pb-5 text-lg font-medium'>Upcoming Appointments</h3>

            <Timeline
                sx={{
                    [`& .${timelineItemClasses.root}:before`]: {
                        flex: 0,
                        padding: 0,
                    },
                }}>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot color="primary" />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='flex h-fit items-center bg-[#FFEBEB] rounded-3xl'>
                            <div className='bg-white rounded-3xl border w-fit p-5'>
                                <h4 className='md:text-lg text-sm font-medium text-gray-400'>2022</h4>

                                <h3 className='md:text-3xl text-xl font-semibold'>13</h3>
                                <h3 className='md:text-2xl text-xl font-medium text-gray-400'>Sep</h3>
                            </div>

                            <div className='p-5'>
                                <h3 className='md:text-lg text-base font-semibold'>Dr. Muhammad Abdul Hussein</h3>
                                <p className='md:text-base text-sm font-medium py-1'>Cardiologist</p>

                                <div className='flex gap-3 mt-2'>
                                    <button className='md:text-base text-sm font-semibold bg-white py-1 px-2 rounded-md'>
                                        <span className='text-gray-400 mr-2'>
                                            Slot
                                        </span>
                                        Morning
                                    </button>
                                    <button className='md:text-base text-sm font-semibold bg-white py-1 px-2 rounded-md'>
                                        <span className='text-gray-400 mr-2'>
                                            Time
                                        </span>
                                        10:00 AM
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='flex h-fit items-center bg-[#FFEBEB] rounded-3xl'>
                            <div className='bg-white rounded-3xl border w-fit p-5'>
                                <h4 className='md:text-lg text-sm font-medium text-gray-400'>2022</h4>

                                <h3 className='md:text-3xl text-xl font-semibold'>13</h3>
                                <h3 className='md:text-2xl text-xl font-medium text-gray-400'>Sep</h3>
                            </div>

                            <div className='p-5'>
                                <h3 className='md:text-lg text-base font-semibold'>Dr. Muhammad Abdul Hussein</h3>
                                <p className='md:text-base text-sm font-medium py-1'>Cardiologist</p>

                                <div className='flex gap-3 mt-2'>
                                    <button className='md:text-base text-sm font-semibold bg-white py-1 px-2 rounded-md'>
                                        <span className='text-gray-400 mr-2'>
                                            Slot
                                        </span>
                                        Morning
                                    </button>
                                    <button className='md:text-base text-sm font-semibold bg-white py-1 px-2 rounded-md'>
                                        <span className='text-gray-400 mr-2'>
                                            Time
                                        </span>
                                        10:00 AM
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot />
                    </TimelineSeparator>
                    <TimelineContent>
                        <div className='flex h-fit items-center bg-[#FFEBEB] rounded-3xl'>
                            <div className='bg-white rounded-3xl border w-fit p-5'>
                                <h4 className='md:text-lg text-sm font-medium text-gray-400'>2022</h4>

                                <h3 className='md:text-3xl text-xl font-semibold'>13</h3>
                                <h3 className='md:text-2xl text-xl font-medium text-gray-400'>Sep</h3>
                            </div>

                            <div className='p-5'>
                                <h3 className='md:text-lg text-base font-semibold'>Dr. Muhammad Abdul Hussein</h3>
                                <p className='md:text-base text-sm font-medium py-1'>Cardiologist</p>

                                <div className='flex gap-3 mt-2'>
                                    <button className='md:text-base text-sm font-semibold bg-white py-1 px-2 rounded-md'>
                                        <span className='text-gray-400 mr-2'>
                                            Slot
                                        </span>
                                        Morning
                                    </button>
                                    <button className='md:text-base text-sm font-semibold bg-white py-1 px-2 rounded-md'>
                                        <span className='text-gray-400 mr-2'>
                                            Time
                                        </span>
                                        10:00 AM
                                    </button>
                                </div>
                            </div>
                        </div>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </div>
    );
};

export default Appointments;