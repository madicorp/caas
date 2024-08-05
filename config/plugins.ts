export default ({env}) => ({
  seo: {
    enabled: true,
  },
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: 'localhost',
        port: 1025,
        ignoreTLS: true,
      },
    },
  },
  ezforms: {
    config:{
      enableFormName: true,
      captchaProvider: {
        name: 'recaptcha',
        config: {
          secretKey: env('RECAPTCHA_SECRET_KEY'),
          minimumScore: 0.5
        }
      },
      notificationProviders: [
        {
          name: 'email',
          enabled: true,
          config: {
            from: env('DEFAULT_FROM_EMAIL'),
          }
        },

      ]
    }
  },
});
