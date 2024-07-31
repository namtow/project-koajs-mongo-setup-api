export default {
  group: 'AUTH',
  responses: [
    {
      name: 'BASIC_AUTH_FAIL',
      code: '9001',
      description: [
        {
          language: 'TH',
          description: 'เบสิค-ออเท็น ล้มเหลว'
        },
        {
          language: 'EN',
          description: 'Basic-auth is failed.'
        }
      ]
    },
    {
      name: 'AUTH_LOGIN_FAILURE',
      code: '9002',
      description: [
        {
          language: 'TH',
          description: 'ชื่อผู้ใช้หรือรหัสผ่านผิด'
        },
        {
          language: 'EN',
          description: 'Username or Password is incorrect.'
        }
      ]
    },
    {
      name: 'ACCESS_TOKEN_IS_NOT_TRUE',
      code: '9003',
      description: [
        {
          language: 'TH',
          description: 'โทเคนไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Access token is not true.'
        }
      ]
    },
    {
      name: 'ACCESS_PAGE_IS_DENIED',
      code: '9004',
      description: [
        {
          language: 'TH',
          description: 'ไม่มีสิทธิ์เข้าถึงหน้านี้'
        },
        {
          language: 'EN',
          description: 'Access denied for this page.'
        }
      ]
    },
    {
      name: 'TWOFACTOR_REQUIRED',
      code: '9005',
      description: [
        {
          language: 'TH',
          description: 'กรุณาระบุการยืนยันตัวแบบสองขั้นตอน'
        },
        {
          language: 'EN',
          description: 'Two-Factor Authentication is required.'
        }
      ]
    },
    {
      name: 'TWOFACTOR_IS_NOT_VALID',
      code: '9006',
      description: [
        {
          language: 'TH',
          description: 'การยืนยันตัวตนขั้นที่สองไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Two-factor is not valid.'
        }
      ]
    },
    {
      name: 'TOKEN_EXPIRED',
      code: '9007',
      description: [
        {
          language: 'TH',
          description: 'โทเคนหมดอายุ'
        },
        {
          language: 'EN',
          description: 'Token is expired.'
        }
      ]
    },
    {
      name: 'INVALID_TOKEN',
      code: '9008',
      description: [
        {
          language: 'TH',
          description: 'โทเคนไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Invalid token.'
        }
      ]
    },
    {
      name: 'NO_KYC_VERIFIED',
      code: '9009',
      description: [
        {
          language: 'TH',
          description: 'กรุณายืนยันตัวตน'
        },
        {
          language: 'EN',
          description: 'Please verify your KYC.'
        }
      ]
    },
    {
      name: 'INVALID_FIREBASE_AUTH_TOKEN',
      code: '9010',
      description: [
        {
          language: 'TH',
          description: 'Firebase authentication token ไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Invalid Firebase authentication token.'
        }
      ]
    },
    {
      name: 'INVALID_IDEMPOTENT_KEY',
      code: '9011',
      description: [
        {
          language: 'TH',
          description: 'Idempotent key ไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Invalid Idempotent key.'
        }
      ]
    },
    {
      name: 'DUPLICATE_IDEMPOTENT_KEY',
      code: '9012',
      description: [
        {
          language: 'TH',
          description: 'Idempotent key ถูกใช้ไปแล้ว'
        },
        {
          language: 'EN',
          description: 'Duplicate Idempotent key.'
        }
      ]
    }
  ]
}
