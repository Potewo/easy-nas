import React from "react"
import Header from "../components/header"
import * as Styles from "../components/layout.css"

export default ({ children }) => (
  <>
  <Header className={Styles.header}/>
  {children}
  </>
)
