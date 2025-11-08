import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = 'https://www.gohiggler.com'

  // Get current date for lastModified
  const currentDate = new Date()

  return [
    {
      url: baseUrl,
      lastModified: currentDate,
      priority: 1,
    },
    {
      url: `${baseUrl}/contact`,
      lastModified: currentDate,
      priority: 0.8,
    },
    {
      url: `${baseUrl}/our-businesses/trade-commerce`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-businesses/tourism-hospitality`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-businesses/handicrafts-manufacturing`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-businesses/infrastructure`,
      lastModified: currentDate,
      priority: 0.9,
    },
    {
      url: `${baseUrl}/our-businesses/legal-services`,
      lastModified: currentDate,
      priority: 0.9,
    },
  ]
}
