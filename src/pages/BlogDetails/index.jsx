import React from "react";
import { Helmet } from "react-helmet";
import Footer from "../../components/Footer";
import Header from "../../components/Header";
import { Categories } from "../../components/BlogsSection/Categories";
import { PostCard } from "../../components/BlogsSection/PostCard";
import { PostWidget } from "../../components/BlogsSection/PostWidget";

const posts = [
  {title: 'React Testing', excerpt: 'Learn react'},
  {title: 'react and tailwind', excerpt: 'learn tailwind with react'},
];

export default function BlogDetailsPage() {
  return (
    <>
      <Helmet>
        <title>Pushpit's Application2</title>
        <meta name="description" content="Web site created using create-react-app" />
      </Helmet>
    <div className="flex flex-col items-center justify-start w-full bg-white-A700">
      
      <Header className="flex flex-row md:flex-col justify-between items-center w-full p-6 md:gap-10 sm:p-5 bg-white-A700" />
      <div className = "grid grid-cols-1 lg:grid-cols-12 gap-12">
        <div className="lg:col-span-8 col-span-1">
          {posts.map((post) => (<PostCard post={post} key={post.title} />))}
        </div>
     
        <div className="lg:col-span-4 col-span-1">
          <div className="lg:sticky relative top-8">
            <PostWidget />
            <Categories />
          </div>
        </div>
      </div>

      <Footer className="flex justify-center items-center w-full mt-[100px] p-[33px] sm:p-5 bg-gray-600_01" />
    </div>
    </>
  );
}
