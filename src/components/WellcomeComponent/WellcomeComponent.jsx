import imgOne from "../../assets/Svg_sample1.svg";
import hartIcon from "../../assets/fluent_heart-pulse-24-regular.svg";
import pressureIcon from "../../assets/Frame 2850.svg";
import { TiArrowSortedUp } from "react-icons/ti";
import oxygenIcon from "../../assets/Frame 2851.svg";
import glucoseIcon from "../../assets/Frame 2852.svg";
import { MdDone } from "react-icons/md";
import "./style.css";
import { useState } from "react";
import moment from "moment";
import Appointments from "../Appointments/Appointments";
import CovidBanner from "../CovidBanner/CovidBanner";
import { CiCirclePlus } from "react-icons/ci";

const WellcomeComponent = () => {

    const [todos, setTodos] = useState([]);

    const handleAddTodo = (e) => {
        e.preventDefault();
        const todoData = {
            text: e.target.todo.value,
            date: moment().format('ll')
        };
        const preTodos = [...todos, todoData];
        setTodos(preTodos);
        e.target.todo.value = "";
    }

    const handleSelectAll = (e) => {
        const checkboxContainer = document.getElementById("checkboxContainer");

        const inputs = Array.prototype.slice.call(checkboxContainer.getElementsByTagName("input"));

        if (e.target.checked && inputs?.length > 0) {
            inputs?.forEach(item => item.checked = true);
            return;
        }
        inputs?.forEach(item => item.checked = false);
    }

    return (
        <div className="flex justify-between xl:flex-row flex-col gap-5">
            <div className="xl:w-[715px] w-full">
                <div style={{
                    background: "linear-gradient(92deg, #FF7594 19.86%, #FF797B 84.16%, #FF7C65 139.72%)",
                }}
                    className="flex md:flex-row flex-col items-center gap-6 rounded-lg"
                >
                    <img src={imgOne} alt="" />

                    <div className="p-6">
                        <h2 className="md:text-3xl text-xl font-semibold text-white">Hello, Mary Jane!</h2>

                        <p className="md:text-lg text-base font-medium text-white mt-3">Stay Up-to-Date with your appointments.</p>

                        <p className="md:text-lg text-base font-medium text-white mt-3">You Have No pending Reports</p>
                    </div>
                </div>

                <div className="flex gap-5 lg:justify-between sm:justify-between justify-center  flex-wrap  mt-10">
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

                <div className="mt-14 bg-white xl:block hidden rounded-lg border p-6">
                    <h1 className="md:text-2xl text-xl font-medium pb-5">To-Do List</h1>

                    <form onSubmit={handleAddTodo} className="flex items-start gap-5">
                        <textarea name="todo" required className="p-5 w-full border rounded-lg" id="" rows="4"></textarea>

                        <button
                            style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }}
                            className="flex gap-2 items-center py-2 px-6 md:text-lg text-sm rounded-lg text-white" type="submit"><MdDone /> Add</button>
                    </form>

                    <div className="mt-10 flex justify-between items-centers">
                        <div className="flex items-center checkbox-container">
                            <input onClick={handleSelectAll} className="w-10 h-10 accent-[#FF7594] bg-white rounded-lg text-white" type="checkbox" /> <label className="md:text-lg text-sm font-semibold ml-5">Select All</label>
                        </div>

                        <button
                            style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }}
                            className="flex gap-2 items-center py-2 px-6 md:text-lg text-sm rounded-lg text-white" type="submit"><MdDone /> Done</button>
                    </div>

                    <div id="checkboxContainer" className="mt-8 space-y-5 min-h-[300px]">
                        {
                            todos?.map((item, idx) => <div key={idx} className="flex items-center checkbox-container">
                                <input className="w-10 h-10 accent-[#FF7594] bg-white rounded-lg text-white" type="checkbox" /> <label className="md:text-lg text-sm font-semibold ml-5 flex items-center">{item?.text} <span className="ml-5 text-gray-300 md:text-base text-sm font-medium">Last Added: {item?.date}</span></label>
                            </div>)
                        }
                    </div>
                </div>
            </div>

            <div className="xl:w-[500px] w-full h-fit">
                <div className="flex mt-5 lg:flex-row justify-between items-start flex-col-reverse gap-5">
                    <div className="xl:hidden flex-1 lg:w-fit w-full bg-white rounded-lg border p-6">
                        <h1 className="md:text-2xl text-xl font-medium pb-5">To-Do List</h1>

                        <form onSubmit={handleAddTodo} className="flex items-end flex-col gap-5">
                            <textarea name="todo" required className="p-5 w-full border rounded-lg" id="" rows="4"></textarea>

                            <button
                                style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }}
                                className="flex gap-2 items-center py-2 px-6 md:text-lg text-sm rounded-lg text-white" type="submit"><MdDone />
                                    <CiCirclePlus />
                                </button>
                        </form>

                        <div className="mt-10 flex justify-between items-centers">
                            <div className="flex items-center checkbox-container">
                                <input onClick={handleSelectAll} className="w-10 h-10 accent-[#FF7594] bg-white rounded-lg text-white" type="checkbox" /> <label className="md:text-lg text-sm font-semibold ml-5">Select All</label>
                            </div>

                            <button
                                style={{ background: "linear-gradient(101deg, #FF7594 -6.58%, #FF7C65 102.46%)" }}
                                className="flex gap-2 items-center py-2 px-6 md:text-lg text-sm rounded-lg text-white" type="submit"><MdDone /> Done</button>
                        </div>

                        <div id="checkboxContainer" className="mt-8 space-y-5">
                            {
                                todos?.map((item, idx) => <div key={idx} className="flex items-center checkbox-container">
                                    <input className="w-10 h-10 accent-[#FF7594] bg-white rounded-lg text-white" type="checkbox" /> <label className="md:text-lg text-sm font-semibold ml-5 flex items-center">{item?.text} <span className="ml-5 text-gray-300 md:text-base text-sm font-medium">Last Added: {item?.date}</span></label>
                                </div>)
                            }
                        </div>
                    </div>
                    <Appointments></Appointments>
                </div>
                <CovidBanner></CovidBanner>
            </div>
        </div>
    );
};

export default WellcomeComponent;