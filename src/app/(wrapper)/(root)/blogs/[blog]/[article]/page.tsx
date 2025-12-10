"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";

import { useArticleStore } from "@/store/blog.store";
import { useRouter } from "next/navigation";
export default function BlogPage() {
  const { article, isLoading, isFetching } = useArticleStore();
  const router = useRouter();
  useEffect(() => {
    if (isLoading || isFetching) {
      // document.title = "Blog - Two Zero Club";
    } else if (article === undefined || article === null) {
      document.title = "404 Blog Not Found - Two Zero Club";
    } else {
      document.title = `${article.title} - Two Zero Club`;
    }
  }, [article, isLoading, isFetching]);

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-40 bg-gradient-to-b ">
        <div className="text-center">
          <div className="relative w-16 h-16 mx-auto mb-4">
            <div className="absolute inset-0 border-4 border-gray-200 rounded-full"></div>
            <div className="absolute inset-0 border-4 border-black border-t-transparent rounded-full animate-spin"></div>
          </div>
          <p className="text-muted-foreground font-medium font-area">
            Loading article...
          </p>
        </div>
      </div>
    );
  }
  if (!article) {
    return (
      <div className="flex flex-col justify-center items-center h-72 gap-6 px-4">
        <div className="text-center font-area">
          <h1 className="text-6xl font-bold  mb-4">404</h1>
          <h2 className="text-2xl font-semibold mb-2">Article Not Found</h2>
          <p className="text-muted-foreground text-lg mb-6">
            Sorry, we couldn't find the article you're looking for.
          </p>
          <Button onClick={() => router.push("/blogs")} className="">
            Go Back
          </Button>
        </div>
      </div>
    );
  }

  return (
    <>
      <section className=" max-w-[1800px] mt-5  px-4 lg:px-16  gap-5 m-auto ">
        <h4 className="font-area  text-[0.75rem] sm:text-[1rem] lg:text-[1.125rem] font-bold flex gap-2 cursor-pointer">
          <span onClick={() => router.push("/")}>Home</span>
          <span onClick={() => router.push("/blogs")}>• Blogs</span>
          <span>• {article.title}</span>
        </h4>
      </section>
      <section className="max-w-[1200px] w-full mx-auto px-4 py-2 sm:py-4 md:py-8 space-y-4 font-area font-semibold">
        <h1 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold">
          {article.title}
        </h1>

        <div
          className="blog-content font-area prose max-w-full"
          dangerouslySetInnerHTML={{ __html: article.contentHtml }}
        />
        <div className="text-muted-foreground flex justify-end  flex-col font-area">
          <span>By {article.authorV2?.name || "Unknown"}</span>
          <span>
            {new Date(article.publishedAt).toLocaleDateString("en-US", {
              day: "numeric",
              month: "long",
              year: "numeric",
            })}
          </span>
        </div>
      </section>
    </>
  );
}
