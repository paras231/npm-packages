interface ReducerParams {
  name: string;
  initialState: any;
  reducers: {};
}

export const createReducer = ({
  name,
  initialState,
  reducers,
}: ReducerParams) => {
  return {
    name,
    initialState,
    reducers,
  };
};
