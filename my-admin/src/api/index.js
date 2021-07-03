import ajax from "./ajax.js";
const BASE = "";

export const reqLogin = (username,password) => ajax(BASE + "/login",{username,password},"POST");