"use client";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import {
    PageContainer,
    AppButton,
    AppInput,
    AppCard,
    AppCardContent,
    SectionHeader,
    Chip
} from "@/shared/components/ui";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
    User,
    ShieldAlert,
    Heart,
    Activity,
    Save,
    CheckCircle2,
    AlertCircle
} from "lucide-react";
import { useState } from "react";
import { cn } from "@/lib/utils";

const profileSchema = z.object({
    diet: z.string().optional(),
    intolerances: z.array(z.string()).default([]),
    cuisines: z.array(z.string()).default([]),
    goals: z.object({
        calories: z.string().optional(),
        protein: z.string().optional(),
        carbs: z.string().optional(),
        fat: z.string().optional(),
    }),
});

type ProfileFormValues = z.infer<typeof profileSchema>;

const DIETS = ["Vegetarian", "Vegan", "Pescetarian", "Paleo", "Ketogenic", "Primal", "Whole30", "Gluten Free"];
const INTOLERANCES = ["Dairy", "Egg", "Gluten", "Peanut", "Seafood", "Sesame", "Shellfish", "Soy", "Sulfite", "Tree Nut", "Wheat"];
const CUISINES = ["Italian", "Mexican", "Asian", "Mediterranean", "American", "French", "Indian", "Greek", "Middle Eastern"];

