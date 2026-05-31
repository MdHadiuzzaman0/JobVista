"use client";
import { useState } from "react";
import { Modal, Button, Input } from "@heroui/react";
import { Rocket } from "@gravity-ui/icons";
import { FiSend, FiCheckCircle, FiDollarSign, FiInfo } from "react-icons/fi";
import confetti from "canvas-confetti";
import { handleApplyJob } from "@/lib/action";
import { router } from "better-auth/api";
import { useRouter } from "next/navigation";

function ApplyButton({job, email}) {
  const router = useRouter()
  const [expectedSalary, setExpectedSalary] = useState(0);
  const salary = Number(expectedSalary)
  const { title, category, type, salaryMin, salaryMax, currency, location, deadline, company, description, responsibilities, requirements, benefits } = job;
  const appliedData = { title, category, type, salaryMin, salaryMax, currency, location, deadline, company, description, responsibilities, requirements, benefits , email, salary }
   async function handleSubmit(){
       const result = await handleApplyJob(appliedData)
       console.log(result)
       if(result.success){
        router.push('/applied_jobs')
       }
   }

return(
  <Modal>
    <Button variant="secondary">Apply</Button>
    <Modal.Backdrop>
      <Modal.Container>
        <Modal.Dialog className="sm:max-w-[360px]">
          <Modal.CloseTrigger />
          <Modal.Header className="flex flex-col items-center pt-6">
            <Modal.Icon className="bg-purple-50 text-workable-dark-green p-3 rounded-full">
              <Rocket className="size-5 animate-pulse" />
            </Modal.Icon>
            <Modal.Heading className="font-heading font-black text-xl text-workable-text-dark mt-2">
              Join the Team
            </Modal.Heading>
          </Modal.Header>

          <Modal.Body className="gap-4">
            {/* কাস্টম ইনফো টেক্সট */}
            <div className="bg-purple-50/50 p-3 rounded-xl border border-purple-100 text-xs font-body text-purple-950 leading-relaxed">
              By submitting, your updated profile details and stats will be shared directly with the recruiter.
            </div>

            {/* স্যালারি ইনপুট ফিল্ড */}
            <Input
              label="Expected Monthly Salary"
              placeholder="e.g. 50,000"
              type="number"
              variant="bordered"
              className="font-heading font-bold text-sm text-workable-text-dark"
              onChange={(event) => setExpectedSalary(event.target.value)}
            />
          </Modal.Body>

          <Modal.Footer className="pb-6">
            <Button
              onPress={handleSubmit}
              className="w-full bg-workable-dark-green text-white font-heading font-black text-xs py-5 rounded-xl shadow-lg shadow-green-100 cursor-pointer"
            >
              Submit Application
            </Button>
          </Modal.Footer>
        </Modal.Dialog>
      </Modal.Container>
    </Modal.Backdrop>
  </Modal>
)
}

export default ApplyButton;