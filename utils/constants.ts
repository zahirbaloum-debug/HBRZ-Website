// Form validation constants
export const VALIDATION_LIMITS = {
  FULL_NAME_MIN: 2,
  FULL_NAME_MAX: 100,
  ORGANIZATION_MIN: 2,
  ORGANIZATION_MAX: 100,
  MESSAGE_MIN: 10,
  MESSAGE_MAX: 2000,
} as const;

// Timing constants
export const TIMING = {
  SUCCESS_MESSAGE_DURATION: 5000, // 5 seconds
  EMAILJS_THROTTLE: 10000, // 10 seconds
} as const;

// Form field IDs for accessibility
export const FORM_FIELD_IDS = {
  FULL_NAME: 'fullName',
  ORGANIZATION: 'organization',
  EMAIL: 'email',
  INQUIRY_TYPE: 'inquiryType',
  MESSAGE: 'message',
} as const;
