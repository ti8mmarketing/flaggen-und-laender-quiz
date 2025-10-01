import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { useTheme } from "@/contexts/ThemeContext";

interface SettingsDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SettingsDialog = ({ open, onOpenChange }: SettingsDialogProps) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="text-2xl text-primary">Einstellungen</DialogTitle>
        </DialogHeader>
        <div className="flex items-center justify-between py-4">
          <Label htmlFor="dark-mode" className="text-lg">
            Dark Mode
          </Label>
          <Switch
            id="dark-mode"
            checked={theme === "dark"}
            onCheckedChange={toggleTheme}
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};
