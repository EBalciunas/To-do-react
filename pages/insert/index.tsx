import PageTemplate from "@/components/PageTemplate/PageTemplate";
import TaskForm from "@/components/TaskForm/TaskForm";
import React from "react";

const InsertPage = () => {
  return (
    <div>
      <PageTemplate>
        <TaskForm />
      </PageTemplate>
    </div>
  );
};

export default InsertPage;
