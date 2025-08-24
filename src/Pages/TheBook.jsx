import {Tab, TabList, TabPanel, Tabs} from "react-tabs";
import {Login} from "./Login.jsx";
import {SideNote} from "../components/SideNote.jsx";
import {Blogs} from "./Blogs.jsx";
import {Link, NavLink} from "react-router";
import BlogPost from "../components/BlogPost.jsx";


export const TheBook = () => {
    return (
        <>
            <div className={'bg-gray-900 text-white flex flex-col justify-center items-center py-[30px]'}>
                <h2 className={'text-5xl font-bold'}>Podcast</h2>
                <p className={'w-[600px] text-center'}>Welcome to Empellor CRM, where we redefine the essence of CRM for
                    businesses. Beyond mere technology</p>
            </div>
            <BlogPost></BlogPost>
        </>
    )
}