import Link from "next/link";
import { useRouter } from "next/router";
import React, { FC, useState } from "react";
import ClickOutside from "@lib/click-outside";
import { AngleUpIcon } from "@components/Icons";
import { TWI18nWidgetRoot, TWI18nWidgetButton, TWI18nWidgetDropDown, TWI18nWidgetCloseButton, TWI18nWidgetItem } from "./i18nwidget-tw-styled";

interface LOCALE_DATA {
  name: string;
  img: {
    filename: string;
    alt: string;
  };
}

const LOCALES_MAP: Record<string, LOCALE_DATA> = {
  es: {
    name: "Español",
    img: {
      filename: "flag-es-co.svg",
      alt: "Bandera Colombiana",
    },
  },
  "en-US": {
    name: "English",
    img: {
      filename: "flag-en-us.svg",
      alt: "US Flag",
    },
  },
};

const I18nWidget: FC = () => {
  const [display, setDisplay] = useState(false);
  const { locale, locales, defaultLocale = "en-US", asPath: currentPath } = useRouter();

  const options = locales?.filter((val) => val !== locale);
  const currentLocale = locale || defaultLocale;

  return (
    <ClickOutside active={display} onClick={() => setDisplay(false)}>
      <TWI18nWidgetRoot>
        <div className="flex items-center relative" onClick={() => setDisplay(!display)}>
          <TWI18nWidgetButton arial-label="Language selector">
            <img width="20" height="20" className="block mr-2 w-5" src={`/${LOCALES_MAP[currentLocale].img.filename}`} alt={LOCALES_MAP[currentLocale].img.alt} />
            {options && (
              <span className="cursor-pointer">
                <AngleUpIcon className={`icon ${display && "active"}`} />
              </span>
            )}
          </TWI18nWidgetButton>
        </div>
        <div className="absolute top-0 right-0">
          {options?.length && display ? (
            <TWI18nWidgetDropDown>
              <div className="flex flex-row justify-end px-6">
                <TWI18nWidgetCloseButton onClick={() => setDisplay(false)} aria-label="Close panel">
                  <AngleUpIcon className="h-6 w-6" />
                </TWI18nWidgetCloseButton>
              </div>
              <ul>
                {options.map((locale) => (
                  <li key={locale}>
                    <Link href={currentPath} locale={locale}>
                      <TWI18nWidgetItem onClick={() => setDisplay(false)}>{LOCALES_MAP[locale].name}</TWI18nWidgetItem>
                    </Link>
                  </li>
                ))}
              </ul>
            </TWI18nWidgetDropDown>
          ) : null}
        </div>
      </TWI18nWidgetRoot>
      <style>{`
        .icon {
          transition: transform 0.2s ease;
        }
        .icon.active {
          transform: rotate(180deg);
        }
      `}</style>
    </ClickOutside>
  );
};

export default I18nWidget;
