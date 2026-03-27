import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface CalendarDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

const CalendarDialog = ({ open, onOpenChange }: CalendarDialogProps) => {
  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-3xl w-[95vw] h-[80vh] p-0 overflow-hidden">
        <DialogHeader className="px-6 pt-6 pb-2">
          <DialogTitle className="font-heading text-xl tracking-wide">
            Book a Call with Harsh Tambade
          </DialogTitle>
          <DialogDescription className="text-sm text-muted-foreground">
            Select a convenient time slot below to schedule your consultation.
          </DialogDescription>
        </DialogHeader>
        <div className="flex-1 px-6 pb-6 h-full min-h-0">
          <iframe
            src="https://calendar.google.com/calendar/appointments/schedules/AcZssZ0AX_L2bFXqdvEqYfczKheIWDgu7w71VrweGPr5nS50060BvUOPkRb3e2LlGJ4V-RA7KuVKabsn?gv=true"
            style={{ border: 0 }}
            width="100%"
            height="100%"
            frameBorder="0"
            title="Google Calendar Appointment Scheduling"
            className="rounded-lg min-h-[500px] h-[calc(80vh-120px)]"
          />
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CalendarDialog;