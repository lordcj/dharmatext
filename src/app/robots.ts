import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
    return {
        rules: {
            userAgent: '*',
            allow: '/',
        },
        sitemap: 'https://willowy-jelly-0cfbcb.netlify.app/sitemap.xml',
    };
}
