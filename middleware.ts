import { next } from '@vercel/functions';

// Alte WordPress-Query-URLs (z. B. /?p=705, /?feed=rss2) per 301 auf die
// saubere Startseite umleiten. vercel.json-Redirects hängen die Original-Query
// wieder an das Ziel an (Schleife), daher hier per Middleware ohne Query.
export const config = {
  matcher: '/',
};

const WP_QUERY_KEYS = ['p', 'feed', 'paged', 'cat', 'page_id', 'm', 'attachment_id'];

export default function middleware(request: Request) {
  const url = new URL(request.url);

  if (WP_QUERY_KEYS.some((key) => url.searchParams.has(key))) {
    return new Response(null, {
      status: 301,
      headers: { Location: `${url.origin}/` },
    });
  }

  return next();
}
