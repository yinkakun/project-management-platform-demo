import { useDraggable } from '@dnd-kit/core';
import { ITask } from '@/components/boards';
import Avvvatars from 'avvvatars-react';
import { BiPlay } from 'react-icons/bi';

interface TaskProps {
  task: Omit<ITask, 'status'>;
}

type Category = 'QA' | 'UI/UX' | 'Development' | 'Marketing' | 'Design';

const categoryToColor: Record<Category, string> = {
  QA: 'bg-[#F9A826]',
  'UI/UX': 'bg-blue-400',
  Development: 'bg-green-400',
  Marketing: 'bg-yellow-400',
  Design: 'bg-pink-400',
};

export const Task = ({ task }: TaskProps) => {
  const { title, id } = task;
  const { attributes, listeners, setNodeRef, transform } = useDraggable({
    id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="flex flex-col gap-4 rounded-md border border-white border-opacity-10 bg-[#27292D] p-3"
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
                className="flex items-center gap-2 whitespace-nowrap rounded-md bg-[#1A1C20] px-2 py-1 text-[10px] text-white"
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
    </div>
  );
};
