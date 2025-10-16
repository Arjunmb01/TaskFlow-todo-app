export type Items = {
    title : string;
    id :string;
    completed? :boolean;
}

export type ReactSetState<T> = React.Dispatch<React.SetStateAction<T>>;