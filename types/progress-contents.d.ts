export interface KanbanBoard {
  id: number;
  title: string;
  tasks: KanbanBoardTask[];
}

export interface KanbanBoardTask {
  id: number;
  name: string;
  address: string;
  businessCategory: string;
  completed: boolean;
  daysLeft: number;
}

export interface KanbanBoardTaskMember {
  id: number;
  name: string;
  avatar: string;
}
