import BlogBanner from '@/components/blogs/BlogBanner'
import BlogCards from '@/components/blogs/BlogCards'
import React from 'react'
import WriterSlide from '@/components/blogs/WriterSlide'

export default function page() {
  return (
    <div>
      <BlogBanner />
      <BlogCards />
      <WriterSlide />
    </div>
  )
}
