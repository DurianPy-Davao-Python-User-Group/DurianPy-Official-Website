import { HeadContent, Scripts, createRootRoute, Outlet } from '@tanstack/react-router'
import { TanStackRouterDevtoolsPanel } from '@tanstack/react-router-devtools'
import { TanStackDevtools } from '@tanstack/react-devtools'
import Navbar from '@/components/navs/public/Navbar'
import { ReactLenis } from 'lenis/react'
import { Footer } from '@/components/home/Footer'
import { applySecurityHeaders } from '@/middleware/applyHeaders'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  beforeLoad: async () => {
    await applySecurityHeaders();
  },
  head: () => {
    const baseUrl = import.meta.env.VITE_SITE_URL || 'https://www.durianpy.org'
    const title = 'DurianPy'
    const description = "Accelerating Davao's Tech Growth with Python"
    return {
      meta: [
        {
          charSet: 'utf-8',
        },
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1',
        },
        {
          title: title,
        },
        {
          name: 'description',
          content: description,
        },
        {
          name: 'keywords',
          content: 'Python Davao, DurianPy, Davao Python User Group, DurianPy - Davao Python User Group',
        },
        {
          property: 'og:type',
          content: 'website',
        },
        {
          property: 'og:url',
          content: baseUrl,
        },
        {
          property: 'og:title',
          content: title,
        },
        {
          property: 'og:description',
          content: description,
        },
        {
          name: 'twitter:card',
          content: 'summary_large_image',
        },
        {
          name: 'twitter:title',
          content: title,
        },
        {
          name: 'twitter:description',
          content: description,
        },
        {
          name: 'fb:app_id',
          content: import.meta.env.VITE_FB_APP_ID || '',
        },
      ],
      links: [
        {
          rel: 'stylesheet',
          href: appCss,
        },
        {
          rel: 'canonical',
          href: baseUrl,
        },
      ],
    }
  },
  shellComponent: RootDocument,
  component: RootComponent,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body className="antialiased bg-dark-green">
        {children}
        <TanStackDevtools
          config={{
            position: 'bottom-right',
          }}
          plugins={[
            {
              name: 'Tanstack Router',
              render: <TanStackRouterDevtoolsPanel />,
            },
          ]}
        />
        <Scripts />
      </body>
    </html>
  )
}

function RootComponent() {
  return (
    <>
      <Navbar />
      <ReactLenis root>
        <Outlet />
      </ReactLenis>
      <Footer />
    </>
  )
}
