import imgOne from "../../assets/Svg_sample1.svg";
import hartIcon from "../../assets/fluent_heart-pulse-24-regular.svg";
import pressureIcon from "../../assets/Frame 2850.svg";
import { TiArrowSortedUp } from "react-icons/ti";
import oxygenIcon from "../../assets/Frame 2851.svg";
import glucoseIcon from "../../assets/Frame 2852.svg";

const WellcomeComponent = () => {
    return (
        <div className="flex justify-between md:flex-row flex-col gap-5">
            <div className="md:w-[60%] w-full">
                <div style={{
                    background: "linear-gradient(92deg, #FF7594 19.86%, #FF797B 84.16%, #FF7C65 139.72%)",
                }}
                className="flex items-center gap-6 rounded-lg"
                >
                    <img src={imgOne} alt="" />

                    <div>
                        <h2 className="md:text-3xl text-xl font-semibold text-white">Hello, Mary Jane!</h2>

                        <p className="md:text-lg text-base font-medium text-white mt-3">Stay Up-to-Date with your appointments.</p>
                        
                        <p className="md:text-lg text-base font-medium text-white mt-3">You Have No pending Reports</p>
                    </div>
                </div>

                <div className="flex gap-5 justify-between flex-wrap  mt-10">
                    <div className="p-5 shadow-md w-56 bg-white rounded-md">
                        <img src={hartIcon} className="bg-[#FF7594] rounded-md md:w-10 w-7 md:h-10 h-7" alt="" />

                        <div>
                            <p className="md:text-base text-sm font-semibold py-3">Pluse Count</p>
                            <h4 className="md:text-2xl text-lg font-medium ">60 bpm</h4>
                            <p className="flex items-center gap-2"><TiArrowSortedUp className="md:text-xl text-lg" /><span className="text-green-600 font-medium md:text-base text-sm py-3">Normal</span></p>
                        </div>
                    </div>
                    
                    <div className="p-5 shadow-md w-56 bg-white rounded-md">
                        <img src={pressureIcon} className="rounded-md md:w-10 w-7 md:h-10 h-7" alt="" />

                        <div>
                            <p className="md:text-base text-sm font-semibold py-3">Blood Pressure</p>
                            <h4 className="md:text-2xl text-lg font-medium ">100/70 mmhG</h4>
                            <p className="flex items-center gap-2"><TiArrowSortedUp className="md:text-xl text-lg" /><span className="text-green-600 font-medium md:text-base text-sm py-3">Slightly higher</span></p>
                        </div>
                    </div>
                    
                    <div className="p-5 shadow-md w-56 bg-white rounded-md">
                        <img src={oxygenIcon} className="rounded-md md:w-10 w-7 md:h-10 h-7" alt="" />

                        <div>
                            <p className="md:text-base text-sm font-semibold py-3">Oxygen Saturation</p>
                            <h4 className="md:text-2xl text-lg font-medium ">97 %</h4>
                            <p className="flex items-center gap-2"><TiArrowSortedUp className="md:text-xl text-lg" /><span className="text-green-600 font-medium md:text-base text-sm py-3">Slightly higher</span></p>
                        </div>
                    </div>
                    
                    <div className="p-5 shadow-md w-56 bg-white rounded-md">
                        <img src={glucoseIcon} className="rounded-md md:w-10 w-7 md:h-10 h-7" alt="" />

                        <div>
                            <p className="md:text-base text-sm font-semibold py-3">Glucose Count</p>
                            <h4 className="md:text-2xl text-lg font-medium ">100 mm/dL</h4>
                            <p className="flex items-center gap-2"><TiArrowSortedUp className="md:text-xl text-lg" /><span className="text-green-600 font-medium md:text-base text-sm py-3">Normal</span></p>
                        </div>
                    </div>
                </div>

                <div className="mt-12 bg-white rounded-lg border p-6">

                </div>
            </div>

            <div className="md:w-[35%] w-full bg-black">
                sf
            </div>
        </div>
    );
};

export default WellcomeComponent;