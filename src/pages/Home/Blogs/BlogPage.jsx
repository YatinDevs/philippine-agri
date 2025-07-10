import React, { useState, useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "../../utils/motion";
import { FaSearch, FaChevronLeft, FaChevronRight } from "react-icons/fa";

export const blogData = {
  posts: [
    {
      id: 1,
      slug: "tax-planning-strategies-2023",
      title: "Top Tax Planning Strategies for 2023",
      excerpt:
        "Discover the most effective tax planning strategies to optimize your financial position this year.",
      content: `<p>As we navigate through 2023, it's crucial to stay updated with the latest tax planning strategies that can help individuals and businesses optimize their financial positions. Here are some key approaches:</p>
        <h3>1. Maximize Retirement Contributions</h3>
        <p>Contributing to retirement accounts remains one of the most effective ways to reduce taxable income. For 2023, the contribution limits have increased to:</p>
        <ul>
          <li>401(k): $22,500 ($30,000 for those 50+)</li>
          <li>IRA: $6,500 ($7,500 for those 50+)</li>
        </ul>
        <h3>2. Tax-Loss Harvesting</h3>
        <p>This strategy involves selling investments at a loss to offset capital gains. With market volatility in 2023, this can be particularly valuable.</p>`,
      category: "Tax Planning",
      published_date: "2023-05-15",
      image_url:
        "https://plus.unsplash.com/premium_photo-1661720019495-cbf6612a022b?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author_name: "CA Yash Shukla",
      author_role: "Tax Consultant",
      author_avatar: "/images/team/yash-shukla.jpg",
      related_services: [
        { name: "Tax Advisory", link: "/services/tax" },
        { name: "Financial Planning", link: "/services/consulting" },
      ],
    },
    {
      id: 2,
      slug: "gst-compliance-guide",
      title: "Essential GST Compliance Guide for Businesses",
      excerpt:
        "A comprehensive guide to navigating GST compliance requirements for small and medium businesses.",
      content: `<p>Goods and Services Tax (GST) compliance is critical for businesses operating in India. Here's what you need to know for 2023:</p>
        <h3>Key Filing Deadlines</h3>
        <p>The GST council has introduced several changes to filing deadlines:</p>
        <ul>
          <li>GSTR-1: 11th of following month</li>
          <li>GSTR-3B: 20th of following month</li>
          <li>Annual Return: 31st December</li>
        </ul>
        <h3>Common Compliance Mistakes</h3>
        <p>Based on our audit experience, these are the most frequent errors:</p>
        <ul>
          <li>Incorrect HSN/SAC code classification</li>
          <li>Mismatch between GSTR-1 and GSTR-3B</li>
          <li>Late reconciliation of input tax credits</li>
        </ul>`,
      category: "Legal Compliance",
      published_date: "2023-04-20",
      image_url:
        "https://onlinechartered.com/wp-content/uploads/2023/07/GST-Compliance-Checklist-for-Businesses-in-India-1024x576.jpg",
      author_name: "CA Priya Sharma",
      author_role: "Compliance Specialist",
      author_avatar: "/images/team/priya-sharma.jpg",
      related_services: [
        { name: "Legal Compliance", link: "/services/legal" },
        { name: "Audit Services", link: "/services/audit" },
      ],
    },
    {
      id: 3,
      slug: "audit-preparation-tips",
      title: "5 Essential Tips for Smooth Financial Audits",
      excerpt:
        "Prepare your business for financial audits with these expert recommendations.",
      content: `<p>Financial audits can be stressful, but proper preparation can make the process much smoother. Here are our top tips:</p>
        <h3>1. Maintain Organized Records</h3>
        <p>Keep all financial documents well-organized throughout the year. This includes invoices, receipts, bank statements, and tax filings.</p>
        <h3>2. Reconcile Accounts Regularly</h3>
        <p>Monthly reconciliation of bank accounts and credit cards helps identify and resolve discrepancies early.</p>
        <h3>3. Understand Your Financial Statements</h3>
        <p>Be prepared to explain any unusual transactions or fluctuations in your financial statements.</p>`,
      category: "Audit",
      published_date: "2023-03-10",
      image_url:
        "https://plus.unsplash.com/premium_photo-1706559780094-648dbe2b2bd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author_name: "CA Rohan Patel",
      author_role: "Audit Manager",
      author_avatar: "/images/team/rohan-patel.jpg",
      related_services: [
        { name: "Audit Services", link: "/services/audit" },
        { name: "Accounting", link: "/services/accounting" },
      ],
    },
    {
      id: 4,
      slug: "startup-accounting",
      title: "Accounting Best Practices for Startups",
      excerpt:
        "Key accounting practices that every startup should implement from day one.",
      content: `<p>Startups often neglect proper accounting in their early stages, which can lead to problems later. Here are essential practices:</p>
        <h3>1. Separate Business and Personal Finances</h3>
        <p>Open a dedicated business bank account and credit card to maintain clear financial separation.</p>
        <h3>2. Implement Cloud Accounting</h3>
        <p>Use cloud-based accounting software from the beginning to maintain accurate, real-time financial records.</p>
        <h3>3. Track Key Metrics</h3>
        <p>Monitor burn rate, customer acquisition cost, and other KPIs to understand your financial health.</p>`,
      category: "Business Consulting",
      published_date: "2023-02-28",
      image_url:
        "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author_name: "CA Neha Gupta",
      author_role: "Startup Consultant",
      author_avatar: "/images/team/neha-gupta.jpg",
      related_services: [
        { name: "Startup Services", link: "/services/startups" },
        { name: "Business Consulting", link: "/services/consulting" },
      ],
    },
    {
      id: 5,
      slug: "investment-strategies",
      title: "Smart Investment Strategies for Long-Term Growth",
      excerpt:
        "Learn how to build a diversified investment portfolio for sustainable wealth creation.",
      content: `<p>Creating long-term wealth requires a disciplined investment approach. Consider these strategies:</p>
        <h3>1. Asset Allocation</h3>
        <p>Diversify across asset classes (equities, bonds, real estate) based on your risk tolerance and time horizon.</p>
        <h3>2. Systematic Investment</h3>
        <p>Regular, disciplined investing (like SIPs) helps average out market volatility.</p>
        <h3>3. Tax-Efficient Investing</h3>
        <p>Utilize tax-advantaged accounts and instruments to maximize after-tax returns.</p>`,
      category: "Financial Advisory",
      published_date: "2023-01-15",
      image_url:
        "https://images.unsplash.com/photo-1653378972336-103e1ea62721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author_name: "CA Amit Joshi",
      author_role: "Wealth Manager",
      author_avatar: "/images/team/amit-joshi.jpg",
      related_services: [
        { name: "Wealth Management", link: "/services/wealth" },
        { name: "Investment Advisory", link: "/services/investment" },
      ],
    },
    {
      id: 6,
      slug: "business-restructuring",
      title: "When and How to Consider Business Restructuring",
      excerpt:
        "Key indicators that your business might need restructuring and how to approach it.",
      content: `<p>Business restructuring can be a powerful tool for improving efficiency and profitability. Watch for these signs:</p>
        <h3>1. Declining Profit Margins</h3>
        <p>If costs are consistently rising faster than revenues, it may be time to reevaluate your business model.</p>
        <h3>2. Market Changes</h3>
        <p>Significant shifts in your industry may require operational or structural changes.</p>
        <h3>3. Growth Plateaus</h3>
        <p>If growth has stalled despite good efforts, restructuring might provide new momentum.</p>`,
      category: "Business Consulting",
      published_date: "2022-12-05",
      image_url:
        "https://images.unsplash.com/photo-1444653614773-995cb1ef9efa?q=80&w=1176&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author_name: "CA Vikram Mehta",
      author_role: "Business Strategist",
      author_avatar: "/images/team/vikram-mehta.jpg",
      related_services: [
        { name: "Business Strategy", link: "/services/strategy" },
        { name: "Corporate Advisory", link: "/services/corporate" },
      ],
    },
    {
      id: 7,
      slug: "estate-planning",
      title: "Comprehensive Guide to Estate Planning",
      excerpt:
        "Protect your assets and ensure your wishes are followed with proper estate planning.",
      content: `<p>Estate planning is essential for everyone, not just the wealthy. Key components include:</p>
        <h3>1. Will Preparation</h3>
        <p>A legally valid will ensures your assets are distributed according to your wishes.</p>
        <h3>2. Trusts</h3>
        <p>Trusts can provide tax benefits and control over how assets are used by beneficiaries.</p>
        <h3>3. Power of Attorney</h3>
        <p>Designate someone to make financial and medical decisions if you become incapacitated.</p>`,
      category: "Financial Advisory",
      published_date: "2022-11-20",
      image_url:
        "https://images.unsplash.com/photo-1619485338066-068eb56fe258?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author_name: "CA Ananya Reddy",
      author_role: "Estate Planner",
      author_avatar: "/images/team/ananya-reddy.jpg",
      related_services: [
        { name: "Estate Planning", link: "/services/estate" },
        { name: "Tax Advisory", link: "/services/tax" },
      ],
    },
    {
      id: 8,
      slug: "digital-transformation",
      title: "Digital Transformation for Accounting Firms",
      excerpt:
        "How accounting firms can leverage technology to improve efficiency and client service.",
      content: `<p>The accounting profession is undergoing rapid digital transformation. Key areas to focus on:</p>
        <h3>1. Cloud Accounting</h3>
        <p>Moving to cloud-based systems enables real-time collaboration with clients and remote work.</p>
        <h3>2. Automation</h3>
        <p>Automate repetitive tasks like data entry and reconciliation to focus on value-added services.</p>
        <h3>3. Data Analytics</h3>
        <p>Leverage client data to provide deeper insights and predictive analysis.</p>`,
      category: "Business Consulting",
      published_date: "2022-10-10",
      image_url:
        "https://images.unsplash.com/photo-1614934273316-5bbe576f8567?q=80&w=1073&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
      author_name: "CA Rajiv Malhotra",
      author_role: "Technology Consultant",
      author_avatar: "/images/team/rajiv-malhotra.jpg",
      related_services: [
        { name: "Technology Consulting", link: "/services/technology" },
        { name: "Process Improvement", link: "/services/process" },
      ],
    },
  ],
  categories: [
    "Tax Planning",
    "Audit",
    "Legal Compliance",
    "Business Consulting",
    "Financial Advisory",
  ],
  recentPosts: [
    {
      id: 3,
      slug: "audit-preparation-tips",
      title: "5 Essential Tips for Smooth Financial Audits",
      excerpt:
        "Prepare your business for financial audits with these expert recommendations.",
      published_date: "2023-03-10",
      image_url:
        "https://plus.unsplash.com/premium_photo-1706559780094-648dbe2b2bd0?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 4,
      slug: "startup-accounting",
      title: "Accounting Best Practices for Startups",
      excerpt:
        "Key accounting practices that every startup should implement from day one.",
      published_date: "2023-02-28",
      image_url:
        "https://images.unsplash.com/photo-1707157284454-553ef0a4ed0d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      id: 5,
      slug: "investment-strategies",
      title: "Smart Investment Strategies for Long-Term Growth",
      excerpt:
        "Learn how to build a diversified investment portfolio for sustainable wealth creation.",
      published_date: "2023-01-15",
      image_url:
        "https://images.unsplash.com/photo-1653378972336-103e1ea62721?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
  ],
};

const BlogPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const queryParams = new URLSearchParams(location.search);
  const [isPaginating, setIsPaginating] = useState(false);

  // State for search and filters
  const [searchQuery, setSearchQuery] = useState(
    queryParams.get("search") || ""
  );
  const [selectedCategory, setSelectedCategory] = useState(
    queryParams.get("category") || ""
  );
  const [currentPage, setCurrentPage] = useState(
    parseInt(queryParams.get("page")) || 1
  );

  // Constants for pagination
  const postsPerPage = 4;
  const totalPages = Math.ceil(blogData.posts.length / postsPerPage);

  // Update URL when filters or page changes
  useEffect(() => {
    const params = new URLSearchParams();
    if (searchQuery) params.set("search", searchQuery);
    if (selectedCategory) params.set("category", selectedCategory);
    if (currentPage > 1) params.set("page", currentPage);

    navigate({ search: params.toString() }, { replace: true });
  }, [searchQuery, selectedCategory, currentPage, navigate]); // Add all dependencies
  // Filter posts based on search and category
  const filteredPosts = blogData.posts.filter((post) => {
    const matchesSearch =
      post.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
      post.content.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory =
      !selectedCategory || post.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const paginatedTotalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleSearch = (e) => {
    e.preventDefault();
    setCurrentPage(1); // Reset to first page when searching
  };

  const handleCategorySelect = (category) => {
    setSelectedCategory(category === selectedCategory ? "" : category);
    setCurrentPage(1); // Reset to first page when changing category
  };

  const handlePageChange = (page) => {
    if (page === currentPage) return;

    setIsPaginating(true);
    window.scrollTo({ top: 0, behavior: "auto" }); // Immediate scroll

    setTimeout(() => {
      setCurrentPage(page);
      setIsPaginating(false);
    }, 50);
  };
  // Generate page numbers for pagination
  const getPageNumbers = () => {
    const pages = [];
    const maxVisiblePages = 5;

    if (paginatedTotalPages <= maxVisiblePages) {
      for (let i = 1; i <= paginatedTotalPages; i++) {
        pages.push(i);
      }
    } else {
      let startPage = Math.max(
        1,
        currentPage - Math.floor(maxVisiblePages / 2)
      );
      let endPage = Math.min(
        paginatedTotalPages,
        startPage + maxVisiblePages - 1
      );

      if (endPage - startPage + 1 < maxVisiblePages) {
        startPage = endPage - maxVisiblePages + 1;
      }

      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) pages.push("...");
      }

      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      if (endPage < paginatedTotalPages) {
        if (endPage < paginatedTotalPages - 1) pages.push("...");
        pages.push(paginatedTotalPages);
      }
    }

    return pages;
  };

  return (
    <motion.div
      initial={isPaginating ? false : "hidden"}
      animate={isPaginating ? false : "show"}
      viewport={{ once: true }}
      className="mt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 mt-10"
    >
      {/* Page Header */}
      <motion.div
        variants={fadeIn("up", "spring", 0.1, 1)}
        className="text-center mb-16"
      >
        <h1 className="text-4xl font-bold text-gray-900 mb-4">
          Insights & Updates
        </h1>
        <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
        <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
          Expert articles on tax planning, financial strategies, and regulatory
          updates
        </p>
      </motion.div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <motion.div
          variants={fadeIn("right", "spring", 0.2, 1)}
          className="lg:w-2/3"
        >
          {/* Blog Grid */}
          {currentPosts.length === 0 ? (
            <motion.div
              variants={fadeIn("up", "spring", 0.2, 1)}
              className="text-center py-12"
            >
              <h3 className="text-xl font-medium text-gray-700 mb-2">
                No blog posts found
              </h3>
              <p className="text-gray-500">
                {selectedCategory
                  ? `No posts in the "${selectedCategory}" category`
                  : searchQuery
                  ? `No posts matching "${searchQuery}"`
                  : "No posts available"}
              </p>
              <button
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("");
                  setCurrentPage(1);
                }}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              >
                Clear filters
              </button>
            </motion.div>
          ) : (
            <>
              <motion.div
                variants={staggerContainer(0.1, 0.2)}
                className="grid md:grid-cols-2 gap-8"
              >
                {currentPosts.map((post, index) => (
                  <motion.article
                    key={post.id}
                    variants={fadeIn("up", "spring", index * 0.1, 1)}
                    className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow border border-gray-100"
                  >
                    <Link to={`/blog/${post.slug}`}>
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-6">
                        <span className="inline-block px-3 py-1 text-xs font-semibold text-blue-800 bg-blue-100 rounded-full mb-2">
                          {post.category}
                        </span>
                        <h2 className="text-xl font-bold text-gray-800 mb-2 hover:text-blue-600 transition-colors">
                          {post.title}
                        </h2>
                        <p className="text-gray-600 mb-4">{post.excerpt}</p>
                        <div className="flex justify-between items-center">
                          <span className="text-sm text-gray-500">
                            {new Date(post.published_date).toLocaleDateString(
                              "en-US",
                              {
                                year: "numeric",
                                month: "long",
                                day: "numeric",
                              }
                            )}
                          </span>
                          <span className="text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors">
                            Read More →
                          </span>
                        </div>
                      </div>
                    </Link>
                  </motion.article>
                ))}
              </motion.div>

              {/* Pagination */}
              {paginatedTotalPages > 1 && (
                <motion.div
                  variants={fadeIn("up", "spring", 0.4, 1)}
                  className="mt-12 flex justify-center"
                >
                  <nav className="flex items-center space-x-2">
                    <button
                      onClick={() => handlePageChange(currentPage - 1)}
                      disabled={currentPage === 1}
                      className={`px-3 py-1 border rounded-md flex items-center ${
                        currentPage === 1
                          ? "text-gray-400 border-gray-300 cursor-not-allowed"
                          : "text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      <FaChevronLeft className="mr-1" /> Previous
                    </button>

                    {getPageNumbers().map((page, index) => (
                      <React.Fragment key={index}>
                        {page === "..." ? (
                          <span className="px-3 py-1 text-gray-500">...</span>
                        ) : (
                          <button
                            onClick={() => handlePageChange(page)}
                            className={`px-3 py-1 rounded-md ${
                              currentPage === page
                                ? "bg-blue-600 text-white"
                                : "border border-gray-300 text-gray-700 hover:bg-gray-50"
                            }`}
                          >
                            {page}
                          </button>
                        )}
                      </React.Fragment>
                    ))}

                    <button
                      onClick={() => handlePageChange(currentPage + 1)}
                      disabled={currentPage === paginatedTotalPages}
                      className={`px-3 py-1 border rounded-md flex items-center ${
                        currentPage === paginatedTotalPages
                          ? "text-gray-400 border-gray-300 cursor-not-allowed"
                          : "text-gray-700 border-gray-300 hover:bg-gray-50"
                      }`}
                    >
                      Next <FaChevronRight className="ml-1" />
                    </button>
                  </nav>
                </motion.div>
              )}
            </>
          )}
        </motion.div>

        {/* Sidebar */}
        <motion.aside
          variants={fadeIn("left", "spring", 0.3, 1)}
          className="lg:w-1/3"
        >
          <div className="bg-blue-50 p-6 rounded-lg sticky top-8">
            {/* Search */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Search Articles
              </h3>
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search articles..."
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute right-3 top-2.5 text-gray-400 hover:text-blue-500"
                >
                  <FaSearch className="h-5 w-5" />
                </button>
              </form>
            </div>

            {/* Recent Posts */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Recent Posts
              </h3>
              <ul className="space-y-3">
                {blogData.recentPosts.map((post) => (
                  <li key={post.id}>
                    <Link
                      to={`/blog/${post.slug}`}
                      className="flex items-start gap-3 group"
                    >
                      <img
                        src={post.image_url}
                        alt={post.title}
                        className="w-16 h-16 object-cover rounded"
                      />
                      <div>
                        <h4 className="text-sm font-medium text-gray-800 group-hover:text-blue-600 transition-colors">
                          {post.title}
                        </h4>
                        <p className="text-xs text-gray-500">
                          {new Date(post.published_date).toLocaleDateString(
                            "en-US",
                            {
                              year: "numeric",
                              month: "short",
                              day: "numeric",
                            }
                          )}
                        </p>
                      </div>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Categories */}
            <div className="mb-8">
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Categories
              </h3>
              <ul className="space-y-2">
                <li>
                  <button
                    onClick={() => handleCategorySelect("")}
                    className={`flex items-center justify-between w-full text-left ${
                      !selectedCategory
                        ? "text-blue-600 font-medium"
                        : "text-gray-600 hover:text-blue-600"
                    } transition-colors`}
                  >
                    <span>All Categories</span>
                    <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                      {blogData.posts.length}
                    </span>
                  </button>
                </li>
                {blogData.categories.map((category, index) => {
                  const count = blogData.posts.filter(
                    (p) => p.category === category
                  ).length;
                  return (
                    <li key={index}>
                      <button
                        onClick={() => handleCategorySelect(category)}
                        className={`flex items-center justify-between w-full text-left ${
                          selectedCategory === category
                            ? "text-blue-600 font-medium"
                            : "text-gray-600 hover:text-blue-600"
                        } transition-colors`}
                      >
                        <span>{category}</span>
                        <span className="bg-gray-200 text-gray-600 text-xs px-2 py-1 rounded-full">
                          {count}
                        </span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            {/* Newsletter */}
            <div>
              <h3 className="text-lg font-semibold text-gray-800 mb-4">
                Subscribe to Updates
              </h3>
              <p className="text-sm text-gray-600 mb-3">
                Get the latest financial insights delivered to your inbox
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Your email address"
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-md transition-colors"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </motion.aside>
      </div>
    </motion.div>
  );
};

export default BlogPage;
