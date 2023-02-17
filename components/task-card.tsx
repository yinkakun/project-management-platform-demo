import { useDraggable } from '@dnd-kit/core';
import { ITask } from '@/components/boards';
import Avvvatars from 'avvvatars-react';
import { BiPlay } from 'react-icons/bi';
import type { Category } from '@/components/boards';
interface TaskProps {
  task: ITask;
}

const categoryToColor: Record<Category, string> = {
  QA: 'bg-[#F9A826]',
  'UI/UX': 'bg-blue-400',
  development: 'bg-green-400',
  marketing: 'bg-yellow-400',
  design: 'bg-pink-400',
};

export const Task = ({ task }: TaskProps) => {
  const { title, id } = task;
  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id,
      data: {
        task,
      },
    });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0) rotate(2deg)`,
      }
    : undefined;

  return (
    <div
      className={`flex flex-col gap-4 rounded-md border border-white border-opacity-10 bg-[#27292D] p-3 duration-100 ease-linear ${
        isDragging ? 'z-50 shadow-xl' : ''
      }`}
      ref={setNodeRef}
      style={style}
      {...listeners}
      {...attributes}
    >
      <div className="flex items-center justify-between gap-2">
        <div className="flex flex-wrap gap-1">
          {task.category.map((category) => {
            return (
              <div
                key={category}
                className="flex items-center gap-2 whitespace-nowrap rounded-md bg-[#1A1C20] px-2 py-1 text-[10px] capitalize text-white"
              >
                <div
                  className={`h-2 w-2 rounded-sm ${categoryToColor[category]}`}
                />
                <span>{category}</span>
              </div>
            );
          })}
        </div>
        <span className="whitespace-nowrap text-[10px]">{task.date}</span>
      </div>

      <div className="text-sm font-medium">{title}</div>
      <div className="flex items-center justify-between gap-2">
        <div className="ml-4 flex gap-2">
          {task.members.map((member) => {
            return (
              <div key={member} className="-ml-4">
                <Avvvatars value={member} size={24} />
              </div>
            );
          })}
        </div>
        <div className="flex items-center gap-2">
          <button className="rounded-full bg-white bg-opacity-10 p-1">
            <BiPlay size={16} />
          </button>
          <span className="text-[10px] text-opacity-80">00: 00</span>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="w-full grow rounded-full border border-white border-opacity-20" />
        <span className="whitespace-nowrap text-[10px] text-white text-opacity-60">
          Est: {task.estimate} {task.estimate === 1 ? 'hour' : 'hours'}
        </span>
      </div>
    </div>
  );
};
