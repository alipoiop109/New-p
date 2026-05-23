import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const formSchema = z.object({
  name: z.string().optional(),
  region: z.string().min(1, { message: "الرجاء اختيار المنطقة" }),
  neighborhood: z.string().min(2, { message: "الرجاء كتابة اسم الحي" }),
  projectType: z.string().min(2, { message: "الرجاء كتابة نوع المشروع" }),
});

export default function WhatsAppForm() {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      name: "",
      region: "",
      neighborhood: "",
      projectType: "",
    },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    const phoneNumber = "966548152218";
    
    let message = "";
    if (values.name && values.name.trim() !== "") {
      message = `مرحباً، أنا ${values.name}، أود الاستفسار\n\nالمنطقة: ${values.region}\nالحي: ${values.neighborhood}\nنوع المشروع: ${values.projectType}`;
    } else {
      message = `مرحباً، أود الاستفسار\n\nالمنطقة: ${values.region}\nالحي: ${values.neighborhood}\nنوع المشروع: ${values.projectType}`;
    }

    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodedMessage}`;
    
    window.open(whatsappUrl, "_blank");
  }

  return (
    <section id="contact" className="py-24 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-card p-8 md:p-12 rounded-3xl shadow-xl border border-border"
          >
            <div className="text-center mb-10 space-y-4">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                هل تريد استفسار؟
              </h2>
              <p className="text-muted-foreground text-lg">
                املأ النموذج وسنتواصل معك عبر الواتساب للرد على كافة استفساراتك.
              </p>
            </div>

            <Form {...form}>
              <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                <FormField
                  control={form.control}
                  name="name"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">الاسم</FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="اسمك (اختياري)" 
                          className="h-14 text-base bg-background" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <FormField
                    control={form.control}
                    name="region"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">المنطقة <span className="text-destructive">*</span></FormLabel>
                        <Select onValueChange={field.onChange} defaultValue={field.value} dir="rtl">
                          <FormControl>
                            <SelectTrigger className="h-14 text-base bg-background">
                              <SelectValue placeholder="اختر المنطقة" />
                            </SelectTrigger>
                          </FormControl>
                          <SelectContent>
                            <SelectItem value="جدة">جدة</SelectItem>
                            <SelectItem value="مكة">مكة</SelectItem>
                            <SelectItem value="الطائف">الطائف</SelectItem>
                          </SelectContent>
                        </Select>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <FormField
                    control={form.control}
                    name="neighborhood"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel className="text-base font-medium">الحي <span className="text-destructive">*</span></FormLabel>
                        <FormControl>
                          <Input 
                            placeholder="اكتب اسم الحي" 
                            className="h-14 text-base bg-background" 
                            {...field} 
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />
                </div>

                <FormField
                  control={form.control}
                  name="projectType"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel className="text-base font-medium">نوع المشروع <span className="text-destructive">*</span></FormLabel>
                      <FormControl>
                        <Input 
                          placeholder="مثال: فيلا، شقة، مكتب، محل..." 
                          className="h-14 text-base bg-background" 
                          {...field} 
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <Button 
                  type="submit" 
                  size="lg" 
                  className="w-full h-14 mt-4 text-lg font-bold rounded-xl"
                >
                  تواصل عبر واتساب
                </Button>
              </form>
            </Form>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
