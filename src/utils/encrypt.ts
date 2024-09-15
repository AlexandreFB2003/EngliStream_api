import CryptoJS from "crypto-js";

/**
 * Decrypts an encrypted ID using AES and a secret key.
 *
 * @param {string} encryptedId - The URL-encoded encrypted ID.
 * @param {string} secretKey - The secret key used for decryption.
 * @returns {string} - The decrypted ID.
 * @throws Will throw an error if decryption fails.
 */
export const decryptId = (encryptedId: string, secretKey: string): string => {
  try {
    const decodedId = decodeURIComponent(encryptedId);

    const bytes = CryptoJS.AES.decrypt(decodedId, secretKey);

    const decryptedId = bytes.toString(CryptoJS.enc.Utf8);

    return decryptedId;
  } catch (error) {
    console.error("Error decrypting ID:", error);
    throw new Error("Failed to decrypt ID");
  }
};
/**
 * Encrypts a password using AES and a secret key.
 *
 * @param {string} password - The plain text password to encrypt.
 * @param {string} secretKey - The secret key used for encryption.
 * @returns {string} - The encrypted password.
 */
export const encryptPassword = (
  password: string,
  secretKey: string
): string => {
  try {
    // Encrypt the password
    const encrypted = CryptoJS.AES.encrypt(password, secretKey).toString();

    // Return the encrypted password
    return encrypted;
  } catch (error) {
    // Handle errors (e.g., encryption failures)
    console.error("Error encrypting password:", error);
    throw new Error("Failed to encrypt password");
  }
};
