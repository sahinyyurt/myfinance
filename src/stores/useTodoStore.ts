import { create } from 'zustand';

interface ITodoStore {
	categories: ICategory[];
	tasks: ITask[];
	addCat: (cat: ICategory) => void;
}

const useTodoStore = create<ITodoStore>()((set, get) => ({
	categories: [
		{
			color: { code: 'white', id: '1', name: 'white' },
			id: '1',
			name: 'Test Cat1',
		},
		{
			color: { code: 'white', id: '1', name: 'white' },
			id: '2',
			name: 'Test Cat2',
		},
		{
			color: { code: 'gray', id: '1', name: 'white' },
			id: '3',
			name: 'Test Cat3',
		},
		{
			color: { code: 'red', id: '1', name: 'white' },
			id: '4',
			name: 'Test Cat4',
		},
	],
	tasks: [
		{
			categoryId: '1',
			completed: false,
			id: '1',
			name: 'Test Task',
		},
	],
	addCat: cat => {
		set(state => ({
			...state,
			categories: [cat, ...state.categories],
		}));
	},
}));

export default useTodoStore;
