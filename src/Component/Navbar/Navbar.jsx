import { ImDownload2 } from "react-icons/im";
import { BsTwitter } from "react-icons/bs";
import { FaFacebookF } from "react-icons/fa";
const Navbar = () => {
    return (
        <div className="">
            <div className="bg-slate-300 navbar w-full">
                <div className="navbar-start">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor">
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M4 6h16M4 12h8m-8 6h16" />
                            </svg>
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                            <select className="select select-bordered w-full max-w-xs">
                                <option disabled selected>English</option>
                            </select>
                            <li><button>Sign In</button></li>
                        </ul>
                    </div>
                    <img src="https://i.ibb.co.com/RpLRrmR/lightshot-logo-removebg-preview.png" alt="LightShot"
                        width='150'
                        height='150'
                    />
                </div>
                <div className=" navbar-start hidden lg:flex">
                    <ul className="menu menu-horizontal px-1 gap-10">
                        <select className="select bg-slate-600 text-white select-bordered ">
                            <option disabled selected>English</option>
                        </select>
                        {/* <li className="bg-slate-600 rounded-xl text-white"><button>English</button></li> */}
                        <li className="bg-slate-600 p-1 rounded-xl text-white"><button>Sign In</button></li>
                    </ul>
                </div>
                <div className="navbar-end">
                    <div className="flex gap-5 mr-10">
                        <button className="text-2xl text-white"><BsTwitter /></button>
                        <button className="text-2xl text-white"><FaFacebookF /></button>
                    </div>
                    <button className="text-white text-xl p-4 rounded-l-xl bg-cyan-600"><ImDownload2 /></button>
                    <a className="p-4 text-sm text-white rounded-r-xl bg-cyan-600">Download LightShot for free</a>
                </div>
            </div>
        </div>
    );
};

export default Navbar;