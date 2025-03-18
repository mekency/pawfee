/**
 * @returns {import("next").MetadataRoute.Sitemap}
 */
export default function sitemap() {
    return [
        {
            url: 'http://localhost:3000/',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/OurPaws',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.3
        },
        {
            url: 'http://localhost:3000/Contact',
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8
        },
        {
            url: 'http://localhost:3000/Cat1',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5
        },
        {
            url: 'http://localhost:3000/Cat2',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5
        },
        {
            url: 'http://localhost:3000/Cat3',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5
        },
        {
            url: 'http://localhost:3000/Cat4',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5
        },
        {
            url: 'http://localhost:3000/Cat5',
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.5
        },
    ]
}