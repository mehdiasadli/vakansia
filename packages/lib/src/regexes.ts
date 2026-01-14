export const SLUG_REGEX = /^[a-z0-9-]+$/i;
export const USERNAME_REGEX = /^[a-z0-9_]+$/i;

export const VOEN_REGEX = /^(\d{2})(\d{6})(\d)(\d)$/;

/**
 * RULES:
 *
 * - At least 1 uppercase letter
 * - At least 1 lowercase letter
 * - At least 1 number
 *
 * ** No need to check for length, it will be checked by the schema
 */
export const PASSWORD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
