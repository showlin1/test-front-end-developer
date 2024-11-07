import { SiDatabricks } from "react-icons/si";
import { MdDateRange } from "react-icons/md";
import { CgCalendarDates } from "react-icons/cg";
import { MdAttachment } from "react-icons/md";
import { TiMessages } from "react-icons/ti";
import { useForm } from "react-hook-form";
import { useState } from "react";
import AttachmentModal from "./AttachmentModal";
const Home = () => {
    const { register, handleSubmit, reset } = useForm();
    const [isOpenA, setIsOpenA] = useState(false);
    const closeModal = () => {
        setIsOpenA(false);
    }
    return (
        <div className="max-w-7xl mx-auto border-t-2 border-r-2 p-3 ">
            <div className=" flex flex-col-1 md:flex-col-2 lg:flex-col-6 gap-5  overflow-x-auto mx-auto">
                <div className="flex-shrink-0 h-[550px] bg-gray-100 p-4 overflow-y-auto ">
                    <div className="flex justify-between">
                        <div className="flex">
                            <h3 className="text-lg font-semibold  p-3 mr-4 rounded-l-xl bg-red-700"></h3>
                            <h3 className="text-xl font-semibold text-center ">Incomplete</h3>
                        </div>
                        <button className="p-2 bg-slate-200 rounded-lg">0</button>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 h-[550px] bg-gray-100 p-4 overflow-y-auto ">
                    <div className="flex justify-between">
                        <div className="flex">
                            <h3 className="text-lg font-semibold  p-3 mr-4 rounded-l-xl bg-cyan-400"></h3>
                            <h3 className="text-xl font-semibold text-center ">To Do</h3>
                        </div>
                        <button className="p-2 bg-slate-200 rounded-lg">0</button>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 h-[550px] bg-gray-100 p-4 overflow-y-auto ">
                    <div className="flex justify-between">
                        <div className="flex">
                            <h3 className="text-lg font-semibold p-3 mr-4 rounded-l-xl bg-yellow-400"></h3>
                            <h3 className="text-xl font-semibold text-center ">Doing</h3>
                        </div>
                        <button className="p-2 bg-slate-200 rounded-lg">0</button>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 h-[550px] bg-gray-100 p-4 overflow-y-auto ">
                    <div className="flex justify-between">
                        <h3 className="text-xl font-semibold text-center ">Under Review</h3>
                        <button className="p-2 bg-slate-200 rounded-lg">0</button>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 h-[550px] bg-gray-100 p-4 overflow-y-auto ">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold text-center ">Completed</h3>
                        <button className="p-2 bg-slate-200 rounded-lg">0</button>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="flex-shrink-0 h-[550px] bg-gray-100 p-4 overflow-y-auto ">
                    <div className="flex justify-between">
                        <h3 className="text-lg font-semibold text-center ">Overdue</h3>
                        <button className="p-2 bg-slate-200 rounded-lg">0</button>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl mt-5 ">
                        <div className=" flex justify-between p-3 gap-10">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Client Name</h2>
                            </div>
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <h2 className="text-xl">Sadik Istiak</h2>
                            </div>
                        </div>
                        <div className="flex justify-between p-3">
                            <div className="flex gap-1 ">
                                <SiDatabricks className="text-xl items-center" />
                                <p className="text-lg items-center text-center">Lorem ipsum dolor sit....</p>
                            </div>
                            <div className="flex">
                                <button className="bg-slate-100 flex p-1 rounded-sm"> <span className="mt-1"><MdDateRange /></span> 1/2</button>
                            </div>
                        </div>
                        <div className="flex gap-2 p-3">
                            <div className="flex gap-2">
                                <img src="https://i.ibb.co.com/41YSwJX/images-1.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                                <img src="https://i.ibb.co.com/HtzhLk6/images-2.png" alt="Man Icon" width='30' height='30' className="rounded-full" />
                            </div>
                            <button className="bg-slate-100 p-1 rounded-full">12+</button>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><TiMessages /></span>
                                <p className="text-lg">15</p>
                            </div>
                            <div className="flex gap-2 ml-3 p-1 ">
                                <div>
                                    <button onClick={() => setIsOpenA(true)} className="text-xl mt-1"><MdAttachment /></button>
                                    <AttachmentModal closeModal={closeModal} isOpenA={isOpenA} />
                                </div>
                                <p className="text-lg">25</p>
                            </div>
                            <div className="flex gap-1 ml-3 p-1 ">
                                <span className="mt-1 text-xl"><CgCalendarDates /></span>
                                <p className="text-lg">30-12-2022</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;