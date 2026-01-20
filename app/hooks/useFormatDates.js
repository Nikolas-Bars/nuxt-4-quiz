import moment from "moment/min/moment-with-locales";

export default function useFormatDates() {
  const formatDate = (dateValue, format) => {
    return moment(dateValue, "DD.MM.YYYY HH:mm").locale("ru").format(format);
  };

  const dayOfWeek = (dateValue) => {
    const days = [
      "Понедельник",
      "Вторник",
      "Среда",
      "Четверг",
      "Пятница",
      "Суббота",
      "Воскресенье",
    ];

    if (dateValue === "") {
      return false;
    }
    const date = moment(dateValue, "DD.MM.YYYY HH:mm");
    return days[date.day()] === "Понедельник"
      ? "Воскресенье"
      : days[date.day() - 1];
  };

  const upcomingText = (dateValue, status) => {
    if (status !== 0) {
      return false;
    }
    if (!dateValue) {
      return false;
    }
    const format = "DD.MM.YYYY H:mm";
    const formatDate = moment(dateValue, format);
    const date = moment(formatDate, format);
    if (date.isSame(moment(), "day")) {
      return "Игра сегодня. Еще успеваете!";
    }
    const diff = date.diff(moment(), "days");

    if (diff > 3 || diff < 1) {
      return false;
    }

    if (diff === 1) {
      return "Игра завтра";
    }

    return `До игры осталось ${diff} дня`;
  };

  return {
    formatDate,
    dayOfWeek,
    upcomingText,
  };
}
