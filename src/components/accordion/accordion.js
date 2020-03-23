/** @jsx jsx */
import { jsx, css } from "@emotion/core"
// eslint-disable-next-line no-unused-vars
import React, { useState, useRef } from "react"
import FeatherIcon from "feather-icons-react"

import AccordionStyles from "./accordion.module.css"

function Accordion(props) {
  const [setActive, setActiveState] = useState("")
  const [setHeight, setHeightState] = useState("0px")
  const [setRotate, setRotateState] = useState("chevron-right")

  const content = useRef(null)

  function toggleAccordion() {
    setActiveState(setActive === "" ? "active" : "")
    setHeightState(
      setActive === "active" ? "0px" : `${content.current.scrollHeight}px`
    )
    setRotateState(setActive === "active" ? "chevron-right" : "chevron-down")
  }

  return (
    <div className={AccordionStyles.accordion__section}>
        <button
          aria-expanded={"" + setActive ? "true" : "false"}
          aria-controls={"sect" + props.id}
          id={"accordion" + props.id + "id"}
          className={`${AccordionStyles.accordion} ${setActive}`}
          onClick={toggleAccordion}
        >
          <h2 className={AccordionStyles.accordion__title}>{props.title}</h2>
          <FeatherIcon
            icon={`${setRotate}`}
            className="accordion__icon"
            css={css`
              float: right;
              width: 24px;
              height: 24px;
              stroke: #f29dd1;
              stroke-width: 2;
              stroke-linecap: round;
              stroke-linejoin: round;
              fill: none;

              top: 1px;
              position: relative;
            `}
          />
        </button>

      <div
        id={"sect" + props.id}
        aria-labelledby={"accordion" + props.id + "id"}
        ref={content}
        style={{ maxHeight: `${setHeight}` }}
        className={AccordionStyles.accordion__content}
      >
        <div
          id="sect1"
          className={AccordionStyles.accordion__text}
          dangerouslySetInnerHTML={{ __html: props.content }}
        />
      </div>
    </div>
  )
}

export default Accordion
