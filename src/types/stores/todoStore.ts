interface IColor {
	id: string;
	name: string;
	code: string;
}

interface ICategory {
	id: string;
	name: string;
	color: IColor;
	tasks?: ITask[];
}

interface ITask {
	id: string;
	categoryId: string;
	name: string;
	completed: boolean;
}
