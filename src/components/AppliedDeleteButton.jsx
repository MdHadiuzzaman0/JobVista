'use client';
import { AlertDialog, Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import { handleDeleteAppliedJob } from "@/lib/action";
import {toast} from "react-toastify";

const DeleteButton = ({ jobId, jobTitle }) => {
const router = useRouter();
async function onDelete() {
    const result = await handleDeleteAppliedJob(jobId);
    if (result.success) {
      toast.success(`${jobTitle} is removed!`);
      router.refresh()
    } else {
      toast.error("Failed to remove job!");
    }
  }

    return (
        <AlertDialog>
            <Button variant="danger">Delete</Button>
            <AlertDialog.Backdrop>
                <AlertDialog.Container>
                    <AlertDialog.Dialog className="sm:max-w-150">
                        <AlertDialog.CloseTrigger />
                        <AlertDialog.Header>
                            <AlertDialog.Icon status="danger" />
                            <AlertDialog.Heading>Delete project permanently?</AlertDialog.Heading>
                        </AlertDialog.Header>
                        <AlertDialog.Body>
                            <p>
                                This will permanently delete <strong>My Awesome Project</strong> and all of its
                                data. This action cannot be undone.
                            </p>
                        </AlertDialog.Body>
                        <AlertDialog.Footer>
                            <Button slot="close" variant="tertiary">
                                Cancel
                            </Button>
                            <Button slot="close" variant="danger" onPress={onDelete}>
                                Delete 
                            </Button>
                        </AlertDialog.Footer>
                    </AlertDialog.Dialog>
                </AlertDialog.Container>
            </AlertDialog.Backdrop>
        </AlertDialog>
    );
};

export default DeleteButton;