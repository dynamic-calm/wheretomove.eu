import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";
import { z } from "zod";

import { IDS, type Ids, type Config } from "@/config";
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
  items: z.array(z.string()).refine((value) => value.length > 1, {
    message: "You have to select at least two items",
  }),
});

export function CheckBoxForm({
  title,
  description,
  items,
}: {
  title: string;
  description: string;
  items: Record<Ids, Config>;
}) {
  const router = useRouter();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      items: [IDS.SALARY],
    },
  });

  function onSubmit({ items }: z.infer<typeof FormSchema>) {
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
                <FormLabel className="text-2xl">{title}</FormLabel>
                <FormDescription className="text-lg">
                  {description}
                </FormDescription>
              </div>
              {Object.entries(items).map(([id, { checkBoxDescription }]) => (
                <FormField
                  key={id}
                  control={form.control}
                  name="items"
                  render={({ field }) => {
                    return (
                      <FormItem
                        key={id}
                        className="flex flex-row items-center space-x-3 space-y-0"
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
                        <FormLabel className="text-base">
                          {checkBoxDescription}
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
