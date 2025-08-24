import React, { useState } from "react";
import blogPhoto from '../assets/blog.jpg'
export default function  BlogPosts () {
    
    const [filter, setFilter] = useState("All");

    const blogPosts = [
        {
            title: "The Truth About Why CRMs Fail (And How to Fix Yours)",
            date: "January 15, 2024",
            description:
                "Most businesses struggle with CRM adoption, but why? In this episode, Christopher Smith breaks down the top CRM mistakes...",
            image: blogPhoto,
            videoUrl: "https://www.youtube.com/watch?v=p7eE_dn9u4k",
            category: "Blog",
        },
        {blogPhoto,
            title: "CRM Shouldn’t Suck: The Book Breakdown",
            date: "January 22, 2024",
            description:
                "In this special episode, we dive into key takeaways from CRM Shouldn’t Suck—the book that’s changing the way businesses approach CRM...",
            image: blogPhoto,
            videoUrl: "https://www.youtube.com/watch?v=p7eE_dn9u4k",
            category: "Podcast",
        },
        {
            title: "Automating Success: How to Make Your CRM Work for You",
            date: "January 29, 2024",
            description:
                "Tired of manual tasks bogging down your workflow? Discover how CRM automation can boost productivity...",
            image:blogPhoto,
            videoUrl: "https://www.youtube.com/watch?v=p7eE_dn9u4k",
            category: "Webinar",
        },
        {
            title: "Data-Driven Growth: How to Use CRM Analytics to Scale Your Business",
            date: "February 5, 2024",
            description:
                "Your CRM is full of valuable insights—if you know where to look. Learn how to leverage CRM data...",
            image: blogPhoto,
            videoUrl: "https://www.youtube.com/watch?v=p7eE_dn9u4k",
            category: "Blog",
        },
        {
            title: "Choosing the Right CRM: A No-Nonsense Guide for Businesses",
            date: "February 12, 2024",
            description:
                "With so many CRM options available, how do you choose the right fit? This episode walks you through...",
            image: blogPhoto,
            videoUrl: "https://www.youtube.com/watch?v=p7eE_dn9u4k",
            category: "Podcast",
        },
        {
            title: "The Future of CRM: AI, Automation, and What’s Next",
            date: "February 19, 2024",
            description:
                "AI is reshaping the way businesses use CRM. From predictive analytics to hyper-automation...",
            image:blogPhoto,
            videoUrl: "https://www.youtube.com/watch?v=p7eE_dn9u4k",
            category: "Webinar",
        },
    ];

    const filteredPosts =
        filter === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === filter);

    return (
        <div className="px-6 py-10 ">
            {/* Header Filter Buttons */}
            <div className="flex flex-wrap justify-center gap-4 mb-8">
                {["All", "Blog", "Podcast", "Webinar"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 bg-red rounded-2xl transition ${
                            filter === cat
                                ? "bg-blue-600 text-white"
                                : "bg-gray-200 hover:bg-gray-300"
                        }`}
                    >
                        {cat}
                    </button>
                ))}
            </div>

            {/* Blog Grid */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredPosts.map((post, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                    >
                        {/* Image with Play Button Overlay */}
                        <div className="relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover border-1 border-red-500"
                            />
                            <a
                                href={post.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="bg-red-600 rounded-full p-4 flex items-center justify-center shadow-lg hover:scale-110 transition">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        className="h-6 w-6 text-white"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8 5v14l11-7z" />
                                    </svg>
                                </div>
                            </a>
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <p className="text-gray-600 text-sm flex-grow">{post.description}</p>
                            <a
                                href={post.videoUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-blue-600 font-medium mt-3 hover:underline"
                            >
                                Read More
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
