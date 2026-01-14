import { cn } from "../lib/utils";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "./ui/accordion";

interface AccordionTab {
	id?: string;
	title: React.ReactNode;
	content: React.ReactNode;
}

interface AccordionTabsProps extends React.ComponentProps<typeof Accordion> {
	tabs: AccordionTab[];

	itemClassName?: string;
	triggerClassName?: string;
	contentClassName?: string;

	triggerProps?: Omit<
		React.ComponentProps<typeof AccordionTrigger>,
		"className" | "children"
	>;
	contentProps?: Omit<
		React.ComponentProps<typeof AccordionContent>,
		"className" | "children"
	>;
	itemProps?: Omit<
		React.ComponentProps<typeof AccordionItem>,
		"className" | "children" | "value"
	>;
}

export function AccordionTabs({
	tabs,
	itemClassName,
	triggerClassName,
	contentClassName,
	triggerProps,
	contentProps,
	itemProps,
	...props
}: AccordionTabsProps) {
	return (
		<Accordion {...props}>
			{tabs.map((tab) => (
				<AccordionItem
					className={cn(
						"rounded-md border bg-background px-4 py-1 outline-none last:border-b has-focus-visible:border-ring has-focus-visible:ring-[3px] has-focus-visible:ring-ring/50",
						itemClassName,
					)}
					key={tab.id ?? String(tab.title)}
					value={tab.id ?? String(tab.title)}
					{...itemProps}
				>
					<AccordionTrigger
						className={cn(
							"justify-start gap-3 py-2 text-[15px] leading-6 hover:no-underline focus-visible:ring-0 [&>svg]:-order-1",
							triggerClassName,
						)}
						{...triggerProps}
					>
						{tab.title}
					</AccordionTrigger>
					<AccordionContent
						className={cn("ps-7 pb-2 text-muted-foreground", contentClassName)}
						{...contentProps}
					>
						{tab.content}
					</AccordionContent>
				</AccordionItem>
			))}
		</Accordion>
	);
}
