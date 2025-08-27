import React from "react";
import { useParams, Link } from "react-router-dom";
import { blogPosts } from "../data";

export default function SinglePost() {
    const { id } = useParams();
    const post = blogPosts.find((p) => p.id === parseInt(id));

    if (!post) {
        return <h2 className="text-center mt-10">Post not found</h2>;
    }

    return (
        <div className="max-w-3xl mx-auto px-6 py-10">
            {/* Back Button */}
            <Link
                to="/"
                className="inline-block mb-6 px-4 py-2 bg-gray-200 hover:bg-gray-300 rounded-lg text-sm font-medium transition"
            >
                ← Back to Blog
            </Link>

            <img
                src={post.image}
                alt={post.title}
                className="w-full rounded-xl mb-6"
            />
            <h1 className="text-3xl font-bold mb-2">{post.title}</h1>
            <p className="text-gray-500 mb-4">{post.date}</p>
            <p className="text-lg text-gray-700">{post.description}</p>

            <a
                href={post.videoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className=" p-3  mt-[20px] rounded-xl text-blue-600 font-semibold hover:underline border-blue-600 border-2 inline-block "
            >
                Watch Video →
            </a>

        </div>
    );
}
