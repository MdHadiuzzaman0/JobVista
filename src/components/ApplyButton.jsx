"use client";
import { useState, useEffect } from "react";
import { Button, Input, Label, Modal, Surface, TextField, FieldError} from "@heroui/react";
import { Rocket } from "@gravity-ui/icons";
import { FiSend, FiCheckCircle } from "react-icons/fi";
import confetti from "canvas-confetti";
import { handleApplyJob } from "@/lib/action";
import { useRouter } from "next/navigation";
import { toast } from "react-toastify";

function ApplyButton({ job, email, allAppliedJob }) {
  const router = useRouter();
  const { _id, title, category, type, salaryMin, salaryMax, currency, location, deadline, company, description, responsibilities, requirements, benefits } = job;

  const isAlreadyApplied = allAppliedJob?.some(singleJob => singleJob.jobId === _id);
  const [applyValue, setApplyValue] = useState(isAlreadyApplied);

  async function handleForm(formData) {
    const { salary } = Object.fromEntries(formData.entries());
    const appliedData = {
      title, category, type, salaryMin, salaryMax, currency, location, deadline, company, description, responsibilities, requirements, benefits,
      jobId: _id,
      email,
      salary: Number(salary)
    };

    const result = await handleApplyJob(appliedData);
    if (result.success) {
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 }
      });
      toast.success(`Successfully applied to ${title}`);
      setApplyValue(true);
      router.refresh();
    } else {
      toast.error("Something went wrong!");
    }
  }

  return (
    <Modal>
      {/* Main Trigger Button */}
      <Button variant={applyValue ? "flat" : "solid"} isDisabled={applyValue}
        className={`font-heading font-bold uppercase tracking-wider text-xs px-6 py-3.5 rounded-xl transition-all flex items-center justify-center gap-2 ${applyValue ? "bg-emerald-50 text-emerald-600 border border-emerald-100" : "bg-workable-dark-green text-white hover:bg-workable-dark-green/90 shadow-md shadow-green-100 cursor-pointer"}`} >
        {applyValue ? <FiCheckCircle size={16} /> : <FiSend size={14} />}
        <span className="capitalize">{applyValue ? "Applied" : "Apply"}</span>
      </Button>
      <Button variant="secondary" className="hidden"></Button>
      <Modal.Backdrop className="bg-black/40 backdrop-blur-sm">
        <Modal.Container placement="auto">
          {/* Modal Dialog with Premium Typography and Subtle Border Layout */}
          <Modal.Dialog className="w-6/12 mx-auto font-sans bg-white shadow-2xl rounded-2xl border border-gray-100">
            <Modal.CloseTrigger className="text-gray-400 hover:text-gray-600 transition-colors" />
            <Modal.Header className="flex flex-col gap-1 p-6 border-b border-gray-50">
              {/* Refactored Brand Colors for Icon Container */}
              <Modal.Icon className="bg-emerald-50 text-emerald-600 rounded-xl p-2.5">
                <Rocket className="size-5" />
              </Modal.Icon>
              <Modal.Heading className="text-xl font-bold tracking-tight text-gray-900 mt-2">Contact Us</Modal.Heading>
              <p className="mt-1 text-sm leading-relaxed text-gray-500 font-medium">
                Please specify your expected compensation package. Make sure your requirements align with the company's designated budget parameters.
              </p>
            </Modal.Header>
            <Modal.Body className="p-6">
              <Surface variant="default" className="bg-transparent border-none p-0 shadow-none">
                <form className="flex flex-col gap-5" action={handleForm}>
                  {/* Styled Input Fields and Labels */}
                  <TextField className="w-full flex flex-col gap-2" name="salary" type="number" variant="secondary">
                    <Label className="text-sm font-semibold tracking-wide text-gray-700">
                      Salary <span className="text-xs font-bold text-emerald-600 bg-emerald-50/70 px-2 py-0.5 rounded-md ml-1">Range: {salaryMin} - {salaryMax}</span>
                    </Label>
                    <Input 
                      className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:border-emerald-500 focus:ring-2 focus:ring-emerald-100 transition-all text-sm font-medium text-gray-800 placeholder-gray-400 outline-none"
                      placeholder="Enter your expected salary"
                      min={salaryMin} max={salaryMax} required 
                    />
                    {/* Error Theme Synchronization */}
                    <FieldError className="text-xs font-semibold text-rose-500 flex items-center gap-1 mt-1 animate-pulse" />
                  </TextField>

                  {/* Enhanced Modal Action Footer */}
                  <Modal.Footer className="flex items-center justify-end gap-3 pt-4 border-t border-gray-50">
                    <Button slot="close" variant="secondary" className="px-5 py-2.5 text-sm font-bold tracking-wide rounded-xl bg-gray-50 text-gray-600 hover:bg-gray-100 transition-all border border-gray-200/60 cursor-pointer">
                      Cancel
                    </Button>
                    <Button type='submit' slot="close" className="px-5 py-2.5 text-sm font-bold tracking-wide text-white bg-workable-dark-green hover:bg-workable-dark-green/90 shadow-md shadow-green-100 transition-all rounded-xl cursor-pointer">
                      Submit
                    </Button>
                  </Modal.Footer>
                </form>
              </Surface>
            </Modal.Body>
          </Modal.Dialog>
        </Modal.Container>
      </Modal.Backdrop>
    </Modal >
  );
}

export default ApplyButton;