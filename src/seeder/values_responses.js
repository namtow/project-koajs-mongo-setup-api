export default {
  group: 'VALUES',
  responses: [
    {
      name: 'INVALID_ORDER_TYPE',
      code: '4100',
      description: [
        {
          language: 'TH',
          description: 'ประเภทของคำสั่งซื้อจะต้องเป็น BUY หรือ SELL'
        },
        {
          language: 'EN',
          description: 'Order type must be BUY or SELL.'
        }
      ]
    },
    {
      name: 'INVALID_ORDER_MODE',
      code: '4101',
      description: [
        {
          language: 'TH',
          description: 'ประเภทของคำสั่งซื้อจะต้องเป็น LIMIT หรือ MARKET'
        },
        {
          language: 'EN',
          description: 'Order mode must be LIMIT or MARKET.'
        }
      ]
    },
    {
      name: 'INVALID_STATUS',
      code: '4102',
      description: [
        {
          language: 'TH',
          description: 'สถานะจะต้องเป็น ACTIVE หรือ INACTIVE'
        },
        {
          language: 'EN',
          description: 'Status must be ACTIVE or INACTIVE.'
        }
      ]
    },
    {
      name: 'INVALID_TRANSACTION_STATUS',
      code: '4103',
      description: [
        {
          language: 'TH',
          description: 'สถานะจะต้องเป็น SUCCESS หรือ FAILED'
        },
        {
          language: 'EN',
          description: 'Status must be SUCCESS or FAILED.'
        }
      ]
    },
    {
      name: 'INVALID_MARITAL_STATUS',
      code: '4104',
      description: [
        {
          language: 'TH',
          description: 'สถานะความสัมพันธ์จะต้องเป็น SINGLE, MARRIED, WIDOWED, DIVORCED หรือ SEPARATED'
        },
        {
          language: 'EN',
          description: 'Marital status must be SINGLE, MARRIED, WIDOWED, DIVORCED or SEPARATED.'
        }
      ]
    },
    {
      name: 'INVALID_CHILLPAY_PAYMENT_GATEWAY',
      code: '4105',
      description: [
        {
          language: 'TH',
          description: 'Chillpay Bank Code ไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Invalid Chillpay bank code.'
        }
      ]
    },
    {
      name: 'INVALID_GENDER',
      code: '4106',
      description: [
        {
          language: 'TH',
          description: 'เพศจะต้องเป็น MALE, FEMALE'
        },
        {
          language: 'EN',
          description: 'Gender must be MALE, FEMALE.'
        }
      ]
    },
    {
      name: 'INVALID_VALUE',
      code: '4107',
      description: [
        {
          language: 'TH',
          description: 'ค่าบางอย่างไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Invalid value.'
        }
      ]
    },
    {
      name: 'VALUE_MUST_NOT_EXCEED',
      code: '4108',
      description: [
        {
          language: 'TH',
          description: 'ค่าจะต้องไม่เกินกว่าที่กำหนด'
        },
        {
          language: 'EN',
          description: 'Value must not exceed the limit.'
        }
      ]
    },
    {
      name: 'INVALID_MEMO_TYPE',
      code: '4109',
      description: [
        {
          language: 'TH',
          description: 'Memo Type ไม่ถูกต้อง'
        },
        {
          language: 'EN',
          description: 'Invalid memo type.'
        }
      ]
    },
    {
      name: 'INVALID_ANNOUNCEMENT_TYPE',
      code: '4110',
      description: [
        {
          language: 'TH',
          description: 'ประเภทของคำสั่งประกาศจะต้องเป็น IMAGE หรือ VIDEO'
        },
        {
          language: 'EN',
          description: 'Announcement type must be IMAGE or VIDEO.'
        }
      ]
    },
    {
      name: 'INVALID_GIFT_VOUCHER_TYPE',
      code: '4111',
      description: [
        {
          language: 'TH',
          description: 'ประเภทของคำสั่งประกาศจะต้องเป็น IPHONE12 หรือ MACBOOKPRO13INCH2020'
        },
        {
          language: 'EN',
          description: 'Announcement type must be IPHONE12 or MACBOOKPRO13INCH2020.'
        }
      ]
    }
  ]
}
