import { Action, action } from "easy-peasy";

export interface LoadingModel {
    loading: boolean;
    setLoading: Action<LoadingModel, boolean>;
}

const loadingState: LoadingModel = {
    loading: false,
    setLoading: action((state, payload) => {
        state.loading = payload;
    }),
};

export default loadingState;
