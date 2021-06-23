/* eslint-disable no-empty */
/* eslint-disable class-methods-use-this */
/* eslint-disable no-unused-vars */
export const checkCookies = () => {
  try {
    document.cookie = "SMART_STORAGE=TEST_COOKIE";
  } catch (error) {}
};

class Cookies {
  date = new Date();

  setItem<T>(key: string, value: T, expiringDay: number = 1) {
    this.date.setTime(this.date.getTime() + expiringDay * 24 * 60 * 60 * 1000);
    const expires = `expires=${this.date.toUTCString()}`;
    document.cookie = `${key}=${value};${expires};path=/`;
  }

  getItem(key: string) {
    const name = `${key}=`;
    const decodedCookie = decodeURIComponent(document.cookie);
  }
}
