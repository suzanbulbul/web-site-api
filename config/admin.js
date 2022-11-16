module.exports = ({ env }) => ({
  apiToken: {
    salt: env('API_TOKEN_SALT', 'a1a379bbcf4841b64fe051b00be2d36c'),
  },
  auth: {
    secret: env('ADMIN_JWT_SECRET', '39c92c09b9be114b036a248331688d8c'),
  },
});
