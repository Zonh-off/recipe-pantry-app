'use client';

import { motion } from 'framer-motion';
import { useMemo, useState } from 'react';

const FADE_UP = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const mockItems = [
  { id: '1', name: 'Eggs', amount: 12, unit: 'pcs' },
  { id: '2', name: 'Flour', amount: 2, unit: 'kg' },
  { id: '3', name: 'Milk', amount: 1, unit: 'L' },
  { id: '4', name: 'Tomato', amount: 5, unit: 'pcs' },
];

export default function PantryPage() {
  const [items, setItems] = useState(mockItems);
  const [ingredient, setIngredient] = useState("");

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    if (!ingredient) return;
    setItems([{ id: Date.now().toString(), name: ingredient, amount: 1, unit: 'pcs' }, ...items]);
    setIngredient("");
  };

  return (
    <div className="max-w-7xl mx-auto px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 mt-12 items-start">

        {/* LEFT: Management Form */}
        <motion.div
          className="lg:col-span-5 glass p-10 rounded-3xl sticky top-32 group hover:border-primary/20 transition-colors duration-500"
          initial="hidden"
          animate="visible"
          variants={FADE_UP}
        >
          <div className="mb-10">
            <h2 className="text-4xl font-extrabold text-foreground tracking-tight mb-2">
              Pantry<span className="text-primary italic font-serif">Manager</span>
            </h2>
            <p className="text-foreground/50 text-lg leading-relaxed">
              Add the ingredients you have at home to get personalized recipe suggestions.
            </p>
          </div>

          <form onSubmit={handleAdd} className="space-y-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Ex. Organic Spinach"
                value={ingredient}
                onChange={(e) => setIngredient(e.target.value)}
                className="w-full h-16 bg-surface/50 border border-white/10 rounded-2xl px-6 
                           text-foreground placeholder:text-foreground/30 focus:outline-none 
                           focus:border-primary/50 transition-all text-xl font-medium"
              />
              <div className="absolute right-4 top-4 text-foreground/40 text-sm">
                Press Enter ↵
              </div>
            </div>

            <div className="flex gap-4">
              <button type="submit" className="btn-primary flex-1 group relative overflow-hidden">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Add Ingredient
                </span>
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-primary-600 opacity-0 group-hover:opacity-100 transition-opacity" />
              </button>
            </div>
          </form>

          <div className="mt-10 p-6 bg-primary/5 rounded-2xl border border-primary/10">
            <p className="text-sm font-bold text-primary mb-4 uppercase tracking-widest">
              Quick Tip
            </p>
            <p className="text-sm text-foreground/70 leading-relaxed italic">
              "Keeping your pantry updated helps us find the most cost-effective and delicious recipes for your week."
            </p>
          </div>
        </motion.div>

        {/* RIGHT: Items Grid */}
        <div className="lg:col-span-7">
          <motion.div
            className="flex justify-between items-center mb-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
          >
            <h3 className="text-3xl font-bold">Your <span className="text-primary">Stash</span></h3>
            <span className="bg-primary/20 text-primary px-4 py-1.5 rounded-full text-sm font-black border border-primary/20">
              {items.length} Items Total
            </span>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pb-20">
            {items.map((item, idx) => (
              <motion.div
                key={item.id}
                className="glass p-8 rounded-3xl hover:translate-y-[-8px] transition-all duration-300 relative overflow-hidden group border-white/5"
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: idx * 0.05 + 0.5 }}
              >
                <div className="flex justify-between items-start relative z-10">
                  <div>
                    <h4 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-colors">
                      {item.name}
                    </h4>
                    <div className="flex items-center gap-2">
                      <span className="text-4xl font-extrabold text-foreground tracking-tighter">
                        {item.amount}
                      </span>
                      <span className="text-foreground/40 font-bold uppercase text-xs tracking-tighter mt-3 underline decoration-primary/50 underline-offset-4">
                        {item.unit}
                      </span>
                    </div>
                  </div>
                  <button
                    onClick={() => setItems(items.filter(i => i.id !== item.id))}
                    className="p-3 bg-white/5 rounded-xl hover:bg-accent hover:text-white transition-all scale-0 group-hover:scale-100"
                  >
                    ×
                  </button>
                </div>

                {/* Decorative background shape */}
                <div className="absolute -right-4 -bottom-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/15 transition-all" />
              </motion.div>
            ))}

            {items.length === 0 && (
              <div className="col-span-2 py-20 text-center glass rounded-3xl border-dashed border-white/10">
                <p className="text-foreground/40 text-xl italic mb-6">Your pantry is empty and waiting...</p>
                <button className="btn-secondary">Suggest Basics</button>
              </div>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
