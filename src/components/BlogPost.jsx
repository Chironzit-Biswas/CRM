import React, { useState } from "react";
import { Link } from "react-router-dom";
import { blogPosts } from "../data";

export default function BlogPosts() {
    const [filter, setFilter] = useState("All");

    const filteredPosts =
        filter === "All"
            ? blogPosts
            : blogPosts.filter((post) => post.category === filter);

    return (
        <div className="px-6 py-10">
            {/* Header Filter Buttons */}
            <div className="flex flex-wrap justify-center mb-8">
                {["All", "Blog", "Podcast", "Webinar"].map((cat) => (
                    <button
                        key={cat}
                        onClick={() => setFilter(cat)}
                        className={`px-5 py-2 transition ${
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
                {filteredPosts.map((post) => (
                    <div
                        key={post.id}
                        className="bg-white rounded-2xl shadow hover:shadow-lg transition overflow-hidden flex flex-col"
                    >
                        {/* Image */}
                        <div className="relative">
                            <img
                                src={post.image}
                                alt={post.title}
                                className="w-full h-48 object-cover"
                            />
                        </div>

                        {/* Content */}
                        <div className="p-5 flex flex-col flex-grow">
                            <h3 className="text-lg font-semibold mb-2">{post.title}</h3>
                            <p className="text-sm text-gray-500 mb-2">{post.date}</p>
                            <p className="text-gray-600 text-sm flex-grow">{post.description}</p>

                            {/* Dynamic Link */}
                            <Link
                                to={`/post/${post.id}`}
                                className="text-blue-600 font-medium mt-3 hover:underline"
                            >
                                Read More
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
