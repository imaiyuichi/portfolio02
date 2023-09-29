import { BREAKPOINT } from "../variables";

const ua = navigator.userAgent.toLowerCase();

let tab = false;
let ipad = false;
let sp = false;
let windows = false;
let safari = false;
let chrome = false;

sp =
  (ua.includes("iphone") ||
    (ua.includes("android") && ua.includes("mobile"))) &&
  window.innerWidth < BREAKPOINT;
ipad =
  ua.includes("ipad") || (ua.includes("macintosh") && "ontouchend" in document);
tab = !sp && (ipad || ua.includes("android"));

windows = ua.includes("windows nt");

if (ua.includes("chrome")) chrome = true;
else if (ua.includes("safari")) safari = true;

export const isSp = sp;
export const isTab = tab;
export const isWindows = windows;
export const isChrome = chrome;
export const isSafari = safari;
