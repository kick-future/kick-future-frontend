import Image from "next/image";
import React, { FC, useEffect, useRef, useState } from "react";
import { HiOutlineChevronDown, HiOutlineChevronUp } from "react-icons/hi";

import FlagEn from "images/en.svg";
import FlagRu from "images/ru.svg";

import styles from "./SwitcherLang.module.css";

const languages = [
    { code: "en", name: "English", id: 0 },
    { code: "ru", name: "Русский", id: 1 },
];

const SwitcherLang: FC = () => {
    const [lang, setLang] = useState(languages[0]);
    const [isOpen, setIsOpen] = useState(false);
    const switcherRef = useRef<HTMLDivElement>(null);

    const Icon = lang.code === "ru" ? FlagRu : FlagEn;

    useEffect(() => {
        document.addEventListener("click", handleOutsideClick);

        return () => document.removeEventListener("click", handleOutsideClick);
    }, []);

    const handleOutsideClick = (event: MouseEvent) => {
        const path = event.composedPath && event.composedPath();
        if (switcherRef?.current && !path.includes(switcherRef.current)) {
            setIsOpen(false);
        }
    };

    const onLangClick = (language: {
        code: string;
        name: string;
        id: number;
    }) => {
        setLang(language);
        setIsOpen(false);
    };

    return (
        <div ref={switcherRef} className={styles.switcherLang}>
            <button
                className={styles.switcherLangLabel}
                type="button"
                onClick={() => setIsOpen((prev) => !prev)}
            >
                <div className={styles.labelFlagText}>
                    <Image
                        className={styles.flag}
                        src={Icon.src}
                        width={25}
                        height={25}
                    />
                    <span className={styles.text}>{lang.name}</span>
                </div>
                {isOpen ? <HiOutlineChevronUp /> : <HiOutlineChevronDown />}
            </button>
            {isOpen && (
                <ul className={styles.modal}>
                    {languages.map((language) => (
                        <button
                            className={styles.modalItem}
                            type="button"
                            key={language.id}
                            onClick={() => onLangClick(language)}
                        >
                            <Image
                                className={styles.flag}
                                src={language.code === "ru" ? FlagRu : FlagEn}
                                width={25}
                                height={25}
                            />
                            <span className={styles.text}>{language.name}</span>
                        </button>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SwitcherLang;
