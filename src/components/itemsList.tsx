
import { Button } from "./button";
import type { Items, ReactSetState } from "../../types/utlis";

type ItemList = {
    items: Items[];
    setItems: ReactSetState<Items[]>;
}

export const ItemList = ({ items, setItems }: ItemList) => {
    const handleDelete = (id: string) => {
        setItems(prev => prev.filter(data => data.id !== id));
    }

    const handleToggleComplete = (id: string) => {
        setItems(prev =>
            prev.map(item =>
                item.id === id ? { ...item, completed: !item.completed } : item
            )
        );
    };

    if (items.length === 0) {
        return (
            <div className="text-center py-12">
                <div className="text-gray-500 text-6xl mb-4">📝</div>
                <p className="text-gray-400 text-lg">No tasks yet. Add one above!</p>
            </div>
        );
    }

    return (
        <div className="space-y-3">
            {items.map((data) => (
                <div 
                    key={data.id} 
                    className={`flex justify-between items-center p-4 rounded-xl border-2 transition-all duration-300 transform hover:scale-[1.02] ${
                        data.completed 
                            ? 'bg-gray-800 border-gray-700 opacity-75' 
                            : 'bg-gray-900 border-gray-600 shadow-lg'
                    }`}
                >
                    <div className="flex items-center gap-4 flex-1">
                        <div className="relative">
                            <input
                                type="checkbox"
                                checked={data.completed}
                                onChange={() => handleToggleComplete(data.id)}
                                className="w-6 h-6 rounded-full border-2 border-gray-400 bg-gray-800 
                                         checked:bg-cyan-500 checked:border-cyan-500 
                                         focus:ring-2 focus:ring-cyan-500 focus:ring-opacity-50
                                         transition-all duration-300 cursor-pointer"
                            />
                        </div>
                        <p className={`text-lg flex-1 text-left transition-all duration-300 ${
                            data.completed 
                                ? "line-through text-gray-500" 
                                : "text-white"
                        }`}>
                            {data.title}
                        </p>
                    </div>
                    <Button 
                        onClick={() => handleDelete(data.id)} 
                        variant="danger"
                        className="p-2 rounded-lg"
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                            <path d="M3 6h18"></path>
                            <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path>
                            <path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path>
                        </svg>
                    </Button>
                </div>
            ))}
        </div>
    );
}