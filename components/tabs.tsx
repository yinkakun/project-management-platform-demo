import * as React from 'react';
import * as TabsPrimitive from '@radix-ui/react-tabs';

export const Tabs = TabsPrimitive.Root;

type TabsListProps = React.ComponentPropsWithoutRef<typeof TabsPrimitive.List>;
type TabsListRef = React.ForwardedRef<HTMLDivElement>;

export const TabsList = React.forwardRef(
  ({ className, ...props }: TabsListProps, ref: TabsListRef) => (
    <TabsPrimitive.List ref={ref} className={`${className}`} {...props} />
  ),
);
TabsList.displayName = TabsPrimitive.List.displayName;

type TabsTriggerProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Trigger
>;
type TabsTriggerRef = React.ForwardedRef<HTMLButtonElement>;

export const TabsTrigger = React.forwardRef(
  ({ className, ...props }: TabsTriggerProps, ref: TabsTriggerRef) => (
    <TabsPrimitive.Trigger
      className={`inline-flex items-center justify-center border-transparent pb-2  text-xs font-medium text-white text-opacity-70 transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 data-[state=active]:border-b data-[state=active]:border-purple-500 data-[state=active]:text-opacity-100 ${className}`}
      {...props}
      ref={ref}
    />
  ),
);
TabsTrigger.displayName = TabsPrimitive.Trigger.displayName;

type TabsContentProps = React.ComponentPropsWithoutRef<
  typeof TabsPrimitive.Content
>;
type TabsContentRef = React.ForwardedRef<HTMLDivElement>;

export const TabsContent = React.forwardRef(
  ({ className, ...props }: TabsContentProps, ref: TabsContentRef) => (
    <TabsPrimitive.Content
      className={`mt-2 p-6 ${className}}`}
      {...props}
      ref={ref}
    />
  ),
);
TabsContent.displayName = TabsPrimitive.Content.displayName;
