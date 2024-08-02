import fs from 'fs';
import path from 'path';

// Define the file paths
const blogPostsPath = path.resolve('src/data/blogs/BlogPosts.js');
const projectsDataPath = path.resolve('src/data/ProjectsData.js');

// Function to generate sitemap
const generateSitemap = async () => {
  // Dynamically import the data
  const { default: blogPosts } = await import(blogPostsPath);
  const { default: projectsData } = await import(projectsDataPath);

  // Generate sitemap content
  let sitemap = `<?xml version="1.0" encoding="UTF-8"?>\n`;
  sitemap += `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n`;

  // Add entry for the base URL with highest priority
  sitemap += `  <url>\n`;
  sitemap += `    <loc>https://hardik-daim.vercel.app/</loc>\n`;
  sitemap += `    <priority>1.0</priority>\n`;
  sitemap += `  </url>\n`;

  // Add entries for blog posts
  blogPosts.forEach(post => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://hardik-daim.vercel.app/blog/${post.id}</loc>\n`;
    sitemap += `    <lastmod>${new Date(post.date).toISOString()}</lastmod>\n`;
    sitemap += `    <priority>0.8</priority>\n`;  // Adjust priority if needed
    sitemap += `  </url>\n`;
  });

  // Add entries for projects
  projectsData.forEach(project => {
    sitemap += `  <url>\n`;
    sitemap += `    <loc>https://hardik-daim.vercel.app/projects/${project.id}</loc>\n`;
    sitemap += `    <lastmod>${new Date().toISOString()}</lastmod>\n`;
    sitemap += `    <priority>0.8</priority>\n`;  // Adjust priority if needed
    sitemap += `  </url>\n`;
  });

  sitemap += `</urlset>\n`;

  // Write the sitemap to a file
  fs.writeFileSync(path.resolve('public/sitemap.xml'), sitemap, 'utf8');
};

// Execute the function
generateSitemap().catch(error => {
  console.error('Error generating sitemap:', error);
});
