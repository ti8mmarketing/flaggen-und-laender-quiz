import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Plane } from "lucide-react";

const Transition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination } = location.state as { destination: string };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background px-4">
      <div className="w-full max-w-2xl text-center space-y-12">
        <div className="space-y-6">
          <Plane className="w-24 h-24 mx-auto text-primary animate-pulse" />
          <h1 className="text-4xl md:text-5xl font-bold text-primary">
            Reise nach {destination}
          </h1>
        </div>

        <div className="flex justify-center">
          <Button
            size="lg"
            className="w-full max-w-md text-xl py-6"
            onClick={() => navigate("/question")}
          >
            Weiter
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Transition;
