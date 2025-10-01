import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "@/contexts/ThemeContext";
import { QuizProvider } from "@/contexts/QuizContext";
import Home from "./pages/Home";
import AvatarSelection from "./pages/AvatarSelection";
import Intro from "./pages/Intro";
import Question from "./pages/Question";
import Feedback from "./pages/Feedback";
import Transition from "./pages/Transition";
import Results from "./pages/Results";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <ThemeProvider>
      <QuizProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/avatar" element={<AvatarSelection />} />
              <Route path="/intro" element={<Intro />} />
              <Route path="/question" element={<Question />} />
              <Route path="/feedback" element={<Feedback />} />
              <Route path="/transition" element={<Transition />} />
              <Route path="/results" element={<Results />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QuizProvider>
    </ThemeProvider>
  </QueryClientProvider>
);

export default App;
