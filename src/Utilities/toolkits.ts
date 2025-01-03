import { useEffect, useState } from 'react';
import { Location, CloudflareImageVariant } from '../Redux/type';

function convertCurrency(am = 0) {
  return am.toLocaleString('vi-VN', {
    style: 'currency',
    currency: 'VND'
  });
}
function prettyDate(time: string | Date) {
  const date = new Date(time),
    diff = (Date.now() - date.getTime()) / 1000,
    day_diff = Math.floor(diff / 86400);
  // console.log(diff);
  if (isNaN(day_diff) || day_diff < 0 || day_diff >= 31) return;

  return (
    (day_diff == 0 &&
      ((diff < 60 && 'vừa xong') ||
        (diff < 120 && '1 phút') ||
        (diff < 3600 && Math.floor(diff / 60) + ' phút') ||
        (diff < 7200 && '1 tiếng') ||
        (diff < 86400 && Math.floor(diff / 3600) + ' tiếng'))) ||
    (day_diff == 1 && 'Hôm qua') ||
    (day_diff < 7 && day_diff + ' ngày') ||
    (day_diff < 31 && Math.ceil(day_diff / 7) + ' tuần')
  );
}

function convertDate(str: string | undefined, full: boolean = false, hour: boolean = false) {
  if (!str) return;
  if (full) {
    return new Date(str).toLocaleString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  }
  if (!hour) {
    return new Date(str).toLocaleDateString('vi-VN', {
      weekday: 'long',
      year: 'numeric',
      month: '2-digit',
      day: 'numeric'
    });
  }
  return new Date(str).toLocaleTimeString('vi-VN', {
    hour: '2-digit',
    minute: '2-digit'
  });
}

function InactiveCheck() {
  // return true;
  if (isSunday()) return true;
  if (!isHanhChinh()) return true;
  return false;
}

function isSunday() {
  return new Date().getDay() == 0;
}

function isHanhChinh() {
  const now = new Date();
  const hours = now.getHours();
  const minutes = now.getMinutes();
  const seconds = now.getSeconds();

  if ((hours > 7 || (hours === 7 && minutes >= 30)) && hours < 17) {
    return true;
  } else if (hours === 17 && minutes < 30 && seconds === 0) {
    return true;
  } else {
    return false;
  }
}

function getFirstDateOfMonth() {
  const currentDate = new Date();
  const firstDate = new Date(currentDate.getFullYear(), currentDate.getMonth(), 1);
  return firstDate;
}

function createMapURL({ lat, lng }: Location) {
  return `https://www.google.com/maps/search/?api=1&query=${lat},${lng}`;
}

function getISOTimeArray() {
  const now = new Date();
  const timeArray = [];
  timeArray.push(now.getFullYear());
  timeArray.push(now.getMonth());
  timeArray.push(now.getDate());
  timeArray.push(now.getHours());
  timeArray.push(now.getMinutes());
  timeArray.push(now.getSeconds());
  return timeArray;
}

function cloudinaryTransformURL(url: string, size = 160, dim = 'w', mode = 'scale') {
  const urlArray = url.split('/');
  let previewURL = urlArray.slice(0, 6).join('/');
  previewURL += `/c_${mode},${dim}_${size}/`;
  previewURL += urlArray.slice(6, 8).join('/');
  return previewURL;
}

function changeCloudflareVariant(url: string, variant: CloudflareImageVariant = 'thumbnail') {
  if (!url) return;
  const urlArray = url.split('/');
  if (urlArray.length > 6) return url;
  urlArray.splice(5, 1, variant);
  return urlArray.join('/');
}

const shortenString = (str: string, maxLength: number) => {
  if (str.length <= maxLength) {
    return str;
  } else {
    return str.substring(0, maxLength - 3) + '...';
  }
};

function useDebounce(value: string, delay: number) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);
    return () => {
      clearTimeout(handler);
    };
  }, [value, delay]);
  return debouncedValue;
}

function checkPasswordStrength(password: string) {
  let score = 0;

  // Length
  if (password.length < 8) {
    return score;
  } else {
    score++;
  }

  // Letters and numbers
  if (/\d/.test(password) && /[a-zA-Z]/.test(password)) {
    score++;
  }

  // Special characters
  if (/[!@#$%^&()<>]/.test(password)) {
    score++;
  }

  return score;
}

export {
  convertCurrency,
  prettyDate,
  InactiveCheck,
  isSunday,
  isHanhChinh,
  getFirstDateOfMonth,
  createMapURL,
  getISOTimeArray,
  cloudinaryTransformURL,
  shortenString,
  useDebounce,
  convertDate,
  checkPasswordStrength,
  changeCloudflareVariant
};
