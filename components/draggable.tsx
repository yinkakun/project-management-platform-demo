import React from 'react';
import { useDraggable } from '@dnd-kit/core';
import { ITask } from '@/components/boards';

interface DraggableProps {
  task: ITask;
  as?: React.ElementType;
  children: React.ReactNode;
}

export const DraggableTask = ({ children, as, task }: DraggableProps) => {
  const Element = as || 'div';

  const { attributes, listeners, setNodeRef, transform, isDragging } =
    useDraggable({
      id: task.id,
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
    <Element
      {...listeners}
      {...attributes}
      ref={setNodeRef}
      className={`${isDragging ? 'opacity-50' : ''}`}
    >
      {children}
    </Element>
  );
};
