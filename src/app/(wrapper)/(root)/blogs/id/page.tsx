"use client";
import React from "react";
import Image from "next/image";

import { useArticleStore } from "@/store/blog.store";

export default function BlogPage() {
  const { article, isLoading, isFetching } = useArticleStore();

  if (isLoading || isFetching) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Loading article...</p>
      </div>
    );
  }

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen">
        <p className="text-gray-500 text-lg">Article not found.</p>
      </div>
    );
  }

  return (
    <section className="max-w-[1200px] w-full mx-auto px-4 py-8 space-y-4 font-[area] font-semibold">
      {article.image && (
        <div className="relative rounded overflow-hidden  font-[area] w-full h-[300px] sm:h-[420px] lg:h-[520px]">
          <Image
            src={article.image.url}
            alt={article.image.altText || article.title}
            fill
            className="object-cover "
          />
        </div>
      )}
      <h1 className="text-[1.6rem] sm:text-[2rem] lg:text-[2.5rem] font-extrabold text-gray-900">
        {article.title}
      </h1>

      <div
        className="blog-content !font-[area] prose max-w-full text-gray-700"
        dangerouslySetInnerHTML={{ __html: article.contentHtml }}
      />
      <div className="text-gray-500 flex justify-end  flex-col font-[area]">
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
  );
}
