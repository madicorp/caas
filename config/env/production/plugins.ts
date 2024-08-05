export default ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('AWS_SES_SMTP_ENDPOINT'),
        port:  env('AWS_SES_SMTP_PORT'),
        secure: true,
        auth: {
          user: env('AWS_SES_SMTP_USER'),
          pass:env('AWS_SES_SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('DEFAULT_FROM_EMAIL'),
        defaultReplyTo: env('DEFAULT_REPLY_TO_EMAIL'),
      },
    },
  },
  upload: {
    config: {
      provider: 'aws-s3',
      providerOptions: {
        s3Options: {
          accessKeyId: env('AWS_ACCESS_KEY_ID'),
          secretAccessKey: env('AWS_ACCESS_SECRET'),
          region: env('AWS_REGION'),
          params: {
            Bucket: env('AWS_BUCKET'),
          },
        },
      },
    },
  },
});
