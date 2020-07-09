import moment from "moment";

export const today = new Date();

export const currentDate =
  today.getFullYear() + "-" + (today.getMonth() + 1) + "-" + today.getDate();

export const isToday = ds => moment(ds).isSame(currentDate);
