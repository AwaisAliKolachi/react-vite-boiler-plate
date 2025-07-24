import { Suspense, lazy } from "react";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "@src/pages";
import ProtectedRoute from "./protectedRoute";

const Home = lazy(() => import("@src/pages/Home/Home"));
const About = lazy(() => import("@src/pages/About/About"));

export default function AppNavigation() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/about"
          element={
            <ProtectedRoute>
              <About />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<NotFound />} /> {/* 404 Route */}
      </Routes>
    </Suspense>
  );
}
