// App.tsx
import React, { useState } from 'react';
import './App.css'
import ImageHeader from './components/imageheader';
import { Input } from './components/input';
import { Button } from './components/button';
import type { Items } from '../types/utlis';
import { ItemList } from './components/itemsList';

function App() {
   const [items, setItems] = useState<Items[]>([]);
   const [inputValue, setInputValue] = useState<string>("");

   const handleSummit = (event: React.FormEvent) => {
      event.preventDefault();

      if (inputValue.trim() === "") {
         alert("Please enter a task before adding");
         return;
      }

      setItems((prev) => [...prev, { 
         title: inputValue, 
         id: Date.now().toString(), 
         completed: false 
      }]);
      setInputValue("");
   };

   const completedCount = items.filter(item => item.completed).length;
   const totalCount = items.length;

   return (
      <div className='min-h-screen flex flex-col justify-center items-center bg-gradient-to-br from-gray-900 to-gray-800 p-4'>
         <div className='max-w-md w-full'>
            <ImageHeader />
            
            {/* Stats */}
            {items.length > 0 && (
               <div className="flex justify-between items-center mb-6 p-4 bg-gray-800 rounded-xl shadow-lg">
                  <div className="text-center">
                     <div className="text-2xl font-bold text-cyan-400">{totalCount}</div>
                     <div className="text-gray-400 text-sm">Total</div>
                  </div>
                  <div className="text-center">
                     <div className="text-2xl font-bold text-green-400">{completedCount}</div>
                     <div className="text-gray-400 text-sm">Completed</div>
                  </div>
                  <div className="text-center">
                     <div className="text-2xl font-bold text-orange-400">{totalCount - completedCount}</div>
                     <div className="text-gray-400 text-sm">Pending</div>
                  </div>
               </div>
            )}

            <div className='bg-gray-800 rounded-2xl p-6 shadow-2xl border border-gray-700'>
               <form className='mb-6' onSubmit={handleSummit}>
                  <Input type="text" inputValue={inputValue} setInputValue={setInputValue} />
                  <Button className='w-full py-3 text-lg font-semibold shadow-lg'>
                     <span className="flex items-center justify-center gap-2">
                        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                           <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                        </svg>
                        Add Task
                     </span>
                  </Button>
               </form>
               
               <div className={`max-h-96 overflow-y-auto custom-scrollbar ${
                  items.length > 0 ? 'pr-2' : ''
               }`}>
                  <ItemList items={items} setItems={setItems} />
               </div>
            </div>
            
            {/* Footer */}
            <div className="text-center mt-8 text-gray-500 text-sm">
               {items.length === 0 
                  ? "Start by adding your first task above!" 
                  : "Keep going! You're doing great!"}
            </div>
         </div>
      </div>
   );
}

export default App;