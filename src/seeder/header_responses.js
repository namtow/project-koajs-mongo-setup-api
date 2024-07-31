export default {
  group: 'HEADER',
  responses: [
    {
      name: 'HEADER_REQUIRED_ACCESS_TOKEN',
      code: '2300',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-token'
        },
        {
          language: 'EN',
          description: 'Missing header x-access-token in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_LOGIN_TYPE',
      code: '2301',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-login-type'
        },
        {
          language: 'EN',
          description: 'Missing header x-access-login-type in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_MOBILE_UNIQUE_ID',
      code: '2302',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-mobile-unique-id'
        },
        {
          language: 'EN',
          description: 'Missing x-access-mobile-unique-id in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_LOGIN_APPLICATION',
      code: '2303',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-login-application'
        },
        {
          language: 'EN',
          description: 'Missing x-access-login-application in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_DEVICE_MODEL',
      code: '2304',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-mobile-device-model'
        },
        {
          language: 'EN',
          description: 'Missing x-access-mobile-device-model in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_DEVICE_VERSION',
      code: '2305',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-mobile-device-version'
        },
        {
          language: 'EN',
          description: 'Missing x-access-mobile-device-version in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_APPLICATION_VERSION',
      code: '2306',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-mobile-application-version'
        },
        {
          language: 'EN',
          description: 'Missing x-access-mobile-application-version in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_PUBLIC_KEY',
      code: '2307',
      description: [
        {
          language: 'TH',
          description: 'ไม่ x-public-key'
        },
        {
          language: 'EN',
          description: 'Missing x-public-key in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_LOGIN_APP_FIX',
      code: '2308',
      description: [
        {
          language: 'TH',
          description: 'x-access-login-application จะต้องเป็นตามที่กำหนดใว้เท่านั้น'
        },
        {
          language: 'EN',
          description: 'Invalid x-access-login-application.'
        }
      ]
    },
    {
      name: 'INVALID_ACCESS_LOGIN_TYPE',
      code: '2309',
      description: [
        {
          language: 'TH',
          description: 'x-access-login-type จะต้องเป็น NORMAL, FACEBOOK, GOOGLE, LINE'
        },
        {
          language: 'EN',
          description: 'x-access-login-type must be NORMAL, FACEBOOK, GOOGLE, LINE'
        }
      ]
    },
    {
      name: 'INVALID_ACCESS_LOGIN_APPLICATION',
      code: '2310',
      description: [
        {
          language: 'TH',
          description: 'x-access-login-application จะต้องเป็น WEB, MOBILE'
        },
        {
          language: 'EN',
          description: 'x-access-login-application must be WEB, MOBILE'
        }
      ]
    },
    {
      name: 'HEADER_OVER_LENGTH',
      code: '2311',
      description: [
        {
          language: 'TH',
          description: 'เฮดเดอร์ขนาดเกินกำหนด'
        },
        {
          language: 'EN',
          description: 'Header is over length.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_ACCESS_USER_ROLE',
      code: '2303',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-access-reference-key'
        },
        {
          language: 'EN',
          description: 'Missing x-access-reference-key in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_FIREBASE_TOKEN',
      code: '2312',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-firebase-token'
        },
        {
          language: 'EN',
          description: 'Missing header x-firebase-token in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_PLATFORM',
      code: '2313',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ x-platform'
        },
        {
          language: 'EN',
          description: 'Missing header x-platform in request.'
        }
      ]
    },
    {
      name: 'HEADER_REQUIRED_IDEMPOTENT_KEY',
      code: '2314',
      description: [
        {
          language: 'TH',
          description: 'ไม่พบ idempotent-key'
        },
        {
          language: 'EN',
          description: 'Missing idempotent-key in request.'
        }
      ]
    }
  ]
}
