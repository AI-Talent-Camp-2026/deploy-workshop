import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Theme } from "@radix-ui/themes";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "../index.css";
import "./styles/App.css";
import { AppShell } from "../shared/ui/layout/AppShell";
import { HomePage } from "../pages/Home";
import { AboutPage } from "../pages/About";

const queryClient = new QueryClient();

export const App = () => {
  return (
    <Theme appearance="dark" accentColor="jade" radius="large" scaling="95%">
      <QueryClientProvider client={queryClient}>
        <BrowserRouter>
          <AppShell>
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/about" element={<AboutPage />} />
            </Routes>
          </AppShell>
        </BrowserRouter>
      </QueryClientProvider>
    </Theme>
  );
};
