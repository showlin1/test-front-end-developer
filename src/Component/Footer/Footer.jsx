import { MdCameraAlt, MdOutlineFlashlightOn } from "react-icons/md";
import { AiFillLike } from "react-icons/ai";
import { BsTwitterX } from "react-icons/bs";
const Footer = () => {
    return (
        <div>
            <footer className="footer footer-center  p-10">
                <aside>
                    <p className="text-2xl text-slate-400 font-bold border-2 p-1 rounded-lg bg-slate-100">
                        Captured with Lightshot
                    </p>
                    <div className="flex justify-between gap-4">
                        <div className="flex gap-1">
                            <span className="mt-1 text-lg"><MdCameraAlt /></span>
                            <p className="text-lg text-slate-500">find similar</p>
                        </div>
                        <div className="flex gap-1">
                            <span className="mt-1 text-xl bg-slate-400 rounded"><MdOutlineFlashlightOn /></span>
                            <p className="text-lg text-slate-500">report abuse</p>
                        </div>
                    </div>
                    <div className=" flex justify-between gap-5">
                        <div>
                            <button className="text-lg bg-black rounded-3xl pl-3 pr-3 text-white flex gap-1"><span className="mt-2"><BsTwitterX /></span>Post</button>
                        </div>
                        <div>
                            <button className="text-lg bg-primary  pl-3 pr-3 text-white flex gap-1"><span className="mt-1 "><AiFillLike /></span>Like 5</button>
                        </div>
                    </div>
                </aside>
               
                <aside className="footer  border-base-400 border-t-2 ">
                    <div className="flex justify-between gap-28 mt-5">
                        <div className="flex gap-5">
                            <img src="https://i.ibb.co.com/RpLRrmR/lightshot-logo-removebg-preview.png" alt="LightShot"
                                width='100'
                                height='80' />
                            <p className="text-primary">Download</p>
                            <p className="text-primary">Tutorials</p>
                            <p className="text-primary">Privacy</p>
                            <p className="text-primary">Help</p>
                            <p className="text-primary">Advertise</p>
                        </div>
                        <p><span className="text-primary">Skillbrains</span> ©2009-2022</p>
                    </div>
                </aside>
            </footer>
        </div>
    );
};

export default Footer;