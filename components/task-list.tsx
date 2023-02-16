import React from 'react';
import { Task } from './task-card';
import { ITask } from '@/components/boards';
import { useDroppable } from '@dnd-kit/core';
import { FiPlus, FiMoreHorizontal } from 'react-icons/fi';

interface BoardListProps {
  title: string;
  tasks: ITask[];
}

export const TaskList = ({ title, tasks }: BoardListProps) => {
  const { isOver, setNodeRef } = useDroppable({
    id: 'droppable',
  });

  return (
    <div className="flex h-full shrink-0 grow-0 basis-72 flex-col rounded-xl border border-white border-opacity-5 bg-[#181A1E]  py-4 px-4">
      <div className="flex items-center justify-between pb-2 text-sm">
        <div className="flex items-center gap-2">
          <h3 className="font-semibold">{title}</h3>
          <span className="text-xs text-white text-opacity-70">
            {tasks.length} {tasks.length === 1 ? 'task' : 'tasks'}
          </span>
        </div>
        <div className="flex items-center gap-2">
          <button className="text-white text-opacity-50 duration-200 hover:text-opacity-100">
            <FiPlus size={16} />
          </button>
          <button className="text-white text-opacity-50 duration-200 hover:text-opacity-100">
            <FiMoreHorizontal size={16} />
          </button>
        </div>
      </div>

      <div
        ref={setNodeRef}
        className={`borderr mt-4 ${
          isOver ? 'border-green-500' : 'border-white'
        }`}
      >
        <div className="flex flex-col gap-4">
          {tasks?.map((task) => {
            return <Task key={task.id} task={task} />;
          })}
        </div>
      </div>
    </div>
  );
};
