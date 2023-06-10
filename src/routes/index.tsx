import { Button } from "@mui/material"
import { Routes, Route, Navigate } from "react-router-dom"
import { useAppThemeContext } from "../shared/context/ThemeContext"

export const AppRoutes = () => {
  const {toggleTheme} = useAppThemeContext();
  return (
    <Routes>
      <Route path="/pagina-inicial" element={<Button variant="contained" color="primary" onClick={toggleTheme}> tste</Button>} />
      <Route path="*" element={<Navigate to="/pagina-inicial"/>} />
    </Routes>
  )
}