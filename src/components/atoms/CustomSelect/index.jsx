import {useEffect, useMemo, useRef, useState} from "react";

import styles from "./CustomSelect.module.scss"
import {useClickOutside} from "@/hooks/useClickOutside.js";

const CustomSelect = (props) => {
  const {
    title,
    options,
    setParams,
    typeParams,
    valueParams
  } = props

  const [showOptions, setShowOptions] = useState(false)
  const [selectedOptionIndex, setSelectedOptionIndex] = useState(-1);
  const [realFocusedIndex, setRealFocusedIndex] = useState(-1)

  const selectedOption = useMemo(() => {
    if (valueParams === null || valueParams === "") return null;

    return options.find(opt => opt.split(" ")[0] === String(valueParams)) || null;
  }, [valueParams, options])

  const optionsRef = useRef([]);
  const selectRef = useRef(null)
  const clearRef = useRef(null);

  useClickOutside(selectRef, () => setShowOptions(false))

  useEffect(() => {
    if (selectedOption) {
      setSelectedOptionIndex(options.indexOf(selectedOption));
    } else {
      setSelectedOptionIndex(-1)
    }
  }, [selectedOption, options]);

  useEffect(() => {
    const handleFocus = (e) => {
      const index = optionsRef.current.findIndex(ref => ref === e.target);

      if (index !== -1) {
        setRealFocusedIndex(index)
        setSelectedOptionIndex(index)
      }
    }

    const handleBlur = () => {
      setRealFocusedIndex(-1);
    };

    document.addEventListener('focusin', handleFocus); // или focus
    document.addEventListener('focusout', handleBlur);

    return () => {
      document.removeEventListener('focusin', handleFocus);
      document.removeEventListener('focusout', handleBlur);
    };

  }, [options.length]);

  const handleSelect = (option) => {
    setShowOptions(false)
    setParams(typeParams, option ? option.split(" ")[0] : "")
  }

  const handleKeyOnSelect = (e) => {
    switch (e.key) {
      case "Enter":
      case " ": {
        if (showOptions && selectedOptionIndex > -1) {
          handleSelect(options[selectedOptionIndex], selectedOptionIndex)
          break
        }

        e.preventDefault()
        setShowOptions(prevState => !prevState)
        break;
      }

      case "Escape": {
        setShowOptions(false)
        break
      }
    }
  }

  const handleOptions = (e) => {
    e.stopPropagation()

    if (e.key === "ArrowDown" || e.key === "Tab" && !e.shiftKey) {
      e.preventDefault()

      const nextIndex = selectedOptionIndex < options.length
        ? selectedOptionIndex + 1
        : 0;

      setSelectedOptionIndex(nextIndex);

      setTimeout(() => {
        if (nextIndex === options.length) {
          clearRef.current?.focus()
        } else {
          optionsRef.current[nextIndex]?.focus()
        }
      }, 0)
    }

    if (e.key === "ArrowUp" || (e.key === "Tab" && e.shiftKey === true)) {
      e.preventDefault()

      const prevIndex = selectedOptionIndex > 0
        ? selectedOptionIndex - 1
        : options.length;

      setSelectedOptionIndex(prevIndex);

      setTimeout(() => {
        if (prevIndex === options.length) {
          clearRef.current?.focus()
        } else {
          optionsRef.current[prevIndex]?.focus()
        }
      }, 0)
    }

    if (e.key === "Enter") {
      if (selectedOptionIndex >= 0 && selectedOptionIndex < options.length) {
        handleSelect(options[selectedOptionIndex], selectedOptionIndex);
      } else if (selectedOptionIndex === options.length) {
        handleSelect(null, -1)
      }
    }

    if (e.key === "Escape") {
      setShowOptions(false)
      selectRef.current.focus()
    }
  }

  return (
    <div
      className={`${styles.select}`}
      role="combobox"
      aria-expanded={showOptions}
      aria-haspopup="listbox"
      aria-controls="options-list"
      tabIndex={0}
      onKeyDown={handleKeyOnSelect}
      aria-activedescendant={setSelectedOptionIndex > -1 ? `option-${selectedOptionIndex}` : undefined}
      ref={selectRef}
    >
      <div
        className={`${styles.select__box} ${selectedOptionIndex !== -1 ? styles.hasCheck : ""} ${showOptions ? styles.box__isExpanded : ""}`}
        onClick={() => setShowOptions(prev => !prev)}
        aria-label={title}
      >
        {title}
      </div>
      <div
        id="option-list"
        role="listbox"
        className={`${styles.options} ${showOptions ? styles.isExpanded : ""}`}
        onKeyDown={handleOptions}
      >
        {options.map((option, index) => (
          <div
            ref={el => optionsRef.current[index] = el}
            key={index}
            id={`option-${index}`}
            className={`${styles.option} ${option === selectedOption ? styles.checked : ""} ${index === realFocusedIndex ? styles.focused : ""}`}
            onClick={() => handleSelect(option, index)}
            role="option"
            aria-selected={index === selectedOptionIndex}
            tabIndex={showOptions ? 0 : -1}
          >
            <span className={`${styles.option__circle}`}></span>{option}
          </div>
        ))}
        <div
          className={`${styles.option__buttonClear}`}
          onClick={() => handleSelect(null, -1)}
          aria-selected={selectedOptionIndex === options.length}
          role="option"
          tabIndex={0}
          ref={clearRef}
        >
          Clear
        </div>
      </div>
    </div>
  );
};

export default CustomSelect;