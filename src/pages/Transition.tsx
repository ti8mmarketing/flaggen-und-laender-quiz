import { useLocation, useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import newzealandImage from "@/assets/newzealand-intro.jpg";
import nepalImage from "@/assets/nepal-intro.jpg";
import guamImage from "@/assets/guam-intro.jpg";

const destinationData = {
  Neuseeland: {
    text: "Als nächstes Reisen wir nach Neuseeland, ein Inselstaat im Pazifik, berühmt für seine Natur und die Māori-Kultur.",
    image: newzealandImage,
  },
  Nepal: {
    text: "Nepal, wo die majestätischen Gipfel des Himalaya den Himmel berühren und jahrtausendealte Traditionen in den lebendigen Tempeln und Tälern weiterklingen.",
    image: nepalImage,
  },
  Guam: {
    text: "Guam, wo die Weite des Pazifiks auf uralte Chamorro-Kultur trifft und die Geschichte vergangener Kolonialreiche in den Korallenriffen widerscheint.",
    image: guamImage,
  },
};

const Transition = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const { destination } = location.state as { destination: string };
  const data = destinationData[destination as keyof typeof destinationData];

  return (
    <div className="min-h-screen flex flex-col bg-background px-4 py-8">
      <div className="w-full max-w-3xl mx-auto space-y-6">
        <div className="space-y-6">
          <div className="prose prose-lg max-w-none">
            <p className="text-primary text-lg leading-relaxed">
              {data.text}
            </p>
          </div>

          <div className="rounded-lg overflow-hidden">
            <img
              src={data.image}
              alt={destination}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        <div className="flex justify-center pt-4">
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
