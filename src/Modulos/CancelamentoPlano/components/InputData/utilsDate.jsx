export function generateCalendar(date) {
  const weeks = [];
  const jsDate = new Date(date + "T12:00:00");
  const currentMonth = jsDate.getMonth();

  const currentDay = new Date(jsDate.valueOf());
  currentDay.setDate(1);
  const dayOfWeek = currentDay.getDay();
  currentDay.setDate(1 - dayOfWeek);

  do {
    const week = [];
    for (let i = 0; i < 7; i++) {
      const monthStr = (currentDay.getMonth() + 1).toString().padStart(2, "0");
      const dayStr = currentDay.getDate().toString().padStart(2, "0");
      const isoDate = `${currentDay.getFullYear()}-${monthStr}-${dayStr}`;

      week.push({
        dayOfMonth: currentDay.getDate(),
        date: isoDate,
      });
      currentDay.setDate(currentDay.getDate() + 1);
    }
    weeks.push(week);
  } while (currentDay.getMonth() === currentMonth);

  return weeks;
}

export const DAYS_OF_WEEK = ["D", "S", "T", "Q", "Q", "S", "S"];

export const MONTHS = [
  { text: "Janeiro", value: "01" },
  { text: "Fevereiro", value: "02" },
  { text: "Março", value: "03" },
  { text: "Abril", value: "04" },
  { text: "Maio", value: "05" },
  { text: "Junho", value: "06" },
  { text: "Julho", value: "07" },
  { text: "Agosto", value: "08" },
  { text: "Setembro", value: "09" },
  { text: "Outubro", value: "10" },
  { text: "Novembro", value: "11" },
  { text: "Dezembro", value: "12" },
];

export const getYears = () => {
  let years = [];
  let year = new Date().getFullYear();

  for (let i = year - 32; i < year + 1; i++) {
    years.push(String(i));
  }
  return { years };
};

export const includeMaskDate = (value) => {
  return value
    .replace(/\D/g, "") // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{2})(\d)/, "$1/$2")
    .replace(/(\d{4})\d+?$/, "$1");
};
