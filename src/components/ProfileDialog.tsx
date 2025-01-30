import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { useSession } from "@supabase/auth-helpers-react";

interface ProfileDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const ProfileDialog = ({ open, onOpenChange }: ProfileDialogProps) => {
  const session = useSession();

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Profile Information</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="space-y-2">
            <h4 className="font-medium">Email</h4>
            <p className="text-sm text-gray-500">{session?.user?.email}</p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};