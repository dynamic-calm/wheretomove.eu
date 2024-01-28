import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { IDS } from "@/config";
import { toast } from "@/components/ui/use-toast";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";

const FormSchema = z.object({
  items: z.array(z.string()).refine((value) => value.length > 0, {
    message: "You have to select at least one items",
  }),
});

export function CheckBoxForm({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Map<string, string>;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [IDS.SALARY],
    },
  });

  function onSubmit({ items }: z.infer<typeof FormSchema>) {
    toast({
      title: "You submitted the following values:",
      description: (
        <pre className="mt-2 w-[340px] rounded-md bg-neutral-900 p-4">
          <code className="text-white">{JSON.stringify(items, null, 2)}</code>
        </pre>
      ),
    });

    const params = new URLSearchParams(items.map((item) => ["dataIds", item]));
    router.push(`/result?${params.toString()}`);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormField
          control={form.control}
          name="items"
          render={() => (
            <FormItem>
              <div className="mb-4">
                <FormLabel className="text-base">{title}</FormLabel>
                <FormDescription>{description}</FormDescription>
              </div>
              {[...items.entries()].map(([id, label]) => (
                <FormField
                  key={id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={id}
                        className="flex flex-row items-start space-x-3 space-y-0"
                      >
                        <FormControl>
                          <Checkbox
                            checked={field.value?.includes(id)}
                            onCheckedChange={(checked) => {
                              return checked
                                ? field.onChange([...field.value, id])
                                : field.onChange(
                                    field.value?.filter(
                                      (value) => value !== id,
                                    ),
                                  );
                            }}
                          />
                        </FormControl>
                        <FormLabel className="text-sm font-normal">
                          {label}
                        </FormLabel>
                      </FormItem>
                    );
                  }}
                />
              ))}
              <FormMessage />
            </FormItem>
          )}
        />
        <Button type="submit">Submit</Button>
      </form>
    </Form>
  );
}
