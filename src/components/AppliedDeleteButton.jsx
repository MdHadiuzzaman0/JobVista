'use client';
import { useState } from "react"; // Added useState for managing loading feedback
import { AlertDialog, Button, Modal } from "@heroui/react";
import { useRouter } from "next/navigation";
import { handleDeleteAppliedJob } from "@/lib/action";
import { toast } from "react-toastify";

const DeleteButton = ({ jobId, jobTitle }) => {
  const router = useRouter();
  const [isDeleting, setIsDeleting] = useState(false); // Tracks the server action execution

  async function onDelete() {
    setIsDeleting(true); // Turn loading indicator on immediately
    
    try {
      const result = await handleDeleteAppliedJob(jobId);
      if (result.success) {
        toast.success(`${jobTitle} is removed!`);
        router.refresh();
      } else {
        toast.error("Failed to remove job!");
      }
    } catch (error) {
      toast.error("An unexpected error occurred.");
    } finally {
      setIsDeleting(false); // Reset loading indicator when done
    }
  }

  return (
    <Modal>
      {/* Main Trigger Button */}
      <Button variant="danger" className="cursor-pointer font-sans font-medium rounded-xl">
        Delete
      </Button>
      
      <AlertDialog.Backdrop className="bg-black/40 backdrop-blur-sm">
        <AlertDialog.Container>
          <AlertDialog.Dialog className="sm:max-w-150 font-sans bg-white shadow-2xl rounded-2xl border border-gray-100">
            <AlertDialog.CloseTrigger className="text-gray-400 hover:text-gray-600 transition-colors" />
            
            <AlertDialog.Header className="p-6 border-b border-gray-50">
              <AlertDialog.Icon status="danger" />
              <AlertDialog.Heading className="text-xl font-bold tracking-tight text-gray-900 mt-2">
                Delete permanently?
              </AlertDialog.Heading>
            </AlertDialog.Header>
            
            <AlertDialog.Body className="p-6 text-sm leading-relaxed text-gray-500 font-medium">
              <p>
                This will permanently delete <strong>{jobTitle}</strong> and all of its
                data. This action cannot be undone.
              </p>
            </AlertDialog.Body>
            
            <AlertDialog.Footer className="flex items-center justify-end gap-3 pt-4 border-t border-gray-50 p-6">
              <Button 
                slot="close" 
                variant="tertiary" 
                className="px-5 py-2.5 text-sm font-bold tracking-wide rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all border border-gray-200/60 cursor-pointer"
                isDisabled={isDeleting} // Stop users from canceling midway
              >
                Cancel
              </Button>
              
              <Button 
                slot={isDeleting ? undefined : "close"} // Prevent closing the dialog instantly until processing finishes
                variant="danger" 
                onPress={onDelete}
                isDisabled={isDeleting} // Disable button to prevent duplicate clicks
                className="px-5 py-2.5 text-sm font-bold tracking-wide text-white bg-rose-600 hover:bg-rose-700 shadow-md shadow-rose-100 transition-all rounded-xl cursor-pointer"
              >
                {isDeleting ? "Deleting..." : "Delete"}
              </Button>
            </AlertDialog.Footer>
          </AlertDialog.Dialog>
        </AlertDialog.Container>
      </AlertDialog.Backdrop>
    </Modal>
  );
};

export default DeleteButton;