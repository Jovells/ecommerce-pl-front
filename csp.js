const policies = {
  'default-src': ["'self'", process.env.NEXT_PUBLIC_SERVER_URL],
  'script-src': [
    "'self'",
    "'unsafe-inline'",
    "'unsafe-eval'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://maps.googleapis.com',
    process.env.NEXT_PUBLIC_SERVER_URL,
  ],
  'child-src': ["'self'", process.env.NEXT_PUBLIC_SERVER_URL],
  'style-src': [
    "'self'",
    process.env.NEXT_PUBLIC_SERVER_URL,
    "'unsafe-inline'",
    'https://fonts.googleapis.com',
  ],
  'img-src': [
    "'self'",
    process.env.NEXT_PUBLIC_SERVER_URL,
    'https://*.stripe.com',
    'https://raw.githubusercontent.com',
  ],
  'font-src': ["'self'"],
  'frame-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://js.stripe.com',
    'https://hooks.stripe.com',
    process.env.NEXT_PUBLIC_SERVER_URL,
  ],
  'connect-src': [
    "'self'",
    'https://checkout.stripe.com',
    'https://api.stripe.com',
    'https://maps.googleapis.com',
    process.env.NEXT_PUBLIC_SERVER_URL,
  ],
}

module.exports = Object.entries(policies)
  .map(([key, value]) => {
    if (Array.isArray(value)) {
      return `${key} ${value.join(' ')}`
    }
    return ''
  })
  .join('; ')
