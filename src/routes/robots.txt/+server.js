export async function GET() {
  const robots = `# Allow all search engines to crawl the entire site
User-agent: *
Allow: /

# Sitemap location
Sitemap: https://nickfreelancer.vercel.app/sitemap.xml

# Crawl delay (optional - milliseconds between requests)
Crawl-delay: 1
`;

  return new Response(robots, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8',
      'Cache-Control': 'max-age=3600'
    }
  });
}
