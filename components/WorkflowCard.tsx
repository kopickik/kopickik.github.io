import React from 'react';

interface Workflow {
  id: number;
  name: string;
  status: string;
  last_run: string;
}

export const WorkflowCard = ({ workflow }: { workflow: Workflow }) => {
  return (
    <div
      className={`p-6 rounded-lg shadow-lg bg-white ${
        workflow.status === 'in_progress' ? 'border-yellow-500' : 'border-green-500'
      } border-l-4`}
    >
      <h2 className='text-xl font-semibold'>{workflow.name}</h2>
      <p>Status: {workflow.status}</p>
      <p>Last Run: {new Date(workflow.last_run).toLocaleString()}</p>
    </div>
  );
};
