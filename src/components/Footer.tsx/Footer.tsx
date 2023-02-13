import { TiSocialInstagram } from "react-icons/ti";
import { GoMarkGithub } from "react-icons/go";
import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { IoLogoYoutube } from "react-icons/io";

function Footer() {
return (
<footer className="footer footer-center p-10 rounded bg-white">
<div className="md:grid grid-flow-col gap-4 hidden">
    <a className="link link-hover">About us</a>
    <a className="link link-hover">Contact</a>
    <a className="link link-hover">Partnership</a>
    <a className="link link-hover">Information</a>
    <a className="link link-hover">For users</a>
    <a className="link link-hover">Terms of use</a>
</div>
<div>
    <div className="grid grid-flow-col gap-4">
        <a className="link">
            <TiSocialInstagram
            className="text-3xl
            hover:text-pink-500
            "/>
        </a>
        <a className="link">
            <AiFillTwitterCircle className="text-3xl
            hover:text-blue-500
            " />
        </a>
        <a className="link">
            <IoLogoYoutube className="text-3xl
            hover:text-red-500
            " />
        </a>
        <a className="link">
            <GoMarkGithub className="text-3xl
            hover:text-black
            " />
        </a>
        <a className="link">
            <BsFacebook className="text-3xl
            hover:text-blue-500
            " />
        </a>
    </div>
</div>
<div>
    <p>Copyright © 2023 - All right reserved by <strong className="text-black">Trybe team 28</strong></p>
</div>
</footer>
    );
}

export default Footer;