export type TaskItem = {
  key?: string | undefined;
  id?: string | undefined;
  description: string;
  time: string;
  type: string;
};

export type TaskForm = {
  id?: string | undefined;
  hours: string;
  minutes: string;
  description: string;
  hoursHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  minutesHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  descriptionHandler: (event: React.FocusEvent<HTMLInputElement>) => void;
  type: string;
  hideFormHandler: () => void;
  resetInputs: () => void;
};
export type SendUpdateTask = {
  time: string;
  description: string;
  date: string;
  id?: string | null;
};
