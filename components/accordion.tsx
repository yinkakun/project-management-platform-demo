import * as React from 'react';
import { FiChevronDown } from 'react-icons/fi';
import * as AccordionPrimitive from '@radix-ui/react-accordion';

export const Accordion = AccordionPrimitive.Root;

type AccordionItemProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Item
>;

type AccordionItemRef = React.ForwardedRef<HTMLDivElement>;

export const AccordionItem = React.forwardRef(
  ({ className, ...props }: AccordionItemProps, ref: AccordionItemRef) => (
    <AccordionPrimitive.Item ref={ref} className={`${className}`} {...props} />
  ),
);
AccordionItem.displayName = 'AccordionItem';

type AccordionTriggerProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Trigger
>;

type AccordionTriggerRef = React.ForwardedRef<HTMLButtonElement>;

export const AccordionTrigger = React.forwardRef(
  (
    { className, children, ...props }: AccordionTriggerProps,
    ref: AccordionTriggerRef,
  ) => (
    <AccordionPrimitive.Header className="flex">
      <AccordionPrimitive.Trigger
        ref={ref}
        className={`flex flex-1 items-center justify-between py-4 transition-all duration-300 [&[data-state=open]>svg]:rotate-180 ${className}`}
        {...props}
      >
        {children}
        <FiChevronDown className="h-4 w-4 transition-transform duration-300" />
      </AccordionPrimitive.Trigger>
    </AccordionPrimitive.Header>
  ),
);
AccordionTrigger.displayName = AccordionPrimitive.Trigger.displayName;

type AccordionContentProps = React.ComponentPropsWithoutRef<
  typeof AccordionPrimitive.Content
>;

type AccordionContentRef = React.ForwardedRef<HTMLDivElement>;

export const AccordionContent = React.forwardRef(
  (
    { className, children, ...props }: AccordionContentProps,
    ref: AccordionContentRef,
  ) => (
    <AccordionPrimitive.Content
      ref={ref}
      className={`overflow-hidden text-sm transition-all data-[state=open]:animate-accordion-down data-[state=closed]:animate-accordion-up ${className}`}
      {...props}
    >
      <div className="pt-0 pb-4">{children}</div>
    </AccordionPrimitive.Content>
  ),
);
AccordionContent.displayName = AccordionPrimitive.Content.displayName;
