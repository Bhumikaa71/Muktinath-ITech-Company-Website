import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { CiLocationOn } from "react-icons/ci";
import { IoCallOutline } from "react-icons/io5";
import { MdOutlineMarkEmailRead } from "react-icons/md";

function CustomerDialog({ children }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className="text-sm lg:text-2xl font-semibold text-center text-primarys">Customer Services
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 text-sm lg:text-lg text-gray-600">
          <div className="flex items-center gap-3 text-xs lg:text-xl">
            <IoCallOutline />
            <span>+977-01-4950097</span>
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-xl">
            <MdOutlineMarkEmailRead />
            <span>info@muktinathitech.com.np</span>
          </div>

          <div className="flex items-center gap-3 text-xs lg:text-xl">
            <CiLocationOn  />
            <span>Basundhara, Kathmandu</span>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
}

export default CustomerDialog;
