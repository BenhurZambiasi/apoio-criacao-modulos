import React, { useMemo, useState } from "react";
import { format, addDays } from "date-fns";
import { MenuItem, Select } from "@material-ui/core";
import InputMask from "react-input-mask";

import {
  DAYS_OF_WEEK,
  MONTHS,
  generateCalendar,
  getYears,
  includeMaskDate,
} from "./utilsDate";
import icone_calendario from "../../assets/icons/icone_calendario.svg";

import "../../style.css";

const Calendario = ({ setData, errorDate, setErrorDate }) => {
  const { years } = getYears();
  const [selectedDay, setSelectedDay] = useState(
    format(new Date(), "yyyy-MM-dd")
  );
  const [dataInput, setDataInput] = useState("");

  const [monthSelected, setMonthSelected] = useState(format(new Date(), "MM"));

  const [yearSelected, setYearSelected] = useState(format(new Date(), "yyyy"));

  const [showCalendar, setShowCalendar] = useState(false);

  const weeks = useMemo(() => {
    return generateCalendar(yearSelected + "-" + monthSelected + "-01");
  }, [monthSelected, yearSelected]);

  const handleDate = (value) => {
    setSelectedDay(value.date);
    setDataInput(format(addDays(new Date(value.date), 1), "dd/MM/yyyy"));
    setShowCalendar(false);
    setData(format(addDays(new Date(value.date), 1), "dd/MM/yyyy"));
  };

  const handleAlterMonth = (value) => {
    setMonthSelected(value);
  };

  const handleAlterYear = (value) => {
    setYearSelected(value);
  };

  const handleInputDate = (value) => {
    setDataInput(includeMaskDate(value));
    setData(includeMaskDate(value));
    if (value.length === 10) {
      let month = value.split("/")[1];
      let day = value.split("/")[0];
      let year = value.split("/")[2];
      let dateFormat = year + "/" + month + "/" + day;
      setMonthSelected(month);
      setYearSelected(year);
      setSelectedDay(format(new Date(dateFormat), "yyyy-MM-dd"));
    }
  };

  const showDopDownCalendar = () => {
    setShowCalendar(!showCalendar);
    setErrorDate("");
  };
  return (
    <div className="containert-calendar">
      <div className="cancelamento-plano-data-container">
        <div className="cancelamento-plano-data">
          <div
            className={`cancelamento-plano-data-container-input ${
              errorDate && "error"
            }`}>
            <InputMask
              placeholder="00/00/0000"
              maskChar=""
              mask="99/99/9999"
              value={dataInput}
              onChange={({ target }) =>
                handleInputDate(includeMaskDate(target.value))
              }
              onFocus={() => setErrorDate("")}
            />

            <div className="vertical-line" />
            <img
              src={icone_calendario}
              alt="calendario"
              onClick={showDopDownCalendar}
            />
          </div>
        </div>
      </div>
      {showCalendar && (
        <div className={`body_calendar ${errorDate && "error"}`}>
          <div className="body_calendar_header">
            <div className="body_calendar_select_month">
              <Select
                variant="outlined"
                className="select_month"
                margin="dense"
                value={monthSelected}
                onChange={({ target }) =>
                  handleAlterMonth(String(target.value))
                }
                MenuProps={{
                  anchorOrigin: {
                    vertical: "bottom",
                    horizontal: "left",
                  },
                  getContentAnchorEl: null,
                }}>
                {MONTHS.map((month) => {
                  return (
                    <MenuItem key={month.value} value={month.value}>
                      {month.text}
                    </MenuItem>
                  );
                })}
              </Select>
            </div>
            <Select
              variant="outlined"
              className="select_month"
              margin="dense"
              value={yearSelected}
              onChange={({ target }) => handleAlterYear(String(target.value))}
              MenuProps={{
                anchorOrigin: {
                  vertical: "bottom",
                  horizontal: "left",
                },
                getContentAnchorEl: null,
              }}>
              {years.map((month) => {
                return (
                  <MenuItem key={month} value={month}>
                    {month}
                  </MenuItem>
                );
              })}
            </Select>
          </div>
          <div className="body_calendar_content">
            {DAYS_OF_WEEK.map((day) => (
              <div key={day}>{day}</div>
            ))}
          </div>
          <div className="body_calendar_content_day">
            {weeks.map((week, ind) => {
              return (
                <div key={ind + 1} className="body_calendar_content_day_per">
                  {week.map((cell, index) => {
                    let monthCell = cell.date.split("-")[1];
                    return (
                      <div
                        key={index + 1}
                        onClick={() => {
                          if (monthCell === monthSelected) handleDate(cell);
                        }}
                        className={`${
                          monthCell !== monthSelected && "date-not-today"
                        } ${
                          selectedDay === cell.date &&
                          monthCell === monthSelected &&
                          "activeDay"
                        }`}>
                        {cell.dayOfMonth}
                      </div>
                    );
                  })}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Calendario;
