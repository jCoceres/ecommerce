import React from 'react'
import { Helmet } from 'react-helmet-async'

const SEO = ({ 
  title = "E-Commerce - Tu tienda online de confianza",
  description = "Encuentra los mejores productos en nuestra tienda online. Calidad garantizada y envío rápido.",
  keywords = "ecommerce, tienda online, productos, compras, ofertas",
  image = "/favicon.ico",
  url = window.location.href
}) => {
  const siteTitle = "E-Commerce"
  const fullTitle = title.includes(siteTitle) ? title : `${title} | ${siteTitle}`

  return (
    <Helmet>
      {/* Título */}
      <title>{fullTitle}</title>
      
      {/* Meta tags básicos */}
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
      <meta name="author" content="E-Commerce Team" />
      <meta name="robots" content="index, follow" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      
      {/* Open Graph para redes sociales */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={siteTitle} />
      
      {/* Twitter Cards */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />
      
      {/* Canonical URL */}
      <link rel="canonical" href={url} />
      
      {/* Favicon */}
      <link rel="icon" type="image/x-icon" href="/favicon.ico" />
      
      {/* Charset */}
      <meta charSet="utf-8" />
      
      {/* Idioma */}
      <html lang="es" />
    </Helmet>
  )
}

export default SEO 