import React from 'react';
import { DndContext } from '@dnd-kit/core';
import { TaskList } from '@/components/task-list';

export interface ITask {
  id: number;
  title: string;
  date: string;
  members: string[];
  estimate: number;
  category: Array<'QA' | 'UI/UX' | 'Development' | 'Marketing' | 'Design'>;
  status: 'backlog' | 'todo' | 'doing' | 'review' | 'done';
}

const TASKS: ITask[] = [
  {
    id: 1,
    title: 'Animation for the new website',
    date: '3 June',
    members: ['Will Wheaton', 'Diane Keaton'],
    estimate: 1,
    category: ['Development', 'UI/UX'],
    status: 'backlog',
  },
  {
    id: 2,
    title: 'Product photoshoot for new collection',
    date: '10 March',
    members: ['Cindy Crawford', 'David Beckham', 'Gigi Hadid'],
    estimate: 2,
    category: ['Design'],
    status: 'done',
  },
  {
    id: 3,
    title: 'Social media ad campaign for new app',
    date: '22 April',
    members: ['Kim Kardashian', 'Ryan Reynolds'],
    estimate: 3,
    category: ['Marketing', 'Design'],
    status: 'done',
  },
  {
    id: 4,
    title: 'Video shoot for upcoming movie trailer',
    date: '15 May',
    members: ['Tom Cruise', 'Meryl Streep'],
    estimate: 4,
    category: ['Development', 'UI/UX'],
    status: 'done',
  },
  {
    id: 5,
    title: 'Design new logo for company rebranding',
    date: '1 July',
    members: ['Jessica Alba', 'Ibrahimovic'],
    estimate: 1,
    category: ['UI/UX', 'Marketing'],
    status: 'doing',
  },
  {
    id: 6,
    title: 'Create user interface for new software',
    date: '9 August',
    members: ['Elon Musk', 'Emma Stone'],
    estimate: 2,
    category: ['QA', 'UI/UX'],
    status: 'review',
  },
  {
    id: 7,
    title: 'Copywriting for new product landing page',
    date: '21 September',
    members: ['Liam Neeson', 'Oprah Winfrey'],
    estimate: 1,
    category: ['Development', 'Marketing'],
    status: 'todo',
  },
  {
    id: 8,
    title: 'Design packaging for new product line',
    date: '7 November',
    members: ['Jennifer Aniston', 'Hugh Jackman'],
    estimate: 3,
    category: ['Design'],
    status: 'backlog',
  },
  {
    id: 9,
    title: 'Create illustrations for new children’s book',
    date: '12 December',
    members: ['Daniel Radcliffe', 'Saoirse Ronan'],
    estimate: 4,
    category: ['QA', 'Marketing'],
    status: 'backlog',
  },
  {
    id: 10,
    title: 'Create 3D models for new video game',
    date: '17 January',
    members: ['Emma Watson', 'Zac Efron'],
    estimate: 6,
    category: ['Design'],
    status: 'review',
  },
  {
    id: 11,
    title: 'Create marketing campaign for new food product',
    date: '28 February',
    members: ['Gordon Ramsay', 'Padma Lakshmi'],
    estimate: 2,
    category: ['Marketing', 'QA'],
    status: 'done',
  },
  {
    id: 12,
    title: 'Implement automated testing for backend services',
    date: 'March 15',
    members: ['John Smith', 'Jane Doe'],
    estimate: 3,
    category: ['QA', 'Development'],
    status: 'todo',
  },
  {
    id: 13,
    title: 'Design user interface for new mobile app',
    date: 'April 1',
    members: ['Sarah Lee', 'David Kim'],
    estimate: 5,
    category: ['UI/UX', 'Development'],
    status: 'doing',
  },

  {
    id: 14,
    title: 'Launch email marketing campaign for new product line',
    date: 'May 10',
    members: ['Tom Jones', 'Samantha Brown'],
    estimate: 2,
    category: ['Marketing'],
    status: 'todo',
  },
  {
    id: 15,
    title: 'Migrate web app to cloud-based infrastructure',
    date: 'June 1',
    members: ['Michael Chang', 'Lisa Park'],
    estimate: 7,
    category: ['Development'],
    status: 'doing',
  },
  {
    id: 16,
    title: 'Revise website copy for improved SEO',
    date: 'July 1',
    members: ['Jessica Lee', 'Brian Kim'],
    estimate: 2,
    category: ['Marketing'],
    status: 'todo',
  },
  {
    id: 17,
    title: 'Implement new payment gateway for e-commerce site',
    date: 'August 15',
    members: ['David Park', 'Karen Lee'],
    estimate: 4,
    category: ['Development'],
    status: 'doing',
  },
  {
    id: 18,
    title: 'Create new onboarding process for new hires',
    date: 'September 1',
    members: ['Kim Lee', 'Jake Kim'],
    estimate: 3,
    category: ['UI/UX', 'Development'],
    status: 'doing',
  },
  {
    id: 19,
    title: 'Perform security audit on server infrastructure',
    date: 'October 1',
    members: ['Steve Lee', 'Sophia Kim'],
    estimate: 5,
    category: ['QA', 'Development'],
    status: 'todo',
  },
  {
    id: 20,
    title: 'Develop new feature for mobile app',
    date: 'November 15',
    members: ['Sung Lee', 'Daniel Kim'],
    estimate: 6,
    category: ['Development'],
    status: 'doing',
  },
  {
    id: 21,
    title: 'Create new landing page for product launch',
    date: 'December 1',
    members: ['Jenny Lee', 'Peter Kim'],
    estimate: 2,
    category: ['UI/UX', 'Marketing'],
    status: 'todo',
  },
];

export const Boards = () => {
  const [tasks, setTasks] = React.useState(TASKS);

  const done = tasks.filter((task) => task.status === 'done');
  const todo = tasks.filter((task) => task.status === 'todo');
  const review = tasks.filter((task) => task.status === 'review');
  const backlog = tasks.filter((task) => task.status === 'backlog');
  const inProgress = tasks.filter((task) => task.status === 'doing');

  return (
    <DndContext>
      <div className="scrollbar-hide h-full w-full overflow-x-auto">
        <div className="flex h-full w-full gap-4">
          <TaskList title="Backlog" tasks={backlog} />
          <TaskList title="To Do" tasks={todo} />
          <TaskList title="In Progress" tasks={inProgress} />
          <TaskList title="Review" tasks={review} />
          <TaskList title="Done" tasks={done} />
        </div>
      </div>
    </DndContext>
  );
};