export default function ProfilePage() {
    const [success, setSuccess] = useState(false);

    const form = useForm<ProfileFormValues>({
        resolver: zodResolver(profileSchema) as any,
        defaultValues: {
            diet: "Vegetarian",
            intolerances: ["Peanut"],
            cuisines: ["Italian", "Asian"],
            goals: {
                calories: "2000",
                protein: "100",
                carbs: "250",
                fat: "70",
            },
        },
    });

    const onSubmit = (data: ProfileFormValues) => {
        console.log("Profile updated:", data);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 3000);
    };

    const toggleArrayItem = (fieldName: "intolerances" | "cuisines", item: string) => {
        const current = form.getValues(fieldName);
        const updated = current.includes(item)
            ? current.filter(i => i !== item)
            : [...current, item];
        form.setValue(fieldName, updated, { shouldDirty: true });
    };

    return (
        <PageContainer
            title="My Preferences"
            subtitle="Customize your experience and filter results to match your needs."
            action={
                <div className="flex items-center gap-3">
                    {success && (
                        <div className="flex items-center gap-2 text-green-600 font-bold text-sm animate-in fade-in slide-in-from-right-2">
                            <CheckCircle2 className="h-4 w-4" />
                            Saved Successfully
                        </div>
                    )}
                    <AppButton
                        onClick={form.handleSubmit(onSubmit)}
                        disabled={!form.formState.isDirty}
                        className="shadow-lg shadow-green-600/20"
                    >
                        <Save className="h-4 w-4 mr-2" />
                        Save Changes
                    </AppButton>
                </div>
            }
        >
            <div className="max-w-4xl mx-auto">
                <Tabs defaultValue="diet" className="space-y-8">
                    <TabsList className="bg-slate-100 p-1 rounded-2xl w-full sm:w-auto h-auto grid grid-cols-2 sm:flex">
                        <TabsTrigger
                            value="diet"
                            className="rounded-xl px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all"
                        >
                            <Heart className="h-4 w-4 mr-2" />
                            Diet & Allergies
                        </TabsTrigger>
                        <TabsTrigger
                            value="nutrition"
                            className="rounded-xl px-6 py-2.5 text-xs font-bold data-[state=active]:bg-white data-[state=active]:text-green-700 data-[state=active]:shadow-sm transition-all"
                        >
                            <Activity className="h-4 w-4 mr-2" />
                            Health Goals
                        </TabsTrigger>
                    </TabsList>

                    <TabsContent value="diet" className="space-y-8 animate-in fade-in duration-300">
                        {/* Diet Selection */}
                        <section className="space-y-6">
                            <SectionHeader
                                title="Dietary Preference"
                                subtitle="Choose a diet that matches your lifestyle."
                            />
                            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                                {DIETS.map((diet) => (
                                    <button
                                        key={diet}
                                        type="button"
                                        onClick={() => form.setValue("diet", diet, { shouldDirty: true })}
                                        className={cn(
                                            "p-4 rounded-2xl border text-center transition-all",
                                            form.watch("diet") === diet
                                                ? "bg-green-50 border-green-200 ring-1 ring-green-200"
                                                : "bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                                        )}
                                    >
                                        <span className={cn(
                                            "text-sm font-bold",
                                            form.watch("diet") === diet ? "text-green-700" : "text-slate-600"
                                        )}>
                                            {diet}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </section>

                        {/* Intolerances */}
                        <section className="space-y-6">
                            <SectionHeader
                                title="Allergies & Intolerances"
                                subtitle="Recipes with these ingredients will be hidden or flagged."
                            />
                            <div className="flex flex-wrap gap-2">
                                {INTOLERANCES.map((item) => (
                                    <Chip
                                        key={item}
                                        color="rose"
                                        selected={form.watch("intolerances").includes(item)}
                                        onClick={() => toggleArrayItem("intolerances", item)}
                                        interactive
                                        className="py-2 px-4"
                                    >
                                        {item}
                                    </Chip>
                                ))}
                            </div>
                            <div className="bg-rose-50 rounded-2xl p-4 border border-rose-100 flex gap-3">
                                <ShieldAlert className="h-5 w-5 text-rose-500 shrink-0" />
                                <p className="text-xs text-rose-700 font-medium leading-relaxed">
                                    Note: While we filter recipes based on your allergies, always check the actual ingredients before cooking as safety is paramount.
                                </p>
                            </div>
                        </section>

                        {/* Favorite Cuisines */}
                        <section className="space-y-6">
                            <SectionHeader
                                title="Favorite Cuisines"
                                subtitle="Help us personalize your recommendations."
                            />
                            <div className="flex flex-wrap gap-2">
                                {CUISINES.map((cuisine) => (
                                    <Chip
                                        key={cuisine}
                                        color="sky"
                                        selected={form.watch("cuisines").includes(cuisine)}
                                        onClick={() => toggleArrayItem("cuisines", cuisine)}
                                        interactive
                                        className="py-2 px-4"
                                    >
                                        {cuisine}
                                    </Chip>
                                ))}
                            </div>
                        </section>
                    </TabsContent>

                    <TabsContent value="nutrition" className="space-y-8 animate-in fade-in duration-300">
                        <section className="space-y-6">
                            <SectionHeader
                                title="Nutrition Goals"
                                subtitle="Set daily targets for our recipe analysis (per serving)."
                            />

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <AppCard className="border-slate-200">
                                    <AppCardContent className="p-6 space-y-4">
                                        <AppInput
                                            label="Max Calories (kcal)"
                                            placeholder="2000"
                                            {...form.register("goals.calories")}
                                            icon={<Activity className="h-4 w-4 text-slate-400" />}
                                        />
                                        <AppInput
                                            label="Target Protein (g)"
                                            placeholder="100"
                                            {...form.register("goals.protein")}
                                        />
                                    </AppCardContent>
                                </AppCard>

                                <AppCard className="border-slate-200">
                                    <AppCardContent className="p-6 space-y-4">
                                        <AppInput
                                            label="Max Carbohydrates (g)"
                                            placeholder="250"
                                            {...form.register("goals.carbs")}
                                        />
                                        <AppInput
                                            label="Max Fats (g)"
                                            placeholder="70"
                                            {...form.register("goals.fat")}
                                        />
                                    </AppCardContent>
                                </AppCard>
                            </div>

                            <div className="bg-amber-50 rounded-2xl p-4 border border-amber-100 flex gap-3">
                                <AlertCircle className="h-5 w-5 text-amber-500 shrink-0" />
                                <p className="text-xs text-amber-700 font-medium leading-relaxed">
                                    Goals help us highlight recipes that fit your plan. They don't restrict your searches but add markers to matching recipes.
                                </p>
                            </div>
                        </section>
                    </TabsContent>
                </Tabs>
            </div>
        </PageContainer>
    );
}
