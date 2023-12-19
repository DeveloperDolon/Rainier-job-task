
import vaccineImage from "../../assets/Svg_sample2.svg";

const CovidBanner = () => {
    return (
        <div className="bg-white border rounded-lg mt-5 p-5">
            <div className="flex justify-between flex-wrap gap-7">
                <h3 className="md:text-xl text-lg font-medium">Covid-19 Updates</h3>

                <div className="text-right">
                    <p className="md:text-base text-sm font-semibold">10 September 2022</p>
                    <p className="md:text-base text-sm font-light">Thursday  10:00:00 AM</p>
                </div>
            </div>       

            <div className="grid sm:grid-cols-2 grid-cols-1 justify-items-center mt-10">
                <img src={vaccineImage} alt="" />

                <div style={{background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)"}} className="text-center rounded-md p-5">
                    <p className="md:text-base text-sm font-light text-white">Infection Number</p>
                    <h1 className="md:text-5xl text-3xl font-medium text-white py-5">500</h1>
                    <p className="md:text-base pb-5 text-sm font-light text-white">Infection Rate</p>
                    <h1 className="md:text-5xl text-3xl font-medium text-white">10 %</h1>
                </div>
            </div>
        </div>
    );
};

export default CovidBanner;