"use client";

import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRouter, useSearchParams } from "next/navigation";
import { DateIcon } from "../../_assets/icon";

const InvoiceFilter = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const currentDay = searchParams.get("day");
  const currentMonth = searchParams.get("month");
  const currentYear = searchParams.get("year");

  const [selectedDate, setSelectedDate] = useState<Date | null>(
    currentDay && currentMonth && currentYear
      ? new Date(Number(currentYear), Number(currentMonth) - 1, Number(currentDay))
      : new Date()
  );

  const handleChange = (date: Date | null) => {
    setSelectedDate(date);

    if (date) {
      const day = date.getDate();
      const month = date.getMonth() + 1; // 0-indexed
      const year = date.getFullYear();

      // Mise à jour de l’URL → ex: /invoices?day=21&month=9&year=2025
      router.push(`?day=${day}&month=${month}&year=${year}`);
    }
  };

  return (
    <div className="relative w-fit">
      <DatePicker
        selected={selectedDate}
        onChange={handleChange}
        dateFormat="dd/MM/yyyy"
        customInput={
          <button className="flex items-center gap-2 border-2 border-bordure rounded-lg px-4 py-2 cursor-pointer hover:bg-slate-300 duration-300 text-black/50 dark:text-white">
            <p className="text-sm">
              {selectedDate
                ? selectedDate.toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "long",
                    year: "numeric",
                  })
                : "Sélectionner une date"}
            </p>
            <DateIcon/>
          </button>
        }
      />
    </div>
  );
};

export default InvoiceFilter;
