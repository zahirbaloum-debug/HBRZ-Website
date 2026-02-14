export const validateEmail = (email: string): boolean => {
  // Handle null/undefined inputs
  if (!email || typeof email !== 'string') {
    return false;
  }

  // Simple, permissive email validation
  // Ensures: at least one char before @, at least one char after @, at least one dot after @
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  // Additional checks for invalid patterns
  if (
    email.includes('..') ||
    email.startsWith('.') ||
    email.endsWith('.') ||
    email.includes('@.') ||
    email.includes('.@')
  ) {
    return false;
  }

  return emailRegex.test(email);
};

export const sanitizeInput = (input: string): string => {
  // Handle null/undefined inputs
  if (!input || typeof input !== 'string') {
    return '';
  }
  return input.replace(/<[^>]*>/g, '').trim();
};

/**
 * Validates that the trimmed length of input is within the specified range.
 * Note: This function trims the input before checking length. This is intentional
 * since sanitizeInput() is called before validation in form handlers, ensuring
 * consistency between validation and what gets submitted.
 */
export const validateLength = (
  input: string,
  min: number,
  max: number,
): boolean => {
  // Handle null/undefined inputs
  if (!input || typeof input !== 'string') {
    return false;
  }
  const length = input.trim().length;
  return length >= min && length <= max;
};
