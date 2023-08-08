import { AuthSchema } from "store/auth/types/authSchema";
import { CounterSchema } from "store/counter/types/counterSchema";
import { UserSchema } from "store/user/types/user";

export interface StateSchema {
    counter: CounterSchema;
    user: UserSchema;
    auth: AuthSchema;
}
