import React from 'react';
import { Helmet } from 'react-helmet-async';

// You can have more props. In my case, these are enough.
function MetaTags ({ title = '', description = '', image = '', name = '' }) {
  return (
    <Helmet>
        { /* Standard metadata tags */ }
        <title>{title}</title>
        <link rel='canonical' href={window.location.href} />
        <meta name='description' content={description} />
        <meta name="robots" content="index, follow" /> {/* Added robots meta tag for SEO */}

        { /* Open Graph tags (OG) */ }
        <meta property="og:url" content={window.location.href} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="og:image:secure_url" content={image} />
        <meta property="og:image:type" content="image/jpeg" />
        <meta property="og:image:width" content="1200" /> {/* Adjusted width for better rendering */}
        <meta property="og:image:height" content="630" /> {/* Added height for Open Graph image */}
        <meta property="og:image:alt" content={`Image of ${title}`} />

        { /* Twitter tags */ }
        <meta name="twitter:creator" content={name} />
        <meta name="twitter:card" content="summary_large_image" /> {/* Changed to 'summary_large_image' for larger previews */}
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={description} />
        <meta name="twitter:image" content={image} /> {/* Added Twitter image tag */}
    </Helmet>
  );
}

export default MetaTags;
