import React from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const BlogDetails = ({ title, description, content,children,titlestyle,desstyle }) => {
  return (
    <Dialog>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>

      <DialogContent>
        <DialogHeader>
          <DialogTitle className={`${titlestyle}`}>{title}</DialogTitle>
          <DialogDescription className={`${desstyle}`}>{description}</DialogDescription>
        </DialogHeader>
        {content && <p className="py-4 text-sm">{content}</p>}
      </DialogContent>
    </Dialog>
  );
};

export default BlogDetails;
