import Modal from "@/components/modal";
import NewTaskForm from "@/components/new-task-form";
import React from "react";

export default function NewTaskModal() {
  return (
    <Modal>
      <h1 className="text-2xl font-bold">New Task</h1>
      <NewTaskForm />
    </Modal>
  );
}
