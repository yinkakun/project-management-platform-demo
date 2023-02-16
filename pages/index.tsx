import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/tabs';
import { Boards } from '@/components/boards';

const Empty = () => {
  return <div className="lowercase opacity-60">Nothing to see here yet :(</div>;
};

const TABS = [
  { label: 'Overview', value: 'overview', content: Empty },
  { label: 'List', value: 'list', content: Empty },
  { label: 'Boards', value: 'boards', content: Boards },
  { label: 'Chronology', value: 'chronology', content: Empty },
  { label: 'Calendar', value: 'calendar', content: Empty },
  { label: 'Members', value: 'members', content: Empty },
  { label: 'Channels', value: 'channels', content: Empty },
  { label: 'Files', value: 'files', content: Empty },
];

const HomePage = () => {
  return (
    <div className="h-full">
      <Tabs defaultValue="boards" className=" flex h-full w-full flex-col">
        <TabsList className="sticky top-0 flex w-full items-start gap-4 border-b border-white border-opacity-10 bg-[#1F2125]  px-8">
          {TABS.map(({ value, label }) => {
            return (
              <TabsTrigger key={value} value={value}>
                <div className="flex items-center gap-2">
                  <span className="text-sm">{label}</span>
                </div>
              </TabsTrigger>
            );
          })}
        </TabsList>

        {TABS.map(({ value, content }) => {
          const Content = content;
          return (
            <TabsContent
              key={value}
              value={value}
              className="grow items-center justify-center"
            >
              <div className="flex h-full w-full items-center justify-center">
                <Content />
              </div>
            </TabsContent>
          );
        })}
      </Tabs>
    </div>
  );
};

export default HomePage;
