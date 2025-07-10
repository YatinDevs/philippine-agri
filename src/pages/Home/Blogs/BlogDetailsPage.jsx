import React from "react";
import { useParams, Link } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../../utils/motion";
import { FaFacebook, FaTwitter, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { blogData } from "../../constants/blogData";

const BlogDetailsPage = () => {
  const { slug } = useParams();
  const post = blogData.posts.find((p) => p.slug === slug);

  if (!post) {
    return (
      <div className="h-[600px]  flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-700">
            Post not found
          </h2>
          <Link
            to="/blogs"
            className="mt-4 inline-block px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            Back to Blog
          </Link>
        </div>
      </div>
    );
  }

  const formattedDate = new Date(post.published_date).toLocaleDateString(
    "en-US",
    {
      year: "numeric",
      month: "long",
      day: "numeric",
    }
  );

  return (
    <motion.div
      initial="hidden"
      whileInView="show"
      viewport={{ once: true }}
      className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-30"
    >
      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          <article className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-100">
            {/* Featured Image */}
            <img
              src={post.image_url}
              alt={post.title}
              className="w-full h-96 object-cover"
            />

            <div className="p-8">
              {/* Post Header */}
              <div className="flex items-center justify-between mb-4">
                <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full">
                  {post.category}
                </span>
                <span className="text-sm text-gray-500">{formattedDate}</span>
              </div>
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {post.title}
              </h1>

              {/* Author Info */}
              <div className="flex items-center gap-4 mb-8">
                <img
                  src={post.author_avatar}
                  alt={post.author_name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h4 className="font-medium text-gray-800">
                    {post.author_name}
                  </h4>
                  <p className="text-sm text-gray-500">{post.author_role}</p>
                </div>
              </div>

              {/* Article Content */}
              <div
                className="prose max-w-none"
                dangerouslySetInnerHTML={{ __html: post.content }}
              ></div>

              {/* Related Services */}
              {post.related_services && post.related_services.length > 0 && (
                <div className="mt-12 bg-blue-50 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-800 mb-4">
                    Related Services
                  </h3>
                  <ul className="space-y-2">
                    {post.related_services.map((service, index) => (
                      <li key={index}>
                        <Link
                          to={service.link}
                          className="text-blue-600 hover:text-blue-700 hover:underline"
                        >
                          {service.name}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Social Sharing */}
              <div className="mt-12 pt-6 border-t border-gray-200">
                <h4 className="text-lg font-medium text-gray-800 mb-4">
                  Share this article
                </h4>
                <div className="flex gap-4">
                  <SocialShareButton
                    platform="facebook"
                    url={window.location.href}
                    Icon={FaFacebook}
                    color="bg-blue-600 hover:bg-blue-700"
                  />
                  <SocialShareButton
                    platform="twitter"
                    url={window.location.href}
                    text={post.title}
                    Icon={FaTwitter}
                    color="bg-blue-400 hover:bg-blue-500"
                  />
                  <SocialShareButton
                    platform="linkedin"
                    url={window.location.href}
                    title={post.title}
                    Icon={FaLinkedin}
                    color="bg-blue-700 hover:bg-blue-800"
                  />
                  <SocialShareButton
                    platform="whatsapp"
                    url={window.location.href}
                    text={post.title}
                    Icon={FaWhatsapp}
                    color="bg-green-500 hover:bg-green-600"
                  />
                </div>
              </div>
            </div>
          </article>

          {/* Comments Section */}
          <motion.div
            variants={fadeIn("up", "spring", 0.4, 1)}
            className="mt-12 bg-white rounded-lg shadow-md p-8"
          >
            <h3 className="text-xl font-semibold text-gray-800 mb-6">
              Leave a Comment
            </h3>
            <form className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-gray-700 mb-1"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                    required
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="comment"
                  className="block text-sm font-medium text-gray-700 mb-1"
                >
                  Comment *
                </label>
                <textarea
                  id="comment"
                  rows={4}
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-6 rounded-md transition-colors"
              >
                Post Comment
              </button>
            </form>
          </motion.div>
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-blue-50 p-6 rounded-lg sticky top-8">
            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Articles
              </h3>
              <ul className="space-y-3">
                {blogData.recentPosts.map((recentPost) => (
                  <li key={recentPost.id}>
                    <Link
                      to={`/blog/${recentPost.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <img
                        src={recentPost.image_url}
                        alt={recentPost.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {recentPost.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(
                            recentPost.published_date
                          ).toLocaleDateString("en-US", {
                            year: "numeric",
                            month: "short",
                            day: "numeric",
                          })}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                {blogData.categories.map((category, index) => (
                  <li key={index}>
                    <Link
                      to={`/blog?category=${category}`}
                      className="flex items-center justify-between w-full text-left text-gray-600 hover:text-blue-600 transition-colors"
                    >
                      <span>{category}</span>
                      <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                        {
                          blogData.posts.filter((p) => p.category === category)
                            .length
                        }
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

// Social Share Button Component
const SocialShareButton = ({ platform, url, text, title, Icon, color }) => {
  const shareUrls = {
    facebook: `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(
      url
    )}`,
    twitter: `https://twitter.com/intent/tweet?text=${encodeURIComponent(
      text
    )}&url=${encodeURIComponent(url)}`,
    linkedin: `https://www.linkedin.com/shareArticle?mini=true&url=${encodeURIComponent(
      url
    )}&title=${encodeURIComponent(title)}`,
    whatsapp: `https://api.whatsapp.com/send?text=${encodeURIComponent(
      `${text} ${url}`
    )}`,
  };

  return (
    <a
      href={shareUrls[platform]}
      target="_blank"
      rel="noopener noreferrer"
      className={`${color} text-white p-3 rounded-full transition-colors`}
      aria-label={`Share on ${
        platform.charAt(0).toUpperCase() + platform.slice(1)
      }`}
    >
      <Icon size={18} />
    </a>
  );
};

export default BlogDetailsPage;
