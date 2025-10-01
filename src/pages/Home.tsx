import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Settings } from "lucide-react";
import { useState } from "react";
import { SettingsDialog } from "@/components/SettingsDialog";

const Home = () => {
  const navigate = useNavigate();
  const [showSettings, setShowSettings] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-2xl text-center space-y-12">
        <h1 className="text-5xl md:text-6xl font-bold text-primary mb-8">
          Flaggen und Länder Quiz
        </h1>

        <div className="space-y-6">
          <Button
            size="lg"
            className="w-full max-w-md text-xl py-8"
            onClick={() => navigate("/avatar")}
          >
            Start
          </Button>

          <Button
            variant="outline"
            size="lg"
            className="w-full max-w-md text-xl py-8"
            onClick={() => setShowSettings(true)}
          >
            <Settings className="mr-2 h-6 w-6" />
            Einstellungen
          </Button>
        </div>
      </div>

      <SettingsDialog open={showSettings} onOpenChange={setShowSettings} />
    </div>
  );
};

export default Home;
