import { Action, action, createStore, persist } from "easy-peasy";
import authState, { AuthModel } from "./auth.state";
import loadingState, { LoadingModel } from "./loading.state";

export interface StoreModel {
  authState: AuthModel;
  loadingState: LoadingModel;
  reset: Action<StoreModel>;
}

const importState: Omit<StoreModel, "reset"> = {
  authState,
  loadingState,
};

// Lưu giá trị ban đầu để reset
const initialStates = { ...importState };

const store = createStore<StoreModel>(
  persist(
    {
      ...importState,
      reset: action((state) => {
        (Object.keys(initialStates) as (keyof typeof initialStates)[]).forEach(
          (key) => {
            // reset từng slice về giá trị gốc
            // @ts-expect-error vì TypeScript không biết key động ở đây
            state[key] = { ...initialStates[key] };
          }
        );
      }),
    },
    {
      allow: ["authState"], // chỉ persist authState
    }
  )
);

export default store;
