import { Country, Currency } from "../../../global/types/global";
import { fetchMovieList } from "../services/fetchMovieList/fetchMovieList";
import { MovieSchema } from "../types/movie";
import { movieReducer } from "./movieSlice";
const data = {
    username: "admin",
    age: 22,
    country: Country.Madagascar,
    lastname: "ulbi tv",
    first: "asd",
    city: "asf",
    currency: Currency.USD,
};
describe("movieSlice.test", () => {
    test("test set readonly", () => {
        const state: CustomDeepPartial<MovieSchema> = {
            /* readonly: false */
        };
        //  expect(movieReducer(state as MovieSchema, movieActions.setReadonly(true))).toEqual({ readonly: true });
    });
    test("test cancelEdit", () => {
        const state: CustomDeepPartial<MovieSchema> = {
            /* movie */
        };
        /*  expect(movieReducer(state as MovieSchema, movieActions.cancelEdit())).toEqual({
            readonly: true,
            validateErrors: undefined,
            data,
            form: data,
        }); */
    });
    test("test update movie", () => {
        const state: CustomDeepPartial<MovieSchema> = {
            /* form: { username: "123" } */
        };
        /*  expect(movieReducer(state as MovieSchema, movieActions.updatemovie({ username: "123" }))).toEqual({
            form: { username: "123" },
        }); */
    });
    test(" update movie service pending", () => {
        const state: CustomDeepPartial<MovieSchema> = {
            isLoading: false,
        };

        expect(movieReducer(state as MovieSchema, fetchMovieList.pending)).toEqual({
            validateErrors: undefined,
            isLoading: true,
        });
    });

    test(" update movie service fullfiled", () => {
        const state: CustomDeepPartial<MovieSchema> = {
            isLoading: true,
        };

        /* expect(movieReducer(state as MovieSchema, fetchMovieList.fulfilled(...state))).toEqual({
            isLoading: false,
            data,
            form: data,
            validateErrors: undefined,
            readonly: true,
        }); */
    });
});
