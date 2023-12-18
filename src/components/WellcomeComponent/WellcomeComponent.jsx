import imgOne from "../../assets/Svg_sample1.svg";
import hartIcon from "../../assets/fluent_heart-pulse-24-regular.svg";
import pressureIcon from "../../assets/Frame 2850.svg";
import { MdOutlineArrowDropUp } from "react-icons/md";

const WellcomeComponent = () => {
    return (
        <div className="flex justify-between md:flex-row flex-col gap-5">
            <div className="md:w-[50%] w-full">
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

                <div className="grid md:grid-cols-4 grid-cols-2 mt-7">
                    <div>
                        <img src={hartIcon} className="bg-[#FF7594] rounded-md" alt="" />

                        <div>
                            <p>Pluse Count</p>
                            <h4>60 bpm</h4>
                            <p><MdOutlineArrowDropUp />Normal</p>
                        </div>
                    </div>
                    
                    <div>
                        <img src={pressureIcon} className="rounded-md" alt="" />

                        <div>
                            <p>Pluse Count</p>
                            <h4>60 bpm</h4>
                            <p><MdOutlineArrowDropUp />Normal</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="md:w-[35%] w-full bg-black">
                sf
            </div>
        </div>
    );
};

export default WellcomeComponent;